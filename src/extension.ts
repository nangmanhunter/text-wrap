import * as vscode from 'vscode';
import { textWrapHandler} from './functions/textWrapHandler';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('text-wrap-quotes-double', textWrapHandler('"','"'));

    context.subscriptions.push(disposable);
}

export function deactivate() {}