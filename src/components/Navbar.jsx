import { useState, useRef, useEffect } from "react";
function Navbar({ user, setUser, setPage }) {
  console.log("Navbar props:", { user, setUser, setPage });
  const menuRef = useRef(null);
  const dropdownStyle = {
    position: "absolute",
    top: "40px",
    right: 0,
    background: "linear-gradient(135deg, #ffffff, #fff7ed)",
    borderRadius: "12px",
    padding: "10px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
    zIndex: 999,
    color: "#111827",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    minWidth: "120px"
  };
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileOpen(false);
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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

        padding: "15px clamp(16px, 5vw, 40px)",

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
            style={{ ...navLink, cursor: "pointer", }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#caba9d"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
            onClick={() => setPage("home")}>Home</a>
          <a href="#"
            style={{ ...navLink, cursor: "pointer", }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#caba9d"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
            onClick={() => setPage("types")}>Workshops</a>
          <a href="#"
            style={{ ...navLink, cursor: "pointer", }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#caba9d"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
            onClick={() => setPage("stats")}>Statistics</a>
          {!user ? (
            <span
              style={{ ...navLink, cursor: "pointer", }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#caba9d"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
              onClick={() => setPage && setPage("login")}
            >
              Login
            </span>
          ) : (
            <div style={{ position: "relative" }}>
              <span
                style={{ ...navLink, cursor: "pointer" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#caba9d"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
                onClick={() => setProfileOpen(!profileOpen)}
              >
                👤 {user.name} ⌄
              </span>

              {profileOpen && (
                <div ref={menuRef} style={{ ...dropdownStyle, cursor: "pointer" }}>
                  <div onClick={() => {
                    setPage("profile");
                    setProfileOpen(false);
                  }}>
                    Profile
                  </div>

                  <div onClick={() => {
                    setPage("status");
                    setProfileOpen(false);
                  }}>
                    Status
                  </div>
                  <div onClick={() => {
                    setPage("propose");
                    setProfileOpen(false);
                  }}>
                    Propose Workshop
                  </div>
                  <div onClick={() => {
                    setUser && setUser(null);
                    setPage("home");
                    setProfileOpen(false);
                  }}>
                    Logout
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* phone menu */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
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

      {mobileOpen && (
        <div ref={menuRef} style={{
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
          <span style={mobileLink} onClick={() => { setPage("home"); setMobileOpen(false); }}>
            Home
          </span>

          <span style={mobileLink} onClick={() => { setPage("types"); setMobileOpen(false); }}>
            Workshops
          </span>

          <span style={mobileLink} onClick={() => { setPage("status"); setMobileOpen(false); }}>
            Status
          </span>

          <span style={mobileLink} onClick={() => { setPage("stats"); setMobileOpen(false); }}>
            Statistics
          </span>


          {!user ? (
            <span
              style={mobileLink}
              onClick={() => {
                setPage("login");
                setMobileOpen(false);
              }}
            >
              Login
            </span>
          ) : (
            <>
              <div style={{
                borderTop: "1px solid rgba(0,0,0,0.1)",
                margin: "8px 0"
              }} />

              <span style={{ ...mobileLink, fontWeight: "600" }}>
                👤 {user.name}
              </span>

              <span
                style={mobileLink}
                onClick={() => {
                  setPage("profile");
                  setMobileOpen(false);
                }}
              >
                Profile
              </span>

              <span
                style={mobileLink}
                onClick={() => {
                  setPage("status");
                  setMobileOpen(false);
                }}
              >
                Status
              </span>
              <span style={mobileLink} onClick={() => {
                setPage("propose");
                setMobileOpen(false);
              }}>
                Propose Workshop
              </span>
              <span
                style={mobileLink}
                onClick={() => {
                  setUser(null);
                  setPage("home");
                  setMobileOpen(false);
                }}
              >
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;

