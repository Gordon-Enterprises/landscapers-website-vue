<template>
  <footer class='footer container-fluid'>
  <div class='row tag'>
  <span class='col offset-1'>Capital Region Landscaping</span>
  <span class='col offset-5 fas fa-phone fa-lg icon d-none d-md-block'> Call Now: (518) 235-1234</span>
  </div>
    <div class='row'>
      <div class='col-5 col-sm-2 offset-1'>
        <h5 class='mb-3'>Links</h5>
        <ul class='list-unstyled'>
          <li><a href='./index.html'
            title='Return Home'
            class='active'>Home
          </a></li>
          <li><a href='./about.html'
            title='Refresh Page'
            class=''>About
          </a></li>
          <li><a href='./contact.html'
             title='Visit our Contact Page'
             class=''>Contact
          </a></li>
        </ul>
      </div>
      <div class='col-6 col-sm-5'>
        <h5 class='mb-3'>Location</h5>
        <address>
          Guilderland, <br>New York<br>
          <span class='fas fa-envelope d-none d-md-block'><a href='@.com' title='Email us' class=''> enter@emailhere.com</a></span>
        </address>
      </div>
      <div class='col col-sm-4 align-self-center'>
        <div style='text-align:center'>
          <a class='btn btn-social-icon btn-facebook fa-lg' href='https://www.facebook.com/' title='Connect with us on Facebook'><span class='fab fa-facebook'></span></a>
          <a class='btn btn-social-icon btn-google fa-lg' href='https://www.plus.google.com/' title='Connect with us on Google Plus'><span class='fab fa-google-plus'></span></a>
          <a class='btn btn-social-icon fa-lg' href='mailto:.com' title='Email Us'><span class='fas fa-envelope'></span></a>
        </div>
      </div>
    </div>
    <div class='row justify-content-center'>
      <div class='col col-auto'>
        <p> <a href="http://gordonholdingsco.com/index.html" title='Visit Gordon Enterprises Business Consulting Website'>Created by Gordon Enterprises</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
footer {
  background-image: url('../assets/img/asymmetry-botanical-bright-1029592.jpg');
  border-top: 2px solid $secondaryColor;
  background-color: $primaryColor;
  padding-top: 20px;
  color: $highlightColor;
  span {
  }

  .tag {
    margin-bottom: 25px;
  }
}

</style>
