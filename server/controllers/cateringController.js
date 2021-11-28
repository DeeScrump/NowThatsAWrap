const catering = {
    getCatering: async function(req, res) {
       try{
  const catering = await req.body;
       } catch( error){
           console.log('Error: ', error.message);
       }
       console.log(catering);
      return res.status(200).json(catering);
  }
  }
  module.exports = catering;