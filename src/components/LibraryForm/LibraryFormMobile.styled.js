import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperMobail = styled.div`
  width: 320px;
  background-color: #f6f7fb;
  position: absolute;
  left: 0;
  right: 0;
  top: 70px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
`;
export const BookFormMobile = styled.form`
  background-color: #f6f7fb;

  width: 280px;
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 110px;
  margin: auto;
`;
export const BookInputTitleMobile = styled.input`
  width: 274px;
  height: 42px;
  border: 1px solid #a6abb9;
  margin-bottom: 20px;
`;
export const BookInputAuthorMobile = styled.input`
  width: 274px;
  height: 42px;
  border: 1px solid #a6abb9;
  margin-bottom: 20px;
`;
export const BookInputMobile = styled.input`
  width: 274px;
  height: 42px;
  border: 1px solid #a6abb9;
  margin-bottom: 20px;
`;

export const BookLabelMobile = styled.label`
margin-bottom:8px;
    display:block;
    color: #898f9f;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
}
`;
export const BookBntMobile = styled.button`
  display: block;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 72px;
  padding-right: 72px;
  cursor: pointer;

  border: 1px solid #242a37;
  background: #f6f7fb;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  }
`;
export const BackArrowMobile = styled(Link)`
  display: inline-block;
  margin-bottom: 32px;
`;

export const ValidMessegeMobile = styled.span`
  margin-left: 5px;
  font-size: 10px;
  color: red;
`;
export const InputWrapperListMobile = styled.ul`
padding:0px;
  }
`;
export const InputWrapperMobile = styled.li`
  display: inline-block;
`;
