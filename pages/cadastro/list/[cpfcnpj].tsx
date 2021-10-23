import { GetStaticProps, GetStaticPaths } from 'next'

import { Pessoa } from '../../../interfaces';
import { sampleUserData } from '../../../utils/sample-data'
import Layout from '../../../components/Layout'
import ListDetail from '../../../components/ListDetail'

type Props = {
  item?: Pessoa
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Nimbly Alfa">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        item ? item.name : 'Detalhes do cadastro'
      } | Nimbly Alfa`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleUserData.map((pessoa) => ({
    params: { cpfcnpj: pessoa.cpfcnpj.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const cpfcnpj = params?.cpfcnpj
    const item = sampleUserData.find((data) => data.cpfcnpj === cpfcnpj)
    
    return { props: { item } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}