<template>
    <div>
        <h2>简单用法</h2>
        <h4>预览</h4>
            <g-input value="中文" disabled></g-input>
			<g-input value="中文" readonly></g-input>
			<g-input value="中文"></g-input>
        <h4>代码:</h4>
        <pre>
            <code>{{content1}}</code>
        </pre>
        <h4>输入错误提示</h4>
            <g-input value="中文" error="输入有误"></g-input>
        <h4>代码:</h4>
        <pre>
            <code>{{content3}}</code>
        </pre>
        <h4>双向绑定</h4>
            <g-input v-model="message"></g-input>
			<p>message：{{message}}</p>
        <h4>代码:</h4>
        <pre>
            <code>{{content2}}</code>
        </pre>
    </div>
</template>

<script>
import Input from '../../../src/input'
import Icon from '../../../src/icon'
export default {
    components:{
        'g-input': Input,
        'icon': Icon
    },
    data(){
        return{
            content1:`
            <g-input value="中文" disabled></g-input>
            <g-input value="中文" readonly></g-input>
            <g-input value="中文"></g-input>`,
            message: '123',
            content2:`
            data:{
                message: '123'
            }

            <g-input v-model="message"></g-input>
            <p>
                message：{{message}}
            </p>`,
            content3:`
            <g-input value="中文" error="输入有误"></g-input>
            `
        }
    }
}
</script>

