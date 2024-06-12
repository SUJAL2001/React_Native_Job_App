import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';
import { COLORS, FONT, SIZES } from "../../../constants";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#F37453",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  likeBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: "#F37453",
  },
  applyBtn: {
    display:'flex',
    flex: 1,
    backgroundColor: "#FE7654",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONT.bold
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width:windowWidth
  },
  modalContent: {
    backgroundColor: "white",
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    margin: SIZES.medium,
    alignItems: "center",
  },
});

export default styles;
