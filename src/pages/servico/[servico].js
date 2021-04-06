import { useRouter } from 'next/router'
import Link from 'next/link'
import { render } from 'react-dom'
import { Container1, Titulo, Container2, Arrow, Subtitulo, Texto, Button, IconAjuda, ButtonAjuda } from '../../styles/servico'

export default function Servico() {
    const router = useRouter()
    const url = String('/api/servico/' + router.query.servico)
    fetch(url)
        .then((response) => response.text())
        .then((result) => result.split('|'))
        .then((result) => {
            render(result[0], document.getElementById('titulo'))
            render(result[1], document.getElementById('texto'))
        })
    return (
        <div>
            <Container1>
                <Titulo id='titulo'></Titulo>
            </Container1>
            <Container2>
                <div>
                    <div>
                        <Link href="/">
                            <Arrow className="fas fa-arrow-left"></Arrow>
                        </Link>
                    </div>
                    <Subtitulo>Este é o serviço que a Alia vai revolucionar com você? Entenda este serviço.</Subtitulo>
                    <div>
                        <Texto id='texto'></Texto>
                    </div>
                    <Subtitulo>Este é o serviço que você procura? Se sim, clique em "continuar".</Subtitulo>
                    <Link href="/login">
                        <Button>Continuar</Button>
                    </Link>
                </div>
            </Container2>
            <ButtonAjuda>
                <div>
                    <IconAjuda className="fas fa-question"></IconAjuda>
                </div>
                <div>
                    <p>Me ajuda alia</p>
                </div>
            </ButtonAjuda>
        </div>
    )
}