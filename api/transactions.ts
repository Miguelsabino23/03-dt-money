// api/transactions.ts
import { IncomingMessage, ServerResponse } from "http";

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === "GET") {
    // Lógica para buscar transações, por exemplo:
    const transactions = [
      {
        id: 1,
        description: "Venda",
        price: 100,
        type: "income",
        category: "Vendas",
        createdAt: new Date().toISOString(),
      },
    ];
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(transactions));
  } else if (req.method === "POST") {
    // Lógica para criar uma nova transação
    const newTransaction = {
      id: 2,
      description: "Compra",
      price: 50,
      type: "outcome",
      category: "Compras",
      createdAt: new Date().toISOString(),
    };
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(newTransaction));
  } else {
    res.statusCode = 405; // Método não permitido
    res.end("Método não permitido");
  }
};
