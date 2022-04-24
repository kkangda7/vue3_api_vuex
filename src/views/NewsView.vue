<template>
  <div>
    <p v-for="item in news" :key="item">
      <a :href="item.url">{{item .title}}</a>
      <small>{{ item.time_ago }} by {{ item. user }}</small>
    </p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
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
