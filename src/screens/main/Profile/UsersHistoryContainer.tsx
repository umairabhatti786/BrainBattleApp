import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { appStyles } from "../../../utils/appStyles";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/Mertics";
import { colors } from "../../../utils/colors";
import { isiPad } from "../../../utils/CommonFun";
import { images } from "../../../assets";
import CustomText from "../../../components/CustomText";
import { fonts } from "../../../utils/fonts";
import CustomButton from "../../../components/CustomButton";
const UsersHistoryContainer = ({ item }: any) => {
  return (
    <View
      style={{
        ...appStyles.rowjustify,
        backgroundColor: item.win?  "#DCE8FF":colors.white+"30",
        paddingHorizontal:moderateScale(isiPad?10:8),
        paddingVertical:moderateScale(isiPad?7:5)

      }}
    >
      <View style={{ ...appStyles.row, gap: moderateScale(isiPad?25: 13) }}>
        <View style={{ ...styles.satContainer }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={images.sat}
          />
        </View>

        <View style={{ alignItems: "center", gap: verticalScale(7) }}>
          <CustomText
            fontFam={fonts.medium}
            fontWeight="600"
            text={"You"}
            size={12}
            color={ item?.win?"#007C0F": colors.red200}
          />
          <Image style={styles.profileImg} source={images.user12} />
        </View>

        <View style={{ alignItems: "center", gap: verticalScale(7) }}>
          <View style={appStyles.row}>
            <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              text={"(3-2)"}
              size={16}
              color={colors.black}
            />
          </View>
          <CustomText
            fontFam={fonts.medium}
            fontWeight="600"
            text={"VS"}
            size={18}
            color={colors.black}
          />
        </View>

        <View style={{ alignItems: "center", gap: verticalScale(7) }}>
          <CustomText
            fontFam={fonts.medium}
            fontWeight="600"
            text={"User 1"}
            size={12}
            color={ !item?.user1Online?"#5B5E63":item?.win?colors.red200:"#00A214"}
          />
          <View>
            <Image style={styles.profileImg} source={images.user14} />

            <View
              style={{
                width: moderateScale(13),
                height: moderateScale(13),
                backgroundColor: "#49D65B",
                borderRadius: moderateScale(13),
                position: "absolute",
                bottom: verticalScale(5),
                right: horizontalScale(-3),
                zIndex: 999,
              }}
            />
          </View>
        </View>

        <View style={{flexDirection:"row",gap:moderateScale(3)}}>
            <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              text={"win"}
              size={16}
              color={ !item?.win?colors.red200: colors.lightGreen}
            />
             <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              text={item.points}
              style={{marginTop:2}}
              size={15}
              color={ !item?.win?colors.red200: colors.lightGreen}
            />
          </View>

        
      </View>

      <CustomButton
              bgColor={"transparent"}
              fontWeight="600"
              borderRadius={20}
              size={11}
              height={isiPad?27: 23}
              paddingHorizontal={moderateScale( isiPad?25: 7)}
              text="View Game"
              borderWidth={isiPad?2: 1.2}
              
              borderColor={colors.black+"50"}
              textColor={colors.black}
            />
    </View>
  );
};
export default UsersHistoryContainer;

const styles = StyleSheet.create({
  satContainer: {
    height: moderateScale( isiPad? 45:40),
    width: moderateScale(isiPad? 45:40),
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
    elevation: 5,
    shadowOffset: { width: 0, height: isiPad ? 4 : 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.black,
    overflow: "hidden",
  },
  profileImg: {
    width: moderateScale(isiPad?38:30),
    height: moderateScale(isiPad?38:30),
    borderRadius: moderateScale(38),
  },
});
