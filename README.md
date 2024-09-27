# @bitrix24/b24style

`@bitrix24/b24style` предоставляет возможность создавать интерфейсы приложений, которые максимально соответствуют пользовательскому интерфейсу Битрикс24, используя [утилитарные классы](https://tailwindcss.com/docs/utility-first) Tailwind CSS.

Этот инструмент реализован как плагин для Tailwind CSS.

## Предварительные требования

- [Node.js](https://nodejs.org/) версии 18 или выше.
- [Tailwind CSS](https://tailwindcss.com/) версии 3.4.10 или выше.

## Установка

Установите `@bitrix24/style` как зависимость, используя `npm`, выполнив следующую команду:

```bash
npm i @bitrix24/b24style
```

Добавьте `@bitrix24/b24style` как плагин в файл `tailwind.config.js`:

```js
module.exports = {
  content: [
    '...'
  ],
  theme: {},
  plugins: [
    '...',
    require('@bitrix24/b24style')
  ]
};
```

## Изменения

Подробные изменения для каждого выпуска задокументированы в [CHANGELOG](https://github.com/bitrix-tools/b24style/blob/main/CHANGELOG.md).

## Лицензия

[MIT](https://github.com/bitrix-tools/b24style/blob/main/LICENSE)

Авторские права (c) 2024-настоящее время, Битрикс