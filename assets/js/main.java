// Main.java
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class Main extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Envia o conteúdo para o cliente
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>Bem-vindo à Página Principal com Java!</h1>");
        out.println("<button onclick=\"window.location.href='index.html'\">Voltar</button>");
        out.println("</body></html>");
    }
}
