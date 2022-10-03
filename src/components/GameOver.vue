<template>
  <div :class="['game-over', gameOverClass]">
    <div class="game-over-content">
      <span>Game Over</span>
      <span>Your score: {{ score }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameOver',
  props: {
    show: {
      type: Boolean,
    },
    score: {
      type: Number,
    },
  },
  watch: {
    show() {
      if (this.show) {
        this.gameOverClass = 'game-over-show';
      }
    },
  },
  data: () => ({
    gameOverClass: '',
  }),
};
</script>

<style scoped>
.game-over {
  display: none;
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: rgba(0, 0, 0, 0.7);
}

.game-over-show {
  display: flex !important;
}

.game-over-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: auto;
  width: 400px;
  height: 400px;
  border-radius: 5px;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}
</style>