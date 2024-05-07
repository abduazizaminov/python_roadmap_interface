<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Generator Expressions - Ифодаҳои генераторӣ</h1>
          <h5>Таҳиягар: Қосимова С.Д.</h5>
          <p>Генератор дар Python - функсияест, ки итераторро бармегардонад, ки ҳангоми такрорӣ пайдарпайии арзишҳоро
            тавлид мекунад. Генераторҳо вақте муфиданд, ки ба мо лозим аст, ки пайдарпайии бузурги арзишҳоро ба даст
            орем, аммо мо намехоҳем, ки ҳамаи онҳоро дар як вақт дар хотира нигоҳ дорем.</p>
          <h3>Сохтани генератор дар Python</h3>
          <p>Мисли функсияҳои муқаррарӣ, функсияи генераторро дар Python бо истифода аз калимаи калидии
            <code>def</code> муайян кардан мумкин аст, аммо ба ҷои оператори <code>return</code>, оператори
            <code>yield</code> истифода мешавад.</p>
          <pre><code>
        def generator_name(arg):
            # Корпуси генератор
            yield something
    </code></pre>
          <p>Дар ин ҷо калимаи калидии оператори <code>yield</code> барои баргардонидани арзиш аз генератор истифода
            мешавад. Вақте ки генератор даъват карда мешавад, корпуси он (код) фавран иҷро карда намешавад. Ба ҷои ин,
            объекти генератор баргардонида мешавад, ки онро барои тавлиди арзишҳо такрор кардан мумкин аст.</p>
          <p>Мисоли функсияи генератор, ки пайдарпаии рақамҳоро тавлид мекунад:</p>
          <pre><code>
        def my_generator(n):
        
            # Оғоз кардани ҳисобкунак
            value = 0
        
            # Давра то он даме, ки ҳисобкунак аз n камтар бошад, кор мекунад
            while value < n:
        
                # Баргардонидани арзиши ҳисобкунак
                yield value
        
                # Зиёд кардани ҳисобкунак
                value += 1
        
        # Иҷрои итератсияи генератор
        for value in my_generator(3):
        
            # Баровардани ҳар як арзиши аз генератор гирифташуда
            print(value)
    </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
        0
        1
        2
    </code></pre>
          <p>Дар ин ҷо функсияи генератори <code>my_generator()</code> адади бутуни <code>n</code>-ро ҳамчун аргумент
            мегирад ва пайдарпайии ададҳоро аз <code>0</code> то <code>n-1</code> месозад. Калимаи калидии
            <code>yield</code> барои дарёфти арзиш аз генератор ва таваққуфи иҷрои вазифаи генератор то дархости арзиши
            навбатӣ истифода мешавад.</p>
          <p>Сикли for тавассути объекти генератори аз ҷониби функсияи <code>my_generator()</code> сохташуда такрор
            мешавад ва оператори <code>print</code> ҳар як арзиши тавлидкардаи генераторро чоп мекунад. Мо инчунин
            метавонем объекти генераторро аз функсияи генератор бо даъвати он мисли ҳама гуна функсияи дигар созем:</p>
          <pre><code>
        generator = my_range(3)
        print(next(generator))  # 0
        print(next(generator))  # 1
        print(next(generator))  # 2
    </code></pre>
          <h3>Ифодаҳои генератор дар Python</h3>
          <p>Ифодаи генератор роҳи мухтасари сохтани объекти генератор мебошад. Он ба абстраксияи рӯйхат шабеҳ аст,
            аммо ба ҷои сохтани рӯйхат, он объекти генераторро эҷод мекунад, ки онро барои тавлиди арзишҳо такрор кардан
            мумкин аст.</p>
          <h4>Ифодаи генератор дар Python синтаксиси зерин дорад:</h4>
          <pre><code>
        (ифодаи for элемент in итератор)
    </code></pre>
          <p>Дар ин ҷо <code>ифода</code> арзишест, ки барои ҳар як унсури итератор баргардонида мешавад.</p>
          <p>Ифодаи генератор як объекти генераторро эҷод мекунад, ки ҳангоми такрорӣ арзишҳои ифодаро барои ҳар як
            унсури итератор як-як ба вуҷуд меорад.</p>
          <h4>Биёед мисоли ифодаи генераторро дар Python дида бароем:</h4>
          <pre><code>
        # Сохтани объекти генератор
        squares_generator = (i * i for i in range(5))
        
        # Итератсия тавассути генератор ва баровардани арзишҳо
        for i in squares_generator:
            print(i)
    </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
        0
        1
        4
        9
        16
    </code></pre>
          <p>Дар ин ҷо мо объекти генераторро сохтем, ки ҳангоми такрорӣ ҳар як ададро дар пайдарпаӣ аз 0 то 4 мураббаъ
            мекунад. Сипас мо барои такрор кардани генератор ва чоп кардани арзишҳо сикли for-ро истифода мебарем.</p>
          <h3>Маводҳо барои мутоила:</h3>
          <ul>
            <li>
              "Углубленный курс информатики" / Долганов Игорь Михайлович <a
                  href="https://portal.tpu.ru/SHARED/d/DOLGANOVIM/teaching/Tab4/Lec-01.pdf">(скачать PDF)</a>
            </li>
            <li>
              "Python 3 Text Processing with NLTK 3 Cookbook" by Jacob Perkins <a
                  href="https://budditha.files.wordpress.com/2021/04/python-3-text-processing-with-nltk-3-cookbook.pdf">(скачать
                  PDF)</a>
            </li>
            <li>
              "Python для сетевых инженеров" / Наташа Самойленко <a
                  href="https://pyneng.readthedocs.io/_/downloads/ru/latest/pdf/">(скачать PDF)</a>
            </li>
          </ul>
          <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
          <ul>
            <li>
              <a
                  href="https://skillbox.ru/media/code/generatory_python_chto_eto_takoe_i_zachem_oni_nuzhny/">Генераторы
                  Python: что это такое и зачем они нужны</a>
            </li>
            <li>
              <a href="https://pythonist.ru/generatory-v-python/?ysclid=lu42k544ac182926481">Генераторы в Python и
                  их отличие от списков и функций</a>
            </li>
            <li>
              <a
                  href="https://fadeevlecturer.github.io/python_lectures/notebooks/python/generators.html">Генераторы</a>
              
            </li>
          </ul>
          <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
          <ul>
            <li>
              <a href="https://www.udemy.com/course/generators-in-python/?couponCode=LETSLEARNNOW">Generators in
                  Python</a>
            </li>
            <li>
              <a
                  href="https://translated.turbopages.org/proxy_u/en-ru.ru.8206a39a-65fecd79-5a692f9f-74722d776562/https/www.udemy.com/course/python-3-deep-dive-part-2/">Python
                  3: Deep Dive (Part 2 - Iterators, Generators)</a>
            </li>
            <li>
              <a href="https://www.coursera.org/projects/python-generators">Python Generators</a>
            </li>
          </ul>
          <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
          <ul>
            <li>
              <a href="https://egoroffartem.pythonanywhere.com/course/python/54">Выражения-генераторы</a>
            </li>
            <li>
              <a href="https://ru.hexlet.io/courses/python-declarative-programming">Python: Декларативное
                  программирование</a>
            </li>
            <li>
              <a href="https://codebra.ru/ru/lessons-python/hellopython/13/13">Генераторы и оператор yield в
                  Python</a>
            </li>
          </ul>
          <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
          <ul>
            <li>
              <a href="https://www.reddit.com/r/Python/?rdt=60471">Reddit</a>
            </li>
            <li>
              <a href="https://www.python.org/community/forums/">Python.org</a>
            </li>
            <li>
              <a href="https://www.cyberforum.ru/python/?ysclid=ltwhrrore5900284198">Сyberforum</a>
            </li>
          </ul>
          <h3>Муҳити коркарди нармафзор:</h3>
          <ul>
            <li>
              <a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a>
            </li>
            <li>
              <a href="https://code.visualstudio.com/">Visual Studio Code</a>
            </li>
            <li>
              <a href="https://jupyter.org/">Jupyter</a>
            </li>
          </ul>
          <h3>Онлайн муҳити санҷиши коди барномавӣ:</h3>
          <ul>
            <li>
              <a href="https://www.online-ide.com/online_python_compiler#google_vignette">Online Python Compiler -
                  OnlineIDE</a>
            </li>
            <li>
              <a href="https://bio-python.netlify.app/">Online Python - IDE, Editor, Compiler, Interpreter</a>
            </li>
            <li>
              <a href="https://pythoncompiler.com/">Python Compiler</a>
            </li>
          </ul>
          <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
          <ul>
            <li>
              <a href="https://docs.python.org/3/library/index.html">The Python Standard Library</a>
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