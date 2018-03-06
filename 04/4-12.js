// 모듈을 추출합니다.
var crypto = require('crypto');

// 변수를 선언합니다.
var key = '아무것도 알지 못하는 나만의 비밀 키';
var input = 'PASSWORD';

// 암호화
var cipher = crypto.createCipher('aes192', key);        //암호화, 복호화에 사용할 키와 알고리즘을 전달하여 Cipher 객체를 생성함
cipher.update(input, 'utf8', 'base64');                 //update 메서드로 암호화할 data를 매개변수로 전달함
var cipheredOutput = cipher.final('base64');            //final 메서드를 호출하여 암호화된 값을 얻음

// 암호화 해제
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

// 출력합니다.
console.log('원래 문자열: ' + input);
console.log('암호화: ' + cipheredOutput);
console.log('암호화 해제: ' + decipheredOutput);
