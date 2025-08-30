import http from "node:http";
import { getBlogs } from "./database/db.js";

const PORT = 8000;
const blogs = await getBlogs();

// Define your API routes
const apiRoutes = [
  { method: "GET", path: "/api/blogs", description: "Get all blogs" },
  // Add more routes here as needed
];

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  // Home route: welcome message + /api links
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: "Welcome to the Blog API",
        api: "/api",
      })
    );
    return;
  }

  // /api route: list all endpoints
  if (req.url === "/api" && req.method === "GET") {
    res.statusCode = 200;
    res.end(
      JSON.stringify(
        {
          message: "Available API endpoints",
          routes: apiRoutes,
        },
        null,
        2
      )
    );
    return;
  }

  // /api/blogs route: return blogs
  if (req.url === "/api/blogs" && req.method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify(blogs, null, 2));
    return;
  }

  // Handle 404 for unknown routes
  res.statusCode = 404;
  res.end(
    JSON.stringify({
      error: "Not Found",
      message: "The requested route does not exist",
    })
  );
});

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
