import React, { useState } from 'react';

const OptimizedImage = ({ src, alt, className, style, ...props }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const handleLoad = () => setLoaded(true);
    const handleError = () => setError(true);

    return (
        <div style={{ position: 'relative', ...style }}>
            {!loaded && !error && (
                <div 
                    style={{
                        backgroundColor: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '200px',
                        color: '#666'
                    }}
                >
                    Loading...
                </div>
            )}
            {error && (
                <div 
                    style={{
                        backgroundColor: '#f8f8f8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '200px',
                        color: '#999'
                    }}
                >
                    Image not available
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={className}
                onLoad={handleLoad}
                onError={handleError}
                loading="lazy"
                style={{
                    display: loaded ? 'block' : 'none',
                    maxWidth: '100%',
                    height: 'auto'
                }}
                {...props}
            />
        </div>
    );
};

export default OptimizedImage;
