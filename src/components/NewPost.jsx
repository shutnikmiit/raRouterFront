import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const NewPost = () => {
  let navigate = useNavigate()
  const [post, setPost] = useState({
    content: "",
  });

  const AddPost = () => {
    fetch("http://localhost:7070/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(data => {
      console.log(data);
      setPost({ content: "" });
      navigate("/");
    });
  };

  return (
    <StyledNewPost>
      <NavLink className="menu__item" to="/">
        ❌
      </NavLink>
      <textarea
        className="post-form__textarea"
        placeholder="Введите текст поста"
        value={post.content}
        onChange={event => setPost({ ...post, content: event.target.value })}
      />
      <button
        className="post-form__submit"
        onClick={() => {
          AddPost();

        }}
      >
        Опубликовать
      </button>
    </StyledNewPost>
  );
};

const StyledNewPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .post-form__textarea {
        height: 100px;
        margin: 10px 0;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        resize: none;
    }
`;

export default NewPost;