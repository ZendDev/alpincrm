<template>
  <div class="main">
    <NavBar :menus="menus"/>
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
  data: () => ({
    menus: [
        {name: "Funnel", link: "funnel", icon: "funnel", id: "1"},
        {name: "Dealers", link: "dealers", icon: "dealers", id: "2"},
        {name: "Catalog", link: "catalog", icon: "catalog", id: "3"},
        {name: "Documents", link: "documents", icon: "documents", id: "4"},
        {name: "Mail", link: "mail", icon: "mail", id: "5"},
        {name: "Invoices", link: "invoices", icon: "invoice", id: "6"},
        {name: "Support", link: "support", icon: "support", id: "7"},
        {name: "Analytics", link: "analytics", icon: "analytics", id: "8"}
    ],
  }),
  components:{
    Header,
    NavBar,
    SecondMenu
  }
}
</script>

<style>

</style>