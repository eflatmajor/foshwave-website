<template>
  <header>
    <nav class="bg-gray-900 text-lg">
      <ul>
        <li class="ml-8">
          <img src="foshwave.png" alt="Foshwave" title="Foshwave" height="32px" width="32px" />
        </li>

        <li id="nav-home">
          <nuxt-link to="/" title="The homepage." class="text-purple-300">
            Home
          </nuxt-link>
        </li>

        <li id="nav-about">
          <nuxt-link to="/about" title="About Foshwave." class="text-red-300">
            About
          </nuxt-link>
        </li>

        <li id="nav-contact">
          <nuxt-link to="/contact" title="Contact Foshwave." class="text-blue-300">
            Contact
          </nuxt-link>
        </li>

        <li id="nav-artists">
          <nuxt-link to="/artists" title="Check out the artists under our label." class="text-green-300">
            Artists
          </nuxt-link>
        </li>

        <li id="nav-catalogue">
          <nuxt-link to="/catalogue" title="Check out the music our label has released." class="text-pink-300">
            Catalogue
          </nuxt-link>
        </li>

        <li id="nav-posts">
          <nuxt-link to="/posts" title="Read our blog." class="text-indigo-300">
            Posts
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
nav {
  text-transform: uppercase;
}

nav ul {
  display: flex;
}

nav ul li {
  margin: 1em 0.5em;
}

nav ul li a {
  padding: 1.1em;
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
