import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./sequelize";
class ViewedGoods extends Model {
  public readonly id!: number;
  public userId!: string;
  public productId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ViewedGoods.init(
  {
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    productId: {
      type: DataTypes.STRING(10),
      allowNull: false,
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
    modelName: "ViewedGoods",
    tableName: "viewedGoods",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
export default ViewedGoods;
