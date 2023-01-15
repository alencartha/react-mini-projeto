import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from '../Hook/Head'

const Contato = () => {
    return (
        <section className={styles.contato + ' animeLeft'}>
            <Head title="Contato"  description="Página de contatos" />
            <img src={foto} alt="Máquina de escrever"></img>
            <div>
                <h1>Entre em contato.</h1>
                <ul className={styles.dados}>
                    <li>alencar_tha@hotmail.com</li>
                    <li>99999999999</li>
                    <li>Rua tal, numero 0000</li>
                </ul>
            </div>

        </section>
    )
}

export default Contato