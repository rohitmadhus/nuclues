const mail = require('../service/mail')


var mailConfig = require('../config/mailConfig')

exports.sendMail = (req,res) =>{
    if(!req.body || !req.body.to || !req.body.from){
        res.status(400).send({message:"Contents cannot be empty"});
        return;
    }
    mail(mailConfig,req.body).then(
        res.send({message:`mail send to ${req.body.to}`})    
    ).catch(err =>
        console.log(err));
}