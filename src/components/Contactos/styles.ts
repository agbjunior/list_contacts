import styled from 'styled-components'

export const Cadastro = styled.form`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-top: 12px;
  text-align: center;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 6px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: #2f3640;
  margin: 12px 6px;
`
export const BotaoSalva = styled.button`
  background: green;
  border-radius: 12px;
  padding: 4px;
  margin: 12px 6px;
`
export const BotaoCancela = styled.button`
  background-color: red;
  border-radius: 12px;
  padding: 4px;
  margin: 12px 6px;
`
export const CadastroNovo = styled.input`
  padding: 8px;
  border: none;
  border-bottom: 1px solid lightgray;
  background-color: transparent;
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const PhoneNovo = styled.input`
  width: 215px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const EmailNovo = styled.input`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
