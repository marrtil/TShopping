import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";
class User extends Model {
  public readonly id!: number;
  public nickname!: string;
  public userId!: string;
  public password!: string;
  public email!: string;
  public gender!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    nickname: {
      type: DataTypes.STRING(20),
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(2),
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
export default User;
