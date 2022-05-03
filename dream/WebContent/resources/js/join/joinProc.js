$(document).ready(function(){
	// url parameter 를 따와, 출력
	var param = location.search.substring(1);
	param = decodeURI(param);	// 한글 깨짐 방지
});

// url에 있는 정보를 따와, h1 태그로 출력해봅시다.

var param = location.search.substring(1);
/*
	userName=이름&
	checkedid=id&
	password=pw&
	passwordck=pw&
	mail=email%40email.com&		==> 골뱅이가 '%40'으로 처리되는것 같음.
	tel=010-1234-5678&
	gen=F&avt=11
*/
param = decodeURI(param);	// 한글 깨짐 방지
var arr = param.split('&');
var data = {};
var key = [];

for(var i=0; i<arr.length; i++){
	var tmp = arr[i].split('=');
	key[i] = tmp[0];
	data[tmp[0]] = tmp[1];
}

// div 태그 생성, header 태그 넣어주기
var bod = document.createElement('div');
bod.setAttribute('class', 'content');


// 데이터 입력받을 div 태그 준비
var di = document.createElement('div');
di.setAttribute('class', 'box700');

// div 태그에 입력
for(var i=0; i<arr.length; i++){
	// 새로운 div 태그 생성
	var ro = document.createElement('div');
	ro.setAttribute('class', 'row');
	
	// 항목 태그 생성
	var col = document.createElement('h1');
	col.setAttribute('class', 'column');
	col.innerHTML = key[i];
	
	// 데이터 태그 생성
	var dat = document.createElement('h1');
	dat.setAttribute('class', 'cell30');
	dat.innerHTML = data[key[i]];
	
	// class=row인 div 태그에 입력
	ro.append(col);
	ro.append(dat);
	
	// class=box700인 div 태그에 반복문에서 만든 div 태그 입력
	di.append(ro);
}
bod.append(di);

// 문서에 입력
document.body.append(bod);	// 여기서 빈 값은 넣을 수 없다고 뜸...!! ㅠㅠ