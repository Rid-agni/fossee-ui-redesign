import { useState, useEffect } from "react";

const testimonials = [
    {
        text: "This workshop helped me a lot in learning new things about python. And this is easy to understand and very helpful in future.",
        name: "Saikeerthana Arepalli",
        college: "Shri Guru Gobind Singhji Institute of Engineering and Technology"
    },
    {
        text: "I really liked the kind of content that was available in the workshop. The questions for the quiz were very good. Overall it was a perfect workshop.",
        name: "Suvigya Agrawal",
        college: "Manipal Institute of Technology, Udupi"
    },
    {
        text: "It was really a very good attempt. The whole day was very enjoyable and fruitful. This was the most interesting workshop I’ve attended.",
        name: "Pritam Wanjarkar",
        college: "Shri Guru Gobind Singhji Institute of Engineering and Technology"
    }
];

export default function testimonialslide() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const next = () => {
        setIndex((index + 1) % testimonials.length);
    };

    const prev = () => {
        setIndex((index - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section style={{
            padding: "80px 20px",
            background: "linear-gradient(to bottom, #f9fafb, #f3f4f6)"
        }}>

            <h2 style={{
                textAlign: "center",
                marginBottom: "40px",
                color: "#111827",
                fontSize: "28px"
            }}>
                What People Say
            </h2>
            <div style={{
                maxWidth: "900px",
                margin: "0 auto",
                position: "relative"
            }}>

                {/* card */}
                <div style={{
                    padding: "30px",
                    borderRadius: "16px",
                    background: "rgba(161, 183, 222, 0.50)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",

                    textAlign: "center",
                    height: "260px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}>

                    {/* txt */}
                    <p style={{
                        fontSize: "16px",
                        color: "#212a3a",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                        fontStyle: "italic",
                        opacity: 0.9,
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                    }}>
                        “{testimonials[index].text}”
                    </p>

                    {/* name */}
                    <h4 style={{ margin: "5px 0", color: "#111827" }}>
                        ~ {testimonials[index].name} ~
                    </h4>

                    {/* edu */}
                    <p style={{ fontSize: "13px", color: "#3a3c41" }}>
                        {testimonials[index].college}
                    </p>
                </div>

                <button onClick={prev} style={arrowStyle("left")}>‹</button>
                <button onClick={next} style={arrowStyle("right")}>›</button>

            </div>
        </section>
    );
}
const arrowStyle = (side) => ({
    position: "absolute",
    top: "50%",
    [side]: "10px",
    transform: "translateY(-50%)",
    background: "transparent",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    fontSize: "18px"
});