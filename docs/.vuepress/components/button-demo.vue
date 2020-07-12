<template>
    <div>
        <h2>简单用法</h2>
        <h4>预览</h4>
        <g-button :loading="loading1" @click="loading1 = !loading1">
            按钮1
        </g-button>
        <g-button icon="settings" icon-position="left" :loading="loading2" @click="loading2 = !loading2">
            按钮2
        </g-button>
		<g-button icon="settings" icon-position="right" :loading="loading3" @click="loading3 = !loading3">
			按钮3
        </g-button>
        <g-button :loading="true">按钮4</g-button>
        <g-button disabled>按钮5</g-button>
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
        <h4>代码</h4>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
import ButtonGroup from '../../../src/button-group'
import Button from '../../../src/button'
export default {
    components:{
        'g-button': Button,
        'g-button-group':ButtonGroup,
    },
    data(){
        return{
            content:`
    <g-button :loading="loading1" @click="loading1 = !loading1"> 按钮1 </g-button>

    <g-button icon="settings" icon-position="left" :loading="loading2" 
    @click="loading2 = !loading2"> 按钮2 </g-button>

    <g-button icon="settings" icon-position="right" :loading="loading3" 
    @click="loading3 = !loading3"> 按钮3 </g-button>

    <g-button :loading="true"> 按钮4 </g-button>

    <g-button disabled> 按钮5 </g-button>

    <g-button-group>
        <g-button icon="left"> 上一页 </g-button>
        <g-button> 更多 </g-button>
        <g-button icon="right" icon-position="right"> 下一页 </g-button>
    </g-button-group>
            `,
            loading1:false,
            loading2:false,
            loading3:false,
        }
    }
}
</script>

