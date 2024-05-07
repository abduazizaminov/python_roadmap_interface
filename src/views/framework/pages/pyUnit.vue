<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>unittest/pyUnit</h1>
          <h5>Таҳиягар: Аминов А.Р.</h5>
        <p>unittest, инчунин бо номи pyUnit маълум аст, чаҳорчӯбаи санҷиши Python мебошад, ки аз модули JUnit барои забони Java илҳом гирифта шудааст. Он маҷмӯи асбобҳоро барои эҷод ва иҷро кардани санҷишҳо пешкаш мекунад, ки ба таҳиягарон имкон медиҳад, ки дурустии рамзи худро тафтиш кунанд.</p>
        <h3>Функсияҳо ва хусусиятҳои асосии unittest</h3>
        <ul>
            <li>Ҳолатҳои санҷишӣ: Блоки асосии сохтани unittest як ҳолати санҷишӣ мебошад, ки аз ҷониби синфе муаррифӣ мешавад, ки аз unittest.TestCase мерос мегирад. Дар доираи ҳолати санҷиш, усулҳо одатан аз префикси test_ сар карда муайян карда мешаванд, ки мантиқи санҷишро дар бар мегиранд.</li>
            <li>Усулҳои setUp ва tearDown: санҷиши воҳид ба шумо имкон медиҳад, ки усулҳои setUp ва tearDown-ро муайян кунед, ки мутаносибан пеш аз ва баъд аз ҳар як усули санҷиш иҷро карда мешаванд. Ин ба шумо имкон медиҳад, ки ҳолати ибтидоиро пеш аз иҷрои санҷишҳо танзим кунед ва пас аз ба итмом расидани онҳо қадамҳои ниҳоиро иҷро кунед.</li>
            <li>Маҷмӯаҳои санҷишӣ (Suites Test): Шумо метавонед ҳолатҳои санҷиширо ба маҷмӯаҳои санҷишӣ бо истифода аз синфи unittest гурӯҳбандӣ кунед.TestSuite. Ин ба шумо имкон медиҳад, ки санҷишҳоро мантиқан ташкил кунед ва онҳоро якҷоя иҷро кунед.</li>
            <li>Иҷрои санҷишҳо: unittest сатри фармонро барои иҷро кардани санҷишҳо аз консол таъмин мекунад. Инчунин, санҷишҳо метавонанд аз муҳити рушд оғоз е ба воситаҳои автоматикунонии сохтмон ворид карда шаванд.</li>
            <li>Asserts (Asserts): unittest усулҳои гуногуни тасдиқро пешниҳод мекунад, ки ба шумо имкон медиҳанд натиҷаҳои пешбинишудаи санҷишҳои худро тафтиш кунед. Ба ин усулҳо assertEqual, assertTrue, assertFalse, assertRaises ва ғайра дохил мешаванд.</li>
        </ul>
        <h3>Намунаҳои кор</h3>
        <p>Биёед мисоли оддии истифодаи unittest-ро бубинем.</p>
        <h4>Бо санҷишҳои <code>test_example.py</code> файл эҷод кунед:</h4>
        <pre><code>
    import unittest

    def add(x, y):
        return x + y

    class TestAdd(unittest.TestCase):
        def test_add_positive_numbers(self):
            self.assertEqual(add(2, 3), 5)

        def test_add_negative_numbers(self):
            self.assertEqual(add(-2, -3), -5)

        def test_add_zero(self):
            self.assertEqual(add(0, 0), 0)

    if __name__ == '__main__':
        unittest.main()

        </code></pre>
        <h4>Бо истифода аз фармони python санҷишҳоро иҷро кунед:</h4>
        <pre><code>
    python test_example.py
        </code></pre>
        <p>Ин ҳама санҷишҳоро дар файли test_example.py иҷро мекунад ва натиҷаҳои иҷрои онҳоро дар экран намоиш медиҳад.</p>
        <h3>Санҷишҳои параметрӣ</h3>
        <p>unittest санҷишҳои параметриро тавассути зерсинфҳои unittest дастгирӣ мекунад.Testcase ва усули sub Test. Ин ба шумо имкон медиҳад, ки ҳамон як санҷишро бо маҷмӯи вурудоти гуногун иҷро кунед.</p>
        <pre><code>
    import unittest

    def add(x, y):
        return x + y

    class TestAdd(unittest.TestCase):
        def test_add(self):
            test_cases = [(2, 3, 5), (-2, -3, -5), (0, 0, 0)]
            for x, y, expected in test_cases:
                with self.subTest(x=x, y=y):
                    self.assertEqual(add(x, y), expected)

        </code></pre>
        <h3>Истифодаи фикстурҳо</h3>
        <p>unittest ба шумо имкон медиҳад, ки фикстураҳоро барои танзими ҳолати ибтидоӣ пеш аз иҷрои санҷишҳо истифода баред. Фикстурҳоро бо истифода аз усулҳои setUp ва tearDown сохтан мумкин аст.</p>
        <pre><code>
    import unittest

    class MyTestCase(unittest.TestCase):
        def setUp(self):
            # Настройка начального состояния
            self.data = [1, 2, 3]

        def tearDown(self):
            # Очистка ресурсов
            self.data = None

        def test_something(self):
            self.assertEqual(len(self.data), 3)

        </code></pre>
        <h3>Беэътиноӣ ва гузаронидани санҷишҳо</h3>
        <p>unittest ба шумо имкон медиҳад, ки вобаста ба шароит санҷишҳои муайянро сарфи назар кунед ё иҷрои онҳоро гузаред.</p>
        <pre><code>
    import unittest

    class MyTestCase(unittest.TestCase):
        @unittest.skip("Пример игнорируемого теста")
        def test_example(self):
            pass

        @unittest.skipIf(some_condition, "Пропуск теста в зависимости от условия")
        def test_another_example(self):
            pass

        </code></pre>
        <h3>Гурӯҳбандии санҷишҳо ба маҷмӯаҳои санҷишӣ</h3>
        <p>unittest ба шумо имкон медиҳад, ки санҷишҳоро дар ҳолатҳои санҷишӣ эҷод ва якҷоя кунед, то иҷрои онҳоро назорат кунед.</p>
        <pre><code>
    import unittest

    class TestSuiteExample(unittest.TestCase):
        def test_case1(self):
            pass

        def test_case2(self):
            pass

    suite = unittest.TestLoader().loadTestsFromTestCase(TestSuiteExample)
    unittest.TextTestRunner().run(suite)

        </code></pre>
        <h3>Маводҳо барои мутоила:</h3>
        <ul>
          <li>"Python unittest" <a
              href="https://devpractice.ru/files/books/python/Python.unittest.pdf">(скачать
              PDF)</a></li>
          <li>Unittest Framework<a
              href="https://www.tutorialspoint.com/unittest_framework/unittest_framework_tutorial.pdf">(скачать
              PDF)</a>
          </li>
          <li>"Python Testing Beginner's Guide" / Daniel Arbuckle<a
              href="https://theswissbay.ch/pdf/Gentoomen%20Library/Programming/Python/Python%20Testing%20-%20Beginner%27s%20Guide%20%282010%29.pdf">(скачать
              PDF)</a></li>
        </ul>
        <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
        <ul>
          <li><a href="https://ru.hexlet.io/courses/advanced_python/lessons/python_testing_unittest/theory_unit#:~:text=unittest%20%2D%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%20%D0%B4%D0%BB%D1%8F%20%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B2,%D0%B4%D0%BB%D1%8F%20%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%20%D0%B8%20%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2.">Мир Python: тестирование с помощью unittest - Хекслет</a></li>
          <li><a href="https://sky.pro/media/kak-napisat-unit-testy-dlya-python-prilozheniya/">Как написать unit-тесты для Python-приложения</a></li>
          <li><a href="https://habr.com/ru/companies/otus/articles/481806/">Юнит-тесты на Python: Быстрый старт</a></li>
        </ul>
        <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
        <ul>
          <li><a href="https://www.udemy.com/course/python-unit-testing-fundamentals/">Python Unit Testing Fundamentals (using unittest & pytest)</a></li>
          <li><a href="https://www.edx.org/learn/unit-testing">Best Online Unit Testing Courses and Programs</a></li>
          <li><a href="https://www.coursera.org/articles/python-testing-framework">What Is a Python Testing Framework</a></li>
        </ul>
        <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
        <ul>
          <li><a href="https://stepik.org/course/180532/promo">Введение в тестирование на Python (Unittest, Pytest)</a></li>
          <li><a href="https://www.youtube.com/watch?v=JBeZ80IvdFI">️ Unit tests в Python: легкий старт с нуля - YouTube</a></li>
          <li><a href="https://devpractice.ru/unit-testing-in-python-part-1/">Тестирование в Python [unittest]</a></li>
        </ul>
        <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
        <ul>
          <li><a href="https://coderunner.org.nz/mod/forum/discuss.php?d=291">Python unittest - CodeRunner</a></li>
          <li><a href="https://pythonworld.ru/moduli/modul-unittest.html">Модуль unittest</a></li>
          <li><a href="https://software-testing.ru/forum/index.php?/topic/40063-osnovy-testirovaniia-na-python-unittest/">Основы тестирования на Python: unittest</a></li>
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
          <li><a href="https://github.com/wolever/parameterized">parameterized</a></li>
          <li><a href="https://github.com/Simplistix/testfixtures">testfixtures</a></li>
          <li><a href="https://github.com/mockito/mockito">mockito</a></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>