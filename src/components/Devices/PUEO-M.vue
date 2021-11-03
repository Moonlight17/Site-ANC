<template>
<div id="PU30M">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <img id="photo" src="./img/PU30M/PU30M_1.png"/>
        <img id="photo" src="./img/PU30M/PU30M_2.png"/>
      </div>
      <div id="desc" class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
        <!-- <div><h2 style="color: #00aeff">{{msg}}</h2></div> -->
          <table id="pum" style="margin:0 auto;">
            <thead>
              <tr>
                <th v-for="item in NameTableSecond"><span>{{item}}</span></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in item_table">
				<td :colspan="item.value ? 1 : 2"><span>{{item.name}}</span></td>
				<td v-if="item.value"><span>{{item.value}}</span></td>
              </tr>
            </tbody>
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
	  msg: 'Основные параметры и характеристики павильон-укрытия ПУЭО-М',
	  NameTableSecond: ['Параметры и характеристики (свойства)', 'Показатели (значения)'],
      item_table: [
        {
          name: 'Размер площадки для развертывания ПУЭО-М, м, не менее',
          value: '16×8'
        },
        {
          name: 'Габаритные размеры ПУЭО-М в транспортном состоянии, мм, не более',
          value: ''
        },
        {
          name: '- длина',
          value: '6162'
        },
        {
          name: '- ширина',
          value: '2508'
        },
        {
          name: '- высота',
          value: '2598'
        },
        {
          name: 'Габаритные размеры ПУЭО-М в рабочем состоянии, мм, не более',
          value: ''
        },
        {
          name: '- длина',
          value: '6428'
        },
        {
          name: '- ширина с куполом',
          value: '4112'
        },
        {
          name: '- высота с куполом (без фундамента)',
          value: '6940'
        },
        {
          name: '- диаметр купола',
          value: '4120'
        },
        {
          name: 'Масса ПУЭО-М с ОЭК, кг, не более',
          value: '5000'
        },
        {
          name: 'Рабочая угловая скорость поворота купола ПУЭО-М, град/сек, не менее',
          value: '15'
        },
        {
          name: 'Ширина рабочего вертикального проема в куполе для ОЭК, мм, не менее',
          value: '1400'
        },
        {
          name: 'Электропитание и электрооборудование',
          value: ''
        },
        {
          name: 'Cтационарная промышленная однофазная электрическая сеть переменного тока с глухозаземленной нейтралью',
          value: ''
        },
        {
          name: 'номинальное напряжение, В',
          value: '220'
        },
        {
          name: 'номинальная частота, Гц',
          value: '50'
        },
        {
          name: 'нормы качества электрической энергии',
          value: 'по ГОСТ 13109-97'
        },
        {
          name: 'передвижной источник (передвижная электростанция или электроагрегат) переменного трехфазного (однофазного) тока с изолированной нейтралью',
          value: ''
        },
        {
          name: 'номинальное напряжение, В',
          value: '230'
        },
        {
          name: 'номинальная частота, Гц',
          value: '50'
        },
        {
          name: 'нормы качества электрической энергии',
          value: 'по ГОСТ Р 50783-95'
        },
        {
          name: 'Максимальная суммарная мощность электро-приемников ПУЭО-М, кВт, не более',
          value: '5'
        },
      ]

    }
  },
  computed: {
  },
  methods: {}
}
</script>

<style scoped>
#PU30M {
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
  font-size: 1em;
}
table td {
    height: 5vh;
}
#pum td{

}
</style>
