interface WithLoadingProps {
  isLoading: boolean;
  [key: string]: any;
}

export const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithLoading({ isLoading, ...props }: WithLoadingProps) {
    console.log(props.data);

    if (isLoading) {
      return <p>Loading...</p>;
    }
    return <WrappedComponent {...(props as P)} />;
  };
};
