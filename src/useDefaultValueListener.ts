import { useState, useEffect } from "react";

export const useDefaultValueListener = <T>(
  defaultValues: T | undefined,
  reset: (newValues?: T) => void
) => {
  const [appliedDefaults, setAppliedDefaults] = useState(
    undefined as T | undefined
  );
  useEffect(() => {
    if (JSON.stringify(appliedDefaults) !== JSON.stringify(defaultValues)) {
      setAppliedDefaults(defaultValues);
      reset(defaultValues);
    }
  }, [reset, defaultValues, appliedDefaults]);
};
