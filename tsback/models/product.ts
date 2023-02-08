import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./sequelize";
class Product extends Model {
  public readonly id!: number;
  public name!: string;
  public gender!: string;
  public kind!: string;
  public size!: string;
  public color!: string;
  public image!: string;
  public price!: number;
  public discount!: number;
  public count!: number;
  public sales!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    kind: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(100),
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sales: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
    modelName: "Product",
    tableName: "product",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
export default Product;
