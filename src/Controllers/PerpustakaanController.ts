import Joi from "joi";
import { perpustakaanService } from "../Services/PerpustakaanService";

// book collection
import { koleksiBuku } from "../Data";

class PerpustakaanController {
  index(req: any, res: any) {
    res.send(
      `
        <p>Selamat Datang di API perpustakaan,<br>Berikut beberapa API yang tersedia : </p>
        <ul>
          <li>GET : <code>/perpustakaan/daftar-buku</code> &rarr; API ini digunakan untuk melihat daftar buku yang tersedia</li>
          <li>POST : <code>/perpustakaan/tambah-buku</code> &rarr; API ini digunakan untuk menambahkan daftar buku dengan input <i>nama</i> dan <i>pengarang</i></li>
          <li>POST : <code>/perpustakaan/ubah-buku</code> &rarr; API ini digunakan untuk mengubah daftar buku yang sudah ada dengan input <i>urutan</i>, <i>nama</i>, dan <i>pengarang</i></li>
          <li>POST : <code>/perpustakaan/hapus-buku</code> &rarr; API ini digunakan untuk menghapus daftar buku yang sudah ada dengan input <i>urutan</i></li>
        </ul>
      `
    )
  }
  daftarBuku(req: any, res: any) {
    // koleksi buku terdapat dalam variabel 'koleksiBuku'
    // Kirim daftar buku ke user
    return res.json({ data: koleksiBuku })
  }
  // ELSA
  // TODO : CODE

  // MOSES
  // TODO : CODE

  // SALMAA
  // TODO : CODE
}

export const perpustakaanController = new PerpustakaanController()