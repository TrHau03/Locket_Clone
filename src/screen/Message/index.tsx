import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import Wrap from '@/components/shared/Wrap'
import AppHeader from '@/components/shared/Header/indext'
import { FlashList } from '@shopify/flash-list'
import { UserProps } from '@/redux/message/type'
import CardMess from './components/CardMess'
import { useNavigationService } from '@/navigation/navigationService'
import { RootStackParamsEnum } from '@/navigation/type'
import useStyles from './styles'

const MessageScreen: React.FC = () => {
    const styles = useStyles()
    const { navigateToPage } = useNavigationService()

    const handlePress = useCallback((id: string) => {
        navigateToPage(RootStackParamsEnum.MessageDetailScreen, { id })
    }, [])

    return (
        <Wrap>
            <View style={styles.container}>
                <AppHeader />
                <FlashList
                    data={data || []}
                    estimatedItemSize={200}
                    renderItem={({ item }: { item: UserProps }) => <CardMess {...item} onPress={handlePress} />}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    onEndReachedThreshold={0.5}
                />
            </View>
        </Wrap>
    )
}

export default MessageScreen

const data = [
    {
        id: '1',
        avatar: 'http://dummyimage.com/152x100.png/ff4444/ffffff',
        name: 'Pearce Kellen',
        lastMessage: 'Francolinus leucoscepus',
        date: '2/9/2024',
    },
    {
        id: '2',
        avatar: 'http://dummyimage.com/171x100.png/ff4444/ffffff',
        name: 'Bibby Bending',
        lastMessage: 'Anser caerulescens',
        date: '8/11/2023',
    },
    {
        id: '3',
        avatar: 'http://dummyimage.com/227x100.png/5fa2dd/ffffff',
        name: 'Salomi Edworthie',
        lastMessage: 'Butorides striatus',
        date: '6/22/2023',
    },
    {
        id: '4',
        avatar: 'http://dummyimage.com/101x100.png/ff4444/ffffff',
        name: 'Ignatius Wickmann',
        lastMessage: 'Canis lupus baileyi',
        date: '8/5/2023',
    },
    {
        id: '5',
        avatar: 'http://dummyimage.com/247x100.png/ff4444/ffffff',
        name: 'Stanly Olliffe',
        lastMessage: 'Didelphis virginiana',
        date: '1/3/2024',
    },
    {
        id: '6',
        avatar: 'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
        name: "Emylee O'Donohue",
        lastMessage: 'Lasiorhinus latifrons',
        date: '4/6/2024',
    },
    {
        id: '7',
        avatar: 'http://dummyimage.com/173x100.png/ff4444/ffffff',
        name: 'Stace Avramovich',
        lastMessage: 'Mazama gouazoubira',
        date: '12/13/2023',
    },
    {
        id: '8',
        avatar: 'http://dummyimage.com/141x100.png/dddddd/000000',
        name: 'Chrystel Ladloe',
        lastMessage: 'Marmota caligata',
        date: '11/15/2023',
    },
    {
        id: '9',
        avatar: 'http://dummyimage.com/177x100.png/ff4444/ffffff',
        name: 'Kingston Antonsson',
        lastMessage: 'Canis aureus',
        date: '1/14/2024',
    },
    {
        id: '1',
        avatar: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
        name: 'Aliza Risebarer',
        lastMessage: 'Bison bison',
        date: '5/24/2023',
    },
]
