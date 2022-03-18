<template>
  <div>
    {{ emoji }} {{ name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: '',
      name: '',
      emoji: ''
    }
  },

  created() {
    const foundRole = this.roles.find(role => role.slug === this.role)
    
    if (foundRole) {
      this.slug = foundRole.slug
      this.name = foundRole.name
      this.emoji = foundRole.emoji
    }
    else {
      console.log(`Couldn't find role ${this.role}.`)
    }
  },

  props: {
    role: String,
    roles: Array
  }
}
</script>

<style>

</style>
