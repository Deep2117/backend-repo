// server.js
import express from "express";
import cors from "cors";
const app = express();

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.use(cors({
  origin: "https://deep2117.github.io/blog/", // your frontend URL
  methods: ["GET", "POST"],
  credentials: true
}));        // parse JSON body

// simple health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: Date.now() });
});

// dummy login route (replace with real auth later)
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // simple example validation — replace with DB lookup
  if (!username || !password) {
    return res.status(400).json({ message: "username and password required" });
  }

  // demo: accept user "admin" with password "1234"
  if (username === "admin" && password === "1234") {
    // you can return a token or user object
    return res.json({ success: true, user: { username: "admin" }, token: "demo-token" });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
