import { koleksiBukuService } from "../Services/KoleksiBukuService"
// book collection
import { koleksiFilm } from "../Data";
import Joi from "joi";

class KoleksiBukuController {
  // Elsa
  async trendFilmController (req: any, res: any) {
    const data = await koleksiBukuService.trendFilmService()
    return res.json({ data: data })
  }

  async tambahFilmController (req: any, res: any) {
    // ======= VALIDASI ==========
    const skemaValidasi = Joi.object({
      id: Joi.number().required(),
      nama: Joi.string().required(),
      sutradara: Joi.string().required(),
      studio: Joi.string().required(),
      trending: Joi.boolean().required()
    })

    const hasilValidasi = skemaValidasi.validate(req.body);
    if(!hasilValidasi.error) {
      const data = await koleksiBukuService.tambahFilmService(req.body)
      return res.json({ data: data }) 
    } else {
      console.log(hasilValidasi.error)
      res.status(400).json({ error: 'salah bro'})
    }
  }
  
  // Moses
  koleksiBukuFalse(req: any, res: any){
    const data = koleksiBukuService.koleksiFilmFalse()
      return res.json({ data: data })
}}

export const koleksiBukuController = new KoleksiBukuController()