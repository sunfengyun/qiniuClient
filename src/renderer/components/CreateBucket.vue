<template>
    <div>
        <el-dialog title="创建文件夹" v-if="dialogFormVisible" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="新建Bucket名称:" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cancelHandle()">取 消</el-button>
            <el-button type="primary" @click="sureHandle">确 定</el-button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogFormVisible:false,
                form: {
                    name: ''
                },
                formLabelWidth: '120px'
            };
        },
        methods: {
            showDialogForm(){
                  this.dialogFormVisible = true;
            },
            cancelHandle(){
                 this.dialogFormVisible = false;
            },
            sureHandle(){
                 this.$emit('sureCreateBucketHandle',this.form.name);
                 this.dialogFormVisible = false;
            }

        }
    };
</script>
