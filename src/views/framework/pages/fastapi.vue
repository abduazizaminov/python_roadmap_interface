<template>
  <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <div class="lg:px-[64px] md:px-[32px] px-[24px] py-[40px]">
      <div class="py-[55px] flex items-center justify-between">
        <div>
          <h1>FastAPI</h1>
          <h5>Таҳиягар: Аминов А.Р.</h5>
        <p>FastAPI як чаҳорчӯбаи веб барои эҷоди APIҳо дар Python навишта шудааст. Яке аз тезтарин ва маъмултарин чаҳорчӯбаҳои веб, ки бо Python навишта шудааст.</p>
        <h3>Насб кардани FastAPI</h3>
        <p>Қадами аввал насб кардани FastAPI мебошад.
          Барои омӯзиш, шумо метавонед онро бо ҳама вобастагӣ ва хусусиятҳои иловагӣ насб кунед:</p>
          <pre><code>
    pip install "fastapi[all]"
          </code></pre>
          <p>Барои кор кардани FastAPI сервери ASGI лозим аст; бо нобаёнӣ, ҳуҷҷатҳо uvcorn-ро дар асоси uvloop пешниҳод мекунанд, аммо FastAPI инчунин метавонад бо серверҳои дигар, масалан, бо гиперкорн кор кунад.</p>
          <h3>API</h3>
          <p>Бояд қайд кард, ки равиш ба тарҳрезии коркардкунандагон дар FastAPI ба он дар Flask and Bottle хеле монанд аст.
            Ҳамчун тахмини аввал, масири коркарди нашр чунин буд:</p>
            <pre><code>
    from fastapi import FastAPI
    from starlette import status
    from starlette.responses import Response

    from models import Body

    app = FastAPI()  # noqa: pylint=invalid-name

    @app.post("/release/")
    async def release(*,
                      body: Body,
                      chat_id: str = None):
        await proceed_release(body, chat_id)
        return Response(status_code=status.HTTP_200_OK)
            </code></pre>
            <p>Дар ин ҷо бояд қайд кард, ки бо чунин параметрҳо ба коркардкунанда интиқол дода мешавад, FastAPI кӯшиш мекунад, ки мақоми дархостро дар Body силсилавӣ кунад ва параметри chat_id параметрҳои URL-ро ҷустуҷӯ мекунад</p>
            <h4>Файли models.py:</h4>
            <pre><code>
    from datetime import datetime
    from enum import Enum

    from pydantic import BaseModel, HttpUrl

    class Author(BaseModel):
        login: str
        avatar_url: HttpUrl

    class Release(BaseModel):
        name: str
        draft: bool = False
        tag_name: str
        html_url: HttpUrl
        author: Author
        created_at: datetime
        published_at: datetime = None
        body: str

    class Body(BaseModel):
        action: str
        release: Release
            </code></pre>
      <p>Дар ин ҷо шумо метавонед равшан бубинед, ки моделҳои Pydantic чӣ гунаанд. Онҳо метавонанд ҳамчун объектҳо ё рӯйхатҳо ҷойгир карда шаванд, масалан:</p>
      <pre><code>
    class Body(BaseModel):
        action: str
        releases: List[Release]
      </code></pre>
      <h3>Аутентификатсия</h3>
      <p>Аутентификатсия як расмиёти аутентификатсия мебошад, масалан: тасдиқи ҳаққонияти корбар бо роҳи муқоисаи пароли воридкардаи ӯ бо пароли дар базаи воридшавии корбар ҳифзшуда</p>
      <h4>Амал ​​намудани аутентификатсия тавассути JWT</h4>
      <p>Барои амалӣ кардани аутентификатсия тавассути JWT дар FastAPI, шумо бояд китобхонаҳои fastapi, uvicorn, pyjwt ва passlib-ро насб кунед.</p>
      <pre><code>
    pip install fastapi uvicorn pyjwt passlib[bcrypt]
      </code></pre>
      <p>Барои эҷод ва тасдиқи JWT-ҳо аз китобхонаи pyjwt истифода баред. Калиди махфӣ эҷод кунед ва санаи анҷоми нишонаро таъин кунед.</p>
      <pre><code>
    import jwt
    from datetime import datetime, timedelta

    SECRET_KEY = "my_secret_key"
    ALGORITHM = "HS256"
    EXPIRATION_TIME = timedelta(minutes=30)

    def create_jwt_token(data: dict):
        expiration = datetime.utcnow() + EXPIRATION_TIME
        data.update({"exp": expiration})
        token = jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
        return token

    def verify_jwt_token(token: str):
        try:
            decoded_data = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
            return decoded_data
        except jwt.PyJWTError:
            return None
      </code></pre>
      <h4>Бақайдгирии корбар ва аутентификатсия</h4>
      <p>Эҷоди масирҳо барои сабти номи корбар ва аутентификатсия. Барои ҳаш кардани паролҳо passlib-ро истифода баред.</p>
      <pre><code>
    from fastapi import FastAPI, Depends, HTTPException
    from fastapi.security import OAuth2PasswordBearer
    from passlib.context import CryptContext


    app = FastAPI()
    oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


    @app.post("/register")
    def register_user(username: str, password: str):
        hashed_password = pwd_context.hash(password)
        # Сохраните пользователя в базе данных
        return {"username": username, "hashed_password": hashed_password}


    @app.post("/token")
    def authenticate_user(username: str, password: str):
        user = get_user(username) # Получите пользователя из базы данных
        if not user:
            raise HTTPException(status_code=400, detail="Incorrect username or password")

        is_password_correct = pwd_context.verify(password, user.hashed_password)

        if not is_password_correct:
            raise HTTPException(status_code=400, detail="Incorrect username or password")
        jwt_token = create_jwt_token({"sub": user.username})
        return {"access_token": jwt_token, "token_type": "bearer"}
      </code></pre>
      <h4>Пайвастагии JWT ба хатсайрҳо</h4>
      <p>Барои пайваст кардани JWT-ҳои аутентификатсия ба хатсайрҳо Depends ва oauth2_scheme-ро истифода баред. Барои гирифтани корбари ҷорӣ вобастагӣ эҷод кунед.</p>
      <pre><code>
    def get_current_user(token: str = Depends(oauth2_scheme)):
        decoded_data = verify_jwt_token(token)
        if not decoded_data:
            raise HTTPException(status_code=400, detail="Invalid token")
        user = get_user(decoded_data["sub"])  # Получите пользователя из базы данных
        if not user:
            raise HTTPException(status_code=400, detail="User not found")
        return user


    @app.get("/users/me")
    def get_user_me(current_user: User = Depends(get_current_user)):
        return current_user
      </code></pre>
        <h3>Маводҳо барои мутоила:</h3>
        <ul>
          <li>"FastAPI tutorialspoint"<a
              href="https://www.tutorialspoint.com/fastapi/fastapi_tutorial.pdf">(скачать
              PDF)</a></li>
          <li>"FastAPI Modern Python Web Development" / Bill Lubanovic <a
              href="http://103.159.250.194:81/fdScript/RootOfEBooks/E%20Book%20collection%20-%202024/CSE%20%20IT%20AIDS%20ML/OReilly.FastAPI.Modern.Python.Web.Development.pdf">(скачать
              PDF)</a>
          </li>
          <li>"Python Rest Api Framework Documentation" / Yohann Gabory <a
              href="https://readthedocs.org/projects/python-rest-framework/downloads/pdf/latest/">(скачать
              PDF)</a></li>
        </ul>
        <h3>Интернет – сомонаҳо бо маводҳо барои мутоила:</h3>
        <ul>
          <li><a href="https://fastapi.tiangolo.com/">FatsAPI Documenattion</a></li>
          <li><a href="https://habr.com/ru/articles/488468/">Знакомство с FastAPI / Хабр</a></li>
          <li><a href="https://itstalker.ru/coding/637/">Начало работы с FAST API. Краткое описание</a></li>
        </ul>
        <h3>Курсҳои омӯзишӣ бо воситаи Интернет дар Coursera, EdX, Khan Academy, Udemy:</h3>
        <ul>
          <li><a href="https://www.coursera.org/projects/introduction-to-fastapi-framework">Introduction to FastAPI framework</a></li>
          <li><a href="https://www.edx.org/learn/fastapi">Best Online FastAPI Courses and Programs</a></li>
          <li><a href="https://www.udemy.com/course/fastapi-the-complete-course/">FastAPI - The Complete Course 2024</a></li>
        </ul>
        <h3>Дигар курсҳои омӯзишӣ бо воситаи Интернет:</h3>
        <ul>
          <li><a href="https://stepik.org/course/179694/promo">Быстрый старт в FastAPI Python</a></li>
          <li><a href="https://career.habr.com/courses/skills/fastapi">Курсы FastAPI</a></li>
          <li><a href="https://career.habr.com/courses/2944-fastapi-pogruzhenie-v-backend-razrabotku-na-python">Курс FastAPI — погружение в backend разработку на Python</a></li>
        </ul>
        <h3>Форумҳо ё дигар шаклҳои имконпазири муҳокимаи проблемаҳо дар Интернет:</h3>
        <ul>
          <li><a href="https://gb.ru/topics/11261">GeekBrains</a></li>
          <li><a href="https://fastapi.tiangolo.com/help-fastapi/">Help FastAPI - Get Help</a></li>
          <li><a href="https://www.pythonanywhere.com/forums/topic/14918/">FastAPI : Forums</a></li>
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
          <li><a href="https://www.uvicorn.org/">Uvicorn</a></li>
          <li><a href="https://pyjwt.readthedocs.io/">PyJWT</a></li>
          <li><a href="https://passlib.readthedocs.io/en/stable/">passlib</a></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import  '@/assets/pages.css'
</style>