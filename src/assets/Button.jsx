const Button = ({ className = '', onClick, text, active = false }) => {
    console.log(`Button Text: ${text}, Active: ${active}`);
    return (
        <button className={`border px-2 py-2 rounded transition ease-in-out delay-150 bg-blue-500  ${active ? 'bg-blue-500 text-white' : 'bg-transparent text-blue-500'}   active:bg-blue-700 ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
