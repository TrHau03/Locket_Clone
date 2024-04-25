import { makeStyles } from '@rneui/themed'

const useStyles = makeStyles(({ colors, spacing }) => {
    return {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: spacing.md,
        },
        containerName: { flex: 1, height: '100%', marginLeft: spacing.md, justifyContent: 'space-evenly' },
    }
})
export default useStyles
