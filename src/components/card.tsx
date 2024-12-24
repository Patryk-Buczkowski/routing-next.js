const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const cardStyle = {
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 0 1rem rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        border: '1px solid #ddd',
        displat: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return <div style={cardStyle} className={className}>{children}</div>;
}

export default Card;