class BangunDatarService {
  hitungLuasPersegiService(payload: { sisi: number }) {
    // ========= LOGIKA =========
    let luas = 0
    let keliling = 0
    // LOGIKA LUAS DAN KELILING PERSEGI
    // 1. ambil data dari client/user
  
    // 2. definisikan variabel yang dibutuhkan
    const sisi =payload.sisi
  
    // 3. hitung luas
    luas = sisi * sisi;
  
    // 4. hitung keliling
    keliling = 4 * sisi
  
    return { luas: luas, keliling: keliling }
  };
  
  hitungLuasSegitigaService(payload: {alas: number, tinggi: number}) {
    //LOGIKA
    let luas = 0
    let keliling = 0
    // LOGIKA LUAS DAN KELILING SEGITIGA SAMA SISI
    //1 ambil data dari client/user
    
    //2 definisikan variabel yang dibutuhkan
    const alas = payload.alas
    const tinggi = payload.tinggi
    
    //3 hitung luas
    luas = alas*tinggi/2;
    //4 hitung keliling
    keliling = 3*alas
    
    return {luas:luas, keliling: keliling}
    }

  hitungLuasLingkaranService(bundar: { radius: number }) {
    //========LOGIKA=======
    let luas = 0
    let keliling = 0
    // LOGIKA LUAS DAN KELILING LINGKARAN
    // TODO : Membuat logika untuk menghitung luas dan keliling lingkaran     
    
    // 1. Ambil data dari user
        
    // 2. Definisikan variabel yang dibutuhkan
    const radius = bundar.radius
         
    // 3. Hitung luas
    luas = 3.14*(radius**2)
         
    // 4. Hitung keliling
    keliling = 2*3.14*radius 
    return { luas: luas, keliling: keliling }
  } 
  perhitunganPersegiPanjangService(input: { panjang: number, lebar: number }) {
    // ========= LOGIKA =========
    let luas = 0
    let keliling = 0
    // LOGIKA LUAS DAN KELILING PERSEGI PANJANG
    const panjang = input.panjang;
    const lebar = input.lebar;

    luas = panjang * lebar
    keliling = ( 2 * panjang ) + ( 2 * lebar )
  
    return { luas: luas, keliling: keliling }
  }
}

export const bangunDatarService = new BangunDatarService()