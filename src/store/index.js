import Vue from 'vue';
import Vuex from 'vuex';
import items from './modules/items';
import item from './modules/item';
import favorites from './modules/favorites';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    items,
    item,
    favorites,
  },
});
