import styled from "styled-components";
import pic from "../../images/pic.jpg";
import ico from "../../images/ico.jpg";

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
  @media screen and (min-width: 1280px) {
    display: flex;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    min-width: 320px;
    height: 400px;
  }
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    min-width: 768px;
    height: 560px;
  }
  @media screen and (min-width: 1024px){
    max-width: 1280px;
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

export const SectionTitles = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding-top: 30px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 65px;
    width: 485px;
    padding-top: 130px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const Sidebar = styled.div``;

export const Icon = styled.p`
  background-image: url(${ico});
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 23px;
    height: 23px;
  }
  @media screen and (min-width: 768px){
    width: 27px;
    height: 27px;
    margin: 0px auto 15px;
  }
`;

export const Text = styled.p`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 229px;
    height: 48px;
    font-weight: 500;
    font-size: 13px;
    line-height: 1.23;
    margin-top: 10px;
    margin-bottom: 16px;
  }
  width: 397px;
  height: 114px;
  font-size: 24px;
  line-height: 1.583;
  margin-bottom: 28px;
  text-align: center;
`;

export const Author = styled.p`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 2.71;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 109px;
    margin-top: 20px;
  }
  width: 150px;
  height: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;

  color: #898f9f;
  border-top: 1px solid rgba(36, 42, 55, 0.5);
  text-align: center;
`;
