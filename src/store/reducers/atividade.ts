import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

type AtividadeState = {
  itens: Tarefa[]
}

const initialState: AtividadeState = {
  itens: [
    {
      id: 1,
      nomeContacto: 'Adilson Barros',
      emailContacto: 'agbj@gmail.com',
      phoneContacto: '(351) 999999999'
    },
    {
      id: 2,
      nomeContacto: 'Juan Barros',
      emailContacto: 'jlhb@gmail.com',
      phoneContacto: '(351) 999999999'
    },
    {
      id: 3,
      nomeContacto: 'Jade Barros',
      emailContacto: 'jdhb@gmail.com',
      phoneContacto: '(351) 999999999'
    },
    {
      id: 4,
      nomeContacto: 'Jasmine Barros',
      emailContacto: 'jdhb@gmail.com',
      phoneContacto: '(351) 999999999'
    }
  ]
}

const atividadesSlice = createSlice({
  name: 'atividade',
  initialState,
  reducers: {
    excluir: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (atividade) => atividade.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (p) => p.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const cadastroJaExiste = state.itens.some(
        (atividade) =>
          atividade.nomeContacto.toLowerCase() ===
          action.payload.nomeContacto.toLowerCase()
      )
      if (cadastroJaExiste) {
        alert('Já existe um contato com este nome')
      } else {
        const novoId =
          state.itens.length > 0
            ? state.itens[state.itens.length - 1].id + 1
            : 1
        state.itens.push({ ...action.payload, id: novoId })
      }
    }
  }
})

export const { excluir, editar, cadastrar } = atividadesSlice.actions
export default atividadesSlice.reducer
