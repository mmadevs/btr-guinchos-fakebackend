const { MyDDD } = require('./local')
const { isNEU, joinObj, join, removeConjuncoes, removeAccents } = require('./misc')

function base64ToBlob(str) {
  if (!str || str.length === 0) return null

  const byteArray = new Buffer.from(str.replace(/^[\w\d;:\/]+base64\,/g, ''), 'base64')

  return byteArray
}

async function blobStringToBlob(blobUrl) {
  const blob = await fetch(blobUrl).then(res => res.blob())
  return blob
}

function formatDateIso(d) {
  const worldDate = new Date(d)
  const time = worldDate.getTime()
  const tzo = worldDate.getTimezoneOffset()
  const min = 60
  const milli = min * 1000
  const stamp = time - tzo * milli
  const localDate = new Date(stamp)
  const localDateString = localDate.toISOString().replace(/T/, ' ').replace(/\..+/, '')
  return localDateString
}

function formatReal(valor) {
  const res = !isNaN(valor)
    ? Number.parseFloat(valor).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })
    : 'R$ 0,00'
  return res
}

function formatNumber(valor) {
  return valor.replace(/[^0-9]/gi, '')
}

function formatPhoneNumber(valor, manterDDD, manterDDI = false) {
  // Remove the Country code
  valor = valor.replace('+55', '')
  valor = valor.startsWith('55') && valor.length > 11 ? valor.replace(/^(55)/, '') : valor

  valor = valor.slice(0, 1) === '0' ? valor.slice(1, valor.length) : valor
  valor = formatNumber(valor)
  let _ddd, _num, _ddi
  _ddi = manterDDI ? '+55' : ''
  switch (valor.length) {
    case 11: //00 90000-0000
      _ddd = valor.slice(0, 2)
      _ddd = manterDDD === true || _ddd !== MyDDD ? _ddd + ' ' : ''
      _num = valor.slice(2, 7) + '-' + valor.slice(7)
      break
    case 10: //00 0000-0000
      _ddd = valor.slice(0, 2)
      _ddd = manterDDD === true || _ddd !== MyDDD ? _ddd + ' ' : ''
      _num = '9' + valor.slice(2, 6) + '-' + valor.slice(6)
      break
    case 9: //90000-0000
      _ddd = manterDDD === true ? MyDDD + ' ' : ''
      _num = valor.slice(0, 5) + '-' + valor.slice(5)
      break
    case 8: //0000-0000
      _ddd = manterDDD === true ? MyDDD + ' ' : ''
      _num = '9' + valor.slice(0, 4) + '-' + valor.slice(4)
      break
    default:
      _ddd = ''
      _num = valor
      break
  }

  valor = _ddi + _ddd + _num
  return valor
}

function formatEndereco(endereco, withTaxa = false, withLocal = true, withCep = true) {
  if (!isNEU(joinObj(endereco))) {
    if (typeof endereco === 'object' && !Array.isArray(endereco)) {
      let _taxa = withTaxa && withTaxa === true ? formatReal(endereco.taxa) : ''
      let _loc = withLocal && endereco.local ? endereco.local : ''
      let _log = [endereco.logradouro, endereco.complemento].filter(Boolean).join(', ')
      let _num = withLocal && endereco.numero ? endereco.numero : ''
      let _bai = endereco.bairro?.nome ?? ''
      let _ref = withLocal && endereco.referencia ? endereco.referencia : ''
      let _cep = withCep ? formatCEP(endereco.cep) : ''

      return join(
        [_taxa.toString(), _loc.toString(), _log.toString(), _num.toString(), _bai.toString(), _ref.toString(), _cep],
        ', '
      )
    } else {
      return endereco
    }
  } else {
    return ''
  }
}

function formatCEP(valor) {
  valor = String(valor)
  if (valor.length === 8) {
    return `${valor.slice(0, 5)}-${valor.slice(5, 8)}`
  } else {
    return valor
  }
}

function formatLitro(_ml) {
  const ml = Number(_ml)
  return ml >= 1000 ? ml / 1000 + 'L' : ml < 1 ? ml * 1000 + 'ML' : ml + (ml > 99 ? 'ML' : 'L')
}

function formatBebida(bebida, comTipo = false, comSabor = true, comTamanho = true) {
  return [
    comTipo ? bebida.tipo : '',
    bebida.nome,
    comSabor ? bebida.sabor : '',
    comTamanho ? formatLitro(bebida.tamanho) : '',
  ]
    .filter(e => e !== '')
    .join(' ')
    .trim()
    .toUpperCase()
}

const normalizarTexto = x =>
  removeConjuncoes(removeAccents(String(x)).toUpperCase())
    .replace(/[^0-9A-Z\s]/g, '')
    .trim()

module.exports = {
  base64ToBlob,
  blobStringToBlob,
  formatDateIso,
  formatNumber,
  formatPhoneNumber,
  formatEndereco,
  formatCEP,
  formatReal,
  formatLitro,
  formatBebida,
  normalizarTexto,
}
