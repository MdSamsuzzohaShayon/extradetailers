import React from 'react';
import styles from "./elements.module.scss";
// import Image from 'next/image';

function Loader() {
    return (
        <div className='vh-100 w-100 d-flex flex-column justify-content-center align-items-center'>
            {/* <Image src="/logo.png" width={100} height={100} alt="extradetailer-logo" className='mb-3' /> */}
            <div className={`${styles.loader} spinner-border text-primary `} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;