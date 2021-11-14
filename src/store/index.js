import Vue from "vue";
import Vuex from "vuex";

import article from "./modules/article";
import author from "./modules/author";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    article,
    author
  },
  strict: true
});
