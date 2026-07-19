const {z} = require("zod")

const msgSchema = z.object({
    senderId: z.string(),
    receiverId: z.string(),
    text: z.string(),
    image: z.string().optional()
})

module.exports = msgSchema