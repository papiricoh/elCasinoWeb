<script setup lang="ts">

</script>

<script lang="ts">
import { BettingEvent } from '@/model/bets/BettingEvent';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BetsContainer',
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  props: {
    bet: BettingEvent
  },
  mounted() {
    
  }
});
</script>

<template>
    <div class="bet_card">
        <h3 style="padding: 1rem;">{{bet?.name}}</h3>
        <div class="betting_grid">
          <div class="betting_column" v-for="option in bet?.options">
            <div class="betting_title">
              <div>{{option.name}}</div>
            </div>
            <div class="betting_info">
              <div>{{option.odds}}</div>
            </div>

          </div>
        </div>
    </div>
</template>

<style scoped>
.bet_card {
  display: flex;
  width: 100%;
  border-radius: 5px;
  background-color: var(--background_secondary);
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  
}

.betting_grid {
  display: flex;
}

.betting_column {
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
}

.betting_title {
  font-size: 1rem;
  color: var(--text_primary);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.2rem;
  box-sizing: border-box;
}

.betting_grid > .betting_column > .betting_title {
  border-top-right-radius: 5px;
  border-right: 1px solid var(--background_primary);
}

.betting_grid > .betting_column:last-child > .betting_title {
  border-top-right-radius: 5px;
  border-right: none;
}

.betting_info {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: var(--text_secondary);
  border-top: 1px solid var(--background_primary);
  border-right: 1px solid var(--background_primary);
  height: 100%;
  padding: 1rem 1.2rem;
  box-sizing: border-box;
  cursor: pointer;
  transition: .4s;
}

.betting_info:hover {
  background-color: var(--background_terciary);
}

.betting_info:active {
  background-color: var(--background_primary);
}

.betting_grid > .betting_column:last-child > .betting_info {
  border-bottom-right-radius: 5px;
  border-right: none;
}

</style>
