import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { UserProps } from '@/redux/message/type'
import useStyles from './styles'
import { Image } from '@rneui/themed'
import BaseIcons from '@/components/base/Icon'

interface CardMessProps extends Partial<UserProps> {
    onPress?: (id: string) => void
}

const CardMess: React.FC<CardMessProps> = (props) => {
    const styles = useStyles()
    return (
        <Pressable style={styles.container} onPress={() => props.onPress && props.onPress(props.id || '')}>
            <Image source={{ uri: props.avatar }} style={{ width: 70, height: 70, borderRadius: 50 }} />
            <View style={styles.containerName}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Text>{props.name}</Text>
                    <Text>{props.date}</Text>
                </View>
                <Text>{props.lastMessage}</Text>
            </View>
            <BaseIcons name="chevron-right" type="Feather" />
        </Pressable>
    )
}

export default CardMess
