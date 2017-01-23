var Vue = require('vue')
var Vuex = require('vuex')

Vue.use(Vuex)

module.exports = new Vuex.Store({
	state: {
		count: 0
	},
	getters: {
		message: function (state) {
			return 'data from a getter' + state.count
		}
	},
	mutations: {
		increment (state) {
      		state.count++
    	},
		decrement (state) {
			if (state.count === 0) return
      		state.count--
    	}	
	},
	actions: {
		increment: function (context) {
			context.commit('increment')
		},
		decrement: function (context) {
			context.commit('decrement')
		}		
	}
})
