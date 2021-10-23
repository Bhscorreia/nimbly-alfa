import { Pessoa } from '../interfaces'
import { tipoDocumento } from '../interfaces/tipoDocumento'

/** Dummy user data. */
export const sampleUserData: Pessoa[] = [
  {
    id: 101,
    name: "Mario carlos",
    documentType: tipoDocumento.CPF,
    cpfcnpj: "19238788758",
    brandName: "Organização A",
    companyCnpj: "21128159000166",
    personalId: "578-psd-71md6971kjh-2d414",
    requestDateTime: "2021-01-28T08:30:00Z",
    updateDateTime: "2021-01-28T08:30:00Z"
  }
]
