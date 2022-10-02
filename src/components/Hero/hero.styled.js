import styled from "styled-components";
import pic from "../../images/pic.jpg";
import ico from "../../images/ico.jpg";

export const Container = styled.div`
  // width:1280px
  display: flex;
  height: 790px;
`;
export const SectionLogin = styled.div``;
export const LoginImg = styled.div`
  // width: 80%;
  width: 549px;
  height: 790px;
  background-image: url(${pic});
  background-repeat: no-repeat;
  background-size: cover;
  // padding: 185px 82px 185px 83px;
`;

export const SectionTitles = styled.div`
  width: 485px;
  padding-top: 130px;
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
  width: 27px;
  height: 27px;
  margin: 0px auto 15px;
`;

export const Text = styled.p`
  width: 397px;
  height: 114px;
  font-size: 24px;
  line-height: 1.583;
  margin-bottom: 28px;
  text-align: center;
`;

export const Author = styled.p`
  width: 150px;
  height: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;
  margin-top: 20px;
  color: #898f9f;
  border-top: 1px solid rgba(36, 42, 55, 0.5);
  text-align: center;
`;
