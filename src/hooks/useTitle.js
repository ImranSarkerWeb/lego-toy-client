import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -Lego Store`;
  }, [title]);
};

export default useTitle;
