import Navbar from "../components/Navbar";

const colors = {
  background: "linear-gradient(to bottom, #f9fafb, #f3f4f6)",
  dark: "#070b12",
  lightText1: "#6b7280",
  lightText2: "#caba9d",
  primary: "#f27115",
  primaryHover: "rgb(188, 84, 10)"
};

function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f8fb, #d1d5db)"
      }}
    >
      {/* navbar */}
      <Navbar colors={colors} />

      {/*login */}
      <div
        style={{
          paddingTop: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/*card*/}
        
        <div
          style={{
            width: "420px",
padding: "45px 40px",
            borderRadius: "16px",
            width: "min(420px, 90%)",
            background:"linear-gradient(135deg, #ffffff, #f9fafb)",
            backdropFilter: "blur(12px)",

            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            border: "1px solid #e5e7eb",

            position: "relative"
          }}
        >
          <div
  style={{
    position: "absolute",
    inset: 0,
    borderRadius: "16px",
    background:
      "radial-gradient(circle at top left, rgba(242,113,21,0.15), transparent 60%)",
    zIndex: 0,
    pointerEvents: "none" 
  }}
/>
          
          <h2
            style={{
              marginBottom: "25px",
        color: colors.dark,
        textAlign: "center",
        fontSize: "24px",
    fontWeight: "600",
    fontFamily: "'Boldonse', sans-serif",
    letterSpacing: "0.5px"
            }}
          >
            Sign In
          </h2>

          {/*username*/}
          <input
            type="text"
            placeholder="Username"
            style={inputStyle}
          />

          {/*pass*/}
          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
          />

          {/*button*/}
          <button
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = colors.primaryHover;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = colors.primary;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Sign In
          </button>

          {/* link */}
          <div
            style={{
              marginTop: "15px",
              fontSize: "14px",
              color: colors.lightText,
              textAlign: "center"
            }}
          >
            <p style={{ marginBottom: "5px" }}>
              New here? <span style={linkStyle}>Sign up</span>
            </p>
            <p>
              <span style={linkStyle}>Forgot password?</span>
            </p>
          </div>
        </div>
      </div>
      <footer>
      <p style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "12px",
          color: "#6b7280"
        }}>
          © 2026 FOSSEE, IIT Bombay
        </p>
      </footer>
    </div>
  );
}

export default Login;

const inputStyle = {
  width: "100%",
  padding: "14px", 
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
  fontSize: "15px",
  outline: "none",
  background: "rgba(255,255,255,0.9)"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#f27115",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "15px",
  transition: "all 0.2s ease",
  boxShadow: "0 6px 15px rgba(242,113,21,0.3)"
};

const linkStyle = {
  color: "#f27115",
  cursor: "pointer"
};