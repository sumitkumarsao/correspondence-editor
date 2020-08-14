package com.everest.service.impl;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.nio.file.FileSystems;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring4.SpringTemplateEngine;
import org.w3c.tidy.Tidy;
import org.xhtmlrenderer.pdf.ITextRenderer;

import com.everest.model.Details;
import com.everest.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	SpringTemplateEngine templateEngine;

	@Override
	public boolean generatePdf(Details details) {
		Context context = new Context();

		try {
			context.setVariable("name", details.getName());
			context.setVariable("age", details.getAge());
			context.setVariable("country", details.getCountry());
			String htmlContentToRender = templateEngine.process("pdf-template", context);
			String xHtml = xhtmlConvert(htmlContentToRender);
			ITextRenderer renderer = new ITextRenderer();
			String baseUrl = FileSystems.getDefault().getPath("src", "main", "resources", "templates").toUri().toURL()
					.toString();
			renderer.setDocumentFromString(xHtml, baseUrl);
			renderer.layout();
			OutputStream outputStream = new FileOutputStream("target//test.pdf");
			renderer.createPDF(outputStream);
			outputStream.close();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}

	private String xhtmlConvert(String html) {
		try {
			Tidy tidy = new Tidy();
			tidy.setInputEncoding("UTF-8");
			tidy.setOutputEncoding("UTF-8");
			tidy.setXHTML(true);
			ByteArrayInputStream inputStream = new ByteArrayInputStream(html.getBytes("UTF-8"));
			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
			tidy.parseDOM(inputStream, outputStream);
			return outputStream.toString("UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return null;
		}
	}

}