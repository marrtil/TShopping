import * as React from "react";

const PaySelect = ({ handleChange }: any) => {
  return (
    <div>
      <div>결제 수단</div>
      <table>
        <tr>
          <td>
            <input
              value="일반결제"
              name="paySelect"
              type="button"
              onClick={handleChange}
              className="paySelectBtn"
            ></input>
          </td>
          <td>
            <input
              value="kakaoPay"
              name="paySelect"
              type="button"
              onClick={handleChange}
              className="paySelectBtn"
            ></input>
          </td>
          <td>
            <input value="toss" name="paySelect" type="button" onClick={handleChange} className="paySelectBtn"></input>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PaySelect;
