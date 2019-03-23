<template>
  <v-layout wrap style="height: 200px;">

    <v-container>
      <v-layout justify-center>
        <v-btn color="pink" dark @click.stop="drawer = !drawer">Toggle</v-btn>
      </v-layout>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://avatars2.githubusercontent.com/u/1363954?s=460&v=4">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Kazuya Kojima</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: '連絡先一覧', icon: 'list' }
      ]
    }
  }
}
</script>
