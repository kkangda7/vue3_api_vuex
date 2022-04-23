<template>
  <div>
    <ul v-for="user in users" :key="user">
      <li>id :{{ user.id }}</li>
      <li>title : {{ user.title }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import { fetchNewsList } from '../api/index'

export default {
  setup() {
    const users = ref([])
    const createApi = () => {
      fetchNewsList()
      // axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then((response)=>{
        users.value = response.data;
      })
      .catch((err)=> {
        console.log(err)
      })
    }
    createApi();

    return {
      users
    }
  }
}
</script>
