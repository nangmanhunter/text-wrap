/*
 * Copyright (C) 2026 🦉NangmanHunter
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import * as vscode from 'vscode';
import { textWrapHandler} from './functions/textWrapHandler';

export function activate(context: vscode.ExtensionContext) {

	const disposables: vscode.Disposable[] = [
        
        vscode.commands.registerCommand('text-wrap-quotes-double', textWrapHandler('"', '"')),
        vscode.commands.registerCommand('text-wrap-quotes-double-comma', textWrapHandler('"', '",')),
        vscode.commands.registerCommand('text-wrap-quotes-single', textWrapHandler("'", "'")),
        vscode.commands.registerCommand('text-wrap-quotes-single-comma', textWrapHandler("'", "',")),
        vscode.commands.registerCommand('text-wrap-backtick', textWrapHandler('`', '`')),
        vscode.commands.registerCommand('text-wrap-backtick-comma', textWrapHandler('`', '`,')),
        vscode.commands.registerCommand('text-wrap-brackets-round', textWrapHandler('(', ')')),
        vscode.commands.registerCommand('text-wrap-brackets-round-comma', textWrapHandler('(', '),')),
        vscode.commands.registerCommand('text-wrap-brackets-square', textWrapHandler('[', ']')),
        vscode.commands.registerCommand('text-wrap-brackets-square-comma', textWrapHandler('[', '],')),
        vscode.commands.registerCommand('text-wrap-brackets-curly', textWrapHandler('{', '}')),
        vscode.commands.registerCommand('text-wrap-brackets-curly-comma', textWrapHandler('{', '},')),
        vscode.commands.registerCommand('text-wrap-brackets-angle', textWrapHandler('<', '>')),
        vscode.commands.registerCommand('text-wrap-brackets-angle-comma', textWrapHandler('<', '>,')),
        
        
        vscode.commands.registerCommand('text-wrap-notrailing-quotes-double-comma', textWrapHandler('"', '",', '"')),
        vscode.commands.registerCommand('text-wrap-notrailing-quotes-single-comma', textWrapHandler("'", "',", "'")),
        vscode.commands.registerCommand('text-wrap-notrailing-backtick-comma', textWrapHandler('`', '`,', '`')),
        vscode.commands.registerCommand('text-wrap-notrailing-brackets-round-comma', textWrapHandler('(', '),', ')')),
        vscode.commands.registerCommand('text-wrap-notrailing-brackets-square-comma', textWrapHandler('[', '],', ']')),
        vscode.commands.registerCommand('text-wrap-notrailing-brackets-curly-comma', textWrapHandler('{', '},', '}')),
        vscode.commands.registerCommand('text-wrap-notrailing-brackets-angle-comma', textWrapHandler('<', '>,', '>')),


        vscode.commands.registerCommand('text-wrap-powershell-newitem-markdown', textWrapHandler('ni ', '.md')),
    ];


	context.subscriptions.push(...disposables);
}

export function deactivate() {}