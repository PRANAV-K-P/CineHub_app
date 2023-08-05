const axios = require('axios')

const baseUrl = process.env.OMDB_BASEURL;
const instance = axios.create({
    baseURL: baseUrl,
  });
module.exports=instance