import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutNavigation.css'

class AboutNavigation extends Component {

    render() {
        return (
            <div class="About-section">
                <ul class="List-items">
                    <li>
                        <Link to="/education">
                            Education
                        </Link>
                    </li>
                    <li>
                        Volunteering
                    </li>
                    <li>
                        Hobbies
                    </li>
                    <li>
                        Work Experience
                    </li>
                </ul>
            </div>
        );
    }
}

export default AboutNavigation;