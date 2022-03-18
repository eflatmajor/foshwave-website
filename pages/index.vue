<template>
  <section class="main-section">
    <h1>
      Welcome to Foshwave
    </h1>

    <h2>
      What is Foshwave?
    </h2>

    <p>I'm glad you asked!</p>

    <p>Foshwave is a music label/collective/community with roots in electronic music, that specializes in thematic compilations and discussions, and releases music in support of marine-focused charities.</p>

    <h2>
      Can I release my music here?
    </h2>

    <p>Of course! Foshwave has little to no quality control for song releases, so if you have a song you'd like to release with Fosh, send it over!</p>
    
    <p>Keep in mind that Foshwave is primarily electronically focused, thus, a 46 minute recording of throat singing on a cellphone mic probably won't make the cut. While there are some basic standards for releases, Foshwave itself is very flexible in terms of genre and style.</p>

    <h2>
      How much does that cost?
    </h2>

    <p>We try our hardest to provide a dynamic space to release, promote, and to share music. While we don't currently charge for distribution for Foshwave, it is not free for us, therefore we can't keep it free forever.</p>
    
    <p>Distribution will stay free for now, but we may request some financial support in the future.</p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="postcss" scoped>
@layer base {
  h1 {
   @apply text-purple-500 text-5xl mb-4 pb-6 border-purple-500 border-b-2 border-solid; 
  }

  h2 {
    @apply text-purple-500 text-3xl mb-4
  }

  h3 {
    @apply text-purple-500 text-xl mb-4;
  }
}
</style>
