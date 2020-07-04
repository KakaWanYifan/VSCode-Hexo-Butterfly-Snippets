// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
// const fs = require('fs');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

// var command_flag = 0, run_flag = 0;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hexo-butterfly-snippets" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('hexo-butterfly-snippets.preview-enable', function () {
    //     // The code you place here will be executed every time your command is executed
    //     command_flag ++;
    //     console.log(vscode.window.activeTextEditor.document);
    //     let markdown_document = vscode.window.activeTextEditor.document;
    //     if (markdown_document.isUntitled) {
    //         vscode.window.showErrorMessage("The File is Untitled, you have to save it first!");
    //         return ;
    //     }
    //     vscode.window.showInformationMessage("File Detected: " + markdown_document.fileName);
    //     if (markdown_document.languageId != "markdown") {
    //         vscode.window.showErrorMessage("This is not a markdown file!");
    //         return ;
    //     }
    //     vscode.window.showInformationMessage("Markdown File Detected");
    //     console.log(markdown_document.lineCount);
    //     var lines = new Array()
    //     for (var i = 0; i < markdown_document.lineCount; i ++) {
    //         lines[i] = markdown_document.lineAt(i).text;
    //         console.log(lines[i]);
    //     }
    //     let end_index = markdown_document.fileName.lastIndexOf("/") + 1
    //     let tmp_path = markdown_document.fileName.substring(0, end_index) + ".TMP_" + markdown_document.fileName.substring(end_index)
    //     console.log(tmp_path)
    //     fs.writeFileSync(tmp_path, lines);

    //     vscode.workspace.openTextDocument(vscode.Uri.parse("file://" + tmp_path)).then(doc => {
    //         vscode.window.showTextDocument(doc).then(() => {
    //             vscode.commands.executeCommand("workbench.action.files.showOpenedFileInNewWindow");
    //             vscode.workspace.openTextDocument(vscode.Uri.parse("file://" + markdown_document.fileName)).then(doc => {
    //                 vscode.window.showTextDocument(doc).then(() => {
                        
    //                 });
    //             });
    //         });
    //     });
    //     // vscode.workspace.openTextDocument(vscode.Uri.parse("file://" + tmp_path)).then(doc => {
            
    //     //     // vscode.commands.executeCommand("workbench.action.files.newUntitledFile").then(() => {
    //     //         vscode.window.showInformationMessage("New Tab Successed");
    //     //         vscode.window.showTextDocument(doc).then(() => {
    //     //         //     vscode.window.showInformationMessage("Open file successed")
    //     //         //     // vscode.commands.executeCommand("workbench.action.files.showOpenedFileInNewWindow").then(() => {
    //     //         //     //     // vscode.commands.executeCommand("markdown.extension.togglePreviewToSide");
    //     //         //     // });
    //     //         });
    //     //     // });
    //     // });
    // });
    
    // context.subscriptions.push(vscode.workspace.onDidOpenTextDocument((doc) => {

    // }))

    // vscode.window.onDidChangeWindowState(e => {
    //     console.log("abc")
    //     if (run_flag < command_flag) {
    //         let file_name = vscode.window.activeTextEditor.document.fileName;
    //         let index_slash = file_name.lastIndexOf("/");
    //         if (file_name.substring(index_slash + 1).startsWith(".TMP_")) {
    //             console.log(vscode.window.activeTextEditor.document);
    //             run_flag ++;
    //         }
    //     }
    // })

	// context.subscriptions.push(disposable);
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((e) => {
        if (vscode.window.activeTextEditor.document.languageId == "markdown")
            if (e.contentChanges[0].text == ">")
                vscode.commands.executeCommand("editor.action.triggerSuggest");
    }))
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
