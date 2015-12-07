module App.Ui.Components.QuillEditor
{
  export class quillEditorParams
  {
    content: KnockoutObservable<string>;
    showToolBar: KnockoutObservable<boolean>;
    constructor()
    {
      var ko = require("knockout");
      this.content = ko.observable("");
      this.showToolBar = ko.observable(true);
    }
  }
}
