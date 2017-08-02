/**
 * Created by wd on 2017/7/31.
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    user: {},
    rankedSessions: []
}

const getters = {
    getUser(State) {
        return State.user
    }
}

const mutations = {
    setUser(State, user) {
        State.user = user
    }
}

const actions = {
    setUser(context, data) {
        context.commit('setUser', data)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})