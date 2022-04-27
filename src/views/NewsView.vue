<template>
  <div>
    <list-item :data="news"></list-item>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ListItem from '../components/ListItem.vue';

export default {
  components: { ListItem },
  setup() {
    const store = useStore();
    const news = computed(() => {
      return store.state.news 
    })
    const createApiNews = () => {
      store.dispatch('FETCH_NEWS');
    }
    createApiNews();

    return {
      news
    }
  }
}
</script>
<style>
</style>
