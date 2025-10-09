import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f1f5f9"
    }}>
      <Header />
      <main style={{
        flex: "1",
        padding: "1rem",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%"
      }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
