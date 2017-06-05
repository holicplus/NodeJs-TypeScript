/**
 * 모듈 가져오는 법
 * [var 혹은 const ] 내부에서사용할 변수 = require(모듈을 가진 파일경로);
 * 내장 모듈은 경로가 없어도 됨.
 * 확장자는 생략가능
 */

const sub001 = require("./sub001.js");
const sub002 = require("./sub002");


console.log("My name is " + sub001.value001 + " !!!");
sub001.function001();

//함수이기에 호출
sub002.function002();

sub002.function003();



