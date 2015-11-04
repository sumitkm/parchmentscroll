/// <amd-dependency path="text!./quill-editor.html" />

var ko = require("knockout");
export var template = require("text!./quill-editor.html");
export class viewModel
{
  constructor(params)
  {
    alert("Hello from Quill Editor");
  }
}
