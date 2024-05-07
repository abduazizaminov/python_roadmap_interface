<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Lambdas - Лямбдаҳо</h1>
          <h5>Таҳиягар: Қосимова С.Д.</h5>
    <p>Функсияи ламбда (ё "функсияи анонимӣ") - намуди махсуси функсия бе ном аст. Масалан:</p>
    <pre><code>
        lambda : print('Hello, World!')
    </code></pre>
    <p>Дар ин ҷо мо функсияи ламбдаро сохтем, ки матни <code>Hello, World!</code>-ро мебарорад.</p>
    <h3>Эълон кардани функсияи ламбда дар Python</h3>
    <p>Калимаи калидии lambda (ба ҷои <code>def</code>) барои сохтани функсияи ламбда истифода мешавад. Синтаксиси эълон кардани функсияи ламбда:</p>
    <pre><code>
        lambda аргумент(ҳо) : ифода 
    </code></pre>
    <h4>Дар ин ҷо:</h4>
    <ul>
        <li>><code>аргумент(ҳо)</code> - ҳама гуна арзише, ки ба функсияи ламбда дода мешавад;</li>
        <li>><code>ифода</code> - ин изҳороте, ки иҷро ва баргардонида мешавад.</li>
    </ul>
    <h4>Мисол дида мебароем:</h4>
    <pre><code>
        greet = lambda : print('Hello, World!')
    </code></pre>
    <p>Дар ин ҷо мо функсияи ламбдаро муайян кардем, ки онро ба тағирёбандаи <code>greet</code> таъин кардем.</p>
    <p>Барои иҷрои ин функсияи ламбда, мо бояд онро даъват кунем. Ин аст, ки чӣ тавр мо метавонем функсияи ламбдаро даъват намоем:</p>
    <pre><code>
        # Фарёд кардани функсияи ламбда
        greet()
    </code></pre>
    <p>Функсияи ламбда, ки дар боло овардашуда буд, матни <code>Hello, World!</code>-ро мебарорад.</p>
    <p>Мисоли даъват кардани функсияи ламбдаро дар Python дида мебароем:</p>
    <pre><code>
        # Эълон кардани функсияи ламбда
        greet = lambda : print('Hello, World!')
        
        # Фарёд кардани функсияи ламбда
        greet()
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        Hello, World!
    </code></pre>
    <p>Дар ин ҷо мо функсияи ламбдаро муайян кардем ва онро ба тағирёбандаи <code>greet</code> додем. Вақте ки мо функсияи ламбдаро фарёд мекунем, функсияи print() дар дохили функсияи ламбда иҷро мешавад.</p>
    <h3>Функсияи ламбда бо аргументҳо дар Python</h3>
    <p>Мисли функсияҳои муқаррарӣ, функсияи ламбда низ метавонад аргументҳоро қабул кунад. Масалан:</p>
    <pre><code>
        # Функсияи ламбда, ки 1 аргумент мегирад
        greet_user = lambda name : print('Hey there,', name)
        
        # Фарёд кардани функсияи ламбда
        greet_user('Delilah')
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        Hey there, Delilah
    </code></pre>
    <p>Дар ин ҷо мо вазифаи ламбдаро ба тағирёбандаи <code>greet_user</code> таъин кардем. <code>name</code> пас аз калимаи калидии ламбда нишон медиҳад, ки функсияи ламбда аргументро бо номи <code>name</code> мегирад.</p>
    <p>Ба фарёд кардани функсияи ламбда диққат диҳед:</p>
    <pre><code>
        greet_user('Delilah')
    </code></pre>
    <p>Дар ин ҷо мо арзиши сатри <code>Delilah</code>-ро ба функсияи лямбдаамон, ки ба аргументи <code>name</code> мувофиқат мекунад, гузоштем.</p>
    <h3>Истифодабарии функсияи ламбда бо filter()</h3>
    <p>Функсияи filter() дар Python ҳамчун аргумент функсия, рӯйхатҳо, наворҳо ва сатрҳоро мегирад. Функсия бо ҳамаи элементҳои рӯйхат даъват карда мешавад ва рӯйхати наве бармегардад, ки дорои элементҳое мебошад, ки функсия барои онҳо <code>True</code> муайян кардааст.</p>
    <h4>Масалан:</h4>
    <pre><code>
        # Барномаи филтри элементҳои ҷуфти рӯйхат
        my_list = [1, 5, 4, 6, 8, 11, 3, 12]
        
        new_list = list(filter(lambda x: (x%2 == 0) , my_list))
        
        print(new_list)
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        [4, 6, 8, 12]
    </code></pre>
    <p>Дар ин ҷо функсияи filter() танҳо рақамҳои ҷуфтро аз рӯйхат бармегардонад.</p>
    <h3>Истифодабарии функсияи ламбда бо map()</h3>
    <p>Функсияи map() дар Python ҳамчун аргумент функсия, рӯйхатҳо, наворҳо ва сатрҳоро мегирад. Функсия бо ҳамаи элементҳои рӯйхат даъват карда мешавад ва рӯйхати наве бармегардад, ки дорои элементҳои аз ҷониби ин функсия барои ҳар як элемент баргардонидашуда мебошад.</p>
    <h4>Масалан:</h4>
    <pre><code>
        # Барнома барои дучанд кардани арзиши ҳар як элементи рӯйхат бо истифода аз функсияи map()
 
        my_list = [1, 5, 4, 6, 8, 11, 3, 12]
        
        new_list = list(map(lambda x: x * 2 , my_list))
        
        print(new_list)
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        [2, 10, 8, 12, 16, 22, 6, 24]
    </code></pre>
    <p>Дар ин ҷо функсияи map() арзишҳои элементҳои рӯйхатро дучанд мекунад.</p>
    <h3>Маводҳо барои мутоила:</h3>
    <ul>
        <li>"Functional Programming in Python" by David Mertz <a href="https://theswissbay.ch/pdf/Books/Computer%20science/O%27Reilly/functional-programming-python.pdf">(скачать PDF)</a></li>
        <li>"Хендбук Python" <a href="https://docs.yandex.ru/docs/view?tm=1711685972&tld=ru&lang=ru&name=python-handbook.pdf&text=%22%D0%A5%D0%B5%D0%BD%D0%B4%D0%B1%D1%83%D0%BA%20Python%22&url=https%3A%2F%2Fromankurnovskii.com%2Fhandbooks%2Fpython-handbook.pdf&lr=10322&mime=pdf&l10n=ru&sign=dce5924972fb06053a930b5d09ced3cb&keyno=0&nosw=1&serpParams=tm%3D1711685972%26tld%3Dru%26lang%3Dru%26name%3Dpython-handbook.pdf%26text%3D%2522%25D0%25A5%25D0%25B5%25D0%25BD%25D0%25B4%25D0%25B1%25D1%2583%25D0%25BA%2BPython%2522%26url%3Dhttps%253A%2F%2Fromankurnovskii.com%2Fhandbooks%2Fpython-handbook.pdf%26lr%3D10322%26mime%3Dpdf%26l10n%3Dru%26sign%3Ddce5924972fb06053a930b5d09ced3cb%26keyno%3D0%26nosw%3D1">(скачать PDF)</a></li>
        <li>"Простой Python. Современный стиль программирования" / Любанович Бил <a href="https://pydarslik.pythonanywhere.com/media/resource_file/%D0%91%D0%B8%D0%BB%D0%BB_%D0%9B%D1%8E%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87_%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9_Python_%D0%91%D0%B5%D1%81%D1%82%D1%81%D0%B5%D0%BB%D0%BB%D0%B5%D1%80%D1%8B.pdf">(скачать PDF)</a></li>
    </ul>
    <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
    <ul>
        <li><a href="https://proglib.io/p/samouchitel-po-python-dlya-nachinayushchih-chast-12-anonimnye-funkcii-2023-01-16">Самоучитель по Python для начинающих. Часть 12: Анонимные функции</a></li>
        <li><a href="https://medium.com/edureka/python-lambda-b84d68d449a0">Learn About Python Lambda Functions and How to Use Them</a></li>
        <li><a href="https://habr.com/ru/companies/piter/articles/674234/">Лямбда-функция в Python простыми словами</a></li>
    </ul>
    <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
    <ul>
        <li><a href="https://www.udemy.com/course/lambda-expressions-in-python/?couponCode=LETSLEARNNOW">Lambda Expressions in Python</a></li>
        <li><a href="https://translated.turbopages.org/proxy_u/en-ru.ru.48f240bd-65f928c1-56213c43-74722d776562/https/www.udemy.com/course/build-and-deploy-lambda-functions-aws-with-python-and-boto3/">Build and Deploy Lambda Functions: AWS with Python and Boto3</a></li>
        <li><a href="https://www.coursera.org/projects/where-why-and-how-of-lambda-functions-in-python">Where, Why, and How of Lambda Functions in Python</a></li>
    </ul>
    <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
    <ul>
        <li><a href="https://matesanz.github.io/python-machine-learning-course/%F0%9F%93%9A-Tutorials/%F0%9F%90%8D-Python-Basics/decorators/">Python for Machine Learning Course</a></li>
        <li><a href="https://metanit.com/python/tutorial/2.18.php?ysclid=ltxyptuyr727230899">Лямбда-выражения</a></li>
        <li><a href="https://timosii.gitbook.io/py_tutorial/funkcii/funkcionalnoe-programmirovanie">Функциональное программирование</a></li>
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