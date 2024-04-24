import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

interface WrapProps {
    children: React.ReactNode
}

const Wrap: React.FC<WrapProps> = (props) => {
    return (
        <React.Fragment>
            <StatusBar backgroundColor="black" style="light" animated translucent />
            <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView>
        </React.Fragment>
    )
}

export default Wrap
