import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { appStyles } from "../../../utils/appStyles";
import { colors } from "../../../utils/colors";
import { moderateScale, verticalScale } from "../../../utils/Mertics";
import { images } from "../../../assets";
import CustomText from "../../../components/CustomText";
const LeaderBoard = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.white,
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <View style={{ paddingTop: verticalScale(20), width: "100%" }}>
        <View
          style={{
            ...appStyles.row,
            width: "100%",
            justifyContent: "space-between",
            paddingHorizontal: "15%",
          }}
        >
          <TouchableOpacity
            style={{
              width: moderateScale(40),
              height: moderateScale(40),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: moderateScale(20), height: moderateScale(20) }}
              source={images.back}
            />
          </TouchableOpacity>
          <View style={appStyles.row}>
            <View style={{ gap: verticalScale(5) }}>
              <View style={{ ...appStyles.row, gap: moderateScale(5) }}>
                <CustomText
                  fontFam={"ClashDisplay-Bold.ttf"}
                  fontWeight="800"
                  label="USA"
                  size={18}
                  color={colors.black}
                />
                <CustomText
                  // fontFam={"ClashDisplay-Bold.ttf"}
                  // fontWeight="800"
                  label="- SAT/ACT"
                  size={18}
                  color={colors.black}
                />
              </View>
              <CustomText
                fontFam={"ClashDisplay-Regular.ttf"}
                fontWeight="bold"
                label="Leaderboard"
                size={18}
                color={colors.black}
              />
            </View>

            <Image
              style={{ width: moderateScale(50), height: moderateScale(50) }}
              source={images.user1}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LeaderBoard;
