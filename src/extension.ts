import { OneTab } from './OneTab';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const oneTab = new OneTab();

    vscode.window.onDidChangeActiveTextEditor(async editor => {
        if (!editor) { return; }
        await oneTab.onDidChangeActiveTextEditor();
    }, null, context.subscriptions);
}

export function deactivate() {
}