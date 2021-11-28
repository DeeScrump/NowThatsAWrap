const home = {
    getHome: async function(req, res) {
       try{
  const home = await req.body;
       } catch( error){
           console.log('Error: ', error.message);
       }
       console.log(home);
      return res.status(200).json(home);
  }
  }
  module.exports = home;