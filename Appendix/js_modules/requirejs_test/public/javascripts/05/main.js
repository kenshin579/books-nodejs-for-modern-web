define(['jquery', 'ko', 'viewmodel'], function ($, ko, ViewModel) {
    require(['../lib/domReady!'], function (doc) {
        // Bootstrap.css CDN load failure fallback
        $(function () {
            if ($('.hidden:first').is(':visible') === true) {
                $('<link rel="stylesheet" type="text/css" href="stylesheet/05/sbootstrap.min.css" />').appendTo('head');
            }

            $('#app').removeClass('hidden');
        });

        $('#app').load('05-content.html', function () {
            var viewModel = new ViewModel("John", "Smith");
            ko.applyBindings(viewModel);

            $('#name').click(function () {
                $('#input').load('05-input.html', function () {
                    ko.applyBindings(viewModel, $('#input')[0]);
                    $('#name').unbind('click');
                })
            })
        });
    });
});