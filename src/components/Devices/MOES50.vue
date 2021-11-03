<template>
<div id="MOES50">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <img id="photo" src="./img/50/50_photo.png"/>
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
      msg: 'Модульное оптико-электронное средство МОЭC-50',
      text: 'Объектив представляет собой катадиоптрический (зеркально-линзовый) широкопольный оптический прибор высокой светосилы со сферической оптикой. Объектив выполнен по оптимизированной оптической схеме (системе) Гамильтона с однолинзовым полноапертурным корректором и двухлинзовым предфокальным корректором, с передним расположением фотоприёмного устройства в главном (прямом) фокусе. Использование сферической оптики обеспечивает высокую воспроизводимость системы при серийном производстве. Закрытая конструкция объектива предупреждает загрязнение внутренних оптических элементов. Применение покрытия внутреннего отражения на главном зеркале (зеркале Манжена) способствует долговечности и стабильности коэффициента пропускания системы.',
      NameTableSecond: ['Параметры и характеристики (свойства)', 'Показатели (значения)'],
      item_table:[
				{
					name: 'Диаметр входного зрачка, мм',
					value: '500'
				},
				{
					name: 'Эффективное фокусное  расстояние, мм',
					value: '970'
				},
				{
					name: 'Угловой диаметр поля зрения, град.',
					value: '3.1'
				},
				{
					name: 'Линейный диаметр поля зрения, мм',
					value: '52'
				},
				{
					name: 'Задний отрезок, мм',
					value: '131'
				},
				{
					name: 'Длина с блендой/без бленды, мм',
					value: '1340/840'
				},
				{
					name: 'диаметр наибольший (с блендой), мм',
					value: '600'
				},
				{
					name: 'ширина по торцам узлов крепления к опорно-поворотному устройству, мм',
					value: '575'
				},
				{
					name: 'Масса объектива, кг, не более',
					value: '65'
				},
				{
					name: 'Ожидаемое проницание за 5 с экспозиции на ФПУ, не хуже, зв. величина',
					value: '18.0m'
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
#MOES50 {
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
