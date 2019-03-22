import { HistoryItem } from './HistoryItem';
import { HistoryRepository } from './HistoryRepository';
import { Lock } from './Lock';
import * as vscode from 'vscode';

export class OneTab {
    readonly repository: HistoryRepository;
    readonly lock: Lock;
    constructor() {
        this.repository = new HistoryRepository();
        this.lock = new Lock();
    }
    async onDidChangeActiveTextEditor(editor: vscode.TextEditor) {
        if (this.lock.inSession) {
            return;
        }
        const item = new HistoryItem(editor);
        this.repository.push(item);
        const itemToTrim = this.repository.getItemToTrim(item);
        if (!itemToTrim) {
            return;
        }
        await this.trim(itemToTrim, editor);
    }

    private async trim(itemToTrim: HistoryItem, editor: vscode.TextEditor) {
        try {
            await vscode.commands.executeCommand('workbench.action.closeOtherEditors');
        }
        catch (error) {
            this.lock.stop();
        }
        finally {
            this.lock.stop();
        }
    }
}