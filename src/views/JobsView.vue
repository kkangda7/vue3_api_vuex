<template>
  <div>
    <list-item :data="jobs"></list-item>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore  } from 'vuex'
import ListItem from '../components/ListItem.vue';

export default {
  components: { ListItem },
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