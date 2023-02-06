import * as React from "react";
import { Link } from "react-router-dom";
import { salePrice } from "./CartForm";
import { cartOut } from "./orderApi";

const CartTable = ({ cartInfo, handleLoad, handleChange }: any) => {
  const btnPM = (e: React.MouseEvent<HTMLButtonElement>) => {
    const a = e.currentTarget;
    var modInfo = [...cartInfo!];
    if (a.innerHTML == "+") {
      modInfo[Number(a.value)].count += 1;
    } else if (a.innerHTML == "-" && modInfo[Number(a.value)].count > 1) {
      modInfo[Number(a.value)].count -= 1;
    }
    handleChange(modInfo);
  };

  const delInfo = async (e: React.MouseEvent<HTMLLabelElement>) => {
    var index = e.currentTarget.id;
    await cartOut(index);
    handleLoad();
  };
  return (
    <div id="cartTable">
      <table>
        <thead>
          <tr>
            <th colSpan={2} id="productInfo">
              상품정보
            </th>
            <th>가격</th>
            <th>수량</th>
            <th>합계</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cartInfo &&
            cartInfo.map((info: any, index: any) => {
              return (
                <>
                  <tr className="cartList">
                    <td className="cartImage" rowSpan={2}>
                      <Link to={`/productForm/${info.productId}`}>
                        <img src={info.image} alt={info.name} width="200" />
                      </Link>
                    </td>
                    <td className="cartName">
                      <div className="productName">{info.name}</div>

                      <div className="cartExplain">
                        {info.color}&nbsp;&nbsp;사이즈:{info.size}
                      </div>
                    </td>
                    <td className="cartPrice">
                      <div>
                        {" "}
                        {info.sale > 0 ? (
                          <>
                            <del>{"₩" + info.price.toLocaleString("ko-KR")}</del>
                            &nbsp;
                            {"₩" + salePrice(info).toLocaleString("ko-KR")}
                          </>
                        ) : (
                          info.price.toLocaleString("ko-KR")
                        )}
                      </div>
                    </td>
                    <td className="cartCount">
                      {" "}
                      <button onClick={btnPM} value={index} className="btnPM">
                        -
                      </button>
                      <input type="text" className="countInput" value={info.count} />
                      <button onClick={btnPM} value={index} className="btnPM">
                        +
                      </button>
                    </td>
                    <td width="150" className="total">
                      {"￦" + (info.count * salePrice(info)).toLocaleString("ko-KR")}
                    </td>
                    <td width="100">
                      <label id={String(info.id)} onClick={delInfo} className="deleter">
                        x
                      </label>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
