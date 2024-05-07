<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Synchronous - Синхронӣ</h1>
          <h5>Таҳиягар: Аминов А.Р.</h5>
        <p>Синхронизатсия дар Python ба тарзи иҷрои код ишора мекунад, ки дар он дастурҳо пайдарпай, як ба як, бо тартиби навишташуда иҷро карда мешаванд. Ин маънои онро дорад, ки ҳар як амалиет иҷрои рамзро то ба итмом расидани амалиети навбатӣ манъ мекунад. Ҳангоми иҷрои ҳамзамон рамзи барнома интизор аст, ки ҳар як амалиет пеш аз гузаштан ба амалиети дигар ба анҷом расад.</p>
        <h4>Мисоли 1: зеркашии синхронии файл</h4>
        <pre><code>
    import requests

    def download_file(url):
        response = requests.get(url)
        with open('downloaded_file.txt', 'wb') as f:
            f.write(response.content)
        print('Файл успешно загружен')

    download_file('https://example.com/file.txt')
        </code></pre>
        <p>Дар ин мисол, функсияи <code>download_file()</code> файлро дар URL-и додашуда ҳамзамон бор мекунад ва онро ба диск захира мекунад. Барнома интизор аст, ки пеш аз баровардани паем дар бораи зеркашии муваффақ амалиети зеркаширо ба анҷом расонад.</p>
        <h4>Мисоли 2: Дархости синхронӣ ба пойгоҳи додаҳо</h4>
        <pre><code>
    import sqlite3

    def fetch_data_from_database():
        conn = sqlite3.connect('example.db')
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM users')
        data = cursor.fetchall()
        conn.close()
        return data

    data = fetch_data_from_database()
    print(data)
        </code></pre>
        <p>Дар ин мисол, функсияи <code>fetch_data_from_database() </code> дархости пойгоҳи додаҳои SQLite-ро ҳамзамон иҷро мекунад, маълумотро мегирад ва бармегардонад. Барнома интизор аст, ки амалиети иҷрои дархост пеш аз баровардани маълумоти гирифташуда ба анҷом расад.</p>
        <h4>Барои равиши синхронӣ дар Python конструксияҳои зерин маъмулан истифода мешаванд:</h4>
        <p> <h4>1.Зангҳои пайдарпайи функсионалӣ:</h4> Ин роҳи асосии иҷрои коди синхронӣ мебошад, ки дар он зангҳои функсионалӣ паси дигар анҷом дода мешаванд ва барнома пеш аз гузаштан ба дигараш интизори анҷоми ҳар як функсия аст.</p>
        <pre><code>
    def func1():
    print("Функция 1")
        
    def func2():
        print("Функция 2")

    func1()
    func2()
        </code></pre>
        <p>Дар ин мисол, func1() ва func2() пайдарпай даъват карда мешаванд ва барнома пеш аз занг задан ба func2() мунтазири иҷрои func1() мешавад.</p>
        <p><h4>2.Истифодаи Амалиётҳои Блоккунӣ:</h4> Муносибати синхронӣ аксар вақт амалиёти бастакуниро истифода мебарад, ки иҷрои барномаро то анҷоми амалиёт қатъ мекунанд.</p>
        <pre><code>
    import time

    def process_data():
        print("Обработка данных начата")
        time.sleep(5)  # Имитация длительной операции
        print("Обработка данных завершена")

    process_data()
        </code></pre>
        <p>Дар ин ҷо, функсияи  <code>process_data()</code> дорои амалиёти басташавӣ, <code>time.sleep(5)</code> мебошад, ки боиси интизории 5 сония пеш аз идомаи иҷро мешавад.</p>
        <p><h4>Истифодаи ҳалқаҳо ва изҳороти шартӣ:</h4> Давраҳо ва изҳороти шартӣ инчунин барои назорат кардани ҷараёни иҷроиши код ба таври синхронӣ истифода мешаванд, ки дар он блокҳои мушаххаси код бо пайдарпаии мушаххас иҷро карда мешаванд.</p>
        <pre><code>
    def check_condition():
    condition = False
    if condition:
        print("Условие выполнено")
    else:
        print("Условие не выполнено")

    check_condition()
        </code></pre>
        <p>Дар ин ҷо, блокҳои код дар дохили изҳороти шартӣ вобаста ба шарт ба таври синхронӣ иҷро карда мешаванд.</p>
        <h3>
            Намунаҳои чаҳорчӯбаҳое, ки синхронӣ кор мекунанд:
        </h3>
        <ul>
            <li>Django: Django чаҳорчӯбаи маъмул барои эҷоди барномаҳои веб дар Python аст, ки бо нобаёнӣ синхронӣ кор мекунад.</li>
            <li>Flask: Flask боз як чаҳорчӯбаи маъруф барои эҷоди замимаҳои веб дар Python мебошад, ки он низ бо нобаёнӣ синхронӣ кор мекунад.</li>
        </ul>
        <h3>
            Афзалиятҳои усули синхронӣ
        </h3>
        <ul>
            <li>Оддӣ: Рамзи синхронӣ фаҳмидан ва ислоҳ кардан осонтар аст, зеро он бо тартиб иҷро карда мешавад ва онро осонтар мекунад.</li>
            <li>Пешгӯӣ: Дар коди синхронӣ тартиби амалиёт пешгӯишаванда аст, ки идоракуниро осонтар ва боэътимодтар мекунад.</li>
            <li>Мутобиқат: Бисёре аз китобхонаҳо ва чаҳорчӯбаҳои стандартӣ дар Python синхронӣ кор мекунанд ва рамзи синхронӣ бо аксари экосистемаи Python мувофиқанд.</li>
        </ul>
        <h3>Маводҳо барои мутоила:</h3>
        <ul>
          <li>"Using Asyncio in Python" / Caleb Hattingh <a
              href="https://edu.anarcho-copy.org/Programming%20Languages/Python/using-asyncio-python-understanding-asynchronous.pdf">(скачать
              PDF)</a></li>
          <li>"Введение в асинхронное программирование" / Dave Peticolas <a
              href="https://lib.intuit.kg/wp-content/uploads/2020/04/%D0%90%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-ru.pdf">(скачать
              PDF)</a>
          </li>
          <li>"Основы программирования на языке Python" / С К Буйначев, Н Ю Боклаг <a
              href="https://elar.urfu.ru/bitstream/10995/28769/1/978-5-7996-1198-9_2014.pdf">(скачать
              PDF)</a></li>
        </ul>
        <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
        <ul>
          <li><a href="https://habr.com/ru/articles/667630/">Хабр</a></li>
          <li><a href="https://school.kontur.ru/publications/2567">Асинхронное программирование на Python</a></li>
          <li><a href="https://sky.pro/media/kak-rabotat-s-asinhronnostyu-v-python/">Как работать с асинхронностью в Python</a></li>
        </ul>
        <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
        <ul>
          <li><a href="https://learning.edx.org/course/course-v1:Microsoft+DEV234x+3T2017a/home">Course | Asynchronous Programming</a></li>
          <li><a href="https://www.udemy.com/course/asynchronous-python-for-beginners/">Asynchronous Python for beginners</a></li>
          <li><a href="https://www.coursera.org/articles/what-is-asynchronous-learning">What Is Asynchronous</a></li>
        </ul>
        <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
        <ul>
          <li><a href="https://practicum.yandex.ru/async-python/">Онлайн-курс «Асинхронное программирование на Python</a></li>
          <li><a href="https://stepik.org/course/170777/continue">Асинхронный Python</a></li>
          <li><a href="https://metaclass.kts.studio/aiohttp">Асинхронное программирование на Python</a></li>
        </ul>
        <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
        <ul>
          <li><a href="https://habr.com/ru/articles/667630/">Асинхронный python без головной боли</a></li>
          <li><a href="https://www.python.org/community/forums/">Forum</a></li>
          <li><a href="https://school.kontur.ru/publications/2567">Асинхронное программирование на Python</a></li>
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
          <li><a href="https://docs.djangoproject.com/">Django</a></li>
          <li><a href="https://docs.python.org/3/library/asyncio.html#:~:text=asyncio%20is%20a%20library%20to,%2C%20distributed%20task%20queues%2C%20etc.">asyncio</a></li>
          <li><a href="https://flask.palletsprojects.com/">Flask</a></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>