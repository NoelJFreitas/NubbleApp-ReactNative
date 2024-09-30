import React from 'react';

import {Post} from '@domain';

import {
  Box,
  Icon,
  IconProps,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

interface ItemProps extends TouchableOpacityBoxProps {
  iconName: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  count: number;
  marked?: boolean;
}

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  favoriteCount,
  commentCount,
  reactionCount,
}: Props) {
  return (
    <Box flexDirection="row" marginTop="s16">
      <Item
        count={reactionCount}
        iconName={{default: 'heart', marked: 'heartFill'}}
        marked
      />
      <Item
        count={commentCount}
        iconName={{default: 'comment', marked: 'comment'}}
      />
      <Item
        count={favoriteCount}
        iconName={{default: 'bookmark', marked: 'bookmarkFill'}}
      />
    </Box>
  );
}

function Item({iconName, count, marked, ...touchableProps}: ItemProps) {
  const icon = marked ? iconName.marked : iconName.default;
  const color = marked ? 'marked' : undefined;

  return (
    <TouchableOpacityBox
      {...touchableProps}
      flexDirection="row"
      marginRight="s16"
      alignItems="center">
      <Icon name={icon} color={color} />
      <Text preset="paragraphSmall" bold ml="s4">
        {count}
      </Text>
    </TouchableOpacityBox>
  );
}
