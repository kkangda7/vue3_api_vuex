<template>
  <div>
    <list-item :data="asks"></list-item>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
import ListItem from '../components/ListItem.vue';

export default {
  components: { ListItem },
 setup() {
   const asks = computed(() => {
     return store.state.asks
   });
   const store = useStore();
   const createApiAsk = () => {
     store.dispatch('FETCH_ASK');
   }
   createApiAsk();


   return {
     asks
   }
 }
}
</script>

<style>
</style>