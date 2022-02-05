import { useMediaQuery } from "react-responsive"

const useBreakpoints = () => {
  const smUp = useMediaQuery({ minWidth: 640 });
  const mdUp = useMediaQuery({ minWidth: 768 });
  const lgUp = useMediaQuery({ minWidth: 1024 });

  return {
    smUp, mdUp, lgUp
  }
}

export default useBreakpoints;