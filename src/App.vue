<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <AdrSideNav/>

    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import AdrSideNav from './components/AdrSideNav'

export default {
  name: 'App',
  components: {
    AdrSideNav
  },
  data () {
    return {
      //
    }
  }
}
</script>
