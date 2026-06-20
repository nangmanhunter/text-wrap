import * as vscode from 'vscode';
import { textWrapHandler} from './functions/textWrapHandler';

export function activate(context: vscode.ExtensionContext) {

	const disposables: vscode.Disposable[] = [
        
        vscode.commands.registerCommand('text-wrap-quotes-double', textWrapHandler('"', '"')),
        vscode.commands.registerCommand('text-wrap-quotes-double-comma', textWrapHandler('"', '",')),
        vscode.commands.registerCommand('text-wrap-quotes-single', textWrapHandler("'", "'")),
        vscode.commands.registerCommand('text-wrap-backtick', textWrapHandler('`', '`')),
        vscode.commands.registerCommand('text-wrap-brackets-round', textWrapHandler('(', ')')),
        vscode.commands.registerCommand('text-wrap-brackets-square', textWrapHandler('[', ']')),
        vscode.commands.registerCommand('text-wrap-brackets-curly', textWrapHandler('{', '}')),
        vscode.commands.registerCommand('text-wrap-brackets-angle', textWrapHandler('<', '>')),


		
		vscode.commands.registerCommand('text-wrap-powershell-newitem-markdown', textWrapHandler('ni ', '.md')),
        
    ];


	context.subscriptions.push(...disposables);
}

export function deactivate() {}