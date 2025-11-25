import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  icon: Icon,
    as: Component = "button",
  ...props
}) => {
  
  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    gradient:"btn relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold tracking-wide border-none rounded-xl  hover:shadow-[0_4px_12px_rgba(164,38,236,0.4)] transition-all duration-300 ease-out active:scale-95",
    outline: "btn border border-purple-600 text-purple-600 hover:bg-purple-50 rounded-xl ",
    ghost: "text-gray-700 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        rounded-md font-medium flex items-center justify-center gap-2
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {loading && (
        <span className="loading loading-spinner loading-sm"></span>
      )}

      {Icon && <Icon size={18} />}

      {children}
    </button>
  );
};

export default Button;
