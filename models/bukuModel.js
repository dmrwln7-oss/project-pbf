let buku = [
  { id: 1, judul: "Pemrograman JavaScript", penulis: "Andi Saputra", tahun: 2022, stok: 5 },
  { id: 2, judul: "Belajar Node.js", penulis: "Budi Santoso", tahun: 2023, stok: 3 },
];

let nextId = 3;

function getAll() {
  return buku;
}

function getById(id) {
  return buku.find((b) => b.id === id);
}

function create(data) {
  const bukuBaru = {
    id: nextId++,
    judul: data.judul,
    penulis: data.penulis,
    tahun: data.tahun,
    stok: data.stok,
  };
  buku.push(bukuBaru);
  return bukuBaru;
}

function update(id, data) {
  const b = getById(id);
  if (!b) return null;
  if (data.judul !== undefined) b.judul = data.judul;
  if (data.penulis !== undefined) b.penulis = data.penulis;
  if (data.tahun !== undefined) b.tahun = data.tahun;
  if (data.stok !== undefined) b.stok = data.stok;
  return b;
}

function remove(id) {
  const index = buku.findIndex((b) => b.id === id);
  if (index === -1) return null;
  return buku.splice(index, 1)[0];
}

module.exports = { getAll, getById, create, update, remove };