<template>
<div>
  <ul v-for="job in jobs" :key="job">
    <li>id: {{ job.id }}</li>
    <li>title: {{ job.title }}</li>
  </ul>
</div>

</template>

<script>
import { ref } from 'vue';
import { fecthJobsList } from '../api/index'

export default {
  setup() {
    const jobs = ref([]);
    const createJobs = () => {
      fecthJobsList()
      .then((response) => {
        jobs.value = response.data
      })
      .catch((err)=> {
        console.log(err);
      })
    }

    createJobs();

    return {
      jobs
    }
  }
}
</script>

<style>

</style>