import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { PockemonApp } from './PockemonApp.jsx'
import { TodoApp } from './TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PockemonApp /> */}
      <TodoApp />
    </Provider> 
  </StrictMode>,
)
