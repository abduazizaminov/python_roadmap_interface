<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Built-in Modules - Модулҳои дарунсохт</h1>
          <h5>Таҳиягар: Қосимова С.Д.</h5>
          <p>Модули <code>Built-in</code> - маҷмӯи функсияҳо ва объектҳои дарунсохт аст, ки дар ҳама гуна барномаи
            Python бидуни ниёз ба воридоти возеҳ дастрасанд. Ин функсияҳо ва объектҳо амалҳои асосӣ ва сохторҳои
            маълумотро таъмин мекунанд, ба монанди кор бо сатрҳо, рӯйхатҳо, луғатҳо ва ғайра.</p>
          <h4>Баъзе аз объектҳо ва функсияҳои модули дарунсохт дар Python иборатанд аз:</h4>
          <ul>
              <li><code>print()</code> - функсия барои чопи матн ё дигар объектҳо дар экран.</li>
              <pre><code>
        print("Hello, world!")
        </code></pre>
              <li><code>len()</code> - функсия барои ба даст овардани дарозии (шумораи элементҳо) пайдарпай ба монанди
                сатр, рӯйхат, навор ва ғайра.</li>
              <pre><code>
            my_list = [1, 2, 3, 4, 5]
            print(len(my_list))  # Output: 5
        </code></pre>
              <li><code>range()</code> - функсияи эҷоди пайдарпаии рақамҳо.</li>
              <pre><code>
            my_range = range(1, 6)  # Пайдарпай аз 1 то 5
            print(list(my_range))  # Output: [1, 2, 3, 4, 5]
        </code></pre>
              <li><code>type()</code> - функсия барои гирифтани навъи объект.</li>
              <pre><code>
            my_var = 42
            print(type(my_var))  # Output: < class 'int'>
        </code></pre>
              <li><code>int(), float(), str(), list(), dict(), set(), tuple()</code> - функсияҳо барои табдил додани
                объектҳо ба намуди мушаххаси маълумот.</li>
              <pre><code>
        my_int = 42
        my_float = 3.14
        my_str = "Hello"
        my_list = [1, 2, 3]
        my_dict = {"a": 1, "b": 2}
        my_tuple = (1, 2, 3)
        my_set = {1, 2, 3}
        </code></pre>
              <li><code>max(), min()</code> - функсияҳо барои дарёфти арзишҳои максималӣ ва минималӣ дар пайдарпаӣ.</li>
              <pre><code>
        my_list = [1, 2, 3, 4, 5]
        print(max(my_list))  # Output: 5
        print(min(my_list))  # Output: 1
        </code></pre>
              <li><code>abs()</code> - функсия барои ба даст овардани арзиши мутлақи адад.</li>
              <pre><code>
        my_num = -42
        print(abs(my_num))  # Output: 42
        </code></pre>
              <li><code>sum()</code> - функсия барои ҷамъбасти ҳамаи унсурҳои пайдарпай.</li>
              <pre><code>
        my_list = [1, 2, 3, 4, 5]
        print(sum(my_list))  # Output: 15
        </code></pre>
              <li><code>input()</code> - функсияи қабули вуруд аз корбар.</li>
              <pre><code>
        user_input = input("Enter your name: ")
        print("Hello,", user_input)
        </code></pre>
              <li><code>TypeError, ValueError, IndexError</code> - истисноҳои дарунсохт.</li>
              <pre><code>
        try:
          result = 1 / 0
        except ZeroDivisionError:
          print("Error: division by zero")
        </code></pre>
          </ul>
          <p>Ин модул як ҷузъи ҷудонашавандаи тарҷумони Python аст ва дар ҳама гуна барномае, ки Python-ро истифода
            мебарад, ба таври худкор дастрас аст. Ҳеҷ гуна воридот ё насб талаб карда намешавад, зеро он мустақиман дар
            тарҷумон сохта шудааст. Он ба барномасозон доираи васеи асбобҳоро барои эҷоди барномаҳои гуногуни Python
            медиҳад.</p>
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
              <p><a
                  href="https://translated.turbopages.org/proxy_u/en-ru.ru.cd046321-6618b061-b8ee3748-74722d776562/https/www.geeksforgeeks.org/built-in-modules-in-python/?__ya_mt_enable_static_translations=1">Built-in
                  Modules in Python</a></p>
            </li>
            <li>
              <p><a href="https://nsu-programming.github.io/textbook/python/std-library.html">Стандартные модули Python.
                  Часть I</a></p>
            </li>
            <li>
              <p><a href="https://python-central-hub.vercel.app/tutorials/python-function/python-module/module/">Module
                  in Python</a></p>
            </li>
          </ul>
          <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
          <ul>
            <li>
              <p><a href="https://www.udemy.com/course/python-ru/?couponCode=LETSLEARNNOW">Python - Полный Курс по
                  Python, Django, Data Science и ML</a></p>
            </li>
            <li>
              <p><a href="https://www.edx.org/learn/python">Learn Python programming online</a></p>
            </li>
            <li>
              <p><a href="https://www.khanacademy.org/computing/intro-to-python-fundamentals">Intro to computer science
                  - Python</a></p>
            </li>
          </ul>
          <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
          <ul>
            <li>
              <p><a href="https://ru.hexlet.io/courses/python-modules?ysclid=luw4v2b5os808831009">Модули в Python</a>
              </p>
            </li>
            <li>
              <p><a href="https://stepik.org/course/82541/promo">"Поколение Python": курс для профессионалов</a></p>
            </li>
            <li>
              <p><a href="https://itproger.com/course/python/16">Модули в языке Питон. Создание и работа с модулями</a>
              </p>
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