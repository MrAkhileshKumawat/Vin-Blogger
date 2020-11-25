import React from 'react';
import "../css/main.css";


export default function Right_nav() {
    return (
            <React.Fragment>
            <div className="col-sm">
                <div className="card">
                    <div className="one">
                        <h4>Related articles</h4>
                        <p>Article 1</p>
                        <p>Article 2</p>
                        <p>Article 3</p>
                        <p>Article 4</p>
                    </div><br></br>
                    <div className="two">
                        <h4>Tags</h4>
                        <p>Blog</p>
                        <p>Design</p>
                        <p>Maximum 3 tags</p>
                        <p>Allowed</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
}
