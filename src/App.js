import React, { useState } from 'react'

import Albums from './Albums';
import Counter from './Counter'
import Users from './Users'

const defaultPage = 'albums'

const pages = {
  albums: {
    text: 'Albuns',
    component: Albums,
  },
  counter: {
    text: 'Contador',
    component: Counter,
  },
}



function App() {
const [page, setPage] = useState(defaultPage)

const handleChangePage = page => {
  setPage(page)
}

const Page = pages[page].component

const pageNames = Object.keys(pages)

return (
  <>
  {
    pageNames.map(page => <button onClick={() => handleChangePage(page)}>{pages[page].text}</button>)
  }

  {page && <Page />}
  </>
)

}

export default App;
