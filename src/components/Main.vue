<template>
	<div id="main">
		<div class="background_image">
			<div id="title" class="item container-fluid">
				<div id="block_title"  class="row">
					<div class="title_img col-xl-4 col-lg-4 col-md-4 col-sm-4">
						<img class="img_on_main" src="../imgMain/pict/Earth.png" />
					</div>
					<div class="title  col-xl-8 col-lg-8 col-md-8 col-sm-8">
						<p id="title_text"><span v-html="page.Title"></span></p>

					</div>
				</div>
				<div v-scroll-to="'#about'" class="strelka strelka_one">
					<div id="arrow">
						<div id="arrowleft"></div>
						<div id="arrowright"></div>
					</div>
				</div>
			</div>
			<div id="about" class="item container-fluid" style="z-index:1;">
				<!-- <div id="carousel" :style="{ height: caro + 'px' }"> -->
				<div id="carousel">
					<b-carousel
					ref="caro"
					id="carousel-1"
					v-model="page.slide"
					:interval="400000"
					@sliding-start="onSlideStart"
					@sliding-end="onSlideEnd"
					>
						<!-- Text slides with image -->
						<b-carousel-slide v-for="item in page.about_list" img-blank>
							<div ref="caro_img" class="about_img">
								<img :src="item.img" />
							</div>
							<div ref="caro_text" class="about_text">
								<p lang="ru">
									{{item.text}}
								</p>
							</div>
						</b-carousel-slide>
					</b-carousel>
				</div>
				<div class="row desc">
					<div class="about_block col-xs-10 col-sm-10 col-md-10 col-lg-11 col-xl-7">
						<p id="about_title">{{page.About}}</p>
						<div class="row about_mini_block">
							<div v-for="item in page.about_list" style="margin: 0 auto; margin-bottom: 10px;" class="col-xs-9 col-sm-9 col-md-12 col-lg-4">
								<div class="about_fon_block">
									<div class="about">
										<div class="about_img">
											<img :src="item.img" />
										</div>
										<div class="about_text">
											<p lang="ru">
												{{item.text}}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-scroll-to="'#info'" class="strelka strelka_two">
					<div id="arrow">
						<div id="arrowleft"></div>
						<div id="arrowright"></div>
					</div>
				</div>
			</div>
			<div id="info" class="item row">
				<div id="info_block" class="col-sm-12 col-md-12 col-lg-8 col-xl-6">
					<div class="row" id="telescope">
						<div class="col-sm-12 col-md-12 col-lg-12 teleskopes_info">
							<p>
								{{page.info_telescope}}
							</p>
						</div>
					</div>
					<div id="info_mini_block">
						<div id="info_title">
							<p>{{page.info}}</p>
						</div>
						<div id="info_list">
							<ul id="information">
								<li v-for="info in page.info_list">
									<span class="info_list_title">
										{{info.title}}
									</span><br>
								</li>
							</ul>
						</div>
					</div>
					
				</div>
				<div v-scroll-to="'#base'" class="strelka strelka_three">
					<div id="arrow">
						<div id="arrowleft"></div>
						<div id="arrowright"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="background_image2">
			<div id="base" class="item row">
				<div id="base_block" class="col-sm-12 col-md-12 col-lg-9 row">
					<div id="shit" class="col-sm-12 col-md-6 col-lg-3 blocks_base">
						<div class="mount">
							<div class="img_mount">
								<img src="../source/Mount2.jpg" />
							</div>
							<div class="mount_text">
								<p class="title_mount">
									{{page.mount1_title}}
								</p>
								<p>
									{{page.mount1_region.value}}
								</p>
							</div>
						</div>
					</div>
					<div v-if="!mobile" id="earth" class="col-sm-12 col-md-12 col-lg-6">
						<div class="graf">
							<div id="left">
								<div id="Naklon"></div>
								<div id="Gorizont"></div>
								<div id="Circle"></div>
							</div>
							<div id="right">
								<div id="Naklon"></div>
								<div id="Gorizont"></div>
								<div id="Circle"></div>
							</div>
							<div id="planet">
								<div id="img_planet"><img src="../source/planet.png" alt=""></div>
								<div id="text_planet">
									<p>
										{{page.text_planet}}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div id="blag" class="col-sm-12 col-md-6 col-lg-3 blocks_base">
						<div class="mount">
							<div class="img_mount">
								<img src="../source/Mount1.jpg" />
							</div>
							<div class="mount_text">
								<p class="title_mount">
									{{page.mount2_title}}
								</p>
								<p>
									{{page.mount2_region.value}}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="strelka_four">
					<div v-scroll-to="'#main'" class="strelka strelka_four_rot">
						<div id="arrow">
							<div id="arrowleft"></div>
							<div id="arrowright"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="footer">
			<div id="footer_position">
				<div class="footer">
					<span>
						<a :href="'tel:'+page.footer_tel">{{page.footer_tel}}</a>  /  <a :href="'mailto:'+page.footer_mail">{{page.footer_mail}}</a>
					</span>
				</div>
				<div class="footer img">
					<img id="logo" src="../source/Logo_circle.png" >
				</div>
				<div class="footer">
					<span>
						{{page.footer_address}}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
@media only screen  and (min-width: 320px) and (max-width: 619px) {
}


.example-slide {
	align-items: center;
	background-color: #666;
	color: #999;
	display: flex;
	font-size: 1.5rem;
	justify-content: center;
	min-height: 10rem;
}

#main {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/* height: 100%; */
	width: 100%;
	font-family: "Noah";
	/* background-image: url('../source/Bacground.png') */
}
#main .background_image{
	padding-top: calc( 0.04 * 100% + 100px );
	background-image: url('../source/Background.png') ;
	background-size: cover;
}
#main .background_image2{
	background-image: url('../source/Background2.png') ;
	background-size: cover;
}
#main .item{
	margin: 0 auto;
}
/* TITLE */
#main #title{
	height: calc( 0.9 * 100% - 80px );
	width: 95%;
	margin: 0 auto;
}
#main #block_title{
	margin: 0 auto;
	padding-top: 12%;
	display: table-cell;
}
#main #block_title div{
	display: inline-block;
	vertical-align: middle;
}
#main #block_title div.title_img{
	width: 32%;
}
#main #block_title div.title_img img.img_on_main{
	width: 80%;
}
#main #block_title div.title{
	color: white;
	text-align: left;
	white-space: normal;
	text-transform: uppercase;
	width: 67%;
	font-weight: bold;
}
#main p#title_text {
	width: 100%;
	font-size: 5em;
}

/* ABOUT */
#main #about{
	min-height: calc( 0.9 * 100%);
}

#main .about_block{
	margin: 0 auto;
	margin-top: 5%;
	width: 60%;
}
#main .about_block p#about_title{
	text-transform: uppercase;
	font-size: calc( 0.01 * 100% + 19.2px );
	color: white;
	font-weight: bold;
	margin: 0 auto;
}
#main .about_mini_block{
	margin-top:6%;
}

#main .about_mini_block .about_fon_block{
	background-color: rgba(2, 55, 76, 0.72);
	height: 100%;
	padding-bottom: 0;
	margin-bottom: 0;
}
#main .about_mini_block .about_fon_block .about{
	width: 90%;
	margin: 0 auto;
}
#main .about_mini_block .about_fon_block .about .about_img{
	padding: 37px;
	border-bottom: 2px solid white;
}
#main .about_mini_block .about_fon_block .about .about_img img{
	width: 60%;
}
#main .about_mini_block .about_fon_block .about .about_text{
	padding: 10%;
	padding-bottom: 0;
	margin-bottom: 0;
}
#main #about #carousel{
	display: none;
}

@media only screen  and (min-width: 320px) and (max-width: 619px) {
	#main .desc{
		display: none;
	}
	#main #about #carousel{
		display: block;
		background-color: rgba(2, 55, 76, 0.72);
	}
	#main #about #carousel .about_img{
		padding: 37px;
		border-bottom: 2px solid white;
	}
	#main #about #carousel .about_img img{
		width: 60%;
	}
	#main #about #carousel .about_text p{
		position: absolute;
		width: 95%;
		top: 62%;
		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, -50%);
	}
	#main #about #carousel .about_text{
		padding: 0 15%;
		padding-bottom: 20px;
		height: 59%;
		margin-bottom: 0;
		position: relative;
	}
	#main .carousel-caption{
		right: 0;
		left: 0;
		top: 0;
	}
	.carousel-inner{
		height: 33em;
	}
	#main .background_image {
		padding-top: calc( 0.04 * 100% + 10px );
	}
}


#main .about_mini_block .about_fon_block .about .about_text p{
	color: white;
	text-align: left;
	font-size: calc(0.5 * 100% + 12px);
	font-weight: bold;

	-webkit-hyphens: auto;
	-webkit-hyphenate-limit-before: 3;
	-webkit-hyphenate-limit-after: 3;
	-webkit-hyphenate-limit-chars: 6 3 3;
	-webkit-hyphenate-limit-lines: 2;
	-webkit-hyphenate-limit-last: always;   
	-webkit-hyphenate-limit-zone: 8%;

	-moz-hyphens: auto;
	-moz-hyphenate-limit-chars: 6 3 3;
	-moz-hyphenate-limit-lines: 2;  
	-moz-hyphenate-limit-last: always;
	-moz-hyphenate-limit-zone: 8%;

	-ms-hyphens: auto;
	-ms-hyphenate-limit-chars: 6 3 3;
	-ms-hyphenate-limit-lines: 2;
	-ms-hyphenate-limit-last: always;   
	-ms-hyphenate-limit-zone: 8%;

	hyphens: auto;
	hyphenate-limit-chars: 6 3 3;
	hyphenate-limit-lines: 2;
	hyphenate-limit-last: always;   
	hyphenate-limit-zone: 8%;
}
/* INFO */
#main #info{
	height: 100vh;
	margin: 0 auto;
	margin-top: 7%;
	padding-top: 5%;
}
#main #info_block{
	margin: 0 auto;
	margin-top: 8%;
}
#main #info #info_mini_block{
	margin-top: 8%;
	margin-left: calc( 0.07 * 100% + 19.2px );
}
#main #info #info_mini_block #info_title{
	width: 84%;
}
#main #info #info_mini_block #info_title p{
	color: white;
	font-size: calc( 0.002 * 100% + 19.2px );
	text-transform: uppercase;
	text-align: left;
}
#main #info #info_mini_block #info_list{
	width: 100%;
}
#main #info #info_mini_block #info_list ul#information{
	color: white;
	text-align: left;
	list-style: none;
}
#main #info #info_mini_block #info_list ul#information li{
	margin-top: 20px;
}
#main #info #info_mini_block #info_list ul#information li:before{
	margin-left: -2em;
	margin-top: 0.5em;
	margin-right: 1em;
	float: left;
	content: ' ';
	width: 1em;
	height: 1em;
	vertical-align: middle;
	border-radius: 50%;
	border: 3px solid white;
}
#main #info #info_mini_block #info_list ul#information .info_list_title{
	font-weight: bold;
	font-size: calc( 0.002 * 100% + 19.2px );
}
#main #info #info_mini_block #info_list ul#information .info_list_text{
	font-weight: bold;
	font-size: calc( 0.002 * 100% + 17.2px );
}
#main #info #telescope{
}
#main #info #telescope p{
	color: white;
	font-weight: bold;
	text-transform: uppercase;
	font-size: calc( 0.013 * 100% + 17.2px );
}
#main #info #telescope .teleskopes_info{
	margin: 0 auto;
	margin-top: 80px;
}

/* BASE */
#main #base{
	margin: 0 auto;
	padding-top: 12%;
	min-height: 80%;
}
#main #base_block{
	margin: 0 auto;
}
#main #base_block #shit{
	margin: 0 auto;
	padding: 0;
}
#main .blocks_base{
	background-color: rgba(2, 55, 76, 0.72);
	padding: 0;
}
#main .blocks_base .mount{
}
#main .blocks_base .mount .img_mount{
	margin: 0 auto;
	border-bottom: 3px solid white;
}
#main .blocks_base .mount .img_mount img{
	margin: 0 auto;
	width: 100%;
}
#main #base #base_block .mount_text{
	color: white;
	text-align: left;
	padding: 20px;
}
#main #base .mount .title_mount{
	text-transform: uppercase;
}
#main #base #earth{
	position: relative;
}
#main #base #earth .graf{
	height: 100%;
	position: relative;
}
#main #base #earth .graf #planet{
	position: absolute;
	height: 73%;
}
#main #base #earth .graf #planet img{
	width: 67%;
}
#main #base #earth .graf #planet div#img_planet{
}
#main #base #earth .graf #planet div#text_planet{
	height: 37%;
	width: 90%;
	margin: 0 auto;
	margin-top: 11%;
}
#main #base #earth .graf #planet div#text_planet p{
	color: white;
	font-weight: bold;
	text-transform: uppercase;
	font-size: calc( 0.8 * 100% + 7px )
}

#main #base #earth .graf #left{
	position: absolute;
	left: 2%;
	top: 0%;
	width: 100%;
	height: 50%;
}
#main #base #earth .graf #left #Circle{
	position: absolute;
	width: 2.5%;
	height: 5%;
	border-radius: 50%;
	border:  3px solid white;
	left: -2%;
	top: -2%;
}
#main #base #earth .graf #left #Naklon{
	position: absolute;
	height: 3px;
	width: 20%;
	background-color: white;
	transform: rotate(30deg);
	transform-origin: top left;
	left: 22%;
}
#main #base #earth .graf #left #Gorizont{
	position: absolute;
	height: 3px;
	width: 22%;
	background-color: white;
}

#main #base #earth .graf #right{
	position: absolute;
	right: 0%;
	top: 0%;
	width: 100%;
	height: 50%;
}
#main #base #earth .graf #right #Circle{
	position: absolute;
	width: 2.5%;
	height: 5%;
	border-radius: 50%;
	border:  3px solid white;
	right: -1%;
	top: -2%;
}
#main #base #earth .graf #right #Naklon{
	position: absolute;
	height: 3px;
	width: 20%;
	background-color: white;
	transform: rotate(-30deg);
	transform-origin: top right;
	right: 23.4%;
}
#main #base #earth .graf #right #Gorizont{
	position: absolute;
	height: 3px;
	width: 22%;
	background-color: white;
	right: 1.4%;
}
.strelka{
	border-radius:50%;
	border:3px solid white;
	position: relative;
	margin: 0 auto;
}
.strelka{
	content: '';
	background-color: none;
	transition: all 0.3s;
}
#arrow{
	margin-top: 39%;
	margin-left: 22%;
	width: 58%;
	height: 58%;
	position: relative;
}
#arrowleft, #arrowright{
	position: absolute;
	background-color: white;
	width: 71%;
	height: 9%;
}
#arrowleft{
	transform: rotate(45deg);
	transform-origin: bottom left;
}
#arrowright{
	transform: rotate(-45deg);
	transform-origin: bottom right;
	right:0;
}
.strelka:hover{
	background-color: #00aeff;
}

.strelka_one{
	margin-top: 2%;
	margin-left: calc(50% - 25px);
}
.strelka_two{
	margin-top: 50px;
	margin-left: calc(50% - 25px);
}
.strelka_three{
	margin-top: 25px;
	margin-left: calc(50% - 25px);
}
.strelka_four{
	margin-top: 10%;
	margin-bottom: 2%;
	margin-left: calc(50% - 25px);
}
.strelka_four_rot{
	transform: rotate(180deg);
}

@media only screen  and (min-height: 1400px) {
	.strelka_one{
		/* position: absolute; */
		margin-left: calc(50% - 25px);
	}
	.strelka_two{
		margin-left: calc(50% - 25px);
	}
}
@media only screen  and (min-width: 1400px) {
	.strelka{
		width: 70px;
		height: 70px;
		padding: 15px;
	}
	#main #block_title{
		padding-top: 10%;
	}
	#main #block_title div.title{
		width: 47%;
	}
	#main #base_block {
		min-height: 460px;
	}
}
@media only screen  and (max-width: 1399px) and (min-width: 1024px) {
	.strelka{
		width: 50px;
		height: 50px;
		padding: 15px;
	}
	#main #block_title{
		padding-top: 2%;
	}
	#main p#title_text{
		font-size: 5em;
		width: 50%;
		width: 91%;
		margin-left: 19%;
	}

}
@media only screen  and (max-width: 1023px) and (min-width: 280px) {
	.strelka{
		width: 20px;
		height: 20px;
		padding: 15px;
	}
	#title{
		display: none;
	}
}

#main #footer{
	/* height: 7%; */
	/* width: 100%; */
	/* display: table-cell; */
	/* vertical-align: middle; */
	background: black;
	position: relative;
}
#main #footer #footer_position{
	margin-left: 5%;
}
#main #footer span{
	font-size: calc(0.5 * 100% + 12px);
	color: white;
	font-weight: bold;
}
#main #footer .footer{
	display: inline;
}
#main #footer div img#logo{
	width: 50px;
}#main #footer div.footer.img{
	padding: 30px;
	/* margin-left: calc(0.04 * 100% + 12px); */
}
#main #footer span a{
	text-decoration: none;
	color: white;
	transition: all 0.3s;
}
#main #footer span a:hover{
	color: #00aeff;
}
@media only screen  and (min-width: 320px) and (max-width: 619px) {
	#main #about_title{
		display: none;
	}
}
</style>
<script>

export default {
name: 'main',

	data () {
		return {
		publicPath: process.env.BASE_URL,
		page: [],
		select: '',
		caro: {width:0,height:0},
		text:[
			{
				Russia:{
					Title: 'Мы видим всё <br> в&nbsp;околоземном космосе!',
					About: 'АО "Астрономический Научный Центр" образовано в 2011 году. Наша компания оказывает следующие услуги в области исследования околоземного космического пространства:',
					about_list: [
						{
						img: require('../source/About_three.png'),
						text: 'Проведение анализа операций (запусков, орбитальных маневров, перемещений между орбитальными позициями и др.) и орбитальных событий  (разрушений, потенциально опасных сближений объектов) в околоземном космическом пространстве, оценка физических характеристик наблюдаемых объектов'
						},
						{
						img: require('../source/About_one.png'),
						text: 'Создание и эксплуатация автоматизированных оптико-электронных комплексов обнаружения и мониторинга объектов в околоземном космическом  пространстве'
						},
						{
						img: require('../source/About_two.png'),
						text: 'Создание автоматизированных программных комплексов обработки информации об объектах и событиях в околоземном космическом пространстве'
						}
					],
					info: 'Оптико-электронные средства АО «АНЦ» позволяют:',
					info_list: [
						{
						title: 'Обнаруживать и регулярно наблюдать объекты размером от 25-30 см в геостационарной области (диапазон высот 33000-40000 км) и от 15-25см на прочих высоких орбитах с высотой перигея от 5000 до 25000 км',
						text_one: ' ',
						text_two: ' '
						},
						{
						title: 'Осуществлять непрерывный (за исключением дневного времени) мониторинг функционирующих объектов на геостационарных, высокоэллиптических и средневысоких орбитах',
						text_one: ' ',
						text_two: ' '
						},
						{
						title: 'Ежесуточно осуществлять глобальный обзор геостационарной области',
						text_one: ' ',
						text_two: ' '
						},
						{
						title: 'Измерять астрометрическое положение наблюдаемых объектов с погрешностью 0.4-1.2 угл.с',
						text_one: ' ',
						text_two: ' '
						}
					],
					info_telescope: 'АО "АНЦ" осуществляет управление работой 51 телескопа с апертурой от 19см до 65см в 14 обсерваториях, расположенных в различных районах Земного шара',
					base_title: 'Научно-исcледовательские площадки',
					mount1_title: 'Гора Шаджатмаз',
					mount1_alternative:
					{
					title: 'Альтернатива',
					value: 'Gora Shidzhadmaz'
					},
					mount1_region:
					{
					title: 'Регион',
					value: 'Республика Карачаево-Черкесия'
					},
					mount2_title: 'Благовещенский район',
					mount2_region:
					{
					title: 'Регион',
					value: 'Амурская область'
					},
					text_planet: 'АО «АНЦ» имеет собственные научно-исследовательские площадки, размещенные в Карачаево-Черкессии (гора Шаджатмаз) и в районе г. Благовещенск Амурской области',
					footer_mail: 'info@ancprotek.ru',
					footer_tel: ' +7 (495) 641 51 35',
					footer_address: 'Россия, Москва, шоссе Энтузиастов, 56с25',
					slide: 0,
        			sliding: null
				},
				English:{
					Title: 'We see everything in outer space!',
					About: 'Astronomical Scientific Center was founded in 2011. Our company provides services in the field of outer space monitoring:',
					about_list: [
					{
					img: '../source/About_one.png',
					text: 'Design, operation and support of automated optical sensors for detection and monitoring objects in outer space.'
					},
					{
					img: '../source/About_two.png',
					text: 'Design, operation and support of software solutions for information processing about objects and events in outer space.'
					},
					{
					img: '../source/About_three.png',
					text: 'Analysis of operations  (launches, orbital maneuvers, movements between orbital positions, etc.) and orbital events (destructions, potentially dangerous object approaches) in outer space, assessment of physical characteristics of observed objects.'
					}
					],
					info: 'Our optical sensors are able to:',
					info_list: [
					{
					title: 'Detect and regularly observe objects with size of 25-30 cm in GEO (with heights between 33000 and 40000 km) and objects with size of 15-25 cm in other high orbits with perigee between 5000 and 25000 km',
					text_one: ' ',
					text_two: ' '
					},
					{
					title: 'Provide continuous observation (except daylight time) of active objects in GEO, HEO and MEO',
					text_one: ' ',
					text_two: ' '
					},
					{
					title: 'Provide daily global GEO observation',
					text_one: ' ',
					text_two: ' '
					},
					{
					title: 'Provide the astrometric position of the observed objects with uncertainty between 0.4 and 1.2 angular second',
					text_one: ' ',
					text_two: ' '
					}
					],
					info_telescope: 'ASC operates 51 telescopes with aperture between 19 and 65 cm located in 14 observatories across the world',
					base_title: 'Research Centers',
					mount1_title: 'Mount Shatdzhatmas',
					mount1_alternative:
					{
					title: 'Alternative:',
					value: 'Gora Shidzhadmaz'
					},
					mount1_region:
					{
					title: 'Region',
					value: 'Karachay-Cherkessia'
					},
					mount2_title: 'Near Blagoveshchensk',
					mount2_region:
					{
					value: 'Amur Oblast'
					},
					text_planet: ' ASC has two research centers located in Karachay-Cherkessia (Mount Shatdzhatmas) and near Blagoveshchensk',
					footer_mail: 'info@ancprotek.ru',
					footer_tel: ' +7 (495) 641 51 35',
					footer_address: 'Russia, Moscow, shosse Entuziastov, 56с25',
					slide: 0,
        			sliding: null
				}
			}

		],

		}
	},
	created: function () {
		this.Before()
	},
	mounted() {
		// this.func()		
	},
	methods: {
		Before: function () {
			this.mobile = this.$parent.mobile;
			this.select = this.$parent.select;
			this.page = this.text[0][this.select];
		},
		func: function() {
			var text_hei = this.$refs.caro_text[0].clientHeight;
			var img_hei = this.$refs.caro_img[0].clientHeight;
			var text_wid = this.$refs.caro_text[0].clientWidth;
			var img_wid = this.$refs.caro_img[0].clientWidth;
			var wid = window.innerWidth;
			this.caro.height = text_hei + img_hei + 80;
			this.caro.width = text_wid;
			console.log(this.caro.height,this.caro.width)
			// this.$refs.myCarousel.clientHeight() = 125;
		},
		SelectLang (lang) {
			this.page = this.text[0][lang];
		},
		onSlideStart(slide) {
			this.sliding = true
		},
		onSlideEnd(slide) {
			this.sliding = false
		}
	},
	watch: {

  },
}
</script>
