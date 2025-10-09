const styles = {
  padding: "0.5rem 1rem",
  backgroundColor: "#1d4ed8",
  color: "white",
  border: "1px solid white",
  borderRadius: "4px",
};
const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#3b82f6",
        color: "white",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "2px solid #1d4ed8",
        width: "100%"
      }}
    >
      <h1 style={{ margin: 0, color: "white" }}>Bienvenidos!!</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <span style={styles}>Home</span>
        <span style={styles}>Login</span>
        <span
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#10b981",
            color: "white",
            border: "1px solid white",
            borderRadius: "4px",
          }}
        >
          Register
        </span>
      </div>
    </div>
  );
};

export default Header;
