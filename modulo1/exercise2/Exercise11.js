// 11. Agrupando Elementos com forEach

let pedidos = [
    {
        cliente: "Junior",
        produto: "Pastel de Carne",
        quantidade: 3
    },
    {
        cliente: "Thais",
        produto: "Pastel de Frango",
        quantidade: 5
    },
    {
        cliente: "Samuel",
        produto: "Mini Churros",
        quantidade: 6
    },
    {
        cliente: "Junior",
        produto: "Mini Pizza",
        quantidade: 20
    }
]

let totalPorCliente = {}

pedidos.forEach(chave => {
    if (totalPorCliente[chave.cliente]){
        totalPorCliente[chave.cliente] += chave.quantidade
    } else {
        totalPorCliente[chave.cliente] = chave.quantidade
    }
})

for (let chave in totalPorCliente){
    console.log(`${chave} comprou ${totalPorCliente[chave]} itens.`)
}
