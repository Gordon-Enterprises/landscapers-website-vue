<template>
  <div id="app">
    <header>
    <nav>
      <ul>
        <li class='nav-item'>
          <router-link :to="{ name: 'Home', params: {} }" class='nav-link' exact>
            Home
          </router-link>
        </li>
        <li class='nav-item'>
          <router-link :to="{ name: 'About', params: {} }" class='nav-link' exact>
            About
          </router-link>
        </li>
        <li class='nav-item'>
          <router-link to="/contact" class='nav-link' exact>
            Contact
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
    <ContactForm/>
    <FooterSection/>
  </main>

  </div>
</template>

<script>
//import HomePage from './components/HomePage.vue'
//import AboutPage from './components/AboutPage.vue'
//import ContactPage from './components/ContactPage.vue'

import ContactForm from './components/ContactForm.vue'
import FooterSection from './components/FooterSection.vue'


export default {
  name: 'app',

}
</script>

<style lang='scss'>
$primaryColor: #01792a;
$secondaryColor: #39da73;
$accentColor: #3e824f;
$highlightColor: rgb(237, 236, 245);
$linkColor: rgb(37, 150, 153);
$linkHoverColor: $secondaryColor;
$linkActiveColor: $accentColor;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: $highlightColor;
}
a:hover {
  color: $linkHoverColor;
}
a:active {
  color: $linkActiveColor;
}
a:focus {
  color: $linkActiveColor;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;

}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

.router-link-active {
  color: white;
}

</style>
