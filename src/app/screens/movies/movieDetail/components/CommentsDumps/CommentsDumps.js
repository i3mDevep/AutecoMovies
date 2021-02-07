import React from "react";

import { Subheading, Paragraph } from "react-native-paper";

import { Avatar } from "react-native-elements";
import { View } from "react-native";

import { baseCDNW200, notFoundAvatar } from "@src/lib/const";

import styles from "./styles";

const CommentsDumps = ({
  item: {
    author,
    content,
    author_details: { avatar_path },
  },
  index,
}) => (
  <View key={`comments-dumps-${index}`} style={styles.container_comment}>
    <View style={{ flex: 0.1 }}>
      <Avatar
        rounded
        source={{
          uri: `${
            !avatar_path || avatar_path.indexOf("secure.gravatar.com") !== -1
              ? notFoundAvatar
              : baseCDNW200 + avatar_path
          }`,
        }}
      />
    </View>
    <View style={{ flex: 0.9 }}>
      <Paragraph>
        <Subheading style={{ fontWeight: "800" }}>{author}: </Subheading>
        {content}
      </Paragraph>
    </View>
  </View>
);

export default CommentsDumps;
