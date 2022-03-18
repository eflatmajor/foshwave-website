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

  mounted() {
    const foundGenre = this.genres.find(genre => genre.slug === this.genre)

    if (foundGenre) {
      this.slug = foundGenre.slug
      this.name = foundGenre.name
      this.emoji = foundGenre.emoji
    }
    else {
      console.log(`Couldn't find genre ${this.genre}.`)
    }
  },

  props: {
    genre: String,
    genres: Array
  }
}
</script>

<style>

</style>
