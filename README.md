# gulp-constructor
Простой борщик front-end проекта.

Перед началом работы следует: 
1. Сконфигурировать файл package.json
2. Установить пакеты из npm репозитория командой npm install
3. Пользоваться

Команды:
1. gulp dev – Запускает локальный server и открывает браузер по умолчанию
2. gulp build – Собирает проект в продакшн
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
3. gulp clear – Очищает папку public за исключением файлов assets
4. gulp clear_all – Очищает всё содержимое папки public
5. gulp layput – Компилирует pug –> html в папку public
6. gulp style – Компилирует scss –> css в папку public/asssets/stylesheet  
7. gulp script – Объединяет js файлы в один и сохраняет в папке public/assets