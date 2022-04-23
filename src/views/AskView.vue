<template>
  <div>
    <ul v-for="ask in asks" :key="ask">
      <li>id: {{ ask.id }}</li>
      <li>title: {{ ask.title }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import {fecthAskList } from '../api/index'

export default {
 setup() {
   const asks = ref([]);
   const createAsk = () => {
     fecthAskList()
     .then((response)=>{
       asks.value = response.data
     })
     .catch(err => console.log(err))
   }
   createAsk();


   return {
     asks
   }
 }
}
</script>

<style>

</style>