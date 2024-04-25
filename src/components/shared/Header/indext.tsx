import { View, Text, Pressable } from 'react-native'
import React from 'react'
import useStyles from './styles'
import BaseIcons from '@/components/base/Icon'
import { useNavigationService } from '@/navigation/navigationService'

interface AppHeaderProps {
    extra?: React.ReactNode | React.ReactNode[]
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
    const styles = useStyles()
    const { navigateGoBack } = useNavigationService()
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigateGoBack()}>
                <BaseIcons name="chevron-left" type="Feather" style={{ flex: 1 }} />
            </Pressable>
            <Text style={styles.textTitle}>AppHeader</Text>
            <View style={{ flex: 1 }}>{props.extra}</View>
        </View>
    )
}

export default AppHeader
