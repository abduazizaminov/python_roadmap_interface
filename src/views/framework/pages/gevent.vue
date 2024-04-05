<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Gevent</h1>
        <p>Gevent китобхонаи Python аст, ки API-и сатҳи баландро барои барномасозии асинхронӣ дар асоси рӯйдодҳо таъмин мекунад. Он ба libev барои системаҳои оператсионии Unix ва libuv барои Windows асос ёфтааст. Gevent ба шумо имкон медиҳад, ки кодеро нависед, ки синхронӣ ба назар мерасад, вале асинхронӣ тавассути истифодаи гринлетҳо кор мекунад - риштаҳои сабзи сабук, ки метавонанд бидуни бастани тамоми барнома баста ва кушода шаванд.</p>

        <h3>Насб кардани Gevent:</h3>
        <p>Шумо метавонед бо истифода аз pip, мудири бастаи Python gevent насб кунед:</p>
        <pre><code>
    pip install gevent
        </code></pre>
        <p>Барои истифодаи gevent дар лоиҳаи худ ба шумо инчунин китобхонаҳои иловагӣ ба монанди Greenlet ва Cython лозим аст.</p>

        <h3>
            Намунаҳои истифодаи gevent:
        </h3>
        <h4>
            1. Дархости асинхронии HTTP:
        </h4>
        <pre><code>
    import gevent
    import gevent.monkey
    import requests

    gevent.monkey.patch_all()

    urls = ['https://example.com/page1', 'https://example.com/page2', 'https://example.com/page3']

    def fetch(url):
        response = requests.get(url)
        print(f"Загружено {len(response.content)} байтов с {url}")

    jobs = [gevent.spawn(fetch, url) for url in urls]
    gevent.joinall(jobs)

        </code></pre>
        <p>
            Ин мисол нишон медиҳад, ки чӣ тавр бо истифодаи gevent дархостҳои сершумори HTTP-ро ба URL-ҳои гуногун асинхронӣ кардан мумкин аст.
        </p>
        <h4>2. Вазифаҳои веб-сервери асинхронӣ:</h4>
        <pre><code>
    from gevent.pywsgi import WSGIServer

    def application(environ, start_response):
        start_response('200 OK', [('Content-Type', 'text/html')])
        return [b"< h1>Привет, мир!< /h1>"]

    http_server = WSGIServer(('0.0.0.0', 8000), application)
    http_server.serve_forever()

        </code></pre>
        <p>Ин мисол эҷоди веб-сервери асинхронӣ бо истифода аз gevent нишон медиҳад.</p>
        <h3>
            Муқоиса бо дигар равишҳо:
        </h3>
        <h4>1. Муқоиса бо asyncio:</h4>
        <ul>
            <li>gevent модели ҳалқаи рӯйдодҳоро ба монанди asyncio истифода мебарад, аммо онҳо равишҳои татбиқи гуногун доранд.</li>
            <li>asyncio корутинҳоро истифода мебарад, дар ҳоле ки gevent greenlet-ҳоро истифода мебарад.</li>
            <li>asyncio як қисми китобхонаи стандартии Python аст, дар ҳоле ки gevent насб кардани бастаи алоҳидаро талаб мекунад.</li>
        </ul>
        <h4>2. Муқоиса бо threading</h4>
        <ul>
            <li>Равиши ҷараенҳо (threading) ҷараенҳои воқеии системаи амалиетиро ба вуҷуд меорад, дар ҳоле ки gevent ҷараенҳои сабзро (greenlets) истифода мебарад, ки дар болои ҷараенҳои системаи амалиетӣ кор мекунанд.</li>
            <li>Gevent роҳи сабуктар ва муассиртари эҷоди вазифаҳои параллелиро дар муқоиса бо риштаҳо таъмин мекунад.</li>
        </ul>
        <h3>Тарафҳои мусбат ва манфии gevent</h3>
        <h4>Манфиатҳои gevent</h4>
        <ul>
            <li>Осонии истифода: gevent ба шумо имкон медиҳад, ки рамзи асинхронӣ нависед, ки ба рамзи синхронӣ монанд аст ва истифодаи онро осонтар мекунад.</li>
            <li>Самаранокии баланд: Ба шарофати истифодаи сабз, gevent самаранокии баланд ва истифодаи самараноки захираҳоро таъмин мекунад.</li>
            <li>Дастгирии васеъ барои китобхонаҳои тарафи сеюм: gevent бо шумораи зиёди китобхонаҳои тарафи сеюм мувофиқ аст, бинобар ин шумо метавонед онро дар лоиҳаҳои худ бидуни тағирот истифода баред.</li>
        </ul>
        <h4>Камбудиҳои gevent</h4>
        <ul>
            <li>Маҳдудиятҳои истифода: Баъзе китобхонаҳо бо сабаби табиати асинхронӣ бо gevent метавонанд дуруст кор накунанд.</li>
            <li>Масъалаҳои эҳтимолии мувофиқат: gevent метавонад бо баъзе китобхонаҳои тарафи сеюм мушкилот ба бор орад, ки интизор надоранд, ки код ба таври асинхронӣ иҷро шавад.</li>
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
          <li>"Путь Python" / Miguel Grinberg <a
              href="https://xn--d1ag.xn--e1a4c/tmp/Bibl_progr_Sb_187kn/%D0%9F%D1%83%D1%82%D1%8C%20Python.%202020.pdf">(скачать
              PDF)</a></li>
          <li>"High Performance Python" / Micha Gorelick & Ian Ozsvald <a
              href="https://mongard.s3.ir-thr-at1.arvanstorage.com/High%20Performance%20Python%20Practical%20Performant%20Programming%20for%20Humans%20by%20Micha%20Gorelick,%20Ian%20Ozsvald.pdf">(скачать
              PDF)</a>
          </li>
          <li>"gevent-tools Documentation" / Jeff Lindsay<a
              href="https://ginkgo.readthedocs.io/_/downloads/en/latest/pdf/">(скачать
              PDF)</a></li>
        </ul>
        <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
        <ul>
          <li><a href="http://www.gevent.org/">What is gevent?</a></li>
          <li><a href="https://pypi.org/project/gevent/">PyPi</a></li>
          <li><a href="https://vovkd.github.io/gevent-tutorial/">Введение в gevent для практикующего питониста</a></li>
        </ul>
        <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
        <ul>
          <li><a href="https://www.coursera.org/specializations/python">Python for Everybody Specialization</a></li>
          <li><a href="https://www.edx.org/learn/python">Best Online Python Courses and Programs</a></li>
          <li><a href="https://www.udemy.com/course/programming-effectively-in-python/">Programming Effectively in Python</a></li>
        </ul>
        <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
        <ul>
          <li><a href="https://sdiehl.github.io/gevent-tutorial/">Gevent Tutorial</a></li>
          <li><a href="https://upsun.com/blog/python-gevent-best-practices/">Python Gevent in practice</a></li>
          <li><a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj8s-yGjJmFAxVkV5EFHfHfAmcYABAAGgJscg&ase=2&gclid=Cj0KCQjwzZmwBhD8ARIsAH4v1gWE4eY2hx_nyoOjjX2MZNtn-f-wFPthizLrT7AfCM9jjSmgEUj8iY0aAhbDEALw_wcB&ohost=www.google.com&cid=CAESVuD2v3waTLNfZcle5PcpedxqakN3C-T49N0TI5CDyrTt-ARpP8i6RzyWUMagjcQAzGTGD-BcioedIZmseFDF2aDW4g4V8-H4e-OdMpc4cbXGFZlD7G-H&sig=AOD64_1CH6UVoiydrnsXeFZzo8O9vV5rZA&q&nis=4&adurl&ved=2ahUKEwj9tOeGjJmFAxW9BxAIHeoyBmIQ0Qx6BAgOEAE">Python Advanced Course</a></li>
        </ul>
        <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
        <ul>
          <li><a href="https://www.couchbase.com/forums/t/gevent-in-python-sdk/29404">Gevent in python</a></li>
          <li><a href="https://community.teltonika-networks.com/59697/cannot-compile-python-gevent?show=59697">Teltonika Networks</a></li>
          <li><a href="https://www.cybrosys.com/blog/what-is-gevent-and-how-to-install-gevent-in-python">What is Gevent </a></li>
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
          <li><a href="https://github.com/geventhttpclient/geventhttpclient">geventhttpclient</a></li>
          <li><a href="https://github.com/abourget/gevent-socketio">gevent-socketio</a></li>
          <li><a href="https://github.com/jgelens/gevent-websocket">gevent-websocket</a></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>