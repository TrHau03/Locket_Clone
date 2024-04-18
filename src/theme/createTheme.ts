import { createTheme, CreateThemeOptions } from '@rneui/themed'

const getTheme = (mode: 'light' | 'dark'): CreateThemeOptions => {
    return createTheme({
        lightColors: {
            primary: '#ffec19',
            background: '#fff',
        },
        darkColors: {
            primary: '#ffec19',
            background: '#000',
        },
        spacing: {
            sm: 8,
            md: 16,
            lg: 24,
            xl: 32,
        },
        mode: 'dark',
        components: {
            Text(props, theme) {
                return {
                    style: {
                        fontSize: 16,
                        color: theme.colors.black,
                        fontWeight: '700',
                    },
                }
            },
            Button(props, theme) {
                return {
                    buttonStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                }
            },
        },
    })
}
export default getTheme
