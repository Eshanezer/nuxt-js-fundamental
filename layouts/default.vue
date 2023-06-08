<template>
    <header>
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/">Nuxt JS</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/products">Products</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>

    <!-- page content -->

    <div>
        <slot/>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>