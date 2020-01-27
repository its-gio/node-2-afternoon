const express = require("express");
const app = express();
const { getMessages, deleteMessage, addMessage, editMessage } = require("./controllers/messages_controller")

app
  .use(express.json())
  .get("/api/messages", getMessages)
  .post("/api/messages", addMessage)
  .delete("/api/messages/:id", deleteMessage)
  .put("/api/messages/:id", editMessage)

app.listen(3001, () => `Listening on port 3001`)