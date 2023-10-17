<script setup>
  import { onMounted } from 'vue'

  import MainSearch from '@/components/MainSearch.vue'
  import MainCards from '@/components/MainCards.vue'
  import MainPagination from '@/components/MainPagination.vue'

  import useAPI from '@/composables/useAPI'

  const { getEmployees, loading } = useAPI()

  onMounted(async () => {
    await getEmployees()
  })
</script>

<template>
  <p v-if="loading">Loading...</p>
  <div v-else class="wrapper">
    <MainSearch />
    <MainCards />
    <MainPagination />
  </div>
</template>

<style scoped lang="postcss">
  .wrapper {
    @apply container mx-auto flex flex-col gap-4 py-4;
  }
</style>