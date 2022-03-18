<template>
  <div class="dual-section">
    <section class="left-section">
      <h2>
        Search
      </h2>

      <input type="text" class="bg-gray-800 p-4 rounded-md w-full" placeholder="Find an Artist" v-model="searchQuery" />

      <div class="separator"></div>

      <h2>
        Filter
      </h2>

      <h3>
        Genre
      </h3>

      <!-- <pre>{{ genres }}</pre> -->

      <ul>
        <li v-for="genre in genres" :key="genre.slug" class="p-2">
          {{ genre.emoji }} {{ genre.name}}
        </li>
      </ul>

      <h3>
        Roles
      </h3>

      <ul>
        <li v-for="role in roles" :key="role.slug" class="p-2">
          {{ role.emoji }} {{ role.name}}
        </li>
      </ul>

      <h3>
        Tools
      </h3>

      <ul>
        <li v-for="role in roles" :key="role.slug" class="p-2">
          {{ role.emoji }} {{ role.name}}
        </li>
      </ul>
    </section>

    <section class="right-section">
      <h1 class="mb-0">
        Artists
      </h1>
      <!--
      <div class="bg-green-500">
        <p>Search query: {{ searchQuery }}</p>
      </div>
      -->

      <div v-if="filteredArtists.length">
        <ul id="artists" class="grid grid-cols-4 gap-2">
          <li v-for="artist in filteredArtists" :key="artist.id" :class="[`hover:bg-${artist.colour}-900`, 'border-2', 'border-solid', `border-transparent`, `hover:border-${artist.colour}-500`]">
            <nuxt-link :to="artist.path">
              <h4 :class="`text-${artist.colour}-300`">{{ artist.name }}</h4>

              <img :src="`/avatars/${artist.avatar}`" height="128px" width="128px" :class="['border-4', 'border-solid', `border-${artist.colour}-500`, 'shadow-xl', 'shadow-black']" />
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div v-else>
        <h2>Not Found</h2>

        <p>No matching artist(s) could be found.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    }
  },

  async asyncData ({ $content }) {
    const artists = await $content('artists')
      .where({ slug: { $ne: "__template__" } })
      .fetch()
    
    const genres = await $content('genres').fetch()    

    const roles = await $content('roles').fetch()    

    const tools = await $content('tools').fetch()    

    return {
      artists, genres, roles, tools
    }
  },

  computed: {
    filteredArtists() {
      if (this.searchQuery.length) {
        return this.artists.filter((artist) => artist.name.includes(this.searchQuery))
      }
      else {
        return this.artists;
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
@layer components {
  h1 {
    @apply text-green-500 text-5xl pb-6 border-green-500 border-b-2 border-solid mb-4;
  }

  h2 {
    @apply text-green-500 text-3xl mb-4
  }

  h3 {
    @apply text-green-500 text-xl mb-4;
  }

  div.separator {
    height: 2px;
    width: 100%;
    @apply bg-green-500 my-8;
  }
}

ul#artists li {
  margin: 2em;
  border-width: 2px;
  border-style: solid;
  border-radius: 24px;
  list-style-type: none;
}

ul#artists li:hover {
  /* border: 2px solid black; */
}

ul#artists li a {
  padding: 1em;
}

ul li a h4 {
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
