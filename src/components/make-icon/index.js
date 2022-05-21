export function MakeIcon(svg) {
    return ({ className }) => (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {svg}
        </svg>
    );
}