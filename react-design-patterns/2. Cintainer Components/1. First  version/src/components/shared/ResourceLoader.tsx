import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";

interface ResourceLoaderProps {
  resourceUrl: string;
  resourceName: string;
  children: ReactNode;
}

const ResourceLoader = ({
  resourceUrl,
  resourceName,
  children,
}: ResourceLoaderProps) => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resourceUrl}`
      );
      setState(response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
      })}
    </>
  );
};
export default ResourceLoader;
