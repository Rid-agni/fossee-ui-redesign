
import { useState } from "react";
import TestimonialSlider from "./components/testimonialslide";
import { FaFacebook, FaYoutube, FaGlobe, FaPython, FaChartLine, FaBrain } from "react-icons/fa";

const colors = {
  background: "linear-gradient(to bottom, #f9fafb, #f3f4f6)",
  dark: "#070b12ff",
  lightText: "#caba9d",
  primary: "rgb(188, 84, 10)",
  primaryHover: "rgb(188, 84, 10)"
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

          background: "transparent",
          backdropFilter: "none"
        }}>

          <h2 style={{ color: colors.dark, fontFamily: "'Boldonse', sans-serif",
    letterSpacing: "0.5px" }}>FOSSEE Workshops</h2>

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
        <section style={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          color: colors.bg,
          backgroundImage: "url('https://www.sheridan.edu/app/uploads/2025/02/CTE-Dept-Header.jpg')",
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
            background: "rgba(0, 0, 0, 0.55)"
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
              marginBottom: "20px",
              color: "white",
              fontFamily: "'Boldonse', sans-serif",
    letterSpacing: "0.5px"
            }}>
              Learn. Build. Grow.
            </h1>

            <p style={{
              fontSize: "18px",
              marginBottom: "30px",
              color: "white"
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
          background: colors.primaryHover,
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
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                gap: "8px"
              }}>
                <FaPython size={63} />

              </div>

              <div style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                height: "180px"
              }}>
                <h3 style={{ marginBottom: "10px", color: colors.dark }}>Python Basics</h3>

                <p style={{
                  color: "#6b7280",
                  fontSize: "14px"
                }}>
                  Learn fundamentals of Python programming.
                </p>

                <button style={{
                  marginTop: "auto",
                  alignSelf: "center",

                  padding: "10px 18px",
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",

                  boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
                  transition: "all 0.2s ease"
                }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(249,115,22,0.4)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(249,115,22,0.3)";
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
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                gap: "8px"
              }}>
                <FaChartLine size={68} />

              </div>

              <div style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                height: "180px"
              }}>
                <h3 style={{ marginBottom: "10px", color: colors.dark }}>Data Science</h3>

                <p style={{
                  color: "#6b7280",
                  fontSize: "14px"
                }}>
                  Explore data analysis and visualization.
                </p>

                <button style={{
                  marginTop: "auto",
                  alignSelf: "center",

                  padding: "10px 18px",
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",

                  boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
                  transition: "all 0.2s ease"
                }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(249,115,22,0.4)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(249,115,22,0.3)";
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
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                gap: "8px"
              }}>
                <FaBrain size={68} />

              </div>

              <div style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                height: "180px"
              }}>
                <h3 style={{ marginBottom: "10px", color: colors.dark }}>Machine Learning</h3>

                <p style={{
                  color: "#6b7280",
                  fontSize: "14px"
                }}>
                  Introduction to ML concepts and models.
                </p>

                <button style={{
                  marginTop: "auto",
                  alignSelf: "center",

                  padding: "10px 18px",
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",

                  boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
                  transition: "all 0.2s ease"
                }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(249,115,22,0.4)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(249,115,22,0.3)";
                  }}>
                  View Details
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
      <TestimonialSlider />
      <footer style={{
        padding: "50px 20px",
        background: "#111827",
        color: "#e5e7eb"
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "30px"
        }}>

          {/* lft */}
          <div>
            <h3 style={{ color: "white" }}>FOSSEE Workshops</h3>
            <p style={{ fontSize: "14px", color: "#9ca3af" }}>
              IIT Bombay Initiative
            </p>
          </div>

          {/* centre */}
          <div style={{ fontSize: "14px", color: "#9ca3af" }}>
            <p>Mumbai, India</p>
            <p>+91 22 2576 4133</p>
            <p>workshops@fossee.in</p>
          </div>

          {/* right */}
          <div style={{ display: "flex", gap: "20px" }}>

            <a
              href="https://fossee.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...iconStyle, transition: "transform 0.2s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f97316";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#e5e7eb";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaGlobe />
            </a>

            <a
              href="https://www.facebook.com/FOSSEENMEICT/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...iconStyle, transition: "transform 0.2s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f97316";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#e5e7eb";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.youtube.com/channel/UCMtt6exSCmZI7JU73S6Wz_A"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...iconStyle, transition: "transform 0.2s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f97316";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#e5e7eb";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaYoutube />
            </a>

          </div>
        </div>

        <p style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "12px",
          color: "#6b7280"
        }}>
          © 2026 FOSSEE, IIT Bombay
        </p>
      </footer>
    </>
  )
}
export default App
const navLink = {
  color: colors.dark,
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.2s ease"
};

const mobileLink = {
  color: colors.dark,
  textDecoration: "none",
  fontWeight: "500"
};
const iconStyle = {
  color: "#e5e7eb",
  fontSize: "20px",
  cursor: "pointer",
  transition: "0.3s"
};