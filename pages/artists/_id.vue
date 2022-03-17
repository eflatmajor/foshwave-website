<template>
  <div>
    <p><nuxt-link to="/artists">Back to Artists</nuxt-link></p>

    <pre>{{ artist }}</pre>

    <nuxt-content :document="artist" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const artist = await $content('artists')
      .where({ slug: { $eq: params.id } })
      .fetch()

    if (artist.length === 0) {
      error({ statusCode: 404, message: 'Artist not found.' })
    }
    
    console.log(artist)

    return {
      artist: artist[0]
    }
  }
}
</script>

<style>

</style>
