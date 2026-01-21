# QWEP KIT

## Публикация в NPM

### Процесс публикации новой версии:

1. **Обновите версию в `package.json`**
   ```bash
   # Отредактируйте package.json и установите нужную версию (например, 0.3.5)
   ```

2. **Закоммитьте изменения**
   ```bash
   # Проверьте статус изменений
   git status
   
   # Добавьте измененные файлы
   git add package.json
   
   # Создайте коммит
   git commit -m "chore: update version to 0.3.5"
   
   # Запушьте изменения в master
   git push origin master
   ```

3. **Создайте и запушьте тег**
   ```bash
   # Создайте тег с версией (должна совпадать с версией в package.json)
   git tag v0.3.5 -m "Release version 0.3.5"
   
   # Запушьте тег на GitHub (это запустит workflow для публикации)
   git push origin v0.3.5
   ```

4. **Проверка публикации**
   - Откройте GitHub Actions и проверьте, что workflow выполнился успешно
   - Проверьте npm: https://www.npmjs.com/package/qwep-kit
   - Версия в npm должна совпадать с версией в `package.json`

### Важно:
- Версия в теге должна совпадать с версией в `package.json`
- Workflow автоматически публикует версию из `package.json` в npm
- После публикации можно сделать `git pull` для получения последних изменений
