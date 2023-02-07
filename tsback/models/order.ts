import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./sequelize";
class Order extends Model {
  public readonly id!: number;
  public userId!: string;
  public addressId!: string;
  public orderState!: number;
  public orderDate!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    addressId: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    orderState: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderDate: {
      type: DataTypes.DATE,
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
    modelName: "Order",
    tableName: "order",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
export default Order;
