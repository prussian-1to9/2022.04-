var obj1 = {
	name: '뭐시기',
	age: 0
};

// 쓸때는...
console.log(obj1.name + ' : ' + obj1['age']);	// 객체처럼 써도 되고.. 배열처럼 써도 되고..

var obj2 = obj1;

obj1.name = 'renjun';

console.log('obj1.name : ' + obj1.name);
console.log('obj2.name : ' + obj2.name);	// 얕은 복사인걸 확인할 수 있다.

// 이걸 방지하기 위한 방법 : class 생성
class Member {// 대문자 지켜주셈!

	constructor(name, age){// 생성자 만들기
		this.name = name;
		this.age = age;
	}
}

var memb1 = new Member('황인준', 23);
var memb2 = new Member('이동혁', 23);

console.log('memb1.name' + memb1.name);
console.log('memb2.name' + memb2.name);

// 이후에 변수를 추가해줄수도 있다.
memb1.groupName = 'NCT DREAM';	// 이렇게 하나씩 지정해줄 수 도 있지만...

console.log('memb1.groupName : ' + memb1.groupName);
console.log('memb2.groupName : ' + memb2.groupName);	// undefined 가 뜨쥬.

// Member 클래스의 원형에 아예 삽입시켜 주면 편하다.
Member.prototype.groupName = 'NCT DREAM';
console.log('memb1.groupName : ' + memb1.groupName);
console.log('memb2.groupName : ' + memb2.groupName);