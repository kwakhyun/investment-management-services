## 투자 관리 서비스의 관리자 기능 구현

> 2022-11-12 ~ 2022-11-18

로그인|계좌 목록 정렬
:-|:-
![login (1)](https://user-images.githubusercontent.com/102936206/202605000-8e583df3-1ba7-41be-8f4a-f8ac786c748d.gif)|![filter-preface](https://user-images.githubusercontent.com/102936206/202604777-a30ca0b6-2888-492d-94f6-7dd1dcd25df0.gif)
**계좌 목록 - 페이지네이션, 검색**|**계좌 상세 - 계좌 이름 변경**
![pagenation-search-preface](https://user-images.githubusercontent.com/102936206/202605337-29486e7b-4b35-406d-86ff-f6c677b381a2.gif)|![account-detail-edit](https://user-images.githubusercontent.com/102936206/202609424-e088fcdc-3e03-465f-a14f-42ad8fa95f82.gif)
**사용자 목록 - 정렬**|**사용자 목록 - 페이네이션, 검색**
![filter-preface-users](https://user-images.githubusercontent.com/102936206/202605368-fbcc6265-5edc-4103-a2b7-0812301860f9.gif)|![pagenation-search-preface-users](https://user-images.githubusercontent.com/102936206/202605419-b43de6ff-3648-440d-abb4-d66899a93cd0.gif)
**사용자 상세-사용자 이름 수정, 사용자 삭제**
![edit-delete-users](https://user-images.githubusercontent.com/102936206/202605488-42fb6793-ebca-4500-b2ec-5d0c69d84f0a.gif)
<br>

## 🚀 기능 요구사항
1. 화면 구성
    - 로그인
    - Header
    - Footer
    - Sider
    - Content
        - 계좌 목록
        - 계좌 상세
        - 사용자 목록
        - 사용자 상세
2. 레이아웃 구성
    
    ![https://user-images.githubusercontent.com/1831308/184299776-53e7c423-73d4-4b7e-9fcf-acaab20ece1a.png](https://user-images.githubusercontent.com/1831308/184299776-53e7c423-73d4-4b7e-9fcf-acaab20ece1a.png)
    
    ![image](https://user-images.githubusercontent.com/73919235/204838842-74e8ddbd-7289-4f43-bf3d-5bbc907d1f80.png)

3. 메뉴 구성
    
    ![image](https://user-images.githubusercontent.com/73919235/204838991-f438d07f-dba9-4e82-bf42-b4e7e2dc1bc9.png)
    
4. 사용자 목록
    - 표기되어야 하는 정보
        - 고객명(name) : 가운데 글자 마스킹 필요, 두글자일 경우 성을 제외한 이름 마스킹 처리, 4글자 이상일 경우 마스킹 처리 후 앞뒤 한글자만 표기
            - 고객명을 누를 경우 사용자 상세화면으로 이동합니다.
        - 보유중인 계좌수(account_count) : (해당 API 호출 후 데이터를 정제하여 표기)
        - 이메일 주소 (email)
        - 주민등록상 성별코드 (gender_origin)
        - 생년월일 (yyyy-mm-dd) (birth_date)
        - 휴대폰 번호 (가운데 4자리 `***` 로 마스킹 필요) (phone_number)
        - 최근로그인 (last_login)
        - 혜택 수신 동의 여부 (해당 API 호출 후 데이터를 정제하여 표기) (allow_marketing_push)
        - 활성화 여부 (해당 API 호출 후 데이터를 정제하여 표기) (is_active)
        - 가입일 (created_at)
    - 구현되어야 하는 기능
        - 목록에서는 활성화 여부, 임직원 계좌 여부를 필터링 할 수 있어야 합니다.
        - 리스트 페이지에서는 검색이 가능해야 합니다.
            - `json-server` 의 Full-text Search API 를 사용하여 구현합니다.
            - 예시 : GET [http://localhost:3000/users?q=South](http://localhost:3000/users?q=South)
        - 페이지네이션이 되어야 합니다.
            - `json-server` 의 Paginate API 를 사용하여 구현합니다.
            - 예시 : GET [http://localhost:3000/users?\\_page=1&\\_limit=20](http://localhost:3000/users?%5C%5C_page=1&%5C%5C_limit=20)
        - 임의로 신규 사용자를 추가할 수 있어야 합니다.
        - 잘못 생성한 사용자를 삭제할 수 있어야 합니다.
        - 개명을 한 사용자를 위해 사용자명을 변경할 수 있어야 합니다.
5. 계좌 목록
    - 표기되어야 하는 정보
        - 고객명(user_name) : 고객ID 를 참조하여 실제 이름으로 보여져야 합니다.
            - 고객명을 누를 경우 사용자 상세화면으로 이동합니다.
        - 브로커명(broker_name) : 예시) OO증권, `brokers.json` 를 참조하여 실제 이름으로 보여져야 합니다.
        - 계좌번호(number) : 앞 뒤 각각 두글자를 제외하고 나머지는 글자수에 맞게 `*` 글자로 마스킹 처리가 필요합니다.
        - 계좌상태(status) : 예시) 운용중, `accountStatus.json` 를 참조하여 실제 이름으로 보여져야 합니다.
        - 계좌명(name) : 계좌명입니다.
        - 평가금액(assets) : 예시) 123,123,123
        - 입금금액(payments) : 예시) 123,123,123
        - 계좌활성화여부(is_active) : 계좌 활성화 여부
        - 계좌개설일(created_at) :
    - 구현되어야 하는 기능
        - 목록에서는 브로커명, 계좌 활성화 여부, 계좌 상태를 필터링 할 수 있어야 합니다.
        - 리스트 페이지에서는 검색이 가능해야 합니다.
            - `json-server` 의 Full-text Search API 를 사용하여 구현합니다.
            - 예시 : GET [http://localhost:3000/accounts?q=South](http://localhost:3000/accounts?q=South)
        - 페이지네이션이 되어야 합니다.
            - `json-server` 의 Paginate API 를 사용하여 구현합니다.
            - 예시 : GET [http://localhost:3000/accounts?_page=2&_limit=20](http://localhost:3000/accounts?%5C%5C_page=2&%5C%5C_limit=20)
6. 상세
    - 각 사용자, 계좌의 상세 페이지는 획득 가능한 대부분의 정보를 표시해주시면 됩니다.
7. 조건
    - Sider 메뉴에서는 현재 보고 있는 화면에 해당하는 메뉴가 하이라이트 되어야 합니다.
    - 새로고침을 해도 로그인 상태가 유지되어야 하며, 상태에 따라 기존에 머무르던 화면이 그대로 보여야 합니다.
    - 계좌 리스트에서 계좌번호를 누르면 계좌상세 화면으로 이동합니다.
    - 계좌 리스트에서 사용자 이름을 누르면 사용자 상세로 이동합니다.
    - 사용자 상세에서 사용자의 계좌목록이 보여야 합니다.
    - 계좌 목록에서 각 계좌 상태별로 필터링이 가능해야 합니다.
    - 수익률이 플러스인 계좌의 총자산 금액은 빨간색, 원금과 동일한 경우 검정색, 마이너스일 경우 파란색으로 보여줘야 합니다.
    - 계좌 목록에서 broker_id 에 해당하는 실제 브로커명 (OO투자증권) 이 보여야 합니다.
8. 예시
    
    > 이 화면은 임의로 생성한 테스트 데이터로 보여지는 단순 예시 화면으로, 실제와는 무관합니다. 
    예시로 만든 화면이며, 디자인 가이드가 아닙니다. 형식만 참고하여 개발을 진행해주세요.
    > 
    - 로그인 화면
        
        ![https://user-images.githubusercontent.com/1831308/184299811-8ec25452-21bc-4466-96fb-8d72f9de5acd.png](https://user-images.githubusercontent.com/1831308/184299811-8ec25452-21bc-4466-96fb-8d72f9de5acd.png)
        
    - 리스트 화면
        
        ![https://user-images.githubusercontent.com/1831308/184299994-2f2d402d-2056-4876-83ed-809cc9c067df.png](https://user-images.githubusercontent.com/1831308/184299994-2f2d402d-2056-4876-83ed-809cc9c067df.png)
        
    - 상세 화면
        
        ![https://user-images.githubusercontent.com/1831308/184299853-e586103b-131a-4950-be92-feabe7d973ab.png](https://user-images.githubusercontent.com/1831308/184299853-e586103b-131a-4950-be92-feabe7d973ab.png)
        
9. 추가 구현 사항
    - `brokerFormat.json` 의 형식에 맞춘 계좌번호가 표기 (예: 123-123-123123-10)
    - 상황별 예외처리
