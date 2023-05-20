import styled from "styled-components"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const ViewPost = () => {
  const [post, setPost] = useState({})
  const { id } = useParams()
  let navigate = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPost(data)
      })
  }, [])

  return (
    <StyledViewPost>
      <NavLink className="menu__item" to="/">
        ❌
      </NavLink>
      <div className="post__text">{post.content}</div>
      <div className="post__actions">
        <NavLink className="post__edit" to={`/posts/${id}/edit`}>
          Редактировать
        </NavLink>
        <button
          className="post__delete"
          onClick={() => {
            fetch(`http://localhost:7070/posts/${id}`, {
              method: "DELETE",
            }).then(data => {
              console.log(data)
              navigate("/");
            })
          }}
        >
          Удалить
        </button>
      </div>
    </StyledViewPost>
  )
}

const StyledViewPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .post__actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        .post__delete {
            margin-right: 10px;
        }
    }
`

export default ViewPost