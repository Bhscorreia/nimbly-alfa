import * as React from 'react'
import { Pessoa } from '../interfaces'
import { tipoDocumento } from "../interfaces/tipoDocumento";

type ListDetailProps = {
  item: Pessoa
}

const ListDetail = ({ item: pessoa }: ListDetailProps) => (
  <div>
    <h1>Dados encontratos para o {pessoa.documentType == tipoDocumento.CPF ? 'CPF' : 'CNPJ'} {pessoa.cpfcnpj}</h1>
    <p>Nome: {pessoa.name}</p>
    
  </div>
)

export default ListDetail
