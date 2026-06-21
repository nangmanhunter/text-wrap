import * as vscode from 'vscode';
import { textWrapHandler } from './textWrapHandler';

export function textWrapInputHandler(isNotrailing: boolean = false) {
    return async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }


        const startChar = await vscode.window.showInputBox({
            prompt: '🔴 Enter the starting character(s).',
            placeHolder: '" \' ` ( [ { < ... etc',
            ignoreFocusOut: true
        });

        // 사용자가 ESC를 누르면 중단
        if (startChar === undefined) { return; }


        const endChar = await vscode.window.showInputBox({
            prompt: '🟠 Enter the ending character(s).',
            placeHolder: '" \' ` ) ] } > ", \', `, ), ], }, >, ... etc',
            ignoreFocusOut: true
        });

        if (endChar === undefined) { return; }




        let trailingChar: string | undefined = undefined;
        if (isNotrailing) {
            trailingChar = await vscode.window.showInputBox({
                prompt: '🟡 Enter the trailing character (applied to all except the last selection).',
                placeHolder: '" \' ` ) ] } > ... etc',
                ignoreFocusOut: true
            });
            if (trailingChar === undefined) { return; }
        }

        vscode.window.showInformationMessage(`[DEBUG] endChar: "${endChar}" | trailingChar: "${trailingChar}"`);


        textWrapHandler(startChar, endChar, trailingChar)();
    };
}