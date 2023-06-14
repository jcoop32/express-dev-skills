const skills = [
    {id: 23131, skill: 'HTML', mastered: true},
    {id: 64537, skill: 'CSS', mastered: false},
    {id: 84938, skill: 'Javascript', mastered: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
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