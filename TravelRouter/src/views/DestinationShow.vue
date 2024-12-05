<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const destination = ref(null);

onMounted(async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  destination.value = data.destinations.find(dest => dest.id === parseInt(route.params.id));
});
</script>

<template>
  <div v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <img :src="`/images/${destination.image}`" :alt="destination.name" />
    <p>{{ destination.description }}</p>

    <h2>Experiences</h2>
    <div class="experiences">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{ name: 'experience.show', params: { slug: experience.slug, id: destination.id } }"
      >
        <h3>{{ experience.name }}</h3>
        <img :src="`/images/${experience.image}`" :alt="experience.name" />
        <p>{{ experience.description }}</p>
      </router-link>
    </div>
  </div>
  <p v-else>Cargando datos...</p>
</template>

<style scoped>
</style>
