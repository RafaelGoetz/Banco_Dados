import StudentGrade from '../models/StudentGrade';

class StudentGradeController {
  async index(request, response) {
    const result = await StudentGrade.findAll();

    return response.json(result);
  }

  async show(request, response) {
    const { studentId, gradeId } = request.params;
    const result = await service.getById(studentId, gradeId);

    return response.json(result);
  }

  async store(request, response) {
    const { grade, description, studentId, subjectId } = request.body;

    const grades = await StudentGrade.create({
      grade,
      description, 
      student_id: studentId, 
      subject_id: subjectId
    })

    response.json(grades)
  }

  async update(request, response) {
    const { studentId, gradeId } = request.params;
    const { nota, descricao, materiaId } = request.body;
    const result = await service.update(
      studentId,
      gradeId,
      nota,
      descricao,
      materiaId
    );

    return response.json(result);
  }

  async delete(request, response) {
    const { studentId, gradeId } = request.params;
    await service.delete(studentId, gradeId);

    return response.sendStatus(202);
  }
}

export default new StudentGradeController();
