import React from 'react';
import "../includes/style.scss";

const HeaderTitle = (props) => {
    return (
        <div className="header-base">
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="title-base text-left">
                        <h1>{props.title}</h1>
						<p><b>{props.subTitle}</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HeaderTitle
