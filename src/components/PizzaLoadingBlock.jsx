import React from "react";
import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
    return (
        <ContentLoader
            speed={2}
            width={250}
            height={400}
            viewBox="0 0 250 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="25" y="218" rx="3" ry="3" width="200" height="30" />
            <rect x="90" y="326" rx="3" ry="3" width="52" height="6" />
            <circle cx="125" cy="100" r="100" />
            <rect x="24" y="258" rx="3" ry="3" width="200" height="74" />
            <rect x="25" y="346" rx="3" ry="3" width="64" height="20" />
            <rect x="158" y="346" rx="3" ry="3" width="64" height="20" />
        </ContentLoader>
    )
}

export default PizzaLoadingBlock;