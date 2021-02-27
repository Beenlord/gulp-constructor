# gulp-constructor
Простой cборщик front-end проекта.

Перед началом работы следует: 
1. Удалите скрытую папку .git
2. Сконфигурировать файл package.json
3. Установить пакеты из npm репозитория командой npm install
4. Пользуйтесь на здоровье

Команды:
1. gulp dev – Запускает localhost и открывает браузер по умолчанию
2. gulp build – Собирает проект в продакшн

Второстепенные команды:
1. gulp clear – Очищает папку public за исключением файлов assets
2. gulp clear_all – Очищает всё содержимое папки public
3. gulp layput – Компилирует pug –> html в папку public
4. gulp style – Компилирует scss –> css в папку public/asssets/stylesheet  
5. gulp script – Объединяет js файлы в один и сохраняет в папке public/assets
