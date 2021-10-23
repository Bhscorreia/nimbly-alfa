import { tipoDocumento } from "./tipoDocumento";

export type Pessoa = {
  requestDateTime: string,
  updateDateTime: string,
  personalId: string,
  brandName: string,
  companyCnpj: string,
  id: number,
  cpfcnpj: string,
  documentType: tipoDocumento,
  name: string
}
