<template>
  <div>
    <h3>Artists</h3>

    <ul>
      <li v-for="artist in artists" :key="artist.id">
        <nuxt-link :to="artist.path">
            {{ artist.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const artists = await $content('artists').fetch()

    return {
      artists
    }
  }
}
</script>

<style>

</style>
