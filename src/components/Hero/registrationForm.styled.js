import styled from "styled-components";
import pic from "../../images/pic.jpg";
// import ico from "../../images/ico.jpg";
import img from "../../images/Vector.jpg";

export const Container = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    height: 790px;
  }
`;

export const SectionLogin = styled.div``;
export const LoginImg = styled.div`
  background-image: url(${pic});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 1280px) {
    width: 549px;
    height: 790px;
  }
`;

export const RegisterForm = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding-top: 50px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 64px;
    padding-bottom: 90px;
  }
  margin: 0px auto;
  padding-top: 170px;
  // background-color: rgb(255, 255, 255);
  width: 100%;
`;

export const RegistrationTitles = styled.div`
  @media screen and (min-width: 768px) {
    background-color: rgb(255, 255, 255);
    width: 477px;
    margin: 0px auto;
  }
  text-align: center;
`;
export const RegistrationTitle = styled.h1`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 32px;
  }

  font-family: "Abril Fatface";
  margin-bottom: 48px;
  font-weight: bold;
  font-size: 34px;
  line-height: 1.118;
`;
export const RegistrationList = styled.ul`
  text-align: left;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding: 0 20px 60px 25px;
  }

  :not(:last-child) {
    @media screen and (min-width: 320px) and (max-width: 767px) {
      // margin-bottom: 24px;
      padding: 0 20px 20px 25px;
    }
    @media screen and (min-width: 768px) and (max-width: 1280px) {
      margin-bottom: 12px;
    }
  }
`;
export const RegistrationHeading = styled.h2`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;
  color: rgb(36, 42, 55);
`;
export const RegistrationItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const RegistrationDesc = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 2.71;
  color: #898f9f;
`;
export const Arrow = styled.p`
  background-image: url(${img});
  background-repeat: no-repeat;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-right: 12px;
    margin-top: 15px;
    align-self: self-start;
  }

  width: 10px;
  height: 10px;
  margin-right: 10px;
`;
