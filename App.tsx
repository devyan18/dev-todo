import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import AppContainer from './src/components/app-container'

export default function App () {
  return (
    <AppContainer>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </AppContainer>
  )
}
