export default function Comment({
    name,
    comment
}){



    return(
        <div className="commmentContent">
            <h6>Name: {name}</h6>
            <p>{comment}</p>
        </div>
    )
}