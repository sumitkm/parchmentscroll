define(["knockout"], function (ko, require) {
    ko.components.register("quill-editor", { require: "app/ui/components/quill-editor/quill-editor" });
    ko.applyBindings();
});
