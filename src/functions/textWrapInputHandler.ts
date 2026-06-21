import * as vscode from 'vscode';

export function textWrapInputHandler() {
    return async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }


        const startChar = await vscode.window.showInputBox({
            prompt: '1/2: Enter the starting character(s).',
            placeHolder: '" \' ` ( [ { < ... etc',
            ignoreFocusOut: true
        });

        // 사용자가 ESC를 누르면 중단
        if (startChar === undefined) { return; }


        const endChar = await vscode.window.showInputBox({
            prompt: '2/2: Enter the ending character(s).',
            placeHolder: '" \' ` ) ] } > ... etc',
            ignoreFocusOut: true
        });

        if (endChar === undefined) { return; }



        const selections = editor.selections;

        editor.edit(editBuilder => {
            selections.forEach(selection => {
                const selectedText = editor.document.getText(selection);
                const wrappedText = `${startChar}${selectedText}${endChar}`;
                editBuilder.replace(selection, wrappedText);
            });
        }).then(success => {
            if (!success) {
                vscode.window.showErrorMessage('Failed to custom text-wrapping.');
            }
        });
    };
}