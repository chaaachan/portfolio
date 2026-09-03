export default function Footer({ topPageOnly = false }) {
  return <footer className={`footer${topPageOnly ? " footer--top-page-only" : ""}`}><p>© 2026 Saori Ogawa Portfolio. All rights reserved.</p></footer>;
}
