export function MakeTextBase(classNameDefault, $asDefault) {
    return ({ $as = null, children, className }) => {
        const AsComponent = $as || $asDefault;

        return (
            <AsComponent className={`${classNameDefault} ${className}`}>
                {children}
            </AsComponent>
        );
    };
}