
const online = {
    getOnline: async function(req, res) {
       try{
  const online = await req.body;
       } catch( error){
           console.log('Error: ', error.message);
       }
       console.log(online)
      return res.status(200).json(online);
  }
  }
  module.exports = online;