import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function AppContainer (props: Props) {
  return (
    <SafeAreaView style={styles.container}>
      {props.children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
