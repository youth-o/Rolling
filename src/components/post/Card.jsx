import styled, { css } from 'styled-components';
import '../../assets/color.css';
// import { useState } from 'react';

const Text = css`
  font-family: Pretendard;
  font-style: normal;
`;
const userStateColors = {
  가족: { background: 'var(--green100)', color: 'var(--green500)' },
  동료: { background: 'var(--purple100)', color: 'var(--purple600)' },
  지인: { background: 'var(--orange100)', color: 'var(--orange500)' },
  친구: { background: 'var(--blue100)', color: 'var(--blue500)' },
};
export const CardContentWrapper = styled.div`
  position: relative;
  max-width: 384px;
  width: 32%;
  height: 280px;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  background: var(--white);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  @media (max-width: 1023px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const CardContent = styled.div`
  margin: 28px 24px 24px;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 14px;
`;

const UserPicture = styled.img`
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;

  border-radius: 100px;
  border: 1px solid var(--gray200);
  background: var(--white);
`;

const UserText = styled.div`
  ${Text}
  display: block;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;

const UserName = styled.span`
  font-weight: 700;
`;

const UserState = styled.div`
  display: flex;
  padding: 1.5px 8px 0;
  margin-top: 6px;
  width: 41px;
  height: 20px;
  text-align: center;
  align-items: center;

  border-radius: 4px;
  background: ${({ state }) =>
    userStateColors[state]
      ? userStateColors[state].background
      : 'defaultColor'};
  color: ${({ state }) =>
    userStateColors[state] ? userStateColors[state].color : 'defaultColor'};

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
`;

const SplitHorizontal = styled.div`
  width: 100%;
  height: 1px;
  background: var(--gray200);
  margin: 15px auto;
`;

const CardContentTextContainer = styled.div`
  height: 112px;
  width: 312px;
`;

const CardContentText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow-wrap:break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--gray600);
  width: 100%;
  /* max-height: 112px; */
  /* max-width: 312px; */

  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.18px;

  flex-wrap: wrap;
`;

const CardCreatedAt = styled.div`
  ${Text}
  position: absolute;
  left: 24px;
  bottom: 24px;

  color: var(--gray400);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.06px;
`;

function Card({
  src,
  name,
  cardFont,
  userState = '친구',
  cardContent = '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
  cardCreatedAt = '2023.07.08',
}) {
  // const [cardFont, setCardFonts] = useState('');

  const createdDays = new Date(cardCreatedAt);

  // const handleCardFontChange = (fonts) => {
  //   setCardFonts(fonts);

  //   console.log(cardFont);
  // };

  const fontClass = {
    'Noto Sans': 'noto-sans',
    Pretendard: 'pretendard',
    나눔명조: 'nanum-gothic',
    '나눔손글씨 손편지체': 'nanum-myeongjo',
  };

  const font = fontClass[cardFont] || '';

  return (
    <CardContentWrapper>
      <CardContent>
        <UserInfo>
          <UserPicture src={src} alt="프로필" />
          <UserText>
            From. <UserName>{name}</UserName>
            <UserState state={userState}>{userState}</UserState>
          </UserText>
        </UserInfo>
        <SplitHorizontal />
        <CardContentTextContainer>
          <CardContentText
            dangerouslySetInnerHTML={{ __html: cardContent }}
            className={font}
          />
        </CardContentTextContainer>

        <CardCreatedAt>
          {`${createdDays.getFullYear()}. ${
            createdDays.getMonth() + 1
          }. ${createdDays.getDate()}`}
        </CardCreatedAt>
      </CardContent>
    </CardContentWrapper>
  );
}
export default Card;
