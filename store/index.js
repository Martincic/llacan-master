export const state = () => ({
  warningToggle: false,
  errorToggle: false
})

export const mutations = {
  warningToggle(state) {
    state.warningToggle = !state.warningToggle
  },
  closeWarning(state) {
    state.warningToggle = false
  },
  errorToggle(state) {
    state.errorToggle = !state.errorToggle
  },
  closeError(state) {
    state.errorToggle = false
  }
}
