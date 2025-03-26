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

      bet: {
        quantity: 0,
      }
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
    <div class="user_bet_container">
      <div class="user_bet_resume">
        <div>Your bet</div>
      </div>
      <div class="user_bet_button">{{bet.quantity == 0 ? "Set an Amount" : bet.quantity}}</div>
      <div class="user_bet_input">
        <input type="text" placeholder="Amount" />
      </div>
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

.user_bet_container {
  position: fixed;
  z-index: 1;
  background-color: var(--background_secondary);
  height: 8rem;
  width: 24rem;
  bottom: 0;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: 1rem;
  padding-bottom: .4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
}

.user_bet_resume {
  grid-column: 1/3;
}

.user_bet_button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bet_plus);
  border-radius: 1rem;
  transition: .4s;
}
.user_bet_button:hover {
  cursor: pointer;
  background-color: var(--background_terciary);
}
.user_bet_button:active {
  background-color: var(--background_primary);
}
.user_bet_input {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
}

.user_bet_input > input{
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  text-align: left;
  font-family: "Fira Sans", sans-serif;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  color: var(--color_primary);
}


.user_bet_input > input:focus-visible{
  outline: none;
}
</style>
