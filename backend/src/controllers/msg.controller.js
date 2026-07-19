const Message = require("../models/message.model.js");
const msgSchema = require("../validations/msg.validation.js");

async function getMessages(req, res) {
    try{
  const loggedInUserId = req.user.id;
  const otherUserId = req.params.senderId;

  const messages = await Message.find({
    $or: [
      { senderId: loggedInUserId, recevierId: otherUserId },
      { senderId: otherUserId, recevierId: loggedInUserId },
    ],
  });

  return res.status(200).json({ messages });
} catch(error){
     return res.status(500).json({message: "Internal Server Error"});
}
}

async function sendMessage(req, res) {
  try {
    const senderId = req.user.id;
    const receiverId = req.params.receiverId;
    const { text } = req.body;


    //Validate the field
    const result = msgSchema.safeParse(text);
    if (!success) {
      res.status(400).json({ errors: result.error.issues });
    }

    let imageUrl;
    if(image){
        // Upload base64 image to cloudinary


    }

    const newMessage = await Message.create({
      senderId: senderId,
      receiverId: receiverId,
      text: result.data.text,
      image: result.data.image,
    });


    // Do here real time operation , socket.io
    res.status(201).json(newMessage)
  } catch (error) {
    console.log("Internal Server Error:", error.message);
    res.status(500).json("Internal Server Error");
  }
}

module.exports = { getMessages, sendMessage };
