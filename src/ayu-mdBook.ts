import color from 'ayu/dist/color'

// ayu variant used in mdBook
// Based on https://github.com/rust-lang/mdBook/blob/master/src/theme/css/variables.css#L15-L53

const c = color(`0F1419`)

const main = {
	bg: c`0F1419`, // hsl(210, 25%, 8%)
	fg: c`C5C5C5`,
	accent: c`FFB454`,

	links: c`0096CF`,
	inlineCode: c`FFB454`,
	quote: {
		bg: c`252832`, // hsl(226, 15%, 17%)
		border: c`303441`, // hsl(226, 15%, 22%)
	},
	table: {
		border: c`192129`, // hsl(210, 25%, 13%)
		headerBg: c`364759`, // hsl(210, 25%, 28%)
		altBg: c`151C23`, // hsl(210, 25%, 11%)
	},
}
const sidebar = {
	bg: c`14191F`,
	fg: c`C8C9DB`,
	nonExistant: c`5C6773`,
	active: c`FFB454`,
	spacer: c`2D334F`,
}
const menubar = {
	icons: {
		normal: c`737480`,
		hover: c`B7B9CC`,
	},
	themePopup: {
		bg: c`14191F`,
		border: c`5C6773`,
		hover: c`191F26`,
	},
}
const searchbar = {
	border: c`848484`,
	bg: c`424242`,
	fg: c`FFFFFF`,
	shadow: c`D4C89F`,
	results: {
		headerFg: c`666666`,
		border: c`888888`,
		listBg: c`252932`,
	},
	markBg: c`e3b171`,
}

export default {
	main,
	sidebar,
	menubar,
	searchbar,
}
