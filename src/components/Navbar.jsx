import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const colors = {
  background: "linear-gradient(to bottom, #f9fafb, #f3f4f6)",
  dark: "#070b12",
  lightText1: "#6b7280",
  lightText2:"#caba9d",
  primary: "#f27115",
  primaryHover: "rgb(188, 84, 10)"
};

  const navLink = {
  color: colors.dark,
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.2s ease"
};

const mobileLink = {
  color: colors.dark,
  textDecoration: "none",
  fontWeight: "500"}
  return (
    <>
     <nav style={{
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,

          background: "transparent",
          backdropFilter: "none"
        }}>

          <h2 style={{ color: colors.dark }}>FOSSEE Workshops</h2>

          {/* desktop menu */}
          <div className="desktop-menu" style={{ display: "flex", gap: "25px" }}>
            <a href="#"
              style={navLink}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.dark}>Home</a>
            <a href="#"
              style={navLink}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.dark}>Workshops</a>
            <a href="#"
              style={navLink}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.dark}>Statistics</a>
            <a href="#"
              style={navLink}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.dark}>Login</a>
          </div>

          {/* phone menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-btn"
            style={{
              display: "none",
              fontSize: "22px",
              background: "none",
              border: "none",
              color: colors.dark,
              cursor: "pointer"
            }}
          >
            ☰
          </button>
        </nav>
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "80px",

          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",

          background: "rgba(255,255,255,0.05)",

          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",

          pointerEvents: "none",
          zIndex: 50
        }} />
        {menuOpen && (
          <div style={{
            position: "fixed",
            top: "70px",
            right: "20px",

            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",

            borderRadius: "12px",
            padding: "15px",

            display: "flex",
            flexDirection: "column",
            gap: "12px",

            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",


            zIndex: 200
          }}>
            <a href="#" style={mobileLink}>Home</a>
            <a href="#" style={mobileLink}>Workshops</a>
            <a href="#" style={mobileLink}>Statistics</a>
            <a href="#" style={mobileLink}>Login</a>
          </div>
        )}
    </>
  );
}

export default Navbar;