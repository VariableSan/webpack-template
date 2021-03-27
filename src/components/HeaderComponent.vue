<template lang="pug">
v-app-bar(app)
  v-app-bar-nav-icon.hidden-md-and-up(@click='$emit("drawer:clicked")')

  v-toolbar-title
    router-link(custom, to='/', v-slot='{ navigate }')
      button(@click='navigate', role='link') Page

  v-spacer

  v-btn.hidden-sm-and-down(
    :key='item.text',
    :to='item.link',
    depressed,
    v-for='item in links'
  )
    v-icon(left) {{ item.icon }}
    | {{ item.text }}
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
