import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import {
  moderateScale,
  verticalScale,
} from "../../../utils/Mertics";
import { appStyles } from "../../../utils/appStyles";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { fonts } from "../../../utils/fonts";
import { isiPad } from "../../../utils/CommonFun";
import { images } from "../../../assets";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = ({ navigation }: any) => {

  const settingData = [
    { txt: "App preferences", icon: images.preferences, onPress: () => {navigation.navigate("Preferences")} },
    { txt: "Help and Support", icon: images.help, onPress: () => {} },
    { txt: "Give feedback", icon: images.feedback, onPress: () => {} },
    { txt: "Terms and Conditions", icon: images.terms, onPress: () => {} },
    { txt: "Privacy Policy", icon: images.policy, onPress: () => {} },
    { txt: "Logout", icon: images.logout, onPress: () => {} },
  ];

  const Header = () => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
          style={{
            width: moderateScale(25),
            height: moderateScale(25),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "90%", height: "90%" }}
            source={images.backProfile}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{ padding: moderateScale(20), gap: verticalScale(3) }}>
          <CustomText
            fontFam={fonts.medium}
            fontWeight="600"
            label="App"
            size={18}
            color={colors.bluelight}
          />
          <CustomText
            fontFam={fonts.bold}
            fontWeight="700"
            label="Settings"
            size={22}
            color={colors.black}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: colors.white }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: colors.white,
          marginBottom: verticalScale(20),
        }}
      >
        <View
          style={{
            paddingTop: verticalScale(10),
            paddingHorizontal: moderateScale(20),
            gap: verticalScale(10),
          }}
        >
          <Header />
          <View
            style={{
              ...styles.boxContainer,
              alignItems: "center",
              gap: verticalScale(10),
              borderRadius: moderateScale(25),
              backgroundColor: "#C4C4C430",
            }}
          >
            <View style={{ ...appStyles.row, gap: moderateScale(10),backgroundColor:"#" }}>
              <CustomText
                fontFam={fonts.bold}
                fontWeight="700"
                label="Edit profile"
                size={20}
                color={colors.black}
              />

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("EditProfile")}
                style={{
                  width: moderateScale(25),
                  height: moderateScale(25),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: "90%", height: "90%" }}
                  source={images.pencil}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.profileImg}>
              <Image
                style={{ width: "90%", height: "90%", borderRadius: 999 }}
                source={images.user3}
              />
            </View>

            <CustomText
              fontFam={fonts.bold}
              fontWeight="700"
              label="Sarah M"
              size={18}
              color={colors.black}
            />
            <View
              style={{
                width: moderateScale(45),
                height: verticalScale(0.5),
                backgroundColor: colors.black + "47",
              }}
            />
            <CustomText
              label="sarahm@gmail.com"
              size={12}
              color={colors.black}
            />
          </View>
          {settingData.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={item.onPress}
                key={index.toString()}
                style={{
                  ...styles.boxContainer,
                  alignItems: "center",
                  flexDirection: "row",
                  gap: verticalScale(20),
                  borderRadius: moderateScale(20),
                  backgroundColor:
                    item.txt == "Logout" ? "#51B5FD" : "#C4C4C430",
                }}
              >
                <Image
                  style={{
                    width: moderateScale(32),
                    height: moderateScale(32),
                  }}
                  source={item.icon}
                />
                <CustomText
                  fontFam={fonts.medium}
                  fontWeight="600"
                  label={item.txt}
                  size={18}
                  color={colors.black}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Settings;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    padding: moderateScale(20),
    // elevation: 5,
    shadowColor: colors.black + "50",
    shadowOffset: { width: 2, height: isiPad ? 4 : 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  profileImg: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: 999,
    borderWidth: 2.5,
    borderColor: colors.bluelight,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
