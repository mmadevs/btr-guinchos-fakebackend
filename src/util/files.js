const fs = require('fs')
const axios = require('axios')

module.exports = {
  async downloadImage(url, path) {
    const res = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    })

    return new Promise((resolve, reject) => {
      res.data
        .pipe(fs.createWriteStream(path))
        .on('error', reject)
        .on('close', () => resolve(path))
    })
  },
}
