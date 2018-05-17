// command_center.js
// 첫번째 인자로 사용할 미리 정의된 모듈을 배열에 넣어준다.
// 두번째 인자의 콜백함수의 파라미터로 첫번째 인자에 정의한 모듈을 사용할 이름을 순서대로 넣어준다.
define(['terran/scv', 'mineral'],
    function (SCV, MineralModule) {
        var name = '커맨드센터';
        var type = '건물';

        return {
            makeSCV: function () {
                var mineral = MineralModule.getMineral();
                if (mineral >= 50) {
                    console.log('SCV 생산중...');
                    console.log('남은 미네랄 : ' + mineral);
                    console.log('SCV 생산 완료');
                    MineralModule.setMineral(mineral - 50);

                    return new SCV('SCV', '유닛');
                }
            }
        };
    });