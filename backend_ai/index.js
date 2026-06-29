const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 4000;

const path = require('path')

require('./conn');
app.use(express.json());
//app.use(cors());
app.use(cors({
    origin: [
      "http://localhost:5173", // Local Vite frontend
      "https://mern-mtq4p72y9-monali-2105s-projects.vercel.app", // Replace with your Vercel URL
      "https://mern-ai-phi.vercel.app"
    ],
    credentials: true,
}))

const UserRoutes = require('./Routes/user');
const ResumeRoutes = require('./Routes/resume');

app.use('/api/user',UserRoutes)
app.use('/api/resume',ResumeRoutes)


// // Serve static files from the build folder
// app.use(express.static(path.join(__dirname, "build")));

// // Catch-all route: send index.html for React Router
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(PORT,()=>{
    console.log("backend is running on port",PORT)
})