import { readFileSync } from "fs";
import { join } from "path";

export default async (req, res) => {
  // Caminho para o arquivo server.json
  const filePath = join(process.cwd(), "server.json");

  try {
    const data = readFileSync(filePath, "utf8");
    res.setHeader("Access-Control-Allow-Origin", "*"); // Configuração de CORS
    res.status(200).json(JSON.parse(data)); // Retorna o JSON
  } catch (error) {
    res.status(500).json({ error: "Erro ao ler o arquivo JSON" });
  }
};
