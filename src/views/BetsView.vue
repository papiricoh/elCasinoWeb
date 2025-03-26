<script setup lang="ts">
import { Utils } from '@/controllers/Utils';
import BetsContainer from '../components/BetsContainer.vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BetsView',
  data() {
    return {
      bets: [
        Utils.generateBettingEvent(),
        Utils.generateBettingEvent(),
        Utils.generateBettingEvent(),
        Utils.generateBettingEvent()
      ],
    };
  },
  methods: {
    
  },
  mounted() {
    
  }
});
</script>

<template>
  <div class="bets_view">
    <h1>Current Bets</h1>
    <div class="bets_container">
      <BetsContainer v-for="bet in bets" :bet="bet"/>

    </div>
  </div>
</template>

<style scoped>
.bets_view {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}

.bets_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
