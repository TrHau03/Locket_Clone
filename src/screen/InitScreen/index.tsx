import React from 'react'
import Wrap from '@/components/shared/Wrap'
import { makeStyles, Text, useTheme } from '@rneui/themed'
import { Pressable, ScrollView, View } from 'react-native'
import useStyles from './styles'
import InitHeader from './InitHeader'
import BaseIcons from '@/components/base/Icon'
import Device from '@/utils/device'
import Camera from './InitHeader/components/Camera'
import Content from './InitHeader/components/Content'

const InitScreen: React.FC = () => {
    const { theme } = useTheme()
    const styles = useStyles()

    return (
        <Wrap>
            <InitHeader count={8} style={{ paddingTop: 20 }} />
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                snapToAlignment="start"
                snapToInterval={Device.getHeightDevice() * 0.9}
                scrollEnabled={false}
            >
                <Camera />
                <Content />
            </ScrollView>
        </Wrap>
    )
}

export default InitScreen
