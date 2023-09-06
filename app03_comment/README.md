# app03_comment
## 실행화면
**CommentList**  
![app03_1](https://github.com/Cofe1230/ReactWork/assets/139449938/53f8a506-e5d8-48c1-a50e-8540bbc86e87)  
**TodoList**  
![app03_2](https://github.com/Cofe1230/ReactWork/assets/139449938/f3cfa3fa-3852-458d-a76d-dc51fb80373c)  
**NotificationList**  
![app03_3](https://github.com/Cofe1230/ReactWork/assets/139449938/b6415515-1378-4695-9def-6e19da5bfdf9)  
## 코드
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