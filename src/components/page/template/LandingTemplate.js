import React from 'react';

const LandingTemplate = ({contents}) => {
    const { form } =contents
    return (
        <>
            <div className="box_form">
                {form}
            </div>
        </>
    );
};

export default LandingTemplate;