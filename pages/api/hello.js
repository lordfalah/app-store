// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dataDB from "../../data/db.json";

export default function handler(req, res) {
  const { jumlahPesan, keterangan, products } = req.body;

  if (req.method === "GET") {
    res.status(200).json(dataDB);
  } else if (req.method === "POST") {
    res.status(200).json({
      jumlahPesan,
      keterangan,
      products,
    });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Methode ${req.method} Not Allowed`);
  }
}
