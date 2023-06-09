<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minus atque nulla saepe temporibus dolorem nisi deserunt tenetur quod? Corrupti!</p>
    </div>
    <div>{{ data }}</div>
</template>

<script setup>
    const {data} = await useFetch('/api/currency/GBP',{
        // method:'POST',
        body:{
            age:'30'
        }
    })
</script>

<style lang="scss" scoped>

</style>

