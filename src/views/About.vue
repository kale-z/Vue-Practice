<template>
  <!-- About Page -->
    <div class="about-page">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <div class="line-dec"></div>
              <h1>About Us</h1>
            </div>
          </div>
          <div class="col-md-6">
            <div class="left-image">
              <img src="../assets/about-us.jpg" alt="">
            </div>
          </div>
          <div class="col-md-6">
            <div class="right-content">
              <h4>Phasellus vel interdum elit</h4>
              <p><a href="https://www.pexels.com/photo/group-of-people-raising-right-hand-1059120/">Photo Credit</a> goes to Pexels website. Aliquam erat volutpat. Pellentesque fringilla, ligula consectetur cursus scelerisque, leo elit pellentesque sapien, et pharetra arcu elit vitae sem. Suspendisse erat dui, condimentum in mi ac, varius tempor sapien. Donec in justo sit amet ex aliquet maximus ac quis erat.</p>
              <br>
              <p>Donec fermentum tincidunt tellus quis fermentum. Proin eget imperdiet purus. Nulla facilisi. Aliquam tincidunt porttitor dui sed euismod. Duis est libero, rhoncus fermentum turpis id, tempus fringilla ipsum. Nullam venenatis tincidunt neque vel hendrerit. Suspendisse porta pretium porttitor.</p>
              <br>
              <p>Sed purus quam, ultricies eu leo in, sollicitudin varius quam. Proin dictum urna ac diam fermentum tempus. Pellentesque urna urna, ullamcorper a tincidunt dignissim, venenatis in nisi. Vivamus in volutpat tellus. Etiam fermentum luctus posuere.</p>
              <br>
              <div class="share">
                <h6>Find us on:
                  <span><a href="#">
                  <i class="fa fa-facebook">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                  </i></a>
                    <a href="#"><i class="fa fa-linkedin">
                      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/>
                    </i></a>
                    <a href="#"><i class="fa fa-twitter">
                      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
                    </i></a>
                  </span></h6>
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
    name: "about"
}
</script>

<style scoped>
/* About Us Style */
.about-page {
	margin-top: 50px;
    margin-bottom: 80px;
}
.about-page .right-content h4 {
	font-size: 17px;
	font-weight: 700;
	margin-top: 0px;
	margin-bottom: 20px;
}
.about-page .left-image img {
	max-width: 100%;
}
.about-page .right-content span {
	display: inline-block;
	margin-left: 8px;
}
.about-page .right-content span a i {
	transition: all 0.5s;
	background-color: #aaa;
	width: 26px;
	height: 26px;
	display: inline-block;
	text-align: center;
	line-height: 26px;
	border-radius: 50%;
	color: #fff;
	font-size: 12px;
	margin-right: 5px;
}
.about-page .right-content .share {
	margin-top: 20px;
	border-top: 1px solid #eee;
	padding: 15px 0px;
}
.about-page .right-content h6 {
	font-size: 14px;
	color: #4a4a4a;
	font-weight: 400;
}
.about-page .right-content span a:hover i {
	background-color: #3a8bcd;
}

.section-heading {
	margin-top: 80px;
	margin-bottom: 40px;
}
.section-heading .line-dec {
	width: 30px;
	height: 5px;
	background-color: #3a8bcd;
}
.section-heading h1 {
	font-size: 22px;
	font-weight: 700;
	color: #1e1e1e;
	margin-top: 15px;
}
.about-page .left-image img {
	max-width: 100%;
}

</style>