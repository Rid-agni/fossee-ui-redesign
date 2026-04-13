import Navbar from "../components/Navbar";

const colors = {
    background: "linear-gradient(135deg, #f5f8fb, #d1d5db)",
    dark: "#070b12",
    lightText: "#6b7280",
    primary: "#f27115",
    primaryHover: "rgb(188, 84, 10)"
};

function Register({ user, setUser, setPage }) {
    return (
        <div style={{ minHeight: "100vh", background: colors.background }}>
            <Navbar user={user} setUser={setUser} setPage={setPage} />

            <div
                style={{
                    paddingTop: "150px",
                    display: "flex",
                    justifyContent: "center"
                }}
            >

                <form
                    style={{
                        width: "min(700px, 90%)",
                        padding: "40px",
                        borderRadius: "16px",
                        background: "linear-gradient(135deg, #ffffff, #f9fafb)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        border: "1px solid #e5e7eb",
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                        position: "relative",
                        zIndex: 1
                    }}
                >
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "16px",
                        background: "radial-gradient(circle at top left, rgba(242,113,21,0.15), transparent 60%)",
                        zIndex: 0,
                        pointerEvents: "none"
                    }}
                    />

                    <h2
                        style={{
                            textAlign: "center",
                            marginBottom: "10px",
                            color: colors.dark,
                            fontFamily: "'Boldonse', sans-serif",
                            letterSpacing: "0.5px"
                        }}
                    >
                        Coordinator Registration
                    </h2>

                    {/* input */}
                    {[
                        { label: "Username", type: "text" },
                        { label: "Email", type: "email" },
                        { label: "Password", type: "password" },
                        { label: "Confirm Password", type: "password" },
                        { label: "First Name", type: "text" },
                        { label: "Last Name", type: "text" },
                        { label: "Phone Number", type: "tel" },
                        { label: "Institute", type: "text" },
                        { label: "Location", type: "text" }
                    ].map((field) => (
                        <div key={field.label} style={{ display: "flex", flexDirection: "column" }}>
                            <label style={labelStyle}>
                                {field.label} <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                type={field.type}
                                placeholder={field.label}
                                required
                                style={inputStyle}
                            />
                        </div>
                    ))}

                    {/* dropdowns */}
                    <div>
                        <label style={labelStyle}>Title *</label>
                        <select required style={inputStyle}>
                            <option value="">Select Title</option>
                            <option>Prof.</option>
                            <option>Dr.</option>
                            <option>Shri</option>
                            <option>Smt</option>
                            <option>Ku</option>
                            <option>Mr.</option>
                            <option>Mrs.</option>
                            <option>Ms.</option>
                        </select>
                    </div>

                    <div>
                        <label style={labelStyle}>Department *</label>
                        <select required style={inputStyle}>
                            <option value="">Select Department</option>
                            <option>Computer Science</option>
                            <option>Information Technology</option>
                            <option>Civil Engineering</option>
                            <option>Electrical Engineering</option>
                            <option>Mechanical Engineering</option>
                            <option>Chemical Engineering</option>
                            <option>Aerospace Engineering</option>
                            <option>Biosciences and BioEngineering</option>
                            <option>Electronics</option>
                            <option>Energy Science and Engineering</option>
                        </select>
                    </div>

                    <div>
                        <label style={labelStyle}>State *</label>
                        <select required style={inputStyle}>
                            <option value="">Select State</option>

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

                            {/* uts */}
                            <option>Andaman and Nicobar Islands</option>
                            <option>Chandigarh</option>
                            <option>Dadra and Nagar Haveli and Daman and Diu</option>
                            <option>Delhi</option>
                            <option>Jammu and Kashmir</option>
                            <option>Ladakh</option>
                            <option>Lakshadweep</option>
                            <option>Puducherry</option>
                        </select>
                    </div>

                    <div>
                        <label style={labelStyle}>How did you hear about us? *</label>
                        <select required style={inputStyle}>
                            <option value="">Select Option</option>
                            <option>FOSSEE website</option>
                            <option>Google</option>
                            <option>Social Media</option>
                            <option>From other College</option>
                        </select>
                    </div>

                    {/* submit */}
                    <button
                        type="submit"
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
                        Register
                    </button>
                </form>

            </div>

        </div>
    );
}

export default Register;

/* styles */

const labelStyle = {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#374151",
    fontWeight: "500"
};

const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
    outline: "none",
    background: "rgba(255,255,255,0.9)"
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
    fontSize: "15px",
    transition: "all 0.2s ease",
    boxShadow: "0 6px 15px rgba(242,113,21,0.3)"
};