export const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disanablePrevent = () =>
      window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disanablePrevent };
  };