import React from 'react'
import styles from './Produto.module.css'
import { useParams } from 'react-router-dom'
import Head from '../Hook/Head';
import Loading from './Loading';

const Produto = () => {

  const { id } = useParams()
  const [produto, setProduto] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [erro, setErro] = React.useState(null)

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setProduto(json)
      } catch (erro) {
        setErro('Um erro ocorreu')
      } finally {
        setLoading(false)
      }

    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)

  }, [id])


  if (loading) return <Loading/>
  if (erro) return <p>{{ erro }}</p>
  if (produto === null) return null

  return (
    <>
      <Head title={produto.nome} />
      <section className={styles.produto + ' animeLeft'}>
        <div>
          {produto.fotos.map((foto) => <img src={foto.src} key={foto.src} />)}
        </div>
        <div>
          <h1>{produto.nome}</h1>
          <span className={styles.preco} >R$ {produto.preco}</span>
          <p className={styles.descricao}>{produto.descricao}</p>
        </div>
      </section>

    </>
  )
}

export default Produto