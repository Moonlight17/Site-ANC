<template>
	<div id="amenites">
			<div class="section">
				<div class="content">
					<p id="title">{{page.Title}}</p>
					<div class="points" style="position: relative;">
						<img id="img" src="../source/back.png" alt="">
						<div id="block">
							<div :style="i.style" v-for="i in page.blocks">
								<p>{{i.cont}}</p>
							</div>
						</div>
					</div>
				</div>
				<div id="footer_amenites">
					<div>
						<span><a href="tel:+74956415135">+7(495) 641 51 35</a>&nbsp&nbsp/&nbsp&nbsp<a href="mailto:info@ancprotek.ru">INFO@ANCPROTEK.RU</a><img src="../imgMain/LogoWhite.png"/>Россия, Москва, Шоссе Энтузиастов, 56с25</span>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
	  msg: 'Amenites',
	  page: [],
		select: '',
		text:[
			{
				Russia:{
					name:'Основные характеристики модульных оптико-электронных комплексов',
					Title: 'Перечень предлагаемых информационных услуг',
					blocks: [
						{
							cont: 'Астрономические измерения по объектам в ОКП и соответствующие им погрешности',
							style: {
								top: '-1%',
								left: '-10%',
								textAlign: 'right',
							},
						},
						{
							cont: 'Орбитальная информация и оценки погрешности (Ковариационные матрицы)',
							style: {
								top: '31%',
								left: '-27%',
								textAlign: 'right',
							},
						},
						{
							cont: 'Оценка параметров сближения космических объектов и вероятности столкновения',
							style: {
								top: '88%',
								left: '-14%',
								textAlign: 'right',
							},
						},
						{
							cont: 'Проектирование и изготовление комплексных решений для наблюдения за ОКП',
							style: {
								top: '95%',
								right: '31%',
								textAlign: 'right',
							},
						},
						{
							cont: 'Поставка оптико-электронных комплексов в сборе и их составных частей, администрированных к требованиям заказчика',
							style: {
								top: '76%',
								right: '-16%',
								textAlign: 'left',
							},
						},
						{
							cont: 'Информационно-аналитическое сопровождение планируемых операций в ОКП (запусков, манёвров)',
							style: {
								top: '38%',
								right: '-25%',
								textAlign: 'left',
							},
						},
						{
							cont: 'Информационно-аналитические отчеты о ситуации в ОКП',
							style: {
								top: '2%',
								right: '-16%',
								textAlign: 'left',
							},
						},
					],
				},
				English:{
					
				}
			}

		],
    }
  },
	created: function () {
		this.Before()
	},
	methods: {
		Before: function () {
		this.mobile = this.$parent.mobile;
		this.select = this.$parent.select;
		this.page = this.text[0][this.select];
		},
		SelectLang (lang) {
			this.page = this.text[0][lang];
		}
	}
}
</script>

<style>
#amenites{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#amenites .section{
    /* min-height: 100vh; */
}
#amenites .content{
    margin: 0 auto;
    margin-top: 7%;
    color: rgb(206, 206, 206);
    z-index: 100;
}
#amenites p#title{
	color: white;
	text-transform: uppercase;
	font-size: 2.2em;
}
#amenites .points{
    width: 60%;
    margin: 0 auto;
}
#amenites img#img{
	margin-top: 5%;
	width: 90%;
}
#amenites #block div{
	position: absolute;
	width: 36%;
	/* top: 0;
	left: 0; */
}
#amenites #block div p{
	padding: 10px;
	background-color: rgba(2, 55, 76, 0.72);
	font-size: 19px;
	font-weight: bold;
}
#amenites #footer_amenites{
	position: fixed;
	bottom: 0;
	height: 7%;
	width: 100vw;
	background-color: black;
	color: white;
}
#amenites #footer_amenites a{
	color: white;
}
#amenites #footer_amenites a:hover{
	color: white;
	cursor: pointer;
}
#amenites #footer_amenites div{
	bottom: 0px;
}
#amenites #footer_amenites div img{
	width: 3%;
	margin-left: 10px;
	margin-right: 10px;
}
</style>
