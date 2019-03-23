<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }">ホーム</router-link> |
      <router-link :to="{ name: 'about' }">このサイトについて</router-link>
    </div>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;

  > main {
    display: flex;
    justify-content: center;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
