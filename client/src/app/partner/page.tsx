import Landing from '@/components/layout/Landing';
import React from 'react';
import styles from './partner.module.scss';
import Footer from '@/components/layout/Footer';
import { FaBuilding, FaCashRegister, FaClock, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";
import { LiaAssistiveListeningSystemsSolid } from "react-icons/lia";
import { MdLowPriority, MdOutlineVerified } from "react-icons/md";

/**
 * Main -> https://extradetailers.com/become-a-partner-detailer
 * Reference -> https://dribbble.com/shots/20350340-Onboarding
 */

function PartnerPage() {
    return (
        <React.Fragment>
            <main>
                <section className={styles.landing}>
                    <Landing title="Partner" />
                </section>
                {/* Steps start  */}
                <section className="section-pt">
                    <div className="container">
                        <h2 className='mb-3'>We have clients for you</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className={`${styles.cardMain} card mb-3 shadow p-3 mb-5 mb-md-0 border border-0`}>
                                    <div className={`${styles.headerOfCard} card-header border-primary bg-transparent d-flex justify-content-between align-items-center`}>
                                        <span className='display-6'>Step: 1</span>
                                        <FaCashRegister size={50} />
                                    </div>
                                    <div className={`${styles.bodyOfCard} card-body`}>

                                        <h5 className={`${styles.titleOfCard} card-title`}>EASY SIGN UP </h5>
                                        <p className="card-text">Start right away with Extra Detailers all-in-one solution for detailers. You focus on the detailing, and we&apos;ll handle everything else.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className={`${styles.cardMain} card mb-3 shadow p-3 mb-5 mb-md-0 border border-0`}>
                                    <div className={`${styles.headerOfCard} card-header border-primary bg-transparent d-flex justify-content-between align-items-center`}>
                                        <span className='display-6'>Step: 2</span>
                                        <LiaAssistiveListeningSystemsSolid size={50} />
                                    </div>
                                    <div className={`${styles.bodyOfCard} card-body`}>
                                        <h5 className={`${styles.titleOfCard} card-title`}>GET IN THE SYSTEM  </h5>
                                        <p className="card-text">Our verification process is quick and enables us to start sending you appointments and clients from your chosen area immediately.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={`${styles.cardMain} card mb-3 shadow p-3 mb-5 mb-md-0 border border-0`}>
                                    <div className={`${styles.headerOfCard} card-header border-primary bg-transparent d-flex justify-content-between align-items-center`}>
                                        <span className='display-6'>Step: 3</span>
                                        <MdOutlineVerified size={50} />
                                    </div>
                                    <div className={`${styles.bodyOfCard} card-body`}>
                                        <h5 className={`${styles.titleOfCard} card-title`}>COMPLETE & BEGIN  </h5>
                                        <p className="card-text">Once you&apos;re verified, you can log in and begin receiving jobs through Extra Detailers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Steps end */}

                {/* Why partner start */}
                {/* Reference -> https://dev242.kodesolution.com/techon/about/ */}
                <section className="section-pt bg-secondary text-white position-relative">
                    <img src="/imgs/parallax-effect.jpg" alt="" className="position-absolute top-0 start-0 w-50 h-100 object-fit-cover" />
                    <div className={styles.rightSide}>
                        <div className={`${styles.rightSideWrapper} p-5`}>
                            <h2 className='mb-3'>Why partner with Extra Detailers?</h2>
                            <p>Add a few animated shapes in here</p>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="headings d-flex text-primary d-flex justify-content-between">
                                        <div className={`${styles.icon} rounded-circle bg-white d-flex justify-content-center align-items-center`}>
                                            <MdLowPriority size={20} />
                                        </div>
                                        <h5 className="w-75">Lower Commission Rates Compared to Competitors</h5>
                                    </div>
                                    <p className="card-text">Most platforms take a hefty cut—often up to 33%—from every job you complete.With the Extra Detailers network, you&apos;ll only pay a 15% commission. This means more money stays in your pocket, helping you grow your business faster.For example, if we send you a complete car detailing job priced at $299, you will receive $254.15 when the customer pays. </p>
                                </div>
                                <div className="col-md-4">
                                    <div className="headings d-flex text-primary d-flex justify-content-between">
                                        <div className={`${styles.icon} rounded-circle bg-white d-flex justify-content-center align-items-center`}>
                                            <MdLowPriority size={20} />
                                        </div>
                                        <h5 className="w-75">Lower Commission Rates Compared to Competitors</h5>
                                    </div>
                                    <p className="card-text">Most platforms take a hefty cut—often up to 33%—from every job you complete.With the Extra Detailers network, you&apos;ll only pay a 15% commission. This means more money stays in your pocket, helping you grow your business faster.For example, if we send you a complete car detailing job priced at $299, you will receive $254.15 when the customer pays. </p>
                                </div>
                                <div className="col-md-4">
                                    <div className="headings d-flex text-primary d-flex justify-content-between">
                                        <div className={`${styles.icon} rounded-circle bg-white d-flex justify-content-center align-items-center`}>
                                            <MdLowPriority size={20} />
                                        </div>
                                        <h5 className="w-75">Lower Commission Rates Compared to Competitors</h5>
                                    </div>
                                    <p className="card-text">Most platforms take a hefty cut—often up to 33%—from every job you complete.With the Extra Detailers network, you&apos;ll only pay a 15% commission. This means more money stays in your pocket, helping you grow your business faster.For example, if we send you a complete car detailing job priced at $299, you will receive $254.15 when the customer pays. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="container">
                        <h2 className='mb-3'>Why partner with Extra Detailers?</h2>
                        <p>Add a few animated shapes in here</p>
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <div className="card">
                                    <h5 className="card-header">1. Lower Commission Rates Compared to Competitors</h5>
                                    <div className={`${styles.bodyOfCard} card-body`}>
                                        <p className="card-text">Most platforms take a hefty cut—often up to 33%—from every job you complete.With the Extra Detailers network, you&apos;ll only pay a 15% commission. This means more money stays in your pocket, helping you grow your business faster.For example, if we send you a complete car detailing job priced at $299, you will receive $254.15 when the customer pays. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <h5 className="card-header">2. No Upfront Costs for Marketing</h5>
                                    <div className={`${styles.bodyOfCard} card-body`}>
                                        <p className="card-text">Unlike traditional marketing agencies that demand thousands of dollars upfront with no guarantee of success, our platform promotes your services without any upfront fees. You only pay when you get paid. This eliminates the risk and upfront investment, allowing you to focus on what you do best: delivering exceptional car detailing services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <h5 className="card-header">3. Level the Playing Field</h5>
                                    <div className="card-body">
                                        <p className="card-text">Competing with major players in the car detailing industry can feel impossible when you don&apos;t have the resources. That&apos;s where we come in. We believe there’s strength in numbers. By joining our network, you’ll be part of a community of detailers who are all working together to attract more clients and grow their businesses. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <div className="card">
                                    <h5 className="card-header">4. Collective Strength and Support</h5>
                                    <div className="card-body">
                                        <p className="card-text">At Extra Detailers, we believe in the power of community. As part of our network, you&apos;ll have access to resources, support, and shared knowledge that can help you navigate the challenges of running a small business. Together, we can create a force that&apos;s strong enough to compete with the big names.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <h5 className="card-header">5. Transparent and Fair Practices</h5>
                                    <div className="card-body">
                                        <p className="card-text">We believe in transparency and fairness. Our commission rates are straightforward, and there are no hidden fees or unexpected costs. We&apos;re here to help you succeed, and we&apos;re committed to being upfront about what it takes to make that happen.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <h5 className="card-header">6. Access to a Growing Client Base</h5>
                                    <div className="card-body">
                                        <p className="card-text">Connect with a steady stream of clients who value quality detailing services.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <div className="card">
                                    <h5 className="card-header">7. Cash Referral Bonuses</h5>
                                    <div className="card-body">
                                        <p className="card-text">Earn cash for every detailer you refer to the network, and they&apos;ll receive a bonus when they sign up as well!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <h5 className="card-header">8. Support Small Business Growth</h5>
                                    <div className="card-body">
                                        <p className="card-text">By joining our network, you&apos;re contributing to a mission that aims to boost the economy by providing jobs and opportunities to small business detailers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <h5 className="card-header">9. Free Product Sample & Gift Cards</h5>
                                    <div className="card-body">
                                        <p className="card-text">Introduction to our exclusive detailing products that will be available only to detailers in our network. Gift Cards and other prizes redeemable at a lot of place.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </section>
                {/* Why partner end */}

                {/* Application form start  */}
                <section className="section-pt">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 p-4 bg-white shadow rounded">
                                <h2 className="mb-3 text-center text-primary fw-bold">Application Form</h2>
                                <h4 className="mb-4 text-center">Let&apos;s get to know you.</h4>
                                <form >
                                    <div className="row">
                                        {[
                                            { name: "name", placeholder: "First & Last Name", icon: <FaUser /> },
                                            { name: "business", placeholder: "Business Name (if applicable)", icon: <FaBuilding /> },
                                            { name: "email", placeholder: "Email", icon: <FaEnvelope />, type: "email" },
                                            { name: "phone", placeholder: "Phone", icon: <FaPhone /> },
                                            { name: "location", placeholder: "Zip Code / City State", icon: <FaMapMarkerAlt /> }
                                        ].map((input, index) => (
                                            <div className="col-md-6" key={index}>
                                                <div className="mb-3 input-group" >
                                                    <span className="input-group-text bg-primary text-white">{input.icon}</span>
                                                    <input
                                                        type={input.type || "text"}
                                                        className="form-control border-primary"
                                                        placeholder={input.placeholder}
                                                        name={input.name}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {[
                                        { name: "about", placeholder: "Tell us about yourself", icon: <FaUser /> },
                                        { name: "website", placeholder: "Website or social media (if any)", icon: <FaGlobe /> },
                                        { name: "availability", placeholder: "Availability & schedule *", icon: <FaClock /> },
                                        { name: "travel", placeholder: "How far are you willing to travel for jobs? (Radius in miles or specific regions)", icon: <FaMapMarkerAlt /> }
                                    ].map((textarea, index) => (
                                        <div className="mb-3" key={index}>
                                            <label className="form-label">{textarea.placeholder}</label>
                                            <textarea
                                                className="form-control border-primary"
                                                rows={3}
                                                name={textarea.name}
                                            // value={formData[textarea.name]}
                                            // onChange={handleChange}
                                            // placeholder={textarea.placeholder}
                                            ></textarea>
                                        </div>
                                    ))}
                                    <div className="mb-3">
                                        <label className="form-label">Are you willing to travel for jobs?</label>
                                        <div className="d-flex gap-3">
                                            <div className="form-check ">
                                                <input className="form-check-input border-primary" type="radio" name="willingToTravel" value="Yes" required />
                                                <label className="form-check-label">Yes</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input border-primary" type="radio" name="willingToTravel" value="No" required />
                                                <label className="form-check-label">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Application form end  */}

                <section className="section-pt"></section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default PartnerPage;