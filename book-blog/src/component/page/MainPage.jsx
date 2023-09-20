import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function MainPage(props) {
    const [data,setData] = useState([])
    const navigate = useNavigate();
    
    useEffect(()=>{
        const source = axios.CancelToken.source();
        (async ()=>{
            try{
                console.log("리스트 받는거 들어옴 ----");
                const response = await axios.get("/postList",{cancelToken:source.token});
                console.log(response);
                setData(response.data);
                
            }catch(error){
                if(axios.isCancel(error)){
                    console.error("axios error: ", error.message);
                }else{
                    console.error(error);
                }
            }
        })();
        return()=>{
            source.cancel("Pervious request canceled");
        };
    },[])
    return (
        <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />

                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;