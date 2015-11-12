
define(["knockout"],(ko, require) =>
{
  ko.components.register("blog-page", { require : "app/ui/pages/blog-page/blog-page" });
  ko.components.register("quill-editor", { require : "app/ui/components/quill-editor/quill-editor" });
  ko.applyBindings();
});
