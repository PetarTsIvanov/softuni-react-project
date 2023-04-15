import './Post.css';

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.unsplash.com/photo-1681138104461-c12826a632e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1133&q=80" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam consequatur animi, nulla dicta debitis, repellat obcaecati culpa nisi consectetur natus quidem at harum amet. Consequatur assumenda ex iure eligendi eius!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam consequatur animi, nulla dicta debitis, repellat obcaecati culpa nisi consectetur natus quidem at harum amet. Consequatur assumenda ex iure eligendi eius!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam consequatur animi, nulla dicta debitis, repellat obcaecati culpa nisi consectetur natus quidem at harum amet. Consequatur assumenda ex iure eligendi eius!
            </p>
        </div>
    )
}
