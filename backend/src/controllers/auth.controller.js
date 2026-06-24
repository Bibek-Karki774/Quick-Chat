async function signup(req, res){
    const {email, fullname, password} = req.body
    try{

    } catch (){
        
    }
    res.send("This is the signup page")
}


async function login(req, res){
     res.send("This is login page")
}


async function logout(req, res){
     res.send("This is logout page")
}

module.exports = {
    signup,
    login,
    logout
}