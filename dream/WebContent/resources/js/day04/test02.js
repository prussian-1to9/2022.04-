
// 이전 (누락) 내용 채워넣기...

// 리셋 버튼 클릭 이벤트
document.getElementById('rbtn').onclick = function() {
	document.getElementById('tid').value = '';
	document.getElementById('tpw').value = "";
}
/*
	id를 입력받아,
	영문 4글자 이상 8글자 이내이면
		콘솔에 출력,
	형식에 맞지 않으면
		'형식에 맞지 않는 아이디입니다.' 출력
*/
/* 로그인 버튼 클릭 이벤트
document.getElementById('lbtn').onclick = function() {
	var sid = document.getElementById('tid').value;
	
	// 정규식 패턴 만들기
	var pat = new RegExp('^[a-zA-Z]{4, 8}$');
	
	// 검사
	var result = pat.test(sid);
	
	// 결과에 따라 처리
	if(result){
		console.log('입력 아이디 : ' + sid);	// 맞으면 출력
	} else {
		document.getElementById('tid').value = "";
		console.log('형식에 맞지 않는 아이디입니다.');
	}
}
*/

/*
	로그인 버튼 클릭시 id와 pw를 읽어서
	유효성 검사를 하고,
	통과시 test.html에 데이터 전송.
	비통과시 입력 내용 reset, 다시 입력.
	
	비밀번호 조건
	- 첫문자는 알파벳
	- 숫자 또는 알파벳으로 구성
	- 글자수 4이상 8이하
*/
document.getElementById('lbtn').onclick = function(){
	// 데이터 읽기
	var sid = document.getElementById('tid').value;
	var spw = document.getElementById('tpw').value;
	
	// 패턴 생성
	var idPat = /^[a-zA-Z]{4,8}$/;
	var pwPat = /^[a-zA-Z][a-zA-Z0-9]{3,7}$/;
	
	// 검사 실시
	var idResult = idPat.test(sid);
	var pwResult = pwPat.test(spw);

	// 결과에 따라 처리
	if(idResult&&pwResult){
		// 통과한 경우, test.html로 입력내용 전송.
		/* get방식 :
		location.href = 'test.html?id=' + sid + '&pw=' + spw;
		*/
		// 데이터 전송용 form 태그의 input 태그에 읽은 데이터 입력, 전송
		document.getElementById('id').value = sid;
		document.getElementById('pw').value = spw;
		
		document.getElementById('frm').submit();
	}else{
		// 형식에 맞지 않는 경우.
		document.getElementById('tid').value = '';
		document.getElementById('tpw').value = '';
		
		// 다시 입력
		document.getElementById('tid').focus();
	}
}