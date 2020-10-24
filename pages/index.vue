<template>
<v-container fluid class="fill-height">
  <div v-if="isLoading" class="m_circle" />
  <v-row v-else justify="center" align="center">
    <v-col cols="2">
      <v-card class="collection_card">
        <div class="text">
          TECH
        </div>
      </v-card>
    </v-col>
    <v-col cols="2">
      <v-card class="collection_card">
        <div class="text">
          AI
        </div>
      </v-card>
    </v-col>
    <v-col cols="2">
      <v-card class="collection_card">
        <div class="text">
          ETC
        </div>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      isLoading: true,
    }
  },
  mounted() {
    // this.$store.dispatch('getDualMomentum')
    setTimeout(() => this.isLoading = false, 3000)
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
// @import "@/assets/scss/index.scss";
</style>
