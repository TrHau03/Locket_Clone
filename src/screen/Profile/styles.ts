import { makeStyles } from '@rneui/themed'
import Device from '@/utils/device'

const useStyles = makeStyles(({ colors }) => {
    return {
        boxBtn: {
            borderRadius: 20,
            backgroundColor: colors.grey3,
            marginTop: 10,
        },
        btnChildLeft: {
            flexDirection: 'row',
            gap: 10,
        },
        btnChild: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '4%',
            paddingVertical: '4%',
            borderTopWidth: 1.5,
            borderColor: colors.grey4,
        },
        txtError: {
            color: colors.error,
            fontSize: 16,
            fontWeight: '600',
        },
        txtContent: {
            color: colors.black,
            fontSize: 16,
            fontWeight: '600',
        },
        txtTitle: {
            color: colors.grey1,
            fontSize: 18,
            fontWeight: '700',
        },
        title: {
            width: '100%',
            height: 'auto',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            marginTop: '7%',
        },
        txtUpdateI4: {
            fontSize: 18,
            color: colors.black,
            fontWeight: '700',
            paddingVertical: '2%',
            paddingHorizontal: '3%',
        },
        btnUpdateI4: {
            backgroundColor: colors.grey3,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '4%',
        },
        txtName: {
            color: colors.black,
            fontSize: 28,
            fontWeight: '600',
            marginTop: '4%',
        },
        plus: {
            position: 'absolute',
            bottom: 0,
            right: 10,
            backgroundColor: colors.primary,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: colors.grey5,
        },
        imgAvatar: {
            width: '96%',
            height: '96%',
            borderRadius: 85,
        },
        btnAvatar: {
            height: 130,
            width: 130,
            borderRadius: 85,
            borderWidth: 4,
            borderColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '15%',
        },
        lineShort: {
            width: '10%',
            height: 7,
            backgroundColor: colors.grey3,
            marginTop: '3%',
            borderRadius: 10,
        },
        body: {
            paddingHorizontal: 20,
            paddingTop: 20,
            width: Device.getWidthDevice(),
            height: '100%',
            backgroundColor: colors.grey5,
            marginBottom: '10%',
        },
        bodyHeader: {
            backgroundColor: colors.grey5,
            width: Device.getWidthDevice(),
            alignItems: 'center',
            marginTop: '10%',
            borderTopRightRadius: 60,
            borderTopLeftRadius: 60,
        },
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
    }
})
export default useStyles
