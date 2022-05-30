function descargarNuevosCliente() {
    return new Promise((resolve) => {
        console.log('Descargando nuevos cliente... espere...')

        setTimeout(() => {
            resolve('Los cliente fueron descargados')
        }, 3000)
    })
}

function descargarUltimosPedidos() {
    return new Promise((resolve) => {
        console.log('Descargando nuevos pedidos... espere...')

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000)
    })
}

async function app() {
    try {
        // const resultado = await descargarNuevosCliente();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(resultado)
        // console.log(pedidos)

        // Descargar al mismo tiempo (independientes)
        const resultado = await Promise.all([descargarNuevosCliente(), descargarUltimosPedidos()])
        console.log(resultado[0])
        console.log(resultado[1])
    } catch (e) {
        console.log(e)
    }
}

app()