// 비밀번호 확인과 초기값 비교
$('#passwordchk').keyup(function(){
	var spw = $('#password').val();
	var repw = $('#passwordchk').val();
	
	if(spw == repw){
		$('#passwordchk').remove('name');
		$('#ckmsg').html('');
		$('#ckmsg').css('disaply', 'none');
	}else{
		$('#ckmsg').html('&nbsp 비밀번호가 다릅니다.').attr('class', 'checktxt');
		$('#ckmsg').css('display', 'block');
	}
});

// 데이터 전송시 입력 여부 체크
$('#jbtn').click(function(){
	// 데이터 입력 안되었으면 focus.
	var sname = $('#name').val();
	if(!sname){
		alert('이름을 입력하세요.');
		$('#name').focus();
		return;
	}
	var sid = $('#id').val();
	if(!sid){
		alert('아이디를 입력하세요.');
		$('#id').focus();
		return;
	}
	var spw = $('#password').val();
	if(!spw){
		alert('비밀번호를 입력하세요.');
		$('#password').focus();
		return;
	}
	var spwck = $('#passwordchk').val();
	if(!spwck){
		alert('비밀번호 확인 문자를 입력하세요.');
		$('#passwordchk').focus();
		return;
	}
	var smail = $('#mail').val();
	if(!smail){
		alert('이메일을 입력하세요.');
		$('#mail').focus();
		return;
	}
	var stel = $('#tel').val();
	if(!stel){
		alert('전화번호를 입력하세요.');
		$('#stel').focus();
		return;		
	}
	var sgen = $('input[name="gen"]:checked').val();
	if(!sgen){
		alert('성별을 체크하세요.')
		return;
	}
	var savt =$('input[name="avt"]:checked').val();
	if(!savt){
		alert('사용할 아바타를 체크하세요.');
		return;
	}
	
	// 비밀번호와 비밀번호 확인 문자열이 같은지 확인
	if(spw!==spwck){
		alert('비밀번호 확인을 해주세요.');
		$('#passwordchk').val('');
		$('#passworchk').focus();
		return;
	}
	
	// 정규식 검사 : 패턴 생성
	var mailPat = /^[a-zA-Z0-9]{1,20}@[a-zA-Z]{1,10}.com$/;
	var telPat = /^010-[0-9]{3,4}-[0-9]{4}$/;
	
	// 검사 실시
	var mailRs = mailPat.test(smail);
	var telRs = telPat.test(stel);
	
	// 결과에 따라 처리
	if(mailRs==false){
		alert('정확한 이메일 주소를 입력하세요.');
		$('#mail').focus();
		return;
	}else if(telRs==false){
		alert('하이픈 (-) 포함 13자리 핸드폰 번호를 입력하세요.');
		$('#tel').focus();
		return;
	}else{		
		// 통과시 submit
		$('#frm').submit();
	}
});

// reset 버튼 기능 생성
$('#rbtn').click(function(){
	 $('#frm')[0].reset();
});

// id 중복검사 기능 생성 (모양만)
$('#idcheck').click(function(){
	$('#checkrs').css('display', 'block');
});