<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Methods And Dunder - Методҳо ва dunder-методҳо</h1>
    <p>Дар Python методҳо ва dunder-методҳо дар барномасозии ба объект нигаронидашуда нақши калидӣ доранд, ки рафтори махсусро барои объектҳо ва тарзи мутақобилаи онҳо бо дигар объектҳо ва операторҳои дарунсохт таъмин мекунанд.</p>
    <h3>Методҳо</h3>
    <p>Методҳои нусхабардорӣ (Instance methods) - функсияҳое мебошанд, ки дар дохили синф муайян карда мешаванд ва метавонанд дар маълумоти объекти мушаххаси он синф кор кунанд. Онҳо ба ҳолати объект тавассути параметри махсуси <code>self</code> дастрасӣ доранд, ки намунаи ҷории синфро ифода мекунад. Ин методҳо дар мисолҳои мушаххаси синф даъват карда мешаванд ва барои иҷрои амалҳо ё амалҳои хоси ҳар як объект истифода мешаванд.</p>
    <p>Методҳои статикӣ (Static methods) - функсияҳое мебошанд, ки дар дохили синф муайян карда мешаванд, аммо онҳо ба маълумоти объекти синф тавассути параметри <code>self</code> дастрасӣ надоранд. Онҳо ба як мисоли мушаххаси синф алоқаманд нестанд ва онҳоро ҳам тавассути худи синф ва ҳам тавассути мисолҳои он даъват кардан мумкин аст. Ин методҳо маъмулан барои иҷрои амалҳое истифода мешаванд, ки бо синф дар маҷмӯъ алоқаманданд, на бо объектҳои мушаххаси дохили он.</p>
    <p>Методҳои синф (Class methods) - функсияҳое мебошанд, ки дар дохили синф муайян шудаанд ва ба синф дар маҷмӯъ дастрасӣ доранд, на ба мисолҳои мушаххаси он. Онҳо метавонанд бо синф тавассути параметри <code>cls</code> ба ҷои <code>self</code>, ки ба онҳо имкон медиҳад, ки бо атрибутҳо ва методҳои синф ҳамкорӣ кунанд. Ин методҳо аксар вақт барои иҷро кардани амалиётҳое истифода мешаванд, ки бо синф дар маҷмӯъ алоқаманданд, на бо мисолҳои мушаххаси он.</p>
    <h3>Dunder-методҳо</h3>
    <table>
      <thead>
        <tr>
            <th>Метод</th>
            <th>Вазифа</th>
        </tr>

      </thead>
        <tr>
            <td><p><code>__init__(self[, ...])</code></p></td>
            <td>Инитсиализатсияи объект ҳангоми сохтани он.</td>        
        </tr>
        <tr>
            <td><p><code>__del__(self)</code></p></td>
            <td>Озодшавии ресурсҳои объект ҳангоми нест кардани он.</td>
        </tr>
        <tr>
            <td><p><code>__str__(self)</code></p></td>
            <td>Бозгашти сатри объект, ки аз ҷониби функсияи <code>str()</code> истифода мебарад.</td>
        </tr>
        <tr>
            <td><p><code>__repr__(self)</code></p></td>
            <td>Бозгашти объект, ки аз ҷониби функсияи <code>repr()</code> истифода мебарад.</td>
        </tr>
        <tr>
            <td><p><code>__len__(self)</code></p></td>
            <td>Бозгашти дарозии объект, ки аз ҷониби функсияи <code>len()</code> истифода мебарад.</td>
        </tr>
        <tr>
            <td><p><code>__getitem__(self, key)</code></p></td>
            <td>Гирифтани элемент аз рӯи индекс ё ​​калид.</td>
        </tr>
        <tr>
            <td><p><code>__setitem__(self, key, value)</code></p></td>
            <td>Таъин кардани арзиш ба элемент аз рӯи индекс ё ​​калид.</td>
        </tr>
        <tr>
            <td><p><code>__delitem__(self, key)</code></p></td>
            <td>Хориҷ кардани элемент аз рӯи индекс ё ​​калид.</td>
        </tr>
        <tr>
            <td><p><code>__iter__(self)</code></p></td>
            <td>Итераторро барои объект бармегардонад.</td>
        </tr>
        <tr>
            <td><p><code>__next__(self)</code></p></td>
            <td>Элементи навбатии итераторро бармегардонад.</td>
        </tr>
        <tr>
            <td><p><code>__contains__(self, item)</code></p></td>
            <td>Тафтиш мекунад, ки оё объект дорои элементи муайяншуда аст.</td>
        </tr>
        <tr>
            <td><p><code>__eq__(self, other)</code></p></td>
            <td>Тафтиши баробарии ду объект (<code>==</code>).</td>
        </tr>
        <tr>
            <td><p><code>__ne__(self, other)</code></p></td>
            <td>Тафтиши нобаробарии байни ду объект (<code>!=</code>).</td>
        </tr>
        <tr>
            <td><p><code>__lt__(self, other)</code></p></td>
            <td>Тафтиши камтар аз (<code>&lt;</code>).</td>
        </tr>
        <tr>
            <td><p><code>__le__(self, other)</code></p></td>
            <td>Тафтиши камтар ё баробар (<code>&lt;=</code>).</td>
        </tr>
        <tr>
            <td><p><code>__gt__(self, other)</code></p></td>
            <td>Тафтиши бештар аз (<code>&gt;</code>).</td>
        </tr>
        <tr>
            <td><p><code>__ge__(self, other)</code></p></td>
            <td>Тафтиши бештар ё баробар (<code>&gt;=</code>).</td>
        </tr>
        <tr>
            <td><p><code>__add__(self, other)</code></p></td>
            <td>Ҷамъшавии объектҳо (<code>+</code>).</td>
        </tr>
        <tr>
            <td><p><code>__sub__(self, other)</code></p></td>
            <td>Тарҳи объектҳо (<code>-</code>).</td>
        </tr>
        <tr>
            <td><p><code>__mul__(self, other)</code></p></td>
            <td>Зарбкунии объектҳо (<code>*</code>).</td>
        </tr>
        <tr>
            <td><p><code>__truediv__(self, other)</code></p></td>
            <td>Тақсимоти объектҳо (<code>/</code>).</td>
        </tr>
        <tr>
            <td><p><code>__floordiv__(self, other)</code></p></td>
            <td>Тақсимоти бутуни объектҳо (<code>//</code>).</td>
        </tr>
        <tr>
            <td><p><code>mod(self, other)</code></p></td>
            <td>Боқимонда аз тақсимоти объектҳо (<code>%</code>).</td>
        </tr>
        <tr>
            <td><p><code>pow(self, other[, modulo])</code></p></td>
            <td>Баланд бардоштани дараҷаи объектҳо (<code>**</code>).</td>
        </tr>
        <tr>
            <td><p><code>neg(self)</code></p></td>
            <td>Арзиши манфии объект (<code>-</code>).</td>
        </tr>
        <tr>
            <td><p><code>pos(self)</code></p></td>
            <td>Арзиши мусбати объект (<code>+</code>).</td>
        </tr>
        <tr>
            <td><p><code>abs(self)</code></p></td>
            <td>Арзиши мутлақи объект (<code>abs()</code>).</td>
        </tr>
        <tr>
            <td><p><code>call(self, *args, **kwargs)</code></p></td>
            <td>Даъват кардани объект ҳамчун функсия.</td>
        </tr>
        <tr>
            <td><p><code>hash(self)</code></p></td>
            <td>Рамзи хэш-и объектро барои истифода дар коллексияҳои ҳашобӣ бармегардонад.</td>
        </tr>
        </table>
    <h3>Маводҳо барои мутоила:</h3>
    <ul>
        <li>"Углубленный курс информатики" / Долганов Игорь Михайлович <a href="https://portal.tpu.ru/SHARED/d/DOLGANOVIM/teaching/Tab4/Lec-01.pdf">(скачать PDF)</a></li>
        <li>"Python 3 Text Processing with NLTK 3 Cookbook" by Jacob Perkins <a href="https://budditha.files.wordpress.com/2021/04/python-3-text-processing-with-nltk-3-cookbook.pdf">(скачать PDF)</a></li>
        <li>"Python для сетевых инженеров" / Наташа Самойленко <a href="https://pyneng.readthedocs.io/_/downloads/ru/latest/pdf/">(скачать PDF)</a></li>
    </ul>
    <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
    <ul>
        <li><a href="https://tproger.ru/articles/dunder-metody-zachem-oni-nuzhny-i-chto-mogut">Dunder-методы: зачем они нужны и что могут</a></li>
        <li><a href="https://medium.com/@nimritakoul01/dunder-methods-in-python-9f32f2e6103b">Dunder Methods in Python</a></li>
        <li><a href="https://mathspp.com/blog/pydonts/dunder-methods">Dunder methods</a></li>
    </ul>
    <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
    <ul>
        <li><a href="https://www.udemy.com/course/learn-python-data-model/?couponCode=LETSLEARNNOW">Python objects with special methods - Create better classes!</a></li>
        <li><a href="https://www.edx.org/learn/computer-science/massachusetts-institute-of-technology-introduction-to-computer-science-and-programming-using-python">Introduction to Computer Science and Programming Using Python</a></li>
        <li><a href="https://www.coursera.org/specializations/python">Python for Everybody Specialization</a></li>
    </ul>
    <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
    <ul>
        <li><a href="https://realpython.com/lessons/python-oop-dunder-methods/">Introducing Dunder Methods</a></li>
        <li><a href="https://python-course.eu/oop/magic-methods.php">Magic Methods</a></li>
        <li><a href="https://diveintopython.org/learn/classes/dunder-magic-methods">Dunder or Magic Methods</a></li>
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