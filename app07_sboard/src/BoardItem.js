
const BoardItem = ({item,deleteBoard})=>{
    return(
        <div>
            <h3>Board Item</h3>
            <div>아이디 : {item.num}</div>
            <div>이름 : {item.title}</div>
            <div>내용 : {item.content}</div>
            <button onClick={()=>deleteBoard(item.num)} >삭제</button>
            <hr/>
        </div>
    )
}
export default BoardItem;