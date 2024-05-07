<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Regular Expressions - Ифодаҳои муқаррарӣ</h1>
          <h5>Таҳиягар: Қосимова С.Д.</h5>
    <p>Ифодаи муқаррарӣ сатрест, ки намунаи ҷустуҷӯи зерсатрҳоро дар матн муайян мекунад. Як намуна метавонад ба сатрҳои гуногун мувофиқат кунад.</p>
    <h3>Функсияҳои ифодаҳои муқаррарӣ дар Python</h3>
    <ul type="disc">
        <li><p>re.match() - пайдоиши намунаро дар оғози сатр ҷустуҷӯ мекунад. Ҳамчун далелҳо, шумо бояд аввал намунаро ва сипас сатри тафтишшавандаро гузаронед:</p></li>
        <pre><code>
            import re
            str = "Донишҷӯёнро омӯзонданд, аммо наомӯзониданд"
            print(re.match(r'омӯз', str))
        </code></pre>
        <li><p>re.search() - пайдоиши аввалини намунаро дар ҳама ҷо дар сатр ҷустуҷӯ мекунад ва объекти мувофиқро бармегардонад; агар дар сатр дигар порчаҳои мувофиқ мавҷуд бошанд, онҳо сарфи назар карда мешаванд. Функсияи re.search() дорои вазифаҳои иловагӣ барои осон кардани ҷустуҷӯ мебошад:
            <ul>
                <li><p>.group() - порчаи сатрро, ки дар он мувофиқат ёфта буд, бармегардонад;</p></li>
                <li><p>.span() - навореро бо мавқеъи оғоз ва охири намунаи ҷустуҷӯшаванда бармегардонад;</p></li>
                <li><p>.string() - сатреро, ки ба re.search() гузаронида шуда буд, бармегардонад.</p></li>
            </ul></p></li>
            <pre><code>
                import re
                # Матни аслӣ
                matn = "Дар ин ҷо шаҳри бостонӣ ҷойгир аст, ки дорои боғҳои зебо ва таърихӣ мебошад."
                # Истифода аз re.search барои ёфтани аввалин вуруди зерсатр, ки бо "бо" оғоз мешавад
                muqobil = re.search(r'бо\w+', matn)
                if muqobil:
                    # Чоп кардани зерсатри ёфтшуда бо истифода аз group()
                    print("Зерсатри ёфтшуда:", muqobil.group())
                    # Чоп кардани мавқеъи ибтидоӣ ва анҷоми зерсатри ёфтшуда бо истифода аз span()
                    print("Мавқеъ дар матн:", muqobil.span())
                    # Чоп кардани матни аслӣ бо истифода аз string
                    print("Матни аслӣ:", muqobil.string)
                else:
                    print("Зерсатр ёфт нашуд.")
            </code></pre>
            <li><p>re.findall() - ҳама пайдоиши намунаро дар ҳама ҷои сатр пайдо мекунад:</p></li>
            <pre><code>
            import re
            str = "Донишҷӯёнро омӯзонданд, аммо наомӯзониданд"
            print(re.findall(r'омӯз', str, re.IGNORECASE))
            >>> ['омӯз', 'омӯз']
        </code></pre>
        <li><p>re.sub() - пораҳоро мувофиқи намуна иваз мекунад:</p></li>
        <pre><code>
            import re
            # Матни аслӣ
            matn = "Зимистон аст ва барф меборад. Барф дар кӯҳҳо хеле зебо аст."
            # Иваз кардани "барф" бо "борон"
            natija = re.sub(r'барф', 'борон', matn)
            # Чопи натиҷа
            print(natija)
        </code></pre>
        <li><p>re.split() - сатрро мувофиқи намуна тақсим мекунад, шумораи тақсимҳо бо рақам муайян карда мешавад:</p></li>
        <pre><code>
            import re
            satr = "Ин як санҷиш аст. Аз фосила ва нуқта истифода мешавад барои ҷудокуни!"
            # Истифода аз re.split() барои ҷудокунии сатр ба асоси фосила ва нуқта
            natija = re.split(r'[ .]', satr)
            print(natija)
        </code></pre>
        </ul>
    <h3>Метасимволҳои ифодаҳои муқаррарӣ дар Python</h3>
    <p><figure class="wp-block-table">
        <table>
            <tbody>
                <tr>
                    <td><strong>Метасимвол</strong></td>
                    <td><strong>Вазифа</strong></td>
                    <td><strong>Истифодабарӣ</strong></td>
                </tr>
                <tr>
                    <td>.</td>
                    <td>Як аломати ихтиёриро ғайр аз сатри нав муайян мекунад</td>
                    <td>E.am.le</td>
                </tr>
                <tr>
                    <td>[&#8230;]</td>
                    <td>Ҳар як аломат дар қавс; худи символҳоро метавон бо истифода аз рӯйхатҳо ё диапазон муайян кард</td>
                    <td>[123abc] — танҳо символҳои муайяншуда; [A-Za-z0-9] — алифбо ва рақамҳои англисӣ; [А-ЯЁа-яё0-9] — алифбо ва рақамҳои русӣ</td>
                </tr>
                <tr>
                    <td>[^…]</td>
                    <td>Ҳама гуна символ, ба истиснои аломатҳои дар қавс нишондодашуда, худи аломатҳоро метавон бо истифода аз рӯйхатҳо ё диапазон муайян кард</td>
                    <td>[^A-Za-z]</td>
                </tr>
                <tr>
                    <td>^</td>
                    <td>Оғози сатр</td>
                    <td>^Hello</td>
                </tr>
                <tr>
                    <td>$</td>
                    <td>Охири сатр</td>
                    <td>Hello$</td>
                </tr>
                <tr>
                    <td>|</td>
                    <td>Оператори мантиқӣ Ё(OR). Ҷустуҷӯи яке аз имконоти номбаршуда</td>
                    <td>[0-9]|[IVXLCDM] — рақамҳои арабӣ ё римӣ</td>
                </tr>
                <tr>
                    <td>\</td>
                    <td>Фирори фаҳмиши Python, ки символи навбатӣ муқаррарӣ ё махсус аст. Шумо метавонед аломатҳои муқаррариро ба метасимволҳо ва бозгашт табдил диҳед</td>
                    <td>\[\.\] — метасимволҳо мунтазам мешаванд\d\W\A — символҳои муқаррарӣ метасимвол мешаванд</td>
                </tr>
                <tr>
                    <td>*</td>
                    <td>Шумораи худсаронаи такрори як символ&nbsp;</td>
                    <td>Hello*</td>
                </tr>
                <tr>
                    <td>?</td>
                    <td>Ба таври қатъӣ такрории як символ</td>
                    <td>Hello?</td>
                </tr>
                <tr>
                    <td>(&#8230;)</td>
                    <td>Гурӯҳбандии символҳо дар қавс</td>
                    <td>([A-Z][A-Za-z]+)</td>
                </tr>
                <tr>
                    <td>{&#8230;}</td>
                    <td>Шумораи такрории символҳои қаблӣ</td>
                    <td>Hello{4} — чор маротиба пай дар пай; Hello{1,4} — як то чор маротиба пай дар пай; Hello{4,} — як сатр чор маротиба дар як саф; Hello{,4} — як сатр аз сифр то чор маротиба дар як саф</td>
                </tr>
            </tbody>
        </table>
    </figure></p>
    <p>Бояд қайд кард, ки ҳарфҳои «Ё» ва «ё» ба диапазони [А-Я] ва [а-я] дохил намешаванд. Аз ин рӯ, онҳо бояд алоҳида дохил карда шаванд, вагарна ифодаи муқаррарӣ бо хатогиҳо кор мекунад.</p>
    <p>Хатти баръакс (\) метавонад метасимволҳоро ба символҳои муқаррарӣ табдил диҳад ва баръакс. Масалан, нуқтаи муқаррарӣ (.) аломати ихтиёриро ифода мекунад ва давра бо хатти баръакс (\.) танҳо давраро ифода мекунад. Ин принсип инчунин бо ҳарфҳои алифбои лотинӣ кор мекунад, ки онҳо метасимволҳо мешаванд.</p>
    <p><figure class="wp-block-table">
        <table>
            <tbody>
                <tr>
                    <td><strong>Символ</strong></td>
                    <td><strong>Вазифа</strong></td>
                </tr>
                <tr>
                    <td>\d</td>
                    <td>Ҳар як рақами вурудро иваз мекунад [0-9]</td>
                </tr>
                <tr>
                    <td>\D</td>
                    <td>Ҳама рақамҳоро нест мекунад, вурудро иваз мекунад [^0-9]</td>
                </tr>
                <tr>
                    <td>\s</td>
                    <td>Ҳама гуна символи холигӣ, аз ҷумла пробел, табулятсия, сатри нав ва баргардонидани каретка</td>
                </tr>
                <tr>
                    <td>\S</td>
                    <td>Ҳама гуна символ ба истиснои пробел</td>
                </tr>
                <tr>
                    <td>\w</td>
                    <td>Ҳама гуна ҳарф, рақам ва символи зерхаттиҳо (_)</td>
                </tr>
                <tr>
                    <td>\W</td>
                    <td>Ҳама гуна символ ба истиснои ҳарфҳо, рақамҳо и зерхаттиҳо</td>
                </tr>
                <tr>
                    <td>\A</td>
                    <td>Оғози сатр, ивазкунандаи вуруд ^</td>
                </tr>
                <tr>
                    <td>\Z</td>
                    <td>Охири сатр, ивазкунандаи вуруд $</td>
                </tr>
                <tr>
                    <td>\b</td>
                    <td>Оғози ё охири калима</td>
                </tr>
                <tr>
                    <td>\B</td>
                    <td>Миёнаи калима</td>
                </tr>
                <tr>
                    <td>\n</td>
                    <td>Сатри нав</td>
                </tr>
                <tr>
                    <td>\t</td>
                    <td>Табулятсия</td>
                </tr>
                <tr>
                    <td>\r</td>
                    <td>Баргаронидани каретка</td>
                </tr>
            </tbody>
        </table>
    </figure></p>
    <h3>Парчамҳои ифодаҳои муқаррарӣ дар Python</h3>
    <p>Парчамҳое, ки бо ифодаҳои муқаррарӣ истифода мешаванд, метавонанд иҷрои онҳоро суръат бахшанд ё рафтори ҷустуҷӯи онҳоро тағир диҳанд. Инҳоянд баъзе аз парчамҳои маъмултарин дар Python.</p>
    <p><figure class="wp-block-table">
        <table>
            <tbody>
                <tr>
                    <td><strong>Тавсифи мухтасари парчам</strong></td>
                    <td><strong>Вуруди пурраи парчам</strong></td>
                    <td><strong>Вазифа</strong></td>
                </tr>
                <tr>
                    <td>re.I</td>
                    <td>re.IGNORECASE</td>
                    <td>Регистри символҳоро сарфи назар мекунад</td>
                </tr>
                <tr>
                    <td>re.A</td>
                    <td>re.ASCII</td>
                    <td>Мувофиқатҳоро танҳо дар асоси ҷадвали аломатҳои ASCII бармегардонад</td>
                </tr>
                <tr>
                    <td>re.X</td>
                    <td>re.VERBOSE</td>
                    <td>Имкон медиҳад, ки шарҳҳоро дар ибораҳои муқаррарӣ истифода баред</td>
                </tr>
                <tr>
                    <td>re.S</td>
                    <td>re.DOTALL</td>
                    <td>Метасимвол нуқта (.) мувофиқатҳоро дар ҳама символҳо, аз ҷумла хати нав бармегардонад</td>
                </tr>
                <tr>
                    <td>re.L</td>
                    <td>re.LOCALE</td>
                    <td>Танзимоти минтақавиро ба \w, \W, \b, \B, \s ва \S илова мекунад, аммо танҳо дар сатри байт кор мекунад</td>
                </tr>
                <tr>
                    <td>re.M</td>
                    <td>re.MULTILINE</td>
                    <td>Дар оғози ҳар як сатри нав мувофиқатҳоро бармегардонад, агар бо ^ истифода шавад ва дар охири ҳар як сатри нав - агар бо $</td>
                </tr>
            </tbody>
        </table>
    </figure></p>
    <h3>Маводҳо барои мутоила:</h3>
    <ul>
        <li><p>"Mastering Regular Expressions" (3rd Edition) by Jeffrey Friedl <a href="https://docs.yandex.ru/docs/view?tm=1711686459&tld=ru&lang=en&name=Mastering%20Regular%20Expressions_%20Understand%20Your%20Data%20and%20Be%20More%20Productive%20(3rd%20ed.)%20%5BFriedl%202006-08-18%5D.pdf&text=%22Mastering%20Regular%20Expressions%22%20(3rd%20Edition)%20by%20Jeffrey%20Friedl&url=https%3A%2F%2Fdoc.lagout.org%2Fprogrammation%2FRegular%2520Expressions%2FMastering%2520Regular%2520Expressions_%2520Understand%2520Your%2520Data%2520and%2520Be%2520More%2520Productive%2520%25283rd%2520ed.%2529%2520%255BFriedl%25202006-08-18%255D.pdf&lr=10322&mime=pdf&l10n=ru&sign=00f26f0808b51d7398867e97ae028477&keyno=0&nosw=1&serpParams=tm%3D1711686459%26tld%3Dru%26lang%3Den%26name%3DMastering%2520Regular%2520Expressions_%2520Understand%2520Your%2520Data%2520and%2520Be%2520More%2520Productive%2520(3rd%2520ed.)%2520%5BFriedl%25202006-08-18%5D.pdf%26text%3D%2522Mastering%2BRegular%2BExpressions%2522%2B%25283rd%2BEdition%2529%2Bby%2BJeffrey%2BFriedl%26url%3Dhttps%253A%2F%2Fdoc.lagout.org%2Fprogrammation%2FRegular%252520Expressions%2FMastering%252520Regular%252520Expressions_%252520Understand%252520Your%252520Data%252520and%252520Be%252520More%252520Productive%252520%2525283rd%252520ed.%252529%252520%25255BFriedl%2525202006-08-18%25255D.pdf%26lr%3D10322%26mime%3Dpdf%26l10n%3Dru%26sign%3D00f26f0808b51d7398867e97ae028477%26keyno%3D0%26nosw%3D1">(скачать PDF)</a></p></li>
        <li><p>"Python 3 Text Processing with NLTK 3 Cookbook" by Jacob Perkins <a href="https://budditha.files.wordpress.com/2021/04/python-3-text-processing-with-nltk-3-cookbook.pdf">(скачать PDF)</a></p></li>
        <li><p>"Regular Expressions Cookbook" by Jan Goyvaerts, Steven Levithan <a href="https://karczmarczuk.users.greyc.fr/TEACH/TAL/Doc/Regular%20Expressions.pdf">(скачать PDF)</a></p></li>
    </ul>
    <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
    <ul>
        <li><p><a href="https://tproger.ru/translations/regular-expression-python">Python RegEx: практическое применение регулярок</a></p></li>
        <li><p><a href="https://habr.com/ru/articles/349860/">Регулярные выражения в Python от простого к сложному. Подробности, примеры, картинки, упражнения</a></p></li>
        <li><p><a href="https://skillbox.ru/media/code/regulyarnye-vyrazheniya-v-python-sintaksis-poleznye-funktsii-i-zadachi/?ysclid=ltwh1dmodg814455114">Регулярные выражения в Python: синтаксис, полезные функции и задачи</a></p></li>
    </ul>
    <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
    <ul>
        <li><p><a href="https://www.udemy.com/course/ittensive-python-regular-expressions/?couponCode=24T5FS31824">Регулярные выражения в Python</a></p></li>
        <li><p><a href="https://www.coursera.org/projects/regular-expressions-in-python">Regular Expressions in Python</a></p></li>
        <li><p><a href="https://translated.turbopages.org/proxy_u/en-ru.ru.b2ac4304-65f7cb57-ea7a9b5d-74722d776562/https/www.udemy.com/course/python-regex/">Python Regular Expressions Complete Masterclass</a></p></li>
    </ul>
    <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
    <ul>
        <li><p><a href="https://stepik.org/course/179053/promo">Регулярные выражения Python</a></p></li>
        <li><p><a href="https://stepik.org/course/107335/promo">Регулярные выражения в Python</a></p></li>
        <li><p><a href="https://deepskills.ru/courses/regular-expressions/?ysclid=ltwhep87tb875158047">Регулярные выражения в Python</a></p></li>
    </ul>
    <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
    <ul>
        <li><p><a href="https://www.reddit.com/r/Python/?rdt=60471">Reddit</a></p></li>
        <li><p><a href="https://www.python.org/community/forums/">Python.org</a></p></li>
        <li><p><a href="https://www.cyberforum.ru/python/?ysclid=ltwhrrore5900284198">Сyberforum</a></p></li>
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
        <li><p><a href="https://docs.python.org/3/library/re.html">re — Regular expression operations</a></p></li>
    </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>