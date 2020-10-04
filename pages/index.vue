<template>
<v-row justify="center" align="center">
  <v-col cols="12" sm="8" md="6">
    <v-card> {{ dualMomentum }} </v-card>
  </v-col>
</v-row>
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
