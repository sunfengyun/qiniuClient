<template>
    <div>
         <el-dialog title="删除Bucket" v-if="dialogFormVisible" :visible.sync="dialogFormVisible">
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
                     dialogFormVisible:false
                     };
                },
               methods: {
                    showDialogForm(data){
                          this.dialogFormVisible = true;
                    },
                    cancelHandle(){
                         this.dialogFormVisible = false;
                    },
                    sureHandle(){
                         this.$emit('sureDeleteBucketHandle');
                         this.dialogFormVisible = false;
                    }

               }
    };
</script>