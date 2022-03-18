<template>
  <div class="dual-section">
    <section class="left-section">
      <h2 :class="colours">
        Socials
      </h2>

      <ul id="socials" class="w-full" v-if="hasLinks">
        <li v-for="link in artist.links" :key="link.slug">
          <a :href="link.url" :title="`Visit ${link.name}.`">
            <img :src="`/logos/${link.icon}.png`" height="32px" width="32px" :alt="link.name" />
          </a>
        </li>
      </ul>

      <p v-else>No socials found.</p>

      <div :class="[bgColour, 'separator']"></div>

      <h2 :class="colours">
        Tools
      </h2>

      <ul id="tools" v-if="artist.tools.length">
        <li v-for="tool in artist.tools" :key="tool">
          <tool :tool="tool" :tools="tools" />
        </li>
      </ul>

      <p v-else>No tools found.</p>

      <div :class="[bgColour, 'separator']"></div>

      <h2 :class="colours">
        Roles
      </h2>

      <ul id="roles" v-if="artist.roles.length">
        <li v-for="role in artist.roles" :key="role">
          <role :role="role" :roles="roles" />
        </li>
      </ul>

      <p v-else>No roles found.</p>

      <div :class="[bgColour, 'separator']"></div>
      
      <h2 :class="colours">
        Genres
      </h2>

      <ul id="genres" v-if="artist.genres.length">
        <li v-for="genre in artist.genres" :key="genre">
          <genre :genre="genre" :genres="genres" />
        </li>
      </ul>
      
      <p v-else>No genres found.</p>

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
    },

    hasLinks() {
      if ( ! this.artist.links) {
        return false;
      }

      return this.artist.links.length > 0;
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
  
  ul#socials {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;
    gap: 16px;
  }
  ul#socials li {
    margin: 0.5em 0;
    justify-self: center;
  }

  ul#tools {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;
    gap: 16px;
  }
  ul#tools li {
    margin: 0.5em 0;
    justify-self: center;
  }

  ul#roles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;
    gap: 16px;
  }
  ul#roles li {
    margin: 0.5em 0;
    /* justify-self: center; */
  }

  ul#genres {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;
    gap: 16px;
  }
  ul#genres li {
    margin: 0.5em 0;
    /* justify-self: center; */
  }
}
</style>
