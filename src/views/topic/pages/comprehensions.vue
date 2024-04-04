<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>List Comprehensions - Абстраксияи рӯйхат</h1>
    <p>Абстраксияи рӯйхат - роҳи муайян кардан ва сохтани рӯйхатҳо дар асоси рӯйхатҳои мавҷуда мебошад. Синтаксиси абстраксияи рӯйхат дар Python ин аст:</p>
    <pre><code>
        [ифода for элемент in рӯйхат]
    </code></pre>
    <h4>Мисоли №1: Итератсия дар болои сатр бо истифода аз сикли for:</h4>
    <pre><code>
        h_letters = []
        
        for letter in 'human':
            h_letters.append(letter)
        
        print(h_letters)
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        ['h', 'u', 'm', 'a', 'n']
    </code></pre>
    <h4>Мисоли №2: Итератсия дар болои сатр бо истифода аз абстраксияи рӯйхат:</h4>
    <pre><code>
        h_letters = [ letter for letter in 'human' ]
        print( h_letters)
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        ['h', 'u', 'm', 'a', 'n']
    </code></pre>
    <p>Дар ин ҷо ба тағирёбандаи <code>h_letters</code> рӯйхати нав таъин карда мешавад, ки элементҳои сатри такроршавандаи <code>'human'</code>-ро дар бар мегирад. Агар шумо аҳамият диҳед, <code>'human'</code> - сатр аст, на рӯйхат. Ин қувваи абстраксияи рӯйхат аст. Он метавонад ҳангоми қабули сатр ё наворро муайян кунад ва ба ин объект ҳамчун рӯйхат муносибат кунад.</p>
    <h3>Рӯйхати абстраксия vs. функсияҳои ламбда</h3>
    <p>Абстраксияи рӯйхат роҳи ягонаи кор бо рӯйхатҳо нест. Функсияҳои гуногуни дарунсохт ва функсияҳои лямбда ба шумо имкон медиҳанд, ки рӯйхатҳоро дар сатрҳои камтари код созед ва тағир диҳед.</p>
    <h4>Мисоли №3: Истифодаи функсияҳои ламбда дар дохили рӯйхат:</h4>
    <pre><code>
        letters = list(map(lambda x: x, 'human'))
        print(letters)
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        ['h', 'u', 'm', 'a', 'n']
    </code></pre>
    <p>Одатан абстраксияи рӯйхат нисбат ба функсияҳои лямбда хондашавандатар аст. Фаҳмидани он осонтар аст, ки барномасоз ба чӣ ноил шудан мехоҳад.</p>
    <h3>Шартҳо дар абстраксияи рӯйхат</h3>
    <p>Дар абстраксияи рӯйхат, шумо метавонед шартҳоро барои тағир додани рӯйхати мавҷуда (ё наворҳои дигар) истифода баред.</p>
    <p>Мисоли №4: Истифодаи if дар абстраксияи рӯйхат:</p>
    <pre><code>
        number_list = [ x for x in range(20) if x % 2 == 0]
        print(number_list)
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
    </code></pre>
    <p>Агар арзиши элемент ба 2 тақсим карда шавад, рӯйхати <code>number_list</code> бо элементҳо дар диапазони аз 0 то 19 пур карда мешавад.</p>
    <h4>Мисоли №5: if-и ҷойгиршуда дар абстраксияи рӯйхат:</h4>
    <pre><code>
        num_list = [y for y in range(100) if y % 2 == 0 if y % 5 == 0]
        print(num_list)
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
    </code></pre>
    <h4>Дар ин ҷо рӯйхати абстраксия тафтиш мекунад:</h4>
    <ul>
        <li>Оё <code>y</code> ба 2 тақсим мешавад ё не?</li>
        <li>Оё <code>y</code> ба 5 тақсим мешавад ё не?</li>
    </ul>
    <p>Агар <code>y</code> ҳарду шартро қонеъ гардонад, <code>y</code> ба <code>num_list</code> илова карда мешавад.</p>
    <h4>Мисоли №6: if…else дар абстраксияи рӯйхат:</h4>
    <pre><code>
        obj = ["Even" if i%2==0 else "Odd" for i in range(10)]
        print(obj)
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        ['Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd']
    </code></pre>
    <p>Дар ин ҷо абстраксияи рӯйхат 10 ададро аз 0 то 9 тафтиш мекунад. Агар <code>i</code> ба 2 тақсимшаванда бошад, он гоҳ <code>Even</code> ба рӯйхати <code>obj</code> илова карда мешавад. Агар не, пас <code>Odd</code> илова карда мешавад.</p>
    <h3>Сиклҳои ҷойгиршуда дар абстраксияи рӯйхат</h3>
    <p>Фарз мекунем, ки ба мо лозим аст, ки транспозитсияи матритсаро ҳисоб кунем, ки ин истифодаи сикли ҷойгиршудаи for-ро талаб мекунад.</p>
    <p>Мисоли №7: Транспозитсияи матритса бо истифода аз сикли for:</p>
    <pre><code>
        transposed = []
        matrix = [[1, 2, 3, 4], [4, 5, 6, 8]]
        
        for i in range(len(matrix[0])):
            transposed_row = []
        
            for row in matrix:
                transposed_row.append(row[i])
            transposed.append(transposed_row)
        
        print(transposed)
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        [[1, 4], [2, 5], [3, 6], [4, 8]]
    </code></pre>
    <h4>Мисоли №8: Транспозитсияи матритса бо истифода аз абстраксияи рӯйхат:</h4>
    <pre><code>
        matrix = [[1, 2], [3,4], [5,6], [7,8]]
        transpose = [[row[i] for row in matrix] for i in range(2)]
        print (transpose)
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        [[1, 3, 5, 7], [2, 4, 6, 8]]
    </code></pre>
    <h4>Дар ин ҷо мо як тағирёбандаи <code>matrix</code> дорем, ки 4 сатр ва 2 сутун дорад. Мо бояд транспозитсияи матритсаро пайдо кунем. Барои ин мо абстраксияи рӯйхатро истифода бурдем.</h4>
    <h3>Нуқтаҳои асосӣ</h3>
    <ul>
        <li>Абстраксияи рӯйхат - роҳи муайян кардан ва сохтани рӯйхатҳо дар асоси рӯйхатҳои мавҷуда мебошад.</li>
        <li>Абстраксияи рӯйхат одатан назар ба функсияҳо ва сиклҳои муқаррарӣ барои сохтани рӯйхат паймонтар ва тезтар аст.</li>
        <li>Шумо бояд аз навиштани рӯйхатҳои хеле дароз дар як сатр бо истифода аз абстраксияи рӯйхат худдорӣ кунед, то коди шумо хонда шавад.</li>
        <li>Дар хотир доред, ки ҳар як абстраксияи рӯйхатро бо истифода аз сикли for аз нав навиштан мумкин аст, аммо на ҳар як сикли for-ро бо абстраксияи рӯйхат аз нав навиштан мумкин аст.</li>
    </ul>
    <h2>Маводҳо барои мутоила:</h2>
    <ul>
        <li>"Углубленный курс информатики" / Долганов Игорь Михайлович <a href="https://portal.tpu.ru/SHARED/d/DOLGANOVIM/teaching/Tab4/Lec-01.pdf">(скачать PDF)</a></li>
        <li>"Python 3 Text Processing with NLTK 3 Cookbook" by Jacob Perkins <a href="https://budditha.files.wordpress.com/2021/04/python-3-text-processing-with-nltk-3-cookbook.pdf">(скачать PDF)</a></li>
        <li>"Python для сетевых инженеров" / Наташа Самойленко <a href="https://pyneng.readthedocs.io/_/downloads/ru/latest/pdf/">(скачать PDF)</a></li>
    </ul>
    <h2>Интернет – сомонаҳо бо маводҳо барои мутоила:</h2>
    <ul>
        <li><a href="https://pavel-karateev.gitbook.io/intermediate-python/funkcionalnoe-programmirovanie/comprehensions">Абстракция списков</a></li>
        <li><a href="https://medium.com/@rajputgajanan50/list-abstract-data-types-in-python-f48e32897f41">List Abstract Data Types in Python</a></li>
        <li><a href="https://devhops.ru/code/python/collections/list/comprehension/?ysclid=lu44niy4t6827777888">Абстракция списка Python</a></li>
    </ul>
    <h2>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h2>
    <ul>
        <li><a href="https://www.coursera.org/learn/python-data">Python Data Structures</a></li>
        <li><a href="https://www.edx.org/learn/computer-science/massachusetts-institute-of-technology-introduction-to-computer-science-and-programming-using-python">Introduction to Computer Science and Programming Using Python</a></li>
        <li><a href="https://www.coursera.org/specializations/python">Python for Everybody Specialization</a></li>
    </ul>
    <h2>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h2>
    <ul>
        <li><a href="https://www.coursera.org/learn/python-crash-course?irclickid=R3pV0gTbBxyPTmMyFW0goTZdUkHUiRXMt3WCVc0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=2213668&utm_content=b2c">Crash Course on Python</a></li>
        <li><a href="https://ru.hexlet.io/courses/python-declarative-programming">Python: Декларативное программирование</a></li>
        <li><a href="https://www.linkedin.com/learning/learning-python-14393370">Learning Python</a></li>
    </ul>
    <h2>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h2>
    <ul>
        <li><a href="https://www.reddit.com/r/Python/?rdt=60471">Reddit</a></li>
        <li><a href="https://www.python.org/community/forums/">Python.org</a></li>
        <li><a href="https://www.cyberforum.ru/python/?ysclid=ltwhrrore5900284198">Сyberforum</a></li>
    </ul>
    <h2>Муҳити коркарди нармафзор:</h2>
    <ul>
        <li><a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a></li>
        <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
        <li><a href="https://jupyter.org/">Jupyter</a></li>
    </ul>
    <h2>Онлайн муҳити санҷиши коди барномавӣ:</h2>
    <ul>
        <li><a href="https://www.online-ide.com/online_python_compiler#google_vignette">Online Python Compiler - OnlineIDE</a></li>
        <li><a href="https://bio-python.netlify.app/">Online Python - IDE, Editor, Compiler, Interpreter</a></li>
        <li><a href="https://pythoncompiler.com/">Python Compiler</a></li>
    </ul>
    <h2>Библиотека ва фреймворкҳои истифодашуда:</h2>
    <ul>
        <li><a href="https://docs.python.org/3/library/index.html">The Python Standard Library</a></li>
    </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import  '@/assets/pages.css'
</style>