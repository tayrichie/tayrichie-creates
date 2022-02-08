import React, { Component } from "react";
import ResumeSection from "./ResumeSection";
import ResumeCard from "./ResumeCard";
import { StyledLink } from "../../styles/components/link";

export default class Experience extends Component {
    render() {
        return (
            <ResumeSection id="contact" title="Contact Me">
                <ResumeCard title="" subtitle="" titleNotes="">
                    Find me on{" "}
                    <StyledLink
                        href="https://www.github.com/tayrichie"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </StyledLink>
                    {" or "}
                    <StyledLink
                        href="https://www.linkedin.com/in/tayrminda/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </StyledLink>
                    .
                </ResumeCard>
            </ResumeSection>
        );
    }
}
