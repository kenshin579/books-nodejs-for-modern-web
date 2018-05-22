requirejs.config({
    paths: {
        domReady: "lib/domReady",
        jquery: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min"
    }
});

define(["app", "domReady!"], function (App) {
    new App().run();
});