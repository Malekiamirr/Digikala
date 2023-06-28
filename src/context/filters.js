import { createContext, useState } from "react";

const FiltersContext = createContext();

function Provider({ children }) {

    const [activeAppleProducts, setActiveAppleProducts] = useState(false);
    const [activeAppleProducts, setActiveAppleProducts] = useState(false);
    const [activeAppleProducts, setActiveAppleProducts] = useState(false);


  const valueToShare = {};

  return (
    <FiltersContext.Provider value={valueToShare}>
          {children}
    </FiltersContext.Provider>
    );
}

export { Provider };
export default FiltersContext;
