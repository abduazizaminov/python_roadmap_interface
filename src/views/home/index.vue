<template>
  <div class=" overflow-x-hidden">
    <div class="bg-customGreen mb-16">
      <div class="lg:max-w-7xl w-full ml-auto mr-auto">
        <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
          <div class="py-[55px] flex items-center justify-between">
            <div class="z-50 ">
              <div class="text-white">
                <h2 class="text-[32px] leading-[50px] mb-[18px]">
                  Касби 
                </h2>
                <h1 class="text-[86px] font-medium leading-[86px]">
                  Python - <br>
                  таҳиякунанда
                </h1>
              </div>
              <div class="mt-[42px] text-[20px]">
                <span class="font-bold">Python-ро аз сифр омӯзед</span> ва аз нав оғоз кунед <br>
                  мансаб аз вазифаи таҳиягари хурд аллакай <br>
                  пас аз 3 моҳи омӯзиш
              </div>
              <div class="mt-[60px] font-ibm mb-[32px] flex">
                <router-link to="/roadmap">
                  <div
                    class="cursor-pointer border-solid mr-[10px] border-black border-[3px] px-[44px] py-[22px] text-[16px] leading-[155%] font-semibold">
                    Python Roadmap
                  </div>
                </router-link>
              </div>
              <div class="flex mb-[10px] font-ibm text-[14px] text-center text-white">
                <div @click="goToStat()" class="bg-black cursor-pointer mr-[10px] col-span-6 px-[14px] py-[5px]">
                  Омор дар бораи python
                </div>
                <div @click="goToInfo()" class="bg-black cursor-pointer col-span-6 px-[14px] py-[5px]">
                  Ин курс барои кӣ мувофиқ аст?
                </div>
              </div>
              <div class="flex font-ibm text-white text-[14px]">
                <div @click="goToPythonDevInfo()" class="bg-black cursor-pointer col-span-6 px-[14px] py-[5px]">
                  Тахиягари python кист
                </div>
              </div>
            </div>
            <div class="block">
              <div class="w-[460px] h-[460px] rotate-45 spin-block border-[1px] border-[#FDD231]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:max-w-7xl mb-16 w-full ml-auto mr-auto">
      <div id="info" class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
        <h2 class="text-5xl mb-[27px] leading-[74px]">
          Дастури рақамии харитаи роҳи барномасозони Python метавонад муфид бошад ба...
        </h2>
        <div class="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-[40px]">
          <div class="col-span-4">
            <info-block>
              <template #header>
                Навомӯзон
              </template>
              <div>
                Дар таҳияи стратегияи омӯзиш ва фаҳмидани қадамҳои азхудкунии мафҳумҳо ва малакаҳои калидӣ дар роҳи азхудкунии забони Python кӯмак мекунад
              </div>
            </info-block>
          </div>
          <div class="col-span-4">
            <info-block>
              <template #header>
                Донишҷӯён
              </template>
              <div>
                Кӯмак мекунад, ки дониши худро ташкил кунанд, омӯзиши забонро авлавият диҳанд ва вақти худро самаранок истифода баранд, то дар барномасозии Python муваффақ шаванд
              </div>
            </info-block>
          </div>
          <div class="col-span-4">
            <info-block>
              <template #header>
                Барномасозон
              </template>
              <div>
                Ба барномасозон дар сохтори донишҳои худ, муайян кардани самтҳои омӯзиши амиқ ва рушди малакаҳои Python барои ноил шудан ба сатҳи баланди салоҳият ва касбӣ дар кори худ кӯмак хоҳад кард
              </div>
            </info-block>
          </div>
        </div>
      </div>
      <div class="lg:px-16 md:px-8 px-6 py-10">
        <div class="mb-10 mt-16">
          <h2 class="text-[46px] mb-[50px] font-medium leading-[51px]">
            Шумо таҷрибаи воқеӣ хоҳед гирифт
          </h2>
          <div class="grid grid-cols-2 lg:gap-20 gap-14">
            <div class="border-customGreen border-[3px] lg:col-span-1 col-span-2 rounded-lg px-[33px] py-10">
              <p class="text-[#181818] text-3xl font-medium leading-9">
                <span class="text-customGreen">
                  Аз 10 корфармо 7 нафараш
                </span>
                одамони дорои таҷрибаро ба кор мегиранд
              </p>
            </div>
            <div class="text-lg lg:col-span-1 col-span-2 leading-[22px]">
              <h5 class="font-medium mb-2">
                Чаро амалия муҳим аст?
              </h5>
              <p>
                Амалия ба рушди эҷодкорӣ ва қобилияти ҳалли мушкилот мусоидат мекунад.
                Ҳангоми кор дар лоиҳаҳо, донишҷӯен бо монеаҳо ва хатогиҳои гуногун дучор меоянд, ки таҳлил ва
                ҷустуҷӯи ҳалли оптималӣ.
                Чунин таҷриба ба ташаккули қобилияти фикрронии мантиқӣ ва таҳлилӣ кӯмак мекунад ва инчунин малакаҳои ҷустуҷӯро такмил медиҳад
                маълумот ва худомӯзӣ.
              </p>
            </div>
          </div>
        </div>
        <div class="mb-16">
          <h3 class="text-3xl mb-[30px] font-medium leading-9 text-[#181818]">
            Таҷрибаи воқеӣ ба шумо медиҳад:
          </h3>
          <div class="grid grid-cols-4 gap-x-24 gap-y-12">
            <experience-tab>
              <template #number>
                01
              </template>
              <template #text>
                Лоиҳаҳои воқеӣ дар портфел
              </template>
            </experience-tab>
            <experience-tab>
              <template #number>
                02
              </template>
              <template #text>
                Иштирок дар таҷрибаомӯзӣ ва ҳакатонҳо
              </template>
            </experience-tab>
            <experience-tab>
              <template #number>
                03
              </template>
              <template #text>
                Имконияти гирифтани оффер аз ширкати фармоишгар
              </template>
            </experience-tab>
            <experience-tab>
              <template #number>
                04
              </template>
              <template #text>
                Таҷрибаи кор дар лоиҳа дар як гурӯҳ
              </template>
            </experience-tab>
          </div>
        </div>
      </div>
      <div id="stat" class="lg:px-16 md:px-8 px-6 mb-16 py-10">
        <div class="flex mb-[22px]">
          <h2 class="text-5xl leading-[55px]">
            <span class="text-customGreen">
              Python
            </span>
            беҳтарин забони барномасозӣ барои шурӯъкунандагон аст
          </h2>
          <div class="mb-3">
            <cells></cells>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-[100px]">
          <div class="col-span-1">
            <stat-block>
              <template #head>
                ҷои <span class="text-[52px] leading-[81px]">
                  2
                </span>-юм
              </template>
              <template #default>
                дар рейтинги маъруфияти забонҳои барномасозӣ
              </template>
              <template #source>
                Мувофиқи маълумот GitHub
              </template>
            </stat-block>
          </div>
          <div class="col-span-1">
            <stat-block>
              <template #head>
                бештар
                <span class="text-[52px] leading-[81px]">
                  1600
                </span>
              </template>
              <template #default>
                ҷойҳои холии таҳиягарони Python дар портали ҷустуҷӯи кор
              </template>
              <template #source>
                Мувофиқи маълумот Hh.ru
              </template>
            </stat-block>
          </div>
          <div class="col-span-1">
            <stat-block>
              <template #head>
                ба
                <span class="text-[52px] leading-[81px]">
                  10%
                </span>
              </template>
              <template #default>
                музди миёнаи таҳиягарон ҳар сол мунтазам меафзояд
              </template>
              <template #source>
                Мувофиқи маълумоти Habr
              </template>
            </stat-block>
          </div>
        </div>
      </div>
      <div id="dev" class="lg:px-16 md:px-8 px-6 py-10">
        <h2 class="text-5xl leading-[58px]">
          <div class="text-customGreen">
            Таҳиягари Python
          </div>
          чӣ кор мекунад?
        </h2>
        <div class="flex items-center">
          <div class="text-xl mt-[50px] leading-[26px] pr-[100px]">
            <p class="mb-7">
              <span class="font-bold">Python забони универсалӣ аст</span>, ки дар соҳаҳои гуногун истифода мешавад: 
              сайтҳо, веб - барномаҳо, бозиҳо, таҳлили маълумот, 
              автоматизатсия, кор бо дастгоҳҳо.
            </p>
            <p class="mb-7">
              <span class="font-bold">Дар Python backend сохта мешавад</span>, 
              яъне мантиқи дохилии барнома.
            </p>
            <p>
              Тасаввур кунед, ки шумо ба сатри ҷустуҷӯ 
              "сериалҳоро дар асл тамошо кунед"ворид кардаед. 
              Рӯйхати истинодҳое, ки системаи ҷустуҷӯӣ ба шумо 
              додааст — ин натиҷаи кори барномасози backend аст.
            </p>
          </div>
          <div class="mt-[-50px]">
            <div class="bg-[#FEC] w-[520px] h-[520px] rounded-full flex justify-center items-center bg-opacity-20">
              <python-icon></python-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:px-16 md:px-8 px-6 py-10">
        <div class="mb-16">
          <h2 class="text-5xl leading-[58px] max-w-[661px] w-full">
            Касби нави таҳиягари Python гиред
          </h2>
          <h5 class="text-xl leading-[27px] mt-[20px]">
            Аз сифр Бо Roadmap
          </h5>
        </div>
        <div class="grid grid-cols-12 gap-[30px]">
          <div class="lg:col-span-4 md:col-span-6 col-span-12">
            <job-info-block>
              Барномасозии Python-ро азхуд кунед <br>
              ва ҳалли мушкилотро бо<br>
              алгоритмҳо
            </job-info-block>
          </div>
          <div class="lg:col-span-4 md:col-span-6 col-span-12">
            <job-info-block>
              Якчанд парвандаҳои портфели калон (хидмат бо REST API) е якчанд парвандаҳои хурд созед
            </job-info-block>
          </div>
          <div class="lg:col-span-4 md:col-span-6 col-span-12">
            <job-info-block>
              Кор бо Маркази касбиро ҷустуҷӯ кунед - аз таҳияи резюме то репетицияи мусоҳиба
            </job-info-block>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-customGreen ">
      <div class="lg:max-w-7xl w-full ml-auto mr-auto">
        <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
          <div class="flex md:flex-row flex-col justify-between items-center">
            <h3 class="text-white text-center md:text-start md:mb-0 mb-5 md:mr-5 max-w-[450px] w-full font-medium text-3xl leading-[39px] ">
              Дар бораи забони барномасозии Python дониш пайдо кунед
            </h3>
            <div
              class="bg-white cursor-pointer font-ibm font-semibold text-center py-[18px] max-w-[340px] w-full text-customGreen">
              Python Roadmap
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { infoBlock, experienceTab, statBlock, cells, pythonIcon, jobInfoBlock } from './components'
import { RouterLink } from 'vue-router';
const goToStat = () :void => {
  const stat = document.getElementById('stat')
  
  if (stat !== null) {
    stat.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
const goToInfo = () :void => {
  const info = document.getElementById('info')
  if (info !== null) {
    info.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
const goToPythonDevInfo = () :void => {
  const dev = document.getElementById('dev')
  if (dev !== null) {
    dev.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style>
.spin-block {
  animation: spin 45s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>