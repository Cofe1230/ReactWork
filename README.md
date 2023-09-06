# 리액트 수업

## 프로젝트 만들기
* **node 설치**  
https://nodejs.org/ko/download
* **생성**  
터미널 -> npx create-react-app [프로젝트 이름]
* **오류**  
npm 못찾을때  
npm uninstall -g create-react-app  
npm install create-react-app  
* **프로젝트 시작**  
npm start  
## first-app
* **Counter.js**  
Class 작성, class 안에 숫자 연산 합수 작성후 constructor에서 bind로 연결
* **Counter2.js**  
Class 작성, 숫자연산을 화살표 함수로 작성, 구조 분해 할당, 생명주기  
* **Device.js**  
Class 작성, 컴포넌트 생성  
* **Food.js**  
Function 작성, map을 사용하여 배열 전체 출력  
* **Movie.js**  
Class 작성, app.js(상위)에서 title에 내용을 넣고 movie.js에서 출력 (props)  
* **MyDevice.js**  
MyDevice, MyDevice2 함수로 작성 MyDevice1 Class작성 app.js(상위)에 저장된 데이터를 MyDevice(하위)에서 사용  
## app02-phone
#### 실행화면
![react01](https://github.com/Cofe1230/ReactWork/assets/139449938/dcd6e626-2363-437f-913e-63d0f34e0868)
#### 코드
상위(app.js)에 있는 데이터, 함수를 하위 component에서 사용하여 데이터 출력 및 수정
* **App.js**  
초기 데이터, 추가 및 삭제 함수  
* **PhoneForm.js**  
이름, 전화번호를 입력, 입력하면 상위 컴포넌트인 app.js에 데이터를 추가한다  
* **PhoneList.js**
상위 component에서 데이터, 함수를 받아와서 데이터 배열 개수만큼 PhoneInfo를 사용해 전체 데이터를 출력한다
* **PhoneInfo.js**  
한 사람에 대한 자세한 내용을 출력, 삭제하는 component  
## app03_comment
#### 실행화면
**CommentList**  
![app03_1](https://github.com/Cofe1230/ReactWork/assets/139449938/53f8a506-e5d8-48c1-a50e-8540bbc86e87)  
**TodoList**  
![app03_2](https://github.com/Cofe1230/ReactWork/assets/139449938/f3cfa3fa-3852-458d-a76d-dc51fb80373c)  
**NotificationList**  
![app03_3](https://github.com/Cofe1230/ReactWork/assets/139449938/b6415515-1378-4695-9def-6e19da5bfdf9)  
#### 코드
* **app.js(Class)**  
  CommentList, TodoList, Notification 세가지 페이지 표현
  - **CommentList.js(function)**  
    표현할 list 함수 내에 존재, list 개수만큼 map을 사용하여 comment를 실행하고 필요한 data를 넘긴다
    - **Comment.js(function)**  
    comments 하나 하나 표현하는 함수 내부에 style이 있다 
  - **TodoListTemplate.js(function)**  
    사용하는 data, 함수가 app.js에 있어 상위에서 끌어와서 사용  
    ```
    <TodoListTemplate form=Form...>
        <TodoItemList...>
    </TodoListTemplate>
    ```
    Form은 {form}으로 TodoItemList는 {children}으로 사용  
    - **Form.js(function)**  
    텍스트를 입력하고 추가하면 app.js에 있는 list에 추가
    - **TodoItemList.js(class)**  
    List 개수만큼 TodoItem
        - **TodoItem.js(class)**  
        TodoItem 출력 형식 외부css사용
  - **NotificationList.js(class)**  
    생명주기, 내부에 있는 List를 componentDidMount 내부에서 setInterval을 사용하여 1초에 하나씩 배열에 넣고 List는 class에서 바로 출력  
    - **Notification.js(class)**  
    List 출력하는 Item 형식, 내부CSS, 생명주기  
## app04_hook


  
