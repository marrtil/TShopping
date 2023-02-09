import * as React from "react";
import { useState } from "react";

const PageButtons = ({allPage,pageSet}:any)=>{
    const changePage = (e:React.MouseEvent<HTMLButtonElement>) => {
        pageSet(e.currentTarget.innerHTML);
    }
return <>
<div id="pageButtons">
{Array(allPage).fill(0).map((_,i)=> {return <button className="pages" onClick={changePage}>{i+1}</button>})          
}
</div>
</>

}
export default PageButtons;