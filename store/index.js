export const state = () => ({
  dualMomentum: []
})

export const mutations = {
  setDualMomentum(state, payload) {
    state.dualMomentum = payload
  }
}

export const actions = {
  getDualMomentum (context) {
    this.$axios.get('/tech/dual_momentum?start_date=2019-09-04&end_date=2019-09-19&stock_count=10')
    .then((res) => {
      context.commit('setDualMomentum', res)
    })
  }
}