/* eslint-disable vue/return-in-computed-property */
<template lang="pug">
	div(v-if="!loading")
		v-container
			v-radio-group(v-model='radioGroup' row)
				v-radio(
					v-for="(radio, index) in sort" 
					:key="`${radio}-${index}`" 
					:label='radio'
					:value='radio'
				)

			v-divider
		
			v-row(wrap)
				v-col(cols="12" v-if="getPosts.length == 0")
					h2 There are no posts
				v-col(
					v-for="(item, index) in getPosts" 
					:key="item.id" 
					cols="12" 
					sm="6"
					md="4"
				)
					v-card(class='card--noverflow')
						router-link(:to="`/meme-project/posts/${item.id}`")
							v-img(
								class="white--text align-end"
								:src="item.imageSrc"
								:lazy-src="item.imageSrc"
								gradient='to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)' 
								height="200"
							)
								v-card-title(v-text='item.title')
	div(v-else)
		v-container
			v-row
				v-col(cols='12' style='height: 70vh' class='d-flex justify-center align-center')
					v-progress-circular(size='65' color='primary' indeterminate)
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data: () => ({
		
	}),
	computed: {
		getPosts () {
			let posts = this.$store.getters.getPosts.filter(el => el.promo)
			
			if (this.radioGroup === 'new') {
				return posts.reverse()
			}

			else if (this.radioGroup === 'old'){
				return posts
			}

			return 0
		},

		loading () {
			return this.$store.getters.loading
		},
		
		...mapGetters({
			sort: 'getSort'
		}),

		radioGroup: {
			get () {
				return this.$store.getters.getCurrentSort
			},
			set (state) {
				if (state !== this.$store.getters.currentSort) {
					this.$store.commit('setCurrentSort', state)
				}
			}
		}
	}
}
</script>

<style lang="sass">
	.card--noverflow
		overflow: hidden
</style>