// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Home',
      icon: 'mdi-home-outline',
      to: '/',
    },
    {
      title: 'Quotes',
      icon: 'mdi-text-box-plus-outline',
      to: 'quotes',
    },
    {
      title: 'Scalability',
      icon: 'mdi-chart-line',
      to: '',
    },
    {
      title: 'My Quotes',
      icon: 'mdi-clipboard-text-outline',
      to: '',
    },
    {
      title: 'My Account',
      icon: 'mdi-account-outline',
      to: 'components/profile',
    },
    {
      title: 'Upgrade',
      icon: 'mdi-package-up',
      to: '',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
