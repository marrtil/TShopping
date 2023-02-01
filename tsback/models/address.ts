import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./sequelize";
class Address extends Model {
  public readonly id!: number;
  public userId!: string;
  public postAddress!: string;
  public homeAddress!: string;
  public detailAddress!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Address.init(
  {
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    postAddress: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    homeAddress: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    detailAddress: {
      type: DataTypes.STRING(50),
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn("now"),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn("now"),
    },
  },
  {
    sequelize,
    modelName: "Address",
    tableName: "address",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
export default Address;
