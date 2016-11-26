package com.helloworld.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.io.PrintWriter;

/**
 * Created by surverules on 11/26/2016.
 */
@WebServlet(name = "HelloWorld")
public class HelloWorld extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter printWriter = response.getWriter();
        double sqrroot = 4.0;
        printWriter.println("<html><body><h1> Hello World Page</h1> <br/>" +
        "<h3> Square root value: " + sqrroot + "</h3></body></html>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
