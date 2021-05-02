import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (options, axiosInstance = axios) => {
  if (!options.url) {
    return;
  }

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(null);
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });

    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(options)
      .then((res) => {
        setState({
          ...state,
          loading: false,
          data: res
        });
      })
      .catch((error) => {
        setState({
          ...state,
          error: true,
          loading: false
        });
      });
  }, [trigger]);

  return { ...state, refetch };
};
