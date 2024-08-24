"use client";

import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const CommandBarContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

export const CommandBarProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [showCommandBar, setShowCommandBar] = useState(false);
  return (
    <CommandBarContext.Provider value={[showCommandBar, setShowCommandBar]}>
      {children}
    </CommandBarContext.Provider>
  );
};
