import {useState} from "react";

const Login = () => {
  const [errEmail,setErrEmail]=useState(false);
  const [errPW,setErrPW]=useState(false);
  return (
    <div className="loginPage">
      <div className="loginWrap">
        <h1>로그인</h1>
        <label>
          <input
            type="text"
            onBlur={(e)=>{
              if(e.target.value === ''){
                setErrEmail(true);
              } else {
                setErrEmail(false);
              }
            }} required
          />
          <span>이메일 주소 또는 휴대폰 번호</span>
        </label>
        {
          errEmail && <p className="error">ⓧ정확한 이메일 주소를 입력해주세요</p>
        }
        <label>
          <input
            type="password"
            onBlur={(e)=>{
              e.target.value === ''? setErrPW(true):setErrPW(false);
            }} required
          />
          <span>비밀번호</span>
        </label>
        {
          errPW && <p className="error">ⓧ비밀번호는 4~20자 사이여야 합니다</p>
        }
        <button>로그인</button>
        <p>또는</p>
        <button>로그인 코드 사용하기</button>
        <a href="#">비밀번호를 잊으셨나요?</a>
        <label>
          <input type="checkbox"/>
          <span>로그인 정보 저장</span>
        </label>
        <div className="sign">
          <p>클론 프로젝트가 어떻게 만들어졌는지 궁금하신가요?</p>
          <a href="#" target="_blank">깃허브에서 살펴보세요</a>
          <p>이 페이지는 <strong>포트폴리오</strong>  용도로 제작된 클론 프로젝트 입니다</p>
        </div>
      </div>
    </div>
  );
};

export default Login;