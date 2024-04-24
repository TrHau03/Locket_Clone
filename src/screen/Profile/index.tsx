import { View, Text, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import useStyles from './styles'
import { useTheme, Divider } from '@rneui/themed'
import BaseIcons from '@/components/base/Icon'
import { color } from '@rneui/themed/dist/config'

const ProfileScreen: React.FC = () => {
    const styles = useStyles()
    const { theme } = useTheme()

    return (
        <ScrollView style={styles.container}>
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
                <View style={styles.boxBtn}>
                    {ulities.map((item: any, index: number) => (
                        <TouchableOpacity style={[styles.btnChild, index === 0 && { borderTopWidth: 0 }]} key={item.id}>
                            <View style={styles.btnChildLeft}>
                                <BaseIcons name={item.nameIcon} type={item.type} color={theme.colors.black} size={24} />
                                <Text style={styles.txtContent}>{item.text}</Text>
                            </View>
                            <BaseIcons name="right" type="AntDesign" color={theme.colors.black} size={20} />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.title}>
                    <BaseIcons type="MaterialIcons" name="person" size={24} color={theme.colors.grey1} />
                    <Text style={styles.txtTitle}>Tổng quát</Text>
                </View>
                <View style={styles.boxBtn}>
                    {generality.map((item: any, index: number) => (
                        <TouchableOpacity style={[styles.btnChild, index === 0 && { borderTopWidth: 0 }]} key={item.id}>
                            <View style={styles.btnChildLeft}>
                                <BaseIcons name={item.nameIcon} type={item.type} color={theme.colors.black} size={24} />
                                <Text style={styles.txtContent}>{item.text}</Text>
                            </View>
                            <BaseIcons name="right" type="AntDesign" color={theme.colors.black} size={20} />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.title}>
                    <BaseIcons type="AntDesign" name="heart" size={24} color={theme.colors.grey1} />
                    <Text style={styles.txtTitle}>Giới Thiệu</Text>
                </View>
                <View style={styles.boxBtn}>
                    {introduce.map((item: any, index: number) => (
                        <TouchableOpacity style={[styles.btnChild, index === 0 && { borderTopWidth: 0 }]} key={item.id}>
                            <View style={styles.btnChildLeft}>
                                <BaseIcons name={item.nameIcon} type={item.type} color={theme.colors.black} size={24} />
                                <Text style={styles.txtContent}>{item.text}</Text>
                            </View>
                            <BaseIcons name="right" type="AntDesign" color={theme.colors.black} size={20} />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.title}>
                    <BaseIcons type="FontAwesome" name="warning" size={24} color={theme.colors.grey1} />
                    <Text style={styles.txtTitle}>Vùng nguy hiểm</Text>
                </View>
                <View style={styles.boxBtn}>
                    <TouchableOpacity style={styles.btnChild}>
                        <View style={styles.btnChildLeft}>
                            <BaseIcons name="hand" type="Entypo" color={theme.colors.black} size={24} />
                            <Text style={styles.txtContent}>Đăng xuất</Text>
                        </View>
                        <BaseIcons name="right" type="AntDesign" color={theme.colors.black} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnChild}>
                        <View style={styles.btnChildLeft}>
                            <BaseIcons name="trash" type="FontAwesome" color={theme.colors.error} size={24} />
                            <Text style={styles.txtError}>Xóa tài khoản</Text>
                        </View>
                        <BaseIcons name="right" type="AntDesign" color={theme.colors.black} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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

const generality = [
    {
        id: 1,
        nameIcon: 'phone',
        type: 'Entypo',
        text: 'Thay đổi số điện thoại',
    },
    {
        id: 2,
        nameIcon: 'email',
        type: 'MaterialCommunityIcons',
        text: 'Thay đổi địa chỉ email',
    },
    {
        id: 3,
        nameIcon: 'paper-plane',
        type: 'Ionicons',
        text: 'Hướng dẫn về Tiện ích',
    },
    {
        id: 4,
        nameIcon: 'exclamationcircle',
        type: 'AntDesign',
        text: 'Hướng dẫn về Tiện ích',
    },
]

const introduce = [
    {
        id: 1,
        nameIcon: 'tiktok',
        type: 'FontAwesome5',
        text: 'Tiktok',
    },
    {
        id: 2,
        nameIcon: 'instagram',
        type: 'AntDesign',
        text: 'Instagram',
    },
    {
        id: 3,
        nameIcon: 'twitter-with-circle',
        type: 'Entypo',
        text: 'Twitter',
    },
    {
        id: 4,
        nameIcon: 'share',
        type: 'Ionicons',
        text: 'Chia sẻ Locket',
    },
    {
        id: 5,
        nameIcon: 'star',
        type: 'Fontisto',
        text: 'Đánh giá Locket',
    },
    {
        id: 6,
        nameIcon: 'signature',
        type: 'FontAwesome5',
        text: 'Chia sẻ Locket',
    },
    {
        id: 7,
        nameIcon: 'lock',
        type: 'Entypo',
        text: 'Chia sẻ Locket',
    },
]

const warningZone = [
    {
        id: 1,
        nameIcon: 'hand',
        type: 'Entypo',
        text: 'Tiktok',
        color: 'black',
    },
    {
        id: 2,
        nameIcon: 'trash',
        type: 'FontAwesome',
        text: 'Instagram',
        color: 'red',
    },
]
