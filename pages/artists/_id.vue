<template>
  <div class="dual-section">
    <section class="left-section">
      <h2 :class="colours">
        Roles
      </h2>

      <ul>
        <li v-for="role in artist.roles" :key="role">
          <role :role="role" :roles="roles" />
        </li>
      </ul>

      <div :class="[bgColour, 'separator']"></div>

      <h2 :class="colours">
        Tools
      </h2>

      <ul>
        <li v-for="tool in artist.tools" :key="tool">
          <tool :tool="tool" :tools="tools" />
        </li>
      </ul>

      <div :class="[bgColour, 'separator']"></div>

      <h2 :class="colours">
        Genres
      </h2>

      <ul>
        <li v-for="genre in artist.genres" :key="genre">
          <genre :genre="genre" :genres="genres" />
        </li>
      </ul>

      <div :class="[bgColour, 'separator']"></div>
    </section>

    <section class="right-section">
      <img id="avatar" :src="avatar" alt="Avatar" width="128px" height="128px" :class="['float-right', `border-${artist.colour}-500`]" />

      <h1 :class="['mb-0', colours]">
        {{ artist.name }}
      </h1>

      <nuxt-content :document="artist" />
    </section>
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

    const roles = await $content('roles').fetch()
    const tools = await $content('tools').fetch()
    const genres = await $content('genres').fetch()

    return {
      artist: artist[0],
      roles,
      genres,
      tools
    }
  },

  computed: {
    colours() {
      return [
        `text-${this.artist.colour}-500`,
        `border-${this.artist.colour}-500`
      ];
    },

    bgColour() {
      return `bg-${this.artist.colour}-500`;
    },

    avatar() {
      return `/avatars/${this.artist.avatar}`
    }
  }
}
</script>

<style lang="postcss" scoped>
@layer components {
  h1 {
    @apply text-5xl pb-6 border-b-2 border-solid mb-4;
  }

  h2 {
    @apply text-3xl mb-4
  }

  h3 {
    @apply text-xl mb-4;
  }

  div.separator {
    height: 2px;
    width: 100%;
    @apply my-8;
  }

  img#avatar {
    @apply mt-2 rounded-full border-solid border-4;
  }
}
</style>
