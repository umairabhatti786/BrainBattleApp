import { Pressable, Text, TouchableOpacity, View,ActivityIndicator } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { moderateScale } from "../../utils/Mertics";

type Props = {
  text?: string;
  onPress?: any;
  width?: any;
  height?: number;
  size?: number;
  fontFam?: any;
  elevation?: number;
  borderRadius?: number;
  style?: any;
  bgColor?: any;
  textColor?: any;
  borderColor?: any;
  notRequiredShadow?: boolean;
  disable?: boolean;
  isLoading?: boolean;
  paddingHorizontal?:any
  fontWeight?:any
  borderWidth?:number
};

const CustomButton = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  elevation,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  notRequiredShadow,
  disable,
  isLoading,
  paddingHorizontal,
  fontWeight,
  borderWidth
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.9}
      style={{
        ...style,
        width: width,
        height: 45,
        backgroundColor: bgColor || colors.blue,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal:paddingHorizontal,
        borderRadius: moderateScale(borderRadius || 10),
        borderWidth:borderWidth ,
        borderColor: borderColor ,
        // paddingTop:5
      }}
    >
      {isLoading ? (
        <>
              <ActivityIndicator size={"large"} color={colors.white} />

        </>
      ) : (
        <CustomText
          text={text}
          color={textColor || colors.white}
          fontWeight={ fontWeight ||"600"}
          size={size || 14}
          fontFam={fontFam ||"ClashDisplay-Medium"}
        />
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;
