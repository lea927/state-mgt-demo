import { useState } from "react";
import Child from "./Child";
import MiddleChild from "./MiddleChild";

function Parent() {
  // const money = 1250;

  {/* Add State */}
  const [money, setMoney] = useState(1000);
  const payBills = () => { setMoney(money - 500);};
  return (
    <>
      {/* Props */}
      {/* <Child money={money} /> */}

      {/* de-structuring */}
      {/* <MiddleChild money={money}/> */}

      {/* Add State */}
      <Child money={money} payBills={payBills}/>
    </>
  );
}

export default Parent;