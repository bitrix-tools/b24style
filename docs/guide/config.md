# Настройки плагина {#config}

Плагин поддерживает следующие настройки:

<div class="info-wrapper">
	<table class="info">
		<thead>
			<tr>
				<th>Параметр</th>
				<th>Описание</th>
				<th>По умолчанию</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td translate="no" class="variable">logs</td>
				<td translate="no" class="value">
					Выводить логи в терминал во время процесса сборки
				</td>
				<td translate="no" class="value">false (нет)</td>
			</tr>
			<tr>
				<td translate="no" class="variable">useLocalFonts</td>
				<td translate="no" class="value">
					Использовать <a href="/guide/working-with-fonts#local-font-family">локальные шрифты</a>
				</td>
				<td translate="no" class="value">false (нет)</td>
			</tr>
		</tbody>
	</table>
</div>

Пример:

::: code-group
```js [tailwind.config.js]
module.exports = {
    content: [
        '...'
    ],
    theme: {},
    plugins: [
        '...',
        require('@bitrix24/b24style')({
            logs: true, // [!code ++]
            useLocalFonts: true // [!code ++]
        })
    ]
};
```

:::