import { Container1, Container2, ContainerResumo, Card, TituloCard, TextCard, Titulo, SubTitulo, ContainerTitulo, ButtonAjuda, IconAjuda } from '../styles/resumo'

export default function Resumo() {
    return (
        <div>
            <Container1>
                <ContainerTitulo>
                    <div>
                        <SubTitulo>Segunda feira, 09 de maio</SubTitulo>
                    </div>
                    <div>
                        <Titulo>Pedido Realizado</Titulo>
                    </div>
                    <div>
                        <SubTitulo>
                            O seu pedido foi enviado com sucesso.
                            Em instante entraremos em contato para
                            confirmação dos dados do seu pedido.
                        </SubTitulo>
                    </div>
                </ContainerTitulo>
            </Container1>
            <Container2>
                <ContainerResumo>
                    <h2>Resumo</h2>
                    <Card>
                        <TituloCard>Serviço</TituloCard>
                        <TextCard>Levantamento arquitetônico</TextCard>
                        <TextCard>Não, não sou o proprietário</TextCard>
                        <TextCard>Sim, eu preciso</TextCard>
                        <TextCard>É urgente</TextCard>
                    </Card>
                    <Card marginTop='20px'>
                        <TituloCard>Cliente</TituloCard>
                        <TextCard>Victor Alves Leite</TextCard>
                        <TextCard>Nascimento 01.06.2001</TextCard>
                        <TextCard>CPF 000.000.000--00</TextCard>
                        <TextCard>Celular 00 00000-0000</TextCard>
                    </Card>
                    <Card marginTop='20px'>
                        <TituloCard>Endereço</TituloCard>

                        <TextCard>Rua William Marinho de Leiros Número 246</TextCard>
                        <TextCard>Pajuçara; Apartamento 101</TextCard>
                    </Card>
                </ContainerResumo>
                <ButtonAjuda>
                    <div>
                        <IconAjuda className="fas fa-question"></IconAjuda>
                    </div>
                    <div>
                        <p>Me ajuda alia</p>
                    </div>
                </ButtonAjuda>
            </Container2>
        </div >
    )
}