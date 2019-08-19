<template>
  <div class="home">

    <!-- Banner -->
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="caption">
              <h2>TESTING HTML Template</h2>
              <div class="line-dec"></div>
                <p>This HTML Template hs been used in order to provide a simple preview of a CMS theme.</p>
              <div class="main-button">
                <a href="#">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Subscribe Form -->
    <div class="subscribe-form">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <div class="line-dec"></div>
              <h1>This is the subscription section</h1>
            </div>
          </div>
          <div class="col-md-8 offset-md-2">
            <div class="main-content">
              <p>You may use this section for anything you want. Such as: subscription, featuring content or even sharing news and applications</p>
              <div class="container">
                <form id="subscribe" action="" method="get">
                  <div class="row">
                    <div class="col-md-7">
                      <fieldset>
                        <input name="email" type="text" class="form-control" id="email" v-model="subscribed"
                          placeholder="Your email ..." value="Your Email..." required="">
                      </fieldset>
                    </div>
                    <div class="col-md-5">
                      <fieldset>
                        <button type="submit" id="form-submit" class="button">Subscribe Now!</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
              <p class="welcome">This is an interactive message with user's input. Try to type something in the input box. <br> Thank you {{ subscribed }} for joining us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "home",
    data() {
      return {
        subscribed: ''
      }
    },
    methods: {
      onFocus: function () {
        if(this.value == 'Your Email...') {
            this.value = '';
        }
      },
      onBlur: function () {
        if(this.value == '') {
          this.value = 'Your Email...';
        }
      },
    }
}
</script>




<style scoped>
/* Banner Style */
.banner {
	margin-top: 50px;
	background-image: url(../assets/banner.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	padding: 150px 0px;
	background-position: center center;
}
.banner .caption {
	background-color: rgba(250,250,250,0.9);
	padding: 30px;
	max-width: 450px;
}
.banner .caption h2 {
	margin-top: 0px;
	margin-bottom: 15px;
	font-size: 24px;
	font-weight: 700;
	color: #1e1e1e;
}
.banner .caption .line-dec {
	width: 30px;
	height: 5px;
	background-color: #3a8bcd;
}
.banner .caption p {
	margin-top: 15px;
	margin-bottom: 20px;
}


.main-button a {
	background-color: #3a8bcd;
	border-radius: 5px;
	padding: 10px 15px;
	display: inline-block;
	color: #fff;
	font-size: 14px;
	text-transform: uppercase;
	font-weight: 300;
	letter-spacing: 0.4px;
	text-decoration: none;
	transition: all 0.5s;
}
.main-button a:hover {
	opacity: 0.7;
}

/* Subscribe Style */
.subscribe-form {
	background-color: #3a8bcd;
	padding: 80px 0px;
	text-align: center;
}
.subscribe-form .section-heading  {
	margin-top: 0px;
}
.subscribe-form .section-heading h1 {
	color: #fff;
}
.subscribe-form .section-heading .line-dec {
	background-color: #fff;
	margin: 0 auto;
}
.subscribe-form .main-content p {
	font-size: 17px;
	color: #fff;
	margin-bottom: 30px;
}
.subscribe-form .main-content .welcome {
	margin-top: 30px;
}
.subscribe-form .main-content form  {
	color: #fff;
	display: inline;
}
.subscribe-form .main-content form input {
	display: inline;
}
.subscribe-form .main-content form input {
	width: 100%;
	height: 46px;
	border: 1px solid #fff;
	background-color: transparent;
	padding-left: 15px;
	color: #fff;
	outline: none;
}
.subscribe-form .main-content form input::placeholder {
  color: white;
}
.subscribe-form .main-content form button:focus {
	color: #fff!important;
}
.subscribe-form .main-content form button {
	width: 100%;
	height: 45px;
	cursor: pointer;
	background-color: #fff;
	outline: none;
	border-radius: 5px;
	padding: 10px 15px;
	display: inline-block;
	color: #3a8bcd;
	font-size: 14px;
	text-transform: uppercase;
	font-weight: 300;
	letter-spacing: 0.4px;
	text-decoration: none;
	transition: all 0.5s;
	box-shadow: none;
	border: none;
}
</style>