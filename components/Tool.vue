<template>
  <div>
    <img :src="icon" :alt="name" height="16px" width="16px" /> {{ name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: '',
      name: '',
      icon: ''
    }
  },

  created() {
    const foundTool = this.tools.find(tool => tool.slug === this.tool)

    if (foundTool) {
      this.slug = foundTool.slug
      this.name = foundTool.name
      this.icon = foundTool.icon
    }
    else {
      console.log(`Couldn't find tool ${this.tool}.`)
    }
  },

  props: {
    tool: String,
    tools: Array
  }
}
</script>

<style>

</style>
