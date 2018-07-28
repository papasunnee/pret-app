import React from 'react'
import Link from 'next/link'

export default (props) => {
        return(
        <section>
            <h2 className="themeColor">Quick Navigate</h2>
            <div className="navigateSection">
                <ul>
                    <li>
                        <Link prefetch href="/home">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/candidate">
                            <a>Candidate</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/logout">
                            <a>Logout</a>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link prefetch href="/jobs">
                            <a>Jobs</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/faqs">
                            <a>FAQs</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/press-release">
                            <a>Press Release</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/refunds-and-cancellation">
                            <a>Refunds & Cancellation</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/strategic-partners">
                            <a>Strategic Partners</a>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link prefetch href="/sample-question">
                            <a>Sample Questions</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/sample-reports">
                            <a>Sample Reports</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/testimonials">
                            <a>Testimonials</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/events">
                            <a>Events</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/newsletter-articles">
                            <a>Newsletter Articles</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}