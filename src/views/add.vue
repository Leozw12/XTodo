<template>
    <el-form ref="form" :model="form" :rules="rules" label-width="180px">
        <el-form-item prop="name" label="事项名称:">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item prop="date" label="截止时间:">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
        </el-form-item>

        <el-form-item prop="type" label="事项类型:">
            <el-select v-model="form.type" placeholder="选择活动区域" style="width: 100%;">
                <el-option label="学习" value="学习"></el-option>
                <el-option label="工作" value="工作"></el-option>
                <el-option label="游戏" value="游戏"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item prop="urgent" label="是否优先:">
            <el-radio-group v-model="form.urgent">
                <el-radio :label="1">是</el-radio>
                <el-radio :label="0">否</el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item prop="content" label="事项详情:">
            <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">创建</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import { mapMutations } from "vuex"
    import { ADD_TODO } from "@/store/types"

    export default {
        data() {
            return {
                form: {
                    name: "",
                    content: "",
                    date: "",
                    urgent: 1,
                    type: ""
                },
                rules: {
                    name: [
                        {
                            type: "string",
                            required: true,
                            message: "请填写待办事项的名称"
                        }
                    ],
                    content: [
                        {
                            type: "string",
                            required: true,
                            message: "请填写待办事项的详情"
                        },
                        {
                            type: "string",
                            min: 20,
                            max: 50,
                            message: "长度限制为20-50个字符",
                            trigger: "blur"
                        }
                    ],
                    type: [
                        {
                            type: "string",
                            required: true,
                            message: "请填写待办事项的类型"
                        }
                    ]
                }
            }
        },
        methods: {
            ...mapMutations([ADD_TODO]),
            onSubmit() {
                this.$refs.form.validate(validate => {
                    if(validate) {
                        this.ADD_TODO({...this.form, isComplete: 0})
                        this.$message({
                            message: "添加成功",
                            type: "success"
                        })
                        this.$refs.form.resetFields()
                    }
                })
            },
            cancel() {
                this.$refs.form.resetFields()
            }
        }
    }
</script>
