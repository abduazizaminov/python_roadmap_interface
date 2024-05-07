<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>doctest</h1>
          <h5>Таҳиягар: Аминов А.Р.</h5>
        <p>doctest як модулест, ки ба китобхонаи стандартии забони барномасозии Python дохил карда шудааст, ки ба шумо имкон медиҳад, ки ба осонӣ дар асоси баромади қабати тарҷумони стандартии Python санҷишҳо эҷод кунед, бурида ва ба сатрҳо часпонед.</p>
        <p>doctest ҷолиб аст, зеро истифодаи он ба назар чунин менамояд, ки мо дар REPL код менависем.
            Функсияи факториалӣ барои ҳисоб кардани факториал мебошад. Истифодаи функсия чунин аст:</p>
            <pre><code>
    >>> factorial(5)
            </code></pre>
            <p>Дар натиҷаи занг:</p>
            <pre><code>
    >>> factorial(5)
    120
            </code></pre>
            <p>Модул порчаҳои матниро меҷӯяд, ки ба сессияҳои интерактивии python монанданд. Минбаъд он сессияҳоро иҷро мекунад ва месанҷад, ки оё он чизеро, ки дар docstring нишон дода шудааст, мувофиқат мекунад.</p>
            <h3>Баъзе роҳҳои маъмули истифодаи doctest:</h3>
            <ul>
                <li>Тафтиш кунед, ки ҳуҷҷатҳои функсияҳо моҳиятро инъикос мекунанд ва кӯҳна нестанд.</li>
                <li>Барои анҷом додани санҷиши регрессия, боварӣ ҳосил кунед, ки мисолҳои интерактивӣ аз файли санҷишӣ ё объекти санҷишӣ мувофиқи интизорӣ кор мекунанд.</li>
                <li>Як дастури ҳуҷҷатгузорӣ барои бастаро нависед, ки бо мисолҳои I/O ба таври ҷиддӣ тасвир шудааст.</li>
            </ul>
            <h3>Doctest барои функсияҳо</h3>
        <h4>Масалан, рамзи зеринро баррасӣ кунед:</h4>
        <pre><code>
    def factorial(n):
   
    import math
    if not n >= 0:
        raise ValueError("n must be >= 0")
    if math.floor(n) != n:
        raise ValueError("n must be exact integer")
    if n+1 == n:  # catch a value like 1e300
        raise OverflowError("n too large")
    result = 1
    factor = 2
    while factor <= n:
        result *= factor
        factor += 1
    return result


    if __name__ == "__main__":
        import doctest
        doctest.testmod()
        </code></pre>
        <p>Функсия факториалро дар давра ҳисоб мекунад. Дар блоки дорои docstring, шумо метавонед ҳам тавсифи функсия ва ҳам сохторҳои ба сатрҳои коди REPL монандро бинед. Ин хусусияти асосии doctest аст - навиштани тестҳо бевосита дар ҳуҷҷатҳо.</p>
        <h3>Debug doctest</h3>
        <h4>Ислоҳоти чунин санҷишҳо хеле содда аст ва онро бо ду роҳ анҷом додан мумкин аст:</h4>
        <ul>
          <li>навиштани код дар REPL, беҳтарин чизе ин аст, ки шумо кодро фавран ба хатҳои ҳуҷҷат нусхабардорӣ мекунед.</li>
          <li>функсияи doctest.script_from_examples -ро истифода баред:</li>
        </ul>
        <pre><code>
    import doctest
    print doctest.script_from_examples(r"""
        Set x and y to 1 and 2.
        >>> x, y = 1, 2

        Print their sum:
        >>> print x+y
        3
    """)
        </code></pre>
        <h3>Санҷишҳои синфӣ</h3>
        <p>Санҷиши функсия осонтар ва хеле кам душвор аст. Аммо бо дарсҳо ҳама чиз он қадар оддӣ нест. Синфро баррасӣ кунед:</p>
        <pre><code>
    class Test(object):
    def __init__(self, number):
        self.number = number

    def multiply_by_2(self):
        return self.number*2
        </code></pre>
        <p>Синфи маъмулӣ далелҳоро ба конструктор мегирад ва баъзе усулҳое мавҷуданд, ки бо ин маълумот кор мекунанд. Инро чӣ гуна бояд озмоиш кард? Бале, вазифаҳои мураккабтар нестанд:</p>
        <pre><code>
    class Test(object):
    """
    >>> a=Test(5)
    >>> a.multiply_by_2()
    10
    """
    def __init__(self, number):
        self.number = number

    def multiply_by_2(self):
        return self.number*2

    if __name__ == "__main__":
        import doctest
        doctest.testmod()
        </code></pre>
        <h3>Камбудии doctest</h3>
        <p>Камбудии ошкори doctest дар он аст, ки вақте санҷишҳо зиёданд, навиштан дар docstring номувофиқ аст. Тавсия дода мешавад, ки онро дар файли алоҳида ҷойгир кунед.</p>
        <h4>Барои чунин санҷиш, doctest вазифа дорад:</h4>
        <pre><code>
    doctest.testfile("test.txt")
        </code></pre>
        <h4>Дар test.txt шумо матнро аз docstring ҷойгир мекунед. Масалан, чунин:</h4>
        <pre><code>
    Тестирование функции mult(a,b)

    >>> from test_in_other_file import mult
    >>> mult(2,3)
    6
        </code></pre>
        <h3>Маводҳо барои мутоила:</h3>
        <ul>
          <li>"Learning Python Testing" / Daniel Arbuckle <a
              href="https://electrovolt.ir/wp-content/uploads/2017/07/Learning-Python-Testing-Daniel-Arbuckle-ElectroVolt.ir_.pdf">(скачать
              PDF)</a></li>
          <li>"Python Testing Beginner's Guide" / Daniel Arbuckle<a
              href="https://theswissbay.ch/pdf/Gentoomen%20Library/Programming/Python/Python%20Testing%20-%20Beginner%27s%20Guide%20%282010%29.pdf">(скачать
              PDF)</a>
          </li>
          <li>"Testing Python" / David Sale<a
              href="http://repo.darmajaya.ac.id/4483/1/Testing%20Python_%20Applying%20Unit%20Testing%2C%20TDD%2C%20BDD%20and%20Acceptance%20Testing%20%28%20PDFDrive%20%29.pdf">(скачать
              PDF)</a></li>
        </ul>
        <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
        <ul>
          <li><a href="https://ru.hexlet.io/courses/advanced_python/lessons/python-doctest/theory_unit">Мир Python: doctest</a></li>
          <li><a href="https://digitology.tech/docs/python_3/library/doctest.html">doctest — Тестовые интерактивные примеры Python</a></li>
          <li><a href="https://docs.python.org/3/library/doctest.html">doctest — Test interactive Python examples</a></li>
        </ul>
        <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
        <ul>
          <li><a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj8nuOk4ZuFAxX4R5EFHVHOA4sYABAAGgJscg&ase=2&gclid=Cj0KCQjw8J6wBhDXARIsAPo7QA8d_KygmBSbxqsFIISXNwlMuHQwRY6gG8IBmJnSYddzQZ6G2p8gBPcaAmpzEALw_wcB&ohost=www.google.com&cid=CAESVuD2jiucR6FMmmRk13_TG-LvFLuZW2mPOg6jz--jFa0bQECMr4w-VWtlCKKMdnCXUnYwsT0xfC4ECAp_ZvXa8O82l2x9VRJuCkv5Y06G1cgLx_Gij8ni&sig=AOD64_3LGkBtxKZxxEdDYuns17Q5us20ug&q&nis=4&adurl&ved=2ahUKEwiqhN2k4ZuFAxVJAhAIHZK3C9IQ0Qx6BAgMEAE">Software Testing Online Course</a></li>
          <li><a href="https://www.edx.org/learn/unit-testing">Best Online Unit Testing Courses and Programs</a></li>
          <li><a href="https://www.coursera.org/projects/test-driven-developing-for-beginners-in-python">Test Driven Development Process For Beginners In Python</a></li>
        </ul>
        <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
        <ul>
          <li><a href="https://skillbox.tj/course/python-autotests/">Курс «Автоматизированное тестирование на Python</a></li>
          <li><a href="https://practicum.yandex.ru/qa-automation-engineer-python/">️ Онлайн-курс "Автоматизатор тестирования на Python"</a></li>
          <li><a href="https://ru.hexlet.io/courses/python-testing">Курс Python: Автоматическое тестирование - Хекслет</a></li>
        </ul>
        <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
        <ul>
          <li><a href="https://python-forum.io/thread-38222.html">python-forum.io</a></li>
          <li><a href="https://www.linux.org.ru/forum/talks/14833278">Прекрасная система тестирования в Python</a></li>
          <li><a href="https://software-testing.ru/forum/index.php?/topic/39356-python-dlia-nachinaiuschikh-otzyvy-uchastnikov/">Форум для тестировщиков</a></li>
        </ul>
        <h3>Муҳити коркарди нармафзор:</h3>
        <ul>
          <li><a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a></li>
          <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
          <li><a href="https://jupyter.org/">Jupyter</a></li>
        </ul>
        <h3>Онлайн муҳити санҷиши коди барномавӣ:</h3>
        <ul>
          <li><a href="https://www.online-ide.com/online_python_compiler#google_vignette">Online Python Compiler - 
              OnlineIDE</a></li>
          <li><a href="https://bio-python.netlify.app/">Online Python - IDE, Editor, Compiler, Interpreter</a></li>
          <li><a href="https://pythoncompiler.com/">Python Compiler</a></li>
        </ul>
        <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
        <ul>
          <li><a href="https://docs.python.org/3/library/doctest.html">doctest</a></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>