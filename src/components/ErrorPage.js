import { useRouteError } from "react-router";

const ErrorPage = () => {
  const errorObj = useRouteError();
  const { error, status, statusText } = errorObj;
  console.log(error);
  return (
    <div>
      <h1>
        {status} - {statusText}
      </h1>
      <h2>{error?.message}</h2>
    </div>
  );
};

export default ErrorPage;
