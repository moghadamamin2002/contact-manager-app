import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKGROUND, PURPLE, FOREGROUND, CURRENTLINE, PINK } from "../helpers/color";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/api/auth/login", {
                email,
                password,
            });
            if (response.status === 200) {
                
                localStorage.setItem("token", response.data.token);
                 navigate("/dashboard");
            }
        } catch (err) {
            setError("ایمیل یا رمز عبور اشتباه است.");
        }
    };

    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card" style={{ borderRadius: "1rem", backgroundColor: CURRENTLINE, color: FOREGROUND }}>
                                <div className="card-body p-5 text-center">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            <h2 className="fw-bold mb-2 text-uppercase">ورود به حساب کاربری</h2>
                                            <p className="text-white-50 mb-5" style={{ color: FOREGROUND }}>لطفا ایمیل و پسورد خود را وارد نمایید.</p>

                                            {error && <p style={{ color: 'red' }}>{error}</p>}

                                            <div data-mdb-input-init className="form-outline form-white mb-4">
                                                <input
                                                    type="email"
                                                    id="typeEmailX"
                                                    className="form-control form-control-lg"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div data-mdb-input-init className="form-outline form-white mb-4">
                                                <input
                                                    type="password"
                                                    id="typePasswordX"
                                                    className="form-control form-control-lg"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <button
                                                data-mdb-button-init
                                                data-mdb-ripple-init
                                                className="btn btn-outline btn-lg px-5"
                                                type="submit"
                                                style={{ backgroundColor: PINK }}
                                            >
                                                ورود
                                            </button>
                                        </div>
                                    </form>
                                    <div>
                                        <p className="mb-0">حساب کاربری ندارید؟ <Link to="/register" className="text-50 fw-bold" style={{ color: PURPLE }}>ثبت نام کنید</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
