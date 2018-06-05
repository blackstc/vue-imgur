<template>
  <main>
    <AppHeader />
    <div class="ui container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>
