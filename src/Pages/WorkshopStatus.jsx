import Navbar from "../components/Navbar";

const colors = {
    background: "linear-gradient(135deg, #f5f8fb, #d1d5db)",
    dark: "#070b12",
    lightText: "#6b7280",
    primary: "#f27115"
};

// mock data
const acceptedWorkshops = [
    {
        name: "ISCP",
        instructor: "Dr. Sharma",
        date: "May 12, 2026",
        status: "Accepted"
    }
];

const proposedWorkshops = [
    {
        name: "Basics of Python for 3 day(s)",
        date: "June 2, 2026",
        status: "Pending"
    }
];

function WorkshopStatus({ user, setUser, setPage }) {
    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #f8fafc, #f1f5f9, #fff7ed)"
        }}>
            <Navbar user={user} setUser={setUser} setPage={setPage} />

            <div style={{ padding: "180px clamp(60px, 6vw, 180px) 40px" }}>

                
                <div style={{
                    position: "relative",
                    marginBottom: "40px"
                }}>

                  
                    <div style={{
                        position: "absolute",
                        top: "-40px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "500px",
                        height: "200px",
                        background: "radial-gradient(circle, rgba(242,113,21,0.25), transparent 70%)",
                        filter: "blur(60px)",
                        zIndex: 0
                    }} />

                    {/* content */}
                    <div style={{ position: "relative", zIndex: 1 }}>

                        <h1
                            style={{
                                ...title,
                                fontFamily: "'Boldonse', sans-serif",
                                letterSpacing: "0.5px"
                            }}
                        >
                            Workshop Dashboard
                        </h1>

                        {/* stats */}
                        <div style={statsContainer}>
                            <StatCard label="Total" value={acceptedWorkshops.length + proposedWorkshops.length} />
                            <StatCard label="Accepted" value={acceptedWorkshops.length} />
                            <StatCard label="Pending" value={proposedWorkshops.length} />
                        </div>

                    </div>
                </div>


                {/* accepted */}
                <Section title="Workshops Accepted">
                    {acceptedWorkshops.map((w, i) => (
                        <WorkshopCard key={i} workshop={w} type="accepted" />
                    ))}
                </Section>

                {/* proposed */}
                <Section title="Workshops Proposed By Me">
                    {proposedWorkshops.map((w, i) => (
                        <WorkshopCard key={i} workshop={w} type="pending" />
                    ))}
                </Section>
            </div>

            <footer>
                <p style={footer}>© 2026 FOSSEE, IIT Bombay</p>
            </footer>
        </div>
    );
}

export default WorkshopStatus;

function StatCard({ label, value }) {
    return (
        <div
            style={statCard}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
            }}
        >
            <p style={statLabel}>{label}</p>
            <h2 style={statValue}>{value}</h2>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div style={{ marginTop: "40px" }}>
            <h2 style={sectionTitle}>{title}</h2>
            <div style={sectionBox}>{children}</div>
        </div>
    );
}

function WorkshopCard({ workshop, type }) {
    return (
        <div
            style={{
                ...card,
                borderLeft: `5px solid ${type === "accepted" ? "#22c55e" : "#f59e0b"
                    }`
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
            }}
        >
            <div style={glow}></div>

            <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{ marginBottom: "10px", fontSize: "18px" }}>
                    {workshop.name}
                </h3>

                {workshop.instructor && (
                    <p style={meta}>👨‍🏫 {workshop.instructor}</p>
                )}

                <p style={meta}>📅 {workshop.date}</p>

                <span
                    style={{
                        ...badge,
                        background:
                            type === "accepted"
                                ? "linear-gradient(135deg, #22c55e, #16a34a)"
                                : "linear-gradient(135deg, #f59e0b, #d97706)",
                        color: "white"
                    }}
                >
                    {workshop.status}
                </span>
            </div>
        </div>
    );
}

const title = {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "30px",
    color: "#070b12",
    letterSpacing: "0.5px"
};

const statsContainer = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
};

const statCard = {
    padding: "22px 32px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #ffffff, #f9fafb)",
    minWidth: "160px",
    textAlign: "center",
    boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
    transition: "0.2s",
    border: "1px solid rgba(242,113,21,0.25)",
    boxShadow: "0 10px 30px rgba(242,113,21,0.15)"
};

const statLabel = {
    fontSize: "14px",
    color: "#6b7280"
};

const statValue = {
    fontSize: "28px",
    fontWeight: "700"
};

const sectionTitle = {
    fontSize: "24px",
    marginBottom: "15px",
    color: "#111827",
    fontFamily: "'Boldonse', sans-serif",
    letterSpacing: "0.5px",
    borderBottom: "2px solid rgba(242,113,21,0.3)",
    paddingBottom: "5px",
    display: "inline-block"
};
const sectionBox = {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    padding: "10px"
};

const card = {
    position: "relative",
    padding: "20px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #ffffff, #fff7ed)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "0.2s"
};

const glow = {
    position: "absolute",
    inset: 0,
    borderRadius: "14px",
    background:
        "radial-gradient(circle at top left, rgba(242,113,21,0.15), transparent 60%)",
    pointerEvents: "none"
};

const meta = {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "4px"
};

const badge = {
    display: "inline-block",
    marginTop: "8px",
    padding: "5px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600"
};

const footer = {
    textAlign: "center",
    marginTop: "40px",
    fontSize: "12px",
    color: "#6b7280"
};