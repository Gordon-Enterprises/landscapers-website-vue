<template>
<div id="app">
  <HeadComponent />
  <NavComponent />
  <main>
    <router-view />
    <FooterSection />
  </main>

</div>
</template>


<script>
import FooterSection from './components/shared/FooterSection.vue';
import HeadComponent from './components/shared/HeadComponent.vue';
import NavComponent from './components/shared/NavComponent.vue';

export default {
  name: 'app',
  components: {
    'HeadComponent': HeadComponent,
    'FooterSection': FooterSection,
    'NavComponent': NavComponent,
  }

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
nav {
    background-color: $primaryColor;
    color: white;
    font-family: 'Lato', sans-serif;
    //  border-top: 40px solid $secondaryColor;
    //  border-bottom: 40px solid $primaryColor;
    .navToggle {
        color: white;
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
}
.router-link-active {
    color: white;
}
</style>
