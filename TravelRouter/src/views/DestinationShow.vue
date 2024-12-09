<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import GoBack from '@/components/GoBack.vue';

const route = useRoute();
const destination = ref(null);

const cargarDestino = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  destination.value = data.destinations.find(destino => destino.id === parseInt(route.params.id));
};

watch(() => route.params.id, () => {
  cargarDestino();
});

cargarDestino();
</script>

<template>
  <div :key="$route.fullPath" class="destination">
    <GoBack />
    <h1>{{ destination?.name }}</h1>
    <img v-if="destination" :src="`/images/${destination.image}`" :alt="destination.name" />
    <p v-if="destination">{{ destination.description }}</p>

    <h2>Experiences</h2>
    <div v-if="destination" class="experiences">
      <router-link
        v-for="experience in destination.experiences" :key="experience.slug" :to="{ name: 'experience.show', params: 
        { slug: experience.slug, id: destination.id } }">
        <h3>{{ experience.name }}</h3>
        <img :src="`/images/${experience.image}`" :alt="experience.name" />
        <p>{{ experience.description }}</p>
      </router-link>
    </div>
  </div>
</template>
