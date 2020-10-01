export const state = () => ({
  company: {
    address: 'Srđana Aleksića 22, 71000 Sarajevo',
    phone: '+38733 766 610',
    email: 'info@corto.ba',
    facebook: '/cortosarajevo',
    facebookLink: 'https://www.facebook.com/cortosarajevo/',
    pageTitle: '',
    pageSubText: '',
    pageBackgroundImage: '',
  }
})

export const mutations = {
  SET_PAGE_TITLE(state, title) {
    state.pageTitle = title
  },
  SET_PAGE_SUBTEXT(state, subText) {
    state.pageSubText = subText
  },
  SET_BACKGROUND_IMAGE(state, backgroundImage) {
    state.pageBackgroundImage = backgroundImage
  }
}
export const getters = {
  getTitle(state) {
    return state.pageTitle
  },
  getPageSubText(state) {
    return state.pageSubText
  },
  getPageBackgroundImage(state) {
    return state.pageBackgroundImage
  }
}
