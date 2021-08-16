const IpfsHttpClient = require('ipfs-http-client')
const ipfs = IpfsHttpClient('http://127.0.0.1:5002')
const { globSource } = IpfsHttpClient

const upload = async () =>{
  console.log('Publishing on IPFS...')
  let upload = await ipfs.add(globSource(`${__dirname}/data/toUpload.txt`))
  const hash = upload.cid.toString()
  const link = 'https://ipfs.io/ipfs/' + hash
  
  console.log(link)
}

upload()