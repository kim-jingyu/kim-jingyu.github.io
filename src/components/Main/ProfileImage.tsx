// 소개글 구역에서 사용할 프로필 이미지
import React, {FunctionComponent} from "react"
import styled from "@emotion/styled"

// 프로필 이미지 링크 설정
const PROFILE_IMAGE_LINK = 'https://raw.githubusercontent.com/jingyu9804/jingyu9804.github.io/develop/images/profile.jpeg'

const ProfileImageWrapper = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;
`

const ProfileImage: FunctionComponent = function () {
    return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage