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
    props: ['menus'],
    data: () => ({
        navigations: [
            {name: "B2C", link: "b2c", id: "1"},
            {name: "Tourists", link: "tourists", id: "2"}
        ]
    }),
}
</script>

<style>

</style>