// For any third party dependencies, like jQuery, place them in the libs folder.
// Configure loading modules from the libs directory,
// except for 'app' ones, which are in a sibling
// directory.

/// <reference path="../../typings/requirejs/require.d.ts" />

requirejs.config(
  {
    baseUrl: '/built/',
    paths:
    {
        "jquery": "../libs/jquery/dist/jquery.min",
        "knockout": "../libs/knockout/dist/knockout",
        "amplify": "../libs/amplify/lib/amplify",
        "text" : "../libs/text/text"
    }
});


// Start loading the main app file. Put all of
// your application logic in there.
requirejs(["jquery", "knockout", "text", "app/boot/config"]);
