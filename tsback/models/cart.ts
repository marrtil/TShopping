import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./sequelize";
class Cart extends Model {
  public readonly id!: number;
  public userId!: string;
  public productId!: string;
  public count!: number;
  public size!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Cart.init(
  {
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    productId: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING(5),
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
    modelName: "Cart",
    tableName: "cart",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
export default Cart;
