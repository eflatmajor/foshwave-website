<template>
  <header>
    <nav class="bg-gray-900 text-lg">
      <ul>
        <li class="ml-8">
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

        <!--
          <li style="margin-left: auto">
          <a href="#" target="_blank" title="View our Spotify account.">
            <img src="/logos/spotify.png" height="32px" width="32px" alt="Spotify" />
          </a>
        </li>
        -->

        <li style="margin-left: auto">
          <a href="https://soundcloud.com/foshwavenoises" target="_blank" title="View our SoundCloud account.">
            <img src="/logos/soundcloud.png" height="32px" width="32px" alt="SoundCloud" />
          </a>
        </li>

        <li>
          <a href="https://discord.gg/2Cd6eDMBtp" target="_blank" title="Join our Discord server.">
            <img src="/logos/discord.png" height="32px" width="32px" alt="Discord" />
          </a>
        </li>

        <li>
          <a href="https://twitter.com/foshwavenoises/" target="_blank" title="View our Twitter account.">
            <img src="/logos/twitter2.png" height="32px" width="32px" alt="Twitter" />
          </a>
        </li>

        <li>
          <a href="https://www.youtube.com/channel/UC8Q9O2-SHQC_aYx9nb6MsqA" target="_blank" title="View our YouTube account.">
            <img src="/logos/youtube2.png" height="32px" width="32px" alt="YouTube" />
          </a>
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
  padding-right: 1em;
}

nav ul li {
  margin: 1em 0.5em;
}

nav ul li.nav-button a {
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
