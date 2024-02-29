<script setup lang="ts">
import { infoBlock, experienceTab, statBlock, cells, pythonIcon, jobInfoBlock } from './components'
</script>

<template>
  <div class="select-none overflow-x-hidden">
    <div class="bg-customGreen">
      <div class="lg:max-w-7xl w-full ml-auto mr-auto">
        <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
          <div class="py-[55px] flex items-center justify-between">
            <div class="z-50 ">
              <div class="text-white">
                <h2 class="text-[32px] leading-[50px] mb-[18px]">
                  Профессия
                </h2>
                <h1 class="text-[86px] font-medium leading-[86px]">
                  Python - <br>
                  разработчик
                </h1>
              </div>
              <div class="mt-[42px] text-[20px]">
                <span class="font-bold">Освойте Python с нуля</span> и начните новую <br>
                карьеру с позиции junior-разработчика уже <br>
                через 3 месяца обучения
              </div>
              <div class="mt-[60px] font-ibm mb-[32px] flex">
                <div
                  class="cursor-pointer border-solid mr-[10px] border-black border-[3px] px-[44px] py-[22px] text-[16px] leading-[155%] font-semibold">
                  Записаться на курс
                </div>
                <div class="cursor-pointer bg-black px-[44px] text-white leading-[200%] py-[22px] text-[16px] font-semibold">
                  Смотреть Roadmap
                </div>
              </div>
              <div class="flex mb-[10px] font-ibm text-[14px] text-center text-white">
                <div class="bg-black cursor-pointer mr-[10px] col-span-6 px-[14px] py-[5px]">
                  Кто такой Python-разработчик
                </div>
                <div class="bg-black cursor-pointer col-span-6 px-[14px] py-[5px]">
                  Кому подойдёт курс
                </div>
              </div>
              <div class="flex font-ibm text-white text-[14px]">
                <div class="bg-black cursor-pointer col-span-6 px-[14px] py-[5px]">
                  Статистика о python
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
    <div class="lg:max-w-7xl w-full ml-auto mr-auto">
      <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
        <h2 class="text-5xl mb-[27px] leading-[74px]">
          Курс подойдет вам, если вы…
        </h2>
        <div class="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-[40px]">
          <div class="col-span-4">
            <info-block>
              <template #header>
                Совсем новичок
              </template>
              <div>
                Получите новую профессию с нуля, без технического образования и опыта
              </div>
            </info-block>
          </div>
          <div class="col-span-4">
            <info-block>
              <template #header>
                Инженер в IT
              </template>
              <div>
                Освойте востребованные навыки, смените направление в работе и прокачайте карьеру
              </div>
            </info-block>
          </div>
          <div class="col-span-4">
            <info-block>
              <template #header>
                Начинающий программист
              </template>
              <div>
                Изучайте Python эффективно — с программой, практикой и наставником
              </div>
            </info-block>
          </div>
        </div>
      </div>
      <div class="lg:px-16 md:px-8 px-6 py-10">
        <div class="mb-10">
          <h2 class="text-[46px] mb-[50px] font-medium leading-[51px]">
            Вы получите реальный опыт
          </h2>
          <div class="grid grid-cols-2 lg:gap-20 gap-14">
            <div class="border-customGreen border-[3px] lg:col-span-1 col-span-2 rounded-lg px-[33px] py-10">
              <p class="text-[#181818] text-3xl font-medium leading-9">
                <span class="text-[#36b34a]">
                  7 из 10
                </span>
                работодателей нанимают людей с опытом
              </p>
            </div>
            <div class="text-lg lg:col-span-1 col-span-2 leading-[22px]">
              <h5 class="font-medium mb-2">
                Почему практика важна?
              </h5>
              <p>
                Практика способствует развитию креативности и умения решать проблемы.
                При работе над проектами студенты сталкиваются с различными препятствиями и ошибками, что требует анализа
                и
                поиска оптимальных решений.
                Такой опыт помогает формировать умение мыслить логически и аналитически, а также улучшает навыки поиска
                информации и самообучения.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-3xl mb-[30px] font-medium leading-9 text-[#181818]">
            Реальный опыт даст студентам:
          </h3>
          <div class="grid grid-cols-4 gap-x-24 gap-y-12">
            <experience-tab>
              <template #number>
                01
              </template>
              <template #text>
                Реальные проекты в портфолио
              </template>
            </experience-tab>
            <experience-tab>
              <template #number>
                02
              </template>
              <template #text>
                Участие в стажировках и хакатонах
              </template>
            </experience-tab>
            <experience-tab>
              <template #number>
                03
              </template>
              <template #text>
                Шанс получить оффер от компании-заказчика
              </template>
            </experience-tab>
            <experience-tab>
              <template #number>
                04
              </template>
              <template #text>
                Опыт работы над проектом в команде
              </template>
            </experience-tab>
          </div>
        </div>
      </div>
      <div class="lg:px-16 md:px-8 px-6 py-10">
        <div class="flex mb-[22px]">
          <h2 class="text-5xl leading-[55px]">
            <span class="text-customGreen">
              Python
            </span>
            - самый подходящий язык программирования для новичков
          </h2>
          <div class="mb-3">
            <cells></cells>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-[100px]">
          <div class="col-span-1">
            <stat-block>
              <template #head>
                <span class="text-[52px] leading-[81px]">
                  2
                </span> место
              </template>
              <template #default>
                в рейтинге популярности языков программирования
              </template>
              <template #source>
                По данным GitHub
              </template>
            </stat-block>
          </div>
          <div class="col-span-1">
            <stat-block>
              <template #head>
                более
                <span class="text-[52px] leading-[81px]">
                  1600
                </span>
              </template>
              <template #default>
                вакансий Python-разработчиков на портале поиска работы
              </template>
              <template #source>
                По данным HH.ru
              </template>
            </stat-block>
          </div>
          <div class="col-span-1">
            <stat-block>
              <template #head>
                на
                <span class="text-[52px] leading-[81px]">
                  10%
                </span>
              </template>
              <template #default>
                каждый год стабильно растут средние зарплаты разработчиков
              </template>
              <template #source>
                По данным Habr
              </template>
            </stat-block>
          </div>
        </div>
      </div>
      <div class="lg:px-16 md:px-8 px-6 py-10">
        <h2 class="text-5xl leading-[58px]">
          <div class="text-customGreen">
            Чем занимается
          </div>
          Python-разработчик?
        </h2>
        <div class="flex items-center">
          <div class="text-xl mt-[50px] leading-[26px] pr-[100px]">
            <p class="mb-7">
              <span class="font-bold">Python — универсальный язык</span>, который
              применяется в разных областях: сайты, веб-
              приложения, игры, анализ данных, автоматизация,
              работа с устройствами.
            </p>
            <p class="mb-7">
              <span class="font-bold">На Python делают backend</span>, то есть внутреннюю
              логику работы программы.
            </p>
            <p>
              Представьте, что вы ввели в строку поиска
              «смотреть сериалы в оригинале». Список ссылок,
              которые вам выдал поисковик — это и есть
              результат работы backend-программиста.
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
            Получите новую профессию Python-разработчика
          </h2>
          <h5 class="text-xl leading-[27px] mt-[20px]">
            С нуля при помощи Roadmap
          </h5>
        </div>
        <div class="grid grid-cols-12 gap-[30px]">
          <div class="lg:col-span-4 md:col-span-6 col-span-12">
            <job-info-block>
              Освойте программирование на Python
              и научитесь решать задачи с помощью
              алгоритмов
            </job-info-block>
          </div>
          <div class="lg:col-span-4 md:col-span-6 col-span-12">
            <job-info-block>
              Сделайте несколько больших кейсов для
              портфолио (сервис
              с REST API) или несколько мелких
            </job-info-block>
          </div>
          <div class="lg:col-span-4 md:col-span-6 col-span-12">
            <job-info-block>
              Ищите работу с Центром карьеры —
              от составления резюме до репетиции
              собеседований
            </job-info-block>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-customGreen">
      <div class="lg:max-w-7xl w-full ml-auto mr-auto">
        <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
          <div class="flex md:flex-row flex-col justify-between items-center">
            <h3 class="text-white text-center md:text-start md:mb-0 mb-5 md:mr-5 max-w-[450px] w-full font-medium text-3xl leading-[39px] ">
              Получите профессию Python-разработчика с за 3 месяца
            </h3>
            <div
              class="bg-white cursor-pointer font-ibm font-semibold text-center py-[18px] max-w-[340px] w-full text-customGreen">
              Записаться на курс
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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