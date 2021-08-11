import React from 'react';

function TagsListElement({ tag }) {
  return (
    <>
    <li key={tag.id}>
    <a href={`/tag/${tag.id}`}>{ tag.name }</a>
    {console.log(tag.id)}
    </li>
  </>
  );
}

export default TagsListElement;


