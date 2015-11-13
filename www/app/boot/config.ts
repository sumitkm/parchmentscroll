
define(["knockout"],(ko, require) =>
{
  ko.components.register("blog-page", { require : "app/ui/pages/blog-page/blog-page" });
  ko.components.register("tab-strip", { require : "app/ui/components/tab-strip/tab-strip" });
  ko.components.register("quill-editor", { require : "app/ui/components/quill-editor/quill-editor" });
  ko.applyBindings();
});
