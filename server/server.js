const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
//   socket.on("get-code", async () => {
//     // console.log("connected");
//   });
  console.log("connected");
});
