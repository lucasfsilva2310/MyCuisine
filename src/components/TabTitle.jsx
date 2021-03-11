import Helmet from "react-helmet";

export const TabTitle = ({ section }) => {
  return (
    <Helmet>
      <title>{`My Cuisine | ${section}`}</title>
    </Helmet>
  );
};
