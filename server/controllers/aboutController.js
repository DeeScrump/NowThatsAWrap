
const about = {
  getAbout: async function(req, res) {
     try{
const about = await req.body;
     } catch( error){
         console.log('Error: ', error.message);
     }
     console.log(about)
    return res.status(200).json(about);
}
}
module.exports = about;