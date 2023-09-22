const { formatDateIso } = require('./format')

function getDataInic(d) {
  let r = formatDateIso(d).split(' ')[0] + ' 05:00:00'
  return r
}
function getDataFim(d) {
  let r = new Date(getDataInic(d))
  r.setDate(r.getDate() + 1)
  r = r.toISOString().split('T')[0] + ' 04:59:59'
  return r
}
function getDashStatus(tipo) {
  tipo = String(tipo)
  return tipo === '0'
    ? 'FILA'
    : tipo === '1'
    ? 'PREPARANDO'
    : tipo === '2'
    ? 'ASSANDO'
    : tipo === '3'
    ? 'PRONTO'
    : 'SEM STATUS'
}
function getDashStatusNumber(tipo) {
  if (!isNaN(Number(tipo))) return Number(tipo)
  tipo = String(tipo)
  return tipo === 'FILA' ? 0 : tipo === 'PREPARANDO' ? 1 : tipo === 'ASSANDO' ? 2 : tipo === 'PRONTO' ? 3 : null
}

function getAllDashStatus(pizzas) {
  return pizzas.map(p => ({ id: p.id, status: p.status }))
}

function today() {
  const data = new Date()

  const dataOntem = new Date()
  dataOntem.setDate(data.getDate() - 1)

  let dataInic = null,
    dataFim = null

  if (data.getHours() < 5) {
    dataInic = getDataInic(dataOntem) // = dataOntem
    dataFim = getDataFim(dataOntem) // = dataHoje
  } else {
    dataInic = getDataInic(data)
    dataFim = getDataFim(data)
  }
  return { dataInic, dataFim }
}

function getPizzasAgrupadas(pizzas) {
  let grupos = []

  for (let p of pizzas) {
    //pizza
    let achou = false
    for (let g of grupos) {
      if (
        p.pedido.id === g.pedido.id &&
        p.tamanho === g.tamanho &&
        p.descricao === g.descricao &&
        p.observacoes === g.observacoes &&
        Number(p.valor) * Number(g?.ids?.length ?? 1) === Number(g.valor) &&
        p.status === g.status &&
        (p.data.getTime() - g.data.getTime()) / 1000 / 60 < 1 //se a diferença de tempo for menor que 1min entre eles
      ) {
        if (g.id) {
          g.ids = [g.id]
        }
        g.ids = [...(g.ids ?? []), p.id]
        g.valor += p.valor
        delete g.id
        delete g.arquivado
        achou = true
        break
      }
    }
    if (!achou) {
      const { arquivado, ...rest } = p.pedido
      grupos.push({ ...p, pedido: { ...rest } })
    }
  }
  return grupos.reverse()
}

module.exports = {
  getDataInic,
  getDataFim,
  getDashStatus,
  getDashStatusNumber,
  getAllDashStatus,
  today,
  getPizzasAgrupadas,
}
