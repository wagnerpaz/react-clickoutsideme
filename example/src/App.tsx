import React, { useCallback } from 'react'

import ClickOutsideMe from 'react-clickoutsideme'

const App = () => {
  const onClickOutside = useCallback(() => {
    alert('Clicked outside!')
  }, [])

  return (
    <ClickOutsideMe onClickOutside={onClickOutside}>
      <div style={styles.container}>Click outside me!</div>
    </ClickOutsideMe>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    color: 'white',
    backgroundColor: 'blue',
    margin: 20
  }
}

export default App
