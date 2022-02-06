import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"

export const useBreakpoints = () => {
  const [isClient, setIsClient] = useState(false);
  
  const smUp = useMediaQuery({ minWidth: 640 });
  const mdUp = useMediaQuery({ minWidth: 768 });
  const lgUp = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return {
    smUp: isClient ? smUp : false,
    mdUp: isClient ? mdUp : false,
    lgUp: isClient ? lgUp : false
  }
}
