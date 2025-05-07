const express = require("express");
const axios = require("axios");
const path = require("path"); // ⬅️ Agregado
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // ⬅️ Agregado

app.post("/send", async (req, res) => {
  const { from, message } = req.body;

  try {
    const response = await axios.post("http://message-service:3001/messages", {
      from,
      message,
    });
    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error("Error enviando mensaje:", error.message);
    res.status(500).json({ error: "Error al enviar el mensaje" });
  }
});

app.get("/messages", async (req, res) => {
  try {
    const response = await axios.get("http://message-service:3001/messages");
    res.json(response.data);
  } catch (error) {
    console.error("Error al obtener mensajes:", error.message);
    res.status(500).json({ error: "No se pudieron obtener los mensajes" });
  }
});

app.listen(port, () => {
  console.log(`🟢 Chat Gateway activo en http://localhost:${port}`);
});
