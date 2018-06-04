<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Image Storage
    </a>

    <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  methods: mapActions(['login', 'logout']),
  computed: mapGetters(['isLoggedIn'])
}
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>


