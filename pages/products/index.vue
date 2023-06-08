<template>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="p in products">
            <ProductCard :product="p"/>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    });
    useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch'}
    ]
  })

    // getting data form API using fetch
   const { data : products} =await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped></style>