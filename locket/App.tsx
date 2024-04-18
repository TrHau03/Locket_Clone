import { persistor, store } from '@/redux/store/store'
import getTheme from '@/theme/createTheme'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@rneui/themed'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { RootNavigation } from './src/navigation'

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
