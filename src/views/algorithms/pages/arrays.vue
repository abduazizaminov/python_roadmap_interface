<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Arrays and Linkend lists - Массивҳо ва ҳаволаҳо</h1>
          <p>
            Массив маҷмӯаи элементҳоест, ки пайдарпай дар хотира нигоҳ дошта мешаванд ва намуди умумии хели додаҳоро
            доранд.
            Ҳар як элементи он индекси худро дорад, ки имконияти хондан ё тағйир додани қиммати масивро дорад.
            Дар Python бошад массив ин контейнере , ки якчанд маълумотро нигоҳ дошта метавонад. Барои иҷро
            намудани амалҳои математики массивҳои NumPy-ро тавассути ворид кардани модули NumPy истифода бурда
            мешавад.Бо Python бисёp
            амалиётҳои муфидро бо массив таъмин мекунад.
          </p>
            <h3>Якчанд амалиёт бо массивҳо:</h3 >
            <h4>1. Функсияи len().</h4>
            <p>
              Бо ёрии функсияи мазкур миқдори элементҳои массивро ҳисоб намудан мумкин аст.
              Мисол:
            </p>
            <pre><code>
        >>> integers = array('i',[1,2,3,4,5])
        >>> print(len(integers))
        5
            </code></pre>

            <h4>2. print(array[number])</h4>
            <p>
              Индексизатсияи массив яке аз амалиётҳои асосӣ мебошад. Он имконияти ба ҳар як элемент амалиёт гузарониданро
              имконият медиҳад. Индексизатсияи массив дар Python аз 0 сар мешавад. Ин маънои онро дорад, ки якум элементи
              массив индекси 0 , дуюм - 1 сеюм - 2 -ро қабул мекунад.
              <br>Барои дастраси ба элементҳои массив ва индекси он аз қавсҳои квадрати истифода бурда мешавад. Масалан
              барои дастраси ба элементи якуми массив аз ифодаи array[0]
              лозим аст. <br> Бо истифода аз print(array[number]) мо ба элементҳо индекс бахшида ва ба мо мувофиқашро
              мебарорад.<br>
            </p>
            <pre><code>
        >>>floats=array('d',[3.5, 7.2, 5.3, 9.5, 4.0])
        >>>print(floats[0])
        3.5
        >>>print(floats[4])
        4.0
        >>>print(floats[1])
        7.2
            </code></pre>
            <p>
              Ҳангоми элементи аз массив берунро нависем система хотогиро нишон медиҳад.
            </p>
            <pre><code>
        >>>print(floats[5])
        Traceback (most recent call last): 
          File ("pyshell#9",line 1, in 'module')
           print(floats[5])
        IndexError: array index out of range
            </code></pre>
            <h4>3. for</h4>
            <p>
              Ҳангоми кор бо массивҳо сикл нақши муҳимро мебозад. Онҳо имконият медиҳанд, ки амалҳои такроршаванда дар ҳар
              як элементи массив гузаронида шавад. Мисол:
            </p>
            <pre><code>
        >>>> for d in floats:
        print(d)
        3.5
        7.2
        5.3
        9.5
        4.0
            </code></pre>
            <h4>
              4.append()
            </h4>
            <p>
              Ин метод имконияти дохил кардани элементи навро дорад. Бо вуҷуди ин, шумо бояд қоидаро
              риоя кунед - он бояд як намуди маълумот дошта бошад.
            </p>
            <pre><code>
        >>> integers = array('i', [1, 2, 3, 4, 5])
        >>> integers.append(6)
        >>>> print(integers)
        array('i', [1, 2, 3, 4, 5, 6])
            </code></pre>
            <h4>
              5. remove()
            </h4>
            <p>
              Ин метод барои хориҷ кардани элемент лозим аст. Барои мисол элементи 7.2-ро хориҷ мекунем.
            </p>
            <pre><code>
        >>> floats.remove(7.2)
        >>> print(floats)
        array('d', [3.5, 2.3, 5.3, 9.5, 4.0, 8.0, 4.5, 5.7, 6.9])
            </code></pre>
            <p>
              Эҳтиёт бошед, ки шумо танҳо як элементро бо ин роҳ нест карда метавонед.
              Агар дар массив якчанд якхела элемент мавҷуд бошанд, он гоҳ танҳо аввалинаш нест мешавад.
              Рӯйхатҳои пайвандшуда
              Рӯйхатҳои пайвандшуда як намуди сохтори хаттии додаҳо мебошад, ки ба массивҳо монанд аст.
              Ин маҷмӯи гиреҳҳоест, ки бо ҳамдигар алоқаманданд. Гиреҳ ду чизро дар бар мегирад, якум ин маълумот аст
              ва дуюм ҳавола, ки онро бо гиреҳи дигар мепайвандад.
              Сохтани рӯйхати алоқаманд дар Python
              Дар ин синфи LinkedList, мо синфи Node-ро барои сохтани рӯйхати алоқаманд истифода
              мебарем. Дар ин синф, усули __init__ мавҷуд аст , ки рӯйхати алоқамандро бо сарлавҳаи холи оғоз мекунад.
              Баъдан, методи insertAtBegin()- сохта шуд барои гузоштани гиреҳ дар оғози рӯйхат.
              Методи insertAtIndex() барои ворид кардани гиреҳ мувофиқи индекси додашуда дар рӯйхати алоқаманд лозим
              аст,
              ва методи insertAtEnd() гиреҳро дар охири рӯйхати алоқаманд мегузарад. Баъд аз ин, мо усули remove_node()
              дорем ,
              ки маълумотро ҳамчун аргумент қабул карда гиреҳро хориҷ мекунад. Ҳангоми вуҷуд доштани гиреҳе , ки бо
              яке аз маълумот баробар аст, ҳамон гиреҳро хориҷ кардан лозим аст.
              Пас, мо методи sizeOfLL() дорем , ки барои гирифтани
              андозаи ҷории рӯйхати алоқаманд истифода бурда мешавад.
              Методи охирини синфи LinkedList printLL() мебошад ,
              ки рӯйхати алоқамандро аз назар мегузаронад ва маълумоти ҳар як гиреҳро чоп мекунад.
            </p>
            <h3>
              Сохтани синфи гиреҳ
            </h3>
            <p>
              Мо синфи Node-ро сохтем, ки дар он функсияи __init__- ро барои оғоз кардани гиреҳ бо маълумоте, ки ҳамчун
              аргумент ва истинод бо Ҳеч аст, муайян кардем , зеро агар мо танҳо як гиреҳ дошта бошем, дар истинодаш ҳеҷ
              чиз вуҷуд надорад.
            </p>

            <pre><code>
        class Node:
        def __init__(self, data):
          self.data = data
          self.next = None
            </code></pre>
            <h3>
              Ворид кардан ба рӯйхати пайвастшуда(method insertAtBegin)
            </h3>
            <p>
              Ин метод гиреҳро дар аввали рӯйхати пайвандшуда мегузорад. Дар ин метод, мо бо маълумоти додашуда
              гиреҳи нав эҷод мекунем ва месанҷем, ки head гиреҳи холӣ аст ё не, агар head холӣ бошад, мо new_node-ро
              ҳамчун head
              месозем ва бармегардонем , вагарна head-ро дар гиреҳи навбатии нав ҷойгир мекунем ва сарро
              месозем. баробар ба гиреҳи нав. НАШУД
            </p>
            <pre><code>
        def insertAtBegin(self, data):
        new_node = Node(data)
        if self.head is None:
          self.head = new_node
          return
        else:
          new_node.next = self.head
          self.head = new_node
            </code></pre>
            <h3>
              Гузоштани гиреҳ дар ҷои муайяни рӯйхати пайвастшуда
            </h3>
            <p>
              Ин метод гиреҳро дар мавқеи муайяни индекс дар рӯйхати пайвандшуда мегузорад. Дар ин метод мо new_node
              бо маълумоти додашуда месозем current_node, ки ба head баробар аст ва ҳисобкунак бо номи 'position', ки бо 0
              Оғоз мешавад.Агар индекс ба сифр баробар бошад, ин маънои онро дорад, ки гиреҳ бояд дар оғоз гузошта шавад,
              барои ин
              мо методи insertAtBegin()-ро даъват кардем , дар акси ҳол мо сикли while-ро иҷро мекунем, то он даме, ки
              current_node
              ба None ё (position+1) баробар набошад, ба индекс баробар набошад, мо бояд дар як мавқеъ баргардем, то дар
              мавқеъи
              додашуда ҷойгир кунем, то пайванд созем. аз гиреҳҳо ва дар ҳар як такрор, мо мавқеъро ба 1 афзоиш медиҳем ва
              гиреҳи
              ҷорӣро дар паҳлӯи он месозем. Вақте ки сикл қатъ мегардад ва агар current_node ба None баробар набошад, мо
              new_node-ро
              баъд аз current_node мегузорем. Агар current_node ба None баробар бошад, ин маънои онро дорад, ки индекс дар
              рӯйхат мавҷуд нест ва мо "Индекс мавҷуд нест" -ро чоп мекунем.
            </p>
            <pre><code>
        # Indexing starts from 0.
        def insertAtIndex(self, data, index):
            new_node = Node(data)
            current_node = self.head
            position = 0
            if position == index:
              self.insertAtBegin(data)
            else:
              while(current_node != None and position+1 != index):
                position = position+1
                current_node = current_node.next

              if current_node != None:

                new_node.next = current_node.next
                current_node.next = new_node
              else:
                print("Index not present")
            </code></pre>
            <h3>
              Ҷойгиркунӣ дар рӯйхати пайвандшуда дар охир
            </h3>
            <p>
              Ин метод гиреҳро дар охири рӯйхати пайвандшуда ҷойгир мекунад. Дар ин метод, мо бо маълумоти додашуда
              new_node месозем ва месанҷем, ки head гиреҳи холи аст ё не, мо new_node-ро ҳамчун
              head мекунем ва баргардем , current_node ба гузариши head то охир баробар мекунем гиреҳи рӯйхати пайвандшуда
              ва
              вақте ки мо Node-ро ба даст меорем , пас аз гиреҳи current_node сикли while мешиканад ва new_node-ро дар
              навбатии current_node , ки гиреҳи охирини рӯйхати алоқаманд аст, гузоред.
            </p>
            <pre><code>
        def inserAtEnd(self, data):
        new_node = Node(data)
        if self.head is None:
          self.head = new_node
          return

        current_node = self.head
        while(current_node.next):
          current_node = current_node.next

        current_node.next = new_node
            </code></pre>
            <p>
              <h3>
                Навсозии гиреҳ дар рӯйхати пайвандшуда
              </h3>
              <p>
                Ин код методеро бо номи updateNode дар синфи рӯйхати пайвастшуда муайян мекунад. Он барои навсозии қиммати
                гиреҳ дар мавқеи додашуда дар рӯйхати пайвастшуда истифода мешавад.
              </p>
            </p>
            <pre><code>
        # Update node of a linked list
        # at given position
        def updateNode(self, val, index):
          current_node = self.head
          position = 0
          if position == index:
            current_node.data = val
          else:
            while(current_node != None and position != index):
              position = position+1
              current_node = current_node.next

            if current_node != None:
              current_node.data = val
            else:
              print("Index not present")
              </code></pre>
              <h3>
                Намунаи рӯйхати пайвандшуда дар Python
              </h3>
              <p>
                Дар ин мисол, пас аз муайян кардани синфи Node ва LinkedList, мо бо истифода аз синфи рӯйхати пайвандшуда
                рӯйхати алоқаманде бо номи "list" сохтем ва сипас чаҳор гиреҳро бо маълумотҳои аломати "a", "b", "c", "d"
                ва 'g' дар рӯйхати пайвандшуда пас аз он мо рӯйхати пайвандшударо бо истифода аз усули синфи рӯйхат
                алоқаманди
                printLL() чоп мекунем , баъд аз он мо баъзе гиреҳҳоро бо истифода аз усулҳои хориҷ хориҷ кардем ва сипас
                рӯйхати
                пайвандшударо дубора чоп кардем ва дар натиҷа мебинем, ки гиреҳ бомуваффақият нест карда мешавад . Баъд аз
                ин, мо инчунин андозаи рӯйхати алоқамандро чоп мекунем.
              </p>
            <pre><code>
        # Create a Node class to create a node
        class Node:
          def __init__(self, data):
            self.data = data
            self.next = None

        # Create a LinkedList class


        class LinkedList:
          def __init__(self):
            self.head = None

          # Method to add a node at begin of LL
          def insertAtBegin(self, data):
            new_node = Node(data)
            if self.head is None:
              self.head = new_node
              return
            else:
              new_node.next = self.head
              self.head = new_node

          # Method to add a node at any index
          # Indexing starts from 0.
          def insertAtIndex(self, data, index):
            new_node = Node(data)
            current_node = self.head
            position = 0
            if position == index:
              self.insertAtBegin(data)
            else:
              while(current_node != None and position+1 != index):
                position = position+1
                current_node = current_node.next

              if current_node != None:
                new_node.next = current_node.next
                current_node.next = new_node
              else:
                print("Index not present")

          # Method to add a node at the end of LL

          def insertAtEnd(self, data):
            new_node = Node(data)
            if self.head is None:
              self.head = new_node
              return

            current_node = self.head
            while(current_node.next):
              current_node = current_node.next

            current_node.next = new_node

          # Update node of a linked list
            # at given position
          def updateNode(self, val, index):
            current_node = self.head
            position = 0
            if position == index:
              current_node.data = val
            else:
              while(current_node != None and position != index):
                position = position+1
                current_node = current_node.next

              if current_node != None:
                current_node.data = val
              else:
                print("Index not present")
        </code></pre>
        <h4>
          Натиҷа
        </h4>
            <pre><code>
        Маълумоти гиреҳ 
        c 
        a 
        g 
        b 
        d 

        Хориҷ кардани гиреҳи аввал 
        Хориҷ кардани гиреҳи охирин 
        Хориҷ кардани гиреҳ дар Индекс 1 

        Рӯйхати пайвандшуда пас аз нест кардани гиреҳ: 
        a 
        b 

        Навсозии гиреҳ арзиши 
        z 
        b 
        </code></pre>
          <h3>Маводҳо барои мутолиа:</h3>
          <h4>
            <li><a href="https://codelibrary.info/download/1458_Python-%D0%B2dlya-data-science.pdf">PYTHON ДЛЯ
                DATA SCIENCE:Васильев Юлийҷҷ/Глава 3. Библиотеки Python для data science/Создание массива NumPy саҳ:64
              </a></li>
            <li><a href="https://do1.dr-chuck.com/pythonlearn/EN_us/pythonlearn.pdf">Python for Everybody:Dr. Charles R.
                Severance/8 Lists саҳ:91</a></li>
            <li><a
                href="https://ia801807.us.archive.org/26/items/data-structures-and-algorithms-in-python-pdfdrive/Data%20Structures%20and%20Algorithms%20in%20Python%20%28%20PDFDrive%20%29.pdf">Data
                Structures and
                Algorithms in Python:Michael T. Goodrich,Roberto Tamassia, Michael H. Goldwasser/ 7 Linked Lists
                саҳ:255</a></li>

          </h4>

          <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
          <ul>
            <li><a href="https://otus.ru/nest/post/522/">Массивы в Python: как создавать , формат и базовые операции с
                матрицами на Питоне</a></li>
            <li><a href="https://pythonist.ru/massiv-v-python/">Массив в Python</a></li>
            <li><a href="https://silvertests.ru/GuideView.aspx?id=32174">(Python) Массивы. Основы</a></li>
          </ul>
          <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
          <ul>
            <li><a href="https://www.udemy.com/course/30-days-of-python-code-numpy-challenge/?couponCode=ST14MT32124">30
                Days of Python Code: NumPy Challenge</a></li>
            <li><a
                href="https://www.edx.org/learn/data-structures/the-georgia-institute-of-technology-data-structures-algorithms-i-arraylists-linkedlists-stacks-and-queues?index=product&queryID=0ba6ab8d83d4bc877e79291dc6af977f&position=3&linked_from=autocomplete&c=autocomplete">GTx:
                Data Structures & Algorithms I: ArrayLists, LinkedLists, Stacks and Queues</a></li>
            <li><a href="https://www.coursera.org/learn/numpy-data-science">Data Science with NumPy, Sets, and
                Dictionaries</a></li>
          </ul>
          <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
          <ul>
            <li><a href="https://stepik.org/course/113585/promo?search=3558609998">NumPy-массивы в Python</a></li>
            <li><a href="https://www.w3schools.com/python/python_arrays.asp">Python array</a></li>
            <li><a href="https://www.youtube.com/watch?v=cfJrtx-k96U">Python - Полный Курс по Python [15 ЧАСОВ]</a></li>
          </ul>
          <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
          <ul>
            <li><a href="https://discuss.python.org/t/loops-arrays-dictionaries-oh-my/19928">Loops, Arrays,
                Dictionaries</a></li>
            <li><a href="https://forum.codewithmosh.com/t/array-must-not-contain-infs-or-nans/24968">Array must not
                contain infs or NaNs</a></li>
            <li><a href="https://www.devglan.com/programming/python-forums">Best Python Forums and community</a> </li>
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
            <li><a href="https://numpy.org/">NumPy</a></li>
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