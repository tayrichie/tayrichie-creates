import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import ResumeCard from "./ResumeCard";

export default class Experience extends Component {
    render() {
        return (
            <ResumeSection id="experience" title="Experience">
                <ResumeCard
                    title="Solutions Architect"
                    subtitle="Deque Systems"
                    titleNotes="Oct 2021 - Present"
                >
                    Build relationships by providing excellent pre-sales
                    support. Work directly with customers and be the SME for
                    Deque products. Help customers to expand and grow their
                    accessibility programs. Guide technical qualifications
                    discussions with customers. Deliver product demonstrations
                    that directly address customer needs. Lead product
                    evaluations and other proof-of-concept activities. Work
                    directly with product management and engineering teams to
                    share knowledge.
                </ResumeCard>
                <ResumeCard
                    title="Developer Consultant"
                    subtitle="Deque Systems"
                    titleNotes="May 2019 - Oct 2021"
                >
                    Provide consulting on developing accessible components and
                    websites using HTML, JavaScript, and ARIA. Work with
                    customer’s tech stack to find and implement solutions to
                    accessibility issues. Help customers get set up with product
                    implementations, remotely or on-site. Create new features
                    for and maintain Deque product suite. Provide immediate
                    accessibility remediation via custom implementations of
                    Deque products. Train developers on accessibility
                    techniques.
                </ResumeCard>
                <ResumeCard
                    title="Front-end Developer"
                    subtitle="Adage Technologies"
                    titleNotes="Jan 2018 - May 2019"
                >
                    Build semantic, accessible, and maintanable front-end
                    interfaces with HTML5, CSS3, and JavaScript. Accurately
                    translate designs and prototypes into working interfaces.
                    Maintain and improve front-end codebases across a variety of
                    projects. Collaborate with UI and UX designers to promote
                    and achieve optimal solutions for clients.
                </ResumeCard>
                <ResumeCard
                    title="Front-end Developer"
                    subtitle="Maycreate"
                    titleNotes="Jul 2015 - Dec 2017"
                >
                    Cultivate understanding off cross-browser and cross-platform
                    compatibility and bugs and ways to work around them. Deliver
                    scalable and semantically-correct code. Provide
                    documentation and training for client on the use and
                    maintenance of their website. Create a number of reusable
                    scripts and patterns that can be used alone or in
                    conjunction with unique client features.
                </ResumeCard>
            </ResumeSection>
        );
    }
}
