import Sequelize, { Model } from 'sequelize';

class StudentGrade extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        grade: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        student_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'students',
            key: 'id',
          },
        },
        subject_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'subjects',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        schema: 'school',
        tableName: 'students_grades',
      }
    );

    return this;
  }
}

export default StudentGrade;
