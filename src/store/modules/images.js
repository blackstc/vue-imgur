import api from '../../api/imgur'

const state = {
  images: []
}

const getters = {
  allImages: ({ images }) => images
}

const actions = {
  async fetchImages({ commit, rootState }) {
    const res = await api.fetchImages(rootState.auth.token)
    commit('setImages', res.data.data)
  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  }
}

export default { state, getters, actions, mutations }
