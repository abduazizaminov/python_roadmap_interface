<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Sorting Algorithms - Ҷобаҷокунии алгоритмҳо </h1>
          <h5>Таҳиягар: Асирӣ М.Ф.</h5>
          <p>
            Ҷобаҷокунӣ ҳамчун ҷойгиркунии маълумот бо тартиби муайян муайян карда мешавад. Усулҳои ҷудокунӣ барои
            тартиб додани маълумот (асосан ададӣ) бо тартиби афзоиш ё камшавӣ истифода мешаванд. Ин усулест, ки
            муаррифии маълумот дар формати бештар фаҳмо истифода мешавад. Ин як соҳаи муҳими илмҳои компютерӣ мебошад.
            Ба навъбандии миқдори зиёди маълумот метавонад миқдори зиёди захираҳои ҳисоббарориро талаб кунад, агар
            усулҳое,
            ки мо барои ҷудо кардани маълумот истифода мебарем, бесамар бошанд. Самаранокии алгоритм ба шумораи ашёҳое,
            ки аз он мегузарад, мутаносиб аст. Барои миқдори ками маълумот, усули мураккаби ҷудокунӣ метавонад аз арзиши
            он мушкилтар бошад. Аз тарафи дигар, барои миқдори зиёди маълумот, мо мехоҳем то ҳадди имкон самаранокӣ
            ва суръатро зиёд кунем. Мо ҳоло якчанд усулҳои ҷудокуниро баррасӣ мекунем ва онҳоро аз рӯи мураккабии
            вақт муқоиса мекунем.
          </p>
          <h3>Усулҳои ҷудокунӣ</h3>
          <p>
            Татбиқи гуногуни усулҳои ҷудокунӣ дар Python инҳоянд:
          </p>
          <ul>
            <li>Тартиби ҳубобӣ</li>
            <li>Тартиби интихоб</li>
            <li>Тартиби воридкунӣ</li>
          </ul>
          <h3>Тартиби ҳубобӣ</h3>
          <p>
            Bubble Sort як алгоритми оддии ҷудокунӣ мебошад. Ин алгоритми ҷудокунӣ ду унсури монандро
            такроран муқоиса мекунад ва агар онҳо дар тартиби нодуруст бошанд, онҳоро иваз мекунад.
            Ба ибораи дигар, мо ду унсури ҳамсояро муқоиса мекунем ва мебинем, ки тартиби онҳо нодуруст аст,
            агар фармоиш нодуруст бошад, мо онҳоро иваз мекунем. (яъне arr[i] > arr[j] барои 1 <= i < j <=s; дар он ҷо s
              андозаи массив аст, агар массив бояд бо тартиби афзоиш бошад ва баръакс). </p>
              <h4>Мисол: </h4>
              <pre><code>
        # Python3 program for Bubble Sort Algorithm Implementation
        def bubbleSort(arr):
	
        n = len(arr)

        # For loop to traverse through all 
        # element in an array
        for i in range(n):
          for j in range(0, n - i - 1):
            
            # Range of the array is from 0 to n-i-1
            # Swap the elements if the element found 
            #is greater than the adjacent element
            if arr[j] > arr[j + 1]:
              arr[j], arr[j + 1] = arr[j + 1], arr[j]
              
        # Driver code

        # Example to test the above code
        arr = [ 2, 1, 10, 23 ]

        bubbleSort(arr)

        print("Sorted array is:")
        for i in range(len(arr)):
          print("%d" % arr[i])
        </code></pre>
              <h4>
                Натиҷа:
              </h4>
              <pre><code>
        Sorted array is:
        1
        2
        10
        23
        </code></pre>
              <h3>Тартиби интихоб</h3>
              <p>
                Ин техникаи ҷудобандӣ такроран элементи минималиро пайдо мекунад ва онро бо тартиб ҷудо мекунад
                Bubble Sort ягон фазои иловагии хотираро ишғол намекунад. Ҳангоми иҷрои ин алгоритм, ду зермассиве
                нигоҳ дошта мешавад, зермассиви аллакай ҷудошуда ва зермассиви боқимондаи ҷудонашуда.
                Ҳангоми иҷроиши Интихоби Тартиб барои ҳар як такрор, элементи ҳадди ақали зермассиви ҷудонашуда дар
                зермассиви
                ҷудошуда ҷойгир карда мешавад. Навъи интихоб як алгоритми самараноктар аз навъбандии ҳубобӣ аст
              </p>
              <h4>Мисол:</h4>
              <pre><code>
        # Selection Sort algorithm in Python
        def selectionSort(array, size):
          
          for s in range(size):
            min_idx = s
            
            for i in range(s + 1, size):
              
              # For sorting in descending order
              # for minimum element in each loop
              if array[i] < array[min_idx]:
                min_idx = i

            # Arranging min at the correct position
            (array[s], array[min_idx]) = (array[min_idx], array[s])

          # Driver code
          data = [ 7, 2, 1, 6 ]
          size = len(data)
          selectionSort(data, size)

          print('Sorted Array in Ascending Order is :')
          print(data)
        </code></pre>
        <h4>
          Натиҷа:
        </h4>
        <pre><code>
        Sorted Array in Ascending Order is: 
        [1, 2, 6, 7]
        </code></pre>
        <h3>
          Тартиби воридкунӣ
        </h3>
        <p>
          Ин алгоритми ҷудокунӣ зермассивро нигоҳ медорад, ки ҳамеша ба навъҳо ҷудо карда мешавад.
          Қиматҳо аз қисми ҷудонашудаи массив дар мавқеи дуруст дар қисми ҷудошуда ҷойгир карда мешаванд.
          Он дар амал нисбат ба дигар алгоритмҳо, ба монанди тартиби интихоб ё тартиби ҳубобӣ самараноктар аст.
        </p>
              <h4>Амалисозии тартиби воридкунӣ</h4>
              <pre><code>
          # Creating a function for insertion sort algorithm
          def insertion_sort(list1): 
          
                  # Outer loop to traverse on len(list1) 
                  for i in range(1, len(list1)): 
          
                      a = list1[i] 
          
                      # Move elements of list1[0 to i-1], 
                      # which are greater to one position
                      # ahead of their current position 
                      j = i - 1
                  
                      while j >= 0 and a < list1[j]: 
                          list1[j + 1] = list1[j] 
                          j -= 1
                          
                      list1[j + 1] = a 
                      
                  return list1 
                      
          # Driver code
          list1 = [ 7, 2, 1, 6 ] 
          print("The unsorted list is:", list1) 
          print("The sorted new list is:", insertion_sort(list1))
        </code></pre>
        <h4>
          Натиҷа:
        </h4>
              <pre><code>
          The unsorted list is: [7, 2, 1, 6]
          The sorted new list is: [1, 2, 6, 7]
          </code></pre>
              <h3>Маводҳо барои мутолиа:</h3>
              <ul>
                <li><a
                    href="https://ia801807.us.archive.org/26/items/data-structures-and-algorithms-in-python-pdfdrive/Data%20Structures%20and%20Algorithms%20in%20Python%20%28%20PDFDrive%20%29.pdf">Data
                    Structures and
                    Algorithms in Python:Michael T. Goodrich,Roberto Tamassia, Michael H. Goldwasser/12.1 Why Study
                    Sorting Algorithms? саҳ: 537</a></li>
                <li><a href="https://realpython.com/sorting-algorithms-python/">Sorting Algorithms in Python</a></li>
                <li><a href="https://www.tutorialspoint.com/python_data_structure/python_sorting_algorithms.htm">Python
                    - Sorting Algorithms</a></li>
              </ul>

              <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
              <ul>
                <li><a href="https://www.geeksforgeeks.org/sorting-algorithms-in-python/">Sorting Algorithms in
                    Python</a></li>
                <li><a href="https://towardsdatascience.com/sorting-algorithms-with-python-4ec7081d78a1">Sorting
                    Algorithms — With Python</a></li>
                <li><a href="https://www.programiz.com/dsa/sorting-algorithm">Sorting Algorithm</a></li>
              </ul>

              <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
              <ul>
                <li><a
                    href="https://www.udemy.com/course/data-structures-and-algorithms-bootcamp-in-python/?couponCode=ST13MT40224">The
                    Complete Data Structures and Algorithms Course in Python</a></li>
                <li><a
                    href="https://www.edx.org/learn/python/xccelerate-python-power-up-coding-foundations-for-data-wizards?index=product&queryID=4e89542203a578f56ff28773cb526cf2&position=2&results_level=first-level-results&term=sorting+algorithms+python&objectID=course-f3c8f408-2824-4f72-b276-6dca75aea7b4&campaign=Python+Power+Up%3A+Coding+Foundations+for+Data+Wizards&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch">
                    Python Power Up: Coding Foundations for Data Wizards</a></li>
                <li><a href="https://www.coursera.org/learn/algorithms-searching-sorting-indexing"> Python Power Up:
                    Coding Foundations for Data Wizards</a></li>
              </ul>

              <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
              <ul>
                <li><a href="https://naemazam.medium.com/sorting-algorithms-in-python-b720f6583dd1">Sorting Algorithms
                    in Python</a></li>
                <li><a href="https://www.youtube.com/watch?v=8G-PB-RAzdg">Sorting In Python Explained | Python Sorting
                    Algorithms | Python Tutorial For Beginners |Simplilearn</a></li>
                <li><a href="https://pythonalgos.com/resources/sorting-algorithms/">Python Sorting Algorithms You Need
                    To Know</a></li>
              </ul>
              <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
              <ul>
                <li><a href="https://discuss.python.org/">Python discussion</a></li>
                <li><a href="https://www.devglan.com/programming/python-forums">Best Python Forums and Community</a>
                </li>
                <li><a href="https://forum.pythonguis.com/top">Python GUIs Forum</a></li>
              </ul>
              <h3>Муҳити коркарди нармафзор</h3>
              <ul>
                <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
                <li><a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a></li>
                <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
              </ul>
              <h3>Онлайн муҳити санҷиши коди барномавӣ:</h3>
              <ul>
                <li><a href="https://www.programiz.com/python-programming/online-compiler/">Python Online Compiler</a>
                </li>
                <li><a href="https://bio-python.netlify.app/">Online Python - IDE, Editor, Compiler, Interpreter</a>
                </li>
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