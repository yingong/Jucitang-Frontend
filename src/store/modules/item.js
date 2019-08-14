import { deepCopy } from '../../utility/common';
import axios from '../../axios/config';

const initialState = {
  cachedItem: {},
};
//mutations
const SET_ITEM = 'SET_ITEM';
//actions
export const FETCH_ITEM = 'FETCH_ITEM';
//
export default {
  state: initialState,
  mutations: {
    [SET_ITEM](state, payload) {
      const cachedItem = deepCopy(payload.item);

      state.cachedItem = cachedItem;
    },
  },
  actions: {
    async [FETCH_ITEM](context, payload) {
      //mock http
      let item = {};
      setTimeout(() => {
        item = {
          id: payload.id,
          name: '唐三彩',
          price: '1231',
          year: '元代晚期',
          imgs: ['https://www.kyohaku.go.jp/jp/img/syuzou/meihin/touji/item01.jpg'],
          favs: 0,
          desc: 'dsasdasdas',
        };
        context.commit({ type: SET_ITEM, item });
      }, 1000);
    },
  },
};
