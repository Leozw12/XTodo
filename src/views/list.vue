<template>
    <div>
        <el-table class="el-table" :data="todoList" border style="width: 100%;" :row-class-name="tableRowClassName">
            <el-table-column fixed prop="name" label="事项名称" width="150"></el-table-column>
            <el-table-column prop="date" label="截止时间" width="120"></el-table-column>
            <el-table-column prop="type" label="事项类型" width="120"></el-table-column>
            <el-table-column prop="urgent" label="是否优先" width="120">
                <template slot-scope="scope">
                    <span>{{ scope.row.urgent | urgentText }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="content" label="事项详情"></el-table-column>
            <el-table-column label="操作" width="160">
                <template slot-scope="scope">
                    <el-button @click="handleDelete(scope.$index)" type="danger" size="small">删除</el-button>
                    <el-button @click="handleComplete(scope.$index)" type="primary" size="small" :disabled="scope.row.isComplete === 1">完成</el-button>
                </template>
            </el-table-column>
        </el-table>
        <br />
        <div style="text-align: left;">
            总共：{{ todoList.length }}个任务。已完成{{ count(1) }}个任务。未完成{{ count(0) }}个任务。
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex"
    import {COMPLETE_TODO, DEL_TODO} from "@/store/types"

    export default {
        methods: {
            ...mapMutations([COMPLETE_TODO, DEL_TODO]),
            handleDelete(index) {
                this.DEL_TODO({ index })
            },
            handleComplete(index) {
                this.COMPLETE_TODO({ index })
            },
            tableRowClassName({ row }) {
                if(row.isComplete === 1) {
                    return "complete-row"
                }
                return ""
            }
        },
        computed: {
            ...mapGetters(["todoList", "count"])
        },
        filters: {
            urgentText(value) {
                if(value === 0) {
                    return "优先"
                }
                return "正常"
            }
        },
        data() {
            return {
                tableData: []
            }
        }
    }
</script>

<style>
    .el-table .complete-row {
        background: #f0f9eb;
    }
</style>
