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