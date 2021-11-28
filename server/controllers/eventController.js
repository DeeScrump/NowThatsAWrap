const event = {
    getEvent: async function(req, res) {
       try{
  const event = await req.body;
       } catch( error){
           console.log('Error: ', error.message);
       }
       console.log(event);
      return res.status(200).json(event);
  }
  }
  module.exports = event;