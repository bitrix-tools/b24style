# @bitrix24/b24style

`@bitrix24/b24style` предоставляет возможность создавать интерфейсы приложений, которые максимально соответствуют пользовательскому интерфейсу Битрикс24, используя [утилитарные классы]([URL]https://tailwindcss.com/docs/utility-first[/URL]) Tailwind CSS.

Этот инструмент реализован как плагин для Tailwind CSS.

## Предварительные требования

- [Node.js]([URL]https://nodejs.org/[/URL]) версии 18 или выше.
- [Tailwind CSS]([URL]https://tailwindcss.com/[/URL]) версии 3.4.10 или выше.

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

Подробные изменения для каждого выпуска задокументированы в [CHANGELOG]([URL]https://github.com/bitrix-tools/b24style/blob/main/CHANGELOG.md[/URL]).

## Лицензия

[MIT]([URL]https://github.com/bitrix-tools/b24style/blob/main/LICENSE[/URL])

Авторские права (c) 2024-настоящее время, Битрикс