<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>회원 정보 페이지</title>
	<link rel="stylesheet" type="text/css" href="/dream/resources/css/join.css">
	<link rel="stylesheet" type="text/css" href="/dream/resources/css/membinfo.css">
	<script>
		function avt_sel() {
			var avtCode = <%=request.getParameter("avt")%>;
			switch (avtCode) {
			case 11:
				document.getElementById("avt").getAttribute('src') = "/dream/resources/img/avatar/img_avatar1.png";
				break;
			}
		}
	</script>
</head>
<body>
	<div class="content">
		<header>회원 정보</header><br>
		<div class="pad5">
			<div class="box700">
				<div class="avt">
					<%!
						int avt;
						String uri;
					%>
					<%
						try{
							avt = Integer.parseInt(request.getParameter("avt")) - 10 ;
							if (avt <= 0 || avt > 6 ) throw new NumberFormatException();
							uri = String.format("/dream/resources/img/avatar/img_avatar%1d.png", avt);
						}catch(NumberFormatException e){
							uri = "/dream/resources/img/avatar/noimage.jpg";
						}
					%>
					<img id="avt" src=<%=uri%>>
				</div>
				<div class="row">
					<label for="name" class="column">이름 : </label>
					<div class="cell30" id="name"><%= request.getParameter("userName") %></div>
				</div>
				<div class="row">
					<label for="id" class="column">ID : </label>
					<div class="cell30" id="id"><%= request.getParameter("checkid") %></div>
				</div>
				<div class="row">
					<label for="password" class="column">PW : </label>
					<div class="cell30" id="password"><%= request.getParameter("password") %></div>
				</div>
				<div class="row">
					<label for="mail" class="column">이메일 : </label>
					<div class="cell30" id="mail"><%= request.getParameter("mail") %></div>
				</div>
				<div class="row">
					<label for="tel" class="column">전화번호 : </label>
					<div class="cell30" id="tel"><%= request.getParameter("tel") %></div>
				</div>
				<div class="row">
					<label for="gen" class="column">성별 : </label>
					<div class="cell30" id="gen"><%= request.getParameter("gen") %></div>
				</div>
			</div>
			<div class="btncell">
					<button type="button" id="hbtn" onclick="location.href='/dream/index.html';"
						class="btn" style="background-color: #ffff99; color: #378FFF;">HOME</button><!-- 
				 --><button type="submit" id="jbtn" 
							class="btn" style="background-color: #cafb32; color: white;">LIST</button><!-- 
				 --><input type="reset" id="cbtn" 
							class="btn" style="background-color: #FFE1E8; color: #444867;" value="RESET">
			</div>
		</div>
	</div>
</body>
</html>