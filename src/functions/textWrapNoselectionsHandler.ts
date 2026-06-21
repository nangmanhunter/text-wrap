import * as vscode from 'vscode';
import { textWrapHandler } from './textWrapHandler';



export function textWrapNoselectionsHandler(startChar: string, endChar: string, trailingChar?: string) {
    return () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }


        const cursorSelections = [...editor.selections].sort((a, b) => a.start.compareTo(b.start));


        // 2. 🔥 빈 커서들을 줄 단위 블록 객체들로 변환
        const updatedSelections = cursorSelections.map(selection => {
            if (selection.isEmpty) {
                const lineIndex = selection.active.line;
                const lineText = editor.document.lineAt(lineIndex);
                
                // 커서 위치의 줄 맨 앞부터 맨 끝까지 영역을 새로 생성
                return new vscode.Selection(lineText.range.start, lineText.range.end);
            }
            return selection;
        });

        // 3. 🎯 핵심: textWrapHandler를 부르기 전에 에디터의 진짜 선택 영역을 바꿔치기!!
        editor.selections = updatedSelections;




        textWrapHandler(startChar, endChar, trailingChar)();

        // editor.edit(editBuilder => {
        //     lineSelections.forEach((selection) => {
                
        //         // 원래 정방향 배열에서의 인덱스를 기준으로 마지막 줄을 판단합니다.
        //         const originalIndex = lineSelections.indexOf(selection);
        //         const selectedText = editor.document.getText(selection);

        //         const isLast = originalIndex === lineSelections.length - 1;
                
        //         // 정직하게 입력된 값 기준으로 쉼표(trailingChar) 위치를 매핑합니다.
        //         const finalEndChar = (!isLast && trailingChar !== undefined) ? trailingChar : endChar;

        //         const wrappedText = `${startChar}${selectedText}${finalEndChar}`;
        //         editBuilder.replace(selection, wrappedText);
        //     });
        // }).then(success => {
        //     if (!success) {
        //         vscode.window.showErrorMessage('Failed to text-wrapping.');
        //     }
        // });
    };
}