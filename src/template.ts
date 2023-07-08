import * as ayu from 'ayu'
import midas from './colors'

const BLACK = '#000000'
const WHITE = '#ffffff'
const TRNSP = '#ffffff00'

const terminalColors = {
	black: midas.ui.bg.darker.hex(),
	white: midas.ui.fg.light.hex(),
	brightBlack: midas.ui.fg.dark.hex(),
	brightWhite: WHITE,
}

export default () => {
	return {
		type: 'dark',
		colors: {
			// Colour reference https://code.visualstudio.com/docs/getstarted/theme-color-reference

			// CONTRAST COLOURS
			// --

			// BASE COLOURS
			'focusBorder': midas.accent.normal.alpha(0.6).hex(),
			'foreground': midas.ui.fg.normal.hex(),
			'disabledForeground': midas.ui.fg.dark.hex(),
			// 'widget.border': ,
			'widget.shadow': midas.ui.shadow.hex(),
			'selection.background': midas.item.selection.active.hex(),
			'descriptionForeground': midas.ui.fg.dark.hex(),
			'errorForeground': midas.error.hex(),
			'icon.foreground': midas.ui.fg.normal.hex(),
			// 'sash.hoverBorder': ,

			// WINDOW BORDER
			// NOTE: Seem not working when debugging
			// 'window.activeBorder': ,
			// 'window.inactiveBorder': ,

			// TEXT COLOURS
			// Affect extension page too
			'textBlockQuote.background': midas.ui.bg.dark.hex(),
			'textBlockQuote.border': midas.ui.secondary.hex(),
			'textCodeBlock.background': midas.ui.bg.dark.hex(), // ?
			'textLink.foreground': midas.accent.normal.hex(),
			'textLink.activeForeground': midas.accent.light.hex(),
			'textPreformat.foreground': midas.ui.fg.normal.hex(), // ?
			'textSeparator.foreground': midas.ui.fg.dark.hex(), // ?

			// BUTTON CONTROL
			'button.background': midas.accent.normal.hex(),
			'button.foreground': midas.ui.bg.darker.hex(),
			// 'button.border': ,
			// 'button.separator': ,
			'button.hoverBackground': midas.accent.dark.hex(),
			'button.secondaryBackground': midas.ui.handle.alpha(0.4).hex(),
			'button.secondaryForeground': midas.ui.fg.light.hex(),
			'button.secondaryHoverBackground': midas.ui.fg.dark.alpha(0.5).hex(),
			'checkbox.background': midas.ui.bg.darker.hex(),
			'checkbox.foreground': midas.ui.fg.dark.hex(),
			'checkbox.border': midas.ui.bg.lighter.hex(),
			'checkbox.selectBackground': midas.accent.normal.alpha(0.3).hex(),
			'checkbox.selectBorder': midas.accent.normal.alpha(0.2).hex(),

			// DROPDOWN CONTROL
			'dropdown.background': midas.ui.bg.lighter.hex(),
			'dropdown.listBackground': midas.ui.bg.light.hex(),
			'dropdown.foreground': midas.ui.fg.normal.hex(),
			'dropdown.border': midas.ui.line.normal.hex(),

			// INPUT CONTROL
			'input.background': midas.ui.bg.darker.hex(),
			'input.foreground': midas.editor.fg.hex(),
			'input.border': midas.ui.bg.lighter.hex(),
			'input.placeholderForeground': midas.ui.fg.dark.alpha(0.5).hex(),
			'inputOption.activeBackground': midas.accent.normal.alpha(0.2).hex(),
			'inputOption.activeForeground': midas.accent.normal.hex(),
			'inputOption.activeBorder': midas.accent.normal.alpha(0.3).hex(),
			'inputOption.hoverBackground': midas.ui.bg.lighter.hex(),
			'inputValidation.errorBackground': midas.ui.bg.lighter.hex(),
			'inputValidation.errorBorder': midas.error.hex(),
			// 'inputValidation.errorForeground': midas.ui.fg.normal.hex(),
			'inputValidation.infoBackground': midas.ui.bg.lighter.hex(),
			'inputValidation.infoBorder': midas.info.hex(),
			// 'inputValidation.infoForeground': midas.ui.fg.normal.hex(),
			'inputValidation.warningBackground': midas.ui.bg.lighter.hex(),
			'inputValidation.warningBorder': midas.syntax.func.hex(),
			// 'inputValidation.warningForeground': midas.ui.fg.normal.hex(),

			// SCROLLBAR CONTROL
			'scrollbar.shadow': BLACK,
			'scrollbarSlider.background': midas.ui.handle.alpha(0.3).hex(),
			'scrollbarSlider.hoverBackground': midas.ui.handle.alpha(0.32).hex(),
			'scrollbarSlider.activeBackground': midas.ui.handle.alpha(0.4).hex(),

			// BADGE
			'badge.background': midas.accent.normal.hex(),
			'badge.foreground': BLACK,

			// PROGRESS BAR
			'progressBar.background': midas.accent.normal.hex(), // ?

			// LISTS AND TREES
			'list.activeSelectionBackground': midas.item.selection.active.hex(),
			'list.activeSelectionForeground': midas.ui.fg.light.hex(),
			// 'list.activeSelectionIconForeground': midas.ui.fg.light.hex(),
			'list.dropBackground': midas.item.selection.inactive.hex(),
			'list.focusBackground': midas.item.focus.active.hex(),
			'list.focusForeground': midas.ui.fg.light.hex(),
			'list.focusHighlightForeground': midas.accent.light.hex(),
			'list.focusOutline': midas.accent.normal.alpha(0.3).hex(),
			'list.highlightForeground': midas.accent.light.hex(),
			'list.deemphasizedForeground': midas.error.hex(),
			'list.hoverBackground': midas.ui.bg.lighter.hex(),
			'list.hoverForeground': midas.ui.fg.light.hex(),
			'list.inactiveSelectionBackground': midas.item.selection.inactive.hex(),
			'list.inactiveSelectionForeground': midas.ui.fg.normal.hex(),
			'list.invalidItemForeground': midas.ui.fg.dark.alpha(0.3).hex(),
			'list.errorForeground': midas.error.hex(),
			'list.warningForeground': midas.warning.hex(),
			'listFilterWidget.background': midas.ui.bg.light.hex(),
			'listFilterWidget.outline': midas.accent.light.hex(),
			'listFilterWidget.noMatchesOutline': ayu.mirage.common.error.hex(),
			'list.filterMatchBackground': midas.ui.findMatch.inactive.darken(0.3).hex(),
			'list.filterMatchBorder': midas.ui.findMatch.inactive.hex(),
			'tree.indentGuidesStroke': midas.ui.line.normal.hex(),
			'tree.inactiveIndentGuidesStroke': midas.ui.line.dark.hex(),

			// ACTIVITY BAR
			'activityBar.background': midas.ui.bg.lighter.hex(),
			'activityBar.foreground': midas.accent.light.alpha(0.7).hex(),
			'activityBar.dropBorder': midas.ui.line.light.hex(),
			'activityBar.inactiveForeground': midas.ui.fg.dark.hex(),
			// 'activityBar.border': ,
			'activityBarBadge.background': midas.accent.normal.hex(),
			'activityBarBadge.foreground': BLACK,
			'activityBar.activeBackground': midas.ui.bg.light.hex(),
			'activityBar.activeBorder': midas.accent.light.alpha(0.8).hex(),
			'activityBar.activeFocusBorder': midas.accent.light.hex(),

			// PROFILES
			// 'profileBadge.background': , // ?
			// 'profileBadge.foreground': , // ?

			// SIDE BAR
			'sideBar.background': midas.ui.bg.dark.hex(),
			// 'sideBar.foreground': midas.ui.fg.normal.hex(),
			'sideBar.border': midas.editor.bg.hex(),
			// 'sideBar.dropBackground': midas.item.selection.inactive.hex(),
			'sideBarTitle.foreground': midas.ui.fg.normal.hex(),
			'sideBarSectionHeader.background': midas.ui.bg.light.hex(),
			'sideBarSectionHeader.foreground': midas.ui.fg.normal.hex(),
			'sideBarSectionHeader.border': midas.ui.border.hex(),

			// MINIMAP
			'minimap.findMatchHighlight': midas.editor.findMatch.active.hex(),
			'minimap.selectionHighlight': midas.editor.selection.active.hex(),
			'minimap.errorHighlight': midas.error.hex(),
			'minimap.warningHighlight': midas.warning.hex(),
			'minimap.background': midas.ui.bg.dark.alpha(0.75).hex(),
			'minimap.selectionOccurrenceHighlight': midas.editor.findMatch.active.hex(),
			// 'minimap.foregroundOpacity': ,
			'minimapSlider.background': midas.ui.handle.alpha(0.2).hex(),
			'minimapSlider.hoverBackground': midas.ui.handle.alpha(0.3).hex(),
			'minimapSlider.activeBackground': midas.ui.handle.alpha(0.4).hex(),
			'minimapGutter.addedBackground': midas.vcs.added.hex(),
			'minimapGutter.modifiedBackground': midas.vcs.modified.hex(),
			'minimapGutter.deletedBackground': midas.vcs.removed.hex(),

			// EDITOR GROUPS & TABS
			'editorGroup.border': midas.ui.line.normal.hex(),
			'editorGroup.dropBackground': midas.item.selection.inactive.hex(),
			'editorGroupHeader.noTabsBackground': midas.ui.bg.normal.hex(),
			'editorGroupHeader.tabsBackground': midas.ui.bg.normal.hex(),
			// 'editorGroupHeader.tabsBorder': ,
			// 'editorGroupHeader.border': ,
			// 'editorGroup.emptyBackground': ,
			'editorGroup.focusedEmptyBorder': midas.accent.normal.alpha(0.5).hex(),
			// 'editorGroup.dropIntoPromptBackground': ,
			// 'editorGroup.dropIntoPromptForeground': ,

			'tab.activeBackground': midas.ui.bg.darker.hex(),
			'tab.activeForeground': midas.ui.fg.light.hex(),
			// 'tab.activeBorder': midas.accent.dark.hex(),
			'tab.activeBorderTop': midas.accent.dark.hex(),
			'tab.unfocusedActiveBackground': midas.ui.bg.darker.hex(),
			'tab.unfocusedActiveForeground': midas.ui.fg.normal.hex(),
			// 'tab.unfocusedActiveBorder': midas.ui.fg.dark.hex(),
			'tab.unfocusedActiveBorderTop': midas.ui.fg.dark.hex(),
			'tab.inactiveBackground': midas.ui.bg.normal.hex(),
			'tab.inactiveForeground': midas.ui.fg.normal.hex(),
			// 'tab.unfocusedInactiveBackground': ,
			'tab.unfocusedInactiveForeground': midas.ui.fg.dark.hex(),
			'tab.border': midas.ui.bg.dark.hex(),
			'tab.lastPinnedBorder': midas.accent.dark.hex(),
			// 'tab.hoverBackground': ,
			// 'tab.hoverForeground': ,
			// 'tab.hoverBorder': ,
			// 'tab.unfocusedHoverBackground': ,
			// 'tab.unfocusedHoverForeground': ,
			// 'tab.unfocusedHoverBorder': ,
			'tab.activeModifiedBorder': midas.vcs.modified.alpha(0.8).hex(),
			// 'tab.inactiveModifiedBorder': ,
			// 'tab.unfocusedActiveModifiedBorder': ,
			// 'tab.unfocusedInactiveModifiedBorder': ,

			'editorPane.background': midas.ui.bg.dark.hex(),
			// 'sideBySideEditor.horizontalBorder': , // Seems not working when debugging
			// 'sideBySideEditor.verticalBorder': , // Seems not working when debugging

			// EDITOR COLORS
			'editor.background': midas.editor.bg.hex(),
			'editor.foreground': midas.editor.fg.hex(),
			'editorLineNumber.foreground': midas.editor.guide.alpha(0.8).hex(),
			'editorLineNumber.activeForeground': midas.editor.fg.hex(),
			'editorLineNumber.dimmedForeground': midas.editor.guide.alpha(0.4).hex(),
			'editorCursor.background': BLACK,
			'editorCursor.foreground': midas.accent.normal.hex(),

			'editor.selectionBackground': midas.editor.selection.active.hex(),
			// 'editor.selectionForeground': , // For high contrast themes only
			'editor.inactiveSelectionBackground': midas.editor.selection.inactive.hex(),
			'editor.selectionHighlightBackground': midas.vcs.added.alpha(0.15).hex(),
			// 'editor.selectionHighlightBorder': ,
			'editor.wordHighlightBackground': midas.vcs.modified.alpha(0.1).hex(),
			'editor.wordHighlightBorder': midas.vcs.modified.alpha(0.5).hex(),
			'editor.wordHighlightStrongBackground': midas.vcs.added.alpha(0.1).hex(),
			'editor.wordHighlightStrongBorder': midas.vcs.added.alpha(0.5).hex(),
			'editor.wordHighlightTextBackground': midas.vcs.added.alpha(0.1).hex(), // ?
			'editor.wordHighlightTextBorder': midas.vcs.added.alpha(0.5).hex(), // ?
			'editor.findMatchBackground': midas.ui.findMatch.active.hex(),
			'editor.findMatchHighlightBackground': midas.ui.findMatch.inactive.hex(),
			'editor.findRangeHighlightBackground': midas.ui.findMatch.inactive.alpha(0.15).hex(),
			// 'editor.findMatchBorder': ,
			// 'editor.findMatchHighlightBorder': ,
			// 'editor.findRangeHighlightBorder': ,

			'search.resultsInfoForeground': midas.ui.fg.dark.hex(),
			'searchEditor.findMatchBackground': midas.ui.findMatch.inactive.hex(),
			// 'searchEditor.findMatchBorder': ,
			// 'searchEditor.textInputBorder': ,
			'editor.hoverHighlightBackground': midas.editor.selection.inactive.hex(),
			'editor.lineHighlightBackground': midas.editor.guide.alpha(0.15).hex(),
			// 'editor.lineHighlightBorder': ,
			'editorUnicodeHighlight.background': midas.warning.alpha(0.15).hex(),
			'editorUnicodeHighlight.border': midas.warning.alpha(0.75).hex(),
			'editorLink.activeForeground': midas.accent.light.hex(),
			'editor.rangeHighlightBackground': midas.ui.findMatch.inactive.alpha(0.2).hex(),
			// 'editor.rangeHighlightBorder': ,
			'editor.symbolHighlightBackground': midas.ui.findMatch.inactive.hex(),
			// 'editor.symbolHighlightBorder': ,

			'editorWhitespace.foreground': midas.editor.guide.alpha(0.25).hex(),
			'editorIndentGuide.background': midas.editor.guide.alpha(0.25).hex(),
			'editorIndentGuide.activeBackground': midas.editor.guide.alpha(0.5).hex(),
			// 'editorInlayHint.background': ,
			// 'editorInlayHint.foreground': ,
			// 'editorInlayHint.typeForeground': ,
			// 'editorInlayHint.typeBackground': ,
			// 'editorInlayHint.parameterForeground': ,
			// 'editorInlayHint.parameterBackground': ,
			'editorRuler.foreground': midas.editor.guide.alpha(0.25).hex(),
			'editor.linkedEditingBackground': midas.vcs.removed.alpha(0.3).hex(),
			'editorCodeLens.foreground': midas.syntax.comment.alpha(0.45).hex(),
			'editorLightBulb.foreground': midas.accent.light.hex(),
			'editorLightBulbAutoFix.foreground': midas.accent.light.hex(),

			'editorBracketMatch.background': midas.editor.guide.alpha(0.3).hex(),
			'editorBracketMatch.border': midas.editor.guide.alpha(0.75).hex(),
			'editorBracketHighlight.foreground1': midas.brackets[0].hex(),
			'editorBracketHighlight.foreground2': midas.brackets[1].hex(),
			'editorBracketHighlight.foreground3': midas.brackets[2].hex(),
			// 'editorBracketHighlight.unexpectedBracket': midas.error.hex(), // not working when debugging
			'editor.foldBackground': midas.syntax.regexp.alpha(0.1).hex(),

			// 'editorOverviewRuler.background': midas.ui.bg.dark.hex(),
			'editorOverviewRuler.border': TRNSP,
			'editorOverviewRuler.findMatchForeground': midas.editor.findMatch.active.hex(),
			'editorOverviewRuler.rangeHighlightForeground': midas.editor.findMatch.active.hex(),
			'editorOverviewRuler.selectionHighlightForeground': midas.editor.findMatch.active.hex(),
			'editorOverviewRuler.wordHighlightForeground': midas.vcs.modified.alpha(0.3).hex(),
			'editorOverviewRuler.wordHighlightStrongForeground': midas.vcs.added.alpha(0.3).hex(),
			'editorOverviewRuler.wordHighlightTextForeground': midas.vcs.added.alpha(0.3).hex(),
			'editorOverviewRuler.modifiedForeground': midas.vcs.modified.alpha(0.6).hex(),
			'editorOverviewRuler.addedForeground': midas.vcs.added.alpha(0.6).hex(),
			'editorOverviewRuler.deletedForeground': midas.vcs.removed.alpha(0.6).hex(),
			'editorOverviewRuler.errorForeground': midas.error.alpha(0.9).hex(),
			'editorOverviewRuler.warningForeground': midas.warning.alpha(0.9).hex(),
			'editorOverviewRuler.infoForeground': midas.info.alpha(0.9).hex(),
			'editorOverviewRuler.bracketMatchForeground': midas.syntax.comment.alpha(0.3).hex(),

			'editorError.foreground': midas.error.hex(),
			// 'editorError.background': ,
			// 'editorError.border': ,
			'editorWarning.foreground': midas.warning.hex(),
			// 'editorWarning.background': ,
			// 'editorWarning.border': ,
			'editorInfo.foreground': midas.info.hex(),
			// 'editorInfo.background': ,
			// 'editorInfo.border': ,
			// 'editorUnnecessaryCode.border': ,
			// 'editorUnnecessaryCode.opacity': ,

			// 'editorGutter.background': ,
			'editorGutter.modifiedBackground': midas.vcs.modified.alpha(0.8).hex(),
			'editorGutter.addedBackground': midas.vcs.added.alpha(0.8).hex(),
			'editorGutter.deletedBackground': midas.vcs.removed.alpha(0.8).hex(),
			// 'editorGutter.commentRangeForeground': , // ?
			// 'editorGutter.commentGlyphForeground': , // ?
			// 'editorGutter.commentUnresolvedGlyphForeground': , // ?
			// 'editorGutter.foldingControlForeground': ,

			// DIFF EDITOR COLORS
			'diffEditor.insertedTextBackground': midas.vcs.added.alpha(0.12).hex(),
			// 'diffEditor.insertedTextBorder': ,
			'diffEditor.removedTextBackground': midas.vcs.removed.alpha(0.12).hex(),
			// 'diffEditor.removedTextBorder': ,
			'diffEditor.border': midas.ui.line.normal.hex(),
			'diffEditor.diagonalFill': midas.ui.bg.normal.hex(),
			// 'diffEditor.insertedLineBackground': ,
			// 'diffEditor.removedLineBackground': ,
			// 'diffEditorGutter.insertedLineBackground': ,
			// 'diffEditorGutter.removedLineBackground': ,
			// 'diffEditorOverview.insertedForeground': ,
			// 'diffEditorOverview.removedForeground': ,
			// 'diffEditor.unchangedRegionBackground': ,

			// CHAT COLORS
			// 'chat.requestBackground': ,
			// 'chat.requestBorder': ,

			// INTERACTIVE EDITOR COLORS
			// 'interactiveEditor.border': ,
			// 'interactiveEditor.shadow': ,
			// 'interactiveEditor.regionHighlight': ,
			// 'interactiveEditorInput.border': ,
			// 'interactiveEditorInput.focusBorder': ,
			// 'interactiveEditorInput.placeholderForeground': ,
			// 'interactiveEditorInput.background': ,
			// 'interactiveEditorDiff.inserted': ,
			// 'interactiveEditorDiff.removed': ,

			// EDITOR WIDGET
			'editorWidget.foreground': midas.ui.fg.dark.hex(),
			'editorWidget.background': midas.ui.bg.lighter.hex(),
			'editorWidget.border': TRNSP,
			'editorWidget.resizeBorder': midas.ui.line.normal.hex(),
			'editorSuggestWidget.background': midas.ui.bg.light.hex(),
			'editorSuggestWidget.border': midas.ui.line.dark.hex(),
			'editorSuggestWidget.foreground': midas.editor.fg.hex(),
			'editorSuggestWidget.focusHighlightForeground': midas.accent.light.hex(),
			'editorSuggestWidget.highlightForeground': midas.accent.normal.hex(),
			'editorSuggestWidget.selectedBackground': midas.item.focus.hover.hex(),
			'editorSuggestWidget.selectedForeground': midas.ui.fg.light.hex(),
			'editorSuggestWidget.selectedIconBackground': midas.accent.light.hex(),
			'editorHoverWidget.background': midas.ui.bg.light.hex(),
			// 'editorHoverWidget.foreground': ,
			'editorHoverWidget.border': midas.ui.line.dark.hex(),
			'editorHoverWidget.highlightForeground': midas.ui.line.normal.hex(),
			'editorHoverWidget.statusBasBackground': midas.ui.line.normal.hex(),
			// 'editorGhostText.background': ,
			// 'editorGhostText.foreground': ,
			// 'editorGhostText.border': ,
			'editorStickyScroll.background': midas.ui.bg.darker.hex(),
			'editorStickyScrollHover.background': midas.ui.bg.normal.hex(),

			'debugExceptionWidget.background': midas.ui.bg.light.hex(),
			'debugExceptionWidget.border': midas.ui.bg.darker.hex(),
			'editorMarkerNavigation.background': midas.ui.bg.light.hex(),
			// 'editorMarkerNavigationError.background': ,
			// 'editorMarkerNavigationWarning.background': ,
			// 'editorMarkerNavigationInfo.background': ,
			'editorMarkerNavigationError.headerBackground': midas.error.alpha(0.15).hex(),
			'editorMarkerNavigationWarning.headerBackground': midas.warning.alpha(0.15).hex(),
			'editorMarkerNavigationInfo.headerBackground': midas.info.alpha(0.15).hex(),

			// PEEK VIEW COLORS
			'peekView.border': midas.accent.dark.hex(),
			'peekViewEditor.background': midas.editor.bg.hex(),
			// 'peekViewEditorGutter.background': ,
			'peekViewEditor.matchHighlightBackground': midas.editor.findMatch.inactive.hex(),
			'peekViewEditor.matchHighlightBorder': midas.editor.findMatch.inactive.alpha(0.5).hex(),
			'peekViewResult.background': midas.ui.bg.normal.hex(),
			'peekViewResult.fileForeground': midas.ui.fg.normal.hex(),
			'peekViewResult.lineForeground': midas.ui.fg.dark.hex(),
			'peekViewResult.matchHighlightBackground': midas.editor.findMatch.inactive.hex(),
			// 'peekViewResult.selectionBackground': ,
			'peekViewResult.selectionForeground': midas.ui.fg.light.hex(),
			'peekViewTitle.background': midas.ui.bg.light.hex(),
			'peekViewTitleDescription.foreground': midas.ui.fg.dark.hex(),
			'peekViewTitleLabel.foreground': midas.ui.fg.light.hex(),
			'peekViewEditorStickyScroll.background': midas.ui.bg.darker.hex(),

			// MERGE CONFLICTS COLORS
			// TODO
			// 'merge.currentHeaderBackground': ,
			// 'merge.currentContentBackground': ,
			// 'merge.incomingHeaderBackground': ,
			// 'merge.incomingContentBackground': ,
			// 'merge.border': ,
			// 'merge.commonContentBackground': ,
			// 'merge.commonHeaderBackground': ,
			// 'editorOverviewRuler.currentContentForeground': ,
			// 'editorOverviewRuler.incomingContentForeground': ,
			// 'editorOverviewRuler.commonContentForeground': ,

			// PANEL COLORS
			'panel.background': midas.ui.bg.dark.hex(),
			'panel.border': midas.ui.bg.normal.hex(),
			'panelTitle.activeBorder': midas.accent.normal.hex(),
			'panelTitle.activeForeground': midas.ui.fg.light.hex(),
			'panelTitle.inactiveForeground': midas.ui.fg.dark.hex(),

			// STATUS BAR
			'statusBar.background': midas.ui.bg.lighter.hex(),
			'statusBar.foreground': midas.ui.fg.dark.hex(),
			// 'statusBar.border': ,
			'statusBar.debuggingBackground': midas.syntax.constant.darken(0.5).hex(),
			'statusBar.debuggingForeground': BLACK,
			// 'statusBar.debuggingBorder': ,
			// 'statusBar.noFolderForeground': ,
			'statusBar.noFolderBackground': midas.ui.bg.lighter.hex(),
			// 'statusBar.noFolderBorder': ,
			'statusBarItem.activeBackground': midas.ui.fg.dark.alpha(0.2).hex(),
			'statusBarItem.hoverBackground': midas.ui.fg.dark.alpha(0.2).hex(),
			'statusBarItem.prominentBackground': midas.ui.bg.normal.hex(),
			'statusBarItem.prominentForeground': midas.ui.fg.normal.hex(),
			'statusBarItem.prominentHoverBackground': '#00000030',
			'statusBarItem.remoteBackground': midas.accent.normal.hex(),
			'statusBarItem.remoteForeground': ayu.dark.editor.bg.hex(),
			'statusBar.focusBorder': midas.accent.normal.alpha(0.6).hex(),

			// TITLE BAR
			'titleBar.activeBackground': midas.ui.bg.normal.hex(),
			'titleBar.activeForeground': midas.ui.fg.normal.hex(),
			'titleBar.inactiveBackground': midas.ui.bg.normal.hex(),
			'titleBar.inactiveForeground': midas.ui.fg.dark.hex(),
			// 'titleBar.border': ,

			// MENU BAR
			// NOTE: Depend on others entirely, don't need to be set

			// NOTIFICATION
			// NOTE: Depend on others entirely, don't need to be set

			// EXTENSIONS
			// NOTE: Have no effect when debugging?
			'extensionButton.prominentForeground': midas.ui.bg.lighter.hex(),
			'extensionButton.prominentBackground': midas.accent.light.hex(),
			'extensionButton.prominentHoverBackground': midas.accent.normal.darken(0.2).hex(),

			// QUICK PICKER
			'pickerGroup.border': midas.ui.bg.normal.hex(),
			'pickerGroup.foreground': midas.ui.fg.dark.alpha(0.5).hex(),

			// INTEGRATED TERMINAL COLORS
			'terminal.background': midas.ui.bg.darker.hex(),
			// 'terminal.border': ,
			'terminal.foreground': midas.editor.fg.hex(),
			'terminal.ansiBlack': terminalColors.black,
			'terminal.ansiRed': midas.syntax.markup.darken(0.1).hex(),
			'terminal.ansiGreen': midas.vcs.added.hex(),
			'terminal.ansiYellow': midas.syntax.func.darken(0.1).hex(),
			'terminal.ansiBlue': midas.syntax.entity.darken(0.1).hex(),
			'terminal.ansiMagenta': midas.syntax.constant.darken(0.1).hex(),
			'terminal.ansiCyan': midas.syntax.regexp.darken(0.1).hex(),
			'terminal.ansiWhite': terminalColors.white,
			'terminal.ansiBrightBlack': terminalColors.brightBlack,
			'terminal.ansiBrightRed': midas.syntax.markup.hex(),
			'terminal.ansiBrightGreen': midas.syntax.string.hex(),
			'terminal.ansiBrightYellow': midas.syntax.func.hex(),
			'terminal.ansiBrightBlue': midas.syntax.entity.hex(),
			'terminal.ansiBrightMagenta': midas.syntax.constant.hex(),
			'terminal.ansiBrightCyan': midas.syntax.regexp.hex(),
			'terminal.ansiBrightWhite': terminalColors.brightWhite,

			// DEBUG COLORS
			'debugToolBar.background': midas.ui.bg.light.hex(),
			'debugIcon.breakpointForeground': midas.error.hex(),
			'debugIcon.breakpointDisabledForeground': midas.error.alpha(0.5).hex(),
			'debugConsoleInputIcon.foreground': midas.accent.light.hex(),
			// 'debugToolBar.border': '',

			// WELCOME PAGE
			// 'welcomePage.background': ,
			'welcomePage.progress.background': midas.ui.bg.dark.hex(),
			'welcomePage.tileBackground': midas.ui.bg.light.hex(),
			'welcomePage.tileHoverBackground': midas.ui.bg.lighter.hex(),
			'welcomePage.tileBorder': midas.ui.line.normal.hex(),
			'walkthrough.embeddedEditorBackground': midas.ui.bg.light.hex(), // ?
			'walkthrough.stepTitle.foreground': midas.ui.fg.light.hex(),

			// GIT
			'gitDecoration.modifiedResourceForeground': midas.vcs.modified.alpha(0.8).hex(),
			'gitDecoration.deletedResourceForeground': midas.vcs.removed.alpha(0.8).hex(),
			'gitDecoration.untrackedResourceForeground': midas.vcs.added.alpha(0.8).hex(),
			'gitDecoration.ignoredResourceForeground': midas.ui.fg.dark.alpha(0.6).hex(),
			// 'gitDecoration.conflictingResourceForeground': ,
			'gitDecoration.submoduleResourceForeground': midas.syntax.constant.alpha(0.8).hex(),

			// SETTINGS EDITOR COLORS
			'settings.headerForeground': midas.editor.fg.hex(),
			'settings.modifiedItemIndicator': midas.vcs.modified.hex(),

			// BREADCRUMBS COLORS
			'breadcrumb.foreground': midas.ui.fg.dark.hex(),
			'breadcrumb.background': midas.ui.bg.darker.hex(),
			'breadcrumb.focusForeground': midas.ui.fg.normal.hex(),
			'breadcrumb.activeSelectionForeground': midas.ui.fg.light.hex(),
			'breadcrumbPicker.background': midas.ui.bg.normal.hex(),

			// SNIPPETS
			'editor.snippetTabstopHighlightBackground': midas.vcs.added.alpha(0.2).hex(),

			// KEYBINDING
			'keybindingLabel.background': midas.ui.fg.dark.alpha(0.1).hex(),
			'keybindingLabel.foreground': midas.ui.fg.light.hex(),
			'keybindingLabel.border': midas.ui.fg.light.alpha(0.1).hex(),
			'keybindingLabel.bottomBorder': midas.ui.fg.light.alpha(0.1).hex(),
		},

		tokenColors: [
			{
				settings: {
					background: midas.editor.bg.hex(),
					foreground: midas.editor.fg.hex(),
				},
			},
			{
				name: 'Comment',
				scope: ['comment'],
				settings: {
					fontStyle: 'italic',
					foreground: midas.syntax.comment.hex(),
				},
			},

			{
				name: 'String',
				scope: ['string', 'constant.other.symbol'], //+
				settings: {
					foreground: midas.syntax.string.hex(),
				},
			},
			{
				name: 'Regular Expressions and Escape Characters',
				scope: ['string.regexp', 'constant.character', 'constant.other'],
				settings: {
					foreground: midas.syntax.regexp.hex(),
				},
			},

			{
				name: 'Number',
				scope: ['constant.numeric'],
				settings: {
					foreground: midas.syntax.constant.hex(),
				},
			},
			{
				name: 'Built-in constants',
				scope: ['constant.language'],
				settings: {
					foreground: midas.syntax.constant.hex(),
				},
			},

			{
				name: 'Variable',
				scope: ['variable', 'variable.parameter.function-call'],
				settings: {
					foreground: midas.editor.fg.hex(),
				},
			},
			{
				name: 'Member Variable',
				scope: ['variable.member'],
				settings: {
					foreground: midas.syntax.markup.hex(),
				},
			},
			{
				name: 'Language variable',
				scope: ['variable.language'],
				settings: {
					fontStyle: 'italic',
					foreground: midas.syntax.tag.hex(),
				},
			},

			// ------
			// Keywords
			{
				name: 'Storage',
				scope: ['storage'],
				settings: {
					foreground: midas.syntax.keyword.hex(),
				},
			},
			{
				name: 'Keyword',
				scope: ['keyword'],
				settings: {
					foreground: midas.syntax.keyword.hex(),
				},
			},

			// ------
			// Operators
			{
				name: 'Operators',
				scope: ['keyword.operator'],
				settings: {
					foreground: midas.syntax.operator.hex(),
				},
			},

			// ------
			// Punctuation
			{
				name: 'Separators like ; or ,',
				scope: ['punctuation.separator', 'punctuation.terminator'],
				settings: {
					foreground: midas.editor.fg.alpha(0.7).hex(),
				},
			},
			{
				name: 'Punctuation',
				scope: ['punctuation.section'],
				settings: {
					foreground: midas.editor.fg.hex(),
				},
			},
			{
				name: 'Accessor',
				scope: ['punctuation.accessor'],
				settings: {
					foreground: midas.syntax.operator.hex(),
				},
			},
			{
				name: 'JavaScript/TypeScript interpolation punctuation',
				scope: ['punctuation.definition.template-expression'],
				settings: {
					foreground: midas.syntax.keyword.hex(),
				},
			},
			{
				name: 'Ruby interpolation punctuation',
				scope: ['punctuation.section.embedded'],
				settings: {
					foreground: midas.syntax.keyword.hex(),
				},
			},
			{
				name: 'Interpolation text',
				scope: ['meta.embedded'],
				settings: {
					foreground: midas.editor.fg.hex(),
				},
			},

			// ------
			// Types
			{
				name: 'Types fixes',
				scope: ['source.java storage.type', 'source.haskell storage.type', 'source.c storage.type'],
				settings: {
					foreground: midas.syntax.entity.hex(),
				},
			},
			{
				name: 'Inherited class type',
				scope: ['entity.other.inherited-class'],
				settings: {
					foreground: midas.syntax.tag.hex(),
				},
			},
			// Fixes
			{
				name: 'Lambda arrow',
				scope: ['storage.type.function'],
				settings: {
					foreground: midas.syntax.keyword.hex(),
				},
			},
			{
				name: 'Java primitive variable types',
				scope: ['source.java storage.type.primitive'],
				settings: {
					foreground: midas.syntax.tag.hex(),
				},
			},

			// ------
			// Function/method names in definitions
			// and calls
			{
				name: 'Function name',
				scope: ['entity.name.function'],
				settings: {
					foreground: midas.syntax.func.hex(),
				},
			},
			{
				name: 'Function arguments',
				scope: ['variable.parameter', 'meta.parameter'],
				settings: {
					foreground: midas.syntax.constant.hex(),
				},
			},
			{
				name: 'Function call',
				scope: ['variable.function', 'variable.annotation', 'meta.function-call.generic', 'support.function.go'],
				settings: {
					foreground: midas.syntax.func.hex(),
				},
			},
			{
				name: 'Library function',
				scope: ['support.function', 'support.macro'],
				settings: {
					foreground: midas.syntax.markup.hex(),
				},
			},

			// ------
			// Import/export paths
			{
				name: 'Imports and packages',
				scope: ['entity.name.import', 'entity.name.package'],
				settings: {
					foreground: midas.syntax.string.hex(),
				},
			},
			{
				name: 'Entity name',
				scope: ['entity.name'],
				settings: {
					foreground: midas.syntax.entity.hex(),
				},
			},

			// Tag and their attributes
			{
				name: 'Tag',
				scope: ['entity.name.tag', 'meta.tag.sgml'],
				settings: {
					foreground: midas.syntax.tag.hex(),
				},
			},
			{
				name: 'JSX Component',
				scope: ['support.class.component'],
				settings: {
					foreground: midas.syntax.entity.hex(),
				},
			},
			{
				name: 'Tag start/end',
				scope: ['punctuation.definition.tag.end', 'punctuation.definition.tag.begin', 'punctuation.definition.tag'],
				settings: {
					foreground: midas.syntax.tag.alpha(0.5).hex(),
				},
			},
			{
				name: 'Tag attribute',
				scope: ['entity.other.attribute-name'],
				settings: {
					foreground: midas.syntax.func.hex(),
				},
			},

			{
				name: 'Library constant',
				scope: ['support.constant'],
				settings: {
					fontStyle: 'italic',
					foreground: midas.syntax.operator.hex(),
				},
			},
			{
				name: 'Library class/type',
				scope: ['support.type', 'support.class', 'source.go storage.type'],
				settings: {
					foreground: midas.syntax.tag.hex(),
				},
			},
			{
				name: 'Decorators/annotation',
				scope: ['meta.decorator variable.other', 'meta.decorator punctuation.decorator', 'storage.type.annotation'],
				settings: {
					foreground: midas.syntax.special.hex(),
				},
			},
			{
				name: 'Invalid',
				scope: ['invalid'],
				settings: {
					foreground: midas.error.hex(),
				},
			},
			{
				name: 'diff.header',
				scope: ['meta.diff', 'meta.diff.header'],
				settings: {
					foreground: '#c594c5',
				},
			},
			{
				name: 'Ruby class methods',
				scope: ['source.ruby variable.other.readwrite'],
				settings: {
					foreground: midas.syntax.func.hex(),
				},
			},
			{
				name: 'CSS tag names',
				scope: [
					'source.css entity.name.tag',
					'source.sass entity.name.tag',
					'source.scss entity.name.tag',
					'source.less entity.name.tag',
					'source.stylus entity.name.tag',
				],
				settings: {
					foreground: midas.syntax.entity.hex(),
				},
			},
			{
				name: 'CSS browser prefix',
				scope: [
					'source.css support.type',
					'source.sass support.type',
					'source.scss support.type',
					'source.less support.type',
					'source.stylus support.type',
				],
				settings: {
					foreground: midas.syntax.comment.hex(),
				},
			},
			{
				name: 'CSS Properties',
				scope: ['support.type.property-name'],
				settings: {
					fontStyle: 'normal',
					foreground: midas.syntax.tag.hex(),
				},
			},
			{
				name: 'Search Results Numbers',
				scope: ['constant.numeric.line-number.find-in-files - match'],
				settings: {
					foreground: midas.syntax.comment.hex(),
				},
			},
			{
				name: 'Search Results Match Numbers',
				scope: ['constant.numeric.line-number.match'],
				settings: {
					foreground: midas.syntax.keyword.hex(),
				},
			},
			{
				name: 'Search Results Lines',
				scope: ['entity.name.filename.find-in-files'],
				settings: {
					foreground: midas.syntax.string.hex(),
				},
			},
			{
				scope: ['message.error'],
				settings: {
					foreground: midas.error.hex(),
				},
			},
			{
				name: 'Markup heading',
				scope: ['markup.heading', 'markup.heading entity.name'],
				settings: {
					fontStyle: 'bold',
					foreground: midas.syntax.string.hex(),
				},
			},
			{
				name: 'Markup links',
				scope: ['markup.underline.link', 'string.other.link'],
				settings: {
					foreground: midas.syntax.tag.hex(),
				},
			},
			{
				name: 'Markup Italic',
				scope: ['markup.italic'],
				settings: {
					fontStyle: 'italic',
					foreground: midas.syntax.markup.hex(),
				},
			},
			{
				name: 'Markup Bold',
				scope: ['markup.bold'],
				settings: {
					fontStyle: 'bold',
					foreground: midas.syntax.markup.hex(),
				},
			},
			{
				name: 'Markup Bold/italic',
				scope: ['markup.italic markup.bold', 'markup.bold markup.italic'],
				settings: {
					fontStyle: 'bold italic',
				},
			},
			{
				name: 'Markup Code',
				scope: ['markup.raw'],
				settings: {
					background: midas.editor.fg.alpha(0.02).hex(),
				},
			},
			{
				name: 'Markup Code Inline',
				scope: ['markup.raw.inline'],
				settings: {
					background: midas.editor.fg.alpha(0.06).hex(),
				},
			},
			{
				name: 'Markdown Separator',
				scope: ['meta.separator'],
				settings: {
					fontStyle: 'bold',
					background: midas.editor.fg.alpha(0.06).hex(),
					foreground: midas.syntax.comment.hex(),
				},
			},
			{
				name: 'Markup Blockquote',
				scope: ['markup.quote'],
				settings: {
					foreground: midas.syntax.regexp.hex(),
					fontStyle: 'italic',
				},
			},
			{
				name: 'Markup List Bullet',
				scope: ['markup.list punctuation.definition.list.begin'],
				settings: {
					foreground: midas.syntax.func.hex(),
				},
			},
			{
				name: 'Markup added',
				scope: ['markup.inserted'],
				settings: {
					foreground: midas.vcs.added.hex(),
				},
			},
			{
				name: 'Markup modified',
				scope: ['markup.changed'],
				settings: {
					foreground: midas.vcs.modified.hex(),
				},
			},
			{
				name: 'Markup removed',
				scope: ['markup.deleted'],
				settings: {
					foreground: midas.vcs.removed.hex(),
				},
			},
			{
				name: 'Markup Strike',
				scope: ['markup.strike'],
				settings: {
					foreground: midas.syntax.special.hex(),
				},
			},
			{
				name: 'Markup Table',
				scope: ['markup.table'],
				settings: {
					background: midas.editor.fg.alpha(0.06).hex(),
					foreground: midas.syntax.tag.hex(),
				},
			},
			{
				name: 'Markup Raw Inline',
				scope: ['text.html.markdown markup.inline.raw'],
				settings: {
					foreground: midas.syntax.operator.hex(),
				},
			},
			{
				name: 'Markdown - Line Break',
				scope: ['text.html.markdown meta.dummy.line-break'],
				settings: {
					background: midas.syntax.comment.hex(),
					foreground: midas.syntax.comment.hex(),
				},
			},
			{
				name: 'Markdown - Raw Block Fenced',
				scope: ['punctuation.definition.markdown'],
				settings: {
					background: midas.editor.fg.hex(),
					foreground: midas.syntax.comment.hex(),
				},
			},
		],

		semanticHighlighting: true,
		semanticTokenColors: {
			'parameter.label': midas.editor.fg.hex(),
		},
	}
}
