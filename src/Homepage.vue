<template>
  <div id="app">
    <!-- Pre Header -->
    <div id="pre-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <span>This is a TESTING website</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="http://static1.squarespace.com/static/55a8d6f7e4b054bcba8dfc63/55dec672e4b08a3733445874/5c9beca37817f7813ae586b4/1553727181812/test.png?format=100w" alt=""></a>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view/>

    <!-- Footer -->
    <div class="sub-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="copyright-text">
              <p>Copyright &copy; 2019 Company Name

                - Design: Tooplate</p>
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
  name: "homepage"
}
</script>

<style scoped>
/* Pre Header Style */
#pre-header {
	background-color: #3a8bcd;
	text-align: center;
}
#pre-header span {
	color: #fff;
	font-size: 15px;
	padding: 10px 0px;
	display: inline-block;
}

/* Header Style */
.navbar .navbar-brand {
	text-align: center;
	width: 100%;
	position: relative;
	padding: 25px 0px;
}
.bg-dark {
	background-color: #fff!important;
	border-bottom: 1px solid #eee;
}
#navbarResponsive {
	z-index: 999;
	position: absolute;
	left: 50%;
	top: 105px;
	transform: translateX(-50%);
}
.navbar-dark .navbar-nav .nav-item {
	margin: 0px 15px;
}
.navbar-dark .navbar-nav .nav-link {
	text-transform: uppercase;
	font-size: 15px;
	font-weight: 700;
	color: #1e1e1e;
	transition: all 0.5s;
}
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .active>.nav-link,
.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .show>.nav-link {
	color: #3a8bcd;
}
.navbar:after {
	width: 100%;
	height: 1px;
	background-color: #eee;
	content: '';
	position: absolute;
	left: 0;
	bottom: -52px;
}
.navbar-dark .navbar-toggler-icon {
	background-image: none;
}
.navbar-dark .navbar-toggler {
	border-color: #3a8bcd;
	background-color: #3a8bcd;
	height: 50px;
	outline: none;
}
.navbar-dark .navbar-toggler-icon:after {
	content: '\f0c9';
	color: #FFF;
	font-size: 22px;
	line-height: 30px;
	font-family: 'FontAwesome';
}

/* Footer Style */
.sub-footer {
	border-top: 1px solid #eee;
	text-align: center;
}
.sub-footer p {
	font-size: 12px;
	color: #7a7a7a;
	line-height: 60px;
}
.sub-footer a {
	color: #3a8bcd;
	text-decoration: none;
}


@media (max-width: 991px) {
    .banner {
		border-top: none;
		margin-top: 0px;
	}
	.navbar .navbar-brand {
		width: auto;
	}
	.navbar:after {
		display: none;
	}
	#navbarResponsive {
	    z-index: 99999;
	    position: absolute;
	    top: 96px;
	    width: 100%;
	    text-align: center;
	    background-color: rgba(250,250,250,0.95);
	    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
	}
	.navbar-dark .navbar-nav .nav-item {
		border-bottom: 1px solid #eee;
	}
	.navbar-dark .navbar-nav .nav-item:last-child {
		border-bottom: none;
	}
	.navbar-dark .navbar-nav .nav-link {
		padding: 15px 0px;
	}
}

</style>