<template>
<div id="MOES19">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <img id="photo" src="./img/19/19_photo.png"/>
      </div>
      <div id="desc" class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
        <!-- <div><h2 style="color: #00aeff">{{msg}}</h2></div> -->
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
      msg: 'Модульное оптико-электронное средство МОЭC-19',
      text: 'Объектив представляет собой малоапертурный катадиоптрический широкопольный оптический прибор высокой светосилы со сферической оптикой, который выполнен по системе Шенкера с трехлинзовым полноапертурным корректором, с задним расположением фотоприёмного устройства в фокусе Кассегрена. Компоновка  и применённая оптическая схема  позволяют  использовать фотоприёмную аппаратуру произвольных габаритов и, в силу размещения вторичного зеркала на линзе полноапертурного корректора, избежать применения системы механических конструктивных элементов крепления вторичного зеркала - растяжек, что исключает помехи от них на изображении, и позволяет эффективно обнаруживать слабые точечные объекты вблизи ярких источников света (звезд) в поле зрения.',
      NameTableSecond: ['Параметры и характеристики (свойства)', 'Показатели (значения)'],
      item_table:[
				{
					name: 'Диаметр входного зрачка, мм',
					value: '194'
				},
				{
					name: 'Эффективное фокусное  расстояние, мм',
					value: '296'
				},
				{
					name: 'Угловой диаметр поля зрения, град.',
					value: '10'
				},
				{
					name: 'Линейный диаметр поля зрения, мм',
					value: '52'
				},
				{
					name: 'Задний отрезок, мм',
					value: '30.7'
				},
				{
					name: 'Длина оптической системы, мм',
					value: '248,44'
				},
				{
					name: 'Длина с блендой/без бленды, мм',
					value: '700/259'
				},
				{
					name: 'Диаметр наибольший (с блендой), мм',
					value: '310'
				},
				{
					name: 'Масса объектива, кг, не более',
					value: '21'
				},
				{
					name: 'Ожидаемое проницание за 10 с экспозиции на ФПУ, не хуже, зв. величина',
					value: '16.5m'
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
#MOES19 {
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
