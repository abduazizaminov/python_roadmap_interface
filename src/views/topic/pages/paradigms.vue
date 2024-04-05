<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Paradigms - Парадигмаҳо</h1>
    <p>Парадигмаи барномасозӣ - услуб ё равиши бунёдии навиштани рамзи нармафзор аст, ки муайян мекунад, ки чӣ гуна таҳиягарон метавонанд мушкилотро ҳал кунанд ва коди худро ташкил кунанд. Ҳар як парадигма принсипҳо, усулҳо ва воситаҳои худро барои таҳияи нармафзор пешниҳод мекунад. Парадигмаҳои асосии барномасозӣ иборатанд аз:</p>
    <table>
        <thead>
          <tr>
            <th><p>Парадигма</p></th>
            <th><p>Тавсиф</p></th>
            <th><p>Мисол</p></th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td><p>Барномасозии проседурӣ</p></td>
                <td><p>Ташкили барнома дар атрофи проседураҳо ё функсияҳо</p></td>
                <td><p>Функсияҳо, проседураҳо</p></td>
              </tr>
              <tr>
                <td><p>Барномасозии ба объект нигаронидашуда (БОН)</p></td>
                <td><p>Ташкили барнома дар атрофи объектҳое, ки бо ҳамдигар амал мекунанд</p></td>
                <td><p>Синфҳо, объектҳо, мерос</p></td>
              </tr>
              <tr>
                <td><p>Барномасозии функсионалӣ</p></td>
                <td><p>Ташкили барнома дар атрофи функсияҳо ва таркибҳои онҳо</p></td>
                <td><p>Функсияҳои тартиботи олӣ, бастаҳо</p></td>
              </tr>
              <tr>
                <td><p>Барномасозии императивӣ</p></td>
                <td><p>Муайян кардани пайдарпаии дастурҳо барои иҷрои барнома</p></td>
                <td><p>Дастурамалҳо, сиклҳо, шартҳо</p></td>
              </tr>
              <tr>
                <td><p>Барномасозии декларативӣ</p></td>
                <td><p>Натичаи дилхоҳро тавсиф мекунад, на пайдарҳамии қадамҳои ба даст овардани он</p></td>
                <td><p>SQL, HTML, CSS</p></td>
              </tr>
        </tbody>
      </table>
        <h3>Барномасозии проседурӣ</h3>
        <p>Барномасозии проседурӣ. Дар ин парадигма, барнома ба маҷмӯи проседураҳо ё функсияҳое тақсим мешавад, ки вазифаҳои мушаххасро иҷро мекунанд. Проседураҳо барои иҷрои барнома пайдарпай даъват карда мешаванд.</p>
        <p>Мисол:</p>
        <pre><code>
        def calculate_area(length, width):
            area = length * width
            return area

        result = calculate_area(5, 4)
        print("Масоҳати росткунҷа:", result)
        </code></pre>
        <p>Натиҷа:</p>
        <pre><code>
            Масоҳати росткунҷа: 20
        </code></pre>
        <h3>Барномасозии ба объект нигаронидашуда (БОН)</h3>
        <p>Барномасозии ба объект нигаронидашуда (БОН). Ин парадигма ба мафҳуми объектҳо, ки намунаҳои синфҳо мебошанд, асос ёфтааст. Ҳар як объект дорои хосиятҳо (майдонҳо) ва усулҳо (функсияҳо) мебошад, ки метавонанд ҳолати худро тағир диҳанд ё бо дигар объектҳо ҳамкорӣ кунанд.</p>
        <p>Мисол:</p>
        <pre><code>
        class Rectangle:
            def __init__(self, length, width):
                self.length = length
                self.width = width
            
            def calculate_area(self):
                return self.length * self.width

        rectangle = Rectangle(5, 4)
        result = rectangle.calculate_area()
        print("Масоҳати росткунҷа:", result)
        </code></pre>
        <p>Натиҷа:</p>
        <pre><code>
            Масоҳати росткунҷа: 20
        </code></pre>
        <h3>Барномасозии функсионалӣ</h3>
        <p>Барномасозии функсионалӣ. Дар ин ҷо барномаҳо аз функсияҳое сохта мешаванд, ки моликияти мустақил будан аз маълумоти беруна ва таъсири тарафро доранд. Функсияҳо ҳамчун "объектҳои дараҷаи аввал" баррасӣ карда мешаванд, ки маънои онро дорад, ки онҳо метавонанд ҳамчун аргумент интиқол дода шаванд, аз дигар функсияҳо баргардонида шаванд ва дар тағирёбандаҳо нигоҳ дошта шаванд.</p>
        <p>Мисол:</p>
        <pre><code>
        def calculate_area(length, width):
            return length * width

        result = calculate_area(5, 4)
        print("Масоҳати росткунҷа:", result)
        </code></pre>
        <p>Натиҷа:</p>
        <pre><code>
            Масоҳати росткунҷа: 20
        </code></pre>
        <h3>Барномасозии императивӣ</h3>
        <p>Барномасозии императивӣ. Ин равишест, ки дар он барнома аз дастурҳое иборат аст, ки ба компютер чӣ гуна иҷрои вазифаро нишон медиҳанд. Дар ин ҷо барномасоз қадамҳоеро тавсиф мекунад, ки барои ба даст овардани натиҷаи дилхоҳ бояд риоя шаванд.</p>
        <p>Мисол:</p>
        <pre><code>
        numbers = [1, 2, 3, 4, 5]
        total = 0

        for num in numbers:
            total += num

        print("Ҷамъи рақамҳо:", total)
        </code></pre>
        <p>Натиҷа:</p>
        <pre><code>
            Ҷамъи рақамҳо: 15
        </code></pre>
        <h3>Барномасозии декларативӣ</h3>
        <p>Барномасозии декларативӣ. Барнома тасвир мекунад, ки чӣ кор кардан лозим аст, на ин ки чӣ тавр бояд кард. Дар ин парадигма, барномасоз натиҷаи дилхоҳро муайян мекунад, на пайдарпаии қадамҳо барои ноил шудан ба он.</p>
        <p>Мисол:</p>
        <pre><code>
        numbers = [1, 2, 3, 4, 5]
        squares = [num ** 2 for num in numbers]
        print("Мураббаъҳои рақамҳо:", squares)
        </code></pre>
        <p>Натиҷа:</p>
        <pre><code>
            Мураббаъҳои рақамҳо: [1, 4, 9, 16, 25]
        </code></pre>
    <h3>Маводҳо барои мутоила:</h3>
    <ul>
        <li><p>"Углубленный курс информатики" / Долганов Игорь Михайлович <a href="https://portal.tpu.ru/SHARED/d/DOLGANOVIM/teaching/Tab4/Lec-01.pdf">(скачать PDF)</a></p></li>
        <li><p>"Python 3 Text Processing with NLTK 3 Cookbook" by Jacob Perkins <a href="https://budditha.files.wordpress.com/2021/04/python-3-text-processing-with-nltk-3-cookbook.pdf">(скачать PDF)</a></p></li>
        <li><p>"Python для сетевых инженеров" / Наташа Самойленко <a href="https://pyneng.readthedocs.io/_/downloads/ru/latest/pdf/">(скачать PDF)</a></p></li>
    </ul>
    <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
    <ul>
        <li><p><a href="https://translated.turbopages.org/proxy_u/en-ru.ru.f65ffb56-66013382-876a5954-74722d776562/https/www.geeksforgeeks.org/programming-paradigms-in-python/">Programming Paradigms in Python</a></p></li>
        <li><p><a href="https://www.pickl.ai/blog/types-of-programming-paradigms-in-python/">Types of Programming Paradigms in Python You Should Know</a></p></li>
        <li><p><a href="https://www.codespeedy.com/programming-paradigms-in-python/#google_vignette">Programming paradigms in Python</a></p></li>
    </ul>
    <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
    <ul>
        <li><p><a href="https://www.udemy.com/course/python-solid-principles-and-top-design-patterns/?couponCode=LETSLEARNNOW">Python: SOLID Principles and Top Design Patterns</a></p></li>
        <li><p><a href="https://www.edx.org/learn/computer-science/massachusetts-institute-of-technology-introduction-to-computer-science-and-programming-using-python">Introduction to Computer Science and Programming Using Python</a></p></li>
        <li><p><a href="https://www.coursera.org/specializations/python">Python for Everybody Specialization</a></p></li>
    </ul>
    <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
    <ul>
        <li><p><a href="https://ru.hexlet.io/courses/python-declarative-programming?ysclid=lu6ok72xtx745007069">Python: Декларативное программирование</a></p></li>
        <li><p><a href="https://pythoncourse.ru/?ysclid=lu6omwb49k504804877">Python-разработчик от Junior до Middle</a></p></li>
        <li><p><a href="https://diveintopython.org/learn/classes/dunder-magic-methods">Парадигмы программирования</a></p></li>
    </ul>
    <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
    <ul>
        <li><p><a href="https://www.reddit.com/r/Python/?rdt=60471">Reddit</a></p></li>
        <li><p><a href="https://www.python.org/community/forums/">Python.org</a></p></li>
        <li><p><a href="https://standart-itdpo.ru/lessons/paradigmy-programmirovaniya/">Сyberforum</a></p></li>
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