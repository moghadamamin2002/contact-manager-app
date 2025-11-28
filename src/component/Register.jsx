import { BACKGROUND ,PURPLE,FOREGROUND ,CURRENTLINE ,PINK} from "../helpers/color";
import { Link } from "react-router-dom";
import { Fragment } from "react"
import Login from "./Login"
import { NavLink } from "react-router-dom";
const Register = () =>{
    return(
        <>
         <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card" style={{ borderRadius: "1rem", backgroundColor: CURRENTLINE, color: FOREGROUND }}>
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">ایجاد حساب کاربری</h2>
                  <p className="text-white-50 mb-5" style={{ color: FOREGROUND }}>لطفا اطلاعات زیر را به منظور ایجاد حساب وارد کنید.</p>

                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline form-white">
                        <input type="text" id="typeFullNameX" className="form-control form-control-lg" placeholder="نام و نام خانوادگی" />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline form-white">
                        <input type="text" id="typeJobX" className="form-control form-control-lg" placeholder="شغل" />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline form-white">
                        <input type="text" id="typeMobileX" className="form-control form-control-lg" placeholder="شماره تلفن" />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline form-white">
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="ایمیل" />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline form-white">
                        <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="رمز عبور" />
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-outline btn-lg px-5" type="submit" style={{ backgroundColor: PINK }}>ثبت نام</button>
                </div>

                <div>
                  <p className="mb-0">حساب کاربری دارید؟ <Link to="/login" className="text-50 fw-bold" style={{ color: PURPLE }}>وارد شوید.</Link></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}
export default Register;