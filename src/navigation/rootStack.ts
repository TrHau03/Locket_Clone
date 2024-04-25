import MessageDetail from '@/screen/Message/MessageDetailScreen'
import { InitScreen, MessageScreen, ProfileScreen } from '../screen'
import { RootStackParamsEnum } from './type'

export type RootStackParamsList = {
    ProfileScreen: undefined
    MessageScreen: undefined
    MessageDetailScreen: undefined
    InitScreen: undefined
}

export const rootStackScreen = [
    { id: 1, name: RootStackParamsEnum.ProfileScreen, options: {}, component: ProfileScreen },
    { id: 2, name: RootStackParamsEnum.MessageScreen, options: {}, component: MessageScreen },
    { id: 3, name: RootStackParamsEnum.InitScreen, options: {}, component: InitScreen },
    { id: 4, name: RootStackParamsEnum.MessageDetailScreen, options: {}, component: MessageDetail },
]
