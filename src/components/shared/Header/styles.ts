import { makeStyles } from '@rneui/themed'

const useStyles = makeStyles(({ colors, spacing }) => {
    return {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: spacing.md,
            paddingHorizontal: spacing.sm,
        },
        textTitle: {
            flex: 1,
            textAlign: 'center',
            fontSize: 20,
        },
        textName: {},
        textMess: {},
        textDate: {},
    }
})

export default useStyles
