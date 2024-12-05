<script setup>
import { ref, onMounted } from "vue";

const datos = ref(null);

onMounted(async () => {
  const response = await fetch("/data.json");
  datos.value = await response.json();
});
</script>

<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <RouterLink
        v-for="destination in datos?.destinations"
        :key="destination.id"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </RouterLink>
    </div>
  </div>
</template>
