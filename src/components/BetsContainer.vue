<script setup lang="ts">

</script>

<script lang="ts">
import { BettingEvent } from '@/model/bets/BettingEvent';
import { defineComponent } from 'vue';
import { Option } from '@/model/bets/Option';

export default defineComponent({
  name: 'BetsContainer',
  data() {
    return {
      
    };
  },
  methods: {
    getBetStyle(option: Option) {
      if(option.isMarked) {
        return "betting_info betting_info_selected";
      }
      return "betting_info";
    },

    markOption(bet: BettingEvent, option: Option) {
      bet.options.forEach(o => o.isMarked = false);
      option.isMarked = true;
    }
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
      <div class="bet_card_title">
        <div class="bet_name">{{bet?.name}}</div>
        <span>Started at: {{bet?.startDate.toDateString()}}</span>
        <span>Ends at: {{bet?.endDate.toDateString()}}</span>
      </div>
      <div class="betting_grid">
        <div class="betting_column" v-for="option in bet?.options" @click="markOption(bet!, option)">
          <div class="betting_title">
            <div>{{option.name}}</div>
          </div>
          <div :class="getBetStyle(option)">
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
  height: 100%;
}

.betting_column {
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.betting_title {
  font-size: 1rem;
  color: var(--text_primary);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.6rem;
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
  padding: 1rem 1.6rem;
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

.betting_info_selected {
  background-color: var(--background_primary);
}

.betting_grid > .betting_column:last-child > .betting_info {
  border-bottom-right-radius: 5px;
  border-right: none;
}

.bet_card_title {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: .4rem;
}

.bet_name {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text_primary);
}

.bet_card_title > span {
  font-size: 0.8rem;
  color: var(--text_secondary);
}

</style>
