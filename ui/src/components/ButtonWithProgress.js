import React from 'react';

const ButtonWithProgress = (props) => {
    const {onClick,pendingApiCall,disabled,text}=props
    return (
        <div>
            <button
                className={"btn btn-primary"}
                onClick={onClick}
                disabled={disabled}
            >
                {pendingApiCall && <span className="spinner-border spinner-border-sm me-1"></span>}
                {text}
            </button>
        </div>
    );
};

export default ButtonWithProgress;
