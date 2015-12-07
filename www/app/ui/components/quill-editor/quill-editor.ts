/// <reference path="../../../../typings/quill/quill.d.ts"/>
/// <amd-dependency path="text!./quill-editor.html" />
/// <amd-dependency path="quill" />
/// <amd-dependency path="./quill-editor-params" />

var ko = <KnockoutStatic>require("knockout");
export var Quill = require("quill");
export var template = require("text!./quill-editor.html");
export class viewModel
{
  private editor: QuillStatic;
  public tabs: Array<App.Ui.Components.TabStrip.Model> = [];
  public markup: KnockoutObservable<string>;

  constructor(params : App.Ui.Components.QuillEditor.quillEditorParams)
  {
    this.initTabs();
    if(params.content !=null)
    {
      this.markup = params.content;
    }

    amplify.subscribe(App.Ui.Components.TabStrip.Model.TabChangedEvent, this, this.tabChangedEvent);


    this.editor = new Quill('#editor', {
      modules:
      {
        "toolbar" : { container: "#toolbar" }
      },
      theme: 'snow'
    });

    this.editor.on('text-change', (delta, source) => {
      this.markup(this.editor.getHTML());
    });
  }

  private initTabs()
  {
    this.tabs.push(new App.Ui.Components.TabStrip.Model( "Editor", true ));
    this.tabs.push(new App.Ui.Components.TabStrip.Model( "HTML", false ));
    this.tabs.push(new App.Ui.Components.TabStrip.Model( "HTML Preview", false ));
  }

  public tabChangedEvent = (data: App.Ui.Components.TabStrip.Model) =>
  {
    //data.active(!data.active());
    this.markup(this.editor.getHTML());
  }

  public getHtml = () =>
  {
      window.console.debug();
  }

  public dispose()
  {
    amplify.unsubscribe(App.Ui.Components.TabStrip.Model.TabChangedEvent, this.tabChangedEvent);
  }
}
