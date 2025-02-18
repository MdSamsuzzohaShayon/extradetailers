import { TModuleStyle } from '@/types';
import React from 'react';

interface IWhyPartnerProps{
    styles: TModuleStyle;
}

function WhyPartner({styles}: IWhyPartnerProps) {
    return (
        <div className="container">
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
        </div>
    )
}

export default WhyPartner