import Navbar from "../components/Navbar";

function Profile({ user, setUser, setPage }) {
    return (
        <div style={pageWrapper}>
            <Navbar user={user} setUser={setUser} setPage={setPage} />

            <div style={pageContent}>

                <div style={heroWrap}>
                    <div style={heroGlow}></div>

                    <h1 style={heroTitle}>Your Profile</h1>
                    <p style={heroSub}>Manage your account details</p>
                </div>

               
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={profileCard}>

                        <div style={glow}></div>

                        <div style={avatar}>👤</div>

                        <h2 style={name}>Riddhi Agnihotri</h2>
                        <p style={email}>riddhi@email.com</p>

                        <div style={infoRow}>
                            <span>Role:</span>
                            <span>Workshop Coordinator</span>
                        </div>

                        <div style={infoRow}>
                            <span>Institute:</span>
                            <span>Your College Name</span>
                        </div>

                        <button style={buttonStyle}>Edit Profile</button>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Profile;
const profileCard = {
    width: "min(420px, 90%)",
    padding: "35px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #ffffff, #fff7ed)",
    border: "1px solid rgba(242,113,21,0.2)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    textAlign: "center",
    position: "relative"
};

const avatar = {
    fontSize: "40px",
    marginBottom: "10px"
};

const name = {
    fontFamily: "'Boldonse', sans-serif",
    letterSpacing: "0.5px"
};

const email = {
    color: "#6b7280",
    marginBottom: "15px"
};

const infoRow = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontSize: "14px"
};
const pageWrapper = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f8fafc, #f1f5f9, #fff7ed)"
};

const pageContent = {
    padding: "180px clamp(16px, 5vw, 60px) 40px",
    maxWidth: "1100px",
    margin: "0 auto"
};

const heroWrap = {
    position: "relative",
    marginBottom: "40px",
    textAlign: "center"
};

const heroGlow = {
    position: "absolute",
    top: "-40px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "400px",
    height: "150px",
    background: "radial-gradient(circle, rgba(242,113,21,0.25), transparent 70%)",
    filter: "blur(60px)"
};

const heroTitle = {
    fontFamily: "'Boldonse', sans-serif",
    letterSpacing: "0.5px",
    fontSize: "28px",
    color: "#070b12"
};

const heroSub = {
    color: "#6b7280",
    marginTop: "8px"
};

const glow = {
    position: "absolute",
    inset: 0,
    borderRadius: "16px",
    background:
        "radial-gradient(circle at top left, rgba(242,113,21,0.15), transparent 60%)",
    pointerEvents: "none"
};

const buttonStyle = {
    marginTop: "15px",
    padding: "12px",
    background: "#f27115",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
};