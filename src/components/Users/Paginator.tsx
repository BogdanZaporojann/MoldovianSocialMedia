import React, {useState} from "react";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}



export const Paginator: React.FC<PropsType> = ({totalUsersCount,pageSize,currentPage,onPageChanged,portionSize=10}) => {




    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages: Array<number> = [];

    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber,setPortionNumber] = useState(2);
    let leftPortionPageNumber = (portionNumber - 1)*portionSize+1;
    let rightPortionPageNumber = portionNumber*portionSize;

    return(
        <div>
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