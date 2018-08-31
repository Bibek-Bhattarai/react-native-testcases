//import 'react-native'
import React from 'react'
import Welcome from '../components/Welcome'
import renderer from 'react-test-renderer'



test('Snapshot test',()=>{
    const snap=renderer.create(
        <Welcome />
    ).toJSON()
    expect(snap).toMatchSnapshot()
})