let messages = []
let id = 0;

module.exports.getMessages = (req, res) => {
  res.status(200).send(messages);
}

module.exports.deleteMessage = (req, res) => {
  const { id } = req.params;
  const targetID = messages.findIndex(message => message.id === +id);
  messages.splice(targetID, 1);

  res.status(200).send(messages)
}

module.exports.addMessage = (req, res) => {
  const { text, time } = req.body;
  messages.push({ id, text, time });
  id++;
  res.status(200).send(messages);
}

module.exports.editMessage = (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const targetID = messages.findIndex(message => message.id === +id);
  messages[targetID].text = text || messages[messageIndex].text;

  res.status(200).send(messages)
}