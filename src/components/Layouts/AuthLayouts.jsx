import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login" ? (
            <>
              Sudah punya akun?{" "}
              <Link to="/register" className="font-bold text-blue-600">
                Register
              </Link>
            </>
          ) : (
            <>
              Belum punya akun?{" "}
              <Link to="/login" className="font-bold text-blue-600">
                Login
              </Link>
            </>
          )}
        </p>
        {/* Tambahkan tombol About di sini */}
        <p className="text-sm mt-5 text-center">
          <Link to="/about" className="font-bold text-blue-600">
            Sports
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
