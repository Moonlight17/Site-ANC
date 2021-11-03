<template>
<div id="MOES40">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <img id="photo" src="./img/40/40_photo.png"/>
      </div>
      <div id="desc" class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
        <div><h2 style="color: #fff">{{msg}}</h2></div>
        <p class="text">
          {{text}}
        </p>
        <table >
          <table style="margin:0 auto;">
            <thead>
              <tr>
                <th v-for="item in NameTableSecond">{{item}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in item_table">
                <td :colspan="item.value ? 1 : 2">{{item.name}}</td>
                <td v-if="item.value">{{item.value}}</td>
              </tr>
            </tbody>
          </table>
        </table>
      </div>
    </div>
  </div>
    <div id="nineteen">

    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Модульное оптико-электронное средство МОЭC-40',
      text: 'Объектив представляет собой катадиоптрический (зеркально-линзовый) широкопольный оптический прибор высокой светосилы со сферической оптикой. Объектив выполнен по оптимизированной оптической схеме (системе) Гамильтона с однолинзовым полноапертурным корректором и двухлинзовым предфокальным корректором, с передним расположением фотоприёмного устройства в главном (прямом) фокусе. Использование сферической оптики обеспечивает высокую воспроизводимость системы при серийном производстве. Закрытая конструкция объектива предупреждает загрязнение внутренних оптических элементов. Применение покрытия внутреннего отражения на главном зеркале (зеркале Манжена) способствует долговечности и стабильности коэффициента пропускания системы.',
      NameTableSecond: ['Параметры и характеристики (свойства)', 'Показатели (значения)'],
      item_table:[
				{
					name: 'Диаметр входного зрачка, мм',
					value: '400'
				},
				{
					name: 'Эффективное фокусное  расстояние, мм',
					value: '1200'
				},
				{
					name: 'Угловой диаметр поля зрения, град.',
					value: '2.9'
				},
				{
					name: 'Линейный диаметр поля зрения, мм',
					value: '61.3'
				},
				{
					name: 'Задний отрезок, мм',
					value: '122.6'
				},
				{
					name: 'Длина оптической системы, мм',
					value: '1050.77'
				},
				{
					name: 'Длина с блендой/без бленды, мм',
					value: '1290/880'
				},
				{
					name: 'Масса объектива, кг, не более',
					value: '60'
				},
				{
					name: 'Ожидаемое проницание за 5 с экспозиции на ФПУ, не хуже, зв. величина',
					value: '17.5m'
				},
			],

}
  },
  computed: {
  },
  methods: {}
}
</script>

<style scoped>
#MOES40 {
    height: 100%;
    color: white;
}
img#photo{
  margin-top: 13%;
  width: 90%;
}
div #caption{
	color: #78daff;
	opacity: 0.9;
	text-decoration: underline;
}
div#desc{
  width: 100%;
}
div#desc p.text{
  text-align: justify;
}
table{
  table-layout: fixed;
}

</style>
