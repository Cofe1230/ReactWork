const Food = (props)=>{
    return(
        <div>
            <div>번호 : {props.food.id}</div>
            <div>이름 : {props.food.name}</div>
            <div>평점 : {props.food.rating}</div>
            <div><img src={props.food.image}></img></div>
        </div>
    )
}
export default Food;