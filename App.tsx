import { useState, useEffect, useRef } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const url = `https://duckduckgo.com/?q=${encodeURIComponent(query.trim())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="google-page">
      <header className="google-header">
        <nav className="google-nav">
          <a href="#" className="nav-link">Gmail</a>
          <a href="#" className="nav-link">Images</a>
          <button className="apps-btn" aria-label="Google apps">
            <div className="dots-grid">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="dot" />
              ))}
            </div>
          </button>
          <button className="signin-btn">Sign in</button>
        </nav>
      </header>

      <main className="google-main">
        <div className="logo-container">
          <svg viewBox="0 0 272 92" className="google-logo" aria-label="Google">
            <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
            <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
            <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
            <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
            <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
            <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.72.36 15.55 16.32.09 35.5.09c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65z" fill="#4285F4"/>
          </svg>
        </div>

        <form onSubmit={handleSearch} className="search-form">
          <div className="search-box">
            <svg className="search-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="search-input"
              autoComplete="off"
              spellCheck="false"
              aria-label="Search"
            />
            {query && (
              <button
                type="button"
                className="clear-btn"
                onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                aria-label="Clear"
              >
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            )}
            <div className="search-divider" />
            <button type="button" className="voice-btn" aria-label="Search by voice">
              <svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285f4" d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z"/>
                <path fill="#34a853" d="M11 18.08V21h2v-2.92c2.83-.46 5-2.9 5-5.58h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6c0 2.68 2.17 5.12 5 5.58z"/>
                <path fill="#fbbc05" d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" opacity=".3"/>
              </svg>
            </button>
          </div>

          <div className="search-buttons">
            <button type="submit" className="search-btn">Google Search</button>
            <button type="button" className="lucky-btn" onClick={handleSearch}>I'm Feeling Lucky</button>
          </div>

          <div className="search-info">
            <span className="search-info-text">Searches are routed through DuckDuckGo for enhanced privacy.</span>
          </div>
        </form>

        <div className="language-selector">
          Google offered in: <a href="#" className="lang-link">Español</a>
        </div>
      </main>

      <footer className="google-footer">
        <div className="footer-country">United States</div>
        <div className="footer-links">
          <div className="footer-left">
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Advertising</a>
            <a href="#" className="footer-link">Business</a>
            <a href="#" className="footer-link">How Search works</a>
          </div>
          <div className="footer-right">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={SearchPage} />
        <Route component={SearchPage} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
