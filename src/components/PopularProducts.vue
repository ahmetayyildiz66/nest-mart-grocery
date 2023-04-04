<template>
  <div class="mx-40 mt-16">
    <section class="flex items-center justify-between">
      <h2 class="text-3xl font-semibold">Popular Products</h2>
      <PopularFilterList />
    </section>
    <span v-if="loading">Loading...</span>
    <div class="mt-12 grid grid-cols-5 gap-6" v-if="!loading">
      <PopularProductCard
        v-for="res in result.popularProducts"
        :key="res.id"
        :title="res.title"
        :price="res.price"
        :rating="res.rating"
        :discountPrice="res.discountPrice"
        :weight="res.weight"
        :images="res.images"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

import PopularFilterList from './PopularFilterList.vue'
import PopularProductCard from './PopularProductCard.vue'

const POPULAR_PRODUCTS = gql`
  query ($category: Category) {
    popularProducts(category: $category) {
      id
      title
      price
      rating
      discountPrice
      weight
      category
      images
    }
  }
`

const { result, loading, error } = useQuery(POPULAR_PRODUCTS)

console.log('popular products result: ', result)
</script>
