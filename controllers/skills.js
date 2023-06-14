const Skill = require('../models/skill')

module.exports = {
    index,
    // show,
}

function index(req, res){
    res.render('skills/index' , {
        skills: Skill.getAll()
    });
}

// function show(){
//     return Skill.getOne(req.params.id)
// }