import styled from "styled-components";

export const BookForm = styled.form`
  width: 280px;
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 110px;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    padding-bottom: 0px;
    dispay: flex;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1280px) {
    width: 1250px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 40px;
    dispay: block;
  }
`;
export const BookInputTitle = styled.input`
  width: 274px;
  height: 42px;
  border: 1px solid #a6abb9;

  @media screen and (min-width: 768px) {
    width: 698px;
  }

  @media screen and (min-width: 1280px) {
    width: 340px;
  }
  }
`;
export const BookInputAuthor = styled.input`
  width: 274px;
  height: 42px;
  border: 1px solid #a6abb9;

  @media screen and (min-width: 768px) {
    width: 330px;
  }

  @media screen and (min-width: 1280px) {
    width: 244px;
  }
`;
export const BookInput = styled.input`
  width: 274px;
  height: 42px;
  border: 1px solid #a6abb9;

  @media screen and (min-width: 768px) {
    width: 146px;
  }
  @media screen and (min-width: 1280px) {
    width: 128px;
  }
`;

export const BookLabel = styled.label`
margin-bottom:8px;
    display:block;
    color: #898f9f;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    @media screen and (min-width: 768px) {
      
    }
}
`;
export const BookBnt = styled.button`
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
  background-color: transparent;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  &:hover {
    color: #ffffff;
    border: none;
    background: #ff6b08;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: auto;
    margin-left: 32px;
    margin-top: 25px;
    margin-bottom: 21px;
    height: 46px;
    padding-left: 77px;
    padding-right: 77px;
  }
`;

export const ValidMessege = styled.span`
  font-size: 12px;
  color: red;
`;
export const InputWrapperList = styled.ul`
padding:0px;
    @media screen and (min-width: 768px) {
      margin-right: -30px;
      display: flex;
      flex-wrap: wrap;
    }

    @media screen and (min-width: 1280px) {
      display: inliune-block  ;
    }
  }
`;
export const InputWrapper = styled.li`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    margin-right: 31px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 16px;
  }
`;
