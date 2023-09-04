const Food = ({food})=>{
    // 구조분해할당을 하고 id ,name만 쓰거나 평점 img방식으로 쓰거나 
    const {id,name,rating,image} = food;
    return(
        <div>
            <div>번호 : {id}</div>
            <div>이름 : {name}</div>
            <div>평점 : {food.rating}</div>
            <div><img src={food.image} style={{width:'100px',height:'100px'}} alt={food.name}></img></div>
        </div>
    )
}
export default Food;