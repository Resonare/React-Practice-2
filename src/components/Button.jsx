const Button = ({ type = "grey", className = "", children, ...otherProps }) => {
    //Three types: grey, transparent, black
    let classes = "py-3 px-5 text-xl rounded-lg mb-10";

    if (type === "grey") {
        classes += " bg-stone-800 text-stone-400 hover:bg-stone-700";
    } else if (type === "transparent") {
        classes += " bg-transparent no-underline text-stone-900 hover:underline font-semibold";
    } else if (type === "black") {
        classes += " bg-stone-900 text-stone-100 hover:bg-stone-700 font-semibold";
    }

    classes += (" " + className);

    return (
        <button className={classes} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
