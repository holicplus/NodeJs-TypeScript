/**
 * ���� ���
 * 
 * ���: node.js���� ����ϴ� �Լ����� ����
 * ������
 * module.exports.ȣ���̸� = �� or �Լ�
 * 
 * sub003����� �����ö� �Լ��� �����Ұ��� �ƴϸ� �������� ���� �Ҵ��ؾ� �Ѵ�.
 * 
 */
var sub003 = require("./sub003");

//sub003.funtion003 �Լ������� �������� ���� ()�� ���ش� �׷��� ������ �ε��߿� ����Ǿ� undefined�� �Ҵ�ȴ�.
module.exports.function002 = sub003.function004;

module.exports.function003 = function () {
		console.log("sub002`s function!!");
};