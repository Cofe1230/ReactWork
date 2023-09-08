import BoardItem from "./BoardItem";

const BoardList = ({lists,deleteBoard})=>{
    return(
        <div>
            {
                lists.map((board)=>{
                    return(
                        <BoardItem key={board.num} item={board} deleteBoard={deleteBoard}/>
                    )
                })
            }
        </div>
    )
}
export default BoardList;