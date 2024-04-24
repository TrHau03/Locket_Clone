import { View, Pressable } from 'react-native'
import React from 'react'
import Device from '@/utils/device'
import useStyles from './styles'
import BaseIcons from '@/components/base/Icon'
import { useTheme, Text } from '@rneui/themed'

const Camera: React.FC = () => {
    const styles = useStyles()
    const { theme } = useTheme()
    return (
        <View style={{ height: Device.getHeightDevice() * 0.9, marginTop: 50 }}>
            <View style={styles.containerContent}></View>
            <View style={styles.containerHandle}>
                <BaseIcons name="images" type="FontAwesome5" size={50} color={theme.colors.grey1} />
                <Pressable style={styles.btnTakePicture}>
                    <View style={{ backgroundColor: 'white', borderRadius: 50, width: 70, height: 70 }}></View>
                </Pressable>
                <BaseIcons name="camera-reverse-sharp" size={50} color={theme.colors.grey1} />
            </View>
            <View style={styles.containerHistory}>
                <View style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: 'red' }}></View>
                <Text
                    style={{
                        fontSize: 20,
                    }}
                >
                    History
                </Text>
            </View>
            <BaseIcons
                name="chevron-down"
                type="Feather"
                color={theme.colors.grey1}
                size={50}
                style={{ alignSelf: 'center' }}
            />
        </View>
    )
}

export default Camera
