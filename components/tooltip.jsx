import React, { useState, useRef } from 'react';

export default function Tooltip({ children, content }) {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => {
        setVisible(true);
    };

    const hideTooltip = () => {
        setVisible(false);
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            {visible && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 p-2 rounded-sm bg-slate-700 text-white whitespace-nowrap z-10">
                    {content}
                </div>
            )}
        </div>
    );
}
