/// <reference path="../../../../typings/quill/quill.d.ts"/>
/// <amd-dependency path="text!./quill-editor.html" />
/// <amd-dependency path="quill" />
var ko = require("knockout");
export var Quill = require("quill");
export var template = require("text!./quill-editor.html");
export class viewModel
{
  private editor: QuillStatic;

  constructor(params)
  {
      this.editor = new Quill('#editor', {
      modules:
      {
        "toolbar" : { container: "#toolbar" }
      },
      theme: 'snow'
    });
  }

  public getHtml = () =>
  {
      window.console.debug(this.editor.getHTML());
  }
}
