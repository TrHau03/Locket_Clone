import React from 'react'
import Wrap from '@/components/shared/Wrap'
import { makeStyles, Text, useTheme } from '@rneui/themed'
import { Pressable, View } from 'react-native'
import useStyles from './styles'
import InitHeader from './InitHeader'
import { Camera, CameraType } from 'expo-camera'
import BaseIcons from '@/components/base/Icon'

const InitScreen: React.FC = () => {
    const { theme } = useTheme()
    const styles = useStyles()

    return (
        <Wrap>
            <View style={styles.container}>
                <InitHeader count={8} />
                <View style={styles.containerContent}></View>
                <View style={styles.containerHandle}>
                    <BaseIcons name="images" type="FontAwesome5" size={50} color={theme.colors.grey1} />
                    <Pressable style={styles.btnTakePicture}>
                        <View style={{ backgroundColor: 'white', borderRadius: 50, width: 80, height: 80 }}></View>
                    </Pressable>
                    <BaseIcons name="camera-reverse-sharp" size={50} color={theme.colors.grey1} />
                </View>
            </View>
        </Wrap>
    )
}

export default InitScreen
