import { useEffect, useState } from "react";
import { readProgress } from "./progress.storage";
import type { ProgressState } from "./progress.types";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(() => readProgress());

  // ловим обновления из другой вкладки
  useEffect(() => {
    const onStorage = () => setProgress(readProgress());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const refresh = () => setProgress(readProgress());

  return { progress, refresh };
}
