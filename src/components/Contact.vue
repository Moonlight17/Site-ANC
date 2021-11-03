<template>
	<div id="contact">
			<div class="section">
				<div id="svg_contact">
					<div style="">
						<div id="map_contact">
							<div id="yandex_map">
								<iframe width="100%" height="100%" src="https://yandex.ru/map-widget/v1/?um=constructor%3A140c84673a3c947be2adf9e08ca48c6b17660cc8c5ef8e01d1546f7dd1c49382&amp;source=constructor" frameborder="0"></iframe>
							</div>
						</div>
						<InsertSVG/>
					</div>

				</div>
				<div id="footer_contact">
					<div>
						<span><a href="tel:+74956415135">+7(495) 641 51 35</a>&nbsp&nbsp/&nbsp&nbsp<a href="mailto:info@ancprotek.ru">INFO@ANCPROTEK.RU</a><img src="../imgMain/LogoWhite.png"/>Россия, Москва, Шоссе Энтузиастов, 56с25</span>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
import InsertSVG from './ContactSVG.vue'

export default {
  name: 'app',
  components: {
    InsertSVG
  },
  data () {
    return {
      msg: 'Contact',
      options: {
      }
    }
  },
  methods: {
    Before: function () {
      this.mobile = this.$parent.mobile
    },
    move: function (section) {
      this.$refs.fullpage.api.moveTo(section)
    }
  }
}
</script>

<style>
#contact{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#contact .section{
	background-image: url('../source/Background.png') ;
	background-size: cover;
}
#contact #svg_contact{
	max-width: 1600px;
	margin: 0 auto;
	padding-top: 14%;
	height: 100vh;
}

#contact #svg_contact #map_contact {
    position: absolute;
	width: 40vw;
	height: 40vw;
	max-width: 700px;
	max-height: 700px;
	overflow: auto;
	margin-top: -6%;
	margin-left: 14vw;
} 
#contact #svg_contact #yandex_map{
    overflow: hidden;
    width: 100%;
	height: 100%;
    display: flex;
    justify-content: center;
}
#contact #svg_contact #yandex_map iframe{
	border-radius: 50%;
}
#contact #footer_contact{
	position: absolute;
	bottom: 0;
	height: 7%;
	width: 100vw;
	background-color: black;
	color: white;
}
#contact #footer_contact a{
	color: white;
}
#contact #footer_contact a:hover{
	color: white;
	cursor: pointer;
}
#contact #footer_contact div{
	bottom: 0px;
}
#contact #footer_contact div img{
	width: 3%;
	margin-left: 10px;
	margin-right: 10px;
}
</style>
