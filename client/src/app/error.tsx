"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg border-0 p-4 text-center" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h2 className="text-danger fw-bold">Oops! Something went wrong</h2>
          <p className="text-muted">An unexpected error occurred. Please try again.</p>

          {/* Display error details (optional) */}
          <div className="alert alert-warning text-start small">
            <strong>Error Details:</strong>
            <pre className="m-0">{error.message}</pre>
          </div>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-primary" onClick={() => reset()}>
              🔄 Try Again
            </button>
            <Link className="btn btn-outline-secondary" href="/">
              🏠 Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
