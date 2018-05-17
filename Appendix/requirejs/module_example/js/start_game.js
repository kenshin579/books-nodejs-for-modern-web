// start_game.js

require.config({
    /* baseUrl : js 파일이 있는 기본 경로를 설정한다. */
    baseUrl: 'js', // js 라는 폴더를 기본 폴더로 설정

    /* paths : baseUrl을 기준으로 탐색하며, 특정 모듈에 대한 경로를 선언한다. */
    paths: {
        // mineral : js/resource/mineral.js
        'mineral': 'resource/mineral',
        // gas : js/reosurce/gas.js
        'gas': 'resource/gas'
    }
});

/* require 메소드의 첫번째 인자는 사용할 디펜던시를 관리하는 배열이다. 두번째 인자는 디펜던시들이 로드된 뒤 호출될 콜백 함수이다. 콜백함수의 인자로 첫번째 인자로 선언한 디펜던시 모듈들을 사용할 파라미터를 순서대로 정의해준다. (첫번째 인자인 배열에 있는 디펜던시들이 로드 된 뒤에 두번째 인자인 콜백함수가 수행된다.) */
require(['terran/command_center'], function (CommandCenter) {
    var scvs = [];

    for (var i = 0; i < 5; i++) {
        var scv = CommandCenter.makeSCV();
        scvs.push(scv);
    }

    for (var j = 0; j < 4; j++) {
        scvs[j].getMineral();
    }
    scvs[4].makeGasStation();
});