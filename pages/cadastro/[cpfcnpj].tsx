import { useRouter } from "next/router";
import React, { createElement } from "react";
import ReactDOM from "react-dom";
import Layout from "../../components/Layout";
import { Pessoa } from "../../interfaces";
import { logs } from "../../interfaces/logs";

type Props = {
  items: Pessoa[]
}

var count: number = 0;

function CadastroPage() {
    const router = useRouter();
    const cpfcnpj: string = router.query.cpfcnpj?.toString();

    count = 0;
    setTimeout(preencherCadastro, 1000);

    return (
    <Layout title="Home | Nimbly-Alfa">
        <div className="px-4 py-5 my-5" id='principal'>
          <h4>Iniciando cadastro para o {cpfcnpj?.length <= 11 ? 'CPF: ' : 'CNPJ: '} {cpfcnpj}</h4>
          <div className="clearfix"></div>
        </div> 
      </Layout>      
)}

async function preencherCadastro(continuar: boolean = false) {
  if([2,3,4,5,6,7].indexOf(count) == -1 || continuar){
    let msgLog = logs[count++];
    for(var i = 0; i < msgLog.length; i++){
      let log = <h4>{msgLog.substr(0, i)}</h4>;
      ReactDOM.render(log, document?.querySelector('#principal'));
      if(i == msgLog.length)
        await delay(1000);
      else
        await delay(15);
    }
    setTimeout(preencherCadastro, 600);
  } else if (count == 2) {
    ReactDOM.render(credencial, document?.querySelector('#principal'));
  } else if (count == 3){
    ReactDOM.render(bancos, document?.querySelector('#principal'));
  } else if (count > 4){
    ReactDOM.render(bancos, document?.querySelector('#principal'));
  }
}

function concedido(ev) {
  let addValue = ev.target.dataset.id ?? 0;
  count += Number(addValue);
  preencherCadastro(true);
}

function negado() {

}

export default CadastroPage

const credencial = (<div className="text-center">    
      <div>
        <h3>Cadastro de investidor</h3>
        <p>Para continuar precisaremos de algumas permissões</p>
        <a className='btn btn-primary' href='#' onClick={concedido}>Continuar com OpenBanking</a>
        <p></p>
        <a className='btn btn-default' href='#' onClick={negado}>Continuar manual</a>
      </div>
      <div>
      </div>
  </div>);

const bancos = (<div className="text-center row">
  <p>Localizamos 3 bancos no Open Banking</p>
  <p>Qual deles gostaria de utilizar para realizar o cadastro?</p>
  <div className="col-md-12"><a className='btn btn-outline-primary' href='#' data-id='1' onClick={concedido}>Santander</a></div>
  <div className="col-md-12"><a className='btn btn-outline-primary' href='#' data-id='2' onClick={concedido}>Bradesco</a></div>
  <div className="col-md-12"><a className='btn btn-outline-primary' href='#' data-id='3' onClick={concedido}>Banco do Brasil</a></div>
</div>)

const sembanco = (<div className="text-center">    
<div>
  <h3>Nenhum banco localizado</h3>
  <p>Antes de continuar é preciso autorizar o compartilhamento de dados ao Open Banking</p>
  <p>em algum banco que você já possua cadastro</p>
  <i>Aqui poderá ser incluido uma explicação do motivo, importancia e segurança</i>
</div>
<div>
  <a className='btn btn-primary' href='#' onClick={concedido}>Continuar</a>
</div>    
</div>);

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));