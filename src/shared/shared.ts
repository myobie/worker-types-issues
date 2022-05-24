export type Message = string

export type MessageData = {
  type: 'add'
  message: Message
} | {
  type: 'clear'
} | {
  type: 'get'
} | {
  type: 'getResponse'
  messages: Message[]
}

export const placeholderMessage = 'Add a new message'