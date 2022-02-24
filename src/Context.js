import React from 'react'
import {useContext , createContext} from 'react'

let AppContext = createContext(null)
function AppProvider({children}) {

    let [gif, showGif] = React.useState(0);

  return ( <>
                <AppContext.Provider gif = {gif} showGif = {showGif}>{children}</AppContext.Provider>
          </>
  )
}

export  function GlobalContext() {
    return useContext(AppContext);
}



export default AppProvider