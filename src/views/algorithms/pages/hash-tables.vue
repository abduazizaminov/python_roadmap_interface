<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Hash Tables - Хеш ҷадвалҳо </h1>
          <h5>Таҳиягар: Асирӣ М.Ф.</h5>
          <h3>Ҷадвали хэш ё харитаи хэш дар Python</h3>
          <p>
            Ҷадвалҳои хэш як намуди сохтори додаҳо мебошанд, ки дар он суроға ё арзиши индекси элементи додаҳо аз
            функсияи ҳаш генератсия мешавад. Ин дастрасии маълумотро тезтар мекунад, зеро арзиши индекс ҳамчун калиди
            арзиши
            додаҳо амал мекунад. Ба ибораи дигар, ҷадвали Hash ҷуфтҳои калид-арзишро нигоҳ медорад, аммо калид тавассути
            функсияи hasshing сохта мешавад. Ҳамин тавр, функсияи ҷустуҷӯ ва воридкунии элементи додаҳо хеле тезтар
            мешавад, зеро худи арзишҳои калидӣ ба индекси массиве табдил меёбанд, ки маълумотро нигоҳ медорад.
          </p>
          <p>
            Дар Python, намудҳои маълумоти Dictionary татбиқи ҷадвалҳои хэшро ифода мекунанд. Калидҳои луғат ба талаботи
            зерин ҷавобгӯ мебошанд.
          </p>
          <ul>
            <li>Калидҳои луғат хэшшавандаанд, яъне онҳо тавассути функсияи хэшинг сохта мешаванд,
              ки барои ҳар як арзиши уникали, ки ба функсияи hash дода мешавад, натиҷаи уникали месозад.
            </li>
            <li>
              Тартиби элементҳои додаҳо дар луғат муқаррар карда нашудааст.
            </li>
          </ul>
          <h3>Дастрасӣ ба арзишҳо дар луғат</h3>
          Барои дастрасӣ ба элементҳои луғат, шумо метавонед қавсҳои мураббаъро дар якҷоягӣ бо калид истифода баред,
          то арзиши онро ба даст оред.
          <h4>
            Мисол:
          </h4>
          <pre><code>
      # Declare a dictionary 
      dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}

      # Accessing the dictionary with its key
      print ("dict['Name']: ", dict['Name'])
      print ("dict['Age']: ", dict['Age'])
            </code></pre>
          <h4>
            Натиҷа:
          </h4>
          <pre><code>
      dict['Name']:  Zara
      dict['Age']:  7
            </code></pre>
          <h3>Навсозии луғат</h3>
          <p>
            Шумо метавонед луғатро тавассути илова кардани вуруди нав ё ҷуфти калид-арзиш, тағйир додани вуруди
            мавҷуда ё нест кардани вуруди мавҷуда тавре, ки дар мисоли оддӣ дар зер нишон дода шудааст, навсозӣ кунед
          </p>
          <h4>
            Мисол:
          </h4>
          <pre><code>
      # Declare a dictionary
      dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
      dict['Age'] = 8; # update existing entry
      dict['School'] = "DPS School"; # Add new entry
      print ("dict['Age']: ", dict['Age'])
      print ("dict['School']: ", dict['School'])
            </code></pre>
          <h4>Натиҷа</h4>
          <pre><code>
      dict['Age']:  8
      dict['School']:  DPS School
        </code></pre>
          <h3>Унсурҳои луғатро нест кунед</h3>
          <p>
            Шумо метавонед унсурҳои луғатро хориҷ кунед ё тамоми мундариҷаи луғатро тоза кунед. Шумо инчунин
            метавонед тамоми луғатро дар як амалиёт тоза кунед.
          </p>
          <h4>Мисол</h4>
          <pre><code>
      dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
      del dict['Name']; # remove entry with key 'Name'
      dict.clear();     # remove all entries in dict
      del dict ;        # delete entire dictionary

      print ("dict['Age']: ", dict['Age'])
      print ("dict['School']: ", dict['School'])
        </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
      dict['Age']:  dict['Age']
      dict['School']:  dict['School']
  </code></pre>
          <h3>Маводҳо барои мутолиа:</h3>
          <ul>
            <li><a
                href="https://ia801807.us.archive.org/26/items/data-structures-and-algorithms-in-python-pdfdrive/Data%20Structures%20and%20Algorithms%20in%20Python%20%28%20PDFDrive%20%29.pdf">Data
                Structures and
                Algorithms in Python:Michael T. Goodrich,Roberto Tamassia, Michael H. Goldwasser/10 Maps, Hash Tables,
                and Skip Lists саҳ:401/10.2 Hash Tables саҳ:410</a></li>
            <li><a href="https://palchevsky.ru/uploads/books/Python_1.pdf">Простой Python:Билл Любанович/Глава 8.
                Словари и множества саҳ:144</a></li>
            <li><a href="https://t.me/rebooksbot">Python for Everybody:Dr. Charles R. Severance/Глава 9. Словари
                саҳ:127</a></li>
          </ul>

          <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
          <ul>
            <li><a href="https://www.tutorialspoint.com/python_data_structure/python_hash_table.htm">Python - Hash
                Table</a></li>
            <li><a
                href="https://coderlessons.com/tutorials/python-technologies/izuchite-strukturu-dannykh-python/python-khesh-tablitsa">Python
                – хэш-таблица</a></li>
            <li><a href="https://habr.com/ru/articles/509220/">Хеш-таблицы</a></li>
          </ul>

          <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
          <ul>
            <li><a
                href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/?couponCode=KEEPLEARNING">Master
                the Coding Interview: Data Structures + Algorithms</a></li>
            <li><a
                href="https://www.udemy.com/course/data-structures-and-algorithms-bootcamp-in-python/?couponCode=KEEPLEARNING">The
                Complete Data Structures and Algorithms Course in Python</a></li>
            <li><a href="https://www.udemy.com/course/data-structures-algorithms-python/?couponCode=ST13MT40224">Python
                Data Structures & Algorithms + LEETCODE Exercises</a></li>
          </ul>

          <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
          <ul>
            <li><a
                href="https://proproprogs.ru/structure_data/std-hash-tablicy-chto-eto-takoe-i-kak-rabotayut">Хэш-таблицы.
                Что это такое и как работают</a></li>
            <li><a href="https://codechick.io/tutorials/dsa/dsa-hash-table">Хеш-таблицы</a></li>
            <li><a href="https://ru.hexlet.io/courses/python-dicts/lessons/hash-table/theory_unit#:~:text=%D0%A5%D0%
        B5%D1%88%2D%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0%20%D0%BF%D0%BE%D0%B7%
        D0%B2%D0%BE%D0%BB%D1%8F%D0%B5%D1%82%20%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%
        B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5,%D0%B8%
        20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8E%20%D0%B4%D0%BB%D1%8F%20%D1%85%D0%B5%
        D1%88%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BA%D0%BB%D1%8E%D1%87%D0
        %B5%D0%B9.">Хеш-таблицы—
                Python: Cловари и множества
              </a></li>
          </ul>
          <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
          <ul>
            <li><a href="https://www.cyberforum.ru/python-beginners-page8.html">Python для начинающих</a></li>
            <li><a href="https://programmersforum.ru/forumdisplay.php?f=110">ProgrammersForum</a></li>
            <li><a href="https://itfy.org/forums/python-help/">Помощь по Python</a></li>
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