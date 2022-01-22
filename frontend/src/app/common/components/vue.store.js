import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * 変数を定義する場所
   */
  state: {
    appModal: true, // 初期値（Initial Value）は false とする
    createButton: true, // 初期値（Initial Value）は true とする
  },
  /**
   * 指定した変数の値を返却するための処理群
   */
  getters: {
    appModal: function(state) {
      return state.appModal;
    },
    createButton: function(state) {
      return state.createButton;
    },
  },
  /**
   * 指定した変数の値を変更する直前に行う処理群。"非同期的に"値を変更する
   */
  actions: {
    appModal({commit}, newVal) {
      // mutationsを叩く。
      // 「commit」という関数は、mutationsを叩くためのVuexのお作法です。
      commit('appModal', newVal);
    },
    createButton({commit}, newVal) {
      // mutationsを叩く。
      // 「commit」という関数は、mutationsを叩くためのVuexのお作法です。
      commit('createButton', newVal);
    },
  },
  /**
   * 指定した変数の値を変更する処理群。"同期的に"値を変更する
   */
  mutations: {
    appModal(state, payload) {
      state.appModal = payload;
    },
    createButton(state, payload) {
      state.createButton = payload;
    },
  },
});
