import * as vscode from 'vscode';

export function textWrapHandler(startChar: string, endChar: string) {
    return () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }

        const selections = editor.selections;

        editor.edit(editBuilder => {
            selections.forEach(selection => {
                const selectedText = editor.document.getText(selection);
                const wrappedText = `${startChar}${selectedText}${endChar}`;
                editBuilder.replace(selection, wrappedText);
            });
        }).then(success => {
            if (!success) {
                vscode.window.showErrorMessage('Failed to text-wrapping.');
            }
        });
    };
}