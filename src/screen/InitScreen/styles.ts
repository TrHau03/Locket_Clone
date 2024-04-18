import Device from '@/utils/device'
import { makeStyles } from '@rneui/themed'

const useStyles = makeStyles(({ colors, spacing }) => {
    return {
        container: {
            flex: 1,
            backgroundColor: colors.background,
            gap: spacing.lg * 2,
        },
        containerContent: {
            width: Device.getWidthDevice(),
            height: Device.getWidthDevice(),
            backgroundColor: 'red',
            borderRadius: spacing.lg * 2,
        },
        containerHandle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: spacing.lg,
        },
        btnTakePicture: {
            borderWidth: 3,
            borderColor: colors.primary,
            borderRadius: 50,
            padding: spacing.xs * 2,
        },
    }
})
export default useStyles
