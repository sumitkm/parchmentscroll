/// <amd-dependency path="text!./tab-strip.html" />

var ko = require("knockout");
export var template = require("text!./tab-strip.html");

export class viewModel
{
  public tabs: KnockoutObservableArray<any> = ko.observableArray([]);

  constructor(params)
  {
    this.tabs.push({ name: "Editor", active: true });
    this.tabs.push({ name: "HTML Markup", active: false});
  }
}
