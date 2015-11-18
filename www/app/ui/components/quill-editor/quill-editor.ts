/// <reference path="../../../../typings/quill/quill.d.ts"/>
/// <amd-dependency path="text!./quill-editor.html" />
/// <amd-dependency path="quill" />
var ko = <KnockoutStatic>require("knockout");
export var Quill = require("quill");
export var template = require("text!./quill-editor.html");
export class viewModel
{
  private editor: QuillStatic;
  public tabs: Array<App.Ui.Components.TabStrip.Model> = [];
  public markup: KnockoutObservable<string> = ko.observable<string>("");

  constructor(params)
  {
    this.tabs.push(new App.Ui.Components.TabStrip.Model( "Editor", true ));
    this.tabs.push(new App.Ui.Components.TabStrip.Model( "HTML Markup", false ));
    amplify.subscribe(App.Ui.Components.TabStrip.Model.TabChangedEvent, this, this.tabChangedEvent);

    this.editor = new Quill('#editor', {
      modules:
      {
        "toolbar" : { container: "#toolbar" }
      },
      theme: 'snow'
    });
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
