import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from './rootStack'

export type NavigationType = NativeStackNavigationProp<RootStackParamsList, RootStackParamsEnum>
export enum RootStackParamsEnum {
    ProfileScreen = 'ProfileScreen',
    MessageScreen = 'MessageScreen',
    InitScreen = 'InitScreen',
    MessageDetailScreen = 'MessageDetailScreen',
}
