<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Pyramid</h1>
    <p>Pyramid як чаҳорчӯбаи веби сабук ва чандир барои Python мебошад, ки ба шумо имкон медиҳад, ки барномаҳои вебии
        мураккабии гуногун эҷод кунед. Он воситаҳо ва равишҳои зиедеро барои таҳияи барномаҳои веб, аз сайтҳои оддӣ то
        хидматҳои мураккаби веб ва API пешниҳод мекунад.</p>
    <h3>Насб кардани Pyramid:</h3>
    <p>Пеш аз оғози истифодаи Flask, шумо бояд Python-ро дар компютери худ насб кунед. Пас шумо метавонед Flask-ро бо
        истифода аз pip, мудири бастаи Python насб кунед:</p>
    <pre><code>
    pip install pyramid
</code></pre>
    <h3>
        Чӣ тавр истифода бурдани Pyramid
    </h3>
    <h4>Сохтани файл app.py ва рамзи зеринро часбонед:</h4>
    <pre><code>
        from wsgiref.simple_server import make_server
        from pyramid.config import Configurator
        from pyramid.response import Response
        
        
        def hello(request):
            return Response('Салом ҷаҳон!')
        
        if __name__ == '__main__':
            config = Configurator()
            config.add_route('hello_world', '/')
            config.add_view(hello, route_name='hello_world')
            app = config.make_wsgi_app()
            server = make_server('0.0.0.0', 8000, app)
            server.serve_forever()

    </code></pre>
    <h4>Барои оғози барнома фармонро нависед:</h4>
    <pre><code>
        python app.py
    </code></pre>
    <p>Акнун браузери худро кушоед ва ба <code>http://localhost:6543/.</code> Шумо "Салом ҷаҳон!".</p>
    <h3>Воридот</h3>
    <h4>app.py -модулҳои воридотӣ</h4>
    <pre><code>
    from wsgiref.simple_server import make_server
    from pyramid.config import Configurator
    from pyramid.response import Response
    </code></pre>
    <p>Pyramid барнома бо конфигуратсия оғоз меебад, ки бо истифода аз синфи Configurator аз модули pyramid сохта мешавад.config. Дар оянда, намунаи синфи Configurator барои танзим истифода мешавад.</p>
    <p>Мисли бисер дигар чаҳорчӯбаҳои веб дар Python, Pyramid протоколи WSGI-ро барои пайваст кардани барнома ва веб-сервер истифода мебарад. Дар ин мисол, веб-сервери wsgiref барои осонӣ интихоб шудааст, зеро он дар Python сохта шудааст.</p>
    <P>pyramid.response.Response нусхаи синфи Response аз китобхонаи webob. Барои ташаккули ҷавоби HTTP истифода мешавад.</P>
    <h3>View</h3>
    <h4>app.py - хусусияти салом</h4>
    <pre><code>
    def hello(request):
    return Response('Hello world!')
    </code></pre>
    <p>
        Ин намуди намоиш дар Pyramid view callable номида мешавад, ки ҳамчун далел объекти синфи pyramid-ро қабул мекунад.request.Request (ки аз webob мерос мондааст.request.BaseRequest) ва объекти ҷавоби HTTP-и pyramid-ро бармегардонад.response.Response.
    </p>
    <h3>Танзимот</h3>
    <h4>Сохтани конфигуратори барнома</h4>
    <pre><code>
    config = Configurator()
    </code></pre>
    <pre><code>
    config.add_route('hello_world', '/')
    config.add_view(hello, route_name='hello_world')
    </code></pre>
    <p>Дар сатри аввал усули конфигуратори pyramid даъват карда мешавад.config.Configurator.add_route (), ки хатсайри навро (route) бо номи "hello_world" сабт мекунад ва онро ба роҳи решаи сайти "/"мепайвандад.</p>
    <p>Сатри дуюм функсияи hello(request) - ро ҳамчун view callable сабт мекунад ва онро ба хатсайри "hello_world"мепайвандад. Ҳоло ҳангоми муроҷиат ба адресl http://localhost:8000 / функсияи hello бо объекти дархости request, ки ба он дода шудааст, оғоз меебад.</p>
    <h3>
        WSGI барнома
    </h3>
    <pre><code>
    app = config.make_wsgi_app()
    </code></pre>
    <p>Усули pyramid.config.Configurator.make_wsgi_app () барномаи WSGI-ро аз маълумоте, ки дар конфигуратор нигоҳ дошта мешавад, ташкил медиҳад. Дар оянда, бо шарофати мушаххасоти WSGI (PEP 333), шумо метавонед ин барномаро дар ҳама гуна веб-сервери мувофиқ оғоз кунед.</p>
    <h3>Сервери WSGI</h3>
    <pre><code>
    server = make_server('0.0.0.0', 8000, app)
    server.serve_forever()
    </code></pre>
    <p>Сервери WSGI wsgiref суроғаи "0.0.0.0" -ро ҳамчун параметри аввал мегирад (аз берун дастрас аст, бар хилофи "127.0.0.1" бо нобаёнӣ), параметри дуюм порти "8000", параметри сеюм барномаи WSGI, дар пирамида ариза ниҳоӣ як синфи объекти pyramid.router.Router аст (Router).

        Функсияи serve_forever барномаи WSGI-ро оғоз мекунад.
    </p>
    <h3>
        Сохтори барнома
    </h3>
    <p>Гарчанде ки навиштани барномаи Pyramid (лоиҳа) аз сифр душвор нест, Pyramid дорои воситаҳо барои оғози рамзи барномаи нав аз рӯи қолаби интихобшуда е дар истилоҳи Pyramid, сохтори каркас (scaffolds) мебошад. Масалан, дар таҳвил сохторҳои чаҳорчӯба барои лоиҳаҳое мавҷуданд, ки ZODB е SQLAlchemy-ро истифода мебаранд.</p>
    <h4>
        Сохтори маъмулии директория барои лоиҳаи хурд:
    </h4>
    <pre><code>
    MyProject/
    |-- CHANGES.txt
    |-- development.ini
    |-- MANIFEST.in
    |-- myproject
    |   |-- __init__.py
    |   |-- static
    |   |   |-- favicon.ico
    |   |   |-- logo.png
    |   |   `-- pylons.css
    |   |-- templates
    |   |   `-- mytemplate.pt
    |   |-- tests.py
    |   `-- views.py
    |-- production.ini
    |-- README.txt
    |-- setup.cfg
    `-- setup.py
    </code></pre>
    <p>
        Сохтори овардашуда, тавре ки аз ҳуҷҷатҳо бармеояд, набояд хеле тағир дода шавад, зеро ин метавонад ба таҳиягарони дигар монеъ шавад, ки рамзи лоиҳаро зуд паймоиш кунанд. Аммо, лоиҳаи афзоянда метавонад баъзе тағиротро талаб кунад. Масалан, намудҳо, моделҳо (агар онҳо истифода шаванд) ва санҷишҳоро ба модулҳо тақсим карда, мутаносибан ба зеркаталогҳои views, models ва tests интиқол додан мумкин аст (бе фаромӯш кардани онҳо бо файли __init__.py).
    </p>
    <h3>
        Истифодаи маъмули Pyramid:
    </h3>
    <ul>
        <li>Сохтани вебсайт: Pyramid метавонад барои сохтани вебсайтҳои гуногун, аз ҷумла блогҳо, мағозаҳои онлайн, сайтҳои корпоративӣ ва ғайра истифода шавад. Бо сабаби чандирии худ, он ба таҳиягарон имкон медиҳад, ки сайтҳои ҳар гуна мураккабӣ ва функсияро эҷод кунанд.</li>
        <li>Таҳияи барномаҳои веб: Pyramid маҷмӯи васеи воситаҳо ва равишҳоро барои таҳияи барномаҳои веб таъмин мекунад. Он метавонад панели маъмурӣ барои идоракунии маълумот, ҳисоби муштариен барои корбарон, системаи CRM ва ғайра бошад.</li>
        <li>СОХТАНИ API: Pyramid метавонад барои сохтани хидматҳои веб ва API истифода шавад. Шумо МЕТАВОНЕД API RESTful-РО барои мубодилаи маълумот байни барномаҳои веб, барномаҳои мобилӣ ва дигар системаҳо эҷод кунед.</li>
        <li>Микросервисҳо: Pyramid барои сохтани меъмории хидматрасонии хурд бузург аст, ки дар он ҳар як хидмат маҷмӯи маҳдуди вазифаҳоро иҷро мекунад. Ин миқес ва нигоҳдории барномаро осон мекунад ва чандирӣ ва эътимоднокии системаро беҳтар мекунад.</li>
    </ul>
    <h3>Маводҳо барои мутоила:</h3>
    <ul>
        <li>"The Pyramid Web Framework"<a
                href="https://docs.pylonsproject.org/_/downloads/pyramid/en/latest/pdf/">(скачать
                PDF)</a></li>
        <li>"The Pyramid Web Application Development Framework" / Chris McDonough <a
                href="https://static.pylonsproject.org/pyramid-1.1.pdf">(скачать
                PDF)</a></li>
        <li>"Pyramid - Python Web Framework" / Владимир Дронов <a
                href="https://www.tutorialspoint.com/python_pyramid/python_pyramid_tutorial.pdf">(скачать
                PDF)</a></li>
    </ul>
    <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
    <ul>
        <li><a href="https://trypyramid.com/documentation.html">Documentation</a></li>
        <li><a href="https://lectureswww.readthedocs.io/6.www.sync/3.framework/pyramid/">Фреймворк Pyramid - Основы Веб-программирования</a></li>
        <li><a href="https://habr.com/ru/articles/135916/">Руководство: Pyramid</a></li>
    </ul>
    <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
    <ul>
        <li><a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjZgO-vvpaFAxUPU0ECHWsgC_wYABAAGgJ3cw&ase=2&gclid=Cj0KCQjwqpSwBhClARIsADlZ_Tm3q60tPV7-rIGe4YlqO-arY-JypAMVSzKogvvh0KqItQoOdyxXjRYaAuOYEALw_wcB&ohost=www.google.com&cid=CAESVuD2IVjOH8Mb7xzOVyjdRs7OylXAC-5yOSMgc7rv6-oJqAaW_FFI-sPrt5R9DTAc10Pp-b7ws2u7aRAXO8Aen52Cl58-XT6KSVjyjIAgI6yhYZaQj2yF&sig=AOD64_187UmGimJ9fPyunkg0jVYrdYqLDA&q&nis=4&adurl&ved=2ahUKEwiulOmvvpaFAxUfh_0HHb-jBDQQ0Qx6BAgHEAE">Python Advanced Course</a></li>
        <li><a href="https://www.edx.org/learn/python">Best Online Python Courses and Programs</a></li>
        <li><a href="https://www.khanacademy.org/computing/intro-to-python-fundamentals">Intro to computer science - Python</a></li>
    </ul>
    <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
    <ul>
        <li><a href="http://www.itshop.ru/Interface/Razrabotka-web-prilozheniy-na-Pyramid/l4t3i413420">Курс "Разработка web-приложений на Pyramid"</a></li>
        <li><a href="https://training.talkpython.fm/courses/explore_pyramid/building-data-driven-web-applications-in-python-with-pyramid-sqlalchemy-and-bootstrap">Building Data-Driven Web Apps with Pyramid</a></li>
        <li><a href="https://trypyramid.com/">Welcome to Pyramid, a Python Web Framework</a></li>
    </ul>
    <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
    <ul>
        <li><a href="https://www.reddit.com/r/Python/comments/6yn74i/anyone_using_the_pyramid_framework/">Reddit</a></li>
        <li><a href="https://stackoverflow.com/questions/23347100/pyramid-web-framework-hello-world-not-working">Stack Overflow</a></li>
        <li><a href="https://python.su/forum/">Python-сообщество</a></li>
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
        <li><a href="https://www.sqlalchemy.org/">SQLAlchemy</a></li>
        <li><a href="https://chameleon.readthedocs.io/en/latest/">Pyramid Chameleon</a></li>
        <li><a href="https://cornice.readthedocs.io/en/latest/">Cornice</a></li>
    </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>