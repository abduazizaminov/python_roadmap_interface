<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Basic Syntax - Синтаксиси асосӣ</h1>
          <h5>Таҳиягар: Қодиров Н.Н.</h5>
          <p>Python забони барномасозии тафсиршуда, интерактивӣ, ба объект нигаронидашуда, сатҳи баланд ва умумӣ бо
            чопкунии пурқуввати динамикӣ ва идоракунии хотираи автоматӣ мебошад, ки ба баланд бардоштани маҳсулнокии
            таҳиягарон, хониши код ва интиқоли барномаҳои дар он навишташуда нигаронида шудааст. Идеяи татбиқи ин забон
            дар охири солҳои 1980 пайдо шуд ва таҳияи татбиқи он дар соли 1989 аз ҷониби Гвидо ван Россум, корманди
            Институти CWI Ҳолланд оғоз шуд.</p>
          <p>Синтаксиси Python аз бисёр ҷиҳат ба Perl, C ва Java монанд аст. Бо вуҷуди ин, байни забонҳо фарқиятҳои
            муайян мавҷуданд.</p>
          <h3>Идентификаторҳои Python</h3>
          <p>Идентификатори Python - номест, ки барои муайян кардани тағирёбанда, функсия, синф, модул ё объекти дигар
            истифода мешавад. Идентификатори Python бо ҳарфи A то Z, a то z ё зерхатти (_) оғоз мешавад ва пас аз сифр ё
            зиёда ҳарфҳо, зерхатҳо ва рақамҳо (0 то 9) оғоз меёбад.</p>
          <p>Python дар идентификаторҳо аломатҳои пунктуатсияро ба монанди @, $ ва % иҷозат намедиҳад. Python - забони
            барномасозии ба ҳарфҳои хурд ҳассос аст, аз ин рӯ қувваи корӣ ва қувваи корӣ дар Python ду идентификаторҳои
            гуногун мебошанд.</p>
          <h4>Номгузорӣ барои идентификаторҳои Python:</h4>
          <ul>
            <li>
              <p>Номҳои синфҳо бо ҳарфи калон сар мешаванд. Ҳамаи дигар идентификаторҳо бо ҳарфи хурд оғоз мешаванд.
              </p>
            </li>
            <li>
              <p>Оғоз кардани идентификатор бо як зерхатти пешбаранда нишон медиҳад, ки идентификатор махфӣ аст.</p>
            </li>
            <li>
              <p>Оғози идентификатор бо ду аломати зер аломати мушаххаси комилан хусусиро нишон медиҳад.</p>
            </li>
            <li>
              <p>Агар идентификатор инчунин бо ду аломати зерхат тамом шавад, идентификатор номи махсусест, ки аз
                ҷониби стандарти забони барномасозӣ муайян карда шудааст.</p>
            </li>
          </ul>
          <h3>Калимаҳои ҳифзшуда</h3>
          <p>Рӯйхати зерин калимаҳои калидии Python-ро нишон медиҳад. Инҳо калимаҳои ҳифзшуда мебошанд ва шумо онҳоро
            барои номҳои доимӣ, тағирёбанда ё дигар идентификаторҳо истифода бурда наметавонед. Ҳама калимаҳои калидии
            Python танҳо ҳарфҳои хурдро дар бар мегиранд.</p>
          <table>
            <tr>
              <td colspan="3">Калимаҳои калидӣ</td>
            </tr>
            <tr>
              <td>and</td>
              <td>exec</td>
              <td>not</td>
            </tr>
            <tr>
              <td>assert</td>
              <td>finally</td>
              <td>or</td>
            </tr>
            <tr>
              <td>break</td>
              <td>for</td>
              <td>pass</td>
            </tr>
            <tr>
              <td>class</td>
              <td>from</td>
              <td>print</td>
            </tr>
            <tr>
              <td>continue</td>
              <td>global</td>
              <td>raise</td>
            </tr>
            <tr>
              <td>def</td>
              <td>if</td>
              <td>return</td>
            </tr>
            <tr>
              <td>del</td>
              <td>import</td>
              <td>try</td>
            </tr>
            <tr>
              <td>elif</td>
              <td>in</td>
              <td>while</td>
            </tr>
            <tr>
              <td>else</td>
              <td>is</td>
              <td>with</td>
            </tr>
            <tr>
              <td>except</td>
              <td>lambda</td>
              <td>yield</td>
            </tr>
          </table>
          <h3>Хатҳо ва фосилаҳо дар Python</h3>
          <p>Python қавсҳои ислимиро талаб намекунад, то блокҳои кодро барои таърифҳои синфҳо ва функсияҳо ё ҷараёни
            назорат нишон диҳад. Блокҳои код бо абзори сатр нишон дода мешаванд, ки он ба таври қатъӣ иҷро карда
            мешавад.</p>
          <p>Миқдори пробелҳо дар фосила метавонад фарқ кунад, аммо ҳамаи операторҳоҳо дар блок бояд як фосилаи Python
            дошта бошанд. Барои намуна:</p>
          <pre><code>
        if True:
            print "True"
        else:
            print "False"
    </code></pre>
          <h4>Блоки зерин хатогиро ба вуҷуд меорад:</h4>
          <pre><code>
        if True:
        print "Answer"
        print "True"
        else:
        print "Answer"
        print "False"
    </code></pre>
          <h3>Операторҳои бисёрсатрӣ</h3>
          <p>Оператор дар Python одатан бо сатри нав хотима меёбад. Python ба шумо имкон медиҳад, ки аломати идомаи
            сатрро (\) барои нишон додани идомаи сатр истифода баред. Барои намуна:</p>
          <pre><code>
        total = item_one + \
        item_two + \
        item_three
    </code></pre>
          <p>Операторҳое, ки дар қавси кунҷакӣ [], {} ё () дохил шудаанд, лозим нест, ки аломати идомаи сатрро истифода
            баранд. Барои намуна:</p>
          <pre><code>
        days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    </code></pre>
          <h3>Иқтибосоварӣ дар Python</h3>
          <p>Python нохунакҳои ягона ('), дукарата (") ва сегона (''' ё """) -ро қабул мекунад, то он даме, ки ҳамон
            навъи иқтибос дар сатр оғоз ва ба охир мерасад.</p>
          <p>Иқтибосҳои сегона барои тақсим кардани сатр ба чанд сатр истифода мешаванд. Масалан, ҳамаи сатрҳои зерин
            дурустанд:</p>
          <pre><code>
        word = 'word'
        sentence = "This is a sentence."
        paragraph = """This is a paragraph. It is
        made up of multiple lines and sentences."""
    </code></pre>
          <h3>Тафсирҳо дар Python</h3>
          <p>Аломати (#), ки дар дохили сатр нест, тафсирро оғоз мекунад. Ҳама аломатҳои пас аз # ва то охири сатр
            қисми тафсир мебошанд ва аз ҷониби тарҷумони Python нодида гирифта мешаванд. Биёед бубинем, ки чӣ тавр дар
            Python тафсир додан мумкин аст.</p>
          <pre><code>
        #!/usr/bin/python

        # Якум тафсир
        print "Салом, Python!" # дуюм тафсир
    </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
        Салом, Python!
    </code></pre>
          <h3>Маводҳо барои мутоила:</h3>
          <ul>
            <li>
              <p>"Functional Programming in Python" by David Mertz <a
                  href="https://theswissbay.ch/pdf/Books/Computer%20science/O%27Reilly/functional-programming-python.pdf">(скачать
                  PDF)</a></p>
            </li>
            <li>
              <p>"Хендбук Python" <a
                  href="https://docs.yandex.ru/docs/view?tm=1711685972&tld=ru&lang=ru&name=python-handbook.pdf&text=%22%D0%A5%D0%B5%D0%BD%D0%B4%D0%B1%D1%83%D0%BA%20Python%22&url=https%3A%2F%2Fromankurnovskii.com%2Fhandbooks%2Fpython-handbook.pdf&lr=10322&mime=pdf&l10n=ru&sign=dce5924972fb06053a930b5d09ced3cb&keyno=0&nosw=1&serpParams=tm%3D1711685972%26tld%3Dru%26lang%3Dru%26name%3Dpython-handbook.pdf%26text%3D%2522%25D0%25A5%25D0%25B5%25D0%25BD%25D0%25B4%25D0%25B1%25D1%2583%25D0%25BA%2BPython%2522%26url%3Dhttps%253A%2F%2Fromankurnovskii.com%2Fhandbooks%2Fpython-handbook.pdf%26lr%3D10322%26mime%3Dpdf%26l10n%3Dru%26sign%3Ddce5924972fb06053a930b5d09ced3cb%26keyno%3D0%26nosw%3D1">(скачать
                  PDF)</a></p>
            </li>
            <li>
              <p>"Простой Python. Современный стиль программирования" / Любанович Бил <a
                  href="https://pydarslik.pythonanywhere.com/media/resource_file/%D0%91%D0%B8%D0%BB%D0%BB_%D0%9B%D1%8E%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87_%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9_Python_%D0%91%D0%B5%D1%81%D1%82%D1%81%D0%B5%D0%BB%D0%BB%D0%B5%D1%80%D1%8B.pdf">(скачать
                  PDF)</a></p>
            </li>
          </ul>
          <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
          <ul>
            <li>
              <p><a href="https://otus.ru/nest/post/472/">Синтаксис Python для начинающих. Базовые примеры
                  синтаксиса</a></p>
            </li>
            <li>
              <p><a href="https://bookflow.ru/bazovyj-sintaksis-yazyka-python/?ysclid=luce4hz6sf706482056">Базовый
                  синтаксис языка Python</a></p>
            </li>
            <li>
              <p><a href="https://kutsevol.github.io/2017/05/28/python_syntax/">Python Syntax</a></p>
            </li>
          </ul>
          <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
          <ul>
            <li>
              <p><a href="https://www.coursera.org/learn/python-ru">Программирование для всех (начало работы с
                  Python)</a></p>
            </li>
            <li>
              <p><a href="https://www.coursera.org/learn/programming-in-python">Programming in Python</a></p>
            </li>
            <li>
              <p><a
                  href="https://translated.turbopages.org/proxy_u/en-ru.ru.136cac6c-66067a9d-bafb30c7-74722d776562/https/www.udemy.com/course/technical-writing-getting-started-with-python/">Техническое
                  написание: начало работы с Python</a></p>
            </li>
          </ul>
          <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
          <ul>
            <li>
              <p><a href="https://pasv.us/ru/course/python-syntax">Python Syntax</a></p>
            </li>
            <li>
              <p><a href="https://cs.mipt.ru/algo/lessons/lab2.html">Базовый синтаксис языка Python</a></p>
            </li>
            <li>
              <p><a href="https://code-basics.com/ru/languages/pre-course-python?ysclid=luced5yphn435341481">Курс по
                  Python для начинающих</a></p>
            </li>
          </ul>
          <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
          <ul>
            <li>
              <p><a href="https://www.reddit.com/r/Python/?rdt=60471">Reddit</a></p>
            </li>
            <li>
              <p><a href="https://www.python.org/community/forums/">Python.org</a></p>
            </li>
            <li>
              <p><a href="https://www.cyberforum.ru/python/?ysclid=ltwhrrore5900284198">Сyberforum</a></p>
            </li>
          </ul>
          <h3>Муҳити коркарди нармафзор:</h3>
          <ul>
            <li>
              <p><a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a></p>
            </li>
            <li>
              <p><a href="https://code.visualstudio.com/">Visual Studio Code</a></p>
            </li>
            <li>
              <p><a href="https://jupyter.org/">Jupyter</a></p>
            </li>
          </ul>
          <h3>Онлайн муҳити санҷиши коди барномавӣ:</h3>
          <ul>
            <li>
              <p><a href="https://www.online-ide.com/online_python_compiler#google_vignette">Online Python Compiler -
                  OnlineIDE</a></p>
            </li>
            <li>
              <p><a href="https://bio-python.netlify.app/">Online Python - IDE, Editor, Compiler, Interpreter</a></p>
            </li>
            <li>
              <p><a href="https://pythoncompiler.com/">Python Compiler</a></p>
            </li>
          </ul>
          <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
          <ul>
            <li>
              <p><a href="https://docs.python.org/3/library/index.html">The Python Standard Library</a></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/pages.css'
</style>