import { createRoot } from 'react-dom/client'
import App from './App'
import { Provedor } from './JogoContext'

createRoot(document.getElementById('root')!).render(
  <Provedor>
    <App />
  </Provedor>
);
