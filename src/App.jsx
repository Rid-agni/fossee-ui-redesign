function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* navbar starts */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 40px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb"
      }}>
        <h2 style={{ color: "#111827" }}>FOSSEE Workshops</h2>

        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#" style={{ color: "#374151", textDecoration: "none" }}>Home</a>
          <a href="#" style={{ color: "#374151", textDecoration: "none" }}>Workshops</a>
          <a href="#" style={{ color: "#374151", textDecoration: "none" }}>Statistics</a>
          <a href="#" style={{ color: "#374151", textDecoration: "none" }}>Login</a>
        </div>
      </nav>

      {/* hero section starts*/}
      <section style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "#ffffff",
        padding: "20px"
      }}>
        <h1 style={{
          fontSize: "3rem",
          marginBottom: "20px",
          color: "#111827"
        }}>
          Learn. Build. Grow.
        </h1>

        <p style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          marginBottom: "30px",
          color: "#6b7280"
        }}>
          Join FOSSEE workshops to enhance your technical skills with hands-on learning and expert guidance.
        </p>

        <div style={{ display: "flex", gap: "15px" }}>
          <button style={{
            padding: "12px 25px",
            fontSize: "1rem",
            background: "#3b82f6",
            border: "none",
            borderRadius: "6px",
            color: "white",
            cursor: "pointer"
          }}>
            Explore Workshops
          </button>

          <button style={{
            padding: "12px 25px",
            fontSize: "1rem",
            background: "transparent",
            border: "1px solid #111827",
            borderRadius: "6px",
            color: "#111827",
            cursor: "pointer"
          }}>
            View Statistics
          </button>
        </div>
      </section>

    </div>
  )
}
export default App