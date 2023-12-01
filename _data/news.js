const axios = require('axios');
require('dotenv').config();

module.exports = async function() {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-11-01&sortBy=publishedAt&apiKey=${process.env.API_KEY}&pageSize=5`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }