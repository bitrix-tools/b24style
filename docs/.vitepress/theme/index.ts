// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DynamicLayout from '../components/DynamicLayout.vue'
import ShTailwindCssLink from '../components/ShTailwindCssLink.vue'
import ColorPaletteReference from '../components/ColorPaletteReference.vue'
import ColorPaletteReferenceGroup from '../components/ColorPaletteReferenceGroup.vue'
import SpacingScale from '../components/SpacingScale.vue'

import './style.css'

import presetBorder from '@bitrix24/b24style/dist/plugins/preset-border';
import presetColors from '@bitrix24/b24style/dist/plugins/preset-colors';
import presetFonts from '@bitrix24/b24style/dist/plugins/preset-fonts';
import presetShadow from '@bitrix24/b24style/dist/plugins/preset-shadow';
import presetSize from '@bitrix24/b24style/dist/plugins/preset-size';
import presetText from '@bitrix24/b24style/dist/plugins/preset-text';
import presetAnimation from '@bitrix24/b24style/dist/plugins/preset-animation';
import presetTransition from '@bitrix24/b24style/dist/plugins/preset-transition';

export default {
	extends: DefaultTheme,
	Layout: DynamicLayout,
	enhanceApp({app})
	{
		app.provide('presetColors', presetColors)
		app.provide('presetSize', presetSize)
		app.provide('presetText', presetText)
		app.provide('presetBorder', presetBorder)
		app.provide('presetFonts', presetFonts)
		app.provide('presetShadow', presetShadow)
		app.provide('presetAnimation', presetAnimation)
		app.provide('presetTransition', presetTransition)
		
		app.component('ShTailwindCssLink', ShTailwindCssLink)
		app.component('ColorPaletteReference', ColorPaletteReference)
		app.component('ColorPaletteReferenceGroup', ColorPaletteReferenceGroup)
		app.component('SpacingScale', SpacingScale)
	}
} satisfies Theme
