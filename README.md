# react-clickoutsideme

> A handler for capturing clicks outside a child element

[![NPM](https://img.shields.io/npm/v/react-clickoutsideme.svg)](https://www.npmjs.com/package/react-clickoutsideme) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-clickoutsideme
```

## Usage

```tsx
import React, { useCallback } from 'react'

import ClickOutsideMe from 'react-clickoutsideme'

const App = () => {
  const onClickOutside = useCallback(() => {
    alert('Clicked outside!')
  }, [])

  return (
    <ClickOutsideMe onClickOutside={onClickOutside}>
      <div>Click outside me!</div>
    </ClickOutsideMe>
  )
}

export default App
```

## License

MIT © [wagnerpaz](https://github.com/wagnerpaz)
