import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./sequelize";
class Review extends Model {
  public readonly id!: number;
  public userId!: string;
  public productId!: string;
  public rating!: number;
  public size!: string;
  public color!: string;
  public content!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Review.init(
  {
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    productId: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(20),
    },
    content: {
      type: DataTypes.STRING(200),
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
    modelName: "Review",
    tableName: "review",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
export default Review;
