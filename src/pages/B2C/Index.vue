<template>
  <div class="main">
    <NavBar />
    <div class="main__inner">
      <Header />
      <div class="main__content">
        <router-view />
        <SecondMenu />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import NavBar from "~/components/NavBar.vue"
import SecondMenu from "~/components/SecondMenu.vue"
export default {
  components:{
    Header,
    NavBar,
    SecondMenu
  }
}
</script>

<style>

</style>