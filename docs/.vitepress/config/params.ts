import pkg from "../../../package.json";

let [domain, folder] = pkg.homepage.replace('https://', '').split('/')

export const configParams = Object.freeze({
	version: pkg.version,
	domain: `https://${domain}`,
	baseFolder: `/${folder}/`,
	github: pkg.repository.url.replace('git+', '').replace('.git', ''),
	relative: [
		{
			text: '@bitrix24/b24icons',
			link: 'https://bitrix-tools.github.io/b24icons/guide/icons.html'
		},
		{
			text: '@bitrix24/b24ui',
			link: 'https://bitrix24.github.io/b24ui/'
		},
		{
			text: '@bitrix24/b24jssdk',
			link: 'https://bitrix-tools.github.io/b24jssdk/'
		}
	]
})