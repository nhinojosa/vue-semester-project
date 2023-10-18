<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import useAPI from '@/composables/useAPI';

const { fetchDemon, currentDemon } = useAPI()


const route = useRoute()

const demon = ref('')
onMounted(async () => {
  await fetchDemon(route.params.id)
  console.log(route.params.id)
})

onUnmounted(() => {
 currentDemon.value = null
})

</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-b from-amber-900 to-yellow-300 font-poppins"
  >
    <div
      v-if="currentDemon"
      class="flex flex-col items-center justify-center gap-6"
    >
      <img class="p-8"
        :src="currentDemon.image"
        :alt="currentDemon.name"
      />
      <h1 class="text-white-800 text-6xl font-bold">
        {{ currentDemon.name }}
      </h1>
      
    </div>
  </main>
</template>