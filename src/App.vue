

<template>
	<main>
		<div class="border-b border-gray-150">
			<TheHeader />
		</div>
		<TheNavbar />
		<HeroSection />
		<ShopByCategories />
		<ShopNowCards />
		<PopularProducts />
		<TheFooter />
	</main>
</template>

<script setup lang="ts">
import TheHeader from './layouts/TheHeader.vue';
import TheNavbar from './layouts/TheNavbar.vue';
import TheFooter from './layouts/TheFooter.vue';
import HeroSection from './components/HeroSection.vue';
import ShopByCategories from './components/ShopByCategories.vue';
import ShopNowCards from './components/ShopNowCards.vue';
import PopularProducts from './components/PopularProducts.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap');

body {
	font-family: 'Quicksand', sans-serif;
}
</style>


