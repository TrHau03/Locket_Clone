import { persistor, store } from '@/redux/store/store'
import getTheme from '@/theme/createTheme'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@rneui/themed'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { RootNavigation } from './src/navigation'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLocales } from 'expo-localization'

const resources = {
    en: require('./assets/language/en_US.json'),
}

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: getLocales()[0].languageCode || 'en',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={getTheme('light')}>
                    <NavigationContainer>
                        <RootNavigation />
                    </NavigationContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}
