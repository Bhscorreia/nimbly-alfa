import { tipoDocumento } from "./tipoDocumento";

export type Pessoa = {
  id: number
  cpfcnpj: string
  documentType: tipoDocumento; 
  name: string
}
