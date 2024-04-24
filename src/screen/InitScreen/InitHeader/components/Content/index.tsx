import { View, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import Device from '@/utils/device'
import BaseIcons from '@/components/base/Icon'
import useStyles from './styles'
import { useTheme, Text } from '@rneui/themed'
import BaseTextInput from '@/components/base/TextInput'
import { FlashList } from '@shopify/flash-list'
import { data } from 'dataTemp'
import { ContentType } from '@/redux/initial/type'

const Content = () => {
    const styles = useStyles()
    const { theme } = useTheme()

    const renderItem = useCallback(({ item }: { item: ContentType }) => {
        return (
            <View style={{ height: Device.getHeightDevice() / 1.8 }}>
                <View style={styles.containerContent}></View>
                <View style={styles.itemContent}>
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'blue' }}></View>
                    <Text>Content 2g</Text>
                </View>
            </View>
        )
    }, [])

    return (
        <View style={{ height: Device.getHeightDevice() * 0.8 }}>
            <View style={{ width: Device.getWidthDevice(), height: Device.getHeightDevice() / 1.8 }}>
                <FlashList
                    data={data || []}
                    estimatedItemSize={Device.getWidthDevice()}
                    renderItem={renderItem}
                    snapToInterval={Device.getHeightDevice() / 1.8}
                    scrollEventThrottle={1}
                    disableIntervalMomentum={true}
                />
            </View>

            <View style={{ position: 'absolute', bottom: 10, width: Device.getWidthDevice() }}>
                <BaseTextInput />
                <View style={styles.containerHandle}>
                    <BaseIcons name="dots-grid" type="MaterialCommunityIcons" size={45} color={theme.colors.grey1} />
                    <Pressable style={styles.btnTakePicture}>
                        <View style={{ backgroundColor: 'white', borderRadius: 30, width: 50, height: 50 }}></View>
                    </Pressable>
                    <BaseIcons name="share" type="Feather" size={45} color={theme.colors.grey1} />
                </View>
            </View>
        </View>
    )
}

export default Content
