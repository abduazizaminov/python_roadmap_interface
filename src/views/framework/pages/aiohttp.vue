<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>aiohttp</h1>
          <h5>Таҳиягар: Аминов А.Р.</h5>
        <p>aiohttp сервери асинхронӣ HTTP аст, ки ба китобхонаи asyncio дар Python асос ефтааст. Он имконияти сохтани мизоҷон ва серверҳои асинхрони HTTP-ро фароҳам меорад, ки ба шумо имкон медиҳад, ки дархостҳои зиедеро бе бастани ҷараени иҷро самаранок коркард кунед.</p>

        <h3>Насб кардани aiohttp:</h3>
        <p>Шумо метавонед бо истифода аз pip, мудири бастаи Python aiohttp насб кунед:</p>
        <pre><code>
    pip install aiohttp
        </code></pre>
        <p>aiohttp ба шумо имкон медиҳад, ки муштариён ва серверҳои асинхронӣ барои кор бо протоколи HTTP дар Python эҷод кунед. Ин махсусан барои сохтани веб-барномаҳои баландсифат ва миқёспазир, ки шумораи зиёди дархостҳои ҳамзамонро иҷро мекунанд, муфид аст.</p>
    
        <h3>
            Намунаҳои истифодаи aiohttp:
        </h3>
        <h4>
            1. Мизоҷи асинхронии HTTP:
        </h4>
        <pre><code>
    import aiohttp
    import asyncio

    async def fetch_url(url):
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as response:
                return await response.text()

    async def main():
        url = 'https://example.com'
        html = await fetch_url(url)
        print(html)

    asyncio.run(main())
        </code></pre>
        <p>
            Ин мисол мизоҷи асинхронии HTTP-ро бо истифода аз aiohttp барои зеркашии мундариҷаи саҳифаи веб аз URL-и мушаххас эҷод мекунад.
        </p>
        <h4>2. Сервери асинхронии HTTP:</h4>
        <pre><code>
    from aiohttp import web

    async def handle(request):
        return web.Response(text="Привет, мир!")

    app = web.Application()
    app.add_routes([web.get('/', handle)])

    web.run_app(app)
        </code></pre>
        <p>Ин мисол эҷоди сервери асинхронии HTTP-ро бо истифода аз aiohttp нишон медиҳад, ки ба дархостҳо бо паёми матнии "Салом, ҷаҳон!" ҷавоб медиҳад.</p>
        <h3>
            Муқоиса бо дигар равишҳо:
        </h3>
        <h4>1. Муқоиса бо requests:</h4>
        <ul>
            <li>aiohttp: Мизоҷ ва сервери асинхронии HTTP, ки ба шумо имкон медиҳад дархостҳои ҳамзамон бе бастани риштаи иҷроро иҷро кунед.</li>
            <li>requests: Мизоҷи синхронии HTTP, ки иҷрои барномаро то анҷоми ҳар як дархост блок мекунад.</li>
        </ul>
        <h3>Тарафҳои мусбат ва манфии aiohttp</h3>
        <h4>Манфиатҳои aiohttp</h4>
        <ul>
            <li>Истифодаи самараноки захираҳо: Ба шарофати равиши асинхронӣ, aiohttp истифодаи самараноки захираҳо ва иҷрои баландро ҳангоми коркарди бисёр дархостҳои ҳамзамон таъмин мекунад.</li>
            <li>Осонии истифода: aiohttp интерфейси оддӣ ва интуитивиро барои эҷоди мизоҷ ва серверҳои асинхронии HTTP таъмин мекунад.</li>
            <li>Дастгирии WebSocket: aiohttp дастгирии WebSocketро барои иртиботи воқеии байни муштарӣ ва сервер таъмин мекунад.</li>
        </ul>
        <h4>Камбудиҳои aiohttp</h4>
        <ul>
            <li>На мисли баъзе чаҳорчӯбаҳои дигари HTTP дар Python, ба монанди Flask ва Django, аз ин рӯ, мумкин аст аз ҷониби ҷомеа камтар дастгирӣ карда шавад ва китобхонаҳо ва васеъшавии шахсони сеюм камтар бошад.</li>
            <li>Фаҳмиши барномасозии асинхронӣ ва асинсиоро талаб мекунад, ки барои шурӯъкунандагон душвор буда метавонад.</li>
        </ul>
        <h2>Ҳолатҳои истифодаи gevent</h2>
        <p>Истифодаи gevent дар он ҷо муфид аст, ки ба шумо лозим аст, ки бисёр амалиётҳои ҳамзамон ворид/чорро иҷро кунед (масалан, дархостҳои HTTP, васлаки шабакавӣ) бе бастани иҷрои барномаи шумо.</p>
        <pre><code>
    import gevent
    import gevent.monkey
    import requests

    # Патчим стандартную библиотеку, чтобы использовать gevent
    gevent.monkey.patch_all()

    # Список URL-адресов, к которым будем делать запросы
    urls = ['https://example.com/page1', 'https://example.com/page2', 'https://example.com/page3']

    # Функция для загрузки данных по URL-адресу
    def fetch(url):
        response = requests.get(url)
        print(f"Загружено {len(response.content)} байтов с {url}")

    # Создаем список "зеленых" потоков для выполнения запросов параллельно
    jobs = [gevent.spawn(fetch, url) for url in urls]

    # Дожидаемся завершения всех "зеленых" потоков
    gevent.joinall(jobs)

        </code></pre>
        <p>Ин код се риштаи "сабз"-ро барои бор кардани маълумот аз URL-ҳои гуногун дар баробари истифодаи gevent эҷод мекунад. Ҳар як дархост ба таври асинхронӣ иҷро карда мешавад, вақтро сарфа мекунад ва захираҳоро самаранок истифода мебарад.</p>
        <p>gevent барои таҳияи барномаҳои веб, серверҳои асинхронӣ, коркарди маълумоти калон ва дигар сенарияҳое, ки истифодаи самараноки захираҳо ва иҷрои баландро талаб мекунанд, мувофиқ аст.</p>
        <pre><code>
    import gevent
    from gevent.pywsgi import WSGIServer

    # Обработчик запросов
    def application(environ, start_response):
        start_response('200 OK', [('Content-Type', 'text/html')])
        return [b"<h1>Привет, мир!</h1>"]

    # Создание асинхронного веб-сервера
    http_server = WSGIServer(('0.0.0.0', 8000), application)

    # Запуск сервера
    http_server.serve_forever()

        </code></pre>
        <p>Ин код бо истифода аз gevent веб-сервери асинхронӣ эҷод мекунад. Сервер дархостҳоро ба таври асинхронӣ коркард мекунад ва ба он имкон медиҳад, ки ҳамзамон бидуни бастани иҷро ба бисёр муштариён хидмат расонад. Ин махсусан барои коркарди шумораи зиёди дархостҳо ё дархостҳо бо амалиёти дарозмуддат, ба монанди дархостҳо ба пойгоҳи додаҳо ё APIҳои беруна муфид аст.</p>
        <h3>Маводҳо барои мутоила:</h3>
        <ul>
          <li>"aiohttp Documentation" <a
              href="https://docs.aiohttp.org/_/downloads/en/v3.7.2/pdf/">(скачать
              PDF)</a></li>
          <li>"Introduction to Using APIs with Python" / NaLette Brodnax <a
              href="https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/0e6da3a0-dd57-43c2-b7ab-432737d9fa2f/content">(скачать
              PDF)</a>
          </li>
          <li>"gevent-tools Documentation" / Jeff Lindsay<a
              href="https://ginkgo.readthedocs.io/_/downloads/en/latest/pdf/">(скачать
              PDF)</a></li>
        </ul>
        <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
        <ul>
          <li><a href="https://docs.aiohttp.org/">aiohttp Documentation</a></li>
          <li><a href="https://habr.com/ru/companies/kts/articles/560058/">Первые шаги в aiohttp / Хабр</a></li>
          <li><a href="https://metaclass.kts.studio/aiohttp_practice">Практика по asyncio и aiohttp</a></li>
        </ul>
        <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
        <ul>
          <li><a href="https://www.coursera.org/specializations/python">Python for Everybody Specialization</a></li>
          <li><a href="https://www.edx.org/learn/python">Best Online Python Courses and Programs</a></li>
          <li><a href="https://www.udemy.com/course/programming-effectively-in-python/">Programming Effectively in Python</a></li>
        </ul>
        <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
        <ul>
          <li><a href="https://www.udemy.com/course/python-django-workshop-cooking-secret-note-service/">Python Django, Aiohttp Workshop</a></li>
          <li><a href="https://practicum.yandex.ru/async-python/">Онлайн-курс «Асинхронное программирование на Python</a></li>
          <li><a href="https://intensive.skillbox.ru/middle-python/">Асинхронный Python</a></li>
        </ul>
        <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
        <ul>
          <li><a href="https://stackoverflow.com/questions/78202484/how-to-work-with-aiohttp-and-rate-limiting">Stack Overflow</a></li>
          <li><a href="https://forum.qt.io/topic/155029/using-aiohttp-with-qtasyncio/4">Qt Forum</a></li>
          <li><a href="https://www.linux.org.ru/forum/development/14280985">Python Aiohttp server </a></li>
        </ul>
        <h3>Муҳити коркарди нармафзор:</h3>
        <ul>
          <li><a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a></li>
          <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
          <li><a href="https://jupyter.org/">Jupyter</a></li>
        </ul>
        <h3>Онлайн муҳити санҷиши коди барномавӣ:</h3>
        <ul>
          <li><a href="https://www.online-ide.com/online_python_compiler#google_vignette">Online Python Compiler - 
              OnlineIDE</a></li>
          <li><a href="https://bio-python.netlify.app/">Online Python - IDE, Editor, Compiler, Interpreter</a></li>
          <li><a href="https://pythoncompiler.com/">Python Compiler</a></li>
        </ul>
        <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
        <ul>
          <li><a href="https://github.com/aio-libs/aiohttp-jinja2">aiohttp-jinja2</a></li>
          <li><a href="https://github.com/aio-libs/aiohttp-session">aiohttp-session</a></li>
          <li><a href="https://github.com/cr0hn/aiohttp-swagger">aiohttp-swagger</a></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>