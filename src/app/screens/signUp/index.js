import React from "react";
import ScreenWithNavigation from "../../layouts/ScreenWithNavigation";
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import styles from './style'

const LoginScreen = ({ navigation }) => (
  <ScreenWithNavigation navigation={navigation}>
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "center" }}>
              <Image
                source={{
                  uri:
                    "https://i2.wp.com/tvrev.com/wp-content/uploads/2020/02/thibault-penin-AWOl7qqsffM-unsplash-scaled.jpg?fit=2560%2C1709&ssl=1",
                }}
                style={{
                  width: 250,
                  height: 150,
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  </ScreenWithNavigation>
);

export default LoginScreen;

