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
        <div className="text-center">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.theboatrace.org%2Fwp-content%2Fuploads%2FBNY-Mellon-300x150-1024x512.png&f=1&nofb=1" height="300px" width="400px"/>
          <h1 id='tituloCadastro'>Cadastro de investidor</h1>
          <div id='principal'>
            <h4>Iniciando cadastro para o {cpfcnpj?.length <= 11 ? 'CPF: ' : 'CNPJ: '} {cpfcnpj}</h4>
            <div className="clearfix"></div>
          </div>
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
    ReactDOM.render(finalizar, document?.querySelector('#principal'));
  }
}

function concedido(ev) {
  let addValue = ev.currentTarget.dataset.id ?? 0;
  count += Number(addValue);
  preencherCadastro(true);
}

function boxInfoAdicional() {
  ReactDOM.render(dadosAdicionais, document?.querySelector('#principal'));
}

function finalizarCadastro(){
  global.document.getElementById("tituloCadastro").textContent = "Cadastro realizado com sucesso";
}

function playVideo() {
  
}

export default CadastroPage

const credencial = (<div className="text-center">    
      <div>
        <p>Para continuar precisaremos de algumas informações</p>
        <a className='btn btn-primary' href='#' onClick={concedido}>Continuar com OpenBanking</a>
        <p></p>
        <a className='btn btn-default' href='#' onClick={playVideo}>Continuar manual</a>
        <br />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lnIr-pqTQVc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div>
      </div>
  </div>);

const bancos = (<div className="text-center">
  <div className="row justify-content-md-center">
    <p>Encontramos as suas informações na base do OpenBanking</p>
    <p>Em qual das instituições abaixo vamos encontrar a maior quantidade de informações?</p>
    <div className="btn-group col-sm-4	col-md-4	col-lg-4	col-xl-4">
      <a className='btn btn-outline-primary btn-sm' href='#' data-id='1' onClick={concedido}><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ERiMWpc91f25xqdZk9CvtQHaIL%26pid%3DApi&f=1" height="100px" width="100px" /></a>
      <a className='btn btn-outline-primary btn-sm' href='#' data-id='2' onClick={concedido}><img src="https://www.btgpactual.com/assets/images/btg-logo-blue.svg" height="100px" width="100px" /></a>
      <a className='btn btn-outline-primary btn-sm' href='#' data-id='3' onClick={concedido}><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l7-VY17tqnzdanoNS7DGgDt2NgON-kChwizI%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1" height="100px" width="100px" /></a>
    </div>
  </div>
    <br />
    <br />
  <div className="btn-group col-sm-4	col-md-4	col-lg-4	col-xl-4">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/lnIr-pqTQVc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
</div>)

const finalizar = (<div>
  <p>Legal! Conseguimos muitas informações já registradas</p>
  <p>Agora precisamos apenas completar umas informações exclusivas deste cadastro</p>
  <a className='btn btn-primary' href='#' onClick={boxInfoAdicional}>Cotinuar</a>
</div>)

const dadosAdicionais = (<div>
  <form className="text-center row justify-content-md-center">
    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Campo expecifico BNY Mellon</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Campo expecifico BNY Mellon</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Campo expecifico BNY Mellon</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Campo expecifico BNY Mellon</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Campo expecifico BNY Mellon</label>
      </div>
      <a className='btn btn-primary' href='#' onClick={finalizarCadastro}>Finalizar</a>
    </div>
  </form>
</div>)

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));