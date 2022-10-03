<template>
  <div class="game">
    <span class="score">Score: {{score}}</span>
    <board-game @onFoodEated="increaseScore()" @onGameOver="showGameOverDialog($event)"></board-game>
    <game-over :status="gameOverStatus" :show="showGameOver" :score="score"></game-over>
  </div>
</template>

<script>
import BoardGame from './components/BoardGame.vue';
import GameOver from './components/GameOver.vue';

export default {
  name: 'App',
  components: {
    BoardGame,
    GameOver,
  },
  methods: {
    increaseScore() {
      this.score++;
    },
    showGameOverDialog(status) {
      this.showGameOver = true;
      this.gameOverStatus = status;
    },
  },
  data: () => ({
    score: 0,
    showGameOver: false,
    gameOverStatus: '',
  }),
};
</script>

<style>
html,body {
  padding: 0 !important;
  margin: 0 !important;
  background-color: rgb(34, 34, 34);
  height: 100vh;
}

.game {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.score {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
}
</style>
