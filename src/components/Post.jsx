const Post = (propsData) => {
    const { title, body } = propsData.datFeed;
    return (
      <tr>
        <td>{title}</td>
        <td>{body}</td>
      </tr>
    );
  };
  export default Post;