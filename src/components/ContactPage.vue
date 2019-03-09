<template>
<html lang='en'>

<head>
  <!-- Required meta tags always come first -->
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
  <meta http-equiv='x-ua-compatible' content='ie=edge'>

  <meta name="description" content="Ellerup Landscaping specializes in tree removal, lawn care, as well as taking care of general landscaping needs.">
  <meta name="keywords" content="landscaping, landscapers, tree removal, gardening, home, improvement, tree, removal, lawn, lawn care, landscape, albany, new york, saratoga, schenectady, lawnmowing, mowing, repair, recycling, entrepreneurialism, entrepreneur, business, consulting,">
  <meta name="robots" content="index">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Lato|Noto+Serif+KR|Slabo+27px" rel="stylesheet">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
  <link rel='stylesheet' href='assets/css/styles.css'>

  <title> Heath Landscaping Services LLC | Best Landscaping in Capital Region | Tree Removal Experts | Albany Schenectady Guilderland Saratoga Troy</title>
</head>

<body>

  <main class='container-fluid' id='contact'>
    <!-- Container 2-->
    <div class='row row-12 row-header'>
      <h1 class='d-none d-sm-block my-4 col col-12'> Contact Us </h1>
      <p class='d-none d-md-block mb-5 col col-12'>To get in touch with us by email with questions, feedback, or to request a free consultation about a job, please fill out the form below. We look forward to hearing from you! </p>
    </div>


    <!-- Actual feedback form -->
    <content class="container-fluid" id='feedback'>
      <div class="row row-12">
        <div class="card col col-12">
          <div class="card-heading">
            <h1 id="feedback-head">Request A Consultation</h1>
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
                <textarea name="msg" class="form-control" placeholder="Enter your message here.." rows="4" required></textarea><br>
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

    <content class='row row-12 contact'>
      <div class="col col-12 col-lg-6">
        <h2 class='col col-12'>Get In Touch</h2>
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
      <div class="col col-12 col-lg-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d264685.85531459877!2d-73.6480701669722!3d42.864059145906374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1536946310912" width="600" height="450" frameborder="0"
          style="border:0" allowfullscreen></iframe>
      </div>
    </content>
  </main>
</body>

</html>
</template>

<script>
export default {
  name: 'ContactPage',
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

//site wide styles

//end site wide stylesheet

//contact specific stylesheet

#contact {
    color: $primaryColor;
    margin-top: 75px;
    text-align: i;
    margin-bottom: 50px;
}

//end contact specific stylesheet

//index specific stylesheet

.jumbotron {
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: white;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    background-image: url("../assets/img/abstract-art-artificial-131634.jpg");
    .actionBtn {
        margin-top: 30px;
    }
    //unused
    //  background-image: url('../img/close-up-green-nature-207269.jpg');
    //  background-image: url('../img/abstract-dew-fresh-207355.jpg');
    //    background-image: url('../img/agriculture-biology-close-up-396166.jpg');
    //   background-image: url('../img/asymmetry-botanical-bright-1029592.jpg');
    // background-image: url('../img/background-beautiful-bloom-985266.jpg')
    //   background-image: url('../img/bloom-blossom-flora-57368.jpg');
    //   background-image: url('../img/bloom-blossom-flora-158636.jpg');
    //   background-image: url('../img/arrangement-bloom-blooming-462402.jpg');
    //   background-image: url('../img/beautiful-bloom-blooming-109828.jpg');
    //   background-image: url('../img/beautiful-bloom-blooming-130847.jpg');

    //used
    // architecture-clouds-daylight-259588.jpg
    //   background-image: url('../img/beautiful-branch-conifer-1058155.jpg');
    //   background-image: url('../img/blade-blur-dew-212324.jpg');
    //  background-image: url('../img/background-bokeh-green-6466.jpg');
    //   background-image: url('../img/asymmetry-botanical-bright-1029592.jpg');
    //    background-image: url('../img/flora-flowes-green-122429.jpg');
    //     background-image: url('../img/abstract-art-artificial-131634.jpg');

    margin-top: 52px;
    width: auto;
}

content {
    padding-top: 15px;
    .bigImg {
        height: 450px;
        width: auto;
    }
}

content.about {
    padding-top: 50px;
    margin-right: auto;
    margin-left: auto;
    color: $primaryColor;
    text-align: center;
    width: 60%;
    p {
        margin-top: 35px;
    }
}

content.process {
    padding-top: 35px;
    padding-bottom: 50px;
    margin-right: auto;
    margin-left: auto;
    color: $primaryColor;
    text-align: center;
    justify-content: space-between;
    width: 85%;
    .card {
        border-color: $secondaryColor;
        margin-top: 35px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        .icon {
            padding-bottom: 15px;
        }
    }
}

content.services {
    padding-top: 35px;
    padding-bottom: 50px;
    margin-right: auto;
    margin-left: auto;
    color: $primaryColor;
    text-align: center;
    justify-content: space-between;

    .card {
        border-color: $secondaryColor;
        margin-top: 35px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        .icon {
            padding-bottom: 15px;
        }
    }
}
content.service1 {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: $primaryColor;
    padding-bottom: 35px;
    h2 {
        font-family: 'Lato', sans-serif;
        text-align: center;
        padding-top: 35px;
    }
    p {
        text-align: center;
        margin-top: 25px;
    }
    .list-titles {
        padding-top: 25px;
        margin-bottom: 5px;
        :after {
            border-bottom: 2px solid $secondaryColor;
            content: "";
            /* This is necessary for the pseudo element to work. */
            display: block;
            /* This will put the pseudo element on its own line. */
            width: 23%;
            /* Change this to whatever width you want. */
        }
    }
}

content.service3 {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: $primaryColor;
    padding-bottom: 35px;
    h2 {
        font-family: 'Lato', sans-serif;
        text-align: center;
        padding-top: 35px;
    }
    p {
        text-align: center;
        margin-top: 25px;
    }
    .list-titles {
        padding-top: 25px;
        margin-bottom: 5px;
        :after {
            border-bottom: 2px solid $secondaryColor;
            content: "";
            /* This is necessary for the pseudo element to work. */
            display: block;
            /* This will put the pseudo element on its own line. */
            width: 33%;
            /* Change this to whatever width you want. */
        }
    }
}

content.service2 {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: $primaryColor;
    padding-bottom: 35px;
    h2 {
        font-family: 'Lato', sans-serif;
        text-align: center;
        padding-top: 35px;
    }
    p {
        text-align: center;
        margin-top: 25px;
    }
    .list-titles {
        padding-top: 25px;
        margin-bottom: 5px;
        :after {
            border-bottom: 2px solid $secondaryColor;
            content: "";
            /* This is necessary for the pseudo element to work. */
            display: block;
            /* This will put the pseudo element on its own line. */
            width: 40%;
            /* Change this to whatever width you want. */
        }
        .title2:after {
            border-bottom: 2px solid $secondaryColor;
            content: "";
            /* This is necessary for the pseudo element to work. */
            display: block;
            /* This will put the pseudo element on its own line. */
            width: 45%;
            /* Change this to whatever width you want. */
        }
        .title3:after {
            border-bottom: 2px solid $secondaryColor;
            content: "";
            /* This is necessary for the pseudo element to work. */
            display: block;
            /* This will put the pseudo element on its own line. */
            width: 37%;
            /* Change this to whatever width you want. */
        }
    }

}
content.service1 img {
    padding-left: 35px;
    width: 90%;
}
content.service2 img {
    padding: 15px;
    width: 90%;
}
content.service3 img {
    padding-left: 35px;
    width: 90%;
}

content.why {
    background-image: url("../assets/img/flora-flowes-green-122429.jpg");
    padding-top: 50px;
    color: $highlightColor;
    text-align: center;
    width: auto;
    padding-bottom: 35px;
    border-top: 2px solid $secondaryColor;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    h4 {
        font-family: 'Lato', sans-serif;
        margin-top: 50px;
    }
}
</style>
