<template>
  <header>
    <nav class="bg-gray-900 text-lg">
      <ul>
        <li class="mr-4">
          <img src="/foshwave.png" alt="Foshwave" title="Foshwave" height="32px" width="32px" />
        </li>

        <li id="nav-home" class="nav-button">
          <nuxt-link to="/" title="The homepage." class="text-purple-300">
            Home
          </nuxt-link>
        </li>

        <li id="nav-about" class="nav-button">
          <nuxt-link to="/about" title="About Foshwave." class="text-red-300">
            About
          </nuxt-link>
        </li>

        <li id="nav-contact" class="nav-button">
          <nuxt-link to="/contact" title="Contact Foshwave." class="text-blue-300">
            Contact
          </nuxt-link>
        </li>

        <li id="nav-artists" class="nav-button">
          <nuxt-link to="/artists" title="Check out the artists under our label." class="text-green-300">
            Artists
          </nuxt-link>
        </li>

        <li id="nav-catalogue" class="nav-button">
          <nuxt-link to="/catalogue" title="Check out the music our label has released." class="text-pink-300">
            Catalogue
          </nuxt-link>
        </li>

        <li id="nav-posts" class="nav-button">
          <nuxt-link to="/posts" title="Read our blog." class="text-indigo-300">
            Posts
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="postcss">
@layer components {
  section.main-section {
    @apply bg-gray-900 mx-16 my-16 p-8 rounded-lg text-xl max-w-6xl mx-auto drop-shadow-2xl;
    /* position: relative; */
  }

  div.dual-section {
    @apply mx-auto p-16;
    display: flex;
  }

  section.left-section {
    @apply bg-gray-900 p-8 mr-16 rounded-lg text-xl w-96 drop-shadow-2xl;
  }
  section.right-section {
    flex: 1;
    @apply bg-gray-900 p-8 rounded-lg text-xl drop-shadow-2xl; /* max-w-4xl */
  }

  section.right-section p {
    margin: 1em;
  }

  /*
  section.section::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/foshwave.png);
    background-position: top right;
    background-size: 186px;
    background-repeat: no-repeat;
    background-clip: border-box;
    background-origin: content-box, padding-box;
    opacity: 0.1;
  }
  */

  section.main-section p {
    margin: 1em;
  }
  section.main-section p:last-child {
    margin-bottom: 0;
  }

  textarea.nuxt-content-editor {
    @apply bg-gray-700 p-8 rounded-lg text-xl;
  }
}

nav {
  text-transform: uppercase;
}

nav ul {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1em;
}

nav ul li.nav-button {
  height: 64px;
  line-height: 64px;
  display: flex;
}

nav ul li.nav-button {
  margin: 0 0.25em;
}
nav ul li.social-button {
  margin: 0 0.5em;
}

nav ul li.nav-button a {
  padding: 0 0.8em;
}

.nuxt-link-exact-active {
  background-color: #1F2937 ;
}

#nav-home > .nuxt-link-exact-active {
  border-bottom: 4px solid #D8B4FE;
}

#nav-about > .nuxt-link-exact-active {
  border-bottom: 4px solid #FCA5A5;
}

#nav-contact > .nuxt-link-exact-active {
  border-bottom: 4px solid #93C5FD;
}

#nav-artists > .nuxt-link-active {
  border-bottom: 4px solid #86EFAC;
}

#nav-catalogue > .nuxt-link-exact-active {
  border-bottom: 4px solid #F9A8D4;
}

#nav-posts > .nuxt-link-exact-active {
  border-bottom: 4px solid #A5B4FC;
}
</style>
