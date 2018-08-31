import React from 'react'
import renderer from 'react-test-renderer'
import Welcome from '../components/Welcome'

let findElement=function(tree,element){
    let result=undefined
    //console.warn(tree.children.type)
    for(node in tree.children){
        if(tree.children[node].props.testID==element){
            result=true
        }
    }
    return result
}

it('test an element',()=>{
    let tree=renderer.create(
        <Welcome />
    ).toJSON()
    expect(findElement(tree,'input')).toBeDefined()
})