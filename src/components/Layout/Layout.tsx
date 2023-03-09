import { Footer, Header } from "components";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
