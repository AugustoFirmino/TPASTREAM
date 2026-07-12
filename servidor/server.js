const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://rctvstream.vercel.app",
    ],
    credentials: true,
  })
);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://rctvstream.vercel.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"],
});

// Contador de espectadores por canal
const espectadores = {
  "TPA 1": 0,
  "TPA 2": 0,
  "TPA Notícias": 0,
  "TV Zimbo": 0,
  "TV Girasol": 0,
  "TV Parlamento": 0,
};

// Rota para teste
app.get("/", (req, res) => {
  res.json({
    status: "Servidor Socket.IO online",
    espectadores,
    conexoes: io.engine.clientsCount,
  });
});

io.on("connection", (socket) => {
  console.log("✅ Cliente conectado:", socket.id);

  let canalAtual = null;

  // Envia os espectadores atuais para o cliente que acabou de conectar
  socket.emit("espectadores", espectadores);

  socket.on("entrarCanal", (canal) => {
    console.log(`📺 ${socket.id} entrou em ${canal}`);

    // Sai do canal anterior
    if (canalAtual && espectadores[canalAtual] > 0) {
      espectadores[canalAtual]--;
    }

    // Entra no novo canal
    canalAtual = canal;

    if (espectadores.hasOwnProperty(canal)) {
      espectadores[canal]++;
    }

    console.log(espectadores);

    // Atualiza todos os clientes
    io.emit("espectadores", espectadores);
  });

  socket.on("disconnect", () => {
    console.log("❌ Cliente desconectado:", socket.id);

    if (canalAtual && espectadores[canalAtual] > 0) {
      espectadores[canalAtual]--;
    }

    io.emit("espectadores", espectadores);
  });
});

// IMPORTANTE para funcionar no Render
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});