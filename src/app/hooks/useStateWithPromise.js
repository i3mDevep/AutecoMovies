import React from "react";
const useStateWithPromise = (initialState, changes = []) => {
  const [state, setState] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    initialState
      .then((result) => setState(result))
      .catch((err) => setState(err))
      .finally(() => setLoading(false));
  }, changes);

  return [state, setState, loading];
};

export default useStateWithPromise;
