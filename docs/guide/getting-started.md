# Начало работы {#getting-started}

`@bitrix24/b24style` позволяет создавать интерфейсы приложений, похожие на интерфейс Битрикс24, используя [утилитарные классы]([URL]https://tailwindcss.com/docs/utility-first[/URL]) Tailwind CSS.

Инструмент реализован как плагин для Tailwind CSS.

## Предварительные требования {#prerequisites}

- [Node.js]([URL]https://nodejs.org/[/URL]) версии 18 или выше.
- [Tailwind CSS]([URL]https://tailwindcss.com/[/URL]) версии 3.4.10 или выше.

## Установка {#installation}

1. Установите `@bitrix24/style` с помощью `npm`:

::: code-group

```sh [npm]
$ npm i @bitrix24/b24style
```

:::

2. Добавьте `@bitrix24/b24style` в `tailwind.config.js`:

::: code-group

```js{8} [tailwind.config.js]
module.exports = {
	content: [
		'...'
	],
	theme: {},
	plugins: [
		'...',
		require('@bitrix24/b24style') // [!code ++]
	]
};
```

:::

::: tip Важно помнить
`@bitrix24/b24style` автоматически включает расширение [`@tailwindcss/forms`]([URL]https://github.com/tailwindlabs/tailwindcss-forms[/URL]).
:::

На этом установка завершена.

## Что дальше? {#what-s-next}

- Прочитайте о [настройках плагина](/guide/config).
- Узнайте, как добавить дополнительные шрифты в разделе [Работа с шрифтами](/guide/working-with-fonts).
- Ознакомьтесь со [шкалой отступов](/reference/scale).
- Ознакомьтесь с материалами из руководства по [типографике](/reference/font-family).
- Изучите [Box Shadow](/reference/box-shadow): утилиты для управления тенями вокруг элементов.
- Ознакомьтесь с методами указания [границ](/reference/border-width) и [радиусов](/reference/border-radius) элементов.
- Прочитайте о [длительности переходов](/reference/transition-duration) и [анимации](/reference/animation).
