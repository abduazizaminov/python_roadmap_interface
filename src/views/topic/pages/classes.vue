<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Classes - Синфҳо</h1>
    <p>Объект - маҷмӯи маълумот (тағйирёбандаҳо) ва усулҳо (функсияҳо) мебошад. Синф - расми (нақшаи) объект аст.</p>
    <h3>Синфҳо</h3>
    <p>Барои сохтани синф дар Python, калимаи калидии <code>class</code> истифода бурда мешавад:</p>
    <pre><code>
        class ClassName:
            # Муайянкунии синф
    </code></pre>
    <p>Дар ин ҷо мо синферо бо номи <code>ClassName</code> муайян кардем.</p>
    <h4>Мисол:</h4>
    <pre><code>
        class Bike:
            name = ""
            gear = 0
    </code></pre>
    <h4>Дар ин ҷо:</h4>
    <ul>
        <li><p><code>Bike</code> - номи синф;</p></li>
        <li><p><code>name</code> ва <code>gear</code> - тағирёбандаҳо дар дохили синф;</p></li>
    </ul>
    <p>Тағирёбандаҳои дохили синф <b>атрибутҳо</b> номида мешаванд.</p>
    <h3>Объектҳо</h3>
    <p>Объект - нусхаи синф аст. Масалан, <code>Bike</code> синф аст ва мо метавонем аз ин синф объектҳо ба мисли <code>bike1</code>, <code>bike2</code> созем.</p>
    <h4>Синтаксис барои сохтани объектҳои синф дар Python ин аст:</h4>
    <pre><code>
        objectName = ClassName()
    </code></pre>
    <h4>Мисол:</h4>
    <pre><code>
        # Сохтани синф
        class Bike:
            name = ""
            gear = 0
        
        # Сохтани объекти синф
        bike1 = Bike()
    </code></pre>
    <p>Дар ин ҷо <code>bike1</code> объекти синфи <code>Bike</code> мебошад. Мо метавонем ин объектро барои дастрасӣ ба атрибутҳои синфи <code>Bike</code> истифода барем.</p>
    <h3>Дастрасӣ ба атрибутҳои синф тавассути объектҳо</h3>
    <p>Оператори <code>.</code> барои дастрасӣ ба атрибутҳои синф истифода бурда мешавад. Масалан:</p>
    <pre><code>
        # Тағир додани атрибути name-и объекти bike1
        bike1.name = "Mountain Bike"
        
        # Пайдо кардани дастрас ба атрибути gear-и объекти bike1 
        bike1.gear
    </code></pre>
    <p>Дар ин ҷо мо <code>bike1.name</code> ва <code>bike1.gear</code>-ро барои дастрасӣ ва тағир додани арзиши атрибутҳои <code>name</code> ва <code>gear</code> истифода бурдем.</p>
    <h4>Мисоли дигар:</h4>
    <pre><code>
        # Сохтани синф
        class Bike:
            name = ""
            gear = 0
        
        # Сохтани объекти синф
        bike1 = Bike()
        
        # Дастрасӣ ба атрибутҳои объект ва таъини арзишҳои нав
        bike1.gear = 11
        bike1.name = "Mountain Bike"
        
        # Намоиши маълумоти объект дар экран
        print(f"Name: {bike1.name}, Gears: {bike1.gear} ")
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        Name: Mountain Bike, Gears: 11
    </code></pre>
    <p>Дар ин ҷо мо синфи <code>Bike</code>-ро бо ду атрибут муайян кардем: <code>name</code> ва <code>gear</code>. Мо объекти <code>bike1</code>-и синфи <code>Bike</code> сохтем, ба атрибутҳои объект дастрасӣ пайдо кардем ва сипас онҳоро бо истифода аз оператори <code>.</code> иваз кардем.</p>
    <h3>Сохтани якчанд объектҳои як синф</h3>
    <h4>Мо метавонем объектҳои зиёди як синфро созем. Масалан:</h4>
    <pre><code>
        # Сохтани синф
        class Employee:
            # Муайян кардани атрибут 
            employee_id = 0
        
        # Сохтани ду объекти синфи Employee
        employee1 = Employee()
        employee2 = Employee()
        
        # Дастрасӣ ба атрибутҳои объекти employee1 ва таъини арзиши нав 
        employee1.employeeID = 1001
        print(f"Employee ID: {employee1.employeeID}")
        
        # Дастрасӣ ба атрибутҳои объекти employee2 ва таъини арзиши нав 
        employee2.employeeID = 1002
        print(f"Employee ID: {employee2.employeeID}")
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        Employee ID: 1001
        Employee ID: 1002
    </code></pre>
    <h3>Методҳо дар Python</h3>
    <h4>Функсияи дар дохили синф муайяншуда метод номида мешавад.</h4>
    <pre><code>
        # Сохтани синф
        class Room:
            length = 0.0
            width = 0.0
            
            # Методи ҳисобкунии минтақа
            def calculate_area(self):
                print("Area of Room =", self.length * self.width)
        
        # Сохтани объекти синфи Room
        study_room = Room()
        
        # Таъин кардани арзишҳои нав ба ҳама атрибутҳои объект
        study_room.length = 42.5
        study_room.width = 30.8
        
        # Дастрасӣ ба метод дар дохили синф
        study_room.calculate_area()
    </code></pre>
    <h4>Натиҷа:</h4>
    <pre><code>
        Area of Room = 1309.0
    </code></pre>
    <p>Дар ин ҷо мо синфи <code>Room</code>-ро бо атрибутҳои <code>length</code> ва <code>width</code> ва методи <code>account_area()</code> сохтем. Пас аз он мо як объекти <code>study_room</code>-и синфи <code>Room</code> сохтем ва ин объектро барои таъин кардани арзишҳо ба атрибутҳои <code>length</code> ва <code>width</code> истифода бурдем. Дар хотир доред, ки мо инчунин ин объектро барои даъват кардани метод дар дохили синф бо истифода аз оператори <code>.</code> истифода мебарем:</p>
    <pre><code>
        study_room.calculate_area()
    </code></pre>
    <h3>Конструкторҳо дар Python</h3>
    <p>Конструктор - методи махсусест, ки объекти синфро оғоз мекунад. Ин методест, ки ҳангоми сохтани як мисоли нави синф даъват мешавад.</p>
    <pre><code>
        class Bike:
            # Функсияи конструктор    
            def __init__(self, name = ""):
                self.name = name
        
        bike1 = Bike()
    </code></pre>
    <p>Дар ин ҷо <code>__init__()</code> функсияи конструктор аст, ки ҳар вақте ки объекти нави ин синф сохта мешавад, даъват карда мешавад. Конструктор арзиши атрибути <code>name</code>-ро оғоз мекунад. Мо <code>self.name</code>-ро барои истинод ба атрибути <code>name</code>-и объекти <code>bike1</code> истифода мебарем.</p>
    <p>Агар мо конструкторро барои оғоз кардани арзишҳо дар дохили синф истифода барем, мо бояд ҳангоми сохтани объекти синф арзиши мувофиқро гузаронем:</p>
    <pre><code>
        bike1 = Bike("Mountain Bike")
    </code></pre>
    <p>Дар ин ҷо, <code>"Mountain Bike"</code> ҳамчун аргументи <code>name</code> ба функсияи <code>__init__()</code> интиқол дода мешавад (ки конструктори синфи <code>Bike</code> аст) барои оғоз кардани атрибути <code>name</code>.</p>
    <h3>Маводҳо барои мутоила:</h3>
    <ul>
        <li><p>"Объектно-ориентированное программирование на языке Python" / Задорожный Сергей Сергеевич, Фадеев Егор Павлович <a href="https://cmp.phys.msu.ru/sites/default/files/%D0%9E%D0%9E%D0%9F_%D0%BD%D0%B0_Python_%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D0%BE%D0%B5%20%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B8%D0%B5_var7.pdf?ysclid=luc4x7pshd442875201">(скачать PDF)</a></p></li>
        <li><p>"Python. Подробный справочник" / Дэвид Бизли <a href="https://k0d.cc/storage/books/PYTHON/python_podrobnyi_spravochnik_4-e_izd.pdf">(скачать PDF)</a></p></li>
        <li><p>"Простой Python. Современный стиль программирования" / Любанович Бил <a href="https://pydarslik.pythonanywhere.com/media/resource_file/%D0%91%D0%B8%D0%BB%D0%BB_%D0%9B%D1%8E%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87_%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9_Python_%D0%91%D0%B5%D1%81%D1%82%D1%81%D0%B5%D0%BB%D0%BB%D0%B5%D1%80%D1%8B.pdf">(скачать PDF)</a></p></li>
    </ul>
    <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
    <ul>
        <li><p><a href="https://docs.python.org/3/tutorial/classes.html">Classes in Python</a></p></li>
        <li><p><a href="https://www.geeksforgeeks.org/python-classes-and-objects/">Python Classes and Objects</a></p></li>
        <li><p><a href="https://www.youtube.com/watch?v=ZDa-Z5JzLYM&list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc">Python OOP Tutorial</a></p></li>
    </ul>
    <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
    <ul>
        <li><p><a href="https://www.coursera.org/learn/python-classes-inheritance">Классы и наследование в Python</a></p></li>
        <li><p><a href="https://www.udemy.com/course/object-oriented-programming-with-python/?couponCode=LETSLEARNNOW">Object Oriented Programming with Python 3</a></p></li>
        <li><p><a href="https://translated.turbopages.org/proxy_u/en-ru.ru.b4f480e9-65fabce2-c4c6f979-74722d776562/https/www.udemy.com/course/all-about-class-in-python-and-graphs/">Классы и объекты Python</a></p></li>
    </ul>
    <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
    <ul>
        <li><p><a href="https://matesanz.github.io/python-machine-learning-course/%F0%9F%93%9A-Tutorials/%F0%9F%90%8D-Python-Basics/decorators/">Python for Machine Learning Course</a></p></li>
        <li><p><a href="https://egoroffartem.pythonanywhere.com/course/oop-python/klassy-obekty-ekzemplyary-klassov">Классы, объекты, экземпляры классов</a></p></li>
        <li><p><a href="https://deepskills.ru/courses/object-oriented-programming-python/?ysclid=ltzo2t4cqb275692306">ООП в Python</a></p></li>
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
    </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import  '@/assets/pages.css'
</style>