<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Binary Search Trees - Дарахти ҷустуҷӯи бинарӣ</h1>
          <h5>Таҳиягар: Асирӣ М.Ф.</h5>
          <p>
            Дарахти бинарӣ маҷмӯи гиреҳҳои ниҳоӣ мебошад, ки холӣ буда метавонанд ё якчанд элементро дар бар гиранд.
            Гиреҳ аз се объект иборат аст. Қимат бо ду ишора дар тарафи чап ва рост. Гиреҳи реша ҷузъи волидайн дар
            ҳар як зердарахт мебошад.
            Онро инчунин ҳамчун гиреҳи болоии дарахт ҳисобидан мумкин аст. Гиреҳҳои ба унсури волидайн пайвастшуда
            кӯдакон номида мешаванд. Гиреҳҳои барг, аз тарафи дигар, унсурҳои асосии дарахти бинарӣ мебошанд.
          </p>
          <h3>Намудҳои дарахтони ҷустуҷӯии бинарӣ</h3>
          <ul>
            <li>Дарахти мукаммали бинарӣ: Ҳама сатҳҳои дарахт пур карда мешаванд ва калиди реша зердарахте дорад,
              ки ду гиреҳ дорад ё тамоман нест.</li>
            <li>Дарахти мувозинати бинарӣ: гиреҳҳои баргҳо аз реша дур нестанд, ки ин нишондиҳандаи нисбӣ аст.
              Гиреҳҳо метавонанд бештар аз як сатҳ дар дарахт бошанд. Дарахти мутавозин ҳангоми ҷустуҷӯ, ворид
              кардан ва нест кардани ҷузъҳо хеле самаранок аст.</li>
            <li>Дарахти пурраи бинарӣ: Он дар ҳар як зердарахт миқдори баробари гиреҳҳоро дар бар мегирад, ба истиснои
              гиреҳҳои барг</li>
          </ul>

          <h3> Сохтани дарахти бинарӣ</h3>
          <p>
            Барои сохтани дарахти бинарӣ ба мо синтаксиси зерини Python лозим аст. Функсияи рекурсивӣ талаб
            карда мешавад, зеро зердарахт унсурҳои монанд дорад.
          </p>
          <pre><code>
      def __init__(self, key)   
        self.leftchild = None
        self.rightchild = None
        self.key = key
      class binary_tree:
        def __init__(self):  
          self.root = None
          </code></pre>
          <h3>Хориҷ кардани дарахт</h3>
          <p>
            Барои нест кардани дарахт мо коди зеринро истифода мебарем:
          </p>
          <pre><code>
      if self.key is None:
        self.key = data #begin adding elements to the binary tree
        return
      if self.key == value:   # this will take care for duplicate nodes
          return              
      if value < self.key:  #if value of the key node is more than the leftchild accept values
        if self.leftchild:
          self.leftchild.add(value) #set values to the leftchild of the tree
          else:   
            self.leftchild = binary_tree(value)
      else:   #values are more than the key value
        if self.rightchild:     #if on the rigghtchild of the tree
          self.rightchild.add(value)  #set values to rightchild
          else:
            self.rightchild = binary_tree(value) #values cannot be less then the root key
        ##End of search of our binary tree

</code></pre>
          <h3>Илова кардани маълумот ба дарахт</h3>
          <p>
            Барои илова кардани маълумот ба дарахти худ, мо скрипти зерини Python-ро истифода мебарем:
          </p>
          <pre><code>
      root = binary_tree(50)    # 50 is our root key and our object is root
      elements = {20,56,3,4,7,10,17,20}   #adds values to the tree 
      for i in elements:
        root.add(i)     #recursively adds values in the tree
        root.search(10)
          </code></pre>
          <h3>Тафтиши гиреҳҳои холӣ</h3>
          Функсияи check(), ки дар поён овардашудааст ба мо имкон медиҳад, ки гиреҳҳои холиро тафтиш кунем:
          <pre><code>
      def check(self,value):    #check for empty values 
      if self.key is None:  #if value is set  to None
        self.key = value
          </code></pre>
          <h3>Ҷустуҷӯи гиреҳ дар дарахт</h3>
          <p>
            Агар мо донистан хоҳем, ки гиреҳи додашуда вуҷуд дорад ё не, мо маълумоти гиреҳи додашударо бо гиреҳи реша
            муқоиса мекунем.
            Аввал, мо бояд ҷустуҷӯ кунем, ки оё калиди реша ба маълумоти додашуда баробар аст. Агар гиреҳи
            додашуда дар дарахт мавҷуд бошад, мо метавонем ҷавобро чоп кунем.
            Агар маълумот аз калиди реша камтар бошад, мо дар зердарахти чап ҷустуҷӯ мекунем, вагарна мо ба
            зердарахти рост назар мекунем.
          </p>
          <pre><code>
      def search(self, value):
      if self.key == value:     #check if value is equal to the key val
        print("The node is present")
        return
      if value < self.key:    #Here left subtree can be empty or it can contain one or more nodes
        if self.leftchild:   #this condition is true if left subtree exists
            self.leftchild.search(value)
        else:
          print("The node is empty in the tree!")
      else:
        if self.rightchild:
            self.rightchild.search(value)   #search for all the values in the rightchild
            return true
        else:   
            print("The node is empty in the tree!") #print out empty rightchild nodes in the tree
          </code></pre>
          <h3>Манфиатҳои истифодаи дарахтони ҷустуҷӯии бинарӣ</h3>
          <ul>
            <li>Онҳо имкон медиҳанд, ки ҷузъҳои дарахтро зуд ҷустуҷӯ, илова ва нест кунанд.</li>
            <li>Он метавонад барои татбиқи маҷмӯи динамикии элементҳо ё ҷадвалҳои ҷустуҷӯ истифода шавад.</li>
            <li>Онҳо ба кас имкон медиҳанд, ки бо истифода аз калиди он элемент пайдо шавад.</li>
            <li>Онҳо мураккабии логарифмикии вақтро истифода мебаранд, ки вақти ҷустуҷӯ, воридкунӣ ва хориҷкунӣ дар k =
              log(n)куҷост ва шумораи ҷузъҳои дар дарахт нигоҳ дошташуда. Ин аз вақти ҷустуҷӯи хатӣ беҳтар аст</li>
          </ul>
          <h3>Маводҳо барои мутолиа:</h3>
          <ul>
            <li><a
                href="https://ia801807.us.archive.org/26/items/data-structures-and-algorithms-in-python-pdfdrive/Data%20Structures%20and%20Algorithms%20in%20Python%20%28%20PDFDrive%20%29.pdf">Data
                Structures and
                Algorithms in Python:Michael T. Goodrich,Roberto Tamassia, Michael H. Goldwasser/8.2 Binary Trees саҳ:
                311</a>
            </li>
            <li><a
                href="https://ia801807.us.archive.org/26/items/data-structures-and-algorithms-in-python-pdfdrive/Data%20Structures%20and%20Algorithms%20in%20Python%20%28%20PDFDrive%20%29.pdf">Data
                Structures and
                Algorithms in Python:Michael T. Goodrich,Roberto Tamassia, Michael H. Goldwasser/>11 Search Trees 459
                11.1 Binary Search Trees саҳ:460</a></li>
            <li><a href="https://t.me/rebooksbot">Python для всех:Чарльз Р. Северанс/12.5. Чтение двоичных файлов с
                использованием библиотеки urllib саҳ:170</a></li>
          </ul>

          <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
          <ul>
            <li><a href="https://codechick.io/tutorials/dsa/dsa-binary-search-tree">Дерево двоичного поиска</a></li>
            <li><a href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/">Binary Search Tree</a></li>
            <li><a href="https://www.scaler.com/topics/binary-search-tree-python/">Binary Search Tree Python</a></li>
          </ul>

          <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
          <ul>
            <li><a href="https://www.coursera.org/learn/trees-graphs-basics">Деревья и графы: Основы</a></li>
            <li><a
                href="https://www.edx.org/learn/data-structures/the-georgia-institute-of-technology-data-structures-algorithms-ii-binary-trees-heaps-skiplists-and-hashmaps?index=product&queryID=e84c156727e5c49e3a7d5c4b137a9a0b&position=3&linked_from=autocomplete&c=autocomplete">GTx:
                Data Structures & Algorithms II: Binary Trees, Heaps, SkipLists and HashMaps</a></li>
            <li><a href="https://www.udemy.com/course/binary-trees-in-python/?couponCode=ST13MT40224">Binary Trees in
                Python:
                Traversals and Views</a></li>
          </ul>

          <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
          <ul>
            <li><a href="https://www.programiz.com/dsa/binary-search-tree#google_vignette">Binary Search Tree(BST)Binary
                Search Tree(BST)</a></li>
            <li><a href="https://www.w3schools.com/dsa/dsa_data_binarysearchtrees.php">DSA Binary Search Trees</a></li>
            <li><a href="https://bradfieldcs.com/algos/trees/binary-search-trees/">Binary Search Trees</a></li>
          </ul>
          <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
          <ul>
            <li><a href="https://www.cyberforum.ru/python-beginners/"> Python для начинающих</a></li>
            <li><a href="https://python-forum.io/">Python Forum</a></li>
            <li><a href="https://www.pythonanywhere.com/forums/">Pythonanywhere</a></li>
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
@import  '@/assets/pages.css'
</style>