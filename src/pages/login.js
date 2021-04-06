import React, { Component } from 'react'
import { render } from 'react-dom'
import Router from 'next/router'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import { Arrow } from '../styles/servico'

export default class Login extends Component {

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <img className={styles.logo} src="static/logo.png" height="50px" alt="logo" id="logoAlia" />
                    <div className={styles.containerLogin}>
                        <div>
                            <h1>Login</h1>
                        </div>
                        <form cmethod="post" onSubmit={this.login}>
                            <div>
                                <input className={styles.input} type="text" name="email" placeholder="email" required />
                            </div>
                            <div>
                                <input className={styles.input} type="password" name="password" placeholder="senha" required />
                            </div>
                            <div id="error"></div>
                            <div>
                                <Link href='/inicio'>
                                    <a className={styles.button}>Entrar</a>
                                </Link>
                            </div>
                            <div className={styles.cadastro}>
                                <p>Ainda não tem uma conta?<Link href='/cadastro'><a> crie agora.</a></Link></p>
                            </div>
                        </form>
                    </div>
                    <div className={styles.voltar}>
                        <Link href="/">
                            <Arrow className="fas fa-arrow-left"></Arrow>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}