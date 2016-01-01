/// <amd-dependency path="text!./blog-page.html" />
/// <amd-dependency path="app/ui/components/tab-strip/tab-strip-model" />
/// <amd-dependency path="app/ui/components/quill-editor/quill-editor-params"/>
var ko = <KnockoutStatic>require("knockout");
export var template = require("text!./blog-page.html");

export class viewModel
{
  content : KnockoutObservable<string> = ko.observable<string>("");
  public savePostReqest = amplify.request.define("SaveBlogPostRequest", "ajax",
    {
      url: "/api/blog/0",
      type: "POST"
    });

  constructor(params)
  {

  }

  public saveHtml = () =>
  {
    amplify.request("SaveBlogPostRequest", { post: this.content() });
  }


  public dispose()
  {
    window.console.debug("dispose: blog-page");
  }
}
