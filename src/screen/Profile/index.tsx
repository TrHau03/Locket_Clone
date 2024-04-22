import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import useStyles from './styles'
import { useTheme, Divider } from '@rneui/themed'
import BaseIcons from '@/components/base/Icon'

const ProfileScreen: React.FC = () => {
    const styles = useStyles()
    const { theme } = useTheme()

    return (
        <View style={styles.container}>
            <View style={styles.bodyHeader}>
                <View style={styles.lineShort} />
                <Pressable style={styles.btnAvatar}>
                    <Image style={styles.imgAvatar} source={require('../../../assets/avatar.png')} />
                    <View style={styles.plus}>
                        <BaseIcons name="plus" type="Entypo" color={theme.colors.white} size={28} />
                    </View>
                </Pressable>
                <Text style={styles.txtName}>Minh Duc</Text>
                <Pressable style={styles.btnUpdateI4}>
                    <Text style={styles.txtUpdateI4}>Sửa thông tin</Text>
                </Pressable>
            </View>
            <View style={styles.body}>
                <View style={styles.title}>
                    <BaseIcons type="AntDesign" name="plussquareo" size={24} color={theme.colors.grey1} />
                    <Text style={styles.txtTitle}>Thiết lập Tiện ích</Text>
                </View>
                <View>
                    {ulities.map((item: any) => (
                        <TouchableOpacity style={styles.btnChild} key={item.id}>
                            <View style={styles.btnChildLeft}>
                                <BaseIcons name={item.nameIcon} type={item.type} color={theme.colors.black} size={20} />
                                <Text style={styles.txtContent}>{item.text}</Text>
                            </View>
                            <BaseIcons name="right" type="AntDesign" color={theme.colors.black} size={20} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen

const ulities = [
    {
        id: 1,
        nameIcon: 'squared-plus',
        type: 'Entypo',
        text: 'Thêm Tiện ích',
    },
    {
        id: 2,
        nameIcon: 'questioncircle',
        type: 'AntDesign',
        text: 'Hướng dẫn về Tiện ích',
    },
]
