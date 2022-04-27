<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <div>
            <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
          </div>
          <div class="time">
            {{ item.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ item.title }}</h2>
    </section>
    <section>
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const item = computed(()=> {
      return store.state.item
    })

    const createApiItem = () => {
      const itemName = route.params.id
      store.dispatch('FETCH_ITEM',itemName)
    }
    createApiItem();

    return {
      item
    }
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>