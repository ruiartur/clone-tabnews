const styles = {
  container: {
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    padding: "24px",
    boxSizing: "border-box",
    textAlign: "center",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    background:
      "repeating-linear-gradient(45deg, #111 0 40px, #1a1a1a 40px 80px)",
    color: "#f5f5f5",
  },
  stripe: {
    width: "100%",
    maxWidth: "480px",
    height: "16px",
    borderRadius: "4px",
    background:
      "repeating-linear-gradient(45deg, #f5c400 0 20px, #111 20px 40px)",
  },
  icon: {
    fontSize: "64px",
    lineHeight: 1,
  },
  title: {
    margin: 0,
    fontSize: "clamp(28px, 6vw, 48px)",
    color: "#f5c400",
  },
  text: {
    margin: 0,
    maxWidth: "480px",
    fontSize: "18px",
    color: "#cfcfcf",
  },
};

function Home() {
  return (
    <main style={styles.container}>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <div style={styles.stripe} />
      <div style={styles.icon} aria-hidden="true">
        🚧
      </div>
      <h1 style={styles.title}>Em construção</h1>
      <p style={styles.text}>
        Estamos trabalhando nesta página. Volte em breve!
      </p>
      <div style={styles.stripe} />
    </main>
  );
}

export default Home;
