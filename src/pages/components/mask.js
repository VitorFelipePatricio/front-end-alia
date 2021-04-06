export const cpfMask = value => {
    return value.toString()
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
}

export const dataMask = value => {
    return value.toString()
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1')
}

export const numeroMask = value => {
    return value.toString()
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
}

export default cpfMask