import { useRouter } from 'next/router'
import { render } from 'react-dom'
import Link from 'next/link'
import { Container1, Titulo, Container2, Arrow, Subtitulo, Input, ContainerInput, Button, ButtonAjuda, IconAjuda} from '../../styles/questionario'
import { ContainerTitulo } from '../../styles/resumo'

export default function Questionario() {
    const router = useRouter()
    const url = String('/api/questionario/' + router.query.servico)
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            render(result.pergunta, document.getElementById('pergunta')),
                render(result.subPergunta, document.getElementById('subPergunta'))
        })
    return (
        <div>
            <Container1>
                <Titulo id='pergunta'></Titulo>
            </Container1>
            <Container2>
                <div>
                    <div>
                        <Link href="/">
                            <Arrow className="fas fa-arrow-left"></Arrow>
                        </Link>
                    </div>
                    <Subtitulo id='subPergunta'></Subtitulo>
                </div>
                <form>
                    <ContainerInput>
                        <Input width='100%' type='text' placeholder='Digite seu nome'></Input>
                    </ContainerInput>
                    <ContainerInput marginTop='20px'>
                        <Input name='radio' type='radio'></Input>
                        <label htmlFor='radio'>Escolha a</label>
                    </ContainerInput>
                    <ContainerInput marginTop='20px'>
                        <Input name='radio' type='radio'></Input>
                        <label htmlFor='radio'>Escolha B</label>
                    </ContainerInput>
                    <ContainerInput marginTop='20px'>
                        <Input type='file'></Input>
                    </ContainerInput>
                </form>
                <Link href="/resumo">
                    <Button>Continuar</Button>
                </Link>
                <ButtonAjuda>
                    <div>
                        <IconAjuda className="fas fa-question"></IconAjuda>
                    </div>
                    <div>
                        <p>Me ajuda alia</p>
                    </div>
                </ButtonAjuda>
            </Container2>
        </div>
    )
}

