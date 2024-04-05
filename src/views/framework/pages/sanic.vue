<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Sanic</h1>
        <p>Sanic як чаҳорчӯбаи веби асинхронӣ барои Python аст, ки ба китобхонаи асинсиони асинхронӣ асос ёфтааст. Он барои эҷоди веб-барномаҳои баландсифат тарҳрезӣ шудааст, ки дар як вақт шумораи зиёди дархостҳоро коркард мекунанд. Sanic инчунин ASGI мувофиқ аст, бинобар ин шумо метавонед онро бо истифода аз веб-сервери алтернативии ASGI ҷойгир кунед.</p>
        <h3>Насб Кардани Sanic</h3>
        <p>Шумо метавонед Sanic-ро бо истифода аз pip, менеҷери бастаи Python насб кунед:</p>
        <pre><code>
    pip install sanic
        </code></pre>
        <h4>Намунаҳои истифодаи Sanic:</h4>
        <h4>1. Намунаи як барномаи оддии веб бо Sanic:</h4>
        <pre><code>
    from sanic import Sanic
    from sanic.response import text

    app = Sanic()

    @app.route('/')
    async def index(request):
        return text('Привет, мир!')

    if __name__ == '__main__':
        app.run(host='0.0.0.0', port=8000)


        </code></pre>
        <h4>2. Намунаи коркарди дархост бо параметрҳо:</h4>
        <pre><code>
    @app.route('/user/< username>')
    async def user(request, username):
        return text(f'Привет, {username}!')

        </code></pre>
        <h3>Муқоиса бо чаҳорчӯбаҳои шабеҳ:</h3>
        <p>Ҳангоми муқоисаи Sanic бо дигар чаҳорчӯбаҳои веб асинхронӣ ба монанди FastAPI ва Tornado, Sanic одатан сабуктар ва осонтар истифода мешавад. FastAPI дорои ҳуҷҷатҳои аъло ва тавлиди автоматии ҳуҷҷатҳои API мебошад, ки онро барои эҷоди хидматҳои веб ва APIҳо интихоби хуб мекунад. Аз тарафи дигар, Tornado дорои қобилиятҳои дарунсохт барои эҷоди веб-серверҳо ва коркарди пайвастҳои WebSocket мебошад, ки онро интихоби беҳтарин барои татбиқи барномаҳои веб дар вақти воқеӣ месозад.</p>
        <h4>Афзалиятҳои Sanic:</h4>
        <ul>
            <li>Ба туфайли коркарди дархости асинхронӣ иҷрои баланд.</li>
            <li>Содда ва осонии истифода, монанд ба Flask.</li>
            <li>Қобилияти эҷоди веб-барномаҳои асинхронӣ бо кӯшиши ҳадди ақал.</li>
        </ul>
        <h4>Нуқсонҳои Sanic</h4>
        <ul>
            <li>Дар айни замон метавонад нисбат ба баъзе чаҳорчӯбаҳои асинхронӣ камтар устувор ва камтар баркамол бошад.</li>
            <li>Мушкилоти мутобиқат ва ҳуҷҷатҳои нопурра вуҷуд дошта метавонанд.</li>
        </ul>
        <h3>Хусусиятҳои синтаксиси Саникӣ</h3>
        <p>Хусусиятҳои синтаксиси Sanic истифодаи ороишгаронро барои муайян кардани коркардкунандагони масир ва функсияҳои асинхронӣ барои коркарди дархостҳо дар бар мегиранд. Биёед ба унсурҳои асосии синтаксиси Sanic бо истифода аз рамзи мисол назар кунем:</p>
        <pre><code>
    from sanic import Sanic
    from sanic.response import json

    app = Sanic()

    # Обработчик маршрута для GET запроса
    @app.route('/hello')
    async def hello(request):
        return json({'message': 'Привет, мир!'})

    # Обработчик маршрута для POST запроса
    @app.route('/user', methods=['POST'])
    async def create_user(request):
        data = request.json  # Получение данных из тела запроса
        # Здесь может быть логика создания нового пользователя
        return json({'message': f'Пользователь {data["name"]} создан'})

    if __name__ == '__main__':
        app.run(host='0.0.0.0', port=8000)
        </code></pre>
        <ul>
            <li>Декораторҳо барои муайян кардани хатсайрҳо: Sanic ороишгарони <code>@app.route()</code>-ро барои муайян кардани коркардкунандагони масир истифода мебарад. Ин ороишгарон ба шумо имкон медиҳанд, ки функсияҳоро ба URL-ҳои мушаххас пайваст кунед. Дар мисоли боло <code>@app.route('/hello')</code> функсияи <code> hello()</code>-ро ба масири <code>/hello</code> мепайвандад.</li>
            <li>Функсияҳои асинхронӣ барои коркарди дархостҳо: коркардкунандагони масир дар Sanic бояд вазифаҳои асинхронӣ бошанд, яъне. функсияҳое, ки калимаи асинхро истифода мебаранд. Ин ба Sanic имкон медиҳад, ки бисёр дархостҳоро ҳамзамон бе бастани риштаҳо самаранок коркард кунад.</li>
            <li>Объекти дархост: коркардкунандагони масир объекти дархостро қабул мекунанд, ки дорои маълумот дар бораи дархости кунунии HTTP, ба монанди усул, сарлавҳаҳо, параметрҳои дархост ва мақоми дархост.</li>
            <li>Объекти вокуниш: Объекти посух барои баргардонидани маълумот ба муштарӣ истифода мешавад. Дар мисоли боло, мо функсияи <code>json()</code>-ро барои тавлиди посухи JSON истифода мебарем.</li>
        </ul>
        <p>Инҳо унсурҳои асосии синтаксиси Sanic мебошанд. Дар маҷмӯъ, Sanic як синтаксиси оддӣ ва беихтиёронаро барои сохтани веб-барномаҳои асинхронии сермахсул таъмин мекунад.</p>
        <h3>Истифодаи маъмулии Sanic</h3>
        <p>Яке аз маъмултарин истифода аз Sanic эҷоди хидматҳои веб ва API мебошад. Sanic дорои маҳсулнокии баланд аст ва метавонад дар як вақт шумораи зиёди дархостҳоро иҷро кунад, ки онро интихоби беҳтарин барои эҷоди хидматҳои интернетии сербориш месозад. Ин аст мисоли эҷоди хидмати оддии веб бо истифода аз Sanic:</p>
        <pre><code>
    from sanic import Sanic
    from sanic.response import json

    app = Sanic()

    # Обработка GET запроса
    @app.route('/api/users/< user_id>', methods=['GET'])
    async def get_user(request, user_id):
        # Здесь может быть код для получения данных о пользователе из базы данных или другого источника
        user = {'id': user_id, 'name': 'John Doe', 'age': 30}
        return json(user)

    # Обработка POST запроса
    @app.route('/api/users', methods=['POST'])
    async def create_user(request):
        # Здесь может быть код для создания нового пользователя в базе данных или других действий
        data = request.json
        new_user = {'id': data['id'], 'name': data['name'], 'age': data['age']}
        return json(new_user, status=201)

    if __name__ == '__main__':
        app.run(host='0.0.0.0', port=8000)
        </code></pre>
        <p>Ин мисол хидмати вебро бо ду масир эҷод мекунад:</p>
        <ul>
            <li><code>/api/users/< user_id></code> - дархости GET барои гирифтани маълумот дар бораи корбар аз рӯи идентификатори ӯ.</li>
            <li><code>/api/users</code> - дархости POST барои сохтани корбари нав.</li>
        </ul>
        <p>Кормандони масир вазифаҳои асинхронӣ интизоранд, ки ба Sanic имкон медиҳад, ки бисёр дархостҳоро ҳамзамон бидуни бастани риштаҳо самаранок коркард кунад. Ҳар як дархост мустақилона коркард карда мешавад, ки ин иҷрои баланд ва ҷавобгӯии хидмати вебро таъмин мекунад.</p>
        <p>Ин мисол нишон медиҳад, ки чӣ гуна Sanic-ро барои эҷоди хидматҳои веб ва API истифода бурдан мумкин аст. Бо Sanic, шумо метавонед ба осонӣ веб-хизматрасониҳои миқёспазир ва самаранок эҷод кунед, ки метавонанд шумораи зиёди дархостҳоро ҳамзамон ба таври муассир иҷро кунанд.</p>

        <h3>Маводҳо барои мутоила:</h3>
        <ul>
          <li>"Sanic Documentation" <a
              href="https://sanic.readthedocs.io/_/downloads/en/19.3/pdf/">(скачать
              PDF)</a></li>
          <li>"Python Web Frameworks" / Carlos de la Guardia<a
              href="https://theswissbay.ch/pdf/Books/Computer%20science/O%27Reilly/python-web-frameworks.pdf">(скачать
              PDF)</a>
          </li>
          <li>"Простой Python" / Билл Любанович<a
              href="https://palchevsky.ru/uploads/books/Python_1.pdf">(скачать
              PDF)</a></li>
        </ul>
        <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
        <ul>
          <li><a href="https://habr.com/ru/companies/otus/articles/529420/">Habr</a></li>
          <li><a href="https://otus.ru/nest/post/1951/">Веб-фреймворки для Python: Sanic | OTUS</a></li>
          <li><a href="https://www.geeksforgeeks.org/introduction-to-sanic-web-framework-python/">Introduction to Sanic Web Framework - Python</a></li>
        </ul>
        <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
        <ul>
          <li><a href="https://www.udemy.com/course/sanic-an-asynchronous-web-framework-for-pythonistas/">Sanic - an asynchronous web framework for Pythonistas</a></li>
          <li><a href="https://www.edx.org/learn/web-frameworks">Learn Web Frameworks With Online Courses</a></li>
          <li><a href="https://www.khanacademy.org/computing/intro-to-python-fundamentals">Intro to computer science - Python</a></li>
        </ul>
        <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=WiGsWfwh0yY">Python Sanic Tutorial - YouTube</a></li>
          <li><a href="https://foxminded.ua/ru/python-1/">️ Курсы Python</a></li>
          <li><a href="https://www.packtpub.com/product/python-web-development-with-sanic/9781801814416">Python Web Development with Sanic</a></li>
        </ul>
        <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
        <ul>
          <li><a href="https://community.sanicframework.org/">Sanic Community Discussion</a></li>
          <li><a href="https://github.com/sanic-org">Sanic Community Organization</a></li>
          <li><a href="https://habr.com/ru/sandbox/188550/">Sanic для новичков / Песочница / Хабр </a></li>
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
          <li><a href="https://github.com/ahopkins/sanic-jwt">Sanic-JWT</a></li>
          <li><a href="https://github.com/sanic-org/sanic-openapi">Sanic-OpenAPI</a></li>
          <li><a href="https://github.com/graphql-python/sanic-graphql">Sanic-GraphQL</a></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>