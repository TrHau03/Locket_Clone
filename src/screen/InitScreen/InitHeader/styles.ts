import { makeStyles } from '@rneui/themed'

const useStyles = makeStyles(({ colors, spacing }) => {
    return {
        containerHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: spacing.md,
            backgroundColor: colors.background,
        },
        containerCenter: {
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.grey5,
            borderRadius: spacing.lg,
        },
        btnHeader: {
            padding: spacing.md - spacing.xs * 4,
            borderRadius: spacing.xl,
            backgroundColor: colors.grey5,
        },
    }
})
export default useStyles
