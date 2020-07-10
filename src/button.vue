<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <g-icon v-if="icon" :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        // props: ['icon','iconPosition']//接收外部传参
        props:{
            icon:{},
            iconPosition:{
                type: String,
                default: 'left',
                validator(value){//属性检查器
                    if(value !=='left' && value !== 'right') {
                        return false;
                    }else{
                        return true;
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border:1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;//解决因为inline引起的上下不对齐
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-bg);
        }
        &:focus{
            outline: none;
        }
        >.icon{
            order: 1;
            display: flex;
            width: 20px;
            height: 20px;
            margin-right: .1em;
        }
        >.content{
            order: 2;
            text-align: center;
            line-height: 20px;
        }
        &.icon-right{
            > .content {order:1;}
            > .icon {order: 2;margin-left: .1em;}
        }
    }
    
</style>