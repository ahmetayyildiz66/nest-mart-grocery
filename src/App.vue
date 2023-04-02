

<template>
	<main>
		<div class="border-b border-gray-150">
			<TheHeader />
		</div>
		<TheNavbar />
		<HeroSection />
	</main>
</template>

<script setup lang="ts">
import TheHeader from './layouts/TheHeader.vue';
import TheNavbar from './layouts/TheNavbar.vue';
import HeroSection from './components/HeroSection.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap');

body {
	font-family: 'Quicksand', sans-serif;
}
</style>


