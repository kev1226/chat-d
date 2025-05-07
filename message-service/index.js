// message-service/index.js
const express = require("express");
const app = express();
const port = 3001; // interno y externo, como configuraste

app.use(express.json());

let mensajes = [];

app.post("/messages", (req, res) => {
  const { from, message } = req.body;
  if (!from || !message) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  const nuevoMensaje = { from, message, timestamp: new Date() };
  mensajes.push(nuevoMensaje);
  console.log("Mensaje recibido:", nuevoMensaje);
  res.status(201).json({ success: true, message: "Mensaje guardado" });
});

app.get("/messages", (req, res) => {
  res.json(mensajes);
});

app.listen(port, () => {
  console.log(`🟢 Message Service activo en http://localhost:${port}`);
});
