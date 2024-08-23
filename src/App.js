import logo from './logo.svg';
import './App.css';
import io from "socket.io-client"

let users = []
const socket = io.connect("http://192.168.10.108:8888", {
  query: { clientId: 'Web' }
})

socket.on('connect', () => { console.log('Socket Connected') })

socket.on('link', data => {
  console.log(data)
  users.push({
      id: data.id,
      name: data.name,
      color: `#${data.color}`,
      shape: data.shape,
      x: data.x,
      y: data.y
  })
})

socket.on('close', id => {
  users.forEach((user, index) => {
      if (user.id === id) users.splice(index, 1)
  })
})

function App() {
  return (
    <div className="App">
      <p>Test</p>
    </div>
  )
}

export default App