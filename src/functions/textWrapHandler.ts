import * as vscode from 'vscode';

export function textWrapHandler(startChar: string, endChar: string, trailingChar?: string) {
    return () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }

        const selections = editor.selections;

        editor.edit(editBuilder => {
            selections.forEach((selection, index) => {
                const selectedText = editor.document.getText(selection);


                const isLast = index === selections.length - 1;
                const finalEndChar = (isLast && trailingChar !== undefined) ? trailingChar : endChar;


                const wrappedText = `${startChar}${selectedText}${finalEndChar}`;
                editBuilder.replace(selection, wrappedText);
            });
        }).then(success => {
            if (!success) {
                vscode.window.showErrorMessage('Failed to text-wrapping.');
            }
        });
    };
}



