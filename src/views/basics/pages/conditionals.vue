<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Conditionals - Шартҳо</h1>


          <h3>Асосҳои ифодаи шартӣ</h3>


          <p>Дар Python, шартҳо барои иҷрои амалҳои муайян дар асоси ҳақиқат ё дурӯғ будани баъзе шартҳо истифода
            мешаванд. Онҳо бо истифода аз конструксияҳои if, elif (агар зарурати тафтиши якчанд шарт дар як саф) ва дар
            ҳолати зарурӣ дигар (агар ҳеҷ яке аз шартҳои қаблӣ иҷро нашуда бошанд) амалӣ карда мешаванд.</p>
          <p>Шарҳи асосии бунёдҳои if, elif ва else дар Python, шарҳи истифода ва синтаксиси онҳоро.</p>
          <h3>Ин аст як мисоли истифодаи шартҳо дар Python</h3>
          <pre><code>
        x = 10

        if x > 0:
            print("x - положительное число")
        elif x == 0:
            print("x равен нулю")
        else:
            print("x - отрицательное число")
    </code></pre>
          <p>Дар ин мисол, агар x аз сифр бузургтар бошад, паёми "x адади мусбат аст" чоп карда мешавад. Агар x сифр
            бошад, "х сифр аст" чоп карда мешавад. Дар ҳама ҳолатҳои дигар (яъне, агар x аз сифр камтар бошад), "x адади
            манфӣ аст" чоп карда мешавад.</p>


          <p>Шартҳо инчунин метавонанд дар байни ҳамдигар барои санҷишҳои мураккабтар ҷойгир карда шаванд.</p>
          <h3>Инак як мисол:</h3>
          <pre><code>
        x = 10
        y = 5
        
        if x > 0:
            if y > 0:
                print("x и y - положительные числа")
            else:
                print("x положительное, y отрицательное")
        else:
            print("x отрицательное")
    </code></pre>
          <p>Инҳо танҳо мисолҳои асосӣ мебошанд. Дар Python, шартҳоро вобаста ба эҳтиёҷоти барнома бо тарзҳои хеле
            мураккаб ва гуногун истифода бурдан мумкин аст.</p>

          <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
          <ul>
            <li>
              <p><a href="https://docs.python.org/3/tutorial/controlflow.html">Официальная документация Python</a></p>
            </li>
            <li>
              <p><a
                  href="https://www.codecademy.com/catalog/language/python?g_network=g&g_productchannel=&g_adid=528849219298&g_locinterest=&g_keyword=codecademy%27s%20learn%20python&g_acctid=243-039-7011&g_adtype=&g_keywordid=kwd-1960775174838&g_ifcreative=&g_campaign=account&g_locphysical=9070270&g_adgroupid=128133970308&g_productid=&g_source={sourceid}&g_merchantid=&g_placement=&g_partition=&g_campaignid=1726903838&g_ifproduct=&utm_id=t_kwd-1960775174838:ag_128133970308:cp_1726903838:n_g:d_c&utm_source=google&utm_medium=paid-search&utm_term=codecademy%27s%20learn%20python&utm_campaign=INTL_Brand_Exact&utm_content=528849219298&g_adtype=search&g_acctid=243-039-7011&gad_source=1&gclid=Cj0KCQjw8J6wBhDXARIsAPo7QA_2sf_fPi-B-kROJ1Ymib8A-fnPTtFFEh-VksFrvz-LIjPO3ufYkVkaAinGEALw_wcB">Codecademy</a>
              </p>
            </li>
            <li>
              <p><a href="https://realpython.com/python-conditional-statements/">Real Python</a></p>
            </li>
          </ul>
          <h3>Китобҳо</h3>

          <ul>
            <li>
              <p>Python Crash Course" by Eric Matthes<a
                  href="https://edisciplinas.usp.br/pluginfile.php/7880239/mod_folder/content/0/Eric%20Matthes%20-%20Python%20Crash%20Course-No%20Starch%20Press%20%282023%29.pdf?forcedownload=1">(скачать
                  PDF)</a></p>
            </li>
            <li>
              <p>"Automate the Boring Stuff with Python" by Al Sweigart <a
                  href=https://edu.anarcho-copy.org/Programming%20Languages/Python/Automate%20the%20Boring%20Stuff%20with%20Python.pdf>(скачать
                  PDF)</a></p>
            </li>
          </ul>

          <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
          <ul>
            <li>
              <p><a href="https://www.udemy.com/course/lambda-expressions-in-python/?couponCode=LETSLEARNNOW">Lambda
                  Expressions in Python</a></p>
            </li>
            <li>
              <p><a
                  href="https://translated.turbopages.org/proxy_u/en-ru.ru.48f240bd-65f928c1-56213c43-74722d776562/https/www.udemy.com/course/build-and-deploy-lambda-functions-aws-with-python-and-boto3/">Build
                  and Deploy Lambda Functions: AWS with Python and Boto3</a></p>
            </li>
            <li>
              <p><a href="https://www.coursera.org/projects/where-why-and-how-of-lambda-functions-in-python">Where,
                  Why, and How of Lambda Functions in Python</a></p>
            </li>
          </ul>
          <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
          <ul>
            <li>
              <p><a
                  href="https://matesanz.github.io/python-machine-learning-course/%F0%9F%93%9A-Tutorials/%F0%9F%90%8D-Python-Basics/decorators/">Python
                  for Machine Learning Course</a></p>
            </li>
            <li>
              <p><a href="https://metanit.com/python/tutorial/2.18.php?ysclid=ltxyptuyr727230899">Лямбда-выражения</a>
              </p>
            </li>
            <li>
              <p><a href="https://timosii.gitbook.io/py_tutorial/funkcii/funkcionalnoe-programmirovanie">Функциональное
                  программирование</a></p>
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
              <p><a href="https://jupyter.org/">Jupyter</a></p>
            </li>
          </ul>
          <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
          <ul>
            <li>
              <p><a href="https://ru.hexlet.io/blog/posts/python-freymvork">Django и Flask</a></p>
            </li>
            <li>
              <p><a href=https://pandas.pydata.org>Pandas Python</a></p>
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