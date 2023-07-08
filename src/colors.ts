import * as ayu from 'ayu'
import mdb from './ayu-mdBook'
import color from 'ayu/dist/color'

const c = color(`0F1419`)

export default {
	syntax: ayu.dark.syntax,
	vcs: ayu.mirage.vcs,
	editor: {
		fg: ayu.dark.editor.fg,
		bg: ayu.dark.editor.bg,
		guide: ayu.dark.editor.indentGuide.active,
		findMatch: {
			active: ayu.dark.editor.findMatch.active,
			inactive: ayu.dark.editor.findMatch.inactive.alpha(0.4),
		},
		selection: {
			active: ayu.dark.editor.selection.active.alpha(0.25),
			inactive: ayu.dark.editor.selection.inactive.alpha(0.13),
		},
	},
	ui: {
		fg: {
			light: ayu.mirage.editor.fg,
			normal: ayu.light.ui.fg,
			dark: ayu.mirage.ui.fg,
		},
		bg: {
			lighter: ayu.mirage.ui.bg,
			light: ayu.mirage.ui.panel.bg,
			normal: ayu.mirage.ui.line,
			dark: mdb.sidebar.bg,
			darker: ayu.dark.ui.line,
		},
		line: {
			light: ayu.mirage.editor.indentGuide.active.alpha(0.35),
			normal: ayu.mirage.editor.indentGuide.normal.alpha(0.18).brighten(0.5),
			dark: ayu.dark.editor.indentGuide.normal.alpha(0.18),
		},
		border: ayu.mirage.ui.line,
		handle: ayu.dark.ui.fg,
		shadow: ayu.mirage.ui.panel.shadow,
		secondary: mdb.main.table.headerBg,
		findMatch: {
			active: ayu.mirage.editor.findMatch.active.alpha(1),
			inactive: ayu.mirage.editor.findMatch.inactive.alpha(0.4),
		},
	},
	item: {
		inactive: ayu.dark.ui.fg,
		focus: {
			active: ayu.mirage.ui.selection.active,
			hover: ayu.mirage.ui.selection.normal,
		},
		selection: {
			active: ayu.mirage.editor.selection.active.alpha(0.25),
			inactive: ayu.mirage.editor.selection.inactive.alpha(0.13),
		},
	},
	accent: {
		light: ayu.mirage.common.accent,
		normal: ayu.dark.common.accent,
		dark: ayu.dark.common.accent.darken(0.4),
	},
	error: ayu.dark.common.error,
	warning: ayu.dark.syntax.func,
	info: ayu.mirage.syntax.tag,
	brackets: [
		ayu.mirage.syntax.func.darken(0.2),
		ayu.mirage.syntax.markup.darken(0.4),
		ayu.mirage.syntax.tag.darken(0.6),
	],
}
