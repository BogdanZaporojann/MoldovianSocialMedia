import styles from "./Paginator.module.css";
import React, {useState} from "react";



export const Paginator = ({totalUsersCount,pageSize,currentPage,onPageChanged,portionSize=10}) => {




    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber,setPortionNumber] = useState(2);
    let leftPortionPageNumber = (portionNumber - 1)*portionSize+1;
    let rightPortionPageNumber = portionNumber*portionSize;

    return(
        <div>

            {/*{pages.map( (page)=>{*/}
            {/*    return <span className={currentPage === page && styles.selectedPage}*/}
            {/*                 onClick={(e) => onPageChanged(page)}>{page}</span>*/}
            {/*})}*/}
            <div>

                {portionNumber > 1 && <button onClick={()=>setPortionNumber(portionNumber-1)}>PREV</button>}
                {pages
                    .filter(p=>p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map(p=><span onClick={()=>onPageChanged(p)} key={p}>{p}</span>)}

                {portionNumber<portionCount && <button onClick={()=>setPortionNumber(portionNumber+1)}>NEXT</button>}
            </div>

        </div>
    );
}