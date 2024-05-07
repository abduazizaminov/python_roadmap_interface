<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Type Costing, Exceptions - Навъи хароҷот, Истисноҳо</h1>
          <h5>Таҳиягар: Қодиров Н.Н.</h5>
          <p>Дар Python, ба монанди дигар забонҳои барномасозӣ, намудҳои зиёди додаҳо мавҷуданд, ба монанди бутун,
            шинокунанда, сатр ва ғайра.
            Ҳисобкунӣ ба иҷрои амалҳои арифметикӣ дар ададҳо, ба монанди ҷамъ, тарҳ, зарб ва тақсим дахл дорад.</p>
          <h4>Мисол:</h4>
            <p>-Барои иҷрои амалҳои арифметикӣ танҳо операторҳоро дар ифодаҳо истифода баред.</p>
            <pre><code>
        x = 10
        y = 5
        sum = x + y  # Натиҷа: 15
        difference = x - y  # Натиҷа: 5
        product = x * y  # Натиҷа: 50
        quotient = x / y  # Натиҷа: 2.0 (дар Python 3 натиҷа ҳамеша монанд аст float)
        </code></pre>
              <p>
                Шарҳ мефаҳмонад, ки ҳар як амалиёт дар тағирёбандаҳои x ва y иҷро карда мешавад ва натиҷа ба
              тағирёбандаи мувофиқ таъин карда мешавад.
              </p>
              <ul>
                <li>
                  <p>difference - рамзи фарқият барои нигоҳ доштани фарқияти байни арзишҳои тағирёбандаҳои x ва y
                    истифода мешавад</p>
                </li>
                <li>
                  <p>product - Тағйирёбанда барои нигоҳ доштани ҳосили арзишҳои тағирёбандаҳои x ва y истифода мешавад.
                    Он дар натиҷаи зарб кардани x * y ва натиҷа ҳисоб карда мешавад</p>
                </li>
                <li>
                  <p>quotient - дар коди шумо барои нигоҳ доштани қисмати арзиши тағирёбандаи x ба арзиши тағирёбандаи
                    y истифода мешавад. Он бо тақсим кардани x / y ҳисоб карда мешавад</p>
                </li>
              </ul>
            <h4>Амалиётҳои муқоисавӣ ва операторҳои мантиқӣ:</h4>

            <p>Операторҳои муқоисавӣ барои муқоисаи арзишҳо ва баргардонидани арзиши мантиқӣ (True ё False) истифода
              мешаванд.</p>
            <h4>Операторҳои муқоисавии асосӣ:</h4>
            <ul>
              <li>== (баробар)</li>
              <li>!= (баробар нест)</li>
              <li>> (калонтар аз)</li>
              <li>< (кам)</li>
              <li>>= (калонтар аз ё баробар)</li>
              <li><= (камтар ё баробар)</li>
            </ul>
                  <h4>Операторҳои мантиқӣ (and, or, not) барои якҷоя кардани шартҳо истифода мешаванд.</h4>
                  <h4>Мисол:</h4>
                  <pre><code>
        x = 10
        y = 5
        result1 = x > y  # Натиҷа: True
        result2 = x == 10 and y < 3  # Натиҷа: False
        result3 = not(x > 10 or y < 3)  # Натиҷа: True
            </code></pre>
                  <h4>Сохтмони шартӣ:</h4>
                  <ul>
                    <li>
                      <p>Конструксияҳои шартӣ (агар, elif, else) ба шумо имкон медиҳанд, ки блокҳои гуногуни кодро
                        вобаста ба дуруст будани шартҳо иҷро кунед.</p>
                    </li>
                    <li>
                      <p>Калимаи калидии if -ро барои санҷиши як шарт истифода баред, elif (кӯтоҳи "дигар агар") барои
                        санҷиши шартҳои иловагӣ ва дар акси ҳол барои иҷро кардани код, агар ҳеҷ яке аз шартҳои қаблӣ
                        дуруст набошад, истифода баред.</p>
                    </li>
                  </ul>
                  <pre><code>
        x = 10
        if x > 0:
          print("x мусбат")
        elif x == 0:
          print("x баробар аст 0")
        else:
          print("x манфӣ")
                    </code></pre>
          <h3>Cимволҳо</h3>
              <table>
                <tbody>
                  <tr>
                    <td>илова</td>
                    <td>(+)</td>
                  </tr>
                  <tr>
                    <td>тарҳкунӣ</td>
                    <td>(-)</td>
                  </tr>
                  <tr>
                    <td>зарбкунӣ</td>
                    <td>(*)</td>
                  </tr>
                  <tr>
                    <td>тақсимот</td>
                    <td>^/</td>
                  </tr>
                  <tr>
                    <td>баробар аст</td>
                    <td> (==)</td>
                  </tr>
                  <tr>
                    <td>баробар нест</td>
                    <td>(!=)</td>
                  </tr>
                  <tr>
                    <td>Бештар</td>
                    <td>(>)</td>
                  </tr>
                  <tr>
                    <td>Камтар</td>
                    <td>(<)</td>
                  </tr>
                  <tr>
                    <td>бештар ё баробар</td>
                    <td>(>=)</td>
                  </tr>
                  <tr>
                    <td>камтар ё баробар</td>
                    <td>(<=)</td>
                  </tr>
                </tbody>
              </table>
          <h3>Парчамҳои ифодаҳои муқаррарӣ дар Python</h3>
          <p>Парчамҳое, ки бо ифодаҳои муқаррарӣ истифода мешаванд, метавонанд иҷрои онҳоро суръат бахшанд ё рафтори
            ҷустуҷӯи онҳоро тағир диҳанд. Инҳоянд баъзе аз парчамҳои маъмултарин дар Python.</p>
              <table>
                <tbody>
                  <tr>
                    <td><p>Тавсифи мухтасари парчам</p></td>
                    <td><p>Вуруди пурраи парчам</p></td>
                    <td><p>Вазифа</p></td>
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
                    <td>Танзимоти минтақавиро ба \w, \W, \b, \B, \s ва \S илова мекунад, аммо танҳо дар сатри байт кор
                      мекунад</td>
                  </tr>
                  <tr>
                    <td>re.M</td>
                    <td>re.MULTILINE</td>
                    <td>Дар оғози ҳар як сатри нав мувофиқатҳоро бармегардонад, агар бо ^ истифода шавад ва дар охири
                      ҳар як сатри нав - агар бо $</td>
                  </tr>
                </tbody>
              </table>
          <h3>Маводҳо барои мутоила:</h3>
          <ul>
            <li>
              <p><a href="https://stackoverflow.com">Stack Overflow</a></p>
            </li>
            <li>
              <p><a href='https://www.reddit.com'>Reddit</a></p>
            </li>
            <li>
              <p><a href='https://dev.to'>DEV Community</a></p>
            </li>
          </ul>

          <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
          <ul>
            <li>
              <p><a
                  href="https://www.udemy.com/course/ittensive-python-regular-expressions/?couponCode=24T5FS31824">Регулярные
                  выражения в Python</a></p>
            </li>
            <li>
              <p><a href="https://www.coursera.org/projects/regular-expressions-in-python">Regular Expressions in
                  Python</a></p>
            </li>
            <li>
              <p><a
                  href="https://translated.turbopages.org/proxy_u/en-ru.ru.b2ac4304-65f7cb57-ea7a9b5d-74722d776562/https/www.udemy.com/course/python-regex/">Python
                  Regular Expressions Complete Masterclass</a></p>
            </li>
          </ul>

          <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
          <ul>
            <li>
              <p><a href="https://www.reddit.com/r/Python/?rdt=60471">Reddit</a></p>
            </li>
            <li>
              <p><a href="https://www.python.org/community/forums/">Python.org</a></p>
            </li>
            <li>
              <p><a href="https://www.cyberforum.ru/python/?ysclid=ltwhrrore5900284198">Сyberforum</a></p>
            </li>
          </ul>
          <h3>Муҳити коркарди нармафзор:</h3>
          <ul>
            <li>
              <p><a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a></p>
            </li>
            <li>
              <p><a href="https://code.visualstudio.com/">Visual Studio Code</a></p>
            </li>
            <li>
              <p><a href='https://www.sublimetext.com'>Sublime Text</a></p>
            </li>
          </ul>
          <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
          <ul>
            <li>
              <p><a href="https://docs.python.org/3/library/index.html">NumPy</a></p>
            </li>
            <li>
              <p><a href="https://docs.python.org/3/library/re.html">Matplotlib</a></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/pages.css'
</style>