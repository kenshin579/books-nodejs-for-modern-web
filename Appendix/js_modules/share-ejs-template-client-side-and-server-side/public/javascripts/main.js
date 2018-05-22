requirejs.config({
    paths: {
        domReady: "lib/domReady",
        jquery: "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min",
        underscore: "http://underscorejs.org/underscore-min",
        text: "lib/text"
    }
});

define([
    "underscore",
    "jquery",
    "text!/templates/people/show.ejs",
    "domReady!"
], function (_, $, Template) {
    console.log("app started");

    $('#add').bind('submit', function () {
        var template = _.template(Template),
            data = {
                person: {
                    name: $('#name').val()
                }
            };

        console.log("template(data)", template(data));
        $('#people').append(template(data));

        return false;

    });
});