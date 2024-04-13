<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Lists, Tuples, Sets, Dictionaries - Рӯйхатҳо, феҳристҳо, маҷмӯаҳо, луғатҳо</h1>
    <p>Рӯйхатҳо маҷмӯи унсурҳои фармоишӣ мебошанд, ки онҳоро тағир додан мумкин аст. Онҳо ба шумо имкон медиҳанд, ки ҳама гуна маълумот, аз ҷумла рӯйхатҳои дигарро нигоҳ доред. Рӯйхатҳо дар Python бо истифода аз қавсҳои мураббаъ муайян карда мешаванд.([ ])</p>
        <pre><code>
            my_list = [1, 2, 3, 4, 5]
        </code></pre>
        <h4>Намунаи истифодаи рӯйхатҳо:</h4>
        <pre><code>
        my_list = [1, 2, 3, 4, 5]  # Эҷоди рӯйхат
        my_list.append(6)          # Илова кардани элемент ба охири рӯйхат
        my_list.remove(3)          # Хориҷ кардани ашё аз рӯйхат
        print(my_list)             # Хулоса: [1, 2, 4, 5, 6]
        </code></pre>
         <p>Корбарҳо инчунин коллексияҳои элементҳоро фармоиш медиҳанд, аммо онҳо тағирнопазиранд. Онҳо бо истифода аз қавс муайян карда мешаванд (())</p>
         <pre><code>
            my_tuple = (1, 2, 3, 4, 5)
        </code></pre>
        <h4>Намунаи истифодаи лентаҳо:</h4>
        <pre><code>
        my_tuple = (1, 2, 3, 4, 5)  # Эҷоди Tuple
        # my_tuple[0] = 10          # Хатогӣ: Наворҳо тағирнопазиранд
        print(my_tuple)             # Хулоса: (1, 2, 3, 4, 5)
        </code></pre>

        <p>Маҷмӯаҳо маҷмӯи бетартиби унсурҳои беназир мебошанд. Онҳо метавонанд тағирёбанда бошанд ва бо истифода аз қавсҳои ҷингила муайян карда шаванд ({ })</p>
        <pre><code>
            my_set = {1, 2, 3, 4, 5}
       </code></pre>
       <h4>Намунаи истифодаи маҷмӯи:</h4>
       <pre><code>
        my_set = {1, 2, 3, 4, 5}   # Маҷмӯа эҷод кунед
        my_set.add(6)               # Илова кардани элемент ба маҷмӯи
        my_set.remove(3)            # Хориҷ кардани элемент аз маҷмӯи
        print(my_set)               # Хулоса: {1, 2, 4, 5, 6}
   </code></pre>
       <p>Луғатҳо маҷмӯи ҷуфтҳои калид-арзиш мебошанд. Онҳо дастрасии фаврӣ ба элементҳоро тавассути калид фароҳам меоранд ва бо истифода аз қавсҳои ҷингила ({ }) муайян карда мешаванд, ки дар он ҳар як ҷуфти калид-қимат бо аломати қавс ҷудо карда мешавад. (:)</p>
       <pre><code>
        my_dict = {"apple": 3, "banana": 2, "orange": 5}
      </code></pre>
      <h4>Намунаи истифодаи луғатҳо:</h4>
      <pre><code>
        my_dict = {"apple": 3, "banana": 2, "orange": 5}  # Эҷоди луғат
        my_dict["banana"] = 4                            # Навсозии арзиш аз рӯи калидc
        del my_dict["orange"]                            # Хориҷ кардани элемент аз луғат
        print(my_dict)                                   # Хулоса: {'apple': 3, 'banana': 4}ц
      </code></pre>
<p>Ҳар яке аз ин сохторҳои додаҳо дорои хусусиятҳои худро доранд ва барои вазифаҳои гуногун мувофиқанд. Сохтори мушаххасе, ки шумо интихоб мекунед, аз талаботи лоиҳаи шумо вобаста аст: масалан, агар ба шумо лозим аст, ки унсурҳои фармоишӣ ва таҳриршавандаро нигоҳ доред, рӯйхатро истифода баред; агар ба шумо лозим аст, ки унсурҳои беназирро бидуни фармоиш нигоҳ доред, маҷмӯи истифода баред; агар ба шумо лозим аст, ки элементҳоро бо калид зуд пайдо кунед, луғатро истифода баред.</p>

    <h3>Маводҳо барои мутоила:</h3>
    <ul>
        <li><p>Ҳуҷҷатҳои расмии Python дорои тавсифи муфассали рӯйхатҳо, феҳристҳо, маҷмӯаҳо ва луғатҳо, инчунин мисолҳо ва дастурҳои истифодаи онҳо мебошад.<a href=https://www.python.org> Python </a></p></li>
        <li><p> Python Crash Course" by Eric Matthes<a href="https://edisciplinas.usp.br/pluginfile.php/7880239/mod_folder/content/0/Eric%20Matthes%20-%20Python%20Crash%20Course-No%20Starch%20Press%20%282023%29.pdf?forcedownload=1">(скачать PDF)</a></p></li>
        <p>Ин китоб муқаддимаи оддӣ ва возеҳ ба асосҳои Python, аз ҷумла рӯйхатҳо, наворҳо, маҷмӯаҳо ва луғатҳоро пешниҳод мекунад. Он дорои бисёр мисолҳо ва машқҳои рамзӣ мебошад.</p>
        <li><p>"Fluent Python" by Luciano Ramalho <a href="https://cdnpdf.com/embed/38247-fluent-python-clear-concise-and-effective-programming-by-luciano-ramalho">(скачать PDF) </a></p></li>
        <p>Ин китоб ба ҷанбаҳои гуногуни забони Python, аз ҷумла маҷмӯаҳо ва луғатҳо амиқтар назар мекунад ва онҳоро дар заминаи принсипҳои васеътари барномасозии Python шарҳ медиҳад.</p>
    </ul>
    <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
    <ul>
        <li><p><a href="https://ru.stackoverflow.com/">Stack Overflow</a></p></li>
        <li><p><a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiz-NOeoLCFAxWDZ5EFHUNLDP0YABAAGgJscg&ase=2&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xS7xH3KyFJt0Sjm3OLO4J4nuOQAnZNvmuHvKgZjHISsqA8FpaNZ2zUaAhzOEALw_wcB&ohost=www.google.com&cid=CAESV-D2TaN0xnCUdr-CBPQv3_0XcHjPKJ2xxwgHM-P_FHogK4EnCmWMOy4aEyDf9eSnNhq_reTy5ZdaKvxoq7n9OqJIbon25bKkot9HUDOWTAb3eDWdN-ywdA&sig=AOD64_3VviCQtKqT9T3c7slU_DJ6J6EEeg&q&nis=4&adurl&ved=2ahUKEwj9-M6eoLCFAxW-IRAIHUrCDfgQ0Qx6BAgIEAE">Telegram/Slack</a></p></li>
        <li><p><a href="https://www.cyberforum.ru/python/?ysclid=ltwhrrore5900284198">Сyberforum</a></p></li>
    </ul>
    <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
    <ul>
        <li><p><a href="https://docs.python.org/3/library/index.html">NumPy</a></p></li>
        <li><p><a href="https://docs.python.org/3/library/re.html">Matplotlib</a></p></li>
    </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/pages.css'
</style>