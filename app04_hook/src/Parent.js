import Food1 from "./Food1";
import Child from "./Child";
import Food from "./Food";

const Parent=()=>{
    let comments = ["comment01","comment02","comment03"];
    const foodILike = [
        {
          id: 1,
          name: 'Kimchi',
          image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
          rating: 5,
        },
        {
          id: 2,
          name: 'Samgyeopsal',
          image:
            'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
          rating: 4.9,
        },
        {
          id: 3,
          name: 'Bibimbap',
          image:
            'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
          rating: 5,
        },
        {
          id: 4,
          name: 'Doncasu',
          image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
          rating: 5,
        },
        {
          id: 5,
          name: 'Kimbap',
          image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
          rating: 5,
        },
      ]
    return(
        <div>
            {/* {
                comments.map((comment,index)=>{
                    return(
                        <div key={index}>
                            {comment}
                        </div>
                    )
                })
            } */}
            {
                comments.map((comment,index)=>(
                    <Child comment={comment} key={index}/>
                ))
            }
            {
                foodILike.map((food)=>{
                    return(
                        <Food key={food.id} food={food}/>
                    )
                    
                })
            }
            <hr/>
            {
                foodILike.map((food)=>{
                    return(
                        <Food1 key={food.id}
                            id ={food.id}
                            name = {food.name}
                            rating = {food.rating}
                            image = {food.image}/>
                    )
                })
            }
        </div>
    )
}
export default Parent;