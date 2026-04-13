import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
function Statistics({ user, setUser, setPage }) {
    const [showChart, setShowChart] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div style={pageWrapper}>
            <Navbar user={user} setUser={setUser} setPage={setPage} />

            <div style={pageContent}>

                <div style={heroWrap}>
                    <div style={heroGlow}></div>

                    <h1 style={{
                        ...heroTitle,
                        fontSize: isMobile ? "22px" : "32px"
                    }}>Workshop Statistics</h1>
                    <p style={heroSub}>
                        Analyze workshops by filters, state, and type
                    </p>
                </div>

                <div style={{
                    ...layoutGrid,
                    gridTemplateColumns: isMobile ? "1fr" : "minmax(250px, 280px) 1fr"
                }}>

                    {/* filters */}
                    <div style={filterCard}>
                        <div style={glow}></div>

                        <div style={filterHeader}>
                            <h3>Filters</h3>
                            <span style={clearBtn}>Clear</span>
                        </div>

                        <label>From date</label>
                        <input type="date" style={inputStyle} />

                        <label>To date</label>
                        <input type="date" style={inputStyle} />

                        <label>Workshop</label>
                        <select style={inputStyle}>
                            <option value="">All Workshops</option>
                            <option>ISCP</option>
                            <option>Basics of Python</option>
                            <option>Advanced Python</option>
                        </select>

                        <label>State</label>
                        <select style={inputStyle}>
                            <option value="">All States</option>

                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>

                            <option>Andaman and Nicobar Islands</option>
                            <option>Chandigarh</option>
                            <option>Dadra and Nagar Haveli and Daman and Diu</option>
                            <option>Delhi</option>
                            <option>Jammu and Kashmir</option>
                            <option>Ladakh</option>
                            <option>Lakshadweep</option>
                            <option>Puducherry</option>
                        </select>

                        <label>Sort by</label>
                        <select style={inputStyle}>
                            <option>Oldest</option>
                            <option>Newest</option>
                        </select>

                        <div style={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            gap: "10px",
                            marginTop: "10px"
                        }}>
                            <button style={secondaryBtn}>View</button>
                            <button style={primaryBtn}>Download</button>
                        </div>
                    </div>

                    <div style={rightPanel}>

                        <div style={actionBar}>
                            <button
                                style={chipBtn}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.08)";
                                }}
                                onClick={() => setShowChart("state")}
                            >
                                State Chart
                            </button>

                            <button
                                style={chipBtn}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.08)";
                                }}
                                onClick={() => setShowChart("count")}
                            >
                                Workshop Chart
                            </button>
                        </div>

                        {/* table */}
                        <div style={{
                            ...tableCard,
                            overflowX: "auto",
                            maxWidth: "100%"
                        }}>
                            <div style={glow}></div>
                            {!isMobile && (
                                <table style={{
                                    width: "100%",
                                    borderCollapse: "separate",
                                    borderSpacing: "0 14px"
                                }}>
                                    <thead>
                                        <tr style={{ textAlign: "left", color: "#6b7280", fontSize: "13px" }}>
                                            <th>Sr No</th>
                                            <th>Coordinator</th>
                                            <th>Institute</th>
                                            <th>Instructor</th>
                                            <th>Workshop</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr style={rowCard}>
                                            <td style={cellStyle}>1</td>
                                            <td style={cellStyle}>Yogesh Bhalerao</td>
                                            <td style={cellStyle}>SNJB KBJ College</td>
                                            <td style={cellStyle}>Nalina Venkataramani</td>
                                            <td style={cellStyle}>Basics of Python</td>
                                            <td style={cellStyle}>April 28, 2026</td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}
                            {isMobile && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

                                    <div style={mobileCard}>
                                        <div style={mobileRow}><strong>Coordinator:</strong> Yogesh Bhalerao</div>
                                        <div style={mobileRow}><strong>Institute:</strong> SNJB KBJ College</div>
                                        <div style={mobileRow}><strong>Instructor:</strong> Nalina Venkataramani</div>
                                        <div style={mobileRow}><strong>Workshop:</strong> Basics of Python</div>
                                        <div style={mobileRow}><strong>Date:</strong> April 28, 2026</div>
                                    </div>

                                </div>
                            )}
                        </div>

                    </div>

                </div>

            </div>
            {showChart && (
                <div style={modalOverlay}>
                    <div style={modalCard}>

                        <h3 style={{ marginBottom: "15px" }}>
                            {showChart === "state" ? "Workshops by State" : "Workshops by Type"}
                        </h3>

                        {showChart === "state" ? <StateChart /> : <WorkshopChart />}

                        <button
                            onClick={() => setShowChart(null)}
                            style={closeBtn}
                        >
                            Close
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Statistics;
function StateChart() {
    const data = [
        { state: "Maharashtra", workshops: 12 },
        { state: "Tamil Nadu", workshops: 9 },
        { state: "Karnataka", workshops: 7 },
        { state: "Delhi", workshops: 5 }
    ];

    return (
        <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey="state" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="workshops" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
function WorkshopChart() {
    const data = [
        { name: "ISCP", count: 5 },
        { name: "Basics", count: 10 },
        { name: "Advanced", count: 6 }
    ];

    return (
        <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
const modalOverlay = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.3)",
    backdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000
};

const modalCard = {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    width: "90%",
    maxWidth: "600px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
};

const closeBtn = {
    marginTop: "15px",
    padding: "10px",
    border: "none",
    background: "#f27115",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer"
};
const pageWrapper = {
    minHeight: "100%",
    background: "linear-gradient(135deg, #f8fafc, #f1f5f9, #fff7ed)"
};

const pageContent = {
    padding: "180px clamp(16px, 5vw, 60px) 40px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%"
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
    width: "500px",
    height: "200px",
    background: "radial-gradient(circle, rgba(242,113,21,0.25), transparent 70%)",
    filter: "blur(60px)"
};

const heroTitle = {
    fontFamily: "'Boldonse', sans-serif",
    letterSpacing: "0.5px",

    color: "#070b12"
};

const heroSub = {
    color: "#6b7280",
    marginTop: "8px"
};

const layoutGrid = {
    display: "grid",
    gap: "20px"
};
const cellStyle = {
    padding: "16px",
    wordBreak: "break-word",
    whiteSpace: "normal"
};
const filterCard = {
    padding: "20px",
    width: "100%",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #ffffff, #fff7ed)",
    border: "1px solid rgba(242,113,21,0.2)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "relative"
};

const filterHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
};

const clearBtn = {
    fontSize: "13px",
    color: "#f27115",
    cursor: "pointer"
};

const inputStyle = {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb"
};

const rightPanel = {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
};

const actionBar = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: "10px"
};

const chipBtn = {
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(242,113,21,0.25)",
    background: "#f27115",
    color: "white",
    cursor: "pointer",
    fontWeight: "500",
    transition: "all 0.2s ease",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)"
};

const tableCard = {
    borderRadius: "16px",
    background: "linear-gradient(135deg, #ffffff, #f8fafc)",
    padding: "15px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
    position: "relative"
};

const tableStyle = {
    width: "100%",
    minWidth: "600px",
    borderCollapse: "separate",
    borderSpacing: "0 14px"
};

const rowCard = {
    background: "linear-gradient(135deg, #ffffff, #fff7ed)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    borderRadius: "14px",
    overflow: "hidden"
};

const primaryBtn = {
    background: "#f27115",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer"
};

const secondaryBtn = {
    background: "#111827",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer"
};

const glow = {
    position: "absolute",
    inset: 0,
    borderRadius: "16px",
    background: "radial-gradient(circle at top left, rgba(242,113,21,0.12), transparent 60%)",
    pointerEvents: "none"
};
const mobileCard = {
    padding: "16px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #ffffff, #fff7ed)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    border: "1px solid rgba(242,113,21,0.2)"
};

const mobileRow = {
    fontSize: "14px",
    marginBottom: "6px",
    color: "#111827"
};