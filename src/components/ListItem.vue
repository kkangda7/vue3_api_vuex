<template>
  <div>
    <ul class="news-list">
      <li 
        v-for="item in data" 
        :key="item" 
        class="post"
      >
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <a :href="item.url">{{item .title}}</a>
          </p>
          <small class="link-text">{{ item.time_ago }} by
            <router-link 
              :to="`/user/${item.user}`"
            >{{ item.user }}
            </router-link> 
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'

export default {
  props: {
    data: {
      type: Array
    }
  },
  setup() {
    const route = useRoute();
    const name = route.name;

    return {
      name
    }
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee ;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>