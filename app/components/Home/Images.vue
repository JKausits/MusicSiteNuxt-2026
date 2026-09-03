<template>
  <v-carousel cycle>
    <v-carousel-item v-for="src in images" :src cover></v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
const images: string[] = [
  "/images/20250614_183751.jpg",
  "/images/20250829_174010.jpg",
  "/images/20251017_183607(1).jpg",
  "/images/20251107_195021.jpg",
  '/images/DSC_0312.jpg'
];
</script>

<style scoped></style>
