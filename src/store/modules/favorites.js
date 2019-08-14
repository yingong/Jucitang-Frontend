import { deepCopy } from '../../utility/common';
import axios from '../../axios/config';

const initialState = {
  list: [],
};
//mutations
const SET_FAV_LIST = 'FETCH_FAV_LIST';
//actions
export const FETCH_FAV_LIST = 'FETCH_FAV_LIST';
//
export default {
  state: initialState,
  mutations: {
    [SET_FAV_LIST](state, alist) {
      const list = deepCopy(alist);

      state.list = list;
    },
  },
  actions: {
    async [FETCH_FAV_LIST](context, payload) {
      //mock http
      const { uid } = payload;
      console.log(uid);
      const list = [{ id: 1 }, { id: 2 }];
      context.commit(SET_FAV_LIST, list);
    },
  },
};
