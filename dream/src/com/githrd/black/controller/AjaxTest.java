package com.githrd.black.controller;

import java.util.*;
import java.io.*;

import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet("/idCheck.pink")
public class AjaxTest extends HttpServlet {
	
	// ��û�� ���� �� (�Ź�) ��������ִ� main �Լ� ����.
	@Override
	public void service(HttpServletRequest req, HttpServletResponse resp) {
		/*
			�񵿱� ��ſ� ���� �׽�Ʈ�� ������ �����̹Ƿ�, db���� ����� ���� X
			���Ƿ� ���� ArrayList�� �ʿ��� �����͸� �ְ�
			Ŭ���̾�Ʈ�� ��û�� ��,
				������� ArrayList �� �����Ϳ� ���Ͽ� ����.
		 */
		
		// ArrayList ������ �غ�
		ArrayList<String> list = new ArrayList<String>();
		
		list.add("onyourm__ark");
		list.add("yellow_3to3");
		list.add("jeno_0423");
		list.add("haechanahceah");
		list.add("na.jaemin0813");
		list.add("chenle_1122");
		list.add("jisung_0205");
		
		// ���޹��� ������ ������
		String sid = req.getParameter("id");
		System.out.println("sid : " + sid);	// sever console�� �Է¹��� �� ���.
		
		// ���޹��� ���̵� list ������ �����ϴ��� Ȯ��
		boolean bool = list.contains(sid);
		
		// ���乮�� �ۼ� ���� �ۼ�
		PrintWriter pw = null;
		try {
			pw = resp.getWriter();
			pw.println("{");	// JSON ���� ���
			// ����� ���� ó�� : JSON Ÿ��
			if(bool) {// �ߺ��̸� NO
				pw.println("\"result\": \"NO\"");	// "result": "NO"
			}else {
				pw.println("\"result\": \"OK\"");	// "result": "OK"
			}
			pw.println("}");	// JSON ���� ����
		}catch(Exception e) {}
	}
}
