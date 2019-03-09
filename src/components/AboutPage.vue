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
  <!-- Begin Body & Navbar -->
  <header class='jumbotron'>
    <h1 class='col-12' id='logo'>Ellerup Landscaping</h1>
    <h3 class='col-12' id='motto'>Serving New York's Capital Region</h3>
    <a href='./contact' title='Contact Us' class='btn btn-success actionBtn btn-lg'>Get Started Now</a>
  </header>


  <main class='container-fluid'>
    <!-- Container 2 -->

    <content class='row process'>
      <h3 class='col col-12'>Our Process</h3>
      <p class='col col-12'>
        At ______Ellerup Landscaping____________, we strive to bring you elegant, affordable solutions without compromise.
      </p>
      <div class="card col col-12 col-lg-3">
        <div class="card-body">
          <span class='fas fa-map fa-lg icon'></span>
          <h5 class="card-title">Consultation</h5>
          <p class="card-text">One of our specialized consultants will come and assess the scope, requirements, cost and viability of your project.</p>
        </div>
      </div>
      <div class="card col col-12 col-lg-3">
        <div class="card-body">
          <span class='fas fa-clipboard fa-lg icon'></span>
          <h5 class="card-title">Assessment</h5>
          <p class="card-text">We will draft a design or plan, acquire any neccesary materials and equipment and receive any permits or approval needed from you or your locality.</p>
        </div>
      </div>
      <div class="card col col-12 col-lg-3">
        <div class="card-body">
          <span class='fas fa-warehouse fa-lg icon'></span>
          <h5 class="card-title">Execution</h5>
          <p class="card-text">After your final approval of the quote, design and schedule we will get to doing what we love; making your home or office environment more beautiful.</p>
        </div>
      </div>
    </content>

    <content class='row why'>
      <h3 class='col col-12'>Why Choose Us?</h3>
      <h4 class='col col-12'>
        Our team is a group of highly specialized individuals focusing on doing one aspect of landscaping to absolute perfection.
        Our tree removal experts, landscape architechts, lawn maintanance specialists and consulatants all strive to achieve exellency without compromise.
        Give us a call today and find out why experts and homeowners alike recommend us time and time again.
      </h4>
    </content>


    <content class='row row-12 services'>
      <h3 class='col col-12'>Our Services</h3>
      <div class="card col col-12 col-lg-3">
        <div class="card-body">
          <span class='fas fa-drafting-compass fa-lg icon'></span>
          <h5 class="card-title">Landscape Architecture</h5>
          <p class="card-text">Want to redo your lands aesthetic? Our qualified team of landscape architects, designers and builders will help turn your vision into reality.</p>
        </div>
      </div>

      <div class="card col col-12 col-lg-3">
        <div class="card-body">
          <span class='fas fa-tree fa-lg icon'></span>
          <h5 class="card-title">Tree Removal</h5>
          <p class="card-text">Hire our fully insured and experienced tree removal team to safely remove even the largest trees from your property.</p>
        </div>
      </div>

      <div class="card col col-12 col-lg-3">
        <div class="card-body">
          <span class='fas fa-leaf fa-lg icon'></span>
          <h5 class="card-title">Lawn Maintenance</h5>
          <p class="card-text">Book us to regularly maintain your lawns appearance with our lawncare and mowing services.</p>
        </div>
      </div>
    </content>

  </main>
  <!--close container -->
  <ContactForm />

</body>

</html>
</template>

<script>
export default {
  name: 'AboutPage',
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
//header

//end header styles

//body stylesheet sitewide
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
//end sitewide body stylesheet

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
    $primaryColor: #01792a;
    $secondaryColor: #39da73;
    $accentColor: #3e824f;
    $highlightColor: rgb(237, 236, 245);
    $linkColor: rgb(37, 150, 153);
    $linkHoverColor: $secondaryColor;
    $linkActiveColor: $accentColor;

    //site wide styles
    //header

    //end header styles

    //body stylesheet sitewide
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
    //end sitewide body stylesheet

    //end site wide stylesheet

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
