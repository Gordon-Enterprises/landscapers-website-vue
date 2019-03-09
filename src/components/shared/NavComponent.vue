<template>
  <header>
    <nav class='navbar fixed-top navbar-expand-lg'>
      <!-- Container 1 -->
      <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar' aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class='fas fa-bars fa-lg navToggle'></span>
      </button>
      <div class='container-fluid row row-12'>

        <div class='collapse navbar-collapse' id='navbar'>
          <span id=''>Ellerup Landscaping Logo</span>
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item nav-link'>
              <router-link :to="{ name: 'Home', params: {} }" class='nav-link' exact>
                Home
              </router-link>
            </li>
            <li class='nav-item nav-link'>
              <router-link :to="{ name: 'About', params: {} }" class='nav-link' exact>
                About
              </router-link>
            </li>
            <li class='nav-item nav-link'>
              <router-link to="/contact" class='nav-link' exact>
                Contact
              </router-link>
            </li>
          </ul>
        </div>
        <!-- Close navbar collapse div-->
      </div>
      <!--Close container 1 -->
    </nav>
    <!-- End Nav -->
    <nav>
      <ul>

      </ul>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>
