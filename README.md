# 투자 관리 서비스의 관리자 기능 구현

> 수행 기간: 2022-11-12 ~ 2022-11-18 (7일)
<br/>**📎[배포링크 바로가기](https://pre-onboarding-7th-3-2-6-gold.vercel.app/)**

## 🔑 테스트 계정
ID: rhkrgus01@test.com<br/>
PW: rhkrgus01
<br>

## 🚀 기능 요구사항

- **레이아웃**
    - Header - 현재 보고있는 메뉴 와 사용자명 보여줘야 함
    - Sider - 현재 보고있는 메뉴 하이라이트
    - Footer - Copyright © December and Company Inc. 가운데 정렬
- **계좌목록**
    - 브로커명, 계좌 활성화 여부, 계좌 상태 필터링
    - 검색, 페이지네이션
    - 기타
        - 고객명 클릭시 사용자 상세화면으로 이동
        - 계좌번호를 누르면 계좌상세 화면으로 이동
        - 계좌번호 앞뒤 두글자 제외하고 나머지  `*` 마스킹 처리
- **계좌상세**
- **사용자 목록**
    - 활성화 여부, 임직원 계좌 여부를 필터링
    - 검색, 페이지네이션
    - 신규 사용자 추가, 잘못 생성한 사용자 삭제, 사용자명 변경
    - 기타
        - 고객명: 가운데 글자 마스킹, 두글자일 경우 성을 제외한 이름 마스킹 처리, 4글자 이상일 경우 마스킹 처리 후 앞뒤 한글자만 표기, 고객명을 클릭시 사용자 상세화면으로 이동
        - 휴대폰 번호 (가운데 4자리 `***` 로 마스킹)
- **사용자 상세**

## 🖥 미리보기
로그인|계좌목록 정렬
:-|:-
![login (1)](https://user-images.githubusercontent.com/102936206/202605000-8e583df3-1ba7-41be-8f4a-f8ac786c748d.gif)|![filter-preface](https://user-images.githubusercontent.com/102936206/202604777-a30ca0b6-2888-492d-94f6-7dd1dcd25df0.gif)
**계좌목록-페이지네이션,검색**|**계좌상세-계좌명변경**
![pagenation-search-preface](https://user-images.githubusercontent.com/102936206/202605337-29486e7b-4b35-406d-86ff-f6c677b381a2.gif)|![account-detail-edit](https://user-images.githubusercontent.com/102936206/202609424-e088fcdc-3e03-465f-a14f-42ad8fa95f82.gif)
**사용자목록-정렬**|**사용자목록-페이네이션,검색**
![filter-preface-users](https://user-images.githubusercontent.com/102936206/202605368-fbcc6265-5edc-4103-a2b7-0812301860f9.gif)|![pagenation-search-preface-users](https://user-images.githubusercontent.com/102936206/202605419-b43de6ff-3648-440d-abb4-d66899a93cd0.gif)
**사용자상세-사용자명수정, 사용자삭제**
![edit-delete-users](https://user-images.githubusercontent.com/102936206/202605488-42fb6793-ebca-4500-b2ec-5d0c69d84f0a.gif)