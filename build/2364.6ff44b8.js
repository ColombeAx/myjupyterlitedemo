"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2364],{52364:(e,t,o)=>{o.r(t),o.d(t,{commandEditItem:()=>M,default:()=>F,exportPlugin:()=>j,notebookTrustItem:()=>L});var n=o(9481),l=o(5859),a=o(4704),r=o(75044),s=o(83749),d=o(83526),c=o(48694),i=o(10068),u=o(72712),b=o(64814),m=o(64261),C=o(16762),k=o(15783),p=o(83738),g=o(59867),A=o(15343),_=o(36470),x=o(81734),f=o(74547),h=o(18108),w=o(2404),v=o(28877),N=o(88797),S=o(19508);const y={activate:function(e,t,o){function n(e){function t(t,n,l){if(S.KernelMessage.isDisplayDataMsg(t)||S.KernelMessage.isStreamMsg(t)||S.KernelMessage.isErrorMsg(t)||S.KernelMessage.isExecuteResultMsg(t)){const a=o.getLogger(e.context.path);a.rendermime=e.content.rendermime;const r=Object.assign(Object.assign({},t.content),{output_type:t.header.msg_type});let s=n;(S.KernelMessage.isErrorMsg(t)||S.KernelMessage.isStreamMsg(t)&&"stderr"===t.content.name)&&(s=l),a.log({type:"output",data:r,level:s})}}e.context.sessionContext.iopubMessage.connect(((e,o)=>t(o,"info","info"))),e.context.sessionContext.unhandledMessage.connect(((e,o)=>t(o,"warning","error")))}o&&(t.forEach((e=>n(e))),t.widgetAdded.connect(((e,t)=>n(t))))},id:"@jupyterlab/notebook-extension:log-output",requires:[b.INotebookTracker],optional:[N.ILoggerRegistry],autoStart:!0};var E;!function(e){e.createNew="notebook:create-new",e.interrupt="notebook:interrupt-kernel",e.restart="notebook:restart-kernel",e.restartClear="notebook:restart-clear-output",e.restartAndRunToSelected="notebook:restart-and-run-to-selected",e.restartRunAll="notebook:restart-run-all",e.reconnectToKernel="notebook:reconnect-to-kernel",e.changeKernel="notebook:change-kernel",e.createConsole="notebook:create-console",e.createOutputView="notebook:create-output-view",e.clearAllOutputs="notebook:clear-all-cell-outputs",e.closeAndShutdown="notebook:close-and-shutdown",e.trust="notebook:trust",e.exportToFormat="notebook:export-to-format",e.run="notebook:run-cell",e.runAndAdvance="notebook:run-cell-and-select-next",e.runAndInsert="notebook:run-cell-and-insert-below",e.runInConsole="notebook:run-in-console",e.runAll="notebook:run-all-cells",e.runAllAbove="notebook:run-all-above",e.runAllBelow="notebook:run-all-below",e.renderAllMarkdown="notebook:render-all-markdown",e.toCode="notebook:change-cell-to-code",e.toMarkdown="notebook:change-cell-to-markdown",e.toRaw="notebook:change-cell-to-raw",e.cut="notebook:cut-cell",e.copy="notebook:copy-cell",e.pasteAbove="notebook:paste-cell-above",e.pasteBelow="notebook:paste-cell-below",e.pasteAndReplace="notebook:paste-and-replace-cell",e.moveUp="notebook:move-cell-up",e.moveDown="notebook:move-cell-down",e.clearOutputs="notebook:clear-cell-output",e.deleteCell="notebook:delete-cell",e.insertAbove="notebook:insert-cell-above",e.insertBelow="notebook:insert-cell-below",e.selectAbove="notebook:move-cursor-up",e.selectBelow="notebook:move-cursor-down",e.extendAbove="notebook:extend-marked-cells-above",e.extendTop="notebook:extend-marked-cells-top",e.extendBelow="notebook:extend-marked-cells-below",e.extendBottom="notebook:extend-marked-cells-bottom",e.selectAll="notebook:select-all",e.deselectAll="notebook:deselect-all",e.editMode="notebook:enter-edit-mode",e.merge="notebook:merge-cells",e.mergeAbove="notebook:merge-cell-above",e.mergeBelow="notebook:merge-cell-below",e.split="notebook:split-cell-at-cursor",e.commandMode="notebook:enter-command-mode",e.toggleAllLines="notebook:toggle-all-cell-line-numbers",e.undoCellAction="notebook:undo-cell-action",e.redoCellAction="notebook:redo-cell-action",e.markdown1="notebook:change-cell-to-heading-1",e.markdown2="notebook:change-cell-to-heading-2",e.markdown3="notebook:change-cell-to-heading-3",e.markdown4="notebook:change-cell-to-heading-4",e.markdown5="notebook:change-cell-to-heading-5",e.markdown6="notebook:change-cell-to-heading-6",e.hideCode="notebook:hide-cell-code",e.showCode="notebook:show-cell-code",e.hideAllCode="notebook:hide-all-cell-code",e.showAllCode="notebook:show-all-cell-code",e.hideOutput="notebook:hide-cell-outputs",e.showOutput="notebook:show-cell-outputs",e.hideAllOutputs="notebook:hide-all-cell-outputs",e.showAllOutputs="notebook:show-all-cell-outputs",e.toggleRenderSideBySide="notebook:toggle-render-side-by-side",e.setSideBySideRatio="notebook:set-side-by-side-ratio",e.enableOutputScrolling="notebook:enable-output-scrolling",e.disableOutputScrolling="notebook:disable-output-scrolling",e.selectLastRunCell="notebook:select-last-run-cell",e.replaceSelection="notebook:replace-selection",e.autoClosingBrackets="notebook:toggle-autoclosing-brackets",e.toggleCollapseCmd="Collapsible_Headings:Toggle_Collapse",e.collapseAllCmd="Collapsible_Headings:Collapse_All",e.expandAllCmd="Collapsible_Headings:Expand_All",e.copyToClipboard="notebook:copy-to-clipboard"}(E||(E={}));const O="Notebook",I=["notebook","python","custom"],T={id:"@jupyterlab/notebook-extension:tracker",provides:b.INotebookTracker,requires:[b.INotebookWidgetFactory,A.ITranslator],optional:[l.ICommandPalette,c.IFileBrowserFactory,i.ILauncher,n.ILayoutRestorer,u.IMainMenu,k.ISettingRegistry,l.ISessionContextDialogs],activate:function(e,t,o,n,r,s,d,c,i,u){const m=o.load("jupyterlab"),C=e.serviceManager,{commands:k}=e,p=new b.NotebookTracker({namespace:"notebook"}),g=i?i.load(T.id):Promise.reject(new Error(`No setting registry for ${T.id}`));d&&(g.then((e=>{S(e),e.changed.connect((()=>{S(e)})),k.addCommand(E.autoClosingBrackets,{execute:t=>{var o;const n=e.get("codeCellConfig").composite,l=e.get("markdownCellConfig").composite,a=e.get("rawCellConfig").composite,r=n.autoClosingBrackets||l.autoClosingBrackets||a.autoClosingBrackets,s=!!(null!==(o=t.force)&&void 0!==o?o:!r);[n.autoClosingBrackets,l.autoClosingBrackets,a.autoClosingBrackets]=[s,s,s],e.set("codeCellConfig",n),e.set("markdownCellConfig",l),e.set("rawCellConfig",a)},label:m.__("Auto Close Brackets for All Notebook Cell Types"),isToggled:()=>["codeCellConfig","markdownCellConfig","rawCellConfig"].some((t=>e.get(t).composite.autoClosingBrackets))})})).catch((e=>{console.warn(e.message),N({editorConfig:t.editorConfig,notebookConfig:t.notebookConfig,kernelShutdown:t.shutdownOnClose})})),d.restore(p,{command:"docmanager:open",args:e=>({path:e.context.path,factory:O}),name:e=>e.context.path,when:C.ready}));const A=e.docRegistry,x=new b.NotebookModelFactory({disableDocumentWideUndoRedo:t.notebookConfig.disableDocumentWideUndoRedo});A.addModelFactory(x),function(e,t,o,n){const r=o.load("jupyterlab"),{commands:s,shell:d}=e;n=null!=n?n:l.sessionContextDialogs;const c=()=>H.isEnabled(d,t),i=()=>H.isEnabledAndSingleSelected(d,t);t.currentChanged.connect(((e,t)=>{var o,n;(null===(n=null===(o=null==t?void 0:t.content)||void 0===o?void 0:o.model)||void 0===n?void 0:n.cells)&&(t.content.model.cells.changed.connect(((e,o)=>{(e=>{var t,o;for(const n of e.widgets)n instanceof a.MarkdownCell&&n.headingCollapsed&&b.NotebookActions.setHeadingCollapse(n,!0,e),n.model.id===(null===(o=null===(t=e.activeCell)||void 0===t?void 0:t.model)||void 0===o?void 0:o.id)&&b.NotebookActions.expandParent(n,e)})(t.content)})),t.content.activeCellChanged.connect(((e,t)=>{b.NotebookActions.expandParent(t,e)})))})),s.addCommand(E.runAndAdvance,{label:r.__("Run Selected Cells"),execute:e=>{const o=U(t,d,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.runAndAdvance(t,e.sessionContext)}},isEnabled:c}),s.addCommand(E.run,{label:r.__("Run Selected Cells and Don't Advance"),execute:e=>{const o=U(t,d,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.run(t,e.sessionContext)}},isEnabled:c}),s.addCommand(E.runAndInsert,{label:r.__("Run Selected Cells and Insert Below"),execute:e=>{const o=U(t,d,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.runAndInsert(t,e.sessionContext)}},isEnabled:c}),s.addCommand(E.runAll,{label:r.__("Run All Cells"),execute:e=>{const o=U(t,d,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.runAll(t,e.sessionContext)}},isEnabled:c}),s.addCommand(E.runAllAbove,{label:r.__("Run All Above Selected Cell"),execute:e=>{const o=U(t,d,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.runAllAbove(t,e.sessionContext)}},isEnabled:()=>i()&&0!==t.currentWidget.content.activeCellIndex}),s.addCommand(E.runAllBelow,{label:r.__("Run Selected Cell and All Below"),execute:e=>{const o=U(t,d,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.runAllBelow(t,e.sessionContext)}},isEnabled:()=>i()&&t.currentWidget.content.activeCellIndex!==t.currentWidget.content.widgets.length-1}),s.addCommand(E.renderAllMarkdown,{label:r.__("Render All Markdown Cells"),execute:e=>{const o=U(t,d,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.renderAllMarkdown(t,e.sessionContext)}},isEnabled:c}),s.addCommand(E.restart,{label:r.__("Restart Kernel…"),execute:e=>{const l=U(t,d,e);if(l)return n.restart(l.sessionContext,o)},isEnabled:c}),s.addCommand(E.closeAndShutdown,{label:r.__("Close and Shut Down"),execute:e=>{const o=U(t,d,e);if(!o)return;const n=o.title.label;return(0,l.showDialog)({title:r.__("Shut down the notebook?"),body:r.__('Are you sure you want to close "%1"?',n),buttons:[l.Dialog.cancelButton(),l.Dialog.warnButton()]}).then((e=>{if(e.button.accept)return o.context.sessionContext.shutdown().then((()=>{o.dispose()}))}))},isEnabled:c}),s.addCommand(E.trust,{label:()=>r.__("Trust Notebook"),execute:e=>{const o=U(t,d,e);if(o){const{context:e,content:t}=o;return b.NotebookActions.trust(t).then((()=>e.save()))}},isEnabled:c}),s.addCommand(E.restartClear,{label:r.__("Restart Kernel and Clear All Outputs…"),execute:e=>{const l=U(t,d,e);if(l){const{content:e,sessionContext:t}=l;return n.restart(t,o).then((()=>{b.NotebookActions.clearAllOutputs(e)}))}},isEnabled:c}),s.addCommand(E.restartAndRunToSelected,{label:r.__("Restart Kernel and Run up to Selected Cell…"),execute:e=>{const l=U(t,d,e);if(l){const{context:e,content:t}=l;return n.restart(l.sessionContext,o).then((o=>{o&&b.NotebookActions.runAllAbove(t,e.sessionContext).then((o=>{(o||0===t.activeCellIndex)&&b.NotebookActions.run(t,e.sessionContext)}))}))}},isEnabled:i}),s.addCommand(E.restartRunAll,{label:r.__("Restart Kernel and Run All Cells…"),execute:e=>{const l=U(t,d,e);if(l){const{context:e,content:t,sessionContext:a}=l;return n.restart(a,o).then((o=>(o&&b.NotebookActions.runAll(t,e.sessionContext),o)))}},isEnabled:c}),s.addCommand(E.clearAllOutputs,{label:r.__("Clear All Outputs"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.clearAllOutputs(o.content)},isEnabled:c}),s.addCommand(E.clearOutputs,{label:r.__("Clear Outputs"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.clearOutputs(o.content)},isEnabled:c}),s.addCommand(E.interrupt,{label:r.__("Interrupt Kernel"),execute:e=>{var o;const n=U(t,d,e);if(!n)return;const l=null===(o=n.context.sessionContext.session)||void 0===o?void 0:o.kernel;return l?l.interrupt():void 0},isEnabled:c}),s.addCommand(E.toCode,{label:r.__("Change to Code Cell Type"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.changeCellType(o.content,"code")},isEnabled:c}),s.addCommand(E.toMarkdown,{label:r.__("Change to Markdown Cell Type"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.changeCellType(o.content,"markdown")},isEnabled:c}),s.addCommand(E.toRaw,{label:r.__("Change to Raw Cell Type"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.changeCellType(o.content,"raw")},isEnabled:c}),s.addCommand(E.cut,{label:r.__("Cut Cells"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.cut(o.content)},isEnabled:c}),s.addCommand(E.copy,{label:r.__("Copy Cells"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.copy(o.content)},isEnabled:c}),s.addCommand(E.pasteBelow,{label:r.__("Paste Cells Below"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.paste(o.content,"below")},isEnabled:c}),s.addCommand(E.pasteAbove,{label:r.__("Paste Cells Above"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.paste(o.content,"above")},isEnabled:c}),s.addCommand(E.pasteAndReplace,{label:r.__("Paste Cells and Replace"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.paste(o.content,"replace")},isEnabled:c}),s.addCommand(E.deleteCell,{label:r.__("Delete Cells"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.deleteCells(o.content)},isEnabled:c}),s.addCommand(E.split,{label:r.__("Split Cell"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.splitCell(o.content)},isEnabled:c}),s.addCommand(E.merge,{label:r.__("Merge Selected Cells"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.mergeCells(o.content)},isEnabled:c}),s.addCommand(E.mergeAbove,{label:r.__("Merge Cell Above"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.mergeCells(o.content,!0)},isEnabled:c}),s.addCommand(E.mergeBelow,{label:r.__("Merge Cell Below"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.mergeCells(o.content,!1)},isEnabled:c}),s.addCommand(E.insertAbove,{label:r.__("Insert Cell Above"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.insertAbove(o.content)},isEnabled:c}),s.addCommand(E.insertBelow,{label:r.__("Insert Cell Below"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.insertBelow(o.content)},isEnabled:c}),s.addCommand(E.selectAbove,{label:r.__("Select Cell Above"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.selectAbove(o.content)},isEnabled:c}),s.addCommand(E.selectBelow,{label:r.__("Select Cell Below"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.selectBelow(o.content)},isEnabled:c}),s.addCommand(E.extendAbove,{label:r.__("Extend Selection Above"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.extendSelectionAbove(o.content)},isEnabled:c}),s.addCommand(E.extendTop,{label:r.__("Extend Selection to Top"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.extendSelectionAbove(o.content,!0)},isEnabled:c}),s.addCommand(E.extendBelow,{label:r.__("Extend Selection Below"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.extendSelectionBelow(o.content)},isEnabled:c}),s.addCommand(E.extendBottom,{label:r.__("Extend Selection to Bottom"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.extendSelectionBelow(o.content,!0)},isEnabled:c}),s.addCommand(E.selectAll,{label:r.__("Select All Cells"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.selectAll(o.content)},isEnabled:c}),s.addCommand(E.deselectAll,{label:r.__("Deselect All Cells"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.deselectAll(o.content)},isEnabled:c}),s.addCommand(E.moveUp,{label:r.__("Move Cells Up"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.moveUp(o.content)},isEnabled:c}),s.addCommand(E.moveDown,{label:r.__("Move Cells Down"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.moveDown(o.content)},isEnabled:c}),s.addCommand(E.toggleAllLines,{label:r.__("Toggle All Line Numbers"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.toggleAllLineNumbers(o.content)},isEnabled:c}),s.addCommand(E.commandMode,{label:r.__("Enter Command Mode"),execute:e=>{const o=U(t,d,e);o&&(o.content.mode="command")},isEnabled:c}),s.addCommand(E.editMode,{label:r.__("Enter Edit Mode"),execute:e=>{const o=U(t,d,e);o&&(o.content.mode="edit")},isEnabled:c}),s.addCommand(E.undoCellAction,{label:r.__("Undo Cell Operation"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.undo(o.content)},isEnabled:c}),s.addCommand(E.redoCellAction,{label:r.__("Redo Cell Operation"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.redo(o.content)},isEnabled:c}),s.addCommand(E.changeKernel,{label:r.__("Change Kernel…"),execute:e=>{const l=U(t,d,e);if(l)return n.selectKernel(l.context.sessionContext,o)},isEnabled:c}),s.addCommand(E.reconnectToKernel,{label:r.__("Reconnect To Kernel"),execute:e=>{var o;const n=U(t,d,e);if(!n)return;const l=null===(o=n.context.sessionContext.session)||void 0===o?void 0:o.kernel;return l?l.reconnect():void 0},isEnabled:c}),s.addCommand(E.markdown1,{label:r.__("Change to Heading 1"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.setMarkdownHeader(o.content,1)},isEnabled:c}),s.addCommand(E.markdown2,{label:r.__("Change to Heading 2"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.setMarkdownHeader(o.content,2)},isEnabled:c}),s.addCommand(E.markdown3,{label:r.__("Change to Heading 3"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.setMarkdownHeader(o.content,3)},isEnabled:c}),s.addCommand(E.markdown4,{label:r.__("Change to Heading 4"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.setMarkdownHeader(o.content,4)},isEnabled:c}),s.addCommand(E.markdown5,{label:r.__("Change to Heading 5"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.setMarkdownHeader(o.content,5)},isEnabled:c}),s.addCommand(E.markdown6,{label:r.__("Change to Heading 6"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.setMarkdownHeader(o.content,6)},isEnabled:c}),s.addCommand(E.hideCode,{label:r.__("Collapse Selected Code"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.hideCode(o.content)},isEnabled:c}),s.addCommand(E.showCode,{label:r.__("Expand Selected Code"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.showCode(o.content)},isEnabled:c}),s.addCommand(E.hideAllCode,{label:r.__("Collapse All Code"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.hideAllCode(o.content)},isEnabled:c}),s.addCommand(E.showAllCode,{label:r.__("Expand All Code"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.showAllCode(o.content)},isEnabled:c}),s.addCommand(E.hideOutput,{label:r.__("Collapse Selected Outputs"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.hideOutput(o.content)},isEnabled:c}),s.addCommand(E.showOutput,{label:r.__("Expand Selected Outputs"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.showOutput(o.content)},isEnabled:c}),s.addCommand(E.hideAllOutputs,{label:r.__("Collapse All Outputs"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.hideAllOutputs(o.content)},isEnabled:c}),s.addCommand(E.toggleRenderSideBySide,{label:r.__("Render Side-by-side"),execute:e=>{H.renderSideBySide=!H.renderSideBySide,t.forEach((e=>{if(e)return H.renderSideBySide?b.NotebookActions.renderSideBySide(e.content):b.NotebookActions.renderNotSideBySide(e.content)})),t.currentChanged.connect((()=>{if(H.renderSideBySide&&t.currentWidget)return b.NotebookActions.renderSideBySide(t.currentWidget.content)}))},isToggled:()=>H.renderSideBySide,isEnabled:c}),s.addCommand(E.setSideBySideRatio,{label:r.__("Set side-by-side ratio"),execute:e=>{l.InputDialog.getNumber({title:r.__("Width of the output in side-by-side mode"),value:1}).then((e=>{e.value&&document.documentElement.style.setProperty("--jp-side-by-side-output-size",`${e.value}fr`)})).catch(console.error)}}),s.addCommand(E.showAllOutputs,{label:r.__("Expand All Outputs"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.showAllOutputs(o.content)},isEnabled:c}),s.addCommand(E.enableOutputScrolling,{label:r.__("Enable Scrolling for Outputs"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.enableOutputScrolling(o.content)},isEnabled:c}),s.addCommand(E.disableOutputScrolling,{label:r.__("Disable Scrolling for Outputs"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.disableOutputScrolling(o.content)},isEnabled:c}),s.addCommand(E.selectLastRunCell,{label:r.__("Select current running or last run cell"),execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.selectLastRunCell(o.content)},isEnabled:c}),s.addCommand(E.replaceSelection,{label:r.__("Replace Selection in Notebook Cell"),execute:e=>{const o=U(t,d,e),n=e.text||"";if(o)return b.NotebookActions.replaceSelection(o.content,n)},isEnabled:c}),s.addCommand(E.toggleCollapseCmd,{label:"Toggle Collapse Notebook Heading",execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.toggleCurrentHeadingCollapse(o.content)},isEnabled:()=>H.isEnabledAndHeadingSelected(d,t)}),s.addCommand(E.collapseAllCmd,{label:"Collapse All Cells",execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.collapseAll(o.content)}}),s.addCommand(E.expandAllCmd,{label:"Expand All Headings",execute:e=>{const o=U(t,d,e);if(o)return b.NotebookActions.expandAllHeadings(o.content)}})}(e,p,o,u),n&&function(e,t){const o=t.load("jupyterlab");let n=o.__("Notebook Operations");[E.interrupt,E.restart,E.restartClear,E.restartRunAll,E.runAll,E.renderAllMarkdown,E.runAllAbove,E.runAllBelow,E.restartAndRunToSelected,E.selectAll,E.deselectAll,E.clearAllOutputs,E.toggleAllLines,E.editMode,E.commandMode,E.changeKernel,E.reconnectToKernel,E.createConsole,E.closeAndShutdown,E.trust,E.toggleCollapseCmd,E.collapseAllCmd,E.expandAllCmd].forEach((t=>{e.addItem({command:t,category:n})})),e.addItem({command:E.createNew,category:n,args:{isPalette:!0}}),n=o.__("Notebook Cell Operations"),[E.run,E.runAndAdvance,E.runAndInsert,E.runInConsole,E.clearOutputs,E.toCode,E.toMarkdown,E.toRaw,E.cut,E.copy,E.pasteBelow,E.pasteAbove,E.pasteAndReplace,E.deleteCell,E.split,E.merge,E.mergeAbove,E.mergeBelow,E.insertAbove,E.insertBelow,E.selectAbove,E.selectBelow,E.extendAbove,E.extendTop,E.extendBelow,E.extendBottom,E.moveDown,E.moveUp,E.undoCellAction,E.redoCellAction,E.markdown1,E.markdown2,E.markdown3,E.markdown4,E.markdown5,E.markdown6,E.hideCode,E.showCode,E.hideAllCode,E.showAllCode,E.hideOutput,E.showOutput,E.hideAllOutputs,E.showAllOutputs,E.toggleRenderSideBySide,E.setSideBySideRatio,E.enableOutputScrolling,E.disableOutputScrolling].forEach((t=>{e.addItem({command:t,category:n})}))}(n,o);let w=0;const v=e.docRegistry.getFileType("notebook");function N(e){p.forEach((t=>{t.setConfig(e)}))}function S(e){const o=Object.assign(Object.assign({},b.StaticNotebook.defaultEditorConfig.code),e.get("codeCellConfig").composite),n=Object.assign(Object.assign({},b.StaticNotebook.defaultEditorConfig.markdown),e.get("markdownCellConfig").composite),l=Object.assign(Object.assign({},b.StaticNotebook.defaultEditorConfig.raw),e.get("rawCellConfig").composite);t.editorConfig={code:o,markdown:n,raw:l},t.notebookConfig={scrollPastEnd:e.get("scrollPastEnd").composite,defaultCell:e.get("defaultCell").composite,recordTiming:e.get("recordTiming").composite,numberCellsToRenderDirectly:e.get("numberCellsToRenderDirectly").composite,renderCellOnIdle:e.get("renderCellOnIdle").composite,observedTopMargin:e.get("observedTopMargin").composite,observedBottomMargin:e.get("observedBottomMargin").composite,maxNumberOutputs:e.get("maxNumberOutputs").composite,disableDocumentWideUndoRedo:e.get("experimentalDisableDocumentWideUndoRedo").composite},t.shutdownOnClose=e.get("kernelShutdown").composite,x.disableDocumentWideUndoRedo=e.get("experimentalDisableDocumentWideUndoRedo").composite,H.renderSideBySide=!e.get("sideBySideRendering").composite,k.execute(E.toggleRenderSideBySide),N({editorConfig:t.editorConfig,notebookConfig:t.notebookConfig,kernelShutdown:t.shutdownOnClose})}return t.widgetCreated.connect(((e,t)=>{var o,n;t.id=t.id||"notebook-"+ ++w,t.title.icon=null==v?void 0:v.icon,t.title.iconClass=null!==(o=null==v?void 0:v.iconClass)&&void 0!==o?o:"",t.title.iconLabel=null!==(n=null==v?void 0:v.iconLabel)&&void 0!==n?n:"",t.context.pathChanged.connect((()=>{p.save(t)})),p.add(t)})),c&&function(e,t,o,n,a){const r=n.load("jupyterlab"),{commands:s}=e;a=a||l.sessionContextDialogs,t.editMenu.undoers.add({tracker:o,undo:e=>{var t;null===(t=e.content.activeCell)||void 0===t||t.editor.undo()},redo:e=>{var t;null===(t=e.content.activeCell)||void 0===t||t.editor.redo()}}),t.editMenu.clearers.add({tracker:o,clearCurrentLabel:e=>r.__("Clear Output"),clearAllLabel:e=>r.__("Clear All Outputs"),clearCurrent:e=>b.NotebookActions.clearOutputs(e.content),clearAll:e=>b.NotebookActions.clearAllOutputs(e.content)}),t.fileMenu.closeAndCleaners.add({tracker:o,closeAndCleanupLabel:e=>r.__("Close and Shutdown Notebook"),closeAndCleanup:e=>{const t=e.title.label;return(0,l.showDialog)({title:r.__("Shut down the Notebook?"),body:r.__('Are you sure you want to close "%1"?',t),buttons:[l.Dialog.cancelButton(),l.Dialog.warnButton()]}).then((t=>{if(t.button.accept)return e.context.sessionContext.shutdown().then((()=>{e.dispose()}))}))}}),t.kernelMenu.kernelUsers.add({tracker:o,interruptKernel:e=>{var t;const o=null===(t=e.sessionContext.session)||void 0===t?void 0:t.kernel;return o?o.interrupt():Promise.resolve(void 0)},reconnectToKernel:e=>{var t;const o=null===(t=e.sessionContext.session)||void 0===t?void 0:t.kernel;return o?o.reconnect():Promise.resolve(void 0)},restartKernelAndClearLabel:e=>r.__("Restart Kernel and Clear All Outputs…"),restartKernel:e=>a.restart(e.sessionContext,n),restartKernelAndClear:e=>a.restart(e.sessionContext,n).then((t=>(t&&b.NotebookActions.clearAllOutputs(e.content),t))),changeKernel:e=>a.selectKernel(e.sessionContext,n),shutdownKernel:e=>e.sessionContext.shutdown()}),t.fileMenu.consoleCreators.add({tracker:o,createConsoleLabel:e=>r.__("New Console for Notebook"),createConsole:e=>H.createConsole(s,e,!0)}),t.viewMenu.editorViewers.add({tracker:o,toggleLineNumbers:e=>{b.NotebookActions.toggleAllLineNumbers(e.content)},lineNumbersToggled:e=>{const t=e.content.editorConfig;return!!(t.code.lineNumbers&&t.markdown.lineNumbers&&t.raw.lineNumbers)}}),t.runMenu.codeRunners.add({tracker:o,runLabel:e=>r.__("Run Selected Cells"),runAllLabel:e=>r.__("Run All Cells"),restartAndRunAllLabel:e=>r.__("Restart Kernel and Run All Cells…"),run:e=>{const{context:t,content:o}=e;return b.NotebookActions.runAndAdvance(o,t.sessionContext).then((()=>{}))},runAll:e=>{const{context:t,content:o}=e;return b.NotebookActions.runAll(o,t.sessionContext).then((()=>{}))},restartAndRunAll:e=>{const{context:t,content:o}=e;return a.restart(t.sessionContext,n).then((e=>(e&&b.NotebookActions.runAll(o,t.sessionContext),e)))}}),t.helpMenu.kernelUsers.add({tracker:o,getKernel:e=>{var t;return null===(t=e.sessionContext.session)||void 0===t?void 0:t.kernel}})}(e,c,p,o,u),k.addCommand(E.createNew,{label:e=>{var t,o,n;const l=e.kernelName||"";return e.isLauncher&&e.kernelName&&C.kernelspecs?null!==(n=null===(o=null===(t=C.kernelspecs.specs)||void 0===t?void 0:t.kernelspecs[l])||void 0===o?void 0:o.display_name)&&void 0!==n?n:"":e.isPalette?m.__("New Notebook"):m.__("Notebook")},caption:m.__("Create a new notebook"),icon:e=>e.isPalette?void 0:_.notebookIcon,execute:e=>{return t=e.cwd||(r?r.defaultBrowser.model.path:""),o=e.kernelName||"",k.execute("docmanager:new-untitled",{path:t,type:"notebook"}).then((e=>{if(null!=e)return k.execute("docmanager:open",{path:e.path,factory:O,kernel:{name:o}})}));var t,o}}),s&&C.ready.then((()=>{let e=null;const t=()=>{e&&(e.dispose(),e=null);const t=C.kernelspecs.specs;if(t){e=new h.DisposableSet;for(const o in t.kernelspecs){const n=o===t.default?0:1/0,l=t.kernelspecs[o];let a=l.resources["logo-64x64"];e.add(s.add({command:E.createNew,args:{isLauncher:!0,kernelName:o},category:m.__("Notebook"),rank:n,kernelIconUrl:a,metadata:{kernel:f.JSONExt.deepCopy(l.metadata||{})}}))}}};t(),C.kernelspecs.specsChanged.connect(t)})),p},autoStart:!0},R={id:"@jupyterlab/notebook-extension:factory",provides:b.NotebookPanel.IContentFactory,requires:[r.IEditorServices],autoStart:!0,activate:(e,t)=>{const o=t.factoryService.newInlineEditor;return new b.NotebookPanel.ContentFactory({editorFactory:o})}},B={activate:function(e,t,o,n,l,a){const r=l.load("jupyterlab"),s="notebook-tools",d=new b.NotebookTools({tracker:t,translator:l}),c=new b.NotebookTools.ActiveCellTool,i=b.NotebookTools.createSlideShowSelector(l),u=o.factoryService.newInlineEditor,m=new b.NotebookTools.CellMetadataEditorTool({editorFactory:u,collapsed:!1,translator:l}),C=new b.NotebookTools.NotebookMetadataEditorTool({editorFactory:u,translator:l});return e.serviceManager.nbconvert.getExportFormats().then((e=>{if(e){const t=["pdf","slides","script","notebook","custom"];let o=[[r.__("PDF"),"pdf"],[r.__("Slides"),"slides"],[r.__("Script"),"script"],[r.__("Notebook"),"notebook"],[r.__("Custom"),"custom"]];const n=Object.keys(e),a=H.getFormatLabels(l);n.forEach((function(n){if(-1===t.indexOf(n)){const t=r.__(n[0].toUpperCase()+n.substr(1)),l=a[n]?a[n]:t,s=e[n].output_mimetype;o.push([l,s])}}));const s=b.NotebookTools.createNBConvertSelector(o,l);d.addItem({tool:s,section:"common",rank:3})}})),d.title.icon=_.buildIcon,d.title.caption=r.__("Notebook Tools"),d.id=s,d.addItem({tool:c,section:"common",rank:1}),d.addItem({tool:i,section:"common",rank:2}),d.addItem({tool:m,section:"advanced",rank:1}),d.addItem({tool:C,section:"advanced",rank:2}),w.MessageLoop.installMessageHook(d,((e,t)=>{switch(t.type){case"activate-request":n.save(s,{open:!0});break;case"after-hide":case"close-request":n.remove(s)}return!0})),a&&t.widgetAdded.connect(((e,t)=>{a.register(t).render(d)})),d},provides:b.INotebookTools,id:"@jupyterlab/notebook-extension:tools",autoStart:!0,requires:[b.INotebookTracker,r.IEditorServices,p.IStateDB,A.ITranslator],optional:[m.IPropertyInspectorProvider]},M={id:"@jupyterlab/notebook-extension:mode-status",autoStart:!0,requires:[b.INotebookTracker,A.ITranslator],optional:[g.IStatusBar],activate:(e,t,o,n)=>{if(!n)return;const{shell:l}=e,a=new b.CommandEditStatus(o);t.currentChanged.connect((()=>{const e=t.currentWidget;a.model.notebook=e&&e.content})),n.registerStatusItem("@jupyterlab/notebook-extension:mode-status",{item:a,align:"right",rank:4,isActive:()=>!!l.currentWidget&&!!t.currentWidget&&l.currentWidget===t.currentWidget})}},j={id:"@jupyterlab/notebook-extension:export",autoStart:!0,requires:[A.ITranslator,b.INotebookTracker],optional:[u.IMainMenu,l.ICommandPalette],activate:(e,t,o,n,l)=>{var a;const r=t.load("jupyterlab"),{commands:d,shell:c}=e,i=e.serviceManager;let u;d.addCommand(E.exportToFormat,{label:e=>{const t=e.label;return e.isPalette?r.__("Save and Export Notebook: %1",t):t},execute:e=>{const t=U(o,c,e);if(!t)return;const n=s.PageConfig.getNBConvertURL({format:e.format,download:!0,path:t.context.path}),{context:l}=t;return l.model.dirty&&!l.model.readOnly?l.save().then((()=>{window.open(n,"_blank","noopener")})):new Promise((e=>{window.open(n,"_blank","noopener"),e(void 0)}))},isEnabled:()=>H.isEnabled(c,o)}),n&&(u=null===(a=n.fileMenu.items.find((e=>{var t;return"submenu"===e.type&&"jp-mainmenu-file-notebookexport"===(null===(t=e.submenu)||void 0===t?void 0:t.id)})))||void 0===a?void 0:a.submenu),i.nbconvert.getExportFormats().then((e=>{if(e){const o=H.getFormatLabels(t);Object.keys(e).forEach((function(e){const t=r.__(e[0].toUpperCase()+e.substr(1)),n=o[e]?o[e]:t;let a={format:e,label:n,isPalette:!1};if(-1===I.indexOf(e)&&(u&&u.addItem({command:E.exportToFormat,args:a}),l)){a={format:e,label:n,isPalette:!0};const t=r.__("Notebook Operations");l.addItem({command:E.exportToFormat,category:t,args:a})}}))}}))}},L={id:"@jupyterlab/notebook-extension:trust-status",autoStart:!0,requires:[b.INotebookTracker,A.ITranslator],optional:[g.IStatusBar],activate:(e,t,o,n)=>{if(!n)return;const{shell:l}=e,a=new b.NotebookTrustStatus(o);t.currentChanged.connect((()=>{const e=t.currentWidget;a.model.notebook=e&&e.content})),n.registerStatusItem("@jupyterlab/notebook-extension:trust-status",{item:a,align:"right",rank:3,isActive:()=>!!l.currentWidget&&!!t.currentWidget&&l.currentWidget===t.currentWidget})}},W={id:"@jupyterlab/notebook-extension:widget-factory",provides:b.INotebookWidgetFactory,requires:[b.NotebookPanel.IContentFactory,r.IEditorServices,C.IRenderMimeRegistry,l.ISessionContextDialogs,A.ITranslator],activate:function(e,t,o,n,l,a){const r=new b.NotebookWidgetFactory({name:O,fileTypes:["notebook"],modelName:"notebook",defaultFor:["notebook"],preferKernel:!0,canStartKernel:!0,rendermime:n,contentFactory:t,editorConfig:b.StaticNotebook.defaultEditorConfig,notebookConfig:b.StaticNotebook.defaultNotebookConfig,mimeTypeService:o.mimeTypeService,sessionDialogs:l,translator:a});return e.docRegistry.addWidgetFactory(r),r},autoStart:!0},D={id:"@jupyterlab/notebook-extension:cloned-outputs",requires:[d.IDocumentManager,b.INotebookTracker,A.ITranslator],optional:[n.ILayoutRestorer],activate:function(e,t,o,n,a){const r=n.load("jupyterlab"),s=new l.WidgetTracker({namespace:"cloned-outputs"});a&&a.restore(s,{command:E.createOutputView,args:e=>({path:e.content.path,index:e.content.index}),name:e=>`${e.content.path}:${e.content.index}`,when:o.restored});const{commands:d,shell:c}=e;d.addCommand(E.createOutputView,{label:r.__("Create New View for Output"),execute:async e=>{var a;let r,d;const c=e.path;let i=e.index;if(c&&null!=i){if(d=t.findWidget(c,O),!d)return}else{if(d=o.currentWidget,!d)return;r=d.content.activeCell,i=d.content.activeCellIndex}const u=new H.ClonedOutputArea({notebook:d,cell:r,index:i,translator:n}),b=new l.MainAreaWidget({content:u});d.context.addSibling(b,{ref:d.id,mode:"split-bottom"});const m=()=>{s.save(b)};d.context.pathChanged.connect(m),null===(a=d.context.model)||void 0===a||a.cells.changed.connect(m),s.add(b),d.content.disposed.connect((()=>{var e;d.context.pathChanged.disconnect(m),null===(e=d.context.model)||void 0===e||e.cells.changed.disconnect(m),b.dispose()}))},isEnabled:()=>H.isEnabledAndSingleSelected(c,o)})},autoStart:!0},P={id:"@jupyterlab/notebook-extension:code-console",requires:[b.INotebookTracker,A.ITranslator],activate:function(e,t,o){const n=o.load("jupyterlab"),{commands:l,shell:a}=e,r=()=>H.isEnabled(a,t);l.addCommand(E.createConsole,{label:n.__("New Console for Notebook"),execute:e=>{const o=t.currentWidget;if(o)return H.createConsole(l,o,e.activate)},isEnabled:r}),l.addCommand(E.runInConsole,{label:n.__("Run Selected Text or Current Line in Console"),execute:async e=>{var o,n;const a=t.currentWidget;if(!a)return;const{context:r,content:s}=a,d=s.activeCell,c=null==d?void 0:d.model.metadata.toJSON(),i=r.path;if(!d||"code"!==d.model.type)return;let u;const b=d.editor,m=b.getSelection(),{start:C,end:k}=m;if(C.column!==k.column||C.line!==k.line){const e=b.getOffsetAt(m.start),t=b.getOffsetAt(m.end);u=b.model.value.text.substring(e,t)}else{const e=b.getCursorPosition(),t=b.model.value.text.split("\n");let l=m.start.line;for(;l<b.lineCount&&!t[l].replace(/\s/g,"").length;)l+=1;let r=l>0,s=0,d=s+1;for(;;){u=t.slice(s,d).join("\n");const c=await(null===(n=null===(o=a.context.sessionContext.session)||void 0===o?void 0:o.kernel)||void 0===n?void 0:n.requestIsComplete({code:u+"\n\n"}));if("complete"===(null==c?void 0:c.content.status)){if(l<d){for(;d<b.lineCount&&!t[d].replace(/\s/g,"").length;)d+=1;b.setCursorPosition({line:d,column:e.column});break}s=d,d=s+1}else if(d<b.lineCount)d+=1;else{if(!r){for(u=t[l];l+1<b.lineCount&&!t[l+1].replace(/\s/g,"").length;)l+=1;b.setCursorPosition({line:l+1,column:e.column});break}s=l,d=l+1,r=!1}}}u&&(await l.execute("console:open",{activate:!1,insertMode:"split-bottom",path:i}),await l.execute("console:inject",{activate:!1,code:u,path:i,metadata:c}))},isEnabled:r})},autoStart:!0},K={id:"@jupyterlab/notebook-extensions:copy-output",activate:function(e,t,o){const n=t.load("jupyterlab");e.commands.addCommand(E.copyToClipboard,{label:n.__("Copy Output to Clipboard"),execute:e=>{var t;const n=null===(t=o.currentWidget)||void 0===t?void 0:t.content.activeCell;if(null==n)return;const l=n.outputArea.outputTracker.currentWidget;if(null==l)return;const a=l.node.getElementsByClassName("jp-OutputArea-output");a.length>0&&function(e){const t=window.getSelection();if(null==t)return;const o=[];for(let e=0;e<t.rangeCount;++e)o[e]=t.getRangeAt(e).cloneRange();const n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n),document.execCommand("copy"),t.removeAllRanges(),o.forEach((e=>t.addRange(e)))}(a[0])}}),e.contextMenu.addItem({command:E.copyToClipboard,selector:".jp-OutputArea-child",rank:0})},requires:[A.ITranslator,b.INotebookTracker],autoStart:!0},F=[R,T,j,B,M,L,W,y,D,P,K];function U(e,t,o){const n=e.currentWidget;return!1!==o.activate&&n&&t.activateById(n.id),n}var H;!function(e){e.createConsole=function(e,t,o){const n={path:t.context.path,preferredLanguage:t.context.model.defaultKernelLanguage,activate:o,ref:t.id,insertMode:"split-bottom"};return e.execute("console:create",n)},e.isEnabled=function(e,t){return null!==t.currentWidget&&t.currentWidget===e.currentWidget},e.isEnabledAndSingleSelected=function(t,o){if(!e.isEnabled(t,o))return!1;const{content:n}=o.currentWidget,l=n.activeCellIndex;for(let e=0;e<n.widgets.length;++e)if(n.isSelected(n.widgets[e])&&e!==l)return!1;return!0},e.isEnabledAndHeadingSelected=function(t,o){if(!e.isEnabled(t,o))return!1;const{content:n}=o.currentWidget,l=n.activeCellIndex;if(!(n.activeCell instanceof a.MarkdownCell))return!1;for(let e=0;e<n.widgets.length;++e)if(n.isSelected(n.widgets[e])&&e!==l)return!1;return!0},e.getFormatLabels=function(e){const t=(e=e||A.nullTranslator).load("jupyterlab");return{html:t.__("HTML"),latex:t.__("LaTeX"),markdown:t.__("Markdown"),pdf:t.__("PDF"),rst:t.__("ReStructured Text"),script:t.__("Executable Script"),slides:t.__("Reveal.js Slides")}};class t extends v.Panel{constructor(e){super(),this._cell=null;const t=(e.translator||A.nullTranslator).load("jupyterlab");this._notebook=e.notebook,this._index=void 0!==e.index?e.index:-1,this._cell=e.cell||null,this.id=`LinkedOutputView-${f.UUID.uuid4()}`,this.title.label="Output View",this.title.icon=_.notebookIcon,this.title.caption=this._notebook.title.label?t.__("For Notebook: %1",this._notebook.title.label):t.__("For Notebook:"),this.addClass("jp-LinkedOutputView"),this._notebook.context.ready.then((()=>{if(this._cell||(this._cell=this._notebook.content.widgets[this._index]),!this._cell||"code"!==this._cell.model.type)return void this.dispose();const e=this._cell.cloneOutputArea();this.addWidget(e)}))}get index(){return this._cell?x.ArrayExt.findFirstIndex(this._notebook.content.widgets,(e=>e===this._cell)):this._index}get path(){return this._notebook.context.path}}e.ClonedOutputArea=t,e.renderSideBySide=!1}(H||(H={}))}}]);
//# sourceMappingURL=2364.6ff44b8.js.map