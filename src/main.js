var Vue = require('vue')
var App = require('./App')
var store = require('./store')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
