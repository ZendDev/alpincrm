<template>
    <header class="header">
        <div class="search">
            <ul class="search__options">
                <li class="search__option">
                    <span>Email</span>
                </li>
                <li class="search__option">
                    <span>Client code</span>
                </li>
                <li class="search__option">
                    <span>Riserv code</span>
                </li>
                <li class="search__option">
                    <span>Name</span>
                </li>
            </ul>
            <div class="search__input">
                <input type="text" placeholder="Search">
            </div>
            <div class="search__calendar">
                <span>Today 23 AUG</span>
                <img src="/src/assets/images/header/calendar.svg" alt="img">
            </div>
        </div>
        <ul class="control-panel">
            <li class="control-panel__item">
                <a class="control-panel__link" href="#">
                    <img src="/src/assets/images/header/notifications.svg" alt="notification">
                </a>
            </li>
            <li class="control-panel__item">
                <a class="control-panel__link" href="#">
                    <img src="/src/assets/images/header/logout.svg" alt="logout">
                </a>
            </li>
        </ul>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>