<template lang="pug">
	v-app
		v-app-bar(app)
			v-app-bar-nav-icon(@click="drawer = !drawer" class="hidden-md-and-up")
			v-toolbar-title 
				router-link(tag="button" to="/") First SPA
			v-spacer
			v-btn(depressed v-for="item in redirectLinks" :key="item.text" :to="item.link" class="hidden-sm-and-down")
				v-icon(left) {{item.icon}}
				| {{item.text}}
		//- v-app-bar

		v-navigation-drawer(
			app 
			v-model="drawer"
			temporary
		)
			v-list(dense)
				v-list-item(link v-for="item in redirectLinks" :key="item.text" :to="item.link")
					v-list-item-action
						v-icon {{item.icon}}
					v-list-item-content
						v-list-item-title {{item.text}}
		//- v-navigation-drawer

		v-content
			router-view
		//- v-content
		
		v-footer(app)
</template>

<script>
	export default {
   	data: () => ({
			drawer: false,
			redirectLinks: [
				{text: 'sign in', icon:'lock_open', link:'/login'},
				{text: 'sign up', icon:'person_add', link:'/register'},
				{text: 'about', icon:'info', link:'/about'},
				{text: 'users', icon:'supervised_user_circle', link:'/users/all'}
			]
		})
	}
</script>

<style lang="sass" scoped>

</style>