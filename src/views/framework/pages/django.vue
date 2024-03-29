<template>
  <div>
    <div class="lg:max-w-7xl w-full ml-auto mr-auto">
      <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
        <div class="py-[55px] flex items-center justify-between">
          <div>
            <h1>Django</h1>
            <p>Django як чаҳорчӯбаи веб-сатҳи баланд аст, ки бо забони барномасозии Python навишта шудааст, ки эҷоди
              барномаҳои
              вебро зуд ва бо такрори ҳадди ақали код осон мекунад. Он маҷмӯи абзорҳо ва хусусиятҳоро барои идоракунии
              таҳияи
              веб, аз ҷумла панели маъмурии барои корбар дӯстона, системаи масири URL, ORM (Харитасозии Relational
              Object) барои
              кор бо пойгоҳи додаҳо, системаи аутентификатсия ва авторизатсия ва бисёр абзорҳои дигар барои коркарди
              дархостҳо
              пешниҳод мекунад. ва намоиш додани мундариҷа дар саҳифаҳои веб.</p>
            <h3>Насб кардани Django:</h3>
            <p>Барои насб кардани Django, шумо бояд боварӣ ҳосил кунед, ки шумо Python насб кардаед ва Django бо
              истифода аз
              pip, абзори идоракунии бастаи Python насб кунед:</p>
            <h5>macOS/Linux:</h5>
            <pre><code>
              python -m pip install Django==5.0.3
    </code></pre>
            <h5>Windows:</h5>
            <pre><code>
              py -m pip install Django==5.0.3
    </code></pre>
            <h4>Натиҷа:</h4>
            <pre><code>
        Successfully installed Django-X.Y.Z
    </code></pre>
            <h3>

            </h3>
            <p>Агар шумо дар Django нав бошед, ба шумо лозим меояд, ки дар бораи танзимоти ибтидоӣ ғамхорӣ кунед.
              Махсусан, ба
              шумо лозим меояд, ки ба таври худкор кодеро тавлид кунед, ки лоиҳаи Django-ро муқаррар мекунад - маҷмӯи
              танзимот
              барои мисоли Django, аз ҷумла конфигуратсияи пойгоҳи додаҳо, имконоти мушаххаси Django ва танзимоти
              махсуси
              барнома.</p>
            <h4>
              Аз сатри фармони cd ба директорияе, ки шумо рамзи худро захира кардан мехоҳед, фармони зеринро иҷро кунед:
            </h4>
            <pre><code>
        django-admin startproject mysite
    </code></pre>
            <p>
              Ин дар феҳристи ҷории шумо директорияи mysite эҷод мекунад:
            </p>
            <pre><code>
        mysite/
            manage.py
            mysite/
                __init__.py
                settings.py
                urls.py
                asgi.py
                wsgi.py
    </code></pre>
            <h4>Ин файлҳо:</h4>
            <ul>
              <li>Феҳристи берунии <code>mysite/root</code> контейнер барои лоиҳаи шумост. Номи он барои Django аҳамият
                надорад;
                шумо метавонед онро ҳар чизе ки мехоҳед, тағир диҳед.</li>
              <li><code>manage.py</code>: Як утилитаи сатри фармон, ки ба шумо имкон медиҳад бо ин лоиҳаи Django бо
                роҳҳои
                гуногун ҳамкорӣ кунед.</li>
              <li>Дохилии <code>mysite/</code> директория бастаи воқеии Python барои лоиҳаи шумост. Номи он номи бастаи
                Python
                аст, ки ба шумо лозим меояд, ки барои ворид кардани чизе дар дохили он истифода баред (масалан,
                <code>mysite.urls</code>).
              </li>
              <li> <code>mysite/__init__.py</code>: Файли холӣ, ки ба Python мегӯяд, ки ин директория бояд бастаи Python
                ҳисобида шавад.</li>
              <li> <code>mysite/settings.py</code>: Танзимот/конфигуратсия барои ин лоиҳаи Django.</li>
              <li> <code>mysite/urls.py</code>: Эъломияҳои URL барои ин лоиҳаи Django; "Ҷадвали мундариҷа" барои
                вебсайти
                Django-и шумо.</li>
              <li> <code>mysite/asgi.py</code>: Нуқтаи вуруд барои веб-серверҳои бо ASGI мувофиқ барои хидмат ба лоиҳаи
                шумо.
              </li>
              <li> <code>mysite/wsgi.py</code>: Нуқтаи вуруд барои веб-серверҳои бо WSGI мувофиқ барои хидмат ба лоиҳаи
                шумо.
              </li>
            </ul>
            <h3>
              Сервери рушд
            </h3>
            <p>Ба директорияи берунаи <code>mysite</code> гузаред, агар шумо ин корро накарда бошед ва фармонҳои зеринро
              иҷро
              кунед:</p>
            <pre><code>
        python manage.py runserver
    </code></pre>
            <h4>
              Шумо баромади зеринро дар сатри фармон мебинед:
            </h4>
            <pre><code>
        Performing system checks...

        System check identified no issues (0 silenced).

        You have unapplied migrations; your app may not work properly until they are applied.
        Run 'python manage.py migrate' to apply them.

        March 14, 2024 - 15:50:53
        Django version 5.0, using settings 'mysite.settings'
        Starting development server at http://127.0.0.1:8000/
        Quit the server with CONTROL-C.
    </code></pre>
            <p>Шумо сервери таҳияи Django-ро оғоз кардед, веб-сервери сабуке, ки комилан бо Python навишта шудааст. Мо
              инро дар
              Django дохил кардем, то шумо метавонед лоиҳаҳоро бидуни насб кардани сервери истеҳсолӣ ба мисли Apache то
              омодагии
              шумо зуд таҳия кунед.</p>
            <p>Ҳоло вақти хубе барои қайд кардан аст: Ин серверро дар чизе, ки ба муҳити истеҳсолӣ монанд аст, истифода
              набаред.
              Он танҳо барои истифода ҳангоми таҳия пешбинӣ шудааст. (Мо дар тиҷорати сохтани чаҳорчӯбаҳои веб ҳастем,
              на
              серверҳои веб.)</p>
            <p>Акнун, ки сервер кор мекунад, дар браузери веби худ <code>http://127.0.0.1:8000/</code> боздид кунед.
              Шумо паёми
              "Congratulations!" , бо ракетаи парвозкунанда. Он кор кард!</p>
            <h3>Намунаҳои код</h3>
            <h4>Намунаи муайян кардани моделҳои маълумот:</h4>
            <pre><code>
        # models.py

        from django.db import models

        class Product(models.Model):
            name = models.CharField(max_length=100)
            price = models.DecimalField(max_digits=10, decimal_places=2)
    </code></pre>
            <h4>Намунаи муайян кардани масирҳои URL:</h4>
            <pre><code>
        # urls.py

        from django.urls import path
        from . import views

        urlpatterns = [
            path('products/', views.product_list, name='product_list'),
        ]
    </code></pre>
            <h4>Намунаи сохтани қолаби HTML:</h4>
            <pre><code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang=&quot;en&quot;&gt;
        &lt;head&gt;
            &lt;meta charset=&quot;UTF-8&quot;&gt;
            &lt;title&gt;Product List&lt;/title&gt;
        &lt;/head&gt;
            &lt;body&gt;
                &lt;h1&gt;Products&lt;/h1&gt;
                &lt;ul&gt;
                {% for product in products %}
                    &lt;li&gt;${ product.name } - ${ product.price }&lt;/li&gt;
                {% endfor %}
                &lt;/ul&gt;
            &lt;/body&gt;
        &lt;/html&gt;

    </code></pre>

            <h3>Маводҳо барои мутоила:</h3>
            <ul>
              <li>"Django 4 by Example" / Antonio Mele <a
                  href="https://dl.ebooksworld.ir/books/Django.4.By.Example.4th.Edition.Antonio.Mele.Bob.Belderbos.Packt.9781801813051.EBooksWorld.ir.pdf">(скачать
                  PDF)</a></li>
              <li>"The Definitive Guide to Django: Web Development Done Right" / Adrian Holovaty, Jacob K. Moss <a
                  href="http://gsl-archive.mit.edu/media/programs/mexico-summer-2014/materials/djangobook.pdf">(скачать
                  PDF)</a>
              </li>
              <li>"Django: практика создание web-сайтов на Python" / Владимир Дронов <a
                  href="https://lib.intuit.kg/wp-content/uploads/2020/04/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2%D0%B5%D0%B1-%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2-ru.pdf">(скачать
                  PDF)</a></li>
            </ul>
            <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
            <ul>
              <li><a href="https://docs.djangoproject.com/">Django documentation</a></li>
              <li><a href="https://developer.mozilla.org/ru/docs/Learn/Server-side/Django">Веб-фреймворк Django (Python)
                  - MDN
                  Web Docs</a></li>
              <li><a href="https://metanit.com/python/django/">Руководство по веб-фреймворку Django</a></li>
            </ul>
            <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
            <ul>
              <li><a href="https://www.udemy.com/topic/django/">Top Django Courses Online</a></li>
              <li><a href="https://www.coursera.org/specializations/django">Django for Everybody Specialization</a></li>
              <li><a href="https://www.edx.org/learn/django">Best Online Django Courses and Programs</a></li>
            </ul>
            <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
            <ul>
              <li><a href="https://skillbox.tj/course/django-framework/">Python-фреймворк Django</a></li>
              <li><a href="https://skillfactory.ru/python-django">Обучение работе с Python Django с нуля</a></li>
              <li><a href="https://practicum.yandex.ru/catalog/django/">Курсы по Django: онлайн-обучение</a></li>
            </ul>
            <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
            <ul>
              <li><a href="https://www.djangoproject.com/community/">Django Forum</a></li>
              <li><a href="https://www.cyberforum.ru/python-django/">Сyberforum</a></li>
              <li><a href="https://python.su/forum/21/">python.su</a></li>
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
              <li><a href="https://www.django-rest-framework.org/">Django REST framework</a></li>
              <li><a href="https://django-debug-toolbar.readthedocs.io/en/latest/">django-debug-toolbar</a></li>
              <li><a href="https://docs.allauth.org/en/latest/">django-allauth</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import  '@/assets/pages.css'
</style>