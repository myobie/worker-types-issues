import { useState, useEffect, useCallback } from 'react'
import logo from './logo.svg'
import './App.css'
import { type MessageData, type Message, placeholderMessage } from './shared/shared'

const worker = new Worker('../worker/worker.ts')

function App() {
  const [messages, replaceMessages] = useState<Message[]>([])

  useEffect(() => {
    worker.addEventListener('message', e => {
      const data = e.data as MessageData
    })

    return () => {

    }
  }, [])

  return (
    <>
      <form>
        <input placeholder={placeholderMessage}/>
      </form>
      <ul>
        {messages.map(message => (
          <li>{message}</li>
        ))}
      </ul>
    </>
  )
}

export default App
