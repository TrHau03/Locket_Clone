import { useNavigation } from '@react-navigation/native'
import { NavigationType, RootStackParamsEnum } from './type'

export const useNavigationService = () => {
    const navigation = useNavigation<NavigationType>()
    const navigateToPage = (name: RootStackParamsEnum, params?: any) => {
        return navigation.navigate(name, params)
    }
    const navigateGoBack = () => {
        return navigation.canGoBack() && navigation.goBack()
    }

    return { navigateToPage, navigateGoBack }
}
