<template>
    <ul class="submenu">
        <li v-for="submenu in submenus" :key="submenu.id"  class="submenu__item">
            <router-link class="submenu__link" :to="`${submenu.link}`">{{ submenu.name }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['submenus']
}
</script>

<style>

</style>