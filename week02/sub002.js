/**
 * 서브 모듈
 * 
 * 모듈: node.js에서 사용하는 함수들의 집합
 * 생성법
 * module.exports.호출이름 = 값 or 함수
 * 
 * sub003모듈을 가져올때 함수를 실행할것이 아니면 실행하지 말고 할당해야 한다.
 * 
 */
var sub003 = require("./sub003");

//sub003.funtion003 함수이지만 상위에서 사용시 ()를 빼준다 그렇지 않으면 로딩중에 실행되어 undefined로 할당된다.
module.exports.function002 = sub003.function004;

module.exports.function003 = function () {
		console.log("sub002`s function!!");
};