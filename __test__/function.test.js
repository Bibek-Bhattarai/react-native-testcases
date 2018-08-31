import React from 'react'
import Welcome from '../components/Welcome'
import renderer from 'react-test-renderer'



it('function and state test',()=>{
     let WelData=renderer.create(<Welcome/>).getInstance()
     //expect(WelData.change(5)).toBe(25)
     WelData.change(4)
     expect(WelData.state.data).toBe(20)
})