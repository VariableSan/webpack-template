<template lang="pug">
v-navigation-drawer(app, temporary, v-model='drawerT')
  v-list(dense)
    v-list-item(:key='item.text', :to='item.link', link, v-for='item in links')
      v-list-item-action
        v-icon {{ item.icon }}
      v-list-item-content
        v-list-item-title {{ item.text }}
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: () => false
    },

    links: {
      type: Array,
      default: () => []
    }
  },

  model: {
    prop: 'drawer',
    event: 'drawer:change'
  },

  computed: {
    drawerT: {
      get() {
        return this.drawer
      },

      set(value) {
        this.$emit('drawer:change', value)
      }
    }
  }
}
</script>
