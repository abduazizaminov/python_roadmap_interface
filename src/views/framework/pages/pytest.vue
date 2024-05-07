<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>pytest</h1>
          <h5>Таҳиягар: Аминов А.Р.</h5>
        <p>Pytest як чаҳорчӯбаи санҷиши Python мебошад, ки аз ҷониби лоиҳаи PyPy сохта шудааст. Он метавонад барои навиштани намудҳои гуногуни санҷишҳои нармафзор, аз ҷумла санҷишҳои воҳидҳо, санҷишҳои ҳамгироӣ, санҷишҳои ниҳоӣ ва санҷишҳои функсионалӣ истифода шавад.</p>
        <h3>Насб кардани pytest</h3>
        <p>Барои насб кардани pytest шумо метавонед pip, мудири бастаи стандартии Python -ро истифода баред:</p>
        <pre><code>
    pip install pytest
        </code></pre>
        <h3>Функсияҳо ва хусусиятҳои асосии pytest</h3>
        <ul>
            <li>Синтаксиси оддӣ: pytest синтаксиси содда ва возеҳро барои навиштани тестҳо таъмин мекунад, ки онҳоро бештар хондан ва фаҳмотар мекунад.</li>
            <li>Кашфи худкори санҷиш: pytest ба таври худкор санҷишҳоро дар файлҳои санҷишии шумо пайдо ва иҷро мекунад, ки раванди навиштан ва иҷро кардани санҷишҳоро қулайтар мекунад.</li>
            <li>Дастгирии тасдиқ: Шумо метавонед изҳороти стандартии Python-ро истифода баред, то натиҷаҳои интизоршудаи санҷишҳои худро тафтиш кунед.</li>
            <li>Дастгоҳҳо: pytest дастгирии пурқувватро барои асбобҳо таъмин мекунад, ки ба шумо имкон медиҳад ҳолати санҷишҳоро пеш аз иҷрои онҳо танзим кунед.</li>
            <li>Бисёр плагинҳо: Плагинҳои зиёде барои pytest мавҷуданд, ки ба шумо имкон медиҳанд, ки функсияи онро васеъ кунед ва онро ба ниёзҳои худ мутобиқ кунед.</li>
        </ul>
        <h3>Намунаҳои кор</h3>
        <p>Биёед мисоли оддии истифодаи pytest-ро бубинем.</p>
        <h4>Бо санҷишҳои <code>test_example.py</code> файл эҷод кунед:</h4>
        <pre><code>
    def add(x, y):
    return x + y

    def test_add():
        assert add(2, 3) == 5
        assert add(10, -1) == 9
        </code></pre>
        <h4>Бо истифода аз pytest санҷишҳоро иҷро кунед:</h4>
        <pre><code>
    pytest test_example.py
        </code></pre>
        <h4>Ин санҷишҳоро аз файли <code>test_example.py</code> иҷро мекунад ва натиҷаҳои иҷроро дар экран чоп мекунад:</h4>
        <pre><code>
    ============================= test session starts ==============================
    platform linux -- Python 3.x.x, pytest-x.x.x, pluggy-x.x.x
    rootdir: /path/to/your/test/directory
    collected 1 item

    test_example.py .                                                          [100%]

    ============================== X passed in Xs ===============================

        </code></pre>
        <p>Санҷишҳо бомуваффақият гузаштанд, ки бо нишони нуқтаи сабз (.) дар пеши номи файл ва гузаштани хати <code>1 passed</code> медиҳад, ки 1 санҷиш бомуваффақият анҷом ёфт.</p>
        <h3>Санҷишҳои параметрӣ</h3>
        <p>pytest ба шумо имкон медиҳад, ки бо истифода аз ороишгари pytest.mark.parametrize санҷишҳои параметрӣ эҷод кунед. Ин ба шумо имкон медиҳад, ки як санҷишро бо маълумоти гуногуни воридшуда иҷро кунед.</p>
        <pre><code>
    import pytest

    def add(x, y):
        return x + y

    @pytest.mark.parametrize("x, y, expected", [
        (2, 3, 5),
        (10, -1, 9),
        (0, 0, 0)
    ])
    def test_add(x, y, expected):
        assert add(x, y) == expected

        </code></pre>
        <h3>Фикстураҳо</h3>
        <p>Фикстураҳо ба шумо имкон медиҳанд, ки муҳитро барои иҷрои санҷишҳо омода созед е контексти умумиро барои якчанд санҷишҳо пешниҳод кунед. Онҳо метавонанд бо истифода аз ороишгари py test.fixture сохта шаванд.</p>
        <pre><code>
    import pytest

    class SomeResource:
        def __init__(self):
            self.value = 0

    @pytest.fixture
    def resource():
        return SomeResource()

    def test_resource_operations(resource):
        resource.value = 42
        assert resource.value == 42

        </code></pre>
        <h3>Нодида гирифтани санҷишҳо</h3>
        <p>Баъзан зарур аст, ки санҷишро муваққатан ё шартан аз иҷроиш хориҷ кунед. Инро метавон бо истифода аз ороишгари pytest.mark.skip анҷом дод.</p>
        <pre><code>
    import pytest

    @pytest.mark.skip(reason="Тест временно недоступен")
    def test_example():
        assert False
        </code></pre>
        <h3></h3>
        <h3>Маводҳо барои мутоила:</h3>
        <ul>
          <li>pytest Documentation <a
              href="https://happytest.readthedocs.io/_/downloads/en/latest/pdf/">(скачать
              PDF)</a></li>
          <li>Pytest<a
              href="https://www.tutorialspoint.com/pytest/pytest_tutorial.pdf">(скачать
              PDF)</a>
          </li>
          <li>"Testing Python" / David Sale<a
              href="http://repo.darmajaya.ac.id/4483/1/Testing%20Python_%20Applying%20Unit%20Testing%2C%20TDD%2C%20BDD%20and%20Acceptance%20Testing%20%28%20PDFDrive%20%29.pdf">(скачать
              PDF)</a></li>
        </ul>
        <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
        <ul>
          <li><a href="https://www.udemy.com/course/python-automation-pytest/">Python Automation Testing With Pytest</a></li>
          <li><a href="https://dou.ua/lenta/articles/testirovanie-python-prilozheniy-ot-unittest-k-nose/">Примеры и приемы настройки — pytest</a></li>
          <li><a href="https://tproger.ru/articles/testiruem-na-python-unittest-i-pytest-instrukcija-dlja-nachinajushhih">Учимся тестировать на Python: unittest и pytest</a></li>
        </ul>
        <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
        <ul>
          <li><a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj8nuOk4ZuFAxX4R5EFHVHOA4sYABAAGgJscg&ase=2&gclid=Cj0KCQjw8J6wBhDXARIsAPo7QA8d_KygmBSbxqsFIISXNwlMuHQwRY6gG8IBmJnSYddzQZ6G2p8gBPcaAmpzEALw_wcB&ohost=www.google.com&cid=CAESVuD2jiucR6FMmmRk13_TG-LvFLuZW2mPOg6jz--jFa0bQECMr4w-VWtlCKKMdnCXUnYwsT0xfC4ECAp_ZvXa8O82l2x9VRJuCkv5Y06G1cgLx_Gij8ni&sig=AOD64_3LGkBtxKZxxEdDYuns17Q5us20ug&q&nis=4&adurl&ved=2ahUKEwiqhN2k4ZuFAxVJAhAIHZK3C9IQ0Qx6BAgMEAE">Software Testing Online Course</a></li>
          <li><a href="https://www.edx.org/learn/unit-testing">Best Online Unit Testing Courses and Programs</a></li>
          <li><a href="https://www.coursera.org/articles/python-testing-framework">What Is a Python Testing Framework</a></li>
        </ul>
        <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
        <ul>
          <li><a href="https://blog.skillfactory.ru/glossary/pytest/">PyTest - что это: тестирование приложений на Python</a></li>
          <li><a href="https://skillbox.ru/media/code/rukovodstvo-po-pytest-kak-testirovat-kod-v-python/">️ Руководство по Pytest: как тестировать код в Python"</a></li>
          <li><a href="https://ru.hexlet.io/programs/python-pytest-testing">Курс: Тестирование с Pytest - Хекслет</a></li>
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
          <li><a href="https://pytest-cov.readthedocs.io/en/latest/">pytest-cov</a></li>
          <li><a href="https://pytest-django.readthedocs.io/en/latest/">pytest-django</a></li>
          <li><a href="https://chat.openai.com/c/02dda7e4-7757-4491-9dcc-1971152c1b3c">pytest-mock</a></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>