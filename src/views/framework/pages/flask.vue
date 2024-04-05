<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Flask</h1>
        <p>Flask чаҳорчӯба барои сохтани барномаҳои веб дар забони барномасозии Python бо истифода аз абзори Werkzeug ва муҳаррики қолаби Jinja2 мебошад. Ба категорияи ба истилоҳ microframeworks тааллуқ дорад - чаҳорчӯбаҳои веб-барномаҳои минималистӣ, ки дидаю дониста танҳо қобилиятҳои оддитаринро таъмин мекунанд.</p>
        <h3>Насб кардани Flask:</h3>
        <p>Пеш аз оғози истифодаи Flask, шумо бояд Python-ро дар компютери худ насб кунед. Пас шумо метавонед Flask-ро бо истифода аз pip, мудири бастаи Python насб кунед:</p>
        <pre><code>
    pip install Flask
</code></pre>
        <h3>
            Чӣ тавр истифода бурдан:
        </h3>
        <h4>
            Ин аст як мисоли веб-барномаи ҳадди ақали Flask:
        </h4>
        <pre><code>
    from flask import Flask

    app = Flask(__name__)

    @app.route('/')
    def hello():
        return 'Салом, ҷаҳон!'

    if __name__ == '__main__':
        app.run(debug=True)
    </code></pre>
        <p>
            Барои оғози барнома, колба ё фармонро истифода баред. Шумо бояд бо истифода аз ин хосият ба Flask бигӯед, ки барномаи шумо дар куҷо ҷойгир аст. <code>python -m flask--app</code>:
        </p>
        <pre><code>
    $ flask --app hello run
    * Serving Flask app 'Салом, ҷаҳон!'
    * Running on http://127.0.0.1:5000 (Press CTRL+C to quit)
        </code></pre>
        <p>Дар ин мисол, мо барномаи Flask-ро эҷод мекунем ва як масири ягонаро ('/') муайян мекунем, ки сатри 'Салом, ҷаҳон!'-ро бармегардонад. ҳангоми дастрасӣ ба URL-и реша.</p>
        <h3>
            Афзалиятҳои Flask
        </h3>
        <p>
            Flask як чаҳорчӯбаи веби сабук барои Python мебошад, ки бартариҳои зиёдеро фароҳам меорад, ки онро интихоби маъмул барои сохтани барномаҳои веб месозад:
        </p>
        <ul>
            <li>Омӯзиш ва истифода осон: Flask дорои синтаксиси минималистӣ ва интуитивӣ мебошад, ки омӯхтан ва истифодаи онро осон мекунад. Он ба шумо имкон медиҳад, ки бо коди ҳадди ақал зуд барномаҳои веб эҷод кунед.</li>
            <li>Фасеҳӣ ва васеъшавӣ: Колба дар асоси функсияҳои асосӣ сохта шудааст, ки маънои онро дорад, ки он маҷмӯи ҳадди ақали асбобҳоро барои сохтани барномаҳои веб таъмин мекунад. Ин онро хеле чандир мегардонад ва ба таҳиягарон имкон медиҳад, ки танҳо ҷузъҳои лозимиро интихоб ва ҳамгиро кунанд. Колба ба осонӣ васеъ карда мешавад, ки васеъшавии зиёде мавҷуданд.</li>
            <li>Миқёспазирӣ: Flask метавонад ҳам барои эҷоди барномаҳои хурди веб ва ҳам барои таҳияи лоиҳаҳои калон ва мураккаб истифода шавад. Он асбобҳоро барои идоракунии миқёси барномаҳо таъмин мекунад, ба монанди модулизатсияи код, дастгирии меъмории микросервис ва қобилияти ҳамгироӣ бо дигар абзорҳо ва хидматҳо.</li>
            <li>Ҷомеаи васеъ ва дастгирии: Flask дорои ҷомеаи фаъоли таҳиягарон ва ҳуҷҷатҳои васеъ мебошад, ки омӯхтани онро осон мекунад ва барои таҳиягарони нав ва ботаҷриба дастгирӣ мекунад. Дар ҷомеа васеъшавӣ ва абзорҳои зиёде мавҷуданд, ки метавонанд барои вазифаҳои гуногун муфид бошанд.</li>
        </ul>
        <h3>
            Истифодаи маъмули Flask:
        </h3>
        <ul>
            <li>Эҷоди API: Flask барои эҷоди хидматҳои веб ва APIҳо васеъ истифода мешавад. Масалан, шумо метавонед API барои интиқоли маълумот байни замимаи веб ва барномаи муштарӣ (ба монанди барномаи мобилӣ) эҷод кунед.</li>
            <li>Таҳияи барномаҳои веб: Flask ба шумо имкон медиҳад, ки барномаҳои веби мураккабии гуногунро зуд эҷод ва ҷойгир кунед. Ин метавонад блоги оддӣ, мағозаи онлайн ё панели идоракунӣ дар асоси веб барои идоракунии додаҳо бошад.</li>
            <li>Microservices: Flask аксар вақт барои эҷоди хидматҳои хурд истифода мешавад - хидматҳои хурд ва мустақил, ки маҷмӯи маҳдуди вазифаҳоро иҷро мекунанд. Меъмории Microservice ба шумо имкон медиҳад, ки миқёси беҳтар ва нигоҳдории барномаи худро беҳтар созед.</li>
            <li>Прототипирование: Flask идеально подходит для быстрого прототипирования веб-приложений. Благодаря своей простоте и гибкости, вы можете быстро создавать прототипы для оценки идеи или концепции.</li>
        </ul>
        <h4>Намунаи истифодаи Flask барои сохтани API:</h4>
        <pre><code>
    from flask import Flask, jsonify, request

    app = Flask(__name__)

    # Пример данных
    tasks = [
        {
            'id': 1,
            'title': 'Купить продукты',
            'description': 'Молоко, яйца, хлеб',
            'done': False
        },
        {
            'id': 2,
            'title': 'Сделать уборку',
            'description': 'Пыль, мусор',
            'done': False
        }
    ]

    @app.route('/tasks', methods=['GET'])
    def get_tasks():
        return jsonify({'tasks': tasks})

    @app.route('/tasks', methods=['POST'])
    def create_task():
        if not request.json or 'title' not in request.json:
            abort(400)
        task = {
            'id': tasks[-1]['id'] + 1,
            'title': request.json['title'],
            'description': request.json.get('description', ""),
            'done': False
        }
        tasks.append(task)
        return jsonify({'task': task}), 201

    if __name__ == '__main__':
        app.run(debug=True)

        </code></pre>
        <p>Дар ин мисол, мо API-и оддии идоракунии вазифаҳоро эҷод мекунем. Мо ду масирро муайян мекунем: яке барои дарёфти ҳама вазифаҳо (GET /tasks) ва дуюм барои эҷоди вазифаи нав (POST /tasks). Ҳар як масир маълумотро дар формати JSON бармегардонад.</p>
        <h3>
            Роҳнамоӣ
        </h3>
        <p>
            Веб-барномаҳои муосир URL-ҳои пурмазмунро барои кӯмак ба корбарон истифода мебаранд. Истифодабарандагон эҳтимолан саҳифаро дӯст медоранд ва бармегарданд, агар саҳифа адресl-и пурмазмунеро истифода барад, ки онҳо метавонанд дар хотир дошта бошанд ва барои боздид аз саҳифа истифода баранд.
        </p>
        <h4>
            Барои пайваст кардани функсия ба функциюl ороишгари route ()-ро истифода баред:
        </h4>
        <pre><code>
    @app.route('/')
    def index():
        return 'Index Page'

    @app.route('/hello')
    def hello():
        return 'Hello, World'

        </code></pre>
        <p>Шумо метавонед бахшҳои тағиребандаро ба адресl бо нишонгузории бахшҳо <code>< variable_name></code>илова кунед. Пас функсияи шумо <code>< variable_name></code> далели калимаи калидӣ мегирад. Агар шумо хоҳед, шумо метавонед табдилдиҳандаро барои муайян кардани намуди далел истифода баред, масалан <code>< converter:variable_name>< /converter:variable_name></code>.</p>
        <pre><code>
    from markupsafe import escape

    @app.route('/user/< username>')
    def show_user_profile(username):
        # show the user profile for that user
        return f'User {escape(username)}'

    @app.route('/post/< int:post_id>')
    def show_post(post_id):
        # show the post with the given id, the id is an integer
        return f'Post {post_id}'

    @app.route('/path/< path:subpath>')
    def show_subpath(subpath):
        # show the subpath after /path/
        return f'Subpath {escape(subpath)}'
        </code></pre>
        <h3>Маводҳо барои мутоила:</h3>
        <ul>
          <li>"Flask Web Development" / Miguel Grinberg <a
              href="https://coddyschool.com/upload/Flask_Web_Development_Developing.pdf">(скачать
              PDF)</a></li>
          <li>"Flask by Example" / Gareth Dwyer <a
              href="http://gsl-archive.mit.edu/media/programs/mexico-summer-2014/materials/djangobook.pdf">(скачать
              PDF)</a>
          </li>
          <li>"Документация на Flask (русский перевод)" <a
              href="https://readthedocs.org/projects/flask-russian-docs2/downloads/pdf/latest/">(скачать
              PDF)</a></li>
        </ul>
        <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
        <ul>
          <li><a href="https://flask.palletsprojects.com/">Flask documentation</a></li>
          <li><a href="https://flask-russian-docs.readthedocs.io/">Добро пожаловать во Flask</a></li>
          <li><a href="https://habr.com/ru/articles/346306/">Мега-Учебник Flask</a></li>
        </ul>
        <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
        <ul>
          <li><a href="https://www.udemy.com/topic/flask/">Top Flask Courses Online</a></li>
          <li><a href="https://www.coursera.org/courses?query=flask">Best Flask Courses & Certificates Online</a></li>
          <li><a href="https://www.edx.org/learn/flask">Best Online Flask Courses and Programs</a></li>
        </ul>
        <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
        <ul>
          <li><a href="https://www.specialist.ru/track/t-flask">Курс Фреймворк Flask для Python</a></li>
          <li><a href="https://itproger.com/course/flask">Flask Python уроки</a></li>
          <li><a href="https://ru.hexlet.io/courses/python-flask">Курс Python: Веб-разработка (Flask)</a></li>
        </ul>
        <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
        <ul>
          <li><a href="https://www.linux.org.ru/tag/flask?section=2">Flask (Форум)</a></li>
          <li><a href="https://zelenka.guru/tags/flask/">Flask - Форум социальной инженерии</a></li>
          <li><a href="https://habr.com/ru/articles/783574/">Flask для начинающих / Хабр</a></li>
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
          <li><a href="https://pypi.org/project/Flask-SQLAlchemy/">Flask-SQLAlchemy</a></li>
          <li><a href="https://flask-restful.readthedocs.io/en/latest/">Flask-RESTful</a></li>
          <li><a href="https://flask-login.readthedocs.io/en/latest/">Flask-Login</a></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>