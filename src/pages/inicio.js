import React, { Component } from 'react'
import Link from 'next/link'
import { Container, Titulo, ContainerTexto, Texto, ButtonAjuda, IconAjuda, Arrow } from '../styles/inicio'

export default class Inicio extends Component {
    render() {
        return (
            <Container>
                <ContainerTexto>
                    <div>
                        <Titulo>Para entender melhor o seu serviço, faremos algumas perguntas.</Titulo>
                    </div>
                    <div>
                        <Texto>
                            Nós também não curtimos questionários,
                            mas ele auxiliará o profissional a entender
                            sua necessidade e realizar o melhor serviço
                        </Texto>
                    </div>
                </ContainerTexto>
                <ButtonAjuda>
                    <div>
                        <IconAjuda className="fas fa-question"></IconAjuda>
                    </div>
                    <div>
                        <p>Me ajuda alia</p>
                    </div>
                </ButtonAjuda>
                <Link href='/questionario/1'>
                    <Arrow className="fas fa-arrow-right"></Arrow>
                </Link>
            </Container>
        )
    }
}