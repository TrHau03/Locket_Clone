import Device from '@/utils/device'
import { makeStyles } from '@rneui/themed'

const useStyles = makeStyles(({ colors, spacing }) => {
    return {
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
            marginTop: spacing.lg * 2,
        },
        btnTakePicture: {
            borderWidth: 3,
            borderColor: colors.primary,
            borderRadius: 50,
            padding: spacing.xs * 2,
        },
        containerHistory: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: spacing.md,
            marginTop: spacing.lg * 2,
        },
    }
})
export default useStyles
