import { MantineProvider } from '@mantine/core'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <div>
          hello
        </div>
      </MantineProvider>
  )
}

export default App
