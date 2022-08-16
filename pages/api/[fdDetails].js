import dataDB from "../../data/db.json";

export default async function handler(req, res) {
  const { fdDetails } = req.query;
  const { jumlahPesan, keterangan, products } = req.body;

  const resultData = dataDB.products.map(
    (data) => data.id.toString() === toString(fdDetails)
  );

  if (req.method === "GET") {
    res.status(200).json(resultData[0]);
    res.end(`GET : ${fdDetails}`);
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
