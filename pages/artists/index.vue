<template>
  <div>
    <h1>
      Artists
    </h1>

    <ul id="artists" class="grid grid-cols-5 gap-4">
      <li v-for="artist in artists" :key="artist.id" :class="[`hover:bg-${artist.colour}-900`, 'border-2', 'border-solid', `border-transparent`, `hover:border-${artist.colour}-500`]">
        <nuxt-link :to="artist.path">
          <h3 :class="`text-${artist.colour}-300`">{{ artist.name }}</h3>

          <img :src="`/avatars/${artist.avatar}`" height="128px" width="128px" :class="['border-4', 'border-solid', `border-${artist.colour}-500`, 'shadow-xl', 'shadow-black']" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const artists = await $content('artists')
    .where({ slug: { $ne: "__template__" } })
    .fetch()

    return {
      artists
    }
  }
}
</script>

<style lang="postcss">
@layer components {
  h1 {
   @apply text-green-300 text-5xl mb-4; 
  }

  h2 {
    @apply text-green-300 text-3xl mb-4
  }

  h3 {
    @apply text-green-300 text-xl mb-4;
  }
}

ul {
  display: flex;
}

ul#artists li {
  margin: 2em;
  border-width: 2px;
  border-style: solid;
  border-radius: 24px;
}

ul#artists li:hover {
  /* border: 2px solid black; */
}

ul#artists li a {
  padding: 1em;
}

ul li a h3 {
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1em;
}

ul li a img {
  border-radius: 64px;
  margin: 0 auto; 
}
</style>
