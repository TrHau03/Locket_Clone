import { InitScreen, MessageScreen, ProfileScreen } from '../screen'
import { RootStackParamsEnum } from './type'

export type RootStackParamsList = {
    ProfileScreen: undefined
    MessageScreen: undefined
    InitScreen: undefined
}

export const rootStackScreen = [
    { id: 1, name: RootStackParamsEnum.ProfileScreen, options: {}, component: ProfileScreen },
    { id: 2, name: RootStackParamsEnum.MessageScreen, options: {}, component: MessageScreen },
    { id: 2, name: RootStackParamsEnum.InitScreen, options: {}, component: InitScreen },
]
