<template>

    <content class='row row-12 hours'>
    	<div class="col col-12 col-lg-6" >
    	<h3 class='col col-12'>Get In Touch</h3>
    			<p>Give us a call or send us an email today to start the path towards a brighter, greener, more beautiful landscape at your home or office.</p>
    	<h4 class=''>Hours</h4>
    	<p>Monday: 8 AM - 5 PM</p>
    	<p>Tuesday: 8 AM - 5 PM</p>
    	<p>Wednesday: 8 AM - 5 PM</p>
    	<p>Thursday: 8 AM - 5 PM</p>
    	<p>Friday: 8 AM - 5 PM</p>
    	<p>Saturday: 12 PM - 5 PM</p>
    	<h4>Phone</h4>
    	<p>(518) 235-1234</p>
    	</div>
    	<div class="col col-12 col-lg-6" >
    		<content class="container-fluid" id='feedback'>
    			<div class="row row-12">
    				<div class="card col col-12">
    					<div class="card-heading">
    						<h1 id="feedback-head">Contact Us</h1>
    					</div>

    					<div class="card-body">
    						<!-- Start form -->
    							<!-- Post request to php script -->
    							<form action="./php/feedback_handler.php" method="post" name="form">

    								<div class="form-group">
    									<input type="text" name="name" class="form-control" placeholder="Name" required><br>
    								</div>

    								<div class="form-group">
    									<input type="email" name="email" class="form-control" placeholder="Email" required><br>
    								</div>

    								<div class="form-group">
    									<input type="tel" name="phone" class="form-control" placeholder="Phone" required><br>
    								</div>

    								<div class="form-group">
    									<textarea name="msg" class="form-control" placeholder="Enter Your Message Here" rows="4" required></textarea><br>
    								</div>

    								<div id="captcha">
    									<div class="g-recaptcha" data-sitekey="6LfH6CYUAAAAABpPRnS13C7lJCrcfKXEkjFVnJF8"></div>
    								</div>

    								<input type="submit" name="submit" value="Send" class="btn btn-lg btn-primary btn-block">

    							</form>
    					</div>

    				</div>

    			</div>
    		</content>
    	</div>
    </content>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
$primaryColor: #01792a;
$secondaryColor: #39da73;
$accentColor: #3e824f;
$highlightColor: rgb(237, 236, 245);
$linkColor: rgb(37, 150, 153);
$linkHoverColor: $secondaryColor;
$linkActiveColor: $accentColor;

content.hours {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: $primaryColor;
  bottom: 35px;
  h2 {
    font-family: 'Lato', sans-serif;
    padding-top: 50px;
    text-align: center;
    padding-bottom: 20px;
  } h4 {
    text-align: center;
    padding-top: 35px;
    padding-bottom: 20px;
  }
  p {
    text-align: center;
    margin-top: 5px;
  }

  .list-titles {
    padding-top: 25px;
    margin-bottom: 5px;
    :after{
     border-bottom: 2px solid $secondaryColor;
     content: ""; /* This is necessary for the pseudo element to work. */
     display: block; /* This will put the pseudo element on its own line. */
     width: 40%; /* Change this to whatever width you want. */
    }
  }

}

#feedback {
      margin-bottom: 25px;
     #feedback-head {
      	text-align: center;
        color: $primaryColor;
      	font-size: 30px;
      	font-family: 'Quicksand', sans-serif;
      	margin-top: 20px;
      	margin-bottom: 20px;
      }

  /* Form itself */
  #mail-form {
  	width: 85%;
  	max-width: 500px;
  }

  /* Resize testarea */
  textarea {
  	resize: none;
  	overflow: scroll;
  }

  /* Google captcha */
  #captcha {
  	margin-bottom: 30px;
  }

  /* Fix sizing on captcha */
.g-recaptcha div {
   margin-left: auto; margin-right: auto;
}

  @media only screen and (max-width: 420px) {
  	.g-recaptcha {
  	transform:scale(0.81);
  	transform-origin: 0;
  	}
  }

  /* Submit button */
  .btn-primary:hover {
    color: $secondaryColor;
  	background-color: $primaryColor;
    border-color: $primaryColor;
  }

  .btn-primary:active {
    color: $secondaryColor;
    background-color: $primaryColor;
    border-color: $primaryColor;
  }

  .btn-primary:focus {
    background-color: $primaryColor; //footer stylesheet
    border-color: $primaryColor;
  }

  .btn-primary:active:focus {
    color: $secondaryColor;
    background-color: $primaryColor;
    border-color: $primaryColor;
  }

  .btn-primary:disabled {
  	color: white;
  	background-color: $primaryColor;
  }

  .btn-primary:disabled:hover {
  	color: white;
  	background-color: $primaryColor;
  }

  .btn-primary {
  	color: $primaryColor;
    background-color: $highlightColor;
    border-color: $primaryColor;
  }

  /* All feedback in a card */
  .card {
  	margin: auto;
  	margin-top: 30px;
  	min-width: 50%;
  	max-width: 75%;

  }

  .card-body {
  	padding-top: 30px;
  	padding-bottom: 30px;
  }

  .form-group {
  	margin-bottom: 10px;
  }



} //feedback

</style>
