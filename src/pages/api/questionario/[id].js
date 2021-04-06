export default function hello(req, res) {
    const servico =
    {
        pergunta: 'Testando uma pergunta',
        subPergunta: 'Não queremos te incomodar. Qual é sua preferencia de dia para fazermos uma visita técnica, se necessário?',
    }

    res.status(200).json(servico)
}