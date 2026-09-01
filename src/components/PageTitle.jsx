function WaveLines() {
  const wavePath =
    "M0 6 Q10 1 20 6 T40 6 T60 6 T80 6 T100 6 T120 6 T140 6 T160 6 T180 6 T200 6 T220 6 T240 6";

  const waveContainerStyle = {
    display: "flex",
    flex: "1 1 0",
    flexDirection: "column",
    justifyContent: "center",
    gap: "0.05cm",
    width: "100%",
    minWidth: "0",
  };

  const waveStyle = {
    display: "block",
    width: "100%",
    height: "0.18cm",
    overflow: "visible",
  };

  return (
    <span style={waveContainerStyle} aria-hidden="true">
      <svg
        style={waveStyle}
        viewBox="0 0 240 12"
        preserveAspectRatio="none"
      >
        <path
          d={wavePath}
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.78"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <svg
        style={waveStyle}
        viewBox="0 0 240 12"
        preserveAspectRatio="none"
      >
        <path
          d={wavePath}
          fill="none"
          stroke="#ff1493"
          strokeWidth="3.78"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}

export default function PageTitle({ children }) {
  const titleContainerStyle = {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "calc(100vw - 1cm)",
    maxWidth: "none",
    gap: "0.2cm",
    margin: "0 0 1.5cm",
    boxSizing: "border-box",
  };

  const headingStyle = {
    flex: "0 0 auto",
    margin: "0",
    color: "#000000",
    fontSize: "clamp(1.2rem, 4vw, 4rem)",
    lineHeight: "1.2",
    textAlign: "center",
    whiteSpace: "nowrap",
  };

  return (
    <div className="page-title" style={titleContainerStyle}>
      <WaveLines />

      <h1
        className="page-title__heading"
        style={headingStyle}
      >
        {children}
      </h1>

      <WaveLines />
    </div>
  );
}