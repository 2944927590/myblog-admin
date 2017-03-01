<template>
  <layout>
    <el-dialog title="编辑用户" v-model="editFormVisible">
      <el-form :model="editForm">
        <el-form-item label="用户名" label-width="100px">
          <el-input v-model="editForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" label-width="100px">
          <el-select v-model="editForm.address" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </layout>
</template>

<script>
  import Layout from '../../components/common/layout';
  import Search from '../../components/common/search';

  export default {
    name: 'index',
    components: {
      layout: Layout,
      search: Search
    },
    data () {
      return {
        fetchList: function() {},
        userRules: {
          user: [
            {max: 10, messasge: '最大长度是 10 个字符'}
          ]
        },
        userForm: {
          user: '1',
          role: ''
        },
        editFormVisible: false,
        editForm: {
          username: '',
          address: ''
        }
      }
    },

    methods: {
      handleEdit (index, row) {
        this.editFormVisible = true
        this.refresh()
      },
      handleDelete (index, row) {
        this.refresh()
      },
      handleCheck (val) {
      },
      refresh () {
        this.$refs.user.refresh()
      }
    }
  }
</script>
