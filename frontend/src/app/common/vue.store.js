import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * 変数を定義する場所。
   */
  state: {
    appModal: false, // 初期値（Initial Value）は false とする。
    memos: [{
      id: 'memo-01',
      bookmark: false,
      heading: '見出し: データ保存に SaaS 等は使っていません。',
      context: '本文: Vuex に直で入れてるデータです。Local Storage にデータ保存する仕組みにしています。',
      datetime: '2022',
    }, {
      id: 'memo-02',
      bookmark: true,
      heading: 'これも Vuex に直で入れてます。動作検証用。',
      context: '内容内容内容内容内容 フレームワークは Vue.js (V2) + Vue-Router + Vuex です。モジュールバンドラーは Webpack (V5) です。',
      datetime: '2022',
    }],
  },
  /**
   * 指定した変数の値を返却するための処理群。
   */
  getters: {
    appModal: function(state) {
      return state.appModal;
    },
    memos: function(state) {
      return state.memos;
    },
  },
  /**
   * 指定した変数の値を変更する直前に行う処理群。"非同期的に"値を変更する。
   */
  actions: {
    appModal({commit}, newVal) {
      // mutationsを叩く。
      // 「commit」という関数は、mutationsを叩くためのVuexのお作法です。
      commit('appModal', newVal);
    },
    memos({commit}, obj) {
      // mutationsを叩く。
      // 「commit」という関数は、mutationsを叩くためのVuexのお作法です。
      commit('memos', obj);
    },
    save({commit}, arr) {
      // mutationsを叩く。
      // 「commit」という関数は、mutationsを叩くためのVuexのお作法です。
      commit('save', arr);
    },
  },
  /**
   * 指定した変数の値を変更する処理群。"同期的に"値を変更する。
   */
  mutations: {
    appModal(state, payload) {
      state.appModal = payload;
    },
    memos(state, payload) {
      // 末尾から挿入でなくて、先頭から挿入する。
      state.memos.unshift(payload);
    },
    save(state, payload) {
      state.memos = state.memos.map((aMemo)=>{
        if (aMemo.id == payload.id) {
          return payload;
        } else {
          return aMemo;
        }
      });
    },
    remove(state, payload) {
    },
  },
});
