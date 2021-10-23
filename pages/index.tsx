import router from 'next/dist/client/router';
import Layout from '../components/Layout'

var cpfcnpj: string  = '';

const IndexPage = () => (

<Layout title="Home | Nimbly-Alfa">
    <div className="text-center">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.theboatrace.org%2Fwp-content%2Fuploads%2FBNY-Mellon-300x150-1024x512.png&f=1&nofb=1" height="300px" width="400px"/>
      <h1>Cadastro de investidor</h1>
      <div className="px-4 py-5 my-5">        
        <span>Por favor informe seu CPF ou CNPJ.</span>
        <form className="text-center row justify-content-md-center">
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="visually-hidden">CPF ou CNPJ</label>
            <input id='cpfcnpj' type="number" className="form-control form-control-lg" placeholder="Cpf ou CNPJ" onChange={changeCpgCnpj} />
            <button type="button" className="btn btn-primary btn-lg form-control" onClick={Enviar}>Enviar</button>
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

async function Enviar() {
  if(!cpfcnpj || !(cpfcnpj.length == 11 || cpfcnpj.length == 14)){
    global.document.getElementById("cpfcnpj").focus();
    global.document.getElementById("statusToast").style.display = 'block';
  } else {
    router.push(`/cadastro/` + cpfcnpj);    
  }
}

function changeCpgCnpj(ev) {  
  fechatoast();  
  cpfcnpj = ev.target.value;
}

function fechatoast() {
  global.document.getElementById("statusToast").style.display = 'none';
}

export default IndexPage

