const products = [
    { id: '1', name: 'Gorra', price: 3000, stock: 100, category: 'unisex', picture: '/assets/products/uniqlo_gorra.jpg', description: 'Gorra de Roger Federer.' },
    { id: '2', name: 'Remera', price: 6000, stock: 30, category: 'hombres', picture: '/assets/products/uniqlo_remera.jpg', description: 'Remera de la linea AIRism.' },
    { id: '3', name: 'Pollera', price: 4000, stock: 40, category: 'mujeres', picture: '/assets/products/uniqlo_pollera.jpg', description: 'Pollera para Mujeres.' },
    { id: '4', name: 'Campera', price: 8000, stock: 10, category: 'unisex', picture: '/assets/products/uniqlo_campera.jpg', description: 'Campera para el invierno.' },
]

export const gFetch = () => {
    return new Promise((res, rej) => {

        setTimeout(() => {
            res(products)
        }, 2000)

    })
}