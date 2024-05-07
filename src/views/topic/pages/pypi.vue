<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>PyPI - Python Package Index</h1>
          <h5>Таҳиягар: Қосимова С.Д.</h5>
    <p>PyPI, ё Python Package Index, як анбори марказӣ барои бастаҳоест, ки бо истифода аз забони барномасозии Python таҳия шудааст. Он як анбори онлайн пешниҳод мекунад, ки дар он таҳиягарон метавонанд библиотекаҳо, модулҳо, фреймворкҳо ва асбобҳои худро нашр кунанд, то корбарони дигари Python онҳоро ба осонӣ дар лоиҳаҳои худ пайдо, насб ва истифода баранд.</p>
    <h3>Насб кардани PyPI</h3>
    <p>Барои насб кардани PyPI (Index Package Python), шумо бояд Python насб карда бошед, зеро PyPI анбори стандартӣ барои бастаҳои Python аст. Дар аксари ҳолатҳо, Python дорои PIP аст, воситаи идоракунии бастаҳо, ки барои зеркашӣ ва насб кардани бастаҳо аз PyPI истифода мешавад.</p>
    <p>Барои насб кардани PyPI (Python Package Index):</p>
        <ol>
            <li>
                <p>Насб кардани Python:</p>
                <ul>
                    <li>Насбкунандаи Python-ро аз <a href="https://www.python.org/downloads/">вебсайти расмии Python зеркашӣ кунед</a>.</li>
                    <li>Насбкунандаро иҷро кунед ва дастурҳоро риоя кунед.</li>
                    <li>Боварӣ ҳосил кунед, ки "Add Python to PATH" дар ҷараёни насб интихоб шудааст.</li>
                </ul>
            </li>
            <li>
                <p>Санҷиши мавҷудияти PIP:</p>
                <ul>
                    <li>Сатри фармонро кушоед (дар Windows ин корро тавассути пахш кардани Win + R, ворид кардани "cmd" ва пахш кардани Enter анҷом додан мумкин аст).</li>
                    <li>Дар сатри фармон, <code>pip--version</code> -ро ворид кунед. Агар pip насб карда шуда бошад, шумо маълумоти версияи pip-ро мебинед.</li>
                </ul>
            </li>
            <li>
                <p>Навсозии PIP:</p>
                <ul>
                    <li>Дар сатри фармон, <code>python-m pip install--upgrade pip</code>-ро нависед. Ин PIP-ро ба версияи охирин навсозӣ мекунад.</li>
                </ul>
            </li>
        </ol>
        <p>Пас аз насб кардани Python ва PIP, шумо метавонед PIP-ро барои насб кардани бастаҳо аз PyPI истифода баред. Барои намуна:</p>
        <pre><code>pip install package-name</code></pre>
        <p><code>package-name</code> номи бастаест, ки шумо насб кардан мехоҳед.</p>
    <h3>Фармонҳои PyPI</h3>
    <table>
        <thead>
          <tr>
            <th>Фармон</th>
            <th>Вазифа</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <pre><code>pip install package-name</code></pre>
              </p>
            </td>
            <td>
              <p>насб кардани баста</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <pre><code>pip install package-name==version</code></pre>
              </p>
            </td>
            <td>
              <p>насб кардани версияи бастаи мушаххас</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <pre><code>pip install--upgrade package-name</code></pre>
              </p>
            </td>
            <td>
              <p>навсозии баста</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <pre><code>pip uninstall package-name</code></pre>
              </p>
            </td>
            <td>
              <p>хориҷ кардани баста</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <pre><code>pip search search-query</code></pre>
              </p>
            </td>
            <td>
              <p>ҷустуҷӯи бастаҳо</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <pre><code>pip list</code></pre>
              </p>
            </td>
            <td>
              <p>намоиши рӯйхати бастаҳои насбшуда</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <pre><code>pip list--outdated</code></pre>
              </p>
            </td>
            <td>
              <p>ҷустуҷӯи бастаҳои кӯҳнашуда</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <pre><code>pip show package-name</code></pre>
              </p>
            </td>
            <td>
              <p>дидани маълумоти баста</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <pre><code>pip freeze > requirements.txt</code></pre>
              </p>
            </td>
            <td>
              <p>фризинги муҳити зист</p>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Маводҳо барои мутоила:</h3>
    <ul>
        <li><p>"Изучаем Python" / Эрик Мэтиз <a href="https://docs.yandex.ru/docs/view?tm=1711685141&tld=ru&lang=ru&name=00000E_metiz___Izuchaem_Python_Progra.pdf&text=%22%D0%98%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC%20Python%22%20%2F%20%D0%AD%D1%80%D0%B8%D0%BA%20%D0%9C%D1%8D%D1%82%D0%B8%D0%B7&url=https%3A%2F%2Fpydarslik.pythonanywhere.com%2Fmedia%2Fresource_file%2F00000E_metiz___Izuchaem_Python_Progra.pdf&lr=10322&mime=pdf&l10n=ru&sign=df3aa0b505361fb65d95da9ab1475821&keyno=0&nosw=1&serpParams=tm%3D1711685141%26tld%3Dru%26lang%3Dru%26name%3D00000E_metiz___Izuchaem_Python_Progra.pdf%26text%3D%2522%25D0%2598%25D0%25B7%25D1%2583%25D1%2587%25D0%25B0%25D0%25B5%25D0%25BC%2BPython%2522%2B%2F%2B%25D0%25AD%25D1%2580%25D0%25B8%25D0%25BA%2B%25D0%259C%25D1%258D%25D1%2582%25D0%25B8%25D0%25B7%26url%3Dhttps%253A%2F%2Fpydarslik.pythonanywhere.com%2Fmedia%2Fresource_file%2F00000E_metiz___Izuchaem_Python_Progra.pdf%26lr%3D10322%26mime%3Dpdf%26l10n%3Dru%26sign%3Ddf3aa0b505361fb65d95da9ab1475821%26keyno%3D0%26nosw%3D1">(скачать PDF)</a></p></li>
        <li><p>"Python 3 Text Processing with NLTK 3 Cookbook" by Jacob Perkins <a href="https://budditha.files.wordpress.com/2021/04/python-3-text-processing-with-nltk-3-cookbook.pdf">(скачать PDF)</a></p></li>
        <li><p>"Expert Python Programming Third Edition" by Michał Jaworski, Tarek Ziadé <a href="https://edu.anarcho-copy.org/Programming%20Languages/Python/Expert%20Python%20Programming%20-%20Third%20Edition.pdf">(скачать PDF)</a></p></li>
    </ul>
    <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
    <ul>
        <li><p><a href="https://en.wikipedia.org/wiki/Pip_(package_manager)#:~:text=Pip%20(also%20known%20by%20Python,called%20the%20Python%20Package%20Index">PIP (package manager)</a></p></li>
        <li><p><a href="https://medium.com/@theclickreader/what-is-python-pip-the-package-installer-for-python-1561cd5e5699">What Is Python Pip: The Package Installer For Python</a></p></li>
        <li><p><a href="https://qasdet.github.io/python/pip/2021/11/08/manager-pip.html">Менеджер пакетов PIP. Гайд по использованию</a></p></li>
    </ul>
    <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
    <ul>
        <li><p><a href="https://www.udemy.com/course/python-packaging/?couponCode=LETSLEARNNOW">Advanced Python: Python packaging. Pip install your scripts!</a></p></li>
        <li><p><a href="https://www.coursera.org/projects/setup-python">Setup Python</a></p></li>
        <li><p><a href="https://www.udemy.com/course/python-package/?couponCode=LETSLEARNNOW">Python Package Development</a></p></li>
    </ul>
    <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
    <ul>
        <li><p><a href="https://realpython.com/courses/basics-exercises-install-packages-with-pip/">Python Basics Exercises: Installing Packages With pip</a></p></li>
        <li><p><a href="https://shultais.education/courses/python-3">Программирование на Python 3</a></p></li>
        <li><p><a href="https://school.techrocks.ru/pythonboost/">PythonBoost</a></p></li>
    </ul>
    <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
    <ul>
        <li><p><a href="https://www.reddit.com/r/Python/?rdt=60471">Reddit</a></p></li>
        <li><p><a href="https://www.python.org/community/forums/">Python.org</a></p></li>
        <li><p><a href="https://www.cyberforum.ru/python/?ysclid=ltwhrrore5900284198">Сyberforum</a></p></li>
    </ul>
    <h3>Муҳити коркарди нармафзор:</h3>
    <ul>
        <li><p><a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a></p></li>
        <li><p><a href="https://code.visualstudio.com/">Visual Studio Code</a></p></li>
        <li><p><a href="https://jupyter.org/">Jupyter</a></p></li>
    </ul>
    <h3>Онлайн муҳити санҷиши коди барномавӣ:</h3>
    <ul>
        <li><p><a href="https://www.online-ide.com/online_python_compiler#google_vignette">Online Python Compiler - OnlineIDE</a></p></li>
        <li><p><a href="https://bio-python.netlify.app/">Online Python - IDE, Editor, Compiler, Interpreter</a></p></li>
        <li><p><a href="https://pythoncompiler.com/">Python Compiler</a></p></li>
    </ul>
    <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
    <ul>
      <li><p><a href="https://docs.python.org/3/library/index.html">The Python Standard Library</a></p></li>
    </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>