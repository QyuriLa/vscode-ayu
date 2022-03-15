import * as scheme from 'ayu'

const terminalColors = {
	light: {
		black: '#000000',
		white: '#c7c7c7',
		brightBlack: '#686868',
		brightWhite: '#d1d1d1'
	},
	dark: {
		black: scheme.dark.ui.line.hex(),
		white: '#c7c7c7',
		brightBlack: '#686868',
		brightWhite: '#ffffff'
	},
	mirage: {
		black: scheme.mirage.ui.line.hex(),
		white: '#c7c7c7',
		brightBlack: '#686868',
		brightWhite: '#ffffff'
	}
}

export default () => {
	return {
		type: 'dark',
		colors: {
			// Colour reference https://code.visualstudio.com/docs/getstarted/theme-color-reference

			// CONTRAST COLOURS
			// --

			// BASE COLOURS
			focusBorder: scheme.dark.common.accent.alpha(0.7).hex(),
			foreground: scheme.light.ui.fg.hex(),
			'widget.shadow': scheme.mirage.ui.panel.shadow.hex(),
			'selection.background': scheme.mirage.editor.selection.active.hex(),
			'icon.foreground': scheme.light.ui.fg.hex(),
			errorForeground: scheme.mirage.common.error.hex(),
			descriptionForeground: scheme.mirage.ui.fg.hex(),

			// TEXT COLOURS
			'textBlockQuote.background': scheme.mirage.ui.panel.bg.hex(),
			'textLink.foreground': scheme.dark.common.accent.hex(),
			'textLink.activeForeground': scheme.mirage.common.accent.hex(),
			'textPreformat.foreground': scheme.mirage.editor.fg.hex(),

			// BUTTON CONTROL
			'button.background': scheme.dark.common.accent.hex(),
			'button.foreground': scheme.dark.ui.bg.hex(),
			'button.hoverBackground': scheme.dark.common.accent.darken(0.1).hex(),
			'button.secondaryBackground': scheme.mirage.ui.fg.alpha(0.2).hex(),
			'button.secondaryForeground': scheme.mirage.editor.fg.hex(),
			'button.secondaryHoverBackground': scheme.mirage.ui.fg.alpha(0.5).hex(),

			// DROPDOWN CONTROL
			'dropdown.background': scheme.mirage.editor.bg.hex(),
			'dropdown.foreground': scheme.light.ui.fg.hex(),
			'dropdown.border': scheme.mirage.ui.fg.alpha(0.27).hex(),

			// INPUT CONTROL
			'input.background': scheme.dark.ui.line.hex(),
			'input.border': scheme.mirage.ui.bg.hex(),
			'input.foreground': scheme.dark.editor.fg.hex(),
			'input.placeholderForeground': scheme.mirage.ui.fg.alpha(0.5).hex(),
			'inputOption.activeBorder': scheme.dark.common.accent.alpha(0.3).hex(),
			'inputOption.activeBackground': scheme.dark.common.accent.alpha(0.2).hex(),
			'inputOption.activeForeground': scheme.dark.common.accent.hex(),
			'inputValidation.errorBackground': scheme.mirage.editor.bg.hex(),
			'inputValidation.errorBorder': scheme.mirage.common.error.hex(),
			'inputValidation.infoBackground': scheme.mirage.ui.bg.hex(),
			'inputValidation.infoBorder': scheme.mirage.syntax.tag.hex(),
			'inputValidation.warningBackground': scheme.mirage.ui.bg.hex(),
			'inputValidation.warningBorder': scheme.mirage.syntax.func.hex(),

			// SCROLLBAR CONTROL
			'scrollbar.shadow': scheme.mirage.ui.line.alpha(0).hex(),
			'scrollbarSlider.background': scheme.dark.ui.fg.alpha(0.4).hex(),
			'scrollbarSlider.hoverBackground': scheme.dark.ui.fg.alpha(0.6).hex(),
			'scrollbarSlider.activeBackground': scheme.dark.ui.fg.alpha(0.7).hex(),

			// BADGE
			'badge.background': scheme.dark.common.accent.hex(),
			'badge.foreground': scheme.dark.ui.bg.hex(),

			// PROGRESS BAR
			'progressBar.background': scheme.dark.common.accent.hex(),

			// LISTS AND TREES
			'list.activeSelectionBackground': scheme.mirage.editor.selection.active.hex(),
			'list.activeSelectionForeground': scheme.mirage.editor.fg.hex(),
			// 'list.activeSelectionIconForeground': scheme.editor.fg.alpha(.7).hex(),
			'list.focusBackground': scheme.mirage.ui.selection.active.hex(),
			'list.focusForeground': scheme.mirage.editor.fg.hex(),
			'list.focusOutline': scheme.dark.common.accent.alpha(0.3).hex(),
			'list.highlightForeground': scheme.mirage.common.accent.hex(),
			'list.deemphasizedForeground': scheme.mirage.common.error.hex(),
			'list.hoverBackground': scheme.dark.ui.selection.active.hex(),
			'list.hoverForeground': scheme.mirage.editor.fg.hex(),
			'list.inactiveSelectionBackground': scheme.mirage.editor.selection.inactive.hex(),
			'list.inactiveSelectionForeground': scheme.light.ui.fg.hex(),
			'list.invalidItemForeground': scheme.mirage.ui.fg.alpha(0.3).hex(),
			'list.errorForeground': scheme.mirage.common.error.hex(),
			'tree.indentGuidesStroke': scheme.mirage.editor.indentGuide.active.hex(),

			'listFilterWidget.background': scheme.mirage.ui.panel.bg.hex(),
			'listFilterWidget.outline': scheme.mirage.common.accent.hex(),
			'listFilterWidget.noMatchesOutline': scheme.mirage.common.error.hex(),
			'list.filterMatchBackground': scheme.mirage.editor.findMatch.inactive.darken(0.3).hex(),
			'list.filterMatchBorder': scheme.mirage.editor.findMatch.inactive.hex(),

			// ACTIVITY BAR
			'activityBar.background': scheme.mirage.ui.bg.hex(),
			'activityBar.foreground': scheme.light.ui.fg.hex(),
			'activityBar.inactiveForeground': scheme.mirage.ui.fg.hex(),
			'activityBar.border': scheme.mirage.ui.line.hex(),
			'activityBar.activeBorder': scheme.mirage.common.accent.alpha(0.7).hex(),
			'activityBarBadge.background': scheme.dark.common.accent.hex(),
			'activityBarBadge.foreground': scheme.dark.ui.bg.hex(),

			// SIDE BAR
			'sideBar.background': scheme.mirage.ui.line.hex(),
			'sideBar.border': scheme.mirage.ui.line.hex(),
			'sideBarTitle.foreground': scheme.light.ui.fg.hex(),
			'sideBarSectionHeader.background': scheme.mirage.ui.panel.bg.hex(),
			'sideBarSectionHeader.foreground': scheme.light.ui.fg.hex(),
			'sideBarSectionHeader.border': scheme.mirage.ui.line.hex(),

			// MINIMAP
			'minimap.background': scheme.dark.editor.line.alpha(0.6).hex(),
			'minimap.selectionHighlight': scheme.dark.editor.selection.active.hex(),
			'minimap.errorHighlight': scheme.dark.common.error.hex(),
			'minimap.findMatchHighlight': scheme.dark.editor.findMatch.active.hex(),
			'minimapSlider.background': scheme.dark.editor.indentGuide.active.alpha(0.4).hex(),
			'minimapSlider.hoverBackground': scheme.dark.editor.indentGuide.active.hex(),
			'minimapSlider.activeBackground': scheme.dark.editor.indentGuide.normal.hex(),
			'minimapGutter.addedBackground': scheme.dark.vcs.added.alpha(0.6).hex(),
			'minimapGutter.modifiedBackground': scheme.dark.vcs.modified.alpha(0.6).hex(),
			'minimapGutter.deletedBackground': scheme.dark.vcs.removed.alpha(0.6).hex(),

			// EDITOR GROUPS & TABS
			'editorGroup.border': scheme.dark.ui.fg.alpha(0.5).hex(),
			'editorGroup.dropBackground': scheme.mirage.editor.selection.inactive.hex(),
			'editorGroupHeader.noTabsBackground': scheme.mirage.ui.line.hex(),
			'editorGroupHeader.tabsBackground': scheme.mirage.ui.line.hex(),
			'editorGroupHeader.tabsBorder': scheme.mirage.ui.line.hex(),
			'tab.activeBackground': scheme.mirage.editor.bg.hex(),
			'tab.activeForeground': scheme.mirage.editor.fg.hex(),
			'tab.border': scheme.mirage.ui.line.hex(),
			'tab.activeBorder': scheme.mirage.editor.bg.hex(),
			'tab.activeBorderTop': scheme.dark.common.accent.hex(),
			'tab.unfocusedActiveBorder': undefined,
			'tab.unfocusedActiveBorderTop': scheme.mirage.ui.fg.hex(),
			'tab.inactiveBackground': scheme.mirage.ui.bg.alpha(0.5).hex(),
			'tab.inactiveForeground': scheme.light.ui.fg.hex(),
			'tab.unfocusedActiveForeground': scheme.mirage.ui.fg.hex(),
			'tab.unfocusedInactiveForeground': scheme.mirage.ui.fg.hex(),

			// EDITOR
			'editor.background': scheme.dark.editor.bg.hex(),
			'editor.foreground': scheme.dark.editor.fg.hex(),
			'editorLineNumber.foreground': scheme.dark.editor.gutter.normal.hex(),
			'editorLineNumber.activeForeground': scheme.dark.editor.fg.alpha(0.9).hex(),
			'editorCursor.foreground': scheme.dark.common.accent.hex(),

			// EDITOR SELECTIONS
			'editor.inactiveSelectionBackground': scheme.dark.editor.selection.inactive.hex(),
			'editor.selectionBackground': scheme.dark.editor.selection.active.hex(),
			'editor.selectionHighlightBackground': scheme.dark.vcs.added.alpha(0.15).hex(),
			'editor.selectionHighlightBorder': scheme.dark.vcs.added.alpha(0).hex(),
			'editor.wordHighlightBackground': scheme.dark.vcs.modified.alpha(0.08).hex(),
			'editor.wordHighlightStrongBackground': scheme.dark.vcs.added.alpha(0.08).hex(),
			'editor.wordHighlightBorder': scheme.dark.vcs.modified.alpha(0.5).hex(),
			'editor.wordHighlightStrongBorder': scheme.dark.vcs.added.alpha(0.5).hex(),

			// EDITOR SEARCH
			'editor.findMatchBackground': scheme.mirage.editor.findMatch.active.hex(),
			'editor.findMatchBorder': scheme.mirage.editor.findMatch.active.hex(),
			'editor.findMatchHighlightBackground': scheme.mirage.editor.findMatch.inactive.hex(),
			'editor.findMatchHighlightBorder': scheme.mirage.editor.findMatch.inactive.darken(0.3).hex(),
			'editor.findRangeHighlightBackground': scheme.mirage.editor.findMatch.inactive.alpha(0.25).hex(),
			// 'editor.findRangeHighlightBorder': scheme.editor.findMatch.inactive.forceAlpha(0).hex(),
			'editor.rangeHighlightBackground': scheme.mirage.editor.findMatch.active.alpha(0.2).hex(),

			// 'editor.hoverHighlightBackground': '',

			'editor.lineHighlightBackground': scheme.mirage.editor.line.hex(),
			// 'editor.lineHighlightBorder': '',

			'editorLink.activeForeground': scheme.mirage.common.accent.hex(),

			'editorWhitespace.foreground': scheme.dark.editor.indentGuide.active.alpha(0.6).hex(),

			'editorIndentGuide.background': scheme.dark.editor.indentGuide.normal.hex(),
			'editorIndentGuide.activeBackground': scheme.dark.editor.indentGuide.active.hex(),

			'editorRuler.foreground': scheme.mirage.editor.indentGuide.normal.hex(),
			'editorCodeLens.foreground': scheme.mirage.syntax.comment.hex(),

			'editorBracketMatch.background': scheme.mirage.editor.gutter.normal.alpha(0.3).hex(),
			'editorBracketMatch.border': scheme.mirage.editor.gutter.active.alpha(0.3).hex(),

			// SNIPPETS
			'editor.snippetTabstopHighlightBackground': scheme.mirage.vcs.added.alpha(0.2).hex(),

			// OVERVIEW RULER
			'editorOverviewRuler.border': scheme.mirage.ui.line.hex(),
			'editorOverviewRuler.modifiedForeground': scheme.dark.vcs.modified.alpha(0.8).hex(),
			'editorOverviewRuler.addedForeground': scheme.dark.vcs.added.alpha(0.8).hex(),
			'editorOverviewRuler.deletedForeground': scheme.dark.vcs.removed.alpha(0.8).hex(),
			'editorOverviewRuler.errorForeground': scheme.dark.common.error.hex(),
			'editorOverviewRuler.warningForeground': scheme.dark.common.accent.hex(),
			'editorOverviewRuler.bracketMatchForeground': scheme.dark.editor.gutter.normal.alpha(0.7).hex(),
			'editorOverviewRuler.wordHighlightForeground': scheme.dark.vcs.modified.alpha(0.4).hex(),
			'editorOverviewRuler.wordHighlightStrongForeground': scheme.dark.vcs.added.alpha(0.4).hex(),
			'editorOverviewRuler.findMatchForeground': scheme.dark.editor.findMatch.active.hex(),

			// ERRORS AND WARNINGS
			'editorError.foreground': scheme.dark.common.error.hex(),
			'editorWarning.foreground': scheme.dark.common.accent.hex(),

			// GUTTER
			'editorGutter.modifiedBackground': scheme.dark.vcs.modified.alpha(0.8).hex(),
			'editorGutter.addedBackground': scheme.dark.vcs.added.alpha(0.8).hex(),
			'editorGutter.deletedBackground': scheme.dark.vcs.removed.alpha(0.8).hex(),

			// DIFF EDITOR
			'diffEditor.insertedTextBackground': scheme.dark.vcs.added.alpha(0.12).hex(),
			'diffEditor.removedTextBackground': scheme.dark.vcs.removed.alpha(0.12).hex(),
			'diffEditor.diagonalFill': scheme.dark.ui.line.hex(),

			// EDITOR WIDGET
			'editorWidget.background': scheme.mirage.ui.bg.hex(),
			'editorWidget.border': scheme.mirage.ui.line.hex(),
			'editorHoverWidget.background': scheme.mirage.ui.bg.hex(),
			'editorHoverWidget.border': scheme.mirage.ui.line.hex(),
			'editorSuggestWidget.background': scheme.mirage.ui.panel.bg.hex(),
			'editorSuggestWidget.border': scheme.mirage.ui.line.hex(),
			'editorSuggestWidget.highlightForeground': scheme.mirage.common.accent.hex(),
			'editorSuggestWidget.selectedBackground': scheme.mirage.ui.selection.active.hex(),

			// DEBUG EXCEPTION
			'debugExceptionWidget.border': scheme.dark.ui.line.hex(),
			'debugExceptionWidget.background': scheme.dark.ui.panel.bg.hex(),

			// EDITOR MARKER
			'editorMarkerNavigation.background': scheme.dark.ui.panel.bg.hex(),

			// PEEK VIEW
			'peekView.border': scheme.dark.ui.selection.active.hex(),

			'peekViewTitle.background': scheme.dark.ui.selection.active.hex(),
			'peekViewTitleDescription.foreground': scheme.dark.ui.fg.hex(),
			'peekViewTitleLabel.foreground': scheme.dark.editor.fg.hex(),

			'peekViewEditor.background': scheme.dark.ui.bg.hex(),
			'peekViewEditor.matchHighlightBackground': scheme.dark.editor.findMatch.inactive.hex(), // ??
			'peekViewEditor.matchHighlightBorder': scheme.dark.editor.findMatch.inactive.darken(0.3).hex(), // ??

			'peekViewResult.background': scheme.dark.ui.bg.hex(),
			'peekViewResult.fileForeground': scheme.dark.editor.fg.hex(),
			'peekViewResult.lineForeground': scheme.dark.ui.fg.hex(),
			'peekViewResult.matchHighlightBackground': scheme.dark.editor.findMatch.inactive.hex(), // ???
			// 'peekViewResult.matchHighlightBorder': scheme.editor.findMatch.inactive.darken(.3).hex(), // doesn't exist
			'peekViewResult.selectionBackground': scheme.dark.ui.selection.active.hex(), // ???
			// 'peekViewResult.selectionForeground': scheme.editor.fg.hex(), // ???

			// Merge Conflicts
			// 'merge.currentHeaderBackground': '?',
			// 'merge.currentContentBackground': '?',
			// 'merge.incomingHeaderBackground': '?',
			// 'merge.incomingContentBackground': '?',
			// 'merge.border': '?',
			// 'merge.commonContentBackground': '?',
			// 'merge.commonHeaderBackground': '?',
			// 'editorOverviewRuler.currentContentForeground': '?',
			// 'editorOverviewRuler.incomingContentForeground': '?',
			// 'editorOverviewRuler.commonContentForeground': '?',

			// Panel
			'panel.background': scheme.dark.editor.line.hex(),
			'panel.border': scheme.mirage.ui.line.hex(),
			'panelTitle.activeBorder': scheme.dark.common.accent.hex(),
			'panelTitle.activeForeground': scheme.mirage.editor.fg.hex(),
			'panelTitle.inactiveForeground': scheme.mirage.ui.fg.hex(),

			// STATUS BAR
			'statusBar.background': scheme.mirage.ui.bg.hex(),
			'statusBar.foreground': scheme.mirage.ui.fg.hex(),
			'statusBar.border': scheme.mirage.ui.line.hex(),
			'statusBar.debuggingBackground': scheme.mirage.syntax.operator.hex(),
			'statusBar.debuggingForeground': scheme.mirage.editor.bg.hex(),
			'statusBar.noFolderBackground': scheme.mirage.ui.panel.bg.hex(),
			'statusBarItem.activeBackground': scheme.mirage.ui.fg.alpha(0.2).hex(),
			'statusBarItem.hoverBackground': scheme.mirage.ui.fg.alpha(0.2).hex(),
			'statusBarItem.prominentBackground': scheme.mirage.ui.line.hex(),
			'statusBarItem.prominentHoverBackground': '#00000030',
			'statusBarItem.remoteBackground': scheme.dark.common.accent.hex(),
			'statusBarItem.remoteForeground': scheme.dark.editor.bg.hex(),

			// TITLE BAR
			'titleBar.activeBackground': scheme.mirage.ui.line.hex(),
			'titleBar.activeForeground': scheme.light.ui.fg.hex(),
			'titleBar.inactiveBackground': scheme.mirage.ui.line.hex(),
			'titleBar.inactiveForeground': scheme.mirage.ui.fg.hex(),
			'titleBar.border': scheme.mirage.ui.line.hex(),

			// MENU BAR - ain't needed to adjust
			// 'menubar.selectionForeground': '?',
			// 'menubar.selectionBackground': '?',
			// 'menubar.selectionBorder': '?',
			// 'menu.foreground': '?',
			// 'menu.background': '?',
			// 'menu.selectionForeground': '?',
			// 'menu.selectionBackground': '?',
			// 'menu.selectionBorder': '?',

			// NOTIFICATION - ain't needed to adjust
			// 'notificationCenter.border': '?',
			// 'notificationCenterHeader.foreground': '?',
			// 'notificationCenterHeader.background': '?',
			// 'notifications.foreground': '?',
			// 'notifications.background': '?',
			// 'notifications.border': '?',
			// 'notificationLink.foreground': '?',

			// EXTENSIONS
			'extensionButton.prominentForeground': scheme.mirage.editor.bg.hex(),
			'extensionButton.prominentBackground': scheme.mirage.common.accent.hex(),
			'extensionButton.prominentHoverBackground': scheme.dark.common.accent.darken(0.1).hex(),

			// QUICK PICKER
			'pickerGroup.border': scheme.mirage.ui.line.hex(),
			'pickerGroup.foreground': scheme.mirage.ui.fg.alpha(0.5).hex(),

			// DEBUG
			'debugToolBar.background': scheme.mirage.ui.panel.bg.hex(),
			'debugIcon.breakpointForeground': scheme.dark.common.error.hex(),
			'debugIcon.breakpointDisabledForeground': scheme.dark.common.error.alpha(0.5).hex(),
			'debugConsoleInputIcon.foreground': scheme.mirage.common.accent.hex(),
			// 'debugToolBar.border': '',

			// WELCOME PAGE
			'welcomePage.tileBackground': scheme.dark.ui.selection.active.hex(),
			'welcomePage.tileShadow': scheme.dark.ui.panel.shadow.hex(),
			'welcomePage.progress.background': scheme.dark.editor.line.hex(),
			'walkThrough.embeddedEditorBackground': scheme.mirage.ui.panel.bg.hex(),

			// GIT
			'gitDecoration.modifiedResourceForeground': scheme.mirage.vcs.modified.alpha(0.8).hex(),
			'gitDecoration.deletedResourceForeground': scheme.mirage.vcs.removed.alpha(0.8).hex(),
			'gitDecoration.untrackedResourceForeground': scheme.mirage.vcs.added.alpha(0.8).hex(),
			'gitDecoration.ignoredResourceForeground': scheme.mirage.ui.fg.alpha(0.6).hex(),
			'gitDecoration.conflictingResourceForeground': '',
			'gitDecoration.submoduleResourceForeground': scheme.mirage.syntax.constant.alpha(0.8).hex(),

			// Settings
			'settings.headerForeground': scheme.dark.editor.fg.hex(),
			'settings.modifiedItemIndicator': scheme.dark.vcs.modified.hex(),

			// KEYBINDING
			'keybindingLabel.background': scheme.mirage.ui.fg.alpha(0.1).hex(),
			'keybindingLabel.foreground': scheme.mirage.editor.fg.hex(),
			'keybindingLabel.border': scheme.mirage.editor.fg.alpha(0.1).hex(),
			'keybindingLabel.bottomBorder': scheme.mirage.editor.fg.alpha(0.1).hex(),

			// TERMINAL
			'terminal.background': scheme.dark.editor.line.hex(),
			'terminal.foreground': scheme.dark.editor.fg.hex(),
			'terminal.ansiBlack': terminalColors['dark'].black,
			'terminal.ansiRed': scheme.dark.syntax.markup.darken(0.1).hex(),
			'terminal.ansiGreen': scheme.dark.vcs.added.hex(),
			'terminal.ansiYellow': scheme.dark.syntax.func.darken(0.1).hex(),
			'terminal.ansiBlue': scheme.dark.syntax.entity.darken(0.1).hex(),
			'terminal.ansiMagenta': scheme.dark.syntax.constant.darken(0.1).hex(),
			'terminal.ansiCyan': scheme.dark.syntax.regexp.darken(0.1).hex(),
			'terminal.ansiWhite': terminalColors['dark'].white,
			'terminal.ansiBrightBlack': terminalColors['dark'].brightBlack,
			'terminal.ansiBrightRed': scheme.dark.syntax.markup.hex(),
			'terminal.ansiBrightGreen': scheme.dark.syntax.string.hex(),
			'terminal.ansiBrightYellow': scheme.dark.syntax.func.hex(),
			'terminal.ansiBrightBlue': scheme.dark.syntax.entity.hex(),
			'terminal.ansiBrightMagenta': scheme.dark.syntax.constant.hex(),
			'terminal.ansiBrightCyan': scheme.dark.syntax.regexp.hex(),
			'terminal.ansiBrightWhite': terminalColors['dark'].brightWhite
		},

		tokenColors: [
			{
				settings: {
					background: scheme.dark.ui.bg.hex(),
					foreground: scheme.dark.editor.fg.hex()
				}
			},
			{
				name: 'Comment',
				scope: ['comment'],
				settings: {
					fontStyle: 'italic',
					foreground: scheme.dark.syntax.comment.hex()
				}
			},

			{
				name: 'String',
				scope: ['string', 'constant.other.symbol'], //+
				settings: {
					foreground: scheme.dark.syntax.string.hex()
				}
			},
			{
				name: 'Regular Expressions and Escape Characters',
				scope: ['string.regexp', 'constant.character', 'constant.other'],
				settings: {
					foreground: scheme.dark.syntax.regexp.hex()
				}
			},

			{
				name: 'Number',
				scope: ['constant.numeric'],
				settings: {
					foreground: scheme.dark.syntax.constant.hex()
				}
			},
			{
				name: 'Built-in constants',
				scope: ['constant.language'],
				settings: {
					foreground: scheme.dark.syntax.constant.hex()
				}
			},

			{
				name: 'Variable',
				scope: ['variable', 'variable.parameter.function-call'],
				settings: {
					foreground: scheme.dark.editor.fg.hex()
				}
			},
			{
				name: 'Member Variable',
				scope: ['variable.member'],
				settings: {
					foreground: scheme.dark.syntax.markup.hex()
				}
			},
			{
				name: 'Language variable',
				scope: ['variable.language'],
				settings: {
					fontStyle: 'italic',
					foreground: scheme.dark.syntax.tag.hex()
				}
			},

			// ------
			// Keywords
			{
				name: 'Storage',
				scope: ['storage'],
				settings: {
					foreground: scheme.dark.syntax.keyword.hex()
				}
			},
			{
				name: 'Keyword',
				scope: ['keyword'],
				settings: {
					foreground: scheme.dark.syntax.keyword.hex()
				}
			},

			// ------
			// Operators
			{
				name: 'Operators',
				scope: ['keyword.operator'],
				settings: {
					foreground: scheme.dark.syntax.operator.hex()
				}
			},

			// ------
			// Punctuation
			{
				name: 'Separators like ; or ,',
				scope: ['punctuation.separator', 'punctuation.terminator'],
				settings: {
					foreground: scheme.dark.editor.fg.alpha(0.7).hex()
				}
			},
			{
				name: 'Punctuation',
				scope: ['punctuation.section'],
				settings: {
					foreground: scheme.dark.editor.fg.hex()
				}
			},
			{
				name: 'Accessor',
				scope: ['punctuation.accessor'],
				settings: {
					foreground: scheme.dark.syntax.operator.hex()
				}
			},
			{
				name: 'JavaScript/TypeScript interpolation punctuation',
				scope: ['punctuation.definition.template-expression'],
				settings: {
					foreground: scheme.dark.syntax.keyword.hex()
				}
			},
			{
				name: 'Ruby interpolation punctuation',
				scope: ['punctuation.section.embedded'],
				settings: {
					foreground: scheme.dark.syntax.keyword.hex()
				}
			},
			{
				name: 'Interpolation text',
				scope: ['meta.embedded'],
				settings: {
					foreground: scheme.dark.editor.fg.hex()
				}
			},

			// ------
			// Types
			{
				name: 'Types fixes',
				scope: ['source.java storage.type', 'source.haskell storage.type', 'source.c storage.type'],
				settings: {
					foreground: scheme.dark.syntax.entity.hex()
				}
			},
			{
				name: 'Inherited class type',
				scope: ['entity.other.inherited-class'],
				settings: {
					foreground: scheme.dark.syntax.tag.hex()
				}
			},
			// Fixes
			{
				name: 'Lambda arrow',
				scope: ['storage.type.function'],
				settings: {
					foreground: scheme.dark.syntax.keyword.hex()
				}
			},
			{
				name: 'Java primitive variable types',
				scope: ['source.java storage.type.primitive'],
				settings: {
					foreground: scheme.dark.syntax.tag.hex()
				}
			},

			// ------
			// Function/method names in definitions
			// and calls
			{
				name: 'Function name',
				scope: ['entity.name.function'],
				settings: {
					foreground: scheme.dark.syntax.func.hex()
				}
			},
			{
				name: 'Function arguments',
				scope: ['variable.parameter', 'meta.parameter'],
				settings: {
					foreground: scheme.dark.syntax.constant.hex()
				}
			},
			{
				name: 'Function call',
				scope: ['variable.function', 'variable.annotation', 'meta.function-call.generic', 'support.function.go'],
				settings: {
					foreground: scheme.dark.syntax.func.hex()
				}
			},
			{
				name: 'Library function',
				scope: ['support.function', 'support.macro'],
				settings: {
					foreground: scheme.dark.syntax.markup.hex()
				}
			},

			// ------
			// Import/export paths
			{
				name: 'Imports and packages',
				scope: ['entity.name.import', 'entity.name.package'],
				settings: {
					foreground: scheme.dark.syntax.string.hex()
				}
			},
			{
				name: 'Entity name',
				scope: ['entity.name'],
				settings: {
					foreground: scheme.dark.syntax.entity.hex()
				}
			},

			// Tag and their attributes
			{
				name: 'Tag',
				scope: ['entity.name.tag', 'meta.tag.sgml'],
				settings: {
					foreground: scheme.dark.syntax.tag.hex()
				}
			},
			{
				name: 'JSX Component',
				scope: ['support.class.component'],
				settings: {
					foreground: scheme.dark.syntax.entity.hex()
				}
			},
			{
				name: 'Tag start/end',
				scope: ['punctuation.definition.tag.end', 'punctuation.definition.tag.begin', 'punctuation.definition.tag'],
				settings: {
					foreground: scheme.dark.syntax.tag.alpha(0.5).hex()
				}
			},
			{
				name: 'Tag attribute',
				scope: ['entity.other.attribute-name'],
				settings: {
					foreground: scheme.dark.syntax.func.hex()
				}
			},

			{
				name: 'Library constant',
				scope: ['support.constant'],
				settings: {
					fontStyle: 'italic',
					foreground: scheme.dark.syntax.operator.hex()
				}
			},
			{
				name: 'Library class/type',
				scope: ['support.type', 'support.class', 'source.go storage.type'],
				settings: {
					foreground: scheme.dark.syntax.tag.hex()
				}
			},
			{
				name: 'Decorators/annotation',
				scope: ['meta.decorator variable.other', 'meta.decorator punctuation.decorator', 'storage.type.annotation'],
				settings: {
					foreground: scheme.dark.syntax.special.hex()
				}
			},
			{
				name: 'Invalid',
				scope: ['invalid'],
				settings: {
					foreground: scheme.dark.common.error.hex()
				}
			},
			{
				name: 'diff.header',
				scope: ['meta.diff', 'meta.diff.header'],
				settings: {
					foreground: '#c594c5'
				}
			},
			{
				name: 'Ruby class methods',
				scope: ['source.ruby variable.other.readwrite'],
				settings: {
					foreground: scheme.dark.syntax.func.hex()
				}
			},
			{
				name: 'CSS tag names',
				scope: [
					'source.css entity.name.tag',
					'source.sass entity.name.tag',
					'source.scss entity.name.tag',
					'source.less entity.name.tag',
					'source.stylus entity.name.tag'
				],
				settings: {
					foreground: scheme.dark.syntax.entity.hex()
				}
			},
			{
				name: 'CSS browser prefix',
				scope: [
					'source.css support.type',
					'source.sass support.type',
					'source.scss support.type',
					'source.less support.type',
					'source.stylus support.type'
				],
				settings: {
					foreground: scheme.dark.syntax.comment.hex()
				}
			},
			{
				name: 'CSS Properties',
				scope: ['support.type.property-name'],
				settings: {
					fontStyle: 'normal',
					foreground: scheme.dark.syntax.tag.hex()
				}
			},
			{
				name: 'Search Results Numbers',
				scope: ['constant.numeric.line-number.find-in-files - match'],
				settings: {
					foreground: scheme.dark.syntax.comment.hex()
				}
			},
			{
				name: 'Search Results Match Numbers',
				scope: ['constant.numeric.line-number.match'],
				settings: {
					foreground: scheme.dark.syntax.keyword.hex()
				}
			},
			{
				name: 'Search Results Lines',
				scope: ['entity.name.filename.find-in-files'],
				settings: {
					foreground: scheme.dark.syntax.string.hex()
				}
			},
			{
				scope: ['message.error'],
				settings: {
					foreground: scheme.dark.common.error.hex()
				}
			},
			{
				name: 'Markup heading',
				scope: ['markup.heading', 'markup.heading entity.name'],
				settings: {
					fontStyle: 'bold',
					foreground: scheme.dark.syntax.string.hex()
				}
			},
			{
				name: 'Markup links',
				scope: ['markup.underline.link', 'string.other.link'],
				settings: {
					foreground: scheme.dark.syntax.tag.hex()
				}
			},
			{
				name: 'Markup Italic',
				scope: ['markup.italic'],
				settings: {
					fontStyle: 'italic',
					foreground: scheme.dark.syntax.markup.hex()
				}
			},
			{
				name: 'Markup Bold',
				scope: ['markup.bold'],
				settings: {
					fontStyle: 'bold',
					foreground: scheme.dark.syntax.markup.hex()
				}
			},
			{
				name: 'Markup Bold/italic',
				scope: ['markup.italic markup.bold', 'markup.bold markup.italic'],
				settings: {
					fontStyle: 'bold italic'
				}
			},
			{
				name: 'Markup Code',
				scope: ['markup.raw'],
				settings: {
					background: scheme.dark.editor.fg.alpha(0.02).hex()
				}
			},
			{
				name: 'Markup Code Inline',
				scope: ['markup.raw.inline'],
				settings: {
					background: scheme.dark.editor.fg.alpha(0.06).hex()
				}
			},
			{
				name: 'Markdown Separator',
				scope: ['meta.separator'],
				settings: {
					fontStyle: 'bold',
					background: scheme.dark.editor.fg.alpha(0.06).hex(),
					foreground: scheme.dark.syntax.comment.hex()
				}
			},
			{
				name: 'Markup Blockquote',
				scope: ['markup.quote'],
				settings: {
					foreground: scheme.dark.syntax.regexp.hex(),
					fontStyle: 'italic'
				}
			},
			{
				name: 'Markup List Bullet',
				scope: ['markup.list punctuation.definition.list.begin'],
				settings: {
					foreground: scheme.dark.syntax.func.hex()
				}
			},
			{
				name: 'Markup added',
				scope: ['markup.inserted'],
				settings: {
					foreground: scheme.dark.vcs.added.hex()
				}
			},
			{
				name: 'Markup modified',
				scope: ['markup.changed'],
				settings: {
					foreground: scheme.dark.vcs.modified.hex()
				}
			},
			{
				name: 'Markup removed',
				scope: ['markup.deleted'],
				settings: {
					foreground: scheme.dark.vcs.removed.hex()
				}
			},
			{
				name: 'Markup Strike',
				scope: ['markup.strike'],
				settings: {
					foreground: scheme.dark.syntax.special.hex()
				}
			},
			{
				name: 'Markup Table',
				scope: ['markup.table'],
				settings: {
					background: scheme.dark.editor.fg.alpha(0.06).hex(),
					foreground: scheme.dark.syntax.tag.hex()
				}
			},
			{
				name: 'Markup Raw Inline',
				scope: ['text.html.markdown markup.inline.raw'],
				settings: {
					foreground: scheme.dark.syntax.operator.hex()
				}
			},
			{
				name: 'Markdown - Line Break',
				scope: ['text.html.markdown meta.dummy.line-break'],
				settings: {
					background: scheme.dark.syntax.comment.hex(),
					foreground: scheme.dark.syntax.comment.hex()
				}
			},
			{
				name: 'Markdown - Raw Block Fenced',
				scope: ['punctuation.definition.markdown'],
				settings: {
					background: scheme.dark.editor.fg.hex(),
					foreground: scheme.dark.syntax.comment.hex()
				}
			}
		],

		semanticHighlighting: true,
		semanticTokenColors: {
			'parameter.label': scheme.dark.editor.fg.hex()
		}
	}
}
