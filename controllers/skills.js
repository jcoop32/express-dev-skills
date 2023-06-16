const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
}

function index(req, res){
    res.render('skills/index' , {
        skills: Skill.getAll()
    });
}

function show(req, res){
    res.render('skills/show' , {
        skills: Skill.getOne(req.params.id)
    });
}
//renders new skill form page
function newSkill(req, res){
    res.render('skills/new', {
        title: 'New Skill',
    })
}

//runs the create function passing the body of the form as the param
function create(req, res){
    Skill.create(req.body);
    //redirects to index
    res.redirect('/skills')
}

//runs deleteOne function with id as param, then redirects to index
function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}

