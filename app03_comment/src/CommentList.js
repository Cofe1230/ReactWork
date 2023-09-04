import Comment from "./Comment";

const comments=[
    {
        name : "이인제",
        comment : "안녕하세요"
    },
    {
        name : "유제석",
        comment : "리액트 재미있어요"
    },
    {
        name : "강민경",
        comment : "리액트222"
    }
]


function CommentList(){
    return(
        <div>
            {
                comments.map((comment,index)=>{
                    return(
                        <div key={index}>
                            {/* {comment.name} // {comment.comment}<br/><br/> */}
                            <Comment name={comment.name} comment={comment.comment}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CommentList;