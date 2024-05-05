class Tarefa {
  nomeContacto: string
  emailContacto: string
  phoneContacto: string
  id: number

  constructor(
    nomeContacto: string,
    emailContacto: string,
    phoneContacto: string,
    id: number
  ) {
    this.nomeContacto = nomeContacto
    this.emailContacto = emailContacto
    this.phoneContacto = phoneContacto
    this.id = id
  }
}
export default Tarefa
