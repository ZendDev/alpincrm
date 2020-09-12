<template>
    <nav class="navbar">
        <div class="navbar__inner">
            <ul class="mainmenu">
                <li v-for="navigation in navigations" :key="navigation.id" class="mainmenu__item">
                    <router-link class="mainmenu__link" :to="`/${navigation.link}`">
                        <span class="mainmenu__name">
                            {{ navigation.name }}
                        </span>
                    </router-link>
                </li>
            </ul>
            <ul class="navigation">
                <li v-for="menu in menus" :key="menu.id" class="navigation__item">
                    <router-link class="navigation__link" :to="`/b2c/${menu.link}`">
                        <i :class="`icon icon-${menu.icon}`" />
                        <span class="navigation__name">
                            {{ menu.name }}
                        </span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="navsettings">
            <router-link to="/">
                <i class="icon icon-settings"></i>
            </router-link>
        </div>
    </nav>
</template>
 
<script>
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
    navigations: [
        {name: "B2C", link: "b2c", id: "1"},
        {name: "Tourists", link: "tourists", id: "2"}
    ]
  }),
}
</script>

<style>

</style>