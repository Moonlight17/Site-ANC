<template>
<div id="equipment">
    <div class="section">
        <div class="content row">
            <div id="mini_menu" class="row col-lg-9 col-xl-9">
                <div class="block_menu col-lg-3 col-xl-3" v-for="item, index in page.menu">
                    <div @click="menu(item.value, index)" :class="[(item.value == tab) ? 'active' : 'def']" class="name">
                        <div class="text">{{item.name}}</div>
                    </div>
                    <transition name="block-menu-fade">
                        <div v-show="item.value == tab" ref="menu" class="list_block">
                            <div @click="cont_menu(tit.cont, index)" :class="[(tit.cont == select_tab) ? 'active_mini_tab' : '']" v-for="tit, index in item.parts" class="list_menu">
                                {{tit.name}}
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        <div id="name_page" :style="{marginTop: marg_name + 'px' }" style="transition-duration: .4s;">
            <p>{{page.Title}}</p>
        </div>
        <div id="table_data" class="row">
            <div id="table_data_content" class="col-sm-12 col-md-12 col-lg-9 col-xl-9">
                <div id="comp">
                  <!-- ((tab == '')||(tab == 'OK'))&& -->
                    <table v-if="(select_tab=='')">
                        <tbody>
                            <tr v-for="i in page.table">
                                <td>
                                    <p>{{i.name}}</p>
                                </td>
                                <td>
                                    <p>{{i.diam}}<br>{{i.diam_ed}}</p>
                                </td>
                                <td>
                                    <p>{{i.grad}}<br>{{i.grad_ed}}</p>
                                </td>
                                <td>
                                    <p>{{i.pronic}}<br>{{i.pronic_ed}}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="component">
                        <component :is="select_tab" class="tab"></component>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer_equipment">
            <div>
                <span><a href="tel:+74956415135">+7(495) 641 51 35</a>&nbsp&nbsp/&nbsp&nbsp<a href="mailto:info@ancprotek.ru">INFO@ANCPROTEK.RU</a><img src="../imgMain/LogoWhite.png" />Россия, Москва, Шоссе Энтузиастов, 56с25</span>
            </div>
        </div>
    </div>
    <div class="copm_mobile">
      <div v-for="item in page.menu">
        <div v-for="i in item.parts">
          <h5 class="name_mobile">{{i.name}}</h5>
          <component :is="i.cont" class="tab"></component>
        </div>
      </div>

    </div>
</div>
</template>

<script>
import MOES19 from './Devices/MOES19.vue'
import MOES25 from './Devices/MOES25.vue'
import MOES30 from './Devices/MOES30.vue'
import MOES40 from './Devices/MOES40.vue'
import MOES50 from './Devices/MOES50.vue'
import MOES65 from './Devices/MOES65.vue'
import PU30 from './Devices/PU30.vue'
import PD4040 from './Devices/PD4040.vue'
import PD6060 from './Devices/PD6060.vue'
import ABM700 from './Devices/ABM700.vue'
import ABM820 from './Devices/ABM820.vue'
import PUEO from './Devices/PUEO-M.vue'
import SUPPORTROTATEDEVICE from './Devices/SupportRotateDevice.vue'

export default {
  name: 'Equipment',

  components: {
    MOES19,
    MOES25,
    MOES30,
    MOES40,
    MOES50,
    MOES65,
    PU30,
    PD4040,
    PD6060,
    ABM700,
    ABM820,
    PUEO,
    SUPPORTROTATEDEVICE
  },
  data () {
    return {
      msg: 'Equipment',
      tab: '',
      select_tab: '',
      page: [],
      select: '',
      mobile: false,
      marg_name: 0,
      text: [{
        Russia: {
          Title: 'Основные характеристики модульных оптико-электронных комплексов',
          menu: [{
            name: 'Модульные оптико-электронные средства',
            value: 'OK',
            parts: [{
              name: 'МОЭК 19',
              cont: 'MOES19'
            },
            {
              name: 'МОЭК 25',
              cont: 'MOES25'
            },
            {
              name: 'МОЭК 30',
              cont: 'MOES30'
            },
            {
              name: 'МОЭК 40',
              cont: 'MOES40'
            },
            {
              name: 'МОЭК 50',
              cont: 'MOES50'
            },
            {
              name: 'МОЭК 65',
              cont: 'MOES65'
            }
            ]
          },
          {
            name: 'Фотоприемные устройства',
            value: 'PD',
            parts: [{
              name: 'ФПУ 4040',
              cont: 'PD4040'
            },
            {
              name: 'ФПУ 6060',
              cont: 'PD6060'
            }
            ]
          },
          {
            name: 'Опорно-поворотные устройства',
            value: 'RD',
            parts: [{
              name: 'АВМ 700',
              cont: 'ABM700'
            },
            {
              name: 'АВМ 820',
              cont: 'ABM820'
            }
            ]
          },
          {
            name: 'Павильоны укрытия',
            value: 'PU',
            parts: [{
              name: 'ПУ 30П',
              cont: 'PU30'
            },
            {
              name: 'ПУ 30М',
              cont: 'PUEO'
            }
            ]
          }
          ],
          table: [{
            name: 'Название',
            diam: 'Линейный диаметр поля зрения объектива',
            diam_ed: 'град./мм',
            grad: 'Эффективный угловой размер поля зрения по сенсору ФПУ',
            grad_ed: 'град.',
            pronic: 'Ожидаемое проницание не хуже',
            pronic_ed: 'зв. величина'
          },
          {
            name: 'МОЭК 19',
            diam: '10.0/52',
            diam_ed: '',
            grad: '8.3x5.6',
            grad_ed: '',
            pronic: '16.5',
            pronic_ed: ''
          },
          {
            name: 'МОЭК 25',
            diam: '4.8/52',
            diam_ed: '',
            grad: '3.3x2.2',
            grad_ed: '',
            pronic: '16.5',
            pronic_ed: ''
          },
          {
            name: 'МОЭК 30',
            diam: '6.8/52',
            diam_ed: '',
            grad: '4.8x4.8',
            grad_ed: '',
            pronic: '17.0',
            pronic_ed: ''
          },
          {
            name: 'МОЭК 40',
            diam: '2.9/52',
            diam_ed: '',
            grad: '2.5x2.5',
            grad_ed: '',
            pronic: '17.5',
            pronic_ed: ''
          },
          {
            name: 'МОЭК 50',
            diam: '3.1/52',
            diam_ed: '',
            grad: '2.2x2.2',
            grad_ed: '',
            pronic: '18.0',
            pronic_ed: ''
          },
          {
            name: 'МОЭК 60',
            diam: '3.8/52',
            diam_ed: '',
            grad: '2.7x2.7',
            grad_ed: '',
            pronic: '18.5',
            pronic_ed: ''
          }
          ]
        },
        English: {

        }
      }

      ]
    }
  },
  created: function () {
    this.Before()
    // alert(this.page.menu);
  },
  methods: {
    Before: function () {
      this.mobile = this.$parent.mobile
      this.select = this.$parent.select
      this.page = this.text[0][this.select]
    },
    menu: function (index, id) {
      // alert(index);
      // if((this.tab == index)&&(this.select_tab != '')){
      if (this.tab == index) {
        this.tab = ''
        this.marg_name = 0
      } else {
        this.tab = index
        window.setTimeout(() => this.func(id), 1)
      };
      this.select_tab = ''
    },
    cont_menu: function (cont, id) {
      // alert(cont);
      this.select_tab = cont
    },
    func: function (id) {
      this.marg_name = this.$refs.menu[id].clientHeight
    },
    SelectLang (lang) {
      this.page = this.text[0][lang]
    }
  }
}
</script>

<style>
/* Smartphones (вертикальная и горизонтальная ориентация) ----------- */
@media only screen and (min-width : 320px) and (max-width : 480px) {
  #equipment {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #equipment .section {
      background-image: url('../source/Background.png');
      background-size: cover;
      min-height: 100vh;
      display: none;
  }
  .copm_mobile{
    display: block;
    margin-top: 60px;
  }
  .name_mobile{
    color: white;
  }
}






@media only screen  and (min-width: 1159px) {
  .copm_mobile{
    display: none;
  }
  #equipment {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #equipment .section {
      background-image: url('../source/Background.png');
      background-size: cover;
      min-height: 100vh;
  }

  #equipment #mini_menu {
      margin: 0 auto;
      margin-top: 7%;
      color: red;
      z-index: 100;
  }

  #equipment #mini_menu .block_menu {
      display: inline-table;
      /* width: calc(60%/4); */
      padding: 7px;
      margin: 0 auto;
      position: relative;
      height: 100%;
  }

  #equipment #mini_menu .block_menu div.name {
      display: flex;
      min-height: 5em;
      border: 1px none solid;
      transition: all .2s ease;
  }
  #equipment #mini_menu .block_menu div.name:hover {
      cursor: pointer;
  }

  #equipment #mini_menu .block_menu div.name.active {
      color: rgb(0, 102, 143);
      background-color: rgba(218, 218, 218, 0.808);
  }

  #equipment #mini_menu .block_menu div.name.def {
      color: White;
      background-color: rgba(0, 146, 202, 0.62);
      border: none;
      height: 100%;
  }

  #equipment #mini_menu .block_menu div.name div.text {
      width: 70%;
      margin: auto;
      text-transform: uppercase;
      font-weight: 700;
  }

  #equipment #mini_menu .list_block {
      margin: 0;
      width: 97%;
      margin-top: 7px;
      position: absolute;
  }

  #equipment #mini_menu .list_menu {
      color: white;
      display: inline-table;
      width: calc(100%/2);
      background-color: rgba(0, 146, 202, 0.62);
      padding: 0.4em;
      border: 1px black solid;
      transition: all .4s ease;
  }

  #equipment #mini_menu .list_menu:hover {
      cursor: pointer;
  }

  #equipment #mini_menu .list_menu.active_mini_tab {
      color: rgb(0, 86, 119);
      background-color: rgba(218, 218, 218, 0.85);
      font-weight: 700;
  }

  #equipment .section #name_page {
      width: 70%;
      margin: 0 auto;
      /* margin-top: 6%; */
  }

  #equipment .section #name_page p {
      color: white;
      font-size: 2em;
      text-transform: uppercase;
  }

  #equipment #table_data {
      color: red;
  }

  #equipment #table_data #table_data_content {
      margin: 0 auto;
  }

  #equipment #table_data table {
      width: 100%;
      margin: 0 auto;
  }

  #equipment #table_data tr td {
      width: 25%;
      padding: .6rem;
      margin: 0 auto;
      color: white;
      border: 1px black solid;
      background-color: rgba(2, 55, 76, 0.72);
  }

  #equipment #table_data tr td p {
      margin: 0 auto;
      width: 60%;
      font-weight: 600;
      padding: 6px;
  }

  #equipment #table_data tr:first-child td p {
      font-weight: 600;
      padding: 0px;
  }

  #equipment #table_data tr td:first-child {
      /* width: 30%; */
      /* padding: 0px; */
      /* width: 14%; */
  }

  #equipment #table_data td:first-child p {
      width: 100%;
  }

  #equipment #table_data #table_data_content div#comp div#component {
      /* height: 100%; */
      /* max-height: 55vh; */
      /* overflow: scroll; */
      /* margin-bottom: 5%; */
      margin-bottom: 10%;
  }

  #equipment #footer_equipment {
      position: fixed;
      bottom: 0;
      height: 7%;
      width: 100vw;
      background-color: black;
      color: white;
  }

  #equipment #footer_equipment a {
      color: white;
  }

  #equipment #footer_equipment a:hover {
      color: white;
      cursor: pointer;
  }

  #equipment #footer_equipment div {
      bottom: 0px;
  }

  #equipment #footer_equipment div img {
      width: 3%;
      margin-left: 10px;
      margin-right: 10px;
  }

  /* Animate */
  .block-menu-fade-enter-active {
      transition: all .4s ease;
  }

  .block-menu-fade-leave-active {
      transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .block-menu-fade-enter,
  .block-menu-fade-leave-to

  /* .block-menu-fade-leave-active до версии 2.1.8 */
      {
      transform: translateY(-25px);
      opacity: 0;
      z-index: 10;
  }
}
/* Большие экраны ----------- */
@media only screen  and (min-width: 1824px) {
  .copm_mobile{
    display: none;
  }
  #equipment {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #equipment .section {
      background-image: url('../source/Background.png');
      background-size: cover;
      min-height: 100vh;
  }

  #equipment #mini_menu {
      margin: 0 auto;
      margin-top: 7%;
      color: red;
      z-index: 100;
  }

  #equipment #mini_menu .block_menu {
      display: inline-table;
      /* width: calc(60%/4); */
      padding: 7px;
      margin: 0 auto;
      position: relative;
      height: 100%;
  }

  #equipment #mini_menu .block_menu div.name {
      display: flex;
      min-height: 5em;
      border: 1px none solid;
      transition: all .2s ease;
  }
  #equipment #mini_menu .block_menu div.name:hover {
      cursor: pointer;
  }

  #equipment #mini_menu .block_menu div.name.active {
      color: rgb(0, 102, 143);
      background-color: rgba(218, 218, 218, 0.808);
  }

  #equipment #mini_menu .block_menu div.name.def {
      color: White;
      background-color: rgba(0, 146, 202, 0.62);
      border: none;
      height: 100%;
  }

  #equipment #mini_menu .block_menu div.name div.text {
      width: 70%;
      margin: auto;
      text-transform: uppercase;
      font-weight: 700;
  }

  #equipment #mini_menu .list_block {
      margin: 0;
      width: 97%;
      margin-top: 7px;
      position: absolute;
  }

  #equipment #mini_menu .list_menu {
      color: white;
      display: inline-table;
      width: calc(100%/2);
      background-color: rgba(0, 146, 202, 0.62);
      padding: 0.4em;
      border: 1px black solid;
      transition: all .4s ease;
  }

  #equipment #mini_menu .list_menu:hover {
      cursor: pointer;
  }

  #equipment #mini_menu .list_menu.active_mini_tab {
      color: rgb(0, 86, 119);
      background-color: rgba(218, 218, 218, 0.85);
      font-weight: 700;
  }

  #equipment .section #name_page {
      width: 70%;
      margin: 0 auto;
      /* margin-top: 6%; */
  }

  #equipment .section #name_page p {
      color: white;
      font-size: 2em;
      text-transform: uppercase;
  }

  #equipment #table_data {
      color: red;
  }

  #equipment #table_data #table_data_content {
      margin: 0 auto;
  }

  #equipment #table_data table {
      width: 100%;
      margin: 0 auto;
  }

  #equipment #table_data tr td {
      width: 25%;
      padding: .6rem;
      margin: 0 auto;
      color: white;
      border: 1px black solid;
      background-color: rgba(2, 55, 76, 0.72);
  }

  #equipment #table_data tr td p {
      margin: 0 auto;
      width: 60%;
      font-weight: 600;
      padding: 6px;
  }

  #equipment #table_data tr:first-child td p {
      font-weight: 600;
      padding: 0px;
  }

  #equipment #table_data tr td:first-child {
      /* width: 30%; */
      /* padding: 0px; */
      /* width: 14%; */
  }

  #equipment #table_data td:first-child p {
      width: 100%;
  }

  #equipment #table_data #table_data_content div#comp div#component {
      /* height: 100%; */
      /* max-height: 55vh; */
      /* overflow: scroll; */
      /* margin-bottom: 5%; */
      margin-bottom: 10%;
  }

  #equipment #footer_equipment {
      position: fixed;
      bottom: 0;
      height: 7%;
      width: 100vw;
      background-color: black;
      color: white;
  }

  #equipment #footer_equipment a {
      color: white;
  }

  #equipment #footer_equipment a:hover {
      color: white;
      cursor: pointer;
  }

  #equipment #footer_equipment div {
      bottom: 0px;
  }

  #equipment #footer_equipment div img {
      width: 3%;
      margin-left: 10px;
      margin-right: 10px;
  }

  /* Animate */
  .block-menu-fade-enter-active {
      transition: all .4s ease;
  }

  .block-menu-fade-leave-active {
      transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .block-menu-fade-enter,
  .block-menu-fade-leave-to

  /* .block-menu-fade-leave-active до версии 2.1.8 */
      {
      transform: translateY(-25px);
      opacity: 0;
      z-index: 10;
  }
}
</style>
