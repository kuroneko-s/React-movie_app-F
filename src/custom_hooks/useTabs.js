import { useState } from "react";

export const useTabs = (initTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
  
    const [currentIndex, setCurrentIndex] = useState(initTab);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };