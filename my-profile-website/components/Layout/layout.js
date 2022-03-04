import { Navigation } from "../navigation/nav-menu";
export const Layout = ({ children }) => {
  return (
    <div className="siteLayout">
      {/* Add Seo component Here */}
      <div className="container">
        <Navigation />
        <div className="pageContent">{children}</div>
      </div>
      {/* Add footer here */}
    </div>
  );
};
