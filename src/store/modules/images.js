import api from '../../api/imgur'
import { router } from '../../main'

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
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth
    await api.uploadImages(images, token)
    router.push('/')
  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  }
}

export default { state, getters, actions, mutations }
