define(function () {

    function render(parameters) {
        var appDiv = document.getElementById('app');
        appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
    }

    function bindEvents() {
        document.getElementById('add').addEventListener('click', function () {
            var users = JSON.parse(localStorage.users);
            var userName = document.getElementById('user-name').value;
            users.push(new User(userName));
            localStorage.users = JSON.stringify(users);
            // require(['Controllers/ListController'], function (ListController) {
            //     ListController.start();
            // });

            window.location.hash = '#list';
        }, false);
    }

    return {
        render: render
    };
});