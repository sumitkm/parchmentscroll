/// <amd-dependency path="text!./blog-page.html" />
/// <amd-dependency path="app/ui/components/tab-strip/tab-strip-model" />

var ko = <KnockoutStatic>require("knockout");
export var template = require("text!./blog-page.html");

export class viewModel
{

  constructor(params)
  {

  }



  public dispose()
  {
    window.console.debug("dispose: blog-page");
  }
}
