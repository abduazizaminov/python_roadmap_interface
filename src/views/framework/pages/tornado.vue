<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>Tornado</h1>
          <h5>Таҳиягар: Аминов А.Р.</h5>
        <p>Tornado як чаҳорчӯбаи веби Python ва китобхонаи шабакавии асинхронӣ аст, ки ибтидо дар FriendFeed таҳия шудааст. Бо истифода аз шабакаи ғайрифаъолкунандаи I/O, Tornado метавонад то даҳҳо ҳазор пайвастҳои кушодро васеъ кунад ва онро барои пурсишҳои дарозмуддат, WebSockets ва дигар замимаҳо, ки пайвастагиҳои дарозмуддатро ба ҳар як корбар талаб мекунанд, беҳтарин гардонад.</p>

        <h3>Ин аст намунаи оддии веб-барномаи "Салом, ҷаҳон" барои Торнадо:</h3>
        <pre><code>
    import asyncio
    import tornado

    class MainHandler(tornado.web.RequestHandler):
        def get(self):
            self.write("Салом, ҷаҳон")

    def make_app():
        return tornado.web.Application([
            (r"/", MainHandler),
        ])

    async def main():
        app = make_app()
        app.listen(8888)
        await asyncio.Event().wait()

    if __name__ == "__main__":
        asyncio.run(main())
        </code></pre>
        <h3>Насб Кардани Tornado</h3>
        <p>Шумо метавонед Tornado-ро бо истифода аз pip, менеҷери бастаи Python насб кунед:</p>
        <pre><code>
    pip install tornado
        </code></pre>
        <h3>Истифодаи асосии Tornado</h3>
        <p>Tornado барои сохтани барномаҳои веб ва шабакаҳои асинхронӣ дар Python самаранок истифода мешавад. Он барои вазифаҳое мувофиқ аст, ки коркарди шумораи зиёди пайвастҳои ҳамзамон, аз қабили коркарди розеткаҳои веб, ҷараёни видео, чатҳои вақти воқеӣ ва ғайраро талаб мекунанд.</p>
        <h4>Намунаҳои истифодаи Tornado:</h4>
        <h4>1. Сервери WebSocket:</h4>
        <p>Tornado дорои дастгирии дарунсохти WebSocket мебошад, ки онро интихоби беҳтарин барои сохтани веб-барномаҳои навсозии вақти воқеӣ ба монанди утоқҳои чат ё бозиҳои вақти воқеӣ месозад.</p>
        <pre><code>
    import tornado.websocket
    import tornado.ioloop

    class ChatWebSocket(tornado.websocket.WebSocketHandler):
        def open(self):
            print("WebSocket открыт")

        def on_message(self, message):
            # Просто отсылаем обратно полученное сообщение
            self.write_message(u"Вы сказали: " + message)

        def on_close(self):
            print("WebSocket закрыт")

    if __name__ == "__main__":
        app = tornado.web.Application([
            (r"/chat", ChatWebSocket),
        ])
        app.listen(8888)
        tornado.ioloop.IOLoop.current().start()

        </code></pre>
        <h4>2. Мизоҷи асинхронии HTTP:</h4>
        <p>Tornado имкон медиҳад, ки муштариёни асинхронии HTTP эҷод кунанд, ки метавонанд ба серверҳои дурдаст бидуни бастани риштаи асосӣ дархост пешниҳод кунанд.</p>
        <pre><code>
    import tornado.httpclient

    async def fetch_url(url):
        http_client = tornado.httpclient.AsyncHTTPClient()
        response = await http_client.fetch(url)
        return response.body

    if __name__ == "__main__":
        import asyncio
        asyncio.run(fetch_url("https://example.com"))

        </code></pre>
        <h4>3. Веб-сервер барои ҷараёни мундариҷа:</h4>
        <p>Tornado метавонад барои эҷоди серверҳои веб истифода шавад, ки метавонанд маълумоти ҷараёнро ба мисли ҷараёнҳои аудио ё видео идора кунанд.</p>
        <pre><code>
    import tornado.web
    import tornado.ioloop

    class AudioStreamHandler(tornado.web.RequestHandler):
        async def get(self):
            self.set_header("Content-Type", "audio/mpeg")

            # Чтение и передача аудио файла по частям
            with open("audio.mp3", "rb") as f:
                while True:
                    chunk = f.read(1024)
                    if not chunk:
                        break
                    self.write(chunk)
                    await self.flush()

    if __name__ == "__main__":
        app = tornado.web.Application([
            (r"/audio", AudioStreamHandler),
        ])
        app.listen(8888)
        tornado.ioloop.IOLoop.current().start()

        </code></pre>
        <p>Дар ин мисолҳо, Tornado самаранокии худро дар эҷоди веб-барномаҳои асинхронӣ нишон медиҳад, ки метавонанд пайвастагиҳои сершумор ва ҷараёни маълумотро идора кунанд. Ин интихоби олиҷаноб барои вазифаҳое мебошад, ки иҷрои баланд ва коркарди самарабахши вуруд/чорро талаб мекунанд.</p>
        <h3>Афзалиятҳо ва нуқсонҳои Tornado</h3>
        <h4>Афзалиятҳои Tornado</h4>
        <ul>
            <li>Иҷрои баланд: Ба туфайли коркарди асинхронии I/O, Tornado иҷрои баланд ва миқёспазириро таъмин мекунад.</li>
            <li>Дастгирии WebSocket: Tornado дорои дастгирии дарунсохти WebSocket мебошад, ки онро барои сохтани барномаҳои веб бо вақти воқеӣ дар вақти навсозӣ интихоби олӣ месозад.</li>
            <li>Мизоҷон ва серверҳои асинхронӣ: Торнадо метавонад барои эҷоди барномаҳои асинхронии ҳам дар тарафи сервер ва ҳам аз ҷониби муштарӣ истифода шавад.</li>
        </ul>
        <h4>Нуқсонҳои Tornado</h4>
        <ul>
            <li>Мушкилии таҳия: Аз сабаби табиати асинхронӣ ва истифодаи зангҳои бозгашт, коди бо истифода аз Tornado навишташуда нигоҳдорӣ ва ислоҳи хатогиҳо, махсусан барои шурӯъкунандагон метавонад душвортар бошад.</li>
            <li>Ҷамъияти хурдтар: Дар муқоиса бо чаҳорчӯбаҳои маъмултарин ба монанди Flask ва Django, ҷомеаи Торнадо хурдтар аст, ки метавонад гирифтани кӯмак ва дастгирӣро мушкил кунад.</li>
            <li>Барои вазифаҳои синхронӣ номувофиқ аст: Гарчанде ки Tornado барои вазифаҳои асинхронӣ беҳтарин аст, он метавонад барои вазифаҳои синхронӣ, ки ҷараёни иҷроро бозмедорад, камтар қулай бошад.</li>
        </ul>
        <h3>Маводҳо барои мутоила:</h3>
        <ul>
          <li>"Tornado Documentation" <a
              href="https://www.tornadoweb.org/_/downloads/en/branch6.0/pdf/">(скачать
              PDF)</a></li>
          <li>"Learning Tornado"<a
              href="https://riptutorial.com/Download/tornado.pdf">(скачать
              PDF)</a>
          </li>
          <li>"Python Web Frameworks" / Carlos de la Guardia<a
              href="https://theswissbay.ch/pdf/Books/Computer%20science/O%27Reilly/python-web-frameworks.pdf">(скачать
              PDF)</a></li>
        </ul>
        <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
        <ul>
          <li><a href="https://www.tornadoweb.org/">Tornado Web Server</a></li>
          <li><a href="https://habr.com/ru/articles/96945/">Документация tornado на русском языке</a></li>
          <li><a href="https://ooohosting.com/lib/plangs/python/tornado-veb-freimvork-realnogo-vremeni.html">Tornado - веб-фреймворк реального времени</a></li>
        </ul>
        <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
        <ul>
          <li><a href="https://courses.laimoon.com/course/building-restful-python-web-services-with-tornado-udemy/online">Building RESTful Python Web Services with Tornado in Udemy</a></li>
          <li><a href="https://www.geeksforgeeks.org/introduction-to-tornado-framework/">Introduction to Tornado Framework</a></li>
          <li><a href="https://www.khanacademy.org/computing/intro-to-python-fundamentals">Intro to computer science - Python</a></li>
        </ul>
        <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
        <ul>
          <li><a href="https://www.python-me.org/tornado">Python Tornado, A Quick-Start Guide</a></li>
          <li><a href="https://www.youtube.com/watch?v=-gJ21qzpieA">️ Tornado: High-Performance Python Framework</a></li>
          <li><a href="https://moscowpython.ru/meetup/25/tornado-crash-course/">Крэш-курс по Tornado для Django-программистов</a></li>
        </ul>
        <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
        <ul>
          <li><a href="https://qna.habr.com/q/223571">Что можно сделать на Tornado? - Хабр Q&A</a></li>
          <li><a href="https://python-forum.io/thread-21652.html">When should I use Tornado?</a></li>
          <li><a href="http://python.su/forum/post/102073/">Python-сообщество </a></li>
        </ul>
        <h3>Муҳити коркарди нармафзор:</h3>
        <ul>
          <li><a href="https://pycharm-community.en.uptodown.com/windows">PyCharm</a></li>
          <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
          <li><a href="https://jupyter.org/">Jupyter</a></li>
        </ul>
        <h3>Онлайн муҳити санҷиши коди барномавӣ:</h3>
        <ul>
          <li><a href="https://www.online-ide.com/online_python_compiler#google_vignette">Online Python Compiler - 
              OnlineIDE</a></li>
          <li><a href="https://bio-python.netlify.app/">Online Python - IDE, Editor, Compiler, Interpreter</a></li>
          <li><a href="https://pythoncompiler.com/">Python Compiler</a></li>
        </ul>
        <h3>Библиотека ва фреймворкҳои истифодашуда:</h3>
        <ul>
          <li><a href="https://pypi.org/project/tornado-sqlalchemy/">tornado-sqlalchemy</a></li>
          <li><a href="https://websockets.readthedocs.io/">WebSocket</a></li>
          <li><a href="https://pypi.org/project/tornado-cors/">tornado-cors</a></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>