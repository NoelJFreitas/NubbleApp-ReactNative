import React from 'react';

import {Post} from '@domain';

import {Box} from '../Box/Box';

import {PostActions} from './components/PostActions';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

interface Props {
  post: Post;
}

export function PostItem({post}: Props) {
  return (
    <Box marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        favoriteCount={post.favoriteCount}
        commentCount={post.commentCount}
        reactionCount={post.reactionCount}
      />
    </Box>
  );
}
