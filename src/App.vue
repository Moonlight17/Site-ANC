<template>
<div id="app">
	<nav class="container-fluid" id="navigator">
		<div class="row">
			<transition name="fade">
				<div v-if="!mobile" id="logotip_div" class="WidthNavigation col-sm-3 col-md-3 col-lg-2">
						<img id="logotip" src="./source/Logo.png" />
				</div>
			</transition>
			<div class="WidthNavigation TitlesNavigation col-sm-9 col-md-9 col-lg-7">
				<div v-if="!mobile" class="menu">
					<router-link v-for="item in page" class="navig" :to="item.path" exact><span> {{item.title}} </span></router-link>
				</div>
				<div id="lang">
						<span :class="[{ active: (select === 'Russia') }]" @click="SelectLang('Russia')">Ru</span>
						<span :class="[{ active: (select === 'English') }]" @click="SelectLang('English')">En</span>
				</div>
			</div>
		</div>
	</nav>
	<nav id="navigator_mobile">
		<img id="logotip" src="./source/Logo.png" />
		<transition name="menu_open">
			<i class="material-icons menu" v-if="!menuOpen" @click="menuOpen = !menuOpen" key="menu">menu</i>
			<i class="material-icons clear" v-else @click="menuOpen = !menuOpen" key="clear">clear</i>
		</transition>
		<transition name="menu">
			<div v-if="menuOpen" class="gamburger">
				<ul>
					<li v-for="item in page"><router-link class="navig_mobile" :to="item.path" exact><span> {{item.title}} </span></router-link></li>
				</ul>
			</div>
		</transition>
	</nav>
	<transition name="fade">
		<router-view ref="page"></router-view>
	</transition>
</div>
</template>

<style>
::-webkit-scrollbar{
	width: 0px;
	background: transparent;
}
/* fallback */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v53/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -moz-font-feature-settings: 'liga';
  -moz-osx-font-smoothing: grayscale;
}
body{
	-ms-user-select: none;
	-moz-user-select: none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	font-family: Arial, Helvetica, sans-serif;
	overflow-x: hidden;
	background-color: black;
	/* width: 100vw; */
	min-width: 100%;
	font-family: "Noah";
    background-image: url('./source/Background.png');
    background-size: cover;
    /* min-height: 100vh; */
}
@font-face {
	font-family: "Noah";
	src: url("./Fonts/noah-bold.otf") format("opentype");
	font-style: normal;
	font-weight: normal;
}
@font-face {
	font-family: "Europe";
	src: url("./Fonts/6509.TTF") format("truetype");
	font-style: normal;
	font-weight: normal;
}
@font-face {
	font-family: "BebasNeueBold";
	src: url("./Fonts/9114.OTF") format("opentype");
	font-style: normal;
	font-weight: normal;
}
@font-face {
	font-family: "BebasNeue";
	src: url("./Fonts/5114.TTF") format("truetype");
	font-style: normal;
	font-weight: normal;
}


@media only screen  and (min-width: 320px) and (max-width: 619px) {
	#logotip{
		width: 75%;
		margin: 4%;
	}
	#navigator{
		display: none;
	}
	#navigator_mobile{
		z-index: 999999;
	}
	#navigator_mobile i{
		position: absolute;
		transform: scale(1.6);
		top: 4%;
		right: 6%;
	}
	#navigator_mobile i, #navigator_mobile a{
		color:white;
	}
	.gamburger{
		font-size: 1.2em;
		text-align: right;
		width: 100%;
		top:14%;
		/* width: 50%; */
		/* right: 3%; */
		position: absolute;
		background-color: rgb(2, 55, 76);
		z-index: 99999;
	}
	.gamburger ul{
		list-style-type: none;
		padding: 0%;
		margin-bottom: 0px;
	}
	.gamburger ul li{
		text-align: center;
		padding:0.6em;
		border-bottom: 3px solid white;
	}
	.gamburger ul li:first-child{
		border-top: 3px solid white;
	}
	.router-link-exact-active span{
		color: rgb(0, 146, 202);
	}
	a.router-link-exact-active:hover span{
		color: rgb(0, 146, 202);
	}

	.menu-enter-active {
		animation: menu-in .5s;
	}
	.menu-leave-active {
		animation: menu-in .5s reverse;
	}
	@keyframes menu-in {
	0% {
		transform: scaleY(0);
	}
	50% {
		transform: scaleY(1.2);
	}
	100% {
		transform: scaleY(1);
	}
	}



	
	.menu_open-enter-active, .menu_open-leave-active {
		transition: opacity .1s;
	}
	.menu_open-enter, .menu_open-leave-to /* .fade-leave-active до версии 2.1.8 */ {
		opacity: 0;
	}
}





@media only screen  and (min-width: 620px) and (max-width: 1399px) {
	#navigator{
		/* position: absolute; */
		padding: 1em;
		z-index: 100;
		width: 100vw;
	}
	#navigator_mobile{
		display: none;
	}	
	div#logotip_div{
		max-width: 38vw;
		padding-left: 30px;
	}
	img#logotip{
		max-width: 500px;
		width: 22vw;
		pointer-events: none;
	}
	
	.router-link-exact-active span{
		color: rgb(0, 146, 202);
	}
	a.router-link-exact-active:hover span{
		color: rgb(0, 146, 202);
	}
	a.navig:hover{
		color: #0ff;
		text-decoration: none;
	}
	a.navig:hover span{
		color: #0ff;
		text-decoration: none;
		background-size: 100% 2px;
	}
}
@media only screen  and (min-width: 1400px) {
	#navigator{
		/* position: absolute; */
		padding: 1.7em;
		z-index: 100;
		height: 80px;
	}
	#navigator_mobile{
		display: none;
	}	
	div#logotip_div{
		max-width: 38vw;
		padding-left: 30px;
	}
	img#logotip{
		max-width: 500px;
		width: 22vw;
		pointer-events: none;
	}
	
	a.navig:hover{
		color:#fff;
		text-decoration: none;
	}
	a.navig:hover span{
		color: #0ff;
		text-decoration: none;
		background-size: 100% 2px;
	}
	a.router-link-exact-active span{
		color: rgb(0, 146, 202);
	}
	a.router-link-exact-active:hover span{
		color: #0ff;
	}
}
#navigator{
	position: absolute;
	top: 0;
	left: 0;
	max-height: 100px;
}
.navig span{
	font-size: calc( 0.009 * 100vw + 11.2px );
	color:#fff;
	font-weight: 500;
	margin-right: 1em;
	transition: 0.3s;
	text-decoration: none;
	background-image: linear-gradient(currentColor, currentColor);
	background-position: 0% 100%;
	background-repeat: no-repeat;
	background-size: 0% 2px;
}

.WidthNavigation{
	margin: 0 auto;
	display: table-cell;
}
.WidthNavigation.TitlesNavigation{
	text-align: right;
	vertical-align: middle;
}



.WidthNavigation.TitlesNavigation .menu{
	margin-right: 16%;
	display: inline;
}
.WidthNavigation.TitlesNavigation #lang{
	color: white;
 	width: 10px;
	display: inline;
}
.WidthNavigation.TitlesNavigation #lang span{
	padding: 10px;
	border-radius: 50%;
	font-size: calc( 0.01 * 100vw + 11.2px );
	line-height: calc( 0.01 * 100vw + 11.2px );  /* подробнее про line-height */
	text-align: center;
	
	font-family: "BebasNeueBold";
}
.WidthNavigation.TitlesNavigation #lang span.active{
	border-radius: 50%;
	border: 3px solid white;
	padding: 8px;
    padding-top: 4px;
    padding-bottom: 3px;
}
#lang{
	display: inline-block;

}

.fade-enter-active, .fade-leave-active {
	transition-property: opacity;
	/* transition-duration: 0.20s; */
	transition-delay: 0.20s;
}

/* .fade-enter-active {
	transition-delay: 0.20s;
} */

.fade-enter, .fade-leave-active {
	opacity: 0;
}


.main-fade-enter-active {
	transition: all .3s ease;
}
.main-fade-leave-active {
	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.main-fade-enter, .main-fade-leave-to
/* .main-fade-leave-active до версии 2.1.8 */ {
	transform: translateX(10px);
	opacity: 0;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(1);
	}
}
</style>

<script>
export default {
  name: 'app',
  data () {
    return {
		mobile: false,
		select: 'Russia',
		activeClass: 'active',
		page: [],
		menuOpen: false,
		text:[{
			Russia:[
				{title:'Главная', path: '/'},
				{title:'Оборудование', path: '/equipment'},
				{title:'Услуги', path: '/amenites'},
				{title:'Контакты', path: '/contact'}
			],
			English:[
				{title:'Home', path: '/'},
				{title:'Equipment', path: '/equipment'},
				{title:'Services', path: '/amenites'},
				{title:'Contact', path: '/contact'}
			]
		}]
    }
  },
	created(){
		this.Before();
	},
  methods: {
    Up: function () {
      this.$refs.page.move(1)
    },
    Before: function () {
		this.mobile = this.$parent.mobile;
		this.select = this.$parent.lang;
		this.page = this.text[0][this.select];
    },
    SelectLang (lang) {
		this.$refs.page.SelectLang(lang)
		this.select = lang;
		this.page = this.text[0][this.select];
	},
	
  }
}
</script>
