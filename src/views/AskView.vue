<template>
  <div>
    <p v-for="ask in asks" :key="ask">
        <router-link 
          :to="`/item/${ask.id}`"
        >{{ ask.title }}</router-link>
      <small>
        {{ ask.time_ago }} by {{ ask.user }}
      </small>
    </p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'

export default {
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