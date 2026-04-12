
import { useState } from "react";

const colors = {
  bg: "#d1d5db",
  dark: "#070b12ff",
  lightText: "#9ca3af",
  primary: "#f27115ff",
  primaryHover: "#ea580c"
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* navbar starts */}
      <nav style={{
  padding: "15px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 100,

  background: "rgba(255, 255, 255, 0.10)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)"
}}>
  
  <h2 style={{ color: colors.dark }}>FOSSEE Workshops</h2>

  {/* desktop menu */}
  <div className="desktop-menu" style={{ display: "flex", gap: "25px" }}>
    <a href="#" style={navLink}>Home</a>
    <a href="#" style={navLink}>Workshops</a>
    <a href="#" style={navLink}>Statistics</a>
    <a href="#" style={navLink}>Login</a>
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
      <section style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        color: colors.bg,
        backgroundImage: "url('https://imgs.search.brave.com/SV53YQlQmlL8-Bi65w7EMcCVdGz9MPEKcLNLAOFYyZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3RvY2tjYWtl/LmNvbS9wdWJsaWMv/NS9lL2UvNWVlOWFi/MWItYzM5OS00ZDVm/LTliZDgtOTlhNjQ1/NmFiMGU1X2xhcmdl/L3RlY2gtd29ya3No/b3AtYWN0aXZpdHkt/c3RvY2tjYWtlLmpw/Zw')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>

        {/* dark overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)"
        }}></div>

        {/* hero section content */}
        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "700px",
          padding: "20px"
        }}>
          <h1 style={{
            fontSize: "48px",
            marginBottom: "20px"
          }}>
            Learn. Build. Grow.
          </h1>

          <p style={{
            fontSize: "18px",
            marginBottom: "30px",
            color: colors.bg
          }}>
            Join FOSSEE workshops to enhance your technical skills with hands-on learning and expert guidance.
          </p>

          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{
    padding: "12px 20px",
    background: colors.primary,
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s ease"
  }}
  onMouseEnter={(e) => {
    e.target.style.background = colors.primaryHover;
    e.target.style.transform = "translateY(-2px)";
  }}
  onMouseLeave={(e) => {
    e.target.style.background = colors.primary;
    e.target.style.transform = "translateY(0)";
  }}>
              Explore Workshops
            </button>

            <button style={{
    padding: "12px 20px",
    background: "transparent",
    color: "white",
    border: "1px solid white",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s ease"
  }}
  onMouseEnter={(e) => {
    e.target.style.background = "rgba(255,255,255,0.1)";
    e.target.style.transform = "translateY(-2px)";
  }}
  onMouseLeave={(e) => {
    e.target.style.background = "transparent";
    e.target.style.transform = "translateY(0)";
  }}>
              View Statistics
            </button>
          </div>
        </div>

      </section>
      <section style={{
        padding: "50px 20px",
        background:colors.dark,
        color: "white"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
          flexWrap: "wrap",
          maxWidth: "1000px",
          margin: "0 auto",
          gap: "30px"
        }}>

          <div
            style={{
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
            <h2 style={{ fontSize: "28px", marginBottom: "5px" }}>10000+</h2>
            <p style={{ color: colors.lightText }}>Students Trained</p>
          </div>

          <div
            style={{
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
            <h2 style={{ fontSize: "28px", marginBottom: "5px" }}>150+</h2>
            <p style={{ color: colors.lightText }}>Colleges</p>
          </div>

          <div
            style={{
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
            <h2 style={{ fontSize: "28px", marginBottom: "5px" }}>33+</h2>
            <p style={{ color: colors.lightText }}>Hours of Content</p>
          </div>

        </div>
      </section>
      <section style={{
        padding: "60px 20px",
        background: colors.bg
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "28px",
          marginBottom: "40px",
          color: colors.dark
        }}>
          Popular Workshops
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>

          {/* card1 */}
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-6px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >

            <div style={{
              height: "150px",
              background: "linear-gradient(135deg, #3b82f6, #1e40af)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px"
            }}>
              Python
            </div>

            <div style={{ padding: "20px" }}>
              <h3 style={{ marginBottom: "10px", color: colors.dark}}>Python Basics</h3>

              <p style={{
                color: "#6b7280",
                fontSize: "14px"
              }}>
                Learn fundamentals of Python programming.
              </p>

              <button style={{
                marginTop: "15px",
                padding: "10px 15px",
                background: colors.primary,
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}>
                View Details
              </button>
            </div>
          </div>

          {/* card2 */}
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-6px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >

            <div style={{
              height: "150px",
              background: "linear-gradient(135deg, #10b981, #065f46)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px"
            }}>
              Data
            </div>

            <div style={{ padding: "20px" }}>
              <h3 style={{ marginBottom: "10px", color:colors.dark}}>Data Science</h3>

              <p style={{
                color: "#6b7280",
                fontSize: "14px"
              }}>
                Explore data analysis and visualization.
              </p>

              <button style={{
                marginTop: "15px",
                padding: "10px 15px",
                background: colors.primary,
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}>
                View Details
              </button>
            </div>
          </div>

          {/* card3 */}
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-6px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >

            <div style={{
              height: "150px",
              background: "linear-gradient(135deg, #8b5cf6, #4c1d95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px"
            }}>
              ML
            </div>

            <div style={{ padding: "20px" }}>
              <h3 style={{ marginBottom: "10px", color:colors.dark }}>Machine Learning</h3>

              <p style={{
                color: "#6b7280",
                fontSize: "14px"
              }}>
                Introduction to ML concepts and models.
              </p>

              <button style={{
                marginTop: "15px",
                padding: "10px 15px",
                background: colors.primary,
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}>
                View Details
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  </>
  )
}
export default App
const navLink = {
  color: colors.dark,
  textDecoration: "none",
  fontWeight: "500"
};

const mobileLink = {
  color:colors.dark,
  textDecoration: "none",
  fontWeight: "500"
};