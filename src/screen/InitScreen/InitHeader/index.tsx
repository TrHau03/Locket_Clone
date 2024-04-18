import { Pressable, View } from 'react-native'
import React from 'react'
import useStyles from './styles'
import BaseIcons from '@/components/base/Icon'
import { Text, useTheme } from '@rneui/themed'
import { useNavigationService } from '@/navigation/navigationService'
import { RootStackParamsEnum } from '@/navigation/type'

interface InitHeaderProps {
    count: number
}

const InitHeader: React.FC<InitHeaderProps> = (props) => {
    const styles = useStyles()
    const { theme } = useTheme()
    const { navigateToPage } = useNavigationService()

    return (
        <View style={styles.containerHeader}>
            <Pressable
                onPress={() => {
                    navigateToPage(RootStackParamsEnum.ProfileScreen)
                }}
                style={styles.btnHeader}
            >
                <BaseIcons name="person-circle-outline" size={26} color={theme.colors.grey1} type="Ionicons" />
            </Pressable>
            <View style={styles.containerCenter}>
                <BaseIcons name="people" size={26} type="Ionicons" color={theme.colors.grey1} />
                <Text> {props?.count ?? 8} InitHeader</Text>
            </View>
            <Pressable
                onPress={() => {
                    navigateToPage(RootStackParamsEnum.MessageScreen)
                }}
                style={styles.btnHeader}
            >
                <BaseIcons
                    name="facebook-messenger"
                    color={theme.colors.grey1}
                    size={26}
                    type="MaterialCommunityIcons"
                />
            </Pressable>
        </View>
    )
}

export default InitHeader
