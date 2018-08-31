class Post{
    static all(){
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response)=>{
        return response.json()
        }

    )
    }
}
export default Post