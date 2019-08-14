import { deepCopy } from '../../utility/common';
import axios from '../../axios/config';
//mutations
const SET_LIST = 'SET_LIST';
const SET_PAGE = 'SET_PAGE';
const SET_NEW_ARRIVALS = 'SET_NEW_ARRIVALS';
const SET_MOST_FAVS = 'SET_MOST_FAVS';
const initialState = {
  list: [],
  currentPage: 1,
  cachedPath: '',
  newArrivals: [],
  mostFavs: [],
};
//actions
export const FETCH_LIST = 'FETCH_LIST';
export const JUMP_PAGE = 'JUMP_PAGE';
//obj
export default {
  state: initialState,
  mutations: {
    [SET_LIST](state, [payload, cachedPath]) {
      if (cachedPath !== undefined) {
        state.cachedPath = cachedPath;
      }
      state.list = deepCopy(payload);
    },
    [SET_NEW_ARRIVALS](state, payload) {
      state.newArrivals = deepCopy(payload);
    },
    [SET_MOST_FAVS](state, payload) {
      state.mostFavs = deepCopy(payload);
    },
    [SET_PAGE](state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    async [FETCH_LIST](context, payload) {
      try {
        const params = { ...payload.query, page: payload.page };
        console.log(params);

        const result = await axios.get('items', { params });
        if (payload.origin === 'home') {
          //fetch 最新商品和最受欢迎的商品
          const mutation = payload.query.mode === 'hot' ? SET_MOST_FAVS : SET_NEW_ARRIVALS;
          context.commit(mutation, result.data);
        } else context.commit(SET_LIST, [result.data, payload.cachedPath]);
        return null;
      } catch (err) {
        console.log(err.message);
        return err.message;
      }
    },
    async [JUMP_PAGE](context, payload) {
      const err = await this.dispatch({
        ...payload,
        type: FETCH_LIST,
      });
      if (!err) context.commit(SET_PAGE, payload.page);
    },
  },
};
