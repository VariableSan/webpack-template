<template lang="pug">
	.container
		h4.default-title.my-5 {{info}}
</template>

<script>
export default {
	data: () => ({
		info: 'Foo'
	}),

	methods: {
		getInfo() {
			return this.$store.getters.getName
		}
	},

	mounted() {
		this.$store.dispatch('setNameFromServer')
		.then(() => {
			this.info = this.getInfo()
		})
		.cath(err => {
			throw err
		})
	}
}
</script>

<style scoped lang="sass">
	.default-title
		font-size: 24px
</style>