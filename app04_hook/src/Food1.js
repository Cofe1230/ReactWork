
const Food1 = ({id,name,image,rating})=>{
    return(
        <div>
            <div>번호 : {id}</div>
            <div>이름 : {name}</div>
            <div>평점 : {rating}</div>
            <div><img src={image} style={{width:'100px',height:'100px'}} alt={name}></img></div>
        </div>
    )
}
export default Food1;