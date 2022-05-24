// NOTE: empty export required for isolate modules
import { type MessageData, placeholderMessage } from '../shared/shared'

const messages: Set<string> = new Set()

self.addEventListener('message', (e: MessageEvent) => {
  const data = e.data as  MessageData
  if (!data.type) { return }

  switch (data.type) {
    case 'add': {
      if (data.message === placeholderMessage) { break }

      messages.add(data.message)
      break
    }
    case 'clear': {
      messages.clear()
      break
    }
    case 'get': {
      const msg: MessageData = {
        type: 'getResponse',
        messages: Array.from(messages)
      }

      self.postMessage(msg)
    }
  }
})