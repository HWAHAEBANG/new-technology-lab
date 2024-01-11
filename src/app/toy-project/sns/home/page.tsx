import React from 'react'
import Tap from './_component/Tab'
import TabProvider from './_component/TabProvider'

const Home = () => {
  return (
    <main>
      <TabProvider>
        <Tap />
      </TabProvider>
    </main>
  )
}

export default Home
