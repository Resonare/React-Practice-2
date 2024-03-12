import { forwardRef } from "react";

const Input = forwardRef(({ type, id, children }, ref) => {
    const inputClasses =
        "w-full bg-stone-200 rounded-sm border-b-4 border-stone-300 hover:border-stone-500 outline-none focus:border-stone-500 py-4 px-2 font-semibold text-stone-600 text-lg";

    return (
        <div className="flex flex-col w-full my-6">
            <label
                className="uppercase font-bold text-xl text-stone-500"
                htmlFor={id}
            >
                {children}
            </label>
            {type === "textarea" ? (
                <textarea className={inputClasses} id={id} ref={ref} />
            ) : (
                <input className={inputClasses} type={type} id={id} ref={ref} />
            )}
        </div>
    );
});

export default Input;
