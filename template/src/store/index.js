import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import example from './modules/example'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const debug = process.env.NODE_ENV !== 'production'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Vuex.Store({
  state: {
    msg: 'hello from store'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  mutations: {
    setmsgmutation(state, value) {
      state.msg = value{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  actions: {
    setmsg(context, value) {
      context.commit('setmsgmutation', value){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  modules: {
    example{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  strict: debug{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
