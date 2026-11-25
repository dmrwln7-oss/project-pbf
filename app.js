const express = require("express");
const bukuRoutes = require("./routes/bukuRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/buku", bukuRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint tidak ditemukan",
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});