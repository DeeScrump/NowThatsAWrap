
const contact = {
    getContact: async function(req, res) {
       try{
  const contact = await req.body;
       } catch( error){
           console.log('Error: ', error.message);
       }
       console.log(contact)
      return res.status(200).json(contact);
  }
  }
  module.exports = contact;
