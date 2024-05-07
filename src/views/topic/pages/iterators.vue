<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Iterators - Итераторҳо</h1>
          <h5>Таҳиягар: Қосимова С.Д.</h5>
          <p>Итераторҳо - методҳое мебошанд, ки тавассути коллексияҳо, ба монанди рӯйхатҳо, наворҳо ва ғайра такрор
            мешаванд. Бо истифода аз итератор, мо метавонем объектҳоро такрор кунем ва элементҳои онҳоро баргардонем. Аз
            ҷиҳати техникӣ, объекти итератор дар Python бояд ду методи махсусро муайян кунад, <code>__iter__()</code> ва
            <code>__next__()</code>, ки дар маҷмӯъ протоколи итератор номида мешаванд.</p>
          <p>Масалан, функсияи <code>iter()</code> итератори объекти додашударо бармегардонад:</p>
          <pre><code>
        iter(объект)
    </code></pre>
          <p>Аргументи <code>iter()</code> бояд ҳама гуна объекте бошад, ки протоколи такрорӣ ё пайдарпайро дастгирӣ
            кунад. Вақте ки мо функсияи <code>iter()</code>-ро дар объекти мушаххас даъват мекунем, функсия аввал усули
            <code>__iter__()</code>-и он объектро меҷӯяд.</p>
          <ul>
            <li>Агар методи <code>__iter__()</code> мавҷуд бошад, функсияи <code>iter()</code> онро барои ба даст
              овардани итератор даъват мекунад. Дар акси ҳол, функсияи <code>iter()</code> методи
              <code>__getitem__()</code>-ро меҷӯяд.</li>
            <li>Агар методи <code>__getitem__()</code> мавҷуд бошад, функсияи <code>iter()</code> объекти итераторро
              эҷод мекунад ва онро бармегардонад. Агар ин усул вуҷуд надошта бошад, истиснои <code>TypeError</code>
              партофта мешавад.</li>
          </ul>
          <h3>Истифодаи итераторҳо дар Python</h3>
          <p>Дар Python, мо метавонем функсияи <code>next()</code>-ро барои баргардонидани элементи навбатӣ дар
            пайдарпай истифода барем. Масалан:</p>
          <pre><code>
        # Муайян кардани рӯйхат
        my_list = [4, 7, 0]
        
        # Сохтани итератор аз рӯйхат
        iterator = iter(my_list)
        
        # Гирифтани элементи якуми итератор ва чопи он дар экран
        print(next(iterator)) 
        
        # Гирифтани элементи дуюми итератор ва чопи он дар экран
        print(next(iterator))  
        
        # Гирифтани элементи сеюми итератор ва чопи он дар экран
        print(next(iterator))
    </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
        4
        7
        0
    </code></pre>
          <p>Дар ин ҷо аввал мо бо истифода аз функсияи <code>iter()</code> аз рӯйхат итератор офаридем. Сипас,
            функсияи <code>next()</code>-ро барои ба даст овардани элементҳои итератор бо тартиби пайдарпай истифода
            бурд. Вақте ки мо ба охир мерасем ва дигар маълумоте барои баргардонидан нест, истиснои
            <code>StopIteration</code> партофта мешавад.</p>
          <h3>Итератсияи автоматӣ</h3>
          <p>Роҳи иҷрои итератсияи автоматӣ ин истифодаи сикли <code>for</code> аст. Масалан:</p>
          <pre><code>
        # Муайян кардани рӯйхат
        my_list = [4, 7, 0]
        
        for element in my_list:
            print(element)
    </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
        4
        7
        0
    </code></pre>
          <h3>Итераторҳо ва сикли for</h3>
          <p>Сикли <code>for</code> дар Python барои такрор кардани пайдарпаии элементҳо ба монанди рӯйхат, навор ё
            сатр истифода мешавад. Вақте ки мо сикли <code>for</code>-ро бо итератор истифода мебарем, сикл ба таври
            худкор тавассути элементҳои итератор то он даме, ки элементҳо тамом нашавад, такрор мешавад. Масалан:</p>
          <pre><code>
        # Сохтани рӯйхати ададҳои бутун
        my_list = [1, 2, 3, 4, 5]
        
        # Сохтани итератор аз рӯйхат
        iterator = iter(my_list)
        
        # Ҷудо кардани элементҳои итератор
        for element in iterator:
        
            # Баровардани ҳар як элемент дар экран
            print(element)
    </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
        1
        2
        3
        4
        5
    </code></pre>
          <p>Сикли <code>for</code> тавассути элементҳои объекти итератор такрор мешавад. Дар ҳар як такрор, сикл
            арзиши элементи навбатиро ба тағирёбандаи элемент таъин мекунад ва сипас онро дар экран чоп мекунад. Ин
            раванд то он даме, ки итератор элементҳо тамом нашавад, идома меёбад.</p>
          <h3>Сохтани итераторҳои фармоишӣ дар Python</h3>
          <p>Сохтани итератор аз сифр дар Python хеле осон аст. Барои ин, шумо бояд методҳои <code>__iter__()</code> ва
            <code>__next__()</code>-ро муайян кунед:</p>
          <ul>
            <li><code>__iter__()</code> - худи объекти итераторро бармегардонад. Дар ҳолати зарурӣ шумо метавонед
              оғозкуниро иҷро кунед.</li>
            <li><code>__next__()</code> - элементи навбатиро дар пайдарпай бармегардонад. Вақте ки ба охир мерасад ва
              дар зангҳои минбаъда (пас аз анҷом), истиснои <code>StopIteration</code> бояд партофта шавад.</li>
          </ul>
          <p>Биёед мисоли барномаи баланд бардоштани арзишҳо дар ҳар як итератсияро бубинем. Экспонент аз сифр то
            рақами муайянкардаи корбар оғоз мешавад.</p>
          <pre><code>
        class PowTwo:
            def __init__(self, max=0):
                self.max = max
        
            def __iter__(self):
                self.n = 0
                return self
        
            def __next__(self):
                if self.n <= self.max:
                    result = 2 ** self.n
                    self.n += 1
                    return result
                else:
                    raise StopIteration
        
        
        # Сохтани объект
        numbers = PowTwo(3)
        
        # Сохтани итератор аз объект
        i = iter(numbers)
        
        # Истифодаи next барои гузаштан ба унсури навбатии итератор
        print(next(i)) 
        print(next(i)) 
        print(next(i)) 
        print(next(i)) 
        print(next(i)) # генератсияи истиснои StopIteration
    </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
        1
        2
        4
        8
        Traceback (most recent call last):
        File "", line 32, in
        File "", line 18, in __next__
        StopIteration
    </code></pre>
          <p>Мо инчунин метавонем сикли <code>for</code>-ро истифода барем, то тавассути синфи худ такрор кунем:</p>
          <pre><code>
        for i in PowTwo(3):
            print(i)
    </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
        1
        2
        4
        8
    </code></pre>
          <h3>Итераторҳои беохир дар Python</h3>
          <p>Итератори беохир - итераторест, ки ҳеҷ гоҳ тамом намешавад. Ин маънои онро дорад, ки он миқдори номаҳдуди
            маротиба эҷод кардани элементҳоро идома медиҳад.</p>
          <p>Дар ин ҷо мисоли сохтани итератори беохир дар Python бо истифода аз функсияи <code>count()</code> аз
            модули <code>itertools</code> оварда шудааст:</p>
          <pre><code>
        from itertools import count
 
        # Сохтани итератори беохир, ки аз 1 оғоз мешавад ва ҳар дафъа ба 1 зиёд мешавад
        infinite_iterator = count(1)
        
        # Чоп кардани 5 элементи аввалини итератори беохир
        for i in range(5):
            print(next(infinite_iterator))
    </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
        1
        2
        3
        4
        5
    </code></pre>
          <p>Дар ин ҷо мо як итератори беохирро сохтем, ки аз 1 оғоз мешавад ва ҳар дафъа ба 1 зиёд мешавад.Ва он гоҳ
            мо 5 элементи аввалини итератори беохирро бо истифода аз сикли <code>for</code> ва функсияи
            <code>next()</code> мебарорем.</p>
          <h3>Маводҳо барои мутоила:</h3>
          <ul>
            <li>
              <p>"Intermediate Python" / Muhammad Yasoob Ullah Khalid <a
                  href="https://library-it.com/wp-content/uploads/2020/12/intermediate_python_m_khalid.pdf">(скачать
                  PDF)</a></p>
            </li>
            <li>
              <p>"Python.Большая книга примеров" / А.Л.Марченко <a
                  href="https://msupress.com/ebook/978-5-19-011853-7_e-book.pdf?ysclid=luuv9w8xjx288388765">(скачать
                  PDF)</a></p>
            </li>
            <li>
              <p>"Чистый Python" / Дэн Бейдер <a
                  href="https://igorcomputer.ru/books/python/python_for_professionals.pdf">(скачать PDF)</a></p>
            </li>
          </ul>
          <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
          <ul>
            <li>
              <p><a href="https://habr.com/ru/articles/488112/">Понимание итераторов в Python</a></p>
            </li>
            <li>
              <p><a href="https://www.w3schools.com/python/python_iterators.asp">Python Iterators</a></p>
            </li>
            <li>
              <p><a href="https://dementiy.github.io/lectures/iterators/">Итераторы</a></p>
            </li>
          </ul>
          <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
          <ul>
            <li>
              <p><a href="https://www.coursera.org/learn/codio-python-basics">Python Basics: Selection and
                  Iteration</a></p>
            </li>
            <li>
              <p><a
                  href="https://translated.turbopages.org/proxy_u/en-ru.ru.8206a39a-65fecd79-5a692f9f-74722d776562/https/www.udemy.com/course/python-3-deep-dive-part-2/">Python
                  3: Deep Dive (Part 2 - Iterators, Generators)</a></p>
            </li>
            <li>
              <p><a href="https://www.khanacademy.org/computing/intro-to-python-fundamentals">Intro to computer science
                  - Python</a></p>
            </li>
          </ul>
          <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
          <ul>
            <li>
              <p><a href="https://ru.hexlet.io/courses/python-lists">Python: Списки</a></p>
            </li>
            <li>
              <p><a href="https://stepik.org/course/82541/promo">"Поколение Python": курс для профессионалов</a></p>
            </li>
            <li>
              <p><a href="https://itvdn.com/ru/video/python-essential/iterators-generators">Итераторы и генераторы в
                  Python</a></p>
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