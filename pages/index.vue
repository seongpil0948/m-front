<template>
<div>
  <!-- [layout 요소, 단일 크기조정] 태그에 직접 넣고  -->
  <v-row justify="center" align="center">
    <v-col>
      <v-card> {{ dualMomentum }} </v-card>
    </v-col>
  </v-row>
  <!-- absolute -->
  <v-img class="logo independent" width="200" height="200" src="@/static/M.png" />
  <div class="independent round_round_wrap">
    <span class="round_round"></span>
  </div>
</div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('getDualMomentum')
  },
  computed: {
    dualMomentum() {
      return this.$store.state.dualMomentum
    }
  },
  components: {}
}
</script>

<style>
.independent {
  position: absolute;
  left: 42vw;
  top: 50%;
}

.logo {
  animation: up 2s linear;
  animation-iteration-count: infinite;
}

.round_round_wrap {
  width: 50px;
  height: 50px;
  animation: round_round 3s linear infinite;
  margin: 50px auto 0;
  transform-origin: 50% 150px;
  background-color: #8FC1E0;
}

.round_round {
  display: inline-block;
  margin: 5px;
  height: 5px;
  width: 5px;
  background: #c00000;
}

@keyframes up {
  0% {
    opacity: 0%;
    transform: translateY(100%);
  }

  100% {
    opacity: 100%;
    transform: translateY(0%);
  }
}

@keyframes round_round {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
