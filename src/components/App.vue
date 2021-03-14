<template lang="pug">
v-app
  v-app-bar(app)
    v-app-bar-nav-icon.hidden-md-and-up(@click='drawer = !drawer')
    v-toolbar-title
      router-link(custom, to='/', v-slot='{ navigate }')
        button(@click='navigate', role='link') First SPA
    v-spacer
    v-btn.hidden-sm-and-down(
      :key='item.text',
      :to='item.link',
      depressed,
      v-for='item in redirectLinks'
    )
      v-icon(left) {{ item.icon }}
      | {{ item.text }}

  v-navigation-drawer(app, temporary, v-model='drawer')
    v-list(dense)
      v-list-item(
        :key='item.text',
        :to='item.link',
        link,
        v-for='item in redirectLinks'
      )
        v-list-item-action
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title {{ item.text }}

  v-main
    router-view

  v-footer(app)
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    redirectLinks: [
      { text: 'sign in', icon: 'lock_open', link: '/login' },
      { text: 'sign up', icon: 'person_add', link: '/register' },
      { text: 'about', icon: 'info', link: '/about' },
      { text: 'users', icon: 'supervised_user_circle', link: '/users/all' }
    ]
  })
}
</script>

<style lang="sass" scoped></style>
