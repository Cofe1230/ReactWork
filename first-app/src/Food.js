const mydata = {
    "myfood" : [
        {
            name : "햄버거",
            price : "5000원",
            buy : "배달"
        },
        {
            name : "도시락",
            price : "6000워",
            buy : "포장"
        },
        {
            name : "커피",
            price : "3000원",
            buy : "매장"
        }
    ]
}
const myphone = {
    "phone" : [
        {
            name : "아이폰",
            ram : "6gb",
            touch : "yes",
            face : "yes"
        },
        {
            name : "갤럭시 s22",
            ram : "8gb",
            touch : "no",
            face : "yes"
        },
        {
            name : "갤럭시 z",
            ram : "6gb",
            touch : "no",
            face : "no"
        },
        {
            name : "픽셀5",
            ram : "6gb",
            touch : "yes",
            face : "yes"
        }
    ]
}
function Food(){
    return(
        <div>
            <h1>Food 컴포넌트(음식)</h1>
            {
                mydata.myfood.map((food, i)=>{
                    console.log(i);
                    return (
                        <div key={i}>
                            이름 : {food.name}<br/>
                            가격 : {food.price}<br/>
                            방법 : {food.buy}<br/><br/>
                        </div>
                    )
                })
            }
            <h1>Food 컴포넌트(스마트폰)</h1>
            {
                myphone.phone.map((p,i)=>{
                    return (
                        <div key={i}>
                            이름 : {p.name}<br/>
                            램 : {p.ram}<br/>
                            터치 : {p.touch}<br/>
                            안면인식 : {p.face}<br/><br/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Food;