import React, { useState, useReducer } from "react";
import style from "./style.module.scss";
interface ILoginInfo {
  userName: string;
  password: string;
  email?: string;
}
type ACTIONTYPE =
  | { type: "userName"; payload: string }
  | { type: "password"; payload: string }
  | { type: "email"; payload: string };

const reducer = (prevState: ILoginInfo, action: ACTIONTYPE) => {
  let { userName, password, email } = prevState;
  switch (action.type) {
    case "userName":
      return {
        userName: action.payload,
        password,
        email,
      };
    case "password":
      return {
        userName,
        password: action.payload,
        email,
      };
    case "email":
      return {
        userName,
        password,
        email: action.payload,
      };
    default:
      throw new Error();
  }
};


export const Login: React.FC = () => {
  let [type, setType] = useState<boolean>(true);

  let [loginInfo, dispatchLoginInfo] = useReducer(reducer, {
    userName: "",
    password: "",
    email: "",
  });
  let editInfo = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "userName" | "password" | "email"
  ): void => {
    dispatchLoginInfo({
      type: type,
      payload: e.target.value,
    });
  };
  let toggleType = (): void => {
    setType(!type);
  };
  return (
    <div className={style.loginpage}>
      <div className={style.formstructor}>
        <div className={`${style.signup} ${type ? style.slideup : ""} `}>
          <h2 className={style.formtitle} id="signup" onClick={toggleType}>
            <span>or</span>注册
          </h2>
          <div className={style.formholder}>
            <input
              type="text"
              className={style.input}
              placeholder="用户名"
              onChange={(e) => {
                editInfo(e, "userName");
              }}
            />
            <input
              type="email"
              className={style.input}
              onChange={(e) => {
                editInfo(e, "email");
              }}
              placeholder="邮箱"
            />
            <input
              type="password"
              onChange={(e) => {
                editInfo(e, "password");
              }}
              className={style.input}
              placeholder="密码"
            />
          </div>
          <button className={style.submitbtn}>注 册</button>
        </div>
        <div className={`${style.login} ${type ? "" : style.slideup}`}>
          <div className={style.center}>
            <h2 className={style.formtitle} id="login" onClick={toggleType}>
              <span>or</span>登 录
            </h2>
            <div className={style.formholder}>
              <input
                type="email"
                className={style.input}
                placeholder="邮箱"
                onChange={(e) => {
                  editInfo(e, "email");
                }}
              />
              <input
                type="password"
                onChange={(e) => {
                  editInfo(e, "password");
                }}
                className={style.input}
                placeholder="密码"
              />
            </div>
            <button className={style.submitbtn}>登 录</button>
          </div>
        </div>
      </div>
    </div>
  );
};
