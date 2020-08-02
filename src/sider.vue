<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible = false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GuluSider",
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 5px;
  }
}
.slide-enter-active {
  transition: all 0.5s;
}
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter, .slide-leave-to{
  margin-left: -200px;
}
</style>