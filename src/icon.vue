<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
import './svg'
    export default{
        props:['name']
    }
</script>

<style scoped>
    .g-icon{
        width: 20px;
        height: 20px;
    }
</style>