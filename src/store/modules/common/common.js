export const common = {
  namespaced: true,
  state: () => ({
    session:false,
    windowWidth: 0,
    mobile: false,
    test:0,
  }),
  getters: {
    loading: state => {
      return state.loading;
    },
    windowWidth: state => {
      return state.windowWidth;
    },
    mobile: state => {
      return state.mobile;
    },
    test: state => {
      return state.test;
    }
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setWindowWidth(state, payload) {
      state.windowWidth = payload;
    },
    setDeviceStatus(state, payload) {
      state.mobile = payload;
    },
    setTestState(state, payload) {
      state.test = payload;
    }
  },
  actions: {
  }
};
