import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="text-center">
                {/* Large 404 Text */}
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <h2 className="text-dark fw-semibold">Page Not Found</h2>
                <p className="text-muted">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>

                {/* Illustration */}
                <Image
                    src="/svgs/lost-in-space.png" // Replace with actual image URL
                    alt="Lost in space"
                    className="img-fluid my-3"
                    height={200}
                    width={200}
                />

                {/* Return to Home Button */}
                <Link className="btn btn-outline-secondary" href="/">
                    🏠 Return to Home
                </Link>
            </div>
        </div>
    );
}
