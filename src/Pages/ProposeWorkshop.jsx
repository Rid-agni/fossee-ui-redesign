import Navbar from "../components/Navbar";

const colors = {
    dark: "#070b12",
    lightText: "#6b7280",
    primary: "#f27115",
    primaryHover: "rgb(188, 84, 10)"
};

function ProposeWorkshop({ user, setUser, setPage }) {
    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #f8fafc, #f1f5f9, #fff7ed)"
        }}>

            <Navbar user={user} setUser={setUser} setPage={setPage} />

            <div style={{
                padding: "180px 20px 40px",
                maxWidth: "1100px",
                margin: "0 auto"
            }}>


                <div style={{ position: "relative", marginBottom: "40px" }}>
                    <div style={heroGlow}></div>

                    <h1 style={heroTitle}>
                        Propose Workshop
                    </h1>

                    <p style={heroSub}>
                        Submit your workshop proposal and we’ll review it shortly.
                    </p>
                </div>


                <div style={noteBox}>
                    Before proposing, please check available workshops in{" "}
                    <span style={{ color: colors.primary, fontWeight: "600" }}>
                        Workshop Types
                    </span>
                </div>


                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <div style={card}>

                        <div style={glow}></div>

                        {/* dropdown */}
                        <select style={inputStyle}>
                            <option>Choose Workshop Type</option>
                            <option>ISCP</option>
                            <option>Basics of Python</option>
                            <option>Advanced Python</option>
                        </select>

                        {/* date */}
                        <input
                            type="date"
                            style={inputStyle}
                        />

                        {/* checkbox */}
                        <label style={checkboxWrap}>
                            <input type="checkbox" />
                            <span>
                                I accept the{" "}
                                <span style={linkStyle}>terms and conditions</span>
                            </span>
                        </label>

                        {/* button */}
                        <button
                            style={buttonStyle}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "0 10px 25px rgba(242,113,21,0.4)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 6px 15px rgba(242,113,21,0.3)";
                            }}
                        >
                            Submit Proposal
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProposeWorkshop;
const heroGlow = {
    position: "absolute",
    top: "-40px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "450px",
    height: "180px",
    background: "radial-gradient(circle, rgba(242,113,21,0.25), transparent 70%)",
    filter: "blur(60px)",
    zIndex: 0
};

const heroTitle = {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    fontFamily: "'Boldonse', sans-serif",
    letterSpacing: "0.5px",
    fontSize: "32px",
    color: "#070b12"
};

const heroSub = {
    textAlign: "center",
    color: "#6b7280",
    marginTop: "8px"
};

const noteBox = {
    background: "linear-gradient(135deg, #ffffff, #f8fafc)",
    padding: "14px 18px",
    borderRadius: "10px",
    marginBottom: "30px",
    border: "1px solid rgba(0,0,0,0.08)",
    textAlign: "center",
    color: "#374151",
    fontSize: "14px"
};

const card = {
    width: "min(420px, 90%)",
    padding: "35px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #ffffff, #fff7ed)",
    border: "1px solid rgba(242,113,21,0.2)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    position: "relative"
};

const glow = {
    position: "absolute",
    inset: 0,
    borderRadius: "16px",
    background: "radial-gradient(circle at top left, rgba(242,113,21,0.15), transparent 60%)",
    zIndex: 0,
    pointerEvents: "none"
};

const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
    background: "rgba(255,255,255,0.9)",
    outline: "none"
};

const checkboxWrap = {
    display: "flex",
    gap: "8px",
    fontSize: "14px",
    color: "#374151"
};

const buttonStyle = {
    marginTop: "10px",
    padding: "14px",
    background: "#f27115",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.2s ease",
    boxShadow: "0 6px 15px rgba(242,113,21,0.3)"
};

const linkStyle = {
    color: "#f27115",
    cursor: "pointer"
};