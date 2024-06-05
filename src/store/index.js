import React, {createContext, useState} from 'react';

export const StoreContext = createContext();

const StoreProvider = ({children}) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  const store = {
    counter,
    increment,
    decrement,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
