<template>
<div>
  <div v-if="isLoading" class="m_circle" />
  <v-row v-else>

  </v-row>
</div>
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
// @import "@/assets/scss/index.scss";
</style>
