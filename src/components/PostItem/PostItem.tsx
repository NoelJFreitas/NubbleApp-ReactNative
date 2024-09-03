import React from 'react';
import {Dimensions, Image, Text} from 'react-native';

import {Post} from '@domain';

import {Box} from '../Box/Box';

interface PostItemProps {
  post: Post;
}

export function PostItem({post}: PostItemProps) {
  return (
    <Box marginBottom="s24">
      <Box flexDirection="row">
        <Image
          source={{uri: post.author.profileURL}}
          style={{width: 32, height: 32}}
        />
        <Text>{post.author.userName}</Text>
      </Box>
      <Image
        source={{uri: post.imageURL}}
        style={{width: Dimensions.get('screen').width, height: 300}}
        resizeMode="cover"
      />
    </Box>
  );
}
