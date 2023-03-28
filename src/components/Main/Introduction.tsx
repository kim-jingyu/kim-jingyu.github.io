// 페이지 상단 소개글
import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import ProfileImage from "./ProfileImage";

const BackGround = styled.div`
    width: 100%;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    color: #ffffff;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 768px;
    height: 400px;
    margin: 0 auto;
`

const Subtitle = styled.div`
    font-size: 20px;
    font-weight: 400;
`

const Title = styled.div`
    margin-top: 5px;
    font-size: 35px;
    font-weight: 700;
`

const Introduction: FunctionComponent = function () {
    return(
        <BackGround>
            <Wrapper>
                <ProfileImage />

                <div>
                    <Subtitle>Nice to Meet You!!</Subtitle>
                    <Title>I'm Jingyu!!</Title>
                </div>
            </Wrapper>
        </BackGround>
    )
}

export default Introduction