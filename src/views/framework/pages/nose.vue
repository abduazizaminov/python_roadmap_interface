<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Nose</h1>
        <p>nose як тамдиди модули unittest дар Python аст. Он дорои хусусиятҳои иловагии санҷиш, аз ҷумла кашфи автоматии санҷиш, сабти осонтари санҷиш ва дастгирии плагинҳо мебошад.</p>
        <h3>Насб кардани nose ва coverage</h3>
        <pre><code>
    pip install nose coverage
        </code></pre>
        <p>Мо як мисоли оддӣ менависем, ки дар он функсияи синфи Foo-ро барои баробарии арзиш, нобаробарии арзиш ва имконияти тавлиди истисно санҷем. Барои ин, мо синфи Test Foo-ро эҷод мекунем, ки дар он ҳамаи усулҳо бо test_ оғоз меебанд.ин тамғаи (test Match regular expression) барои nose аст, ки ин усулро даъват кардан лозим аст. Натиҷаи кори ин усулҳо ба ҳисоботи ниҳоии санҷишҳои гузаронидашуда дохил карда мешавад. Дар Test Foo ду усули иловагӣ мавҷуданд: setUp ҳар дафъае, ки яке аз усулҳои санҷишӣ даъват карда мешавад, иҷро карда мешавад (дар ҳолатҳои ман: <code>test_exist, test_get, test_calc</code>.), teardown пас аз анҷоми усули санҷишӣ иҷро карда мешавад.</p>
        <pre><code>
    from nose.tools import assert_raises

    class Foo:
        def exist(self):
            return True
        def get(self):
            raise IOError('access denied')
        def calc(self, v):
            return 2*v

    class TestFoo:
        def setUp(self):
            self.multiplier = 2
        def teardown(self):
            pass
        def test_exist(self):
            f = Foo()
            assert f.exist() == True
        def test_get(self):
            f = Foo()
            assert_raises(IOError, f.get)
        def test_calc(self):
            f = Foo()
            assert f.calc(self.multiplier) != 5
        </code></pre>
        <h4>Оғоз ва дидани натиҷа</h4>
        <pre><code>
    nosetests -v ntst.py
    ntst.TestFoo.test_calc ... ok
    ntst.TestFoo.test_exist ... ok
    ntst.TestFoo.test_get ... ok
    ----------------------------------------------------------------------
    Ran 3 tests in 0.001s
    OK
        </code></pre>
        <p>Барои муайян кардани он, ки синфи Foo то чӣ андоза бо санҷишҳо пӯшонида шудааст, ба шумо модули coverage лозим аст, ки бояд тавассути фармони pip дар боло насб карда шавад.</p>
        <pre><code>
    nosetests -v --with-coverage ntst.py
    ntst.TestFoo.test_calc ... ok
    ntst.TestFoo.test_exist ... ok
    ntst.TestFoo.test_get ... ok

    Name    Stmts   Miss  Cover   Missing
    -------------------------------------
    ntst       24      0   100%   
    ----------------------------------------------------------------------
    Ran 3 tests in 0.002s

    OK
        </code></pre>
        <p>Барои нишон додани пешрафт бар дар ҷараени санҷиш, шумо метавонед house-progressive насб кунед.</p>
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
          <li><a href="https://nose.readthedocs.io/">Nose Documentation</a></li>
          <li><a href="https://dou.ua/lenta/articles/testirovanie-python-prilozheniy-ot-unittest-k-nose/">Тестирование Python-приложений: от unittest к nose</a></li>
          <li><a href="https://django.fun/docs/pytest/7.2/how-to/nose/">Как запускать тесты, написанные для nose - pytest</a></li>
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