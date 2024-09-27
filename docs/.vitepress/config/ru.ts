import { defineConfig, type DefaultTheme } from 'vitepress'
import { configParams } from './params'

export const ru = defineConfig({
	lang: 'ru-RU',
	description: 'Стили Битрикс24 на основе Tailwind CSS',
	
	themeConfig: {
		nav: nav(),
		
		sidebar: {
			'/guide/': { base: '/guide/', items: sidebarGuide() },
			'/reference/': { base: '/reference/', items: sidebarReference() }
		},
		
		editLink: {
			pattern: 'https://github.com/bitrix-tools/b24style/edit/main/docs/:path',
			text: 'Редактировать страницу'
		},
		
		footer: {
			message: 'Опубликовано под лицензией MIT.',
			copyright: 'Copyright © 2024 – настоящее время Битрикс'
		},
		
		outline: { label: 'Содержание страницы' },
		
		docFooter: {
			prev: 'Предыдущая страница',
			next: 'Следующая страница'
		},
		
		lastUpdated: {
			text: 'Обновлено'
		},
		
		darkModeSwitchLabel: 'Оформление',
		lightModeSwitchTitle: 'Переключить на светлую тему',
		darkModeSwitchTitle: 'Переключить на тёмную тему',
		sidebarMenuLabel: 'Меню',
		returnToTopLabel: 'Вернуться к началу',
		langMenuLabel: 'Изменить язык'
	}
})

function nav(): DefaultTheme.NavItem[] {
	return [
		{text: 'Руководство', link: '/guide/getting-started'},
		{text: 'Справочник', link: '/reference/colors'},
		{
			text: configParams.version,
			items: [
				{
					text: 'Changelog',
					link: `https://github.com/bitrix-tools/b24style/blob/main/CHANGELOG.md`
				},
				... configParams.relative
			]
		}
	]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Руководство',
			collapsed: false,
			items: [
				{ text: 'Getting Started', link: 'getting-started' },
				{ text: 'Plugin Settings', link: 'config' },
				{ text: 'Working with Fonts', link: 'working-with-fonts' },
			]
		},
		{ text: 'Reference', base: '/reference/', link: 'colors' }
	]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Constants',
			collapsed: false,
			items: [
				{ text: 'Colors', link: 'colors' },
				{ text: 'Scale', link: 'scale' },
			]
		},
		{
			text: 'Typography',
			collapsed: false,
			items: [
				{ text: 'Font Family', link: 'font-family' },
				{ text: 'Font Size', link: 'font-size' },
				{ text: 'Font Weight', link: 'font-weight' },
				{ text: 'Line Height', link: 'line-height' },
				{ text: 'Letter Spacing', link: 'letter-spacing' },
			]
		},
		{
			text: 'Borders',
			collapsed: false,
			items: [
				{ text: 'Border Radius', link: 'border-radius' },
				{ text: 'Border Width', link: 'border-width' },
			]
		},
		{
			text: 'Effects',
			collapsed: false,
			items: [
				{ text: 'Box Shadow', link: 'box-shadow' },
			]
		},
		{
			text: 'Transitions and Animation',
			collapsed: false,
			items: [
				{ text: 'Transition Duration', link: 'transition-duration' },
				{ text: 'Animation', link: 'animation' },
			]
		}
	]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
	// ru: {
	root: {
		translations: {
			button: {
				buttonText: 'Поиск',
				buttonAriaLabel: 'Поиск'
			},
			modal: {
				displayDetails: 'Отобразить подробный список',
				resetButtonTitle: 'Сбросить поиск',
				backButtonTitle: 'Закрыть поиск',
				noResultsText: 'Нет результатов по запросу',
				footer: {
					selectText: 'выбрать',
					selectKeyAriaLabel: 'выбрать',
					navigateText: 'перейти',
					navigateUpKeyAriaLabel: 'стрелка вверх',
					navigateDownKeyAriaLabel: 'стрелка вниз',
					closeText: 'закрыть',
					closeKeyAriaLabel: 'esc'
				}
			}
		}
	}
}