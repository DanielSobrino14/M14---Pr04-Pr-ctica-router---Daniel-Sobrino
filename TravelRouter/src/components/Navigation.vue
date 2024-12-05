<template>
    <nav id="nav">
      <RouterLink to="/">Home</RouterLink>
      <div v-for="destination in destinations" :key="destination.id">
        <RouterLink
          :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
        >
          {{ destination.name }}
        </RouterLink>
      </div>
      <RouterLink to="/Dashboard">Dashboard</RouterLink>
      <RouterLink to="/ITB">ITB</RouterLink>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const destinations = ref([]);
  
  onMounted(async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    destinations.value = data.destinations;
  });
  </script>
  