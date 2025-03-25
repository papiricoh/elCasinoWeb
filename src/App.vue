<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BetSearch from './components/BetSearch.vue'
import { TabType } from './model/misc/TabType';
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      tab: TabType.Home,
      user: {
        name: 'John Doe',
        balance: 1203
      }
    };
  },
  methods: {
    getTabClass(tab: TabType) {
      
      return "router_button" + (this.tab === tab ? " router_button_active" : "");
    }
  },
  mounted() {
    
  },
  watch: {
    '$route'(to, from) {
      switch (to.fullPath) {
        case "/bets":
          this.tab = TabType.Bets;
          break;
        case "/config":
          this.tab = TabType.Config;
          break;
      
        default:
          this.tab = TabType.Home;
          break;
      }
    },


  }
});
</script>

<template>
  <header>
    <div>LOGO</div>

    <BetSearch class="bet_search_container" />

    <div class="user_details">
      <span>{{user.name}}</span>
      <span>1.203€</span>
      <span>Logout</span>
    </div>
  </header>
  <div class="main_view">
    <div class="wrapper">
      <div class="nav_container">
        <nav>
          <div class="bet_nav_title">Bet</div>
          <RouterLink :class="getTabClass(TabType.Home)" to="/">
            <font-awesome-icon :icon="['fas', 'house']" />
            <div>Home</div>
          </RouterLink>
          <RouterLink :class="getTabClass(TabType.Bets)" to="/bets">
            <font-awesome-icon :icon="['fas', 'money-bills']" />
            <div>Bets</div>
          </RouterLink>
        </nav>

      </div>

      <RouterLink :class="getTabClass(TabType.Config)" to="/config">
        <font-awesome-icon :icon="['fas', 'gear']" />
        <div>Configuration</div>
      </RouterLink>
    </div>

    <RouterView class="main_container" />
  </div>
</template>

<style scoped>
header {
  position: fixed;
  width: 100vw;
  height: 3.6rem;
  display: flex;
  background-color: var(--background_secondary);
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: space-between;
  padding: .6rem;
  z-index: 2;
  box-sizing: border-box;
}

.user_details {
  display: flex;
  gap: .4rem;
}

.bet_search_container {
  position: fixed;
  z-index: 3;
  left: calc(50% - 15rem);
}

.main_view {
  display: flex;
  height: calc(100vh - 2.6rem);
}
.wrapper {
  display: flex;
  flex-direction: column;
  width: 15rem;
  background-color: var(--background_secondary);
  padding: 1rem;
  justify-content: space-between;
  z-index: 1;
  box-sizing: border-box;
  position: fixed;
  margin-top: 3.6rem;
  height: calc(100vh - 3.6rem);
}
.nav_container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

nav {
  display: flex;
  flex-direction: column;
  gap: .4rem;
}
.bet_nav_title {
  font-size: 1.2rem;
  font-weight: bold;
  
  padding: 0 .6rem;
}

.router_button {
  text-decoration: none;
  color: var(--color_primary);
  padding: .6rem;
  border-radius: .4rem;
  transition: .4s;
  display: grid;
  grid-template-columns: 1fr 6fr;
}

.router_button:hover {
  background-color: var(--background_terciary);
}

.router_button:active {
  background-color: var(--background_primary);
}

.router_button_active {
  background-color: var(--background_terciary);
}

.main_container {
  margin-top: 3.6rem;
  margin-left: 15rem;
}

</style>
