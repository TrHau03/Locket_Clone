import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { createRef } from 'react'
import { NavigationContainerRef, useNavigation } from '@react-navigation/native'
import { NavigationType, RootStackParamsEnum } from './type'

export const useNavigationService = () => {
    const navigation = useNavigation<NavigationType>()
    const navigateToPage = (name: RootStackParamsEnum, params?: any) => {
        return navigation.navigate(name, params)
    }

    return { navigateToPage }
}
