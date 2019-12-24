const AWS = require('aws-sdk');
import WOCLOUDBucket from "./wocloudBucket";

let s3;

function init(param) {
    var ep = new AWS.Endpoint(param.endpoint);
    AWS.config = new AWS.Config({
        accessKeyId: param.access_key, secretAccessKey: param.secret_key, region: param.region, sslEnabled: false
    });
    s3 = new AWS.S3({apiVersion: '2006-03-01', endpoint: ep});
}

function getBuckets(callback) {
    s3.listBuckets().promise().then((data) => {
        data.Buckets.forEach((item, index) => {
            data.Buckets[index].name = data.Buckets[index].Name;
        });
        callback && callback(null, {datas: data.Buckets});
    }).catch((error) => {
        callback && callback(error);
    });
}

function generateBucket(name) {
    return new WOCLOUDBucket(name, s3);
}

export {init, getBuckets, generateBucket};
