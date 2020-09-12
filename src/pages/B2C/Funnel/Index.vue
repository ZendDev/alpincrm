<template>
    <div class="wrapper">
        <Submenu :submenus="submenus"/>
        <div class="kanban">
            <slot />
        </div>
    </div>
</template>

<script>
import Submenu from "~/components/Submenu.vue"
export default {
  components: {Submenu},
  data: () => ({
    submenus: [
        {name: "Leads", link: "/b2c/funnel/leads", id: "1"},
        {name: "Name", link: "/leads", id: "2"},
        {name: "Name", link: "/leads", id: "3"},
        {name: "Name", link: "/leads", id: "4"},
    ]
  }),
}
</script>

<style>

</style>