import * as React from "react";
import { test } from "../api";

interface User {
  createdAt: Date;
  id: number;
  nickname: string;
  password: string;
  updatedAt: Date;
  userId: string;
}

const MyOrderRecord = () => {
  //   const [data, setData] = React.useState<User>();
  //   const handleLoad = async () => {
  //     setData(await test());
  //   };
  //   React.useEffect(() => {
  //     handleLoad();
  //     console.log(data);
  //   }, []);
  return <div>MYORDERRECORD</div>;
};

export default MyOrderRecord;
