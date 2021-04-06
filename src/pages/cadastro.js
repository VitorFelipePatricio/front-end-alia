import React, { Component } from 'react'
import { cpfMask, dataMask, numeroMask } from './components/mask'
import { Container1, Container2, Titulo, Arrow, Subtitulo, Button, ButtonAjuda, IconAjuda, ContainerInput, Input } from '../styles/cadastro'
import Link from 'next/link'

export default class DadosPessoais extends Component {
    constructor(props) {
        super(props)
        this.state = { cpf: '', birth: '', number: '' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        if (e.target.name === 'cpf') {
            this.setState({ cpf: cpfMask(e.target.value) })
        } else if (e.target.name === 'birth') {
            this.setState({ birth: dataMask(e.target.value) })
        } else {
            this.setState({ number: numeroMask(e.target.value) })
        }
    }

    render() {
        return (
            <div>
                <Container1>
                    <Titulo>Olá, vamos iniciar o seu cadastro</Titulo>
                </Container1>
                <Container2>
                    <form onSubmit={this.armazenarDados}>
                    <div>
                        <Link href="/">
                            <Arrow className="fas fa-arrow-left"></Arrow>
                        </Link>
                    </div>
                    <Subtitulo>Precisamos de algumas informações para realização do seu cadastro. Preencha todos os campos corretamente. Todas as informações são importantes para a sua experiência com a Alia.</Subtitulo>
                        <ContainerInput>
                            <Input placeholder="Nome completo" name="name" type="text" required />
                        </ContainerInput>
                        <ContainerInput marginTop='20px'>
                            <Input placeholder="Número" name="number" maxLength='10' type="text" required value={this.state.number} onChange={this.handleChange} />
                        </ContainerInput>
                        <ContainerInput marginTop='20px'>
                            <Input  placeholder="Email" type="email" name="email" required />
                        </ContainerInput>
                        <ContainerInput marginTop='20px'>
                            <Input  placeholder="Senha" type="password" name="password" required />
                        </ContainerInput>
                        <ContainerInput marginTop='20px'>
                            <Input placeholder="CPF" name="cpf" maxLength='14' type="text" required value={this.state.cpf} onChange={this.handleChange} />
                        </ContainerInput>
                        <ContainerInput marginTop='20px'>
                            <Input placeholder="Data de nascimento" name="birth" type="text" required value={this.state.birth} onChange={this.handleChange} />
                        </ContainerInput>
                        <ContainerInput marginTop='20px'>
                            <div>
                                <input type='checkbox' id="autorizacao" name="autorizacao" />
                                <label htmlFor="autorizacao">Deseja receber mensagens via WhatsApp.</label>
                            </div>
                        </ContainerInput>
                        <div>
                            <Button type="submit">cadastrar-se</Button>
                        </div>
                    </form>
                </Container2>
            </div>
        )
    }
}