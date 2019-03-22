# OnTab

Inspired by Atom's [zentabs](https://github.com/ArnaudRinquin/atom-zentabs) package.
Extension of hitode909's [vscode-zentabs](https://github.com/hitode909/vscode-zentabs) package

<!-- ![screenshot](/images/screenshot.gif) -->

## warnings

This is very initial version. Lot of features in Atom's onetab are not implemented.

>**NOTE**  
>In order to run this extension correctly you should set the following settings
>```
>"workbench.editor.enablePreviewFromQuickOpen": false,
>"workbench.editor.enablePreview": false
>```

 ## configuration

- `onetab.maximumOpenedTabs`
  - the maximum amount of tabs that will be keep open
  - Default: 3

- `onetab.applyLimitFor`
  - apply the maximum amount of tabs for window|editorGroup
  - Default: window

- `onetab.switchWithCurrentTab`
  - once limit of maximum tab is reached, switch the newly opened file with current active tab instead of the older one
  - Default: false
