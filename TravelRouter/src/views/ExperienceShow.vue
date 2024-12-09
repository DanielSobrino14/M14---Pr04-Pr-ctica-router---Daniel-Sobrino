<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import GoBack from '@/components/GoBack.vue';

const route = useRoute();
const experience = ref(null);

onMounted(async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  const destination = data.destinations.find(destino => destino.id === parseInt(route.params.id));
  if (destination) {
    experience.value = destination.experiences.find(experiencia => experiencia.slug === route.params.slug);
  }
});
</script>

<template>
  <div v-if="experience" class="experience">
    <GoBack />
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </div>
</template>
