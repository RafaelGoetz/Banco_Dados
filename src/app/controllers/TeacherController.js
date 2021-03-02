import Teacher from '../models/Teacher';

class TeacherController {
  async index(request, response) {
    const result = await Teacher.findAll();

    return response.json(result);
  };

  async show(request, response){
    const { id } = request.params;
    const teacher = await Teacher.findByPk(id);

    return response.json(teacher)
  }

  async store(request, response) {
    const { name, age, city, state, country, subjectId } = request.body;

    const teacher = await Teacher.create({
      name, 
      age, 
      city, 
      state, 
      country, 
      subject_id: subjectId,
    })

    response.json(teacher)
  }

  
  async update(request, response) {
    const { id } = request.params;
    const { name, age, city, state, country, subjectId } = request.body;

    const teacher = await Teacher.update(
      {name, age, city, state, country, subjectId},
      { 
        where: {
        id,
      },
      returning: true,
    });

    response.json(teacher)  
  }
  
  async delete(request, response) {
    const { id } = request.params;

    await Teacher.destroy({
      where: {
        id,
      }
    })

    return response.sendStatus(202);
  }

  
} 

export default new TeacherController();