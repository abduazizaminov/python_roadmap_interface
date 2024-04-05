<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Decorators - Декораторҳо</h1>
    <p>Декоратор - функсияест, ки вазифаи дигарро мегирад ва версияи тағирёфтаи онро бармегардонад.</p>
    <h4>Мисол:</h4>
    <pre><code>
        def make_pretty(func):
            def inner():
                print("I got decorated")
                func()
            return inner
    
    def ordinary():
        print("I am ordinary")
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        I am ordinary
    </code></pre>
    <p>Дар ин ҷо мо ду функсия эҷод кардем:</p>
    <ul>
        <li>функсияи ordinary(), ки чопи <code>I am ordinary</code> мебарорад;</li>
        <li>функсияи make_pretty(), ки функсияро ҳамчун аргумент қабул мекунад, дорои функсияи inner() мебошад ва онро бармегардонад.</li>
    </ul>
    <p>Мо функсияи ordinary()-ро ба таври муқаррарӣ фарёд менамоем, бинобар ин натиҷа <code>I am ordinary</code> мебарояд. Акнун биёед онро бо истифода аз функсияи декоратор фарёд кунем:</p>
    <pre><code>
        def make_pretty(func):
            # Муайян кардани функсияи дохилӣ 
            def inner():
                # Илова кардани функсионал
                print("I got decorated")
        
                # Фарёд кардани функсияи аслӣ
                func()
            # Баргардонидани функсияи дохилӣ
            return inner
        
        # Муайян кардани функсияи муқаррарӣ
        def ordinary():
            print("I am ordinary")
            
        # Эҷод кардани функсияи декоратор
        decorated_func = make_pretty(ordinary)
        
        # Фарёд кардани функсияи декоратор
        decorated_func()
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        I got decorated
        I am ordinary
    </code></pre>
    <p>Дар ин ҷо функсияи make_pretty() декоратор аст. Ба сатри коди зерин диққат диҳед:</p>
    <pre><code>
        decorated_func = make_pretty(ordinary)
    </code></pre>
    <p>Мо ordinary()-ро ҳамчун аргумент ба make_pretty() мегузорем. Функсияи make_pretty() функсияи дохилии inner()-ро, ки ба тағирёбандаи <code>decorated_func</code> таъин шудааст, бармегардонад.</p>
    <p>Дар сатри навбатии код мо воқеан функсияи inner() -ро даъват мекунем:</p>
    <pre><code>
        decorated_func()
    </code></pre>
    <h3>Символи @ бо декоратор</h3>
    <p>Ба ҷои таъин кардани фарёди функсия ба тағирёбанда, Python роҳи дигарро барои иҷро кардани ҳамон кор бо истифода аз аломати @ пешниҳод мекунад. Масалан:</p>
    <pre><code>
        def make_pretty(func):
 
            def inner():
                print("I got decorated")
                func()
            return inner
        
        @make_pretty
        def ordinary():
            print("I am ordinary")
        
        ordinary()
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        I got decorated
        I am ordinary
    </code></pre>
    <p>Дар ин ҷо, функсияи ordinary() бо декоратори make_pretty() бо истифода аз синтаксиси <code>@make_pretty</code> пайваст карда мешавад, ки он ба изҳороти <code>ordinary = make_pretty(ordinary)</code> баробар аст.</p>
    <h3>Декораторҳо ва функсияҳо бо параметрҳо</h3>
    <p>Декоратори овардашуда - оддӣ аст ва танҳо дар функсияҳое кор мекунад, ки параметр надоранд. Чӣ мешавад, агар мо функсияҳое дошта бошем, ки дорои параметрҳо мебошанд. Масалан:</p>
    <pre><code>
        def divide(a, b):
            return a/b
    </code></pre>
    <p>Ин функсия ду параметр дорад: a ва b. Мо медонем, ки агар мо 0-ро ҳамчун аргументи b муайян кунем, он иштибоҳ бармегардонад.</p>
    <p>Акнун биёед декоратор созем, то ҳолатеро санҷем, ки боиси хатогӣ мегардад (тақсим ба 0):</p>
    <pre><code>
        def smart_divide(func):
            def inner(a, b):
                print("I am going to divide", a, "and", b)
                if b == 0:
                    print("Whoops! cannot divide")
                    return
        
                return func(a, b)
            return inner
        
        @smart_divide
        def divide(a, b):
            print(a/b)
        
        divide(2,5)
        
        divide(2,0)
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        I am going to divide 2 and 5
        0.4
        I am going to divide 2 and 0
        Whoops! cannot divide
    </code></pre>
    <p>Ҳангоми фарёди <code>divide(2,5)</code> функсияи inner(), ки дар декоратори smart_divide() муайян шудааст, фарёд мешавад. Азбаски аргументи дуюм 0 нест, функсияи inner() идораро ба функсияи аслии divide() бармегардонад, пас аргументҳои <b>2</b> ва <b>5</b>-ро мегузаронад ва функсияи divide() натиҷаро <b>0.4</b> арзёбӣ мекунад.</p>
    <p>Ба ҳамин монанд, вақте ки divide() бо аргументҳои <b>2</b> ва <b>0</b> фарёд карда мешавад, inner() <b>0</b> будани <code>b</code>-ро месанҷад ва пеш аз баргардонидани <code>None</code>> паёми хаторо чоп мекунад.</p>
    <h3>Занҷири декораторҳо дар Python</h3>
    <p>Дар Python, шумо метавонед декоратори сершуморро якҷоя кунед. Барои сохтани як занҷири декоратор, мо метавонем декоратори сершуморро ба як функсия истифода бурда, онҳоро паси ҳамдигар ҷойгир кунем.</p>
    <pre><code>
        def star(func):
            def inner(*args, **kwargs):
                print("*" * 15)
                func(*args, **kwargs)
                print("*" * 15)
            return inner
        
        def percent(func):
            def inner(*args, **kwargs):
                print("%" * 15)
                func(*args, **kwargs)
                print("%" * 15)
            return inner
        
        @star
        @percent
        def printer(msg):
            print(msg)
        
        printer("Hello")
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        ***************
        %%%%%%%%%%%%%%%
        Hello
        %%%%%%%%%%%%%%%
        ***************
    </code></pre>
    <h4>Қисми код:</h4>
    <pre><code>
        @star
        @percent
        def printer(msg):
            print(msg)
    </code></pre>
    <h4>баробар ба</h4>
    <pre><code>
        def printer(msg):
            print(msg)
        printer = star(percent(printer))
    </code></pre>
    <h3>Маводҳо барои мутоила:</h3>
    <ul>
        <li>"Intermediate Python" by Muhammad Yasoob Ullah Khalid <a href="https://coddyschool.com/upload/Intermediate_Python_M_Khalid_proglib.pdf?ysclid=luc54d9rn7818076063">(скачать PDF)</a></li>
        <li>"Python: большая книга примеров" / А. Л. Марченко <a href="https://msupress.com/ebook/978-5-19-011853-7_e-book.pdf?ysclid=luc55ftqkw715683301">(скачать PDF)</a></li>
        <li>"Learning Python" by Mark Lutz <a href="https://k0d.cc/storage/books/PYTHON/Learning%20Python,%204th%20Edition%20[Mark%20Lutz]%20(2009)/Learning.Python.4th.Edition.Mark.Lutz.2009.pdf">(скачать PDF)</a></li>
    </ul>
    <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
    <ul>
        <li><a href="https://ravesli.com/decorators-python/?ysclid=ltxu53rfkk420377491">Декораторы в Python</a></li>
        <li><a href="https://habr.com/ru/companies/otus/articles/727590/">Декораторы Python: пошаговое руководство</a></li>
        <li><a href="https://skillbox.ru/media/code/gotovimsya_k_sobesedovaniyu_chto_takoe_dekoratory_v_python/?ysclid=ltxu7b6gv0398029657">Готовимся к собеседованию: что такое декораторы в Python</a></li>
    </ul>
    <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
    <ul>
        <li><a href="https://www.udemy.com/course/decorators-in-python/">Decorators in Python</a></li>
        <li><a href="https://www.udemy.com/course/intermediate-python-master-decorators-from-scratch/?couponCode=LETSLEARNNOW">Intermediate Python: Master Decorators From Scratch</a></li>
        <li><a href="https://www.coursera.org/projects/python-decorator-functions">Python Decorator Functions</a></li>
    </ul>
    <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
    <ul>
        <li><a href="https://matesanz.github.io/python-machine-learning-course/%F0%9F%93%9A-Tutorials/%F0%9F%90%8D-Python-Basics/decorators/">Python for Machine Learning Course</a></li>
        <li><a href="https://egoroffartem.pythonanywhere.com/course/python/dekoratory-v-python-chast-1">Декораторы в Python</a></li>
        <li><a href="https://realpython.com/courses/python-decorators-101/">Python Decorators 101</a></li>
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