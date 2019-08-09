import * as types from '../mutation-types'
import * as action from '../actions'

// initial state
const state = {
	currentUser: null,
}

// actions
const actions = {
	[action.LOGIN]: (state, user) => {
		state.commit(types.SET_USER, user)
	},
}

// getters
const getters = {
	currentUser: state => state.currentUser,
}

// mutations
const mutations = {
	[types.SET_USER]: (state, user) => (state.currentUser = user),
}

export default {
	state,
	actions,
	getters,
	mutations,
}
