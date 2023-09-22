const fs = require('fs')

function getUrls() {
  const ip = require('ip').address('public')
  const protocol = process.env.PROTOCOL || 'http'
  const port = process.env.PORT || '3001'

  return {
    staticUrl: `${protocol}://${ip}:${port}`,
    localUrl: `http://localhost:${port}`,
    port,
  }
}

function getImageUrl({ type, id }) {
  // imagens // e.bebida_id
  const filename = `src/images/${type}/${id}.png`
  const { staticUrl } = getUrls()
  return fs.existsSync(filename)
    ? `${staticUrl}/static/${type}/${id}.png` //path.resolve(filename)
    : null
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = {
 

  async downloadImages(from, imagesObj) {
    const imagens = imagesObj
    for (let img of imagens) {
      try {
        if (img.imagem) {
          const fs = require('fs')
          const name = `src/images/${from}/${img.id}.png`
          const buffer = Buffer.from(img.imagem)
          fs.createWriteStream(name).write(buffer)
        }
      } catch (e) {
        console.error(e.message, e.stack, typeof img.imagem, img.imagem)
      }
    }
  },

  equals(a, b) {
    return String(a).toUpperCase() === String(b).toUpperCase()
  },

  getUrls: getUrls,
  getImageUrl: getImageUrl,

  isNEU(val) {
    return (
      // assim, nós também podemos verificar valores undefined. null == undefined = true
      // nós queremos que {} retorne false. não podemos usar !! porque !!{} retorna true
      // !!{} = true and !!{name:"yilmaz"} = true. !! não funciona com objetos
      !val ||
      val === null ||
      String(val).replace(/\s/g, '') === '' ||
      String(val).toLowerCase() === 'null' ||
      String(val).toLowerCase() === 'undefined' ||
      (Array.isArray(val) && val.length === 0) ||
      (typeof val === 'object' && Object.keys(val).length === 0)
    )
  },

  joinObj,
  join,
  sleep,
  removeAccents,
  removeConjuncoes,
}

function joinObj(obj) {
  let txt = ''
  if (obj) {
    for (let v of Object.values(obj)) {
      if (typeof v === 'object') {
        txt = [txt, joinObj(v)].filter(Boolean).join()
      } else {
        txt = [txt, v].filter(Boolean).join()
      }
    }
  }
  return txt
}

function join(arr, separator) {
  return arr
    .map(e => String(e))
    .filter(e => e !== '')
    .join(separator)
}

function removeAccents(txt) {
  return String(txt)
    .replace(/[ÀÁÂÃÄÅ]/gi, 'A')
    .replace(/[Ç]/gi, 'C')
    .replace(/[ÈÉÊË]/gi, 'E')
    .replace(/[ÌÍÎÏ]/gi, 'I')
    .replace(/[ÒÓÔÕÖ]/gi, 'O')
    .replace(/[ÙÚÛÜ]/gi, 'U')

    .replace(/[àáâãäå]/gi, 'a')
    .replace(/[ç]/gi, 'c')
    .replace(/[èéêë]/gi, 'e')
    .replace(/[ìíîï]/gi, 'i')
    .replace(/[òóôõö]/gi, 'o')
    .replace(/[ùúûü]/gi, 'u')
    .trim()
}

function removeConjuncoes(txt) {
  let _txt = String(txt).replace(/\s*\b(DE|DA|DO|QUE|NA|NO|EM|\s+O|\s+E|\s+A|OU|UM|UMA)\b(?!$)/, '')
  return _txt
}
