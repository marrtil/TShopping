import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./sequelize";
class Address extends Model {
  public readonly id!: number;
  public userId!: string;
  public zoneCode!: string;
  public address!: string;
  public addressDetail!: string;
  public deliveryMemo!: string;
  public recipient!: string;
  public phone!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Address.init(
  {
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    zoneCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    addressDetail: {
      type: DataTypes.STRING(50),
    },
    deliveryMemo: {
      type: DataTypes.STRING(50),
    },
    recipient: {
      type: DataTypes.STRING(10),
    },
    phone: {
      type: DataTypes.STRING(15),
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
