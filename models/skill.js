const skills = [
    {id: 23131, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png', skill: 'HTML', mastered: false},
    {id: 64537, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png', skill: 'CSS', mastered: false},
    {id: 84938, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png', skill: 'Javascript', mastered: false},
    {id: 65635, img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', skill: 'Git', mastered: false},
    {id: 89324, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png', skill: 'Node.js', mastered: false},
    {id: 13422, img: 'https://expressjs.com/images/express-facebook-share.png', skill: 'Express.js', mastered: false},
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id){
    //url parans are strings - convert to a number
    id = parseInt(id)
    //the Array.prototype.find iterator method is 
    //ideal for finding objs within an array
    return skills.find(todo => todo.id === id)
  }

  function create(skill){
    //gives a 5 digit id based on time
    skill.id = Date.now() % 100000;
    //sets mastered to false by default
    skill.mastered = false;
    //pushes new skill into array
    skills.push(skill);
  }

  function deleteOne(id){
    //takes in id of skill object
    id = parseInt(id);
    //finds index of id passed through
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1)
  }