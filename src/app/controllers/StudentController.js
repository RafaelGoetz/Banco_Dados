import StudentService from '../services/StudentService';
import Student from '../models/Student';

const service = new StudentService();

class StudentController {
  async index(request, response) {
    return response.json(await service.get());
  }

  async show(request, response) {
    const { id } = request.params;

    return response.json(await service.getById(id));
  }

  async store(request, response) {
    const { name, age, schoolClassId, birthdate } = request.body;

    //const user = await Student.create(request.body);

    /*const user = Student.build({
      name,
      age,
      school_class_id: schoolClassId,
      birthday,
    });

    await user.save()*/

    const user = await Student.create({
      name,
      age,
      school_class_id: schoolClassId,
      birthdate,
    })

    return response.json(user);
  }

  async update(request, response) {
    const { id } = request.params;
    const { nome, idade, turmaId, dataNascimento } = request.body;
    const result = await service.update(
      id,
      nome,
      idade,
      turmaId,
      dataNascimento
    );

    return response.json(result);
  }

  async delete(request, response) {
    const { id } = request.params;
    await service.delete(id);

    return response.sendStatus(202);
  }
}

export default new StudentController();
