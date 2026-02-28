import { Footer, Header } from "components";
import { footerMenu } from "utils";
import { LayoutProps } from "types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <Header />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      <main id="main-content">
        {children}
      </main>
      <Footer menuItems={footerMenu} />
    </div>
  );
};

export default Layout;
