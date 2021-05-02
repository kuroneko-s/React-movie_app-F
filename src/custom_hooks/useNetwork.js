import { useEffect, useState } from "react";

// 네트워크가 사용되냐 안되냐에 따라 지정
export const useNetwork = (onChange) => {
    //navigator.onLine 온라인 유무 확인 가능
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setStatus(navigator.onLine);
    };
  
    useEffect(() => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
      return () => {
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
      };
    }, []);
  
    return status;
  };