import express from "express";
import cors from "cors";
import { S3 } from "@aws-sdk/client-s3";
import bodyParser from "body-parser";
import "dotenv/config";

const BUCKET_NAME = "cyclic-gold-sleepy-reindeer-us-west-1";
const REGION = process.env.AWS_REGION;
const ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID;
const SECRET_KEY = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3();

if (!REGION || !ACCESS_KEY || !SECRET_KEY) {
  console.error("AWS credentials not set correctly.");
  process.exit(1);
}

const app = express();

app.use(cors({ origin: "http://localhost:5173" })); // Actualizado a puerto 5173
app.use(bodyParser.json());

// Endpoint para obtener todas las fotos
app.get("*", async (req, res) => {
  try {
    const s3Objects = await s3.listObjectsV2({
      Bucket: BUCKET_NAME,
      Prefix: "img/", // Obtener objetos solo de la carpeta "img"
    });

    let baseUrl = `https://cyclic-gold-sleepy-reindeer-us-west-1.s3.${REGION}.amazonaws.com/`
    let urlArr =s3Objects.Contents.map(e => baseUrl + e.Key)

    console.log(urlArr)
    console.log(s3Objects)

    // Obtener las claves (nombres de archivos) de la respuesta
    const keys = s3Objects.Contents.map((obj) => obj.Key);

    // Configurar el tipo de contenido adecuado
    res.set("Content-type", "application/json");

    // Enviar la lista de claves como JSON
    res.json({ photos: keys }).end();
  } catch (error) {
    console.error("Error fetching photos:", error);
    res.sendStatus(500).end();
  }
});

app.post("*", async (req, res) => {
  console.log(req.path);
  let filename = req.path.slice(1);

  // Validar que el nombre de archivo no esté vacío
  if (!filename) {
    console.error("Error: El nombre de archivo está vacío.");
    return res.sendStatus(400).end(); // Bad Request
  }

  // Modificar la clave para incluir la carpeta "img"
  let s3Key = `img/${filename}`;

  try {
    await s3.putObject({
      Body: JSON.stringify(req.body),
      Bucket: "cyclic-gold-sleepy-reindeer-us-west-1",
      Key: s3Key,
    });

    res.set("Content-type", "text/plain");
    res.send("ok").end();
  } catch (error) {
    console.error("Error uploading file:", error);
    res.sendStatus(500).end();
  }
});

app.delete("*", async (req, res) => {
  let filename = req.path.slice(1);

  try {
    await s3.deleteObject({
      Bucket: "cyclic-gold-sleepy-reindeer-us-west-1",
      Key: filename,
    });

    res.set("Content-type", "text/plain");
    res.send("ok").end();
  } catch (error) {
    console.error("Error deleting file:", error);
    res.sendStatus(500).end();
  }
});

app.use("*", (req, res) => {
  res.sendStatus(404).end();
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
