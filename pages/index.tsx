import Layout from '../components/Layout'
import Inputmask from "inputmask";

var cpfcnpj: string  = '';

const IndexPage = () => (
  <Layout title="Home | Nimbly-Alfa">
    <div className="px-4 py-5 my-5">
      <h1>Olá seja bem vindo a API de exemplo de Cadastro</h1>
      <div className="px-4 py-5 my-5">        
        <span>Por favor informe seu CPF ou CNPJ.</span>
        <form className="row g-3">
          <div className="col-auto">
            <label className="visually-hidden">CPF ou CNPJ</label>
            <input type="text" id="cpfcnpj" data-inputmask-regex="^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}|\d{3}\.?\d{3}\.?\d{3}-?\d{2})$" className="form-control form-control-lg" placeholder="Cpf ou CNPJ" onChange={changeCpgCnpj} id="btnCpfCnpj" />
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-primary btn-lg mb-3" onClick={Enviar}>Enviar</button>            
            <div className="toast hide" role="alert" aria-live="assertive" aria-atomic="true" id='statusToast'>
              <div className="toast-header">                
                <strong className="me-auto">😕 Ops!</strong>              
                <button type="button" className="btn-close" onClick={fechatoast}></button>
              </div>
              <div className="toast-body">
                Primeiro informe um CPF ou CNPJ.
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="clearfix"></div>
    </div>    
  </Layout>
)

Inputmask().mask(document.querySelectorAll("input"));

function Enviar() {
  if(!cpfcnpj){
    document.getElementById("btnCpfCnpj").focus();
    document.getElementById("statusToast").style.display = 'block';
  }
}

function changeCpgCnpj(ev) { 
  document.getElementById("statusToast").style.display = 'none';
  cpfcnpj = ev.target.value;
}

function fechatoast() {
  document.getElementById("statusToast").style.display = 'none';
}

export default IndexPage
