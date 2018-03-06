// 모듈을 추출합니다.
var crypto = require('crypto');

// 해시를 생성합니다.
var shasum = crypto.createHash('sha256');   //sha256 알고리즘을 사용으로 지정함
shasum.update('crypto_hash');               //update 메서드를 통해 data를 해싱함
var output = shasum.digest('hex');          //digest 메서드로 encoding 방식에 따라서 결과값을 가져움

// 출력합니다.
console.log('crypto_hash:', output);