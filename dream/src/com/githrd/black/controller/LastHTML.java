package com.githrd.black.controller;

import java.io.*;

import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet("/last.pink")	//	localhost/dream/last.pink로 요청시 문서 생성
public class LastHTML extends HttpServlet {
	public void service(HttpServletRequest req, HttpServletResponse resp) {
		PrintWriter pw = null;
		try {
			// 한글 깨짐 방지
			resp.setCharacterEncoding("UTF-8");
			
			// html 문서 작성
			pw = resp.getWriter();
			pw.println("<!DOCTYPE html>");
			pw.println("<html>");
			pw.println("<head>");
			pw.println("<meta charset=\"UTF-8\">");
			pw.println("</head>");
			pw.println("<body>");
			pw.println("<h1 style=\"background-color: orange; padding: 10px; text-align: center;\">"
					+ "서블릿으로 만든 문서</h1>");
			pw.println("</body>");
			pw.println("</html>");
		}catch(Exception e) {}
	}
}
