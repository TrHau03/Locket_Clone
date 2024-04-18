import { Dimensions } from 'react-native'

export default class Device {
    static getWidthDevice() {
        return Dimensions.get('window').width
    }
    static getHeightDevice() {
        return Dimensions.get('window').height
    }
    static isTablet() {
        return Device.getWidthDevice() >= 768
    }
}
