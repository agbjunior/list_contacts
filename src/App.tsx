import { Provider } from 'react-redux'
import ListaDeContactos from './containers/ListaDeContactos'
import store from './store'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ListaDeContactos />
      </Container>
    </Provider>
  )
}

export default App
