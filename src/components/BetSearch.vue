<script setup lang="ts">

</script>

<template>
  <div class="bet_search">
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    <input type="text" placeholder="Search for a bet" />
  </div>
</template>


<style scoped>
.bet_search {
  display: flex;
  gap: .4rem;
  background-color: var(--background_terciary);
  padding: .4rem 1rem;
  border-radius: .8rem;
  width: 30rem;
  align-items: center;
}

input {
  padding: .4rem;
  border: none;
  border-radius: .4rem;
  background-color: transparent;
  color: var(--color_primary);
  width: 100%;
}

input:focus-visible {
  outline: none;
}
</style>