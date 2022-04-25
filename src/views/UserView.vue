<template>
  <div>
    <p>name: {{ user.id }}</p>
    <p>karma: {{ user.karma }}</p>
    <p>create: {{ user.created }}</p>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
  
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const user = computed(()=> {
      return store.state.user
    })
    const createApiUser = () => {
      const userName = route.params.id
      store.dispatch('FETCH_USER',userName)
    }

    createApiUser();

    return {
      user
    }
  }

}
</script>

<style>

</style>