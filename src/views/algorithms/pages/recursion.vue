<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Recursion - Рекурсия </h1>
          <h5>Таҳиягар: Асирӣ М.Ф.</h5>
          <p>
            Рекурсия дар барномасозӣ ин қобилияти муайян кардани функсия бо истифода аз худи функсияи муайяншуда дар
            раванд мебошад. Дар математика бисёр функсияҳо бо ин роҳ муайян карда мешаванд, аз ин рӯ аксари забонҳои
            барномасозӣ ин равишро истифода мебаранд.
            Ин дар Python низ кор мекунад. Одатан, барои муяайянкунии функсия, маълумоте, ки пеш дода шуда буд истифода
            бурда мешавад. Аммо як истисно вуҷуд
            дорад - функсия дар бадани он метавонад худро даъват кунад. Чунин намудро дорад:
          </p>
          <pre><code>
        def factorial(n):
        if n <= 0:
            return 1
        return n * factorial(n - 1)
      </code></pre>
          <p>
            Ин функсия факториали ададро n-ро тавассути зарб кардани адад ба факториали адади n - 1 ҳисоб мекунад.
          </p>
          <h3> Шарти ба итмомрасонидани рекурсия</h3>
          <p>
            Мисоли боло шартеро истифода мебарад, ки рекурсияро бозмедорад. Агар аз функсия шартеро, ки аргументи
            манфиро тафтиш мекунад, хориҷ карда шавад, он гоҳ ҳангоми клик кардани ин функсия барномаро аз кор мебарорад
            ё функсия такроран худашро даъват мекунад.
          </p>
          <h3>Чаро рекурсия лозим аст?</h3>
          <p>
            Баъзе алгоритмҳо тезтар татбиқ мешаванд, агар баҷои сикл рекурсия истифода бурда шавад.
            Ҳангоми татбиқи чунин алгоритмҳо, шумо бояд дар хотир доред, ки хотираи стек
            маҳдуд аст. Дар ин ҳолат, худи сохторҳои додаҳо одатан маҳдуданд, бинобар ин шумо набояд аз рекурсия
            комилан даст кашед.
          </p>

          <h3>Хусусиятҳои рекурсия:</h3>
          <ul>
            <li>Иҷрои як амалиёт якчанд маротиба бо воридоти гуногун.</li>
            <li>Дар ҳар як қадам, мо кӯшиш мекунем, ки саҳмияҳои хурдтар гузорем, то мушкилотро хурдтар созем.</li>
            <li> Барои қатъ кардани рекурсия шарти асосӣ лозим аст, вагарна сикл беохир ба амал меояд.</li>
          </ul>

          <h3>Намудҳои рекурсия</h3>
          <p>
            Рекурсияро вобаста ба тарзи даъват кардан ба 2 намуд ҷудо карда мешавад.
          </p>
          <ul>
            <li>Бевосита - вақте ки функсия худашро даъват мекунад</li>
            <li>Бавосита - ҳангоми як функсия дар дохили худ функсияи дигарро даъват кунад ва функсияи пешинаро даъват
              кунад</li>
            Рекурсияҳоро инчунин аз рӯи шумораи даъватҳои рекурсивӣ тақсим кардан мумкин аст:
            <li>Хатӣ - вақте ки ҳангоми ҳисоб кардани натиҷаи функсия, функсия худро як маротиба даъват мекунад,
              тавре ки дар мисоли factorial. Биёед фаҳмонем, ки "як бор" маънои шумораи умумии даъватҳои функсионалии
              танаро надорад. Сухан дар бораи шумораи даъватҳое меравад, ки натичахои онхо барои як хисоби умумй
              заруранд</li>
            <li>Каскад - вақте ки функсия якчанд маротиба худро даъват мекунад</li>
          </ul>
          <h3>Мисоли рекурсияи хатӣ</h3>
          <p>
            Агар рекурсия дар функсия гипотезаи Collatz-ро санҷида бошад , он хатӣ ҳисобида мешавад:
          </p>
          <pre><code>
        def collatz(n):
        if n == 1:
            return True
        if n % 2 == 0:
            return collatz(n // 2)
        return collatz(n * 3 + 1)   
        </code></pre>
          <p>
            Дар ин ҷо дар тани функсия ду намуди даъвати рекурсивӣ мавҷуд аст, аммо дар ҳар як даъват танҳо як даъват
            истифода мешавад.
            Мисоли дигари истифодаи рекурсияи хатӣ ин гузариш аз коллексияҳо мебошад.
            Барои ин, коллексияро ба таври рекурсивӣ чунин муаррифӣ карда мешавад:
          </p>
          <p>Қисми боқимондаи коллексия</p>
          <pre><code>
        def sum(array):
        head, *tail = array
        if not tail:
            return head
        return head + sum(tail)
    </code></pre>
          <h3>Намунаи рекурсияи каскади</h3>
          <p>
            Агар рекурсия дар функсия бо Адади Фибоначчи ҳисоб карда шавад, он каскади ҳисобида мешавад:
          </p>
          <pre><code>
        def fibonacci(n):
        if n <= 2:
            return 1
        return fibonacci(n - 1) + fibonacci(n - 2)
    </code></pre>
          <p>
            Дар инҷо функсия ҳамеша худро ду маротиба даъват мекунад.
            Дар аввал ду маротиба даъват мешавад, ки ба чор маротиба табдил меёбад. Яъне ду даъват ба ду маротиба табдил
            меёбад. Пас аз ҳашт - шумораи даъватҳо каскад меафзояд
          </p>

          <h3>Маводҳо барои мутолиа:</h3>
          <ul>
            <li><a
                href="https://ia801807.us.archive.org/26/items/data-structures-and-algorithms-in-python-pdfdrive/Data%20Structures%20and%20Algorithms%20in%20Python%20%28%20PDFDrive%20%29.pdf">Data
                Structures and
                Algorithms in Python:Michael T. Goodrich,Roberto Tamassia, Michael H. Goldwasser/4 Recursion саҳ:
                148</a></li>
            <li><a href="https://pythonru.com/osnovy/rekursiya-python">Рекурсивная функция в python</a></li>
            <li><a href="https://education.yandex.ru/handbook/python/article/rekursiya-dekoratory-generatory">Рекурсия.
                Декораторы. Генераторы</a></li>
          </ul>

          <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
          <ul>
            <li><a href="https://proghunter.ru/articles/recursion-in-python-overview-and-examples">Рекурсия в Python:
                Обзор и Примеры</a></li>
            <li><a href="https://pythonist.ru/rekursiya-v-python/">Рекурсия в Python: плюсы и минусы использования</a>
            </li>
            <li><a href="https://docs-python.ru/tutorial/opredelenie-funktsij-python/rekursija/">Рекурсия в Python,
                примеры кода</a></li>
          </ul>

          <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
          <ul>
            <li><a
                href="https://www.edx.org/learn/python/codio-python-programming-intermediate-concepts?index=product&queryID=d4c69fd9319e2f1b0e81630d225c3cf8&position=1&results_level=first-level-results&term=recursion+python&objectID=course-0d486492-4928-4e13-a8b0-38d72297b9f0&campaign=Python+Programming%3A+Intermediate+Concepts&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch">Codio:
                Python Programming: Intermediate Concepts</a></li>
            <li><a href="https://www.coursera.org/learn/python-object-basics">Python Object Basics: Functions,
                Recursion, and Objects</a></li>
            <li><a href="https://www.udemy.com/course/learn-recursion/?couponCode=ST13MT40224">Recursion</a></li>
          </ul>

          <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
          <ul>
            <li><a
                href="https://egoroffartem.pythonanywhere.com/course/python/rekursiya-v-python-rekursivnaya-funktsiya-chast-2">Рекурсия
                в Python. Рекурсивная функция</a></li>
            <li><a href="https://stepik.org/lesson/372094/step/2">Рекурсивная функция</a></li>
            <li><a href="https://it-start.online/articles/rekursija-v-python">Рекурсия в Python</a></li>
          </ul>
          <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
          <ul>
            <li><a href="https://www.cyberforum.ru/python-beginners/">Python для начинающих</a></li>
            <li><a href="https://programmersforum.ru/showthread.php?t=345452">Форум программистов</a></li>
            <li><a href="https://python.su/forum/">Python-сообщество</a></li>
          </ul>

          <h3>Муҳити коркарди нармафзор</h3>
          <ul>
            <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
            <li><a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a></li>
            <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
          </ul>
          <h3>Онлайн муҳити санҷиши коди барномавӣ:</h3>
          <ul>
            <li><a href="https://www.programiz.com/python-programming/online-compiler/">Python Online Compiler</a></li>
            <li><a href="https://bio-python.netlify.app/">Online Python - IDE, Editor, Compiler, Interpreter</a></li>
            <li><a href="https://www.online-ide.com/online_python_compiler#google_vignette">Online Python Compiler -
                OnlineIDE</a></li>
          </ul>
          <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
          <ul>
            <li><a href="https://numpy.org/">NumPy</a></li>
            <li><a href="https://scipy.org/">SciPy</a></li>
            <li><a href="https://matplotlib.org/">Matplotlib</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import '@/assets/pages.css'
</style>