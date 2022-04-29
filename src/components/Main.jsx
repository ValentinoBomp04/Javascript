import React from 'react'
import Constants from 'expo-constants'
import {Text, View} from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'

const Main = () =>{
    return(
        <View style={{flex: 1}}>
            <AppBar/>
            <RepositoryList/>
        </View>
    )
}
export default Main