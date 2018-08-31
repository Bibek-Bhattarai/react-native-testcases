import React ,{Component} from 'react'
import {View,Text,TextInput} from 'react-native'

class Welcome extends Component{
    state={
        data:"name"
    }
    change(text){
        //return text*5
        this.setState({
           data:text*5 
        })
    }
    render(){
        return(
            <View styel={{flex:1,alignItems:'center',justifyContent:"center"}}>
                <Text style ={{fontSize:24}}>Welcome</Text>
                <TextInput
                testID={'input'}
                placeholder="Enter text"
                onChangeText={(text)=>this.change(text)}
                />
            </View>
        )

    }

}
export default Welcome