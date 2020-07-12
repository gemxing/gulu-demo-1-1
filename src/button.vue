<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
        <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import Icon from './icon'
    export default {
        // props: ['icon','iconPosition']//接收外部传参
        components:{
            'g-icon': Icon
        },
        props:{
            icon:{},
            loading:{
                type: Boolean,
                default: false
            },
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
    $button-height: 32px;
	$font-size: 14px;
	$button-bg: white;
	$button-active-bg: #eee;
	$border-radius: 4px;
	$color: #333;
	$border-color: #999;
	$border-color-hover: #666;
    @keyframes spin{
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    .g-button{
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border:1px solid $border-color;
        background: $button-bg;
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
        .loading{
            animation: spin 1s infinite linear;
        }
    }
    
</style>