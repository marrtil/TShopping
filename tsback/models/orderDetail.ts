import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./sequelize";
class OrderDetail extends Model {
  public readonly id!: number;
  public orderId!: string;
  public productId!: string;
  public productName!: string;
  public size!: string;
  public price!: number;
  public count!: number;
  public color!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

OrderDetail.init(
  {
    orderId: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    productId: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(30),
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
    modelName: "OrderDetail",
    tableName: "orderDetail",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
export default OrderDetail;
