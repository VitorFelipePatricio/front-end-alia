import React, { Component } from 'react'
import Image from 'next/image'
import { ImageDiv, Container, SearchIcon, SearchDiv, SearchInput, Table, ContainerCard } from '../styles/home'
import px2vw from '../utils/px2vw'
import Router from 'next/router'

export default class Index extends Component {
    state = {
        servico: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        Router.push(e.target.value)
    }

    render() {
        return (
            <div>
                <Image
                    src='/static/casa.png'
                    alt="Picture of the author"
                    width={px2vw(900)}
                    height={px2vw(400)}
                    layout='responsive'
                    className={ImageDiv}
                >
                </Image>
                <Container>
                    <SearchDiv>
                        <Table>
                            <tbody>
                                <tr>
                                    <th>
                                        <SearchIcon>
                                            <i className="fas fa-search"></i>
                                        </SearchIcon>
                                    </th>
                                    <th>
                                        <SearchInput id="servico" name="servico" value={this.state.servico} onChange={this.handleChange}>
                                            <option >Qual serviço vamos revolucionar hoje?</option>
                                            <option value="servico/1">Lincenciamento do imóvel construído</option>
                                            <option value="servico/2">Lincenciamento do projeto</option>
                                            <option value="servico/3">Laudo de vistoria</option>
                                            <option value="servico/4">Levantamento topográfico</option>
                                            <option value="servico/5">Levantamento arquitetônico</option>
                                            <option value="servico/6">Projeto de reforma</option>
                                            <option value="servico/7">Projeto arquitetônico</option>
                                            <option value="servico/8">Projeto complementar de acessibilidade</option>
                                            <option value="servico/9">Projeto de instalações hidrossanitárias</option>
                                            <option value="servico/10">Projetos de instalações elétricas</option>
                                            <option value="servico/11">Relatório de acessibilidade</option>
                                            <option value="servico/12">Relatório de impacto de vizinhaça - RIV</option>
                                            <option value="servico/13">Relatório de impacto de tráfego urbano - RITUR</option>
                                            <option value="servico/14">Memorial Descritivo</option>
                                        </SearchInput>
                                    </th>
                                </tr>
                            </tbody>
                        </Table>
                    </SearchDiv>
                </Container>
            </div>
        )
    }
}
