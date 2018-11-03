export default {
  namespace: 'dashboard',
  state: {
    all: [{
      company: 'Cypress HCM',
      title: 'Android Developer',
      date: '2018-10-30',
      status: 'progress',
      source: 'LinkedIn',
    }],
    openNewJobForm: false,
  },
  effects: {
  },
  reducers: {
    toggleNewJobForm(state) {
      return {
        ...state,
        openNewJobForm: !state.openNewJobForm,
      }
    },
  },
}
