const bukuModel = require("../models/bukuModel");

exports.getAllBuku = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Data buku berhasil ditampilkan",
    data: bukuModel.getAll(),
  });
};

exports.getBukuById = (req, res) => {
  const buku = bukuModel.getById(parseInt(req.params.id));
  if (!buku) {
    return res.status(404).json({
      success: false,
      message: "Data buku tidak ditemukan",
    });
  }
  res.status(200).json({
    success: true,
    message: "Detail buku berhasil ditampilkan",
    data: buku,
  });
};

exports.createBuku = (req, res) => {
  const { judul, penulis, tahun, stok } = req.body;
  if (!judul || !penulis || tahun === undefined || stok === undefined) {
    return res.status(400).json({
      success: false,
      message: "judul, penulis, tahun, dan stok wajib diisi",
    });
  }
  const bukuBaru = bukuModel.create({ judul, penulis, tahun, stok });
  res.status(201).json({
    success: true,
    message: "Data berhasil ditambahkan",
    data: bukuBaru,
  });
};

exports.updateBuku = (req, res) => {
  const buku = bukuModel.update(parseInt(req.params.id), req.body);
  if (!buku) {
    return res.status(404).json({
      success: false,
      message: "Data buku tidak ditemukan",
    });
  }
  res.status(200).json({
    success: true,
    message: "Data berhasil diperbarui",
    data: buku,
  });
};

exports.deleteBuku = (req, res) => {
  const buku = bukuModel.remove(parseInt(req.params.id));
  if (!buku) {
    return res.status(404).json({
      success: false,
      message: "Data buku tidak ditemukan",
    });
  }
  res.status(200).json({
    success: true,
    message: "Data berhasil dihapus",
    data: buku,
  });
};