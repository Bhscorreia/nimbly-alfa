import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";

function CadastroPage() {
    const router = useRouter();
    const cpfcnpj: string = router.query.cpfcnpj.toString();

    preencherCadastro(cpfcnpj);

    return (
    <Layout title="Home | Nimbly-Alfa">
        <div className="px-4 py-5 my-5">
          <h1>Iniciando cadastro para o {cpfcnpj?.length <= 11 ? 'CPF: ' : 'CNPJ: '} {cpfcnpj}</h1>
          <div id='log'></div>
          <div className="clearfix"></div>
        </div> 
      </Layout>
)}

async function preencherCadastro(cpfcnpj: string) {
    console.log('1');
    console.log('2');
    console.log('3');
    console.log('4');
    console.log(cpfcnpj);
    
    var div = globalThis.document?.createElement('div');
    console.log(div);    
    var selected = globalThis.document?.querySelector("#log");
    console.log(selected);
    
}

export default CadastroPage