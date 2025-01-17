import { IncomingMessage, ServerResponse } from "http";
import { readFileSync } from "fs";
import { join } from "path";

export default (_req: IncomingMessage, res: ServerResponse) => {
  const filePath = join(process.cwd(), "server.json");

  try {
    const data = readFileSync(filePath, "utf8");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*"); // Configurações de CORS
    res.statusCode = 200;
    res.end(data); // Retorna o conteúdo do server.json
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Erro ao ler o arquivo JSON" }));
  }
};
