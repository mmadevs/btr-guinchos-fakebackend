const pizzasController = require('../controllers/pizzasController')
const { equals } = require('./misc')

module.exports = {
  formatDate(d) {
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d.toLocaleTimeString('pt-BR', {
      hourCycle: 'h23',
    })}`
  },

  getTipo(tipo) {
    tipo = String(tipo)
    return tipo === '0' ? 'CAIXA' : tipo === '1' ? 'ENTREGA' : tipo === '2' ? 'APLICATIVO' : 'TIPO'
  },
  getTipoNum(tipo) {
    tipo = String(tipo)
    return tipo === 'CAIXA' ? '0' : tipo === 'ENTREGA' ? '1' : tipo === 'APLICATIVO' ? '2' : null
  },

  getValorPagamentos(pedido) {
    return !pedido?.pagamentos ? 0 : Number(pedido.pagamentos.reduce((a, b) => a + (Number(b.valorPago) ?? 0), 0))
  },

  getValorPago(pedido) {
    const res = pedido?.pagamentos?.filter(e => e.status === 1)?.reduce((a, b) => a + Number(b.valorPago), 0) || 0
    return Number(res)
  },

  getItemDescricao(item) {
    if (item.tipo === 0) {
      return `(${item.pizza.tamanho.id}) ${item.pizza.tamanho.nome}`
    } else if (item.tipo === 1) {
      const d = [item.bebida.nome, item.bebida.sabor, item.bebida.tamanho].filter(e => e !== '').join(' ')
      return `(${item.bebida.id}) ${d}`
    } else if (item.tipo === 2) {
      return `(${item?.hamburguer?.id || '0'}) ${item?.hamburguer?.nome || 'HAMBURGUER'}`
    } else if (item.tipo === 3) {
      return `(${item.outro.id}) ${item.outro.nome}`
    } else {
      return `(-1) ITEM DESCONHECIDO`
    }
  },

  encryptIngredientes(finalIngredientesArray) {
    const finalIngredientesString = finalIngredientesArray
      .map(finalIngrediente => {
        const currentTipoAdd = String(finalIngrediente.tipoAdd).toUpperCase()
        const tipoAddNumber = [0, '0', 'COM'].includes(currentTipoAdd)
          ? 0
          : [1, '1', 'SEM'].includes(currentTipoAdd)
          ? 1
          : [2, '2', 'POUCO'].includes(currentTipoAdd)
          ? 2
          : [3, '3', 'BASTANTE'].includes(currentTipoAdd)
          ? 3
          : 0

        return `(${finalIngrediente.id})[${tipoAddNumber}]`
      })
      .join(',')

    return finalIngredientesString
  },

  getIngredientesTipoAdd(ingrOriginaisStrOuArray, ingrFinaisStr) {
    if (!ingrFinaisStr) return []
    const Arrayzer = str => String(str).replace(' ', '').split(',')
    const Id = ingrStr =>
      ingrStr
        .match(/\(\d+\)/g)[0]
        .toString()
        .replace(/[^\d]/g, '')

    const TipoAdd = ingrStr =>
      ingrStr
        .match(/\[+[0-9]+\]+/g, '')
        .toString()
        .replace(/[^0-9]/g, '')

    const ingrFinais = Arrayzer(ingrFinaisStr).map(x => ({ id: Id(x), tipoAdd: TipoAdd(x) }))
    const ingrOriginais = Array.isArray(ingrOriginaisStrOuArray)
      ? ingrOriginaisStrOuArray
      : Arrayzer(ingrOriginaisStrOuArray)

    const r = pizzasController.ingredientes
      .filter(x => ingrFinais.map(i => String(i.id)).includes(String(x.id)))
      .map(i => {
        const f = ingrFinais.find(x => equals(x.id, i.id))
        const o = ingrOriginais.find(x => equals(x.id, i.id))
        return {
          ...o,
          ...i,
          tipoAdd:
            f.tipoAdd === '0' && !o
              ? 'COM'
              : f.tipoAdd === '1' && !!o
              ? 'SEM'
              : f.tipoAdd === '2'
              ? 'POUCO'
              : f.tipoAdd === '3'
              ? 'BASTANTE'
              : undefined,
        }
      })

    return r
  },
}
