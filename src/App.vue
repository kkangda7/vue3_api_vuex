<template>
  <div>
    <tool-bar></tool-bar>
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import ToolBar from "../src/components/ToolBar.vue"

export default {
  components: { ToolBar },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
