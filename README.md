# gulp-constructor
Стартовый инструментарий для сборки front-end проекта.

Перед началом работы следует: 
1. Удалите скрытую папку .git
2. Сконфигурировать файл package.json (по желанию или надобности)
3. Установить пакеты из npm репозитория командой npm install (Краткая запись: npm i)
4. Пользуйтесь на здоровье

Команды:
1. gulp dev – Запускает localhost и открывает браузер по умолчанию
2. gulp build – Собирает проект в продакшн

Второстепенные команды:
1. gulp clear – Очищает папку public за исключением файлов assets
2. gulp clear_all – Очищает всё содержимое папки public
3. gulp layout – Компилирует pug –> html в папку public
4. gulp style – Компилирует scss –> css в папку public/asssets/stylesheet  
5. gulp script – Объединяет js файлы в один и сохраняет в папке public/assets

В сборке используются следующие расширения: 
1. gulp-sass - https://www.npmjs.com/package/gulp-sass
2. gulp-pug - https://www.npmjs.com/package/gulp-pug
3. gulp-rigger - https://www.npmjs.com/package/gulp-rigger
4. del - https://www.npmjs.com/package/del
5. browser-sync - https://www.npmjs.com/package/browser-sync
