import React, { Fragment } from "react";

import { Title, Text, Paragraph } from "react-native-paper";
import { View, Image, FlatList } from "react-native";

import { baseCDNW500 } from "@src/lib/const";

import { year } from "@src/lib/utils/formmater";

import styles from "./styles";

const DetailContetDumps = ({
  backdrop_path,
  genres,
  release_date,
  title,
  overview,
  tags: { data, Component },
  favorite: { json, Component: ComponentFavorite } = {
    json: {},
    Component: Fragment,
  },
}) => {
  return (
    <Fragment>
      <Image
        source={{
          uri: `${baseCDNW500}${backdrop_path}`,
        }}
        style={styles.backdrop_path}
      />
      <Text style={styles.sub_heading_categories}>
        {year(release_date) + " • "}
        {genres &&
          (genres.length > 1
            ? genres.reduce(function (a, b) {
                return (a.name || a) + " • " + b.name;
              })
            : genres[0] && genres[0].name)}
      </Text>
      <View style={styles.wrap_description_movie}>
        <Title>{title}</Title>
        <ComponentFavorite {...json} />
      </View>
      <View>
        <View>
          <Paragraph style={{ padding: 4 }}>{overview}</Paragraph>
        </View>
      </View>
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          horizontal
          data={data}
          renderItem={Component}
        />
      </View>
    </Fragment>
  );
};

export default DetailContetDumps;
