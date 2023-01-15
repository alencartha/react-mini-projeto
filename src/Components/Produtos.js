import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../Hook/Head'
import Loading from './Loading'
import styles from './Produtos.module.css'

const Produtos = () => {

  const [produtos, setProdutos] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function fetchProdutos(url) {
      try {
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setProdutos(json)
      } catch (erro) {
        console.log('erro')
      } finally {
        setLoading(false)
      }

    }
    fetchProdutos('https://ranekapi.origamid.dev/json/api/produto')

  }, [])

  

  if(loading)  return <Loading/>
  if (produtos == null) return null

  return (
    <>
      <Head title="Produtos" description="Página de produtos" />
      <section className={styles.produtos + ' animeLeft'}>
        {produtos.map((produto) =>
          <Link to={`produto/${produto.id}`} key={produto.id} className={styles.produto} >
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <h1 className={styles.nome}>{produto.nome}</h1>
          </Link>)}
      </section>
    </>
  )
}

export default Produtos