package com.githrd.black.controller;

import java.util.*;
import java.io.*;

import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet("/idCheck.pink")
public class AjaxTest extends HttpServlet {
	
	// 요청이 왔을 때 (매번) 실행시켜주는 main 함수 개념.
	@Override
	public void service(HttpServletRequest req, HttpServletResponse resp) {
		/*
			비동기 통신에 대한 테스트만 진행할 예정이므로, db접근 기능은 구현 X
			임의로 만든 ArrayList에 필요한 데이터를 넣고
			클라이언트가 요청할 때,
				만들어진 ArrayList 속 데이터와 비교하여 응답.
		 */
		
		// ArrayList 데이터 준비
		ArrayList<String> list = new ArrayList<String>();
		
		list.add("onyourm__ark");
		list.add("yellow_3to3");
		list.add("jeno_0423");
		list.add("haechanahceah");
		list.add("na.jaemin0813");
		list.add("chenle_1122");
		list.add("jisung_0205");
		
		// 전달받은 데이터 꺼내기
		String sid = req.getParameter("id");
		System.out.println("sid : " + sid);	// sever console에 입력받은 값 띄움.
		
		// 전달받은 아이디가 list 변수에 존재하는지 확인
		boolean bool = list.contains(sid);
		
		// 응답문서 작성 도구 작성
		PrintWriter pw = null;
		try {
			pw = resp.getWriter();
			pw.println("{");	// JSON 형식 출발
			// 결과에 따른 처리 : JSON 타입
			if(bool) {// 중복이면 NO
				pw.println("\"result\": \"NO\"");	// "result": "NO"
			}else {
				pw.println("\"result\": \"OK\"");	// "result": "OK"
			}
			pw.println("}");	// JSON 형식 종점
		}catch(Exception e) {}
	}
}
