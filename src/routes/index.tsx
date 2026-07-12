import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

// The portfolio is a self-contained static HTML file in /public so it can be
// opened directly in a browser or deployed anywhere. Redirect the app root to it.
function Index() {
  useEffect(() => {
    window.location.replace("/portfolio.html");
  }, []);

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#090b11", color: "#e8ecf5", fontFamily: "system-ui" }}
    >
      <a href="/portfolio.html" style={{ color: "#00e5c7" }}>
        Loading portfolio…
      </a>
    </div>
  );
}
