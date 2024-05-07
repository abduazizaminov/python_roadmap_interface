<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Custom Modules - Модулҳои фармоишӣ</h1>
          <h5>Таҳиягар: Қосимова С.Д.</h5>
          <p>Модул - файлест, ки тамдиди <code>.py</code> дорад, ки рамзи Python дорад. Модулҳои фармоишӣ модулҳое
            мебошанд, ки шумо худатон барои ташкили коди худ ва аз нав истифода бурдани он дар барномаҳои худ эҷод
            мекунед. Ин як воситаи пуриқтидорест, ки ба шумо коди худро дар сохтори худ ёрӣ медиҳад, онро хондан бештар
            мекунад ва имкон медиҳад, ки ҳамон кодро дар қисматҳои гуногуни лоиҳаи худ истифода баред.</p>
          <h3>Сохтани модули фармоишӣ</h3>
          <p>Барои сохтани модули шахсии худ, танҳо як файли нав бо тамдиди <code>.py</code> эҷод кунед ва рамзи
            Python-и худро дар он ҷойгир кунед. Ин аст як мисоли модули оддӣ, биёед онро <code>my_module.py</code>
            меномем:</p>
          <pre><code>
        # my_module.py

        def greet(name):
            return f"Hello, {name}!"

        def add(a, b):
            return a + b
    </code></pre>
          <p>Ин модул акнун метавонад ба дигар файлҳои Python ворид карда шавад ва аз вазифаҳои он истифода шавад.</p>
          <h3>Воридоти модули фармоишӣ</h3>
          <p>Барои истифодаи функсияҳо аз модули худ, онро танҳо ба файлҳои дигари Python ворид кунед. Ин аст мисоли
            истифодаи модули <code>my_module.py</code> дар файли дигар:</p>
          <pre><code>
        # main.py

        import my_module

        print(my_module.greet("Alice"))  # Output: Hello, Alice!
        print(my_module.add(2, 3))        # Output: 5
    </code></pre>
          <h3>Воридоти нисбӣ</h3>
          <p>Баъзан ба шумо лозим меояд, ки модулро аз феҳристи ҷорӣ ё аз директорияи як сатҳ болотар ворид кунед.
            Барои ин воридоти нисбӣ истифода мешавад. Инак як мисол:</p>
          <pre><code>
        # main.py

        from . import my_module  # Воридоти нисбии модул аз феҳристи ҷорӣ

        print(my_module.greet("Bob"))  # Output: Hello, Bob!
    </code></pre>
          <h3>Модул ҳамчун скрипт</h3>
          <p>Баъзан шумо метавонед модули худро ҳамчун скрипти иҷрошаванда истифода баред, вақте ки он мустақиман
            даъват карда мешавад. Барои ин, шумо метавонед шартеро илова кунед, ки танҳо дар сурате иҷро мешавад, ки
            файл мустақиман даъват карда шавад:</p>
          <pre><code>
        # my_module.py

        def greet(name):
            return f"Hello, {name}!"

        def add(a, b):
            return a + b

        if __name__ == "__main__":
            print(greet("John"))
            print(add(5, 3))
    </code></pre>
          <p>Вақте ки файли <code>my_module.py</code> мустақиман даъват карда мешавад, блоки охирини код иҷро карда
            мешавад.</p>
          <p>Модулҳои фармоишӣ дар Python ба шумо имкон медиҳанд, ки кодро дар лоиҳаи худ ташкил кунед ва онро модултар
            ва нигоҳдорӣ гардонед. Онҳоро барои пешгирӣ кардани такрори кодҳо ва содда кардани таҳия ва нигоҳдории
            нармафзори худ истифода баред.</p>
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
              <p><a href="https://www.educative.io/answers/how-to-import-custom-module-in-python">How to import custom
                  module in Python</a></p>
            </li>
            <li>
              <p><a href="https://nsu-programming.github.io/textbook/python/std-library.html">Стандартные модули
                  Python. Часть I</a></p>
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