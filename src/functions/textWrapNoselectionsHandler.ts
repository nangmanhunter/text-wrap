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

    };
}