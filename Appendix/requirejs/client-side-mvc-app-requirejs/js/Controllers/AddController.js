define([
    'Views/AddView',
    'Models/User'
], function (AddView, User) {

    function start() {
        AddView.render();
        bindEvents();
    }

    /*
    - event 등록 위치 : view에 event을 등록하고 controller에 있는 business logic method를 호출하는게 좋지만
      간단한 예제로 controller에서 등록함
     */
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
        start: start
    };
});