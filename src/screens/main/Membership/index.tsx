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
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/Mertics";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { fonts } from "../../../utils/fonts";
import { useState } from "react";
import { isiPad } from "../../../utils/CommonFun";
import { images } from "../../../assets";
import { SafeAreaView } from "react-native-safe-area-context";
import ToggleSwitch from "toggle-switch-react-native";
import { appStyles } from "../../../utils/appStyles";

const Membership = ({ navigation }: any) => {
  const [ProPlainsData, setProPlainsData] = useState([
    { txt: "Unlimited Public Game Entry", icon: images.tick },
    { txt: "Play, Rewards, Leaderboard Features ", icon: images.tick },
    { txt: "Create Private Matches With Friends", icon: images.tick },
    { txt: "In-Depth Game Review", icon: images.tick },
    {
      txt: "Custom Study Sets",
      icon: images.soon,
      isCommingSoon: "Coming Soon",
    },
  ]);

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
            label="Preference"
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
            gap: verticalScale(20),
          }}
        >
          <Header />

          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              ...styles.boxContainer,
              backgroundColor: "#2D2D2D",
            }}
          >
            <View
              style={{
                paddingVertical: verticalScale(10),
                flexDirection: "row",
                alignItems: "center",
                gap: moderateScale(10),
                alignSelf: "center",
              }}
            >
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label={"Pro"}
                size={25}
                color={"#A48A00"}
              />
              <Image
                style={{
                  width: moderateScale(32),
                  height: moderateScale(32),
                }}
                source={images.battle}
              />
            </View>

            <View
              style={{
                height: verticalScale(0.5),
                width: "100%",
                backgroundColor: "#766D48",
              }}
            />

            {ProPlainsData.map((item, index) => {
              return (
                <View>
                  <View
                    style={{ ...appStyles.row, padding: moderateScale(20) }}
                  >
                    <Image
                      style={{
                        width: moderateScale(item.isCommingSoon ? 45 : 32),
                        height: moderateScale(item.isCommingSoon ? 45 : 32),
                      }}
                      source={item.icon}
                      resizeMode="contain"
                    />

                    <View style={{gap:verticalScale(10),alignItems:"center"}}>
                    <CustomText
                      fontFam={fonts.medium}
                      fontWeight="600"
                      text={item.txt}
                      style={{ marginLeft: moderateScale(isiPad ? 20 : 15) }}
                      size={18}
                      color={"#DEDEDE"}
                    />
                    {
                        item?.isCommingSoon&&(
                            <CustomText
                            fontFam={fonts.medium}
                            fontWeight="600"
                            text={item.isCommingSoon}
                            style={{ marginLeft: moderateScale(isiPad ? 20 : 15) }}
                            size={15}
                            color={"#B0B0B0"}
                          />

                        )
                    }

                    </View>

                 
                  </View>
                  <View
                    style={{
                      height: verticalScale(0.5),
                      width: "100%",
                      backgroundColor: "#766D48",
                    }}
                  />
                </View>
              );
            })}

            {/* <Image
                      style={{
                        width: moderateScale(32),
                        height: moderateScale(32),
                      }}
                      source={item.icon}
                    /> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Membership;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    elevation: 5,
    shadowColor: colors.black + "50",
    shadowOffset: { width: 2, height: isiPad ? 4 : 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    //   gap: verticalScale(20),
    borderRadius: moderateScale(10),
  },
});
