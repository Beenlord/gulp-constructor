# gulp-constructor
Комплекс инструментов для быстрого старта при разработке front-end приложений или вёрстке сайтов.

Перед началом работы следует: 
1. Удалите скрытую папку .git
2. Сконфигурировать файл package.json (по желанию или надобности)
3. Установить пакеты из npm репозитория командой: npm install (Краткая запись: npm i)
4. ...
5. PROFIT!

Команды:
1. gulp dev – Запускает localhost и открывает браузер по умолчанию
2. gulp build – Собирает проект в продакшн
3. gulp assets – Предназначена для работы с медиаконтентом
3.1. cnt - Копирует все пайлы помеченные как *.cnt.* с сохранением пути в каталог ./public
3.2. wp - Конвертирует .jpeg и .png изобрадения с префиксом .wp.jpeg и wp.png в папку ./public

Второстепенные команды:
1. gulp clear – Очищает папку public за исключением файлов assets
2. gulp clear_all – Очищает всё содержимое папки public
3. gulp layout – Компилирует pug –> html в папку public
4. gulp style – Компилирует scss –> css в папку public/asssets/stylesheet  
5. gulp script – Объединяет js файлы в один и сохраняет в папке public/assets
6. gulp wp_convert - конфертирует изображения формата .jpeg, .png с префиксом .wp. в формат .webp и сохраняет в папку ./public с сохранением пути к файлу
7. gulp transfer - переносит файлы с префиксом .cnt. в папку ./public с сохранением пути к файлу

В сборке используются следующие расширения: 
1. gulp-sass - https://www.npmjs.com/package/gulp-sass
2. gulp-pug - https://www.npmjs.com/package/gulp-pug
3. gulp-rigger - https://www.npmjs.com/package/gulp-rigger
4. del - https://www.npmjs.com/package/del
5. browser-sync - https://www.npmjs.com/package/browser-sync
6. gulp-webp - https://www.npmjs.com/package/gulp-webp
