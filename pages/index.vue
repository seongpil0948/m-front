<template>
<div style="width: 100%;">
  <!-- [layout 요소, 단일 크기조정] 태그에 직접 넣고 
  <v-row>
    <v-col>
      <v-card> {{ dualMomentum }} </v-card>
    </v-col>
  </v-row>
  -->
  <v-row class="mb-12">
    <v-col cols="3">
      <v-card class="collection_card left">
        <div>
          AI
        </div>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="collection_card center">
        <div>
          TECH
        </div>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="collection_card right">
        <div>
          MIX
        </div>
      </v-card>
    </v-col>
  </v-row>
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

<style lang="scss">
.row {
  justify-content: center;
  align-items: center;
}

.logo {
  animation: up 2s linear;
  animation-iteration-count: 1;
}

.collection_card {
  width: 10vw;
  height: 10vh;
  text-align: center;

  div {
    padding-top: 20%;
    font-weight: 700;
    ;
  }
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
</style>
