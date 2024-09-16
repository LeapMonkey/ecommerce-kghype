const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res) => {
	const { email, password, cfpassword, country, firstname, lastname, phone } = req.body;	
	if (!(email && password && cfpassword && country && firstname && lastname && phone)) {
		console.log("Check")
		return res.status(400).send("All input is required");
	}

	const oldUser = await UserModel.findOne({ email });
	if (oldUser) {
		return res.status(409).send("Already Exist. Please Login");
	}
	let encryptedPassword = await bcrypt.hash(password, 10);
	const user = {...req.body, password:encryptedPassword, cfpassword:encryptedPassword};
	const result = await new UserModel(user).save();
	return res.status(200).send({data:result});
};

exports.signIn = (req,res) => {
	const body = req.body;
	const { email, password } = req.body;
	if (!(email && password)) {
		res.status(400).send("All input is required");
	}
	const user = UserModel.find({email:body.email}, async (err, docs) => {
		if(err){
			console.log(err);
		}
		else{
			if(docs.length && (await bcrypt.compare(password, docs[0].password))){
				res.status(200).send({data:docs});
			}
		}
	});
}