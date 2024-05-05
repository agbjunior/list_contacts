import styled from 'styled-components'

export const Form = styled.form`
  display: block;
  align-items: center;
  margin-top: 20px;
  gap: 3px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Button = styled.button`
  background: rgb(97, 222, 99);
  margin: 8px 6px;
  color: #eee;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9px;
  width: 100px;
  height: 35px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ButtonCancel = styled(Button)`
  background-color: #e01631;
  width: 100px;
  height: 35px;
  margin-top: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const FirstAndLastName = styled.input`
  padding: 10px;
  margin-top: 8px;
  border: 1px solid gray;
  border-radius: 4px;
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
  text-align: center;
`
export const Localization = styled.input`
  width: 50%;
  margin-top: 8px;
  background-color: lightgray;
  color: gray;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Phone = styled.input`
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Email = styled.input`
  width: 100%;
  text-align: center;
`
