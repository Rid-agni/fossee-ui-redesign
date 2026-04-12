import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const colors = {
  background: "linear-gradient(to bottom, #f9fafb, #f3f4f6)",
  dark: "#070b12ff",
  lightText: "#caba9d",
  primary: "rgb(188, 84, 10)",
  primaryHover: "rgb(188, 84, 10)"
};

const navLink = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.2s ease",
  fontFamily: "'Inter', sans-serif"
};

const mobileLink = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "500",
  fontFamily: "'Inter', sans-serif"
};
  return (
    <>
     <nav style={{
  position: "fixed",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",

  width: "90%",
  maxWidth: "1100px",

  padding: "14px 30px",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  background: "rgba(7, 11, 18, 0.85)",
  backdropFilter: "blur(10px)",

  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.08)",

  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",

  zIndex: 100
}}>

          <h2 style={{
  color: "#ffffff",
  fontFamily: "'Boldonse', sans-serif",
  letterSpacing: "0.5px"
}}>
  FOSSEE Workshops
</h2>

          {/* desktop menu */}
          <div className="desktop-menu" style={{ display: "flex", gap: "25px" }}>
            <a href="#"
              style={navLink}
            onMouseEnter={(e) => e.currentTarget.style.color = "#caba9d"}
onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>Home</a>
            <a href="#"
              style={navLink}
              onMouseEnter={(e) => e.currentTarget.style.color = "#caba9d"}
onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>Workshops</a>
            <a href="#"
              style={navLink}
              onMouseEnter={(e) => e.currentTarget.style.color = "#caba9d"}
onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>Statistics</a>
            <a href="#"
              style={navLink}
             onMouseEnter={(e) => e.currentTarget.style.color = "#caba9d"}
onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>Login</a>
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
              color: "#ffffff",
              cursor: "pointer"
            }}
          >
            ☰
          </button>
        </nav>
        
        {menuOpen && (
          <div style={{
            position: "fixed",
            top: "70px",
            right: "20px",

            background: "rgba(7, 11, 18, 0.85)",
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