"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5286,5914],{35286:(e,t,i)=>{i.r(t),i.d(t,{IMarkdownViewerTracker:()=>n,MarkdownDocument:()=>_,MarkdownViewer:()=>u,MarkdownViewerFactory:()=>m});var r=i(74547);const n=new r.Token("@jupyterlab/markdownviewer:IMarkdownViewerTracker");var s=i(5859),o=i(83749),a=i(12929),d=i(16762),h=i(15343),c=i(28877);const l="text/markdown";class u extends c.Widget{constructor(e){super(),this._config=Object.assign({},u.defaultConfig),this._fragment="",this._ready=new r.PromiseDelegate,this._isRendering=!1,this._renderRequested=!1,this.context=e.context,this.translator=e.translator||h.nullTranslator,this._trans=this.translator.load("jupyterlab"),this.renderer=e.renderer,this.node.tabIndex=0,this.addClass("jp-MarkdownViewer"),(this.layout=new c.StackedLayout).addWidget(this.renderer),this.context.ready.then((async()=>{await this._render(),this._monitor=new o.ActivityMonitor({signal:this.context.model.contentChanged,timeout:this._config.renderTimeout}),this._monitor.activityStopped.connect(this.update,this),this._ready.resolve(void 0)}))}get ready(){return this._ready.promise}setFragment(e){this._fragment=e,this.update()}setOption(e,t){if(this._config[e]===t)return;this._config[e]=t;const{style:i}=this.renderer.node;switch(e){case"fontFamily":i.setProperty("font-family",t);break;case"fontSize":i.setProperty("font-size",t?t+"px":null);break;case"hideFrontMatter":this.update();break;case"lineHeight":i.setProperty("line-height",t?t.toString():null);break;case"lineWidth":{const e=t?`calc(50% - ${t/2}ch)`:null;i.setProperty("padding-left",e),i.setProperty("padding-right",e);break}case"renderTimeout":this._monitor&&(this._monitor.timeout=t)}}dispose(){this.isDisposed||(this._monitor&&this._monitor.dispose(),this._monitor=null,super.dispose())}onUpdateRequest(e){this.context.isReady&&!this.isDisposed&&(this._render(),this._fragment="")}onActivateRequest(e){this.node.focus()}async _render(){if(this.isDisposed)return;if(this._isRendering)return void(this._renderRequested=!0);this._renderRequested=!1;const{context:e}=this,{model:t}=e,i=t.toString(),r={};r[l]=this._config.hideFrontMatter?g.removeFrontMatter(i):i;const n=new d.MimeModel({data:r,metadata:{fragment:this._fragment}});try{if(this._isRendering=!0,await this.renderer.renderModel(n),this._isRendering=!1,this._renderRequested)return this._render()}catch(t){requestAnimationFrame((()=>{this.dispose()})),(0,s.showErrorMessage)(this._trans.__("Renderer Failure: %1",e.path),t)}}}!function(e){e.defaultConfig={fontFamily:null,fontSize:null,lineHeight:null,lineWidth:null,hideFrontMatter:!0,renderTimeout:1e3}}(u||(u={}));class _ extends a.DocumentWidget{setFragment(e){this.content.setFragment(e)}}class m extends a.ABCWidgetFactory{constructor(e){super(g.createRegistryOptions(e)),this._fileType=e.primaryFileType,this._rendermime=e.rendermime}createNewWidget(e){var t,i,r,n,s;const o=this._rendermime.clone({resolver:e.urlResolver}).createRenderer(l),a=new u({context:e,renderer:o});return a.title.icon=null===(t=this._fileType)||void 0===t?void 0:t.icon,a.title.iconClass=null!==(r=null===(i=this._fileType)||void 0===i?void 0:i.iconClass)&&void 0!==r?r:"",a.title.iconLabel=null!==(s=null===(n=this._fileType)||void 0===n?void 0:n.iconLabel)&&void 0!==s?s:"",new _({content:a,context:e})}}var g;!function(e){e.createRegistryOptions=function(e){return Object.assign(Object.assign({},e),{readOnly:!0})},e.removeFrontMatter=function(e){const t=e.match(/^---\n[^]*?\n(---|...)\n/);if(!t)return e;const{length:i}=t[0];return e.slice(i)}}(g||(g={}))}}]);
//# sourceMappingURL=5286.0c0e903.js.map