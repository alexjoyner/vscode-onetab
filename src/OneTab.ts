import { Lock } from './Lock';
import * as vscode from 'vscode';

export class OneTab {
    readonly lock: Lock;
    constructor() {
        this.lock = new Lock();
    }
    async onDidChangeActiveTextEditor() {
        if (this.lock.inSession) {
            return;
        }
        await this.trim();
    }

    private async trim() {
        try {
            await vscode.commands.executeCommand('workbench.action.files.saveAll');
            await setTimeout(async () => {
                await vscode.commands.executeCommand('workbench.action.closeOtherEditors');
            }, 5000)
        }
        catch (error) {
            this.lock.stop();
        }
        finally {
            this.lock.stop();
        }
    }
}