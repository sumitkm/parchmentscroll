/// <amd-dependency path="text!./blog-page.html" />
/// <amd-dependency path="app/ui/components/tab-strip/tab-strip-model" />

var ko = require("knockout");
export var template = require("text!./blog-page.html");

export class viewModel
{
  public tabs: Array<App.Ui.Components.TabStrip.Model> = [];

  constructor(params)
  {
    this.tabs.push(new App.Ui.Components.TabStrip.Model( "Editor", true ));
    this.tabs.push(new App.Ui.Components.TabStrip.Model( "HTML Markup", false ));

    amplify.subscribe(App.Ui.Components.TabStrip.Model.TabChangedEvent, this, this.tabChangedEvent);
  }

  public tabChangedEvent = (data: App.Ui.Components.TabStrip.Model) =>
  {
    //data.active(!data.active());
  }

  public dispose()
  {
    amplify.unsubscribe(App.Ui.Components.TabStrip.Model.TabChangedEvent, this.tabChangedEvent);
    window.console.debug("dispose: blog-page");
  }
}
