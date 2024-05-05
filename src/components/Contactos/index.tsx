import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import NewContactTwo from '../../models/Tarefa'
import { editar, excluir } from '../../store/reducers/atividade'
import * as S from './styles'

type Props = NewContactTwo

const NovoContact = ({
  nomeContacto: nomeContactoOriginal,
  emailContacto: emailContactoOriginal,
  phoneContacto: phoneContactoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeContacto, setnomeContacto] = useState('')
  const [emailContacto, setemailContacto] = useState('')
  const [phoneContacto, setphoneContacto] = useState('')

  useEffect(() => {
    if (nomeContactoOriginal.length > 0) {
      setnomeContacto(nomeContactoOriginal)
    }
  }, [nomeContactoOriginal])

  useEffect(() => {
    if (emailContactoOriginal.length > 0) {
      setemailContacto(emailContactoOriginal)
    }
  }, [emailContactoOriginal])

  useEffect(() => {
    if (phoneContactoOriginal.length > 0) {
      setphoneContacto(phoneContactoOriginal)
    }
  }, [phoneContactoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setnomeContacto(nomeContactoOriginal),
      setemailContacto(emailContactoOriginal),
      setphoneContacto(phoneContactoOriginal)
  }

  return (
    <main>
      <S.Cadastro>
        <S.CadastroNovo
          type="text"
          placeholder="Nome e sobrenome"
          disabled={!estaEditando}
          value={nomeContacto}
          onChange={(evento) => setnomeContacto(evento.target.value)}
        />
        <S.PhoneNovo
          type="tel"
          placeholder="(351) 999999999"
          disabled={!estaEditando}
          value={phoneContacto}
          onChange={(evento) => setphoneContacto(evento.target.value)}
        />
        <S.EmailNovo
          type="email"
          placeholder="e-mail"
          disabled={!estaEditando}
          value={emailContacto}
          onChange={(evento) => setemailContacto(evento.target.value)}
        />
        {estaEditando ? (
          <>
            <S.BotaoSalva
              type="button"
              onClick={() => {
                dispatch(
                  editar({
                    nomeContacto,
                    emailContacto,
                    phoneContacto,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalva>
            <S.BotaoCancela type="button" onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancela>
          </>
        ) : (
          <>
            <S.Botao type="button" onClick={() => setEstaEditando(true)}>
              Editar
            </S.Botao>
            <S.BotaoCancela type="button" onClick={() => dispatch(excluir(id))}>
              Excluir
            </S.BotaoCancela>
          </>
        )}
      </S.Cadastro>
    </main>
  )
}

export default NovoContact
