import React, { useState } from "react";
import Navbar from "../components/Navbar";

const colors = {
    background: "linear-gradient(135deg, #f5f8fb, #d1d5db)",
    dark: "#070b12",
    lightText: "#6b7280",
    primary: "#f27115",
    primaryHover: "rgb(188, 84, 10)"
};

const workshops = [
    {
        id: 1,
        name: "ISCP",
        duration: 1,
        description: `
      <h4>Introduction</h4>
      <ul>
        <li>Overview of Scientific Computing</li>
        <li>Basic tools and workflow</li>
      </ul>
    `,
        terms: `
      <ul>
        <li>Minimum 25 participants required</li>
        <li>Internet access is mandatory</li>
      </ul>
    `
    },
    {
        id: 2,
        name: "Basics of Python",
        duration: 3,
        description: `
      <h4>What you'll learn</h4>
      <ul>
        <li>Python fundamentals</li>
        <li>Plotting with matplotlib</li>
        <li>Working with lists and functions</li>
      </ul>
    `,
        terms: `
      <ul>
        <li>Laptop required</li>
        <li>Basic programming knowledge preferred</li>
      </ul>
    `
    },
    {
        id: 3,
        name: "Advanced Python",
        duration: 2,
        description: `
      <h4>Advanced Topics</h4>
      <ul>
        <li>NumPy and arrays</li>
        <li>Data handling</li>
        <li>Performance optimization</li>
      </ul>
    `,
        terms: `
      <ul>
        <li>Must complete Basics of Python first</li>
        <li>Strong coding familiarity required</li>
      </ul>
    `
    }
];

function WorkshopTypes({ user, setUser, setPage }) {
    const [openId, setOpenId] = useState(null);

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #f8fafc, #f1f5f9, #fff7ed)"
        }}>

            <Navbar user={user} setUser={setUser} setPage={setPage} />

            <div style={{
                padding: "180px 16px 0",
                maxWidth: "900px",
                margin: "0 auto"
            }}>

                <div style={{
                    position: "relative",
                    marginBottom: "30px"
                }}>
                    <div style={{
                        position: "absolute",
                        top: "-40px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "400px",
                        height: "150px",
                        background: "radial-gradient(circle, rgba(242,113,21,0.25), transparent 70%)",
                        filter: "blur(60px)",
                        zIndex: 0
                    }} />

                    <h1 style={{
                        position: "relative",
                        zIndex: 1,
                        textAlign: "center",
                        marginBottom: "30px",
                        color: colors.dark,
                        fontFamily: "'Boldonse', sans-serif",
                        letterSpacing: "0.5px"
                    }}>
                        Workshop Types
                    </h1>
                </div>

                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Sr No</th>
                            <th style={thStyle}>Workshop Name</th>
                            <th style={thStyle}>Workshop Duration (Days)</th>
                            <th style={thStyle}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {workshops.map((w, index) => (
                            <React.Fragment key={w.id}>
                                <tr
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <td style={tdStyle}>{index + 1}</td>
                                    <td style={tdStyle}>{w.name}</td>
                                    <td style={tdStyle}>{w.duration}</td>
                                    <td style={tdStyle}>
                                        <button
                                            style={buttonStyle}
                                            onClick={() =>
                                                setOpenId(openId === w.id ? null : w.id)
                                            }
                                        >
                                            {openId === w.id ? "Hide Details" : "View Details"}
                                        </button>
                                    </td>
                                </tr>

                                {openId === w.id && (
                                    <tr
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        <td colSpan="4" style={{ padding: "20px", background: "transparent" }}>
                                            <div style={expandBox}>

                                                <div style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    borderRadius: "14px",
                                                    background:
                                                        "radial-gradient(circle at top left, rgba(242,113,21,0.15), transparent 60%)",
                                                    zIndex: 0,
                                                    pointerEvents: "none"
                                                }} />

                                                <div style={{ position: "relative", zIndex: 1 }}>

                                                    <h3 style={sectionTitle}>Description</h3>
                                                    <div
                                                        style={sectionContent}
                                                        dangerouslySetInnerHTML={{ __html: w.description }}
                                                    />

                                                    <h3 style={sectionTitle}>Terms & Conditions</h3>
                                                    <div
                                                        style={sectionContent}
                                                        dangerouslySetInnerHTML={{ __html: w.terms }}
                                                    />

                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>

            </div>

            <footer>
                <p style={{
                    textAlign: "center",
                    marginTop: "40px",
                    fontSize: "12px",
                    color: "#6b7280"
                }}>
                    © 2026 FOSSEE, IIT Bombay
                </p>
            </footer>
        </div>
    );
}

export default WorkshopTypes;

const tableStyle = {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 12px",

    background: "linear-gradient(135deg, #ffffff, #f8fafc)",
    borderRadius: "16px",
    padding: "10px",

    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
};

const thStyle = {
    textAlign: "left",
    padding: "12px 15px",
    color: "#6b7280",
    fontSize: "13px",
    fontWeight: "600"
};

const tdStyle = {
    padding: "16px",
    background: "linear-gradient(135deg, #ffffff, #fff7ed)",
    borderTop: "1px solid #f3f4f6",
    borderBottom: "1px solid #f3f4f6",
    color: "#111827"
};

const buttonStyle = {
    padding: "8px 14px",
    border: "1px solid #f27115",
    borderRadius: "6px",
    background: "transparent",
    color: "#f27115",
    cursor: "pointer",
    transition: "all 0.2s ease"
};

const expandBox = {
    position: "relative",
    padding: "25px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #ffffff, #f8fafc)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    overflow: "hidden"
};

const sectionTitle = {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#111827",
    fontFamily: "'Inter', sans-serif"
};

const sectionContent = {
    fontSize: "14px",
    color: "#374151",
    lineHeight: "1.7"
};