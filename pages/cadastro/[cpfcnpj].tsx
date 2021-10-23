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
  if([2,4,6].indexOf(count) == -1 || continuar){
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
  } else if (count == 4){
    ReactDOM.render(sembanco, document?.querySelector('#principal'));
  }
}

function concedido() {
  preencherCadastro(true);
}

function negado() {

}

export default CadastroPage

const credencial = (<div className="text-center">    
      <div>
        <h3>Consentimento</h3>
        <p>Para continuar precisaremos de algumas permissões</p>
        <p>Você nos autoriza a acessar os dados do Open Banking</p>
        <i>Aqui poderá ser incluido uma explicação do motivo, importancia e segurança</i>
      </div>
      <div>
        <a className='btn btn-primary' href='#' onClick={concedido}>Autorizar</a>
        <a className='btn btn-danger' href='#' onClick={negado}>Negar</a>
      </div>  
  </div>);

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