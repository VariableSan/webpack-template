<template lang="pug">
v-container
  h4.home__title {{ variable1 }}
  h4 {{ variable2 }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('test', {
      variable1: 'test1'
    }),

    variable2() {
      return this.$store.getters['test/test2']
    }
  }
}
</script>

<style lang="sass" scoped>
.home
  &__title
    +rfs(30px)
</style>
