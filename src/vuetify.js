import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

/* import css */
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

const vuetifyOpt = {
	theme: {
		dark: true
	},
	icons: {
		iconfont: 'md', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
	}
}

export default new Vuetify(vuetifyOpt)