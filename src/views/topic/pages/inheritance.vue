<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Inheritance - Мерос</h1>
          <h5>Таҳиягар: Қосимова С.Д.</h5>
          <p>Мерос ин равандест, ки дар он як синф хусусиятҳо ва усулҳои синфи дигарро мерос мегирад.</p>
          <h3>Зерсинф ва суперсинф</h3>
          <h4>Синтаксиси мерос дар Python</h4>
          <pre><code>
        # Муайян кардани суперсинф
        class super_class:
            # Атрибутҳо ва методҳои суперсинф
        
        # Мерос
        class sub_class(super_class):
            # Атрибутҳо ва метод super_class
            # Атрибутҳо ва метод sub_class
    </code></pre>
          <p>Дар ин ҷо мо синфи <code>sub_class</code> аз синфи <code>super_class</code> мерос мегирем.</p>
          <h4>Мисол:</h4>
          <pre><code>
        class Animal:
            # Атрибут ва методи синфи асосӣ
            name = ""
            def eat(self):
                print("I can eat")
        
        # Мерос аз синфи Animal
        class Dog(Animal):
            # Методи нав дар синфи фаръӣ
            def display(self):
                # Дастрасӣ ба атрибути name синфи асосӣ бо истифода аз self
                print("My name is ", self.name)
        
        #  Сохтани объекти синфи фаръӣ
        labrador = Dog()
        
        # Дастрасӣ ба атрибут ва методи синфи асосӣ
        labrador.name = "Rohu"
        labrador.eat()
        
        # Даъват кардани методи синфи фаръӣ
        labrador.display()
    </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
        I can eat
        My name is Rohu
    </code></pre>
          <p>Дар ин ҷо мо аз синфи асосии <code>Animal</code> як синфи фаръи <code>Dog</code>-ро сохтем. Ба сатрҳои
            зерини код диққат диҳед:</p>
          <pre><code>
        labrador.name = "Rohu"
        labrador.eat()
    </code></pre>
          <p>Дар ин ҷо мо <code>labrador</code> (объекти синфи <code>Dog</code>) барои дастрасӣ ба <code>name</code> ва
            <code>eat()</code> синфи <code>Animal</code> истифода мебарем. Ин имконпазир аст, зеро синфи фаръӣ тамоми
            атрибутҳо ва методҳои синфи асосиро мерос мегирад. Илова бар ин, мо ба атрибути <code>name</code> дар дохили
            методи синфи <code>Dog</code> бо истифода аз <code>self</code> дастрасӣ пайдо кардем.
          </p>
          <h3>Муносибатҳо дар мерос</h3>
          <p>Дар Python, мерос ин муносибат намуди is-a аст. Яъне, мо меросро танҳо дар он вақт истифода мебарем, ки
            дар байни ду синф муносибати "аст" вуҷуд дошта бошад. Барои намуна:</p>
          <ul>
            <li>Мошин - воситаи нақлиёт аст.</li>
            <li>Себ - мева аст.</li>
            <li>Гурба - ҳайвон аст.</li>
          </ul>
          <p>Мисол. Бисёркунҷа - фигураи пӯшидае мебошад, ки 3 ё зиёда тараф дорад. Фарз мекунем, ки мо синфи
            <code>Polygon</code> дорем, ки чунин муайян карда шудааст:
          </p>
          <pre><code>
        class Polygon:
            def __init__(self, no_of_sides):
                self.n = no_of_sides
                self.sides = [0 for i in range(no_of_sides)]
        
            def inputSides(self):
                self.sides = [float(input("Enter side "+str(i+1)+" : ")) for i in range(self.n)]
        
            def dispSides(self):
                for i in range(self.n):
                    print("Side",i+1,"is",self.sides[i])
    </code></pre>
          <p>Ин синф дорои тағирёбандаҳо барои нигоҳ доштани адад <code>(n)</code> ва дарозӣ (дар шакли рӯйхате, ки
            <code>sides</code> номида мешавад) ҳар як паҳлӯи бисёркунҷаро дорад.
          </p>
          <ul>
            <li>Методи <code>inputSides()</code> дарозии ҳар як тарафро мегирад.</li>
            <li>Методи <code>dispSides()</code> дарозии тарафҳоро нишон медиҳад.</li>
          </ul>
          <p>Секунҷа - бисёркунҷаест, ки се тараф дорад. Аз ин рӯ, мо метавонем синфи <code>Triangle</code> созем, ки
            аз синфи <code>Polygon</code> мерос мегирад. Ин ҳама атрибутҳои синфи <code>Polygon</code>-ро барои синфи
            <code>Triangle</code> дастрас мекунад. Ба мо лозим нест, ки боз атрибутҳо ва методҳоро муайян кунем.
            Масалан:
          </p>
          <pre><code>
        class Triangle(Polygon):
            def __init__(self):
                Polygon.__init__(self,3)
        
            def findArea(self):
                a, b, c = self.sides
        
                # Ҳисоб кардани нимпериметр
                s = (a + b + c) / 2
                area = (s*(s-a)*(s-b)*(s-c)) ** 0.5
        
                # Намоиши минтақаи секунҷа
                print('The area of the triangle is %0.2f' %area)
    </code></pre>
          <p>Синфи <code>Triangle</code> дорои методи нави <code>findArea()</code> барои ҳисоб кардан ва намоиш додани
            майдони секунҷа мебошад.</p>
          <h4>Коди барнома:</h4>
          <pre><code>
        class Polygon:
            # Инитсиализатсияи шумораи тарафҳо
            def __init__(self, no_of_sides):
                self.n = no_of_sides
                self.sides = [0 for i in range(no_of_sides)]
        
            def inputSides(self):
                self.sides = [float(input("Enter side "+str(i+1)+" : ")) for i in range(self.n)]
        
            # Методи баровардани дарозии ҳар як тарафи бисёркунҷа
            def dispSides(self):
                for i in range(self.n):
                    print("Side",i+1,"is",self.sides[i])
        
        class Triangle(Polygon):
            # Инитсиализатсияи шумораи тарафҳо (3), бо даъвати методи __init__() синфи Polygon
            def __init__(self):
                Polygon.__init__(self,3)
        
            def findArea(self):
                a, b, c = self.sides
        
                # Ҳисоб кардани нимпериметр
                s = (a + b + c) / 2
        
                # Ҳисоб кардани минтақаи секунҷа бо формулаи Ҳерон
                area = (s*(s-a)*(s-b)*(s-c)) ** 0.5
                print('The area of the triangle is %0.2f' %area)
        
        # Сохтани объекти синфи Triangle
        t = Triangle()
        
        # Ворид кардани дарозии тарафҳои секунҷа
        t.inputSides()
        
        # Баровардани дарозии тарафҳои секунҷа
        t.dispSides()
        
        # Ҳисоб кардан ва баровардани минтақаи секунҷа
        t.findArea()
    </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
        Enter side 1 : 3
        Enter side 2 : 5
        Enter side 3 : 4
        Side 1 is 3.0
        Side 2 is 5.0
        Side 3 is 4.0
        The area of the triangle is 6.00
    </code></pre>
          <h3>Методи super() дар мерос</h3>
          <p>Методи super() дар Python объекти проксиро (объекти муваққатии суперкласс) бармегардонад, ки ба шумо имкон
            медиҳад ба методҳои синфи асосӣ дастрасӣ пайдо кунед.</p>
          <pre><code>
        class Animal:
            # Атрибутҳо ва методи синфи асосӣ
            name = ""
            def eat(self):
                print("I can eat")
        
        # Мерос аз синфи Animal
        class Dog(Animal):
        
            # Аз нав таъин кардани методи eat()
            def eat(self):
                
                # Фарёд кардани методи eat()-и синфи асосӣ бо методи иловагии super()
                super().eat()
                
                print("I like to eat bones")
        
        # Сохтани объекти синфи фаръӣ
        labrador = Dog()
        
        labrador.eat()
    </code></pre>
          <h4>Натиҷа:</h4>
          <pre><code>
        I can eat
        I like to eat bones
    </code></pre>
          <p>Дар ин ҷо методи <code>eat()</code>-и синфи фаръӣ <code>Dog</code> ҳамон методи синфи асосии
            <code>Animal</code>-ро аз нав таъин мекунад.
          </p>
          <p>Дар дохили синфи <code>Dog</code>, мо сатри зерини кодро барои даъват кардани методи <code>eat()</code>-и
            синфи асосии Animal аз синфи фаръӣ <code>Dog</code> истифода мебарем:</p>
          <pre><code>
        # Даъват кардани методи eat()-и синфи асосӣ бо истифода аз методи иловагии super() 
        super().eat()
    </code></pre>
          <p>Ҳамин тавр, вақте ки мо методи <code>eat()</code>-ро бо истифода аз объекти <code>labrador</code> даъват
            мекунем:</p>
          <pre><code>
        labrador.eat()
    </code></pre>
          <p>Ҳам версияи аз нав таъин шудаи методии <code>eat()</code>-и синфи фаръӣ ва ҳам версияи синфи асосии методи
            <code>eat()</code> иҷро мешаванд.
          </p>
          <h3>Маводҳо барои мутоила:</h3>
          <ul>
            <li>
              "Изучаем Python" / Эрик Мэтиз <a
                  href="https://docs.yandex.ru/docs/view?tm=1711685141&tld=ru&lang=ru&name=00000E_metiz___Izuchaem_Python_Progra.pdf&text=%22%D0%98%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC%20Python%22%20%2F%20%D0%AD%D1%80%D0%B8%D0%BA%20%D0%9C%D1%8D%D1%82%D0%B8%D0%B7&url=https%3A%2F%2Fpydarslik.pythonanywhere.com%2Fmedia%2Fresource_file%2F00000E_metiz___Izuchaem_Python_Progra.pdf&lr=10322&mime=pdf&l10n=ru&sign=df3aa0b505361fb65d95da9ab1475821&keyno=0&nosw=1&serpParams=tm%3D1711685141%26tld%3Dru%26lang%3Dru%26name%3D00000E_metiz___Izuchaem_Python_Progra.pdf%26text%3D%2522%25D0%2598%25D0%25B7%25D1%2583%25D1%2587%25D0%25B0%25D0%25B5%25D0%25BC%2BPython%2522%2B%2F%2B%25D0%25AD%25D1%2580%25D0%25B8%25D0%25BA%2B%25D0%259C%25D1%258D%25D1%2582%25D0%25B8%25D0%25B7%26url%3Dhttps%253A%2F%2Fpydarslik.pythonanywhere.com%2Fmedia%2Fresource_file%2F00000E_metiz___Izuchaem_Python_Progra.pdf%26lr%3D10322%26mime%3Dpdf%26l10n%3Dru%26sign%3Ddf3aa0b505361fb65d95da9ab1475821%26keyno%3D0%26nosw%3D1">(скачать
                  PDF)</a>
            </li>
            <li>
              "Python 3 Text Processing with NLTK 3 Cookbook" by Jacob Perkins <a
                  href="https://budditha.files.wordpress.com/2021/04/python-3-text-processing-with-nltk-3-cookbook.pdf">(скачать
                  PDF)</a>
            </li>
            <li>
              "Объектно-ориентированное программирование на языке Python" / Задорожный Сергей Сергеевич, Фадеев Егор
                Павлович <a
                  href="https://cmp.phys.msu.ru/sites/default/files/%D0%9E%D0%9E%D0%9F_%D0%BD%D0%B0_Python_%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D0%BE%D0%B5%20%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B8%D0%B5_var7.pdf?ysclid=luc4x7pshd442875201">(скачать
                  PDF)</a>
            </li>
          </ul>
          <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=ZDa-Z5JzLYM&list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc">Python
                  OOP Tutorial</a>
            </li>
            <li>
              <a
                  href="https://medium.com/nuances-of-programming/%D0%BD%D0%B0%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D0%BF%D0%BE%D0%BB%D0%B8%D0%BC%D0%BE%D1%80%D1%84%D0%B8%D0%B7%D0%BC-%D0%B2-python-3e0dd310a6c4">Наследование
                  и полиморфизм в Python</a>
            </li>
            <li>
              <a
                  href="https://fadeevlecturer.github.io/python_lectures/notebooks/python/inheritance.html">Наследование</a>
              
            </li>
          </ul>
          <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
          <ul>
            <li>
              <a href="https://www.coursera.org/learn/python-classes-inheritance">Классы и наследование в Python</a>
              
            </li>
            <li>
              <a
                  href="https://www.udemy.com/course/object-oriented-programming-with-python/?couponCode=LETSLEARNNOW">Object
                  Oriented Programming with Python 3</a>
            </li>
            <li>
              <a
                  href="https://translated.turbopages.org/proxy_u/en-ru.ru.97ae1d88-65fd5a04-7859dccc-74722d776562/https/www.udemy.com/course/python-classes/">Python
                  OOP Crash Course</a>
            </li>
          </ul>
          <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
          <ul>
            <li>
              <a href="https://www.academyit.ru/courses/PYT-002/">Python.Объектно - ориентированное
                  программирование</a>
            </li>
            <li>
              <a href="https://itvdn.com/ru/channel/video/oop-python">Объектно-ориентированное программирование в
                  Python</a>
            </li>
            <li>
              <a
                  href="https://ru.hexlet.io/courses/python-oop-basics?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=sanpol&advcake_params=4844df71912b15b816edc65741c31025&utm_term=4844df71912b15b816edc65741c31025&sub1=pyth&sub2=link&sub3=82&sub4=python-oop-basics&erid=LdtCK8wW7&advcake_method=1">Python:
                  Введение в ООП</a>
            </li>
          </ul>
          <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
          <ul>
            <li>
              <a href="https://www.reddit.com/r/Python/?rdt=60471">Reddit</a>
            </li>
            <li>
              <a href="https://www.python.org/community/forums/">Python.org</a>
            </li>
            <li>
              <a href="https://www.cyberforum.ru/python/?ysclid=ltwhrrore5900284198">Сyberforum</a>
            </li>
          </ul>
          <h3>Муҳити коркарди нармафзор:</h3>
          <ul>
            <li>
              <a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a>
            </li>
            <li>
              <a href="https://code.visualstudio.com/">Visual Studio Code</a>
            </li>
            <li>
              <a href="https://jupyter.org/">Jupyter</a>
            </li>
          </ul>
          <h3>Онлайн муҳити санҷиши коди барномавӣ:</h3>
          <ul>
            <li>
              <a href="https://www.online-ide.com/online_python_compiler#google_vignette">Online Python Compiler -
                  OnlineIDE</a>
            </li>
            <li>
              <a href="https://bio-python.netlify.app/">Online Python - IDE, Editor, Compiler, Interpreter</a>
            </li>
            <li>
              <a href="https://pythoncompiler.com/">Python Compiler</a>
            </li>
          </ul>
          <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
          <ul>
            <li>
              <a href="https://docs.python.org/3/library/index.html">Python Standard Library</a>
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