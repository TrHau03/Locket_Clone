import { View, Text, ViewStyle, StyleProp } from 'react-native'
import React from 'react'
import {
    MaterialIcons,
    Ionicons,
    Feather,
    Fontisto,
    FontAwesome,
    Entypo,
    MaterialCommunityIcons,
    AntDesign,
    Foundation,
    FontAwesome5,
} from '@expo/vector-icons'

interface BaseIconsProps {
    name: string
    size?: number
    type?:
        | 'MaterialIcons'
        | 'Ionicons'
        | 'Feather'
        | 'Fontisto'
        | 'FontAwesome'
        | 'Entypo'
        | 'MaterialCommunityIcons'
        | 'AntDesign'
        | 'Foundation'
        | 'FontAwesome5'
    color?: string
    style?: StyleProp<ViewStyle>
}

const BaseIcons: React.FC<BaseIconsProps> = (props) => {
    let IconComponent
    switch (props.type) {
        case 'MaterialIcons':
            IconComponent = MaterialIcons
            break
        case 'Ionicons':
            IconComponent = Ionicons
            break
        case 'Feather':
            IconComponent = Feather
            break
        case 'Fontisto':
            IconComponent = Fontisto
            break
        case 'FontAwesome':
            IconComponent = FontAwesome
            break
        case 'Entypo':
            IconComponent = Entypo
            break
        case 'MaterialCommunityIcons':
            IconComponent = MaterialCommunityIcons
            break
        case 'AntDesign':
            IconComponent = AntDesign
            break
        case 'Foundation':
            IconComponent = Foundation
            break
        case 'FontAwesome5':
            IconComponent = FontAwesome5
            break
        default:
            IconComponent = Ionicons
            break
    }
    return (
        <View style={props.style}>
            <IconComponent name={props.name} size={props.size ?? 34} color={props.color} />
        </View>
    )
}

export default BaseIcons
