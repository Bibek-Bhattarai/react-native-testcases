import 'isomorphic-fetch'
import Post from '../Post'

it('api test', async function(){
    const response= await Post.all()
    console.warn(response)
    expect(response.id).toEqual(1)
})

