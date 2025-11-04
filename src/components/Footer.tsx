export default function Footer() { 
  return (
    <footer
      style={{
        padding: "2rem",
        background: "#222",
        color: "#fff",
        textAlign: "center",
      }}
    >
      &copy; {new Date().getFullYear()} FYTRR. All rights reserved.
    </footer>
  );
}