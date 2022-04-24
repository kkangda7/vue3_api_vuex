<template>
<div>
  <p v-for="job in jobs" :key="job">
    <a :href="job.url">{{ job.title }}</a>
    <small>{{ job.time_ago }}, {{ job.domain }}</small>
  </p>
</div>

</template>

<script>
import { computed } from 'vue';
import { useStore  } from 'vuex'

export default {
  setup() {
    const jobs = computed(() =>{
      return store.state.jobs
    } 
    );
    const store = useStore();
    const createApiJobs = () => {
      store.dispatch('FETCH_JOBS');

    }
    createApiJobs();

    return {
      jobs
    }
  }
}
</script>

<style>

</style>