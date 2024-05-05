import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NovoContact from '../../components/Contactos'
import Tarefa from '../../models/Tarefa'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { cadastrar } from '../../store/reducers/atividade'
import * as S from './styles'

const ListaDeCadastro = () => {
  const { itens } = useSelector((state: RootReducer) => state.atividade)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContacto = () => {
    return itens.filter((item) =>
      item.nomeContacto.toLowerCase().includes(termo.toLowerCase())
    )
  }

  const dispatch = useDispatch()
  const [nomeContacto, setNomeContacto] = useState('')
  const [emailContacto, setEmailContacto] = useState('')
  const [phoneContacto, setPhoneContacto] = useState('')

  const cadastrarContacto = (evento: FormEvent) => {
    evento.preventDefault()
    const cadastroParaAdicionar: Tarefa = {
      id: 0,
      nomeContacto,
      emailContacto,
      phoneContacto
    }
    dispatch(cadastrar(cadastroParaAdicionar))

    limparCampos()
  }

  const limparCampos = () => {
    setNomeContacto('')
    setEmailContacto('')
    setPhoneContacto('')
  }

  return (
    <main>
      <div>
        <h1>Lista de Contactos</h1>
        <div>
          <S.Localization
            type="text"
            placeholder="Buscar contacto"
            value={termo}
            onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
          />
        </div>
        <div>
          <S.Form onSubmit={cadastrarContacto}>
            <S.FirstAndLastName
              value={nomeContacto}
              required
              onChange={({ target }) => setNomeContacto(target.value)}
              type="text"
              placeholder="Nome"
            />
            <S.Email
              value={emailContacto}
              required
              onChange={({ target }) => setEmailContacto(target.value)}
              type="email"
              placeholder="Email"
            />
            <S.Phone
              value={phoneContacto}
              required
              onChange={({ target }) => setPhoneContacto(target.value)}
              type="Tel"
              placeholder="(351) 999999999 "
            />
            <S.Button type="submit">Salvar</S.Button>
            <S.ButtonCancel type="button" onClick={limparCampos}>
              Cancelar
            </S.ButtonCancel>
          </S.Form>
        </div>
        <ul>
          {filtraContacto().map((p) => (
            <li key={p.id}>
              <NovoContact
                id={p.id}
                nomeContacto={p.nomeContacto}
                emailContacto={p.emailContacto}
                phoneContacto={p.phoneContacto}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default ListaDeCadastro
