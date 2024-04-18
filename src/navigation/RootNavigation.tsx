import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamsEnum, rootStackScreen } from './rootStack'
const Stack = createNativeStackNavigator()

const RootNavigation: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName={RootStackParamsEnum.InitScreen} screenOptions={{ headerShown: false }}>
            {rootStackScreen.map(({ id, name, options, component }) => (
                <Stack.Screen key={id} name={name} options={options} component={component} />
            ))}
        </Stack.Navigator>
    )
}

export default RootNavigation
