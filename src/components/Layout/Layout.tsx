import { Footer, Header } from "components";
import { footerMenu } from "utils";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <Header />
      {children}
      <Footer menuItems={footerMenu} />
    </div>
  );
};

export default Layout;
