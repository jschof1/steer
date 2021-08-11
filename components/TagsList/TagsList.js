import React from 'react';
import TagsListElement from './TagsListElement'

function TagsList (props) {
  const { tags } = props;
  console.log(tags)
  return (
    <ul className="list-inline">
      {tags.map((tag, i) => (
         <TagsListElement key={tag.id} tag={tag} />
      ))}
    </ul>
  );
}

export default TagsList;

