import React, { PropTypes } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image, Keyboard, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import Styles from "./Styles/LoginScreenStyles";
import { Images, Metrics } from "../Themes";
import LoginActions from "../Redux/LoginRedux";
import {
  Button,
  Text as NBText,
  Contant,
  Form,
  Item,
  Input,
  Label,
  // CARD-ON-TOP
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body
} from "native-base";
import IconZocial from 'react-native-vector-icons/MaterialCommunityIcons';

class LoginScreen extends React.Component {
	static propTypes = {
		dispatch: PropTypes.func,
		fetching: PropTypes.bool,
    attemptLogin: PropTypes.func,
    coindesk: PropTypes.object,
	};

	isAttempting = false;
	keyboardDidShowListener = {};
	keyboardDidHideListener = {};

	constructor(props) {
		super(props);
		this.state = {
			username: "admin@josoroma.poc",
			password: "admin",
			visibleHeight: Metrics.screenHeight,
			topLogo: { width: Metrics.screenWidth - 40 },
		};
		this.isAttempting = false;
	}

	componentWillReceiveProps(newProps) {
		this.forceUpdate();
		// Did the login attempt complete?
		if (this.isAttempting && !newProps.fetching) {
			this.props.navigation.goBack();
		}
	}

	componentWillMount() {
		// Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
		// TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
		this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", this.keyboardDidShow);
		this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", this.keyboardDidHide);
	}

	componentWillUnmount() {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
	}

	keyboardDidShow = e => {
		// Animation types easeInEaseOut/linear/spring
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		let newSize = Metrics.screenHeight - e.endCoordinates.height;
		this.setState({
			visibleHeight: newSize,
			topLogo: { width: 100, height: 70 },
		});
	};

	keyboardDidHide = e => {
		// Animation types easeInEaseOut/linear/spring
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({
			visibleHeight: Metrics.screenHeight,
			topLogo: { width: Metrics.screenWidth - 40 },
		});
	};

	handlePressLogin = () => {
		// const { username, password } = this.state
		// this.isAttempting = true
		// attempt a login - a saga is listening to pick it up from here.
		// this.props.attemptLogin(username, password);
		this.props.navigation.navigate("LaunchScreen");
	};

	handleChangeUsername = text => {
		this.setState({ username: text });
	};

	handleChangePassword = text => {
		this.setState({ password: text });
	};

	render() {
		const { username, password } = this.state;
		const { fetching, coindesk } = this.props;
		const editable = !fetching;
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly;

		return (
			<ScrollView
				contentContainerStyle={{ justifyContent: "center" }}
				style={[Styles.container, { height: this.state.visibleHeight }]}
				keyboardShouldPersistTaps="always"
      >
        <IconZocial name="ninja" style={{fontSize: 160, color: 'white', alignSelf: 'center'}} />
        <View style={Styles.bitcoin}>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={Images.logo} />
                <Body>
                  <Text>{coindesk ? coindesk.chartName : 'Coin' }</Text>
                  <Text note>
                    &#36;{coindesk ? coindesk.bpi.USD.rate_float.toFixed(2) : '00.00' }&nbsp;&nbsp;
                    &euro;{coindesk ? coindesk.bpi.EUR.rate_float.toFixed(2) : '00.00' }&nbsp;&nbsp;
                    &pound;{coindesk ? coindesk.bpi.GBP.rate_float.toFixed(2) : '00.00' }
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </View>
        <View style={Styles.form}>
					<Form rounded>
            <Item stackedLabel>
              <Label>Username</Label>
							<Input
								ref="username"
								value={username}
								editable={editable}
								keyboardType="default"
								returnKeyType="next"
								autoCapitalize="none"
								autoCorrect={false}
								onChangeText={this.handleChangeUsername}
								underlineColorAndroid="transparent"
								onSubmitEditing={() => this.password._root.focus()}
							/>
						</Item>
						<Item stackedLabel>
							<Label>Password</Label>
							<Input
								ref={ref => (this.password = ref)}
								value={password}
								editable={editable}
								keyboardType="default"
								returnKeyType="go"
								autoCapitalize="none"
								autoCorrect={false}
								secureTextEntry
								onChangeText={this.handleChangePassword}
								underlineColorAndroid="transparent"
								onSubmitEditing={this.handlePressLogin}
							/>
						</Item>
					</Form>
					<View style={[Styles.loginRow]}>
            <Button
              style={{ flex: 1, justifyContent: "center", marginRight: 5, borderRadius: 4 }}
              full onPress={this.handlePressLogin}
              dark
            >
							<NBText>Sign In</NBText>
            </Button>

						<Button
							style={{ flex: 1, justifyContent: "center", marginLeft: 5, borderRadius: 4 }}
							full
              onPress={() => this.props.navigation.goBack()}
              dark
						>
							<NBText>Cancel</NBText>
						</Button>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const mapStateToProps = state => {
	return {
    fetching: state.login.fetching,
    coindesk: state.coindesk.response,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
