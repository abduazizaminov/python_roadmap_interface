<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Conda</h1>
          <h5>Таҳиягар: Қосимова С.Д.</h5>
      <p>Conda - платформа барои идоракунии бастаҳо, муҳитҳо ва вобастагӣ дар Python ва дигар забонҳои барномасозӣ мебошад. Conda Python роҳи осони идоракунии насбҳо ва навсозиҳои бастаҳо ва эҷод ва идора кардани муҳити виртуалии Python барои ҷудо кардани лоиҳаҳо ва вобастагии онҳоро таъмин мекунад.</p>
      <h3>Насб кардани Conda Python</h3>
      <h4>Барои насб кардани Conda Python, ин қадамҳоро иҷро кунед:</h4>
          <ol>
          <li>
              <p>Насбкунандаи Miniconda ё Anaconda-ро зеркашӣ кунед:</p>
              <ul>
              <li><p>Miniconda маҷмӯи ҳадди ақали абзорҳои Conda ва Python-ро таъмин мекунад, дар ҳоле ки Anaconda бастаҳои зиёди қаблан насбшударо барои ҳисоббарории илмӣ ва таҳлили додаҳо дар бар мегирад.</p></li>
              <li><p>Шумо метавонед насбкунандаи Miniconda ё Anaconda-ро аз <a href="https://docs.conda.io/en/latest/miniconda.html">вебсайти расмии Continuum.io зеркашӣ кунед.</a></p></li>
              </ul>
          </li>
          <li>
              <p>Насбкунандаро иҷро кунед:</p>
              <ul>
              <li><p>Насбкунандаеро, ки шумо зеркашӣ кардаед, иҷро кунед.</p></li>
              <li><p>Дастурҳои насбкуниро риоя кунед. Роҳи насб ва имконоти дигарро мувофиқи хоҳиши худ интихоб кунед.</p></li>
              </ul>
          </li>
          <li>
              <p>Насбро тафтиш кунед:</p>
              <ul>
              <li><p>Пас аз ба итмом расидани насб, терминал ё сатри фармонро кушоед.</p></li>
              <li><p><code>conda--version</code>-ро ворид кунед, то боварӣ ҳосил кунед, ки Conda дуруст насб шудааст.</p></li>
              </ul>
          </li>
          </ol>
          <p>Ҳоло шумо бояд Conda Python-ро дар компютери худ насб кунед ва шумо метавонед онро барои идоракунии бастаҳо ва муҳити Python истифода баред.</p>    
          <table>
              <thead>
                <tr>
                  <th>Фармон</th>
                  <th>Вазифа</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p><code>conda install</code></p></td>
                  <td><p>насб кардани баста</p></td>
                </tr>
                <tr>
                  <td><p><code>conda remove</code></p></td>
                  <td><p>хориҷ кардани баста</p></td>
                </tr>
                <tr>
                  <td><p><code>conda search</code></p></td>
                  <td><p>ҷустуҷӯи баста</p></td>
                </tr>
                <tr>
                  <td><p><code>conda list</code></p></td>
                  <td><p>рӯйхати бастаҳои насбшуда</p></td>
                </tr>
                <tr>
                  <td><p><code>conda update--all</code></p></td>
                  <td><p>навсозии Conda ва ҳама бастаҳо</p></td>
                </tr>
                <tr>
                  <td><p><code>conda create</code></p></td>
                  <td><p>сохтани муҳити нав</p></td>
                </tr>
                <tr>
                  <td><p><code>conda activate</code></p></td>
                  <td><p>фаъол кардани муҳити зист</p></td>
                </tr>
                <tr>
                  <td><p><code>conda deactivate</code></p></td>
                  <td><p>хомӯш кардани муҳити ҷорӣ</p></td>
                </tr>
                <tr>
                  <td><p><code>conda env list</code></p></td>
                  <td><p>рӯйхати ҳама муҳитҳо</p></td>
                </tr>
                <tr>
                  <td><p><code>conda env remove</code></p></td>
                  <td><p>хориҷ кардани муҳити зист</p></td>
                </tr>
                <tr>
                  <td><p><code>conda env export</code></p></td>
                  <td><p>содироти муҳити атроф ба файл</p></td>
                </tr>
                <tr>
                  <td><p><code>conda env create-f</code></p></td>
                  <td><p>сохтани муҳити атроф аз файли муҳити зист</p></td>
                </tr>
              </tbody>
            </table>
            <h3>Маводҳо барои мутоила:</h3>
            <ul>
                <li>"Изучаем Python" / Эрик Мэтиз <a href="https://docs.yandex.ru/docs/view?tm=1711685141&tld=ru&lang=ru&name=00000E_metiz___Izuchaem_Python_Progra.pdf&text=%22%D0%98%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC%20Python%22%20%2F%20%D0%AD%D1%80%D0%B8%D0%BA%20%D0%9C%D1%8D%D1%82%D0%B8%D0%B7&url=https%3A%2F%2Fpydarslik.pythonanywhere.com%2Fmedia%2Fresource_file%2F00000E_metiz___Izuchaem_Python_Progra.pdf&lr=10322&mime=pdf&l10n=ru&sign=df3aa0b505361fb65d95da9ab1475821&keyno=0&nosw=1&serpParams=tm%3D1711685141%26tld%3Dru%26lang%3Dru%26name%3D00000E_metiz___Izuchaem_Python_Progra.pdf%26text%3D%2522%25D0%2598%25D0%25B7%25D1%2583%25D1%2587%25D0%25B0%25D0%25B5%25D0%25BC%2BPython%2522%2B%2F%2B%25D0%25AD%25D1%2580%25D0%25B8%25D0%25BA%2B%25D0%259C%25D1%258D%25D1%2582%25D0%25B8%25D0%25B7%26url%3Dhttps%253A%2F%2Fpydarslik.pythonanywhere.com%2Fmedia%2Fresource_file%2F00000E_metiz___Izuchaem_Python_Progra.pdf%26lr%3D10322%26mime%3Dpdf%26l10n%3Dru%26sign%3Ddf3aa0b505361fb65d95da9ab1475821%26keyno%3D0%26nosw%3D1">(скачать PDF)</a></li>
                <li>"Python 3 Text Processing with NLTK 3 Cookbook" by Jacob Perkins <a href="https://budditha.files.wordpress.com/2021/04/python-3-text-processing-with-nltk-3-cookbook.pdf">(скачать PDF)</a></li>
                <li>"Expert Python Programming Third Edition" by Michał Jaworski, Tarek Ziadé <a href="https://edu.anarcho-copy.org/Programming%20Languages/Python/Expert%20Python%20Programming%20-%20Third%20Edition.pdf">(скачать PDF)</a></li>
            </ul>
            <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
            <ul>
                <li><a href="https://docs.conda.io/projects/conda/en/latest/index.html">Conda Documentation</a></li>
                <li><a href="https://medium.com/@gouthamgosh10/getting-started-with-conda-918a9b838009">GETTING STARTED WITH CONDA</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Conda_(package_manager)">Conda (package manager)</a></li>
            </ul>
            <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
            <ul>
                <li><a href="https://www.udemy.com/tutorial/data-analysis-with-pandas-python/anaconda-conda-command/">Anaconda + Conda Command</a></li>
                <li><a href="https://www.coursera.org/learn/codio-select-topics-python-packaging">Select Topics in Python: Packaging</a></li>
                <li><a href="https://www.udemy.com/course/python-package/?couponCode=LETSLEARNNOW">Python Package Development</a></li>
            </ul>
            <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
            <ul>
                <li><a href="https://realpython.com/courses/basics-exercises-install-packages-with-pip/">Python Basics Exercises: Installing Packages With pip</a></li>
                <li><a href="https://learning.anaconda.cloud/conda-basics">Conda Basics</a></li>
                <li><a href="https://school.techrocks.ru/pythonboost/">PythonBoost</a></li>
            </ul>
            <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
            <ul>
                <li><a href="https://www.reddit.com/r/Python/?rdt=60471">Reddit</a></li>
                <li><a href="https://www.python.org/community/forums/">Python.org</a></li>
                <li><a href="https://www.cyberforum.ru/python/?ysclid=ltwhrrore5900284198">Сyberforum</a></li>
            </ul>
            <h3>Муҳити коркарди нармафзор:</h3>
            <ul>
                <li><a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a></li>
                <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
                <li><a href="https://jupyter.org/">Jupyter</a></li>
            </ul>
            <h3>Онлайн муҳити санҷиши коди барномавӣ:</h3>
            <ul>
                <li><a href="https://www.online-ide.com/online_python_compiler#google_vignette">Online Python Compiler - OnlineIDE</a></li>
                <li><a href="https://bio-python.netlify.app/">Online Python - IDE, Editor, Compiler, Interpreter</a></li>
                <li><a href="https://pythoncompiler.com/">Python Compiler</a></li>
            </ul>
            <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
            <ul>
                <li><a href="https://docs.python.org/3/library/index.html">Python Standard Library</a></li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import  '@/assets/pages.css'
</style>