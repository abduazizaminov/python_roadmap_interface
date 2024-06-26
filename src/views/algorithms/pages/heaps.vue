<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Heaps, Stacks and Queues - Стекҳо, тӯдаҳо ва навбатҳо</h1>
          <h5>Таҳиягар: Асирӣ М.Ф.</h5>
          <h3>
            Сохтани тӯда
          </h3>
          <p>
            Тӯда бо истифода аз китобхонаи дохилии python бо номи heapq сохта мешавад. Ин китобхона дорои вазифаҳои
            мувофиқ барои анҷом додани амалиётҳои гуногун дар сохтори маълумотҳои тӯда мебошад. Дар зер рӯйхати ин функсияҳо
            оварда шудааст.
          </p>
          <ul>
            <li>heapify - ин функсия рӯйхати муқаррариро ба тӯда табдил медиҳад. Дар тӯда натиҷаи хурдтарин элемент ба
              мавқеи индекс 0  мешавад. Аммо боқимондаи элементҳои додаҳо ҳатман мураттаб карда намешаванд.
            </li>
            <li>heappush - ин функсия бетағйир додани тӯдаи ҷорӣ элементро ба тӯда илова мекунад.</li>
            <li>heappop - ин функсия хурдтарин унсури маълумотро аз теппа бармегардонад.</li>
            <li>heapreplace - ин функсия хурдтарин унсури маълумотро бо арзиши наве, ки дар функсия дода шудааст, иваз
              мекунад.</li>
          </ul>
          <h3>
            Сохтани тӯдаи одди

          </h3>
          <p>
            Heapify (iterable): - ин функсия барои табдил додани объекти такроршаванда дар сохтори додаҳои тӯда
            истифода мешавад.
          </p>
          <pre><code>
        # importing "heapq" to implement heap queue
        import heapq

        # initializing list
        li = [5, 7, 9, 1, 3]

        # using heapify to convert list into heap
        heapq.heapify(li)

        # printing created heap
        print ("The created heap is : ",(list(li)))
        Натиҷа
        Тӯдаи сохташуда: [1, 3, 9, 7, 5]
    </code></pre>
          <h3>
            Дохилкуни ва хориҷкунии элемент
          </h3>
          <p>
            heappush(heap, ele) - ин функсия барои ворид кардани унсури дар аргументҳои он зикршуда ба тӯда
            истифода мешавад. Тартиб танзим карда мешавад, то сохтори тӯда нигоҳ дошта шавад.
            heappop(heap) - ин функсия барои нест кардан ва баргардонидани элементи хурдтарин аз тӯда истифода
            мешавад.
            Тартиб тавре танзим карда мешавад, ки сохтори тӯда нигоҳ дошта шавад.
          </p>
          <pre><code>
        # importing "heapq" to implement heap queue
        import heapq

        # initializing list
        li = [5, 7, 9, 1, 3]

        # using heapify to convert list into heap
        heapq.heapify(li)

        # printing created heap
        print("The created heap is : ", end="")
        print(list(li))

        # using heappush() to push elements into heap
        # pushes 4
        heapq.heappush(li, 4)

        # printing modified heap
        print("The modified heap after push is : ", end="")
        print(list(li))

        # using heappop() to pop smallest element
        print("The popped and smallest element is : ", end="")
        print(heapq.heappop(li))
        Натиҷа:
        The created heap is : [1, 3, 9, 7, 5]
        The modified heap after push is : [1, 3, 4, 7, 5, 9]
        The popped and smallest element is : 1
    </code></pre>
          <h4>
            Илова ва хориҷ кардан дар як вақт
          </h4>
          <p>
            heappushpop(heap, ele) - ин функсия амалиёти ҳам push ва pop-po дар як изҳорот муттаҳид намуда,
            самаранокии онро зиёд мекунад. Тартиби тӯда пас аз ин амалиёт нигоҳ дошта мешавад.
            heapreplace(heap, ele) - ин функсия инчунин элементҳоро дар як оператор дохил мекунад ва мебарорад.
            Дар ин, элемент аввал дохил карда мешавад, баъд элемент хориҷ мекунад,
            яъне, арзиши калонтар аз арзиши дохилкарда метавонад баргардонида шавад. heapreplace() дар муқоиса бо
            heappushpop()
            арзиши хурдтаринро дар тӯда бар мегардонад, новобаста аз элементи дохилшуда.
          </p>
          <pre><code>
        # importing "heapq" to implement heap queue
        import heapq

        # initializing list 1
        li1 = [5, 1, 9, 4, 3]

        # initializing list 2
        li2 = [5, 7, 9, 4, 3]

        # using heapify() to convert list into heap
        heapq.heapify(li1)
        heapq.heapify(li2)

        # using heappushpop() to push and pop items simultaneously
        # pops 2
        print("The popped item using heappushpop() is : ", end="")
        print(heapq.heappushpop(li1, 2))

        # using heapreplace() to push and pop items simultaneously
        # pops 3
        print("The popped item using heapreplace() is : ", end="")
        print(heapq.heapreplace(li2, 2))
        Натиҷа:
        The popped item using heappushpop() is : 1
        The popped item using heapreplace() is : 3
  </code></pre>
          <h3>Стек дар Python</h3>
          <p>
            Стек сохтоҷри хаттии додаҳост, ки элементро ба тарзи Last-In/First-out (LIFO) ё First-In/Last-out (FILO)
            нигоҳ медорад.
            Дар стек, як элементи нав дар як канор илова карда мешавад ва элемент танҳо аз он канор хориҷ карда мешавад.
            Амалҳои дохил кардан ва нест карданро аксар вақт push ва pop меноманд.
          </p>
          <h4>
            Функсияҳое, ки бо стек алоқаманданд:
          </h4>
          <ul>
            <li>empty() – бармегардонад, ки оё стек холӣ аст ё не   </li>
            <li>size() – андозаи стекро бармегардонад </li>
            <li>top() / peek() – истинодро ба унсури болоии стек бармегардонад</li>
            <li>push(a) - элементи 'a'-ро дар болои стек ҷойгир мекунад </li>
            <li>pop() – элементи болотарини стекро нест мекунад </li>
          </ul>
          <p>
            Стеки Python метавонад бо истифода аз синфи deque аз модули коллексияҳо амалӣ карда шавад.
            Дар ҳолатҳое, ки ба мо амалиёти зудтари замима ва поп аз ҳарду канори контейнер лозим аст, аз рӯйхат
            бартарӣ дода мешавад, зеро deque дар муқоиса бо рӯйхате, ки O(n) -ро таъмин мекунад, мураккабии вақти
            O(1)-ро
            барои амалиёти замима ва поп таъмин мекунад. мураккабии вақт.
            Ҳамин усулҳое, ки дар рӯйхат дида мешаванд, дар deque истифода мешаванд, append() ва pop().
          </p>
          <pre><code>
        # Python program to
        # demonstrate stack implementation
        # using collections.deque

        from collections import deque

        stack = deque()

        # append() function to push
        # element in the stack
        stack.append('a')
        stack.append('b')
        stack.append('c')

        print('Initial stack:')
        print(stack)

        # pop() function to pop
        # element from stack in
        # LIFO order
        print('\nElements popped from stack:')
        print(stack.pop())
        print(stack.pop())
        print(stack.pop())

        print('\nStack after elements are popped:')
        print(stack)

        # uncommenting print(stack.pop())
        # will cause an IndexError
        # as the stack is now empty
        </code></pre>
          <h3>Маводҳо барои мутолиа:</h3>
          <ul>
            <li><a
                href="https://ia801807.us.archive.org/26/items/data-structures-and-algorithms-in-python-pdfdrive/Data%20Structures%20and%20Algorithms%20in%20Python%20%28%20PDFDrive%20%29.pdf">
                Data Structures and Algorithms in Python:Michael T. Goodrich,Roberto Tamassia,
                Michael H. Goldwasser/6 Stacks, Queues and Deques саҳ:228</a></li>
            <li><a href="https://static.realpython.com/python-tricks-book/Python%20Tricks%20Sample.pdf">Python Tricks:
                The Book:Dan Bader/5.5 Stacks (LIFOs) саҳ:189</a></li>
            <li><a href="https://palchevsky.ru/uploads/books/Python_1.pdf">Простой Python-Современный стиль
                программировани:Билл Любанович/Стек + очередь == deque саҳ:235</a></li>

          </ul>

          <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
          <ul>
            <li><a href="https://pythonist.ru/realizacziya-steka-na-python/">Реализация стека на Python</a></li>
            <li><a href="https://www.tutorialspoint.com/python_data_structure/python_heaps.htm">Python-Heaps</a></li>
            <li><a href="https://www.geeksforgeeks.org/heap-queue-or-heapq-in-python/">Heap queue (or heapq) in
                Python</a></li>
          </ul>

          <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
          <ul>
            <li><a
                href="https://www.udemy.com/course/learning-data-structures-algorithms-in-python-from-scratch/?couponCode=GENAISALE24">Data
                Structures and Algorithms: In-Depth using Python</a></li>
            <li><a
                href="https://www.udemy.com/course/python-programming-for-beginners-with-exercises/?couponCode=KEEPLEARNING">
                Python Bootcamp: Master Python Programming in 2024</a></li>
            <li><a
                href="https://www.edx.org/executive-education/university-of-cape-town-data-science-with-python?index=product&queryID=7db741ebe5d707d38666d4e56dc5f572&position=3&results_level=first-level-results&term=python+queues&objectID=course-2502405e-c165-4089-96fd-86db78dd4f21&campaign=Data+Science+with+Python&source=2u&product_category=executive-education&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch">Data
                Science with Python</a></li>
          </ul>

          <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
          <ul>
            <li><a href="https://realpython.com/queue-in-python/">Python Stacks, Queues, and Priority Queues in
                Practice</a></li>
            <li><a
                href="https://stephanosterburg.gitbook.io/scrapbook/coding/coding-interview/data-structures/heaps-stacks-queues">Heaps,
                Stacks, Queues</a></li>
            <li><a href="https://www.youtube.com/watch?v=5i_Gnemfm4o">Делаем очередь (queue) | Алгоритмы на Python</a>
            </li>
          </ul>
          <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
          <ul>
            <li><a href="https://discuss.python.org/t/extracting-python-heap-from-core-dump/23522">Extracting Python
                heap from core dump</a></li>
            <li><a href="https://www.devglan.com/programming/python-forums">Best Python Forums and community</a> </li>
            <li><a href="https://itfy.org/threads/vopros-po-stack.3635/">Вопрос по Stack</a></li>
          </ul>

          <h3>Муҳити коркарди нармафзор</h3>
          <ul>
            <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
            <li><a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a></li>
            <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
          </ul>

          <h3>Онлайн муҳити санҷиши коди барномавӣ:</h3>
          <ul>
            <li><a href="https://www.programiz.com/python-programming/online-compiler/">Python Online Compiler</a></li>
            <li><a href="https://bio-python.netlify.app/">Online Python - IDE, Editor, Compiler, Interpreter</a></li>
            <li><a href="https://www.online-ide.com/online_python_compiler#google_vignette">Online Python Compiler -
                OnlineIDE</a></li>
          </ul>

          <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
          <ul>
            <li><a
                href="https://www.pluralsight.com/cloud-guru/labs/aws/building-a-web-application-with-python-and-flask?utm_source=google&utm_medium=paid-search&utm_campaign=cloud-transformation&utm_term=ssi-global-acg-core-dsa-labs&utm_content=free-trial&gad_source=5&gclid=EAIaIQobChMI_K-S6aWehQMVcECRBR10xA2ZEAAYASAAEgJP8fD_BwE">Flask</a>
            </li>
            <li><a href="https://scipy.org/">SciPy</a></li>
            <li><a href="https://matplotlib.org/">Matplotlib</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import '@/assets/pages.css'
</style>