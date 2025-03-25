<script setup lang="ts">

</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BetsContainer',
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  mounted() {
    
  }
});
</script>

<template>
    <div class="bet_card">
        <h2>Team 1 vs Team 2</h2>
        <p>Amount: $100</p>
        <p>Winner: Team 1</p>
    </div>
</template>

<style scoped>
.bet_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  gap: 0.5rem;
  background-color: var(--background_secondary);
  box-sizing: border-box;
}

</style>
