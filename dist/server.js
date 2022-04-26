/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/actions/auth.actions.ts":
/*!*************************************!*\
  !*** ./src/actions/auth.actions.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthStages": () => (/* binding */ AuthStages),
/* harmony export */   "signIn": () => (/* binding */ signIn),
/* harmony export */   "signInOAuth": () => (/* binding */ signInOAuth),
/* harmony export */   "signInOAuthSuccess": () => (/* binding */ signInOAuthSuccess),
/* harmony export */   "signInSuccess": () => (/* binding */ signInSuccess),
/* harmony export */   "signOut": () => (/* binding */ signOut),
/* harmony export */   "signOutSuccess": () => (/* binding */ signOutSuccess)
/* harmony export */ });
/* harmony import */ var _api_Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/Auth */ "./src/api/Auth/index.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _helpers_acess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/acess */ "./src/helpers/acess.ts");
/* harmony import */ var _types_auth_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/auth.types */ "./src/actions/types/auth.types.ts");




let AuthStages;

(function (AuthStages) {
  AuthStages["INIT"] = "init";
  AuthStages["LOADING"] = "loading";
  AuthStages["DONE"] = "done";
})(AuthStages || (AuthStages = {}));

const loading = isLoading => ({
  type: _types_auth_types__WEBPACK_IMPORTED_MODULE_3__.LOADING,
  payload: {
    isLoading
  }
});

const signInSuccess = () => ({
  type: _types_auth_types__WEBPACK_IMPORTED_MODULE_3__.SIGN_IN
});
const signInOAuthSuccess = () => ({
  type: _types_auth_types__WEBPACK_IMPORTED_MODULE_3__.SIGN_IN_OAUTH
});
const signOutSuccess = () => ({
  type: _types_auth_types__WEBPACK_IMPORTED_MODULE_3__.SIGN_OUT
});
const signIn = (data, history) => async (dispatch, _state) => {
  dispatch(loading(true));

  try {
    const response = await _api_Auth__WEBPACK_IMPORTED_MODULE_0__["default"].signIn(data);

    if (response) {
      dispatch(signInSuccess());
      (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_2__.setSigned)(true);
      history.push(_config_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.main.path);
    } else {
      dispatch(loading(false));
    }
  } catch (error) {
    dispatch(loading(false));
  }
}; // eslint-disable-next-line max-len

const signInOAuth = history => async (dispatch, _state) => {
  dispatch(signInOAuthSuccess());
  (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_2__.setSignedOAuth)(true);
  history.push(_config_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.main.path);
}; // eslint-disable-next-line max-len

const signOut = history => async (dispatch, _state) => {
  dispatch(loading(true));
  (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_2__.setSigned)(false);
  (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_2__.setSignedOAuth)(false);
  (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_2__.setUserIdCookie)(0);
  history.push(_config_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.signIn.path);

  try {
    const response = await _api_Auth__WEBPACK_IMPORTED_MODULE_0__["default"].logOut();

    if (response) {
      dispatch(signOutSuccess());
    } else {
      dispatch(loading(false));
    }
  } catch (error) {
    dispatch(loading(false));
  }
};

/***/ }),

/***/ "./src/actions/forum.actions.ts":
/*!**************************************!*\
  !*** ./src/actions/forum.actions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadForumTopics": () => (/* binding */ loadForumTopics)
/* harmony export */ });
/* harmony import */ var _types_forum_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/forum.types */ "./src/actions/types/forum.types.ts");
/* harmony import */ var _api_Forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Forum */ "./src/api/Forum/index.ts");



const getTopics = data => ({
  type: _types_forum_types__WEBPACK_IMPORTED_MODULE_0__.FORUM_LOAD,
  payload: {
    data
  }
});

const setLoading = isLoading => ({
  type: _types_forum_types__WEBPACK_IMPORTED_MODULE_0__.FORUM_SET_LOADING,
  payload: {
    isLoading
  }
});

const loadForumTopics = () => async (dispatch, _state) => {
  dispatch(setLoading(true));

  try {
    const data = await _api_Forum__WEBPACK_IMPORTED_MODULE_1__["default"].getTopics();

    if (data) {
      dispatch(getTopics(data));
    }

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

/***/ }),

/***/ "./src/actions/leaderboard.actions.ts":
/*!********************************************!*\
  !*** ./src/actions/leaderboard.actions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadLeaderBoard": () => (/* binding */ loadLeaderBoard)
/* harmony export */ });
/* harmony import */ var _types_leaderboard_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/leaderboard.types */ "./src/actions/types/leaderboard.types.ts");
/* harmony import */ var _api_Leaderboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Leaderboard */ "./src/api/Leaderboard/index.ts");



const getLeaderBoard = data => ({
  type: _types_leaderboard_types__WEBPACK_IMPORTED_MODULE_0__.LOAD,
  payload: {
    data
  }
});

const setLoading = isLoading => ({
  type: _types_leaderboard_types__WEBPACK_IMPORTED_MODULE_0__.SET_LOADING,
  payload: {
    isLoading
  }
});

const loadLeaderBoard = cursor => async (dispatch, _state) => {
  dispatch(setLoading(true));

  try {
    const data = await _api_Leaderboard__WEBPACK_IMPORTED_MODULE_1__["default"].getLeaderBoard(cursor);

    if (data) {
      dispatch(getLeaderBoard(data));
    }

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

/***/ }),

/***/ "./src/actions/profile.actions.ts":
/*!****************************************!*\
  !*** ./src/actions/profile.actions.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileStages": () => (/* binding */ ProfileStages),
/* harmony export */   "getProfile": () => (/* binding */ getProfile),
/* harmony export */   "profileFetchSuccess": () => (/* binding */ profileFetchSuccess),
/* harmony export */   "setPassword": () => (/* binding */ setPassword),
/* harmony export */   "setProfile": () => (/* binding */ setProfile)
/* harmony export */ });
/* harmony import */ var _api_Auth_Auth_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/Auth/Auth.api */ "./src/api/Auth/Auth.api.ts");
/* harmony import */ var _api_Profile_Profile_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/Profile/Profile.api */ "./src/api/Profile/Profile.api.ts");
/* harmony import */ var _types_profile_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/profile.types */ "./src/actions/types/profile.types.ts");
/* harmony import */ var _helpers_acess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/acess */ "./src/helpers/acess.ts");




let ProfileStages;

(function (ProfileStages) {
  ProfileStages["INIT"] = "init";
  ProfileStages["LOADING"] = "loading";
  ProfileStages["DONE"] = "done";
})(ProfileStages || (ProfileStages = {}));

const loading = isLoading => ({
  type: _types_profile_types__WEBPACK_IMPORTED_MODULE_2__.PROFILE_LOADING,
  payload: {
    isLoading
  }
});

const profileFetchSuccess = data => ({
  type: _types_profile_types__WEBPACK_IMPORTED_MODULE_2__.GET_PROFILE,
  payload: {
    data
  }
});

const profileUploadSuccess = data => ({
  type: _types_profile_types__WEBPACK_IMPORTED_MODULE_2__.GET_PROFILE,
  payload: {
    data
  }
});

const passwordUpdateSuccess = () => ({
  type: _types_profile_types__WEBPACK_IMPORTED_MODULE_2__.SET_PASSWORD
}); // eslint-disable-next-line max-len


const getProfile = () => async (dispatch, _state) => {
  dispatch(loading(true));

  try {
    const response = await _api_Auth_Auth_api__WEBPACK_IMPORTED_MODULE_0__["default"].getUserInfo();

    if (response) {
      dispatch(profileFetchSuccess(response));
      (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_3__.setUserIdCookie)(response.id);
    } else {
      dispatch(loading(false));
    }
  } catch (error) {
    dispatch(loading(false));
  }
};
const setProfile = data => async (dispatch, _state) => {
  dispatch(loading(true));

  try {
    const response = await _api_Profile_Profile_api__WEBPACK_IMPORTED_MODULE_1__["default"].setProfile(data);

    if (response) {
      dispatch(profileUploadSuccess(response));
    } else {
      dispatch(loading(false));
    }
  } catch (error) {
    dispatch(loading(false));
  }
}; // eslint-disable-next-line max-len

const setPassword = data => async (dispatch, _state) => {
  dispatch(loading(true));

  try {
    const response = await _api_Profile_Profile_api__WEBPACK_IMPORTED_MODULE_1__["default"].setPassword(data);

    if (response) {
      dispatch(passwordUpdateSuccess());
    } else {
      dispatch(loading(false));
    }
  } catch (error) {
    dispatch(loading(false));
  }
};

/***/ }),

/***/ "./src/actions/theme.actions.ts":
/*!**************************************!*\
  !*** ./src/actions/theme.actions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTheme": () => (/* binding */ createTheme),
/* harmony export */   "getTheme": () => (/* binding */ getTheme),
/* harmony export */   "themeRequest": () => (/* binding */ themeRequest),
/* harmony export */   "updateTheme": () => (/* binding */ updateTheme)
/* harmony export */ });
/* harmony import */ var _helpers_acess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/acess */ "./src/helpers/acess.ts");
/* harmony import */ var _api_Theme_Theme_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/Theme/Theme.api */ "./src/api/Theme/Theme.api.ts");
/* harmony import */ var _types_theme_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/theme.types */ "./src/actions/types/theme.types.ts");



const LIGHT_THEME = "light";
const DARK_THEME = "dark"; // Обновляем тему в DOM

const updateDOMTheme = theme => {
  if (theme === DARK_THEME) {
    document.body.classList.remove(LIGHT_THEME);
  } else if (theme === LIGHT_THEME) {
    document.body.classList.remove(DARK_THEME);
  }

  document.body.classList.add(theme);
};

const themeRequest = data => ({
  type: _types_theme_types__WEBPACK_IMPORTED_MODULE_2__.SET_THEME,
  payload: data
}); // eslint-disable-next-line max-len

const getTheme = () => async (dispatch, _state) => {
  const id = (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_0__.getUserIdCookie)();
  const themeData = await _api_Theme_Theme_api__WEBPACK_IMPORTED_MODULE_1__["default"].getTheme(id);
  const theme = themeData?.theme || LIGHT_THEME;
  dispatch(themeRequest(theme)); //

  updateDOMTheme(theme);
}; // eslint-disable-next-line max-len

const updateTheme = data => async (dispatch, _state) => {
  const id = (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_0__.getUserIdCookie)();
  const themeData = await _api_Theme_Theme_api__WEBPACK_IMPORTED_MODULE_1__["default"].updateTheme(id, data);
  const theme = themeData?.theme || LIGHT_THEME;
  dispatch(themeRequest(theme)); //

  updateDOMTheme(theme);
}; // eslint-disable-next-line max-len

const createTheme = data => async (dispatch, _state) => {
  const userId = (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_0__.getUserIdCookie)();
  const themeData = await _api_Theme_Theme_api__WEBPACK_IMPORTED_MODULE_1__["default"].createTheme({
    theme: data,
    user_id: userId
  });
  const theme = themeData?.theme || LIGHT_THEME;
  dispatch(themeRequest(theme)); //

  if (!themeData) return; //

  updateDOMTheme(theme);
};

/***/ }),

/***/ "./src/actions/topic.actions.ts":
/*!**************************************!*\
  !*** ./src/actions/topic.actions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTopic": () => (/* binding */ createTopic),
/* harmony export */   "loadTopic": () => (/* binding */ loadTopic),
/* harmony export */   "updateTopic": () => (/* binding */ updateTopic)
/* harmony export */ });
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _types_topic_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/topic.types */ "./src/actions/types/topic.types.ts");
/* harmony import */ var _api_Forum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Forum */ "./src/api/Forum/index.ts");




const getTopic = data => ({
  type: _types_topic_types__WEBPACK_IMPORTED_MODULE_1__.TOPIC_LOAD,
  payload: {
    data
  }
});

const setLoading = isLoading => ({
  type: _types_topic_types__WEBPACK_IMPORTED_MODULE_1__.TOPIC_SET_LOADING,
  payload: {
    isLoading
  }
});

const loadTopic = id => async (dispatch, _state) => {
  dispatch(setLoading(true));

  try {
    const data = await _api_Forum__WEBPACK_IMPORTED_MODULE_2__["default"].getTopic(id);

    if (data) {
      dispatch(getTopic(data));
    }

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};
const createTopic = (data, history) => async (dispatch, _state) => {
  dispatch(setLoading(true));

  try {
    const response = await _api_Forum__WEBPACK_IMPORTED_MODULE_2__["default"].createTopic(data);

    if (response) {
      history.push(_config_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes.forum.path);
    } else {
      dispatch(setLoading(false));
    }
  } catch (error) {
    dispatch(setLoading(false));
  }
};
const updateTopic = (id, data) => async (dispatch, _state) => {
  dispatch(setLoading(true));

  try {
    const response = await _api_Forum__WEBPACK_IMPORTED_MODULE_2__["default"].updateTopic(id, data);

    if (response) {// dispatch(signInSuccess());
      // todo
    } else {
      dispatch(setLoading(false));
    }
  } catch (error) {
    dispatch(setLoading(false));
  }
};

/***/ }),

/***/ "./src/actions/types/auth.types.ts":
/*!*****************************************!*\
  !*** ./src/actions/types/auth.types.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOADING": () => (/* binding */ LOADING),
/* harmony export */   "SIGN_IN": () => (/* binding */ SIGN_IN),
/* harmony export */   "SIGN_IN_OAUTH": () => (/* binding */ SIGN_IN_OAUTH),
/* harmony export */   "SIGN_OUT": () => (/* binding */ SIGN_OUT)
/* harmony export */ });
const SIGN_IN = "SIGN_IN";
const SIGN_IN_OAUTH = "SIGN_IN_OAUTH";
const SIGN_OUT = "SIGN_OUT";
const LOADING = "LOADING";

/***/ }),

/***/ "./src/actions/types/forum.types.ts":
/*!******************************************!*\
  !*** ./src/actions/types/forum.types.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FORUM_LOAD": () => (/* binding */ FORUM_LOAD),
/* harmony export */   "FORUM_SET_LOADING": () => (/* binding */ FORUM_SET_LOADING)
/* harmony export */ });
const FORUM_LOAD = "LOAD_FORUM";
const FORUM_SET_LOADING = "SET_LOADING_FORUM";

/***/ }),

/***/ "./src/actions/types/leaderboard.types.ts":
/*!************************************************!*\
  !*** ./src/actions/types/leaderboard.types.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOAD": () => (/* binding */ LOAD),
/* harmony export */   "SET_LOADING": () => (/* binding */ SET_LOADING)
/* harmony export */ });
const LOAD = "LOAD_LEADERBOARD";
const SET_LOADING = "SET_LOADING_LEADERBOARD";

/***/ }),

/***/ "./src/actions/types/profile.types.ts":
/*!********************************************!*\
  !*** ./src/actions/types/profile.types.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_PROFILE": () => (/* binding */ GET_PROFILE),
/* harmony export */   "PROFILE_LOADING": () => (/* binding */ PROFILE_LOADING),
/* harmony export */   "SET_PASSWORD": () => (/* binding */ SET_PASSWORD),
/* harmony export */   "SET_PROFILE": () => (/* binding */ SET_PROFILE)
/* harmony export */ });
const GET_PROFILE = "GET_PROFILE";
const SET_PROFILE = "SET_PROFILE";
const SET_PASSWORD = "SET_PASSWORD";
const PROFILE_LOADING = "PROFILE_LOADING";

/***/ }),

/***/ "./src/actions/types/theme.types.ts":
/*!******************************************!*\
  !*** ./src/actions/types/theme.types.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_THEME": () => (/* binding */ SET_THEME)
/* harmony export */ });
const SET_THEME = "SET_THEME";

/***/ }),

/***/ "./src/actions/types/topic.types.ts":
/*!******************************************!*\
  !*** ./src/actions/types/topic.types.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOPIC_LOAD": () => (/* binding */ TOPIC_LOAD),
/* harmony export */   "TOPIC_SET_LOADING": () => (/* binding */ TOPIC_SET_LOADING)
/* harmony export */ });
const TOPIC_LOAD = "TOPIC_LOAD";
const TOPIC_SET_LOADING = "TOPIC_SET_LOADING";

/***/ }),

/***/ "./src/api/Auth/Auth.api.ts":
/*!**********************************!*\
  !*** ./src/api/Auth/Auth.api.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/API */ "./src/services/API/index.ts");
/* harmony import */ var _services_API_API_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/API/API.service */ "./src/services/API/API.service.ts");



const root = "auth";

class AuthApi {
  isSuccessfulRequest(response, type = undefined) {
    let message = "Регистрация прошла успешно";
    let errorMessage = "Отправленные данные не корректны";

    switch (response.status) {
      case 200:
        if (type) {
          message = type === "signIn" ? "Выполнен вход в приложение" : "Выполнен выход из приложения";
        }

        antd__WEBPACK_IMPORTED_MODULE_0__.notification.success({
          message
        });
        return true;

      case 400:
        if (type === "signIn") {
          errorMessage = "Пользователь уже авторизован в системе";
        }

        antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
          message: errorMessage
        });
        return false;

      case 401:
        antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
          message: "Неверный логин или пароль"
        });
        return false;

      case 500:
        antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
          message: "Произошла неизвестная ошибка"
        });
        return false;

      default:
        return false;
    }
  }

  async signUp(data) {
    const response = await _services_API__WEBPACK_IMPORTED_MODULE_1__["default"].request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_2__.Method.POST, `${root}/signup`, data);

    if (response) {
      const success = this.isSuccessfulRequest(response);

      if (success) {
        const result = await response.json();
        return result.id ?? null;
      }
    }

    return null;
  }

  async signIn(data) {
    const response = await _services_API__WEBPACK_IMPORTED_MODULE_1__["default"].request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_2__.Method.POST, `${root}/signin`, data);

    if (response) {
      return this.isSuccessfulRequest(response, "signIn");
    }

    return false;
  }

  async logOut() {
    const response = await _services_API__WEBPACK_IMPORTED_MODULE_1__["default"].request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_2__.Method.POST, `${root}/logout`);

    if (response) {
      return this.isSuccessfulRequest(response, "signOut");
    }

    return false;
  }

  async getUserInfo() {
    const response = await _services_API__WEBPACK_IMPORTED_MODULE_1__["default"].request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_2__.Method.GET, `${root}/user`);

    if (response.status === 200) {
      const result = await response.json();
      return result ?? null;
    }

    return null;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AuthApi());

/***/ }),

/***/ "./src/api/Auth/index.ts":
/*!*******************************!*\
  !*** ./src/api/Auth/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Auth_api__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Auth_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth.api */ "./src/api/Auth/Auth.api.ts");



/***/ }),

/***/ "./src/api/Forum/Forum.api.ts":
/*!************************************!*\
  !*** ./src/api/Forum/Forum.api.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_API_API_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/API/API.service */ "./src/services/API/API.service.ts");


const root = "topics";

class ForumApi {
  isSuccessfulRequest(response) {
    const errorMessage = "Отправленные данные не корректны";

    switch (response.status) {
      case 200:
      case 201:
        return true;

      case 400:
        antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
          message: errorMessage
        });
        return false;

      case 401:
        antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
          message: "Ошибка авторизации"
        });
        return false;

      case 500:
        antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
          message: "Произошла неизвестная ошибка"
        });
        return false;

      default:
        return false;
    }
  }

  async getTopics() {
    const response = await _services_API_API_service__WEBPACK_IMPORTED_MODULE_1__.LocalAPIService.request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_1__.Method.GET, root);

    if (response) {
      const success = this.isSuccessfulRequest(response);

      if (success) {
        const result = await response.json();
        return result ?? [];
      }
    }

    return [];
  }

  async getTopic(id) {
    const response = await _services_API_API_service__WEBPACK_IMPORTED_MODULE_1__.LocalAPIService.request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_1__.Method.GET, `${root}/${id}`);

    if (response) {
      const success = this.isSuccessfulRequest(response);

      if (success) {
        const result = await response.json();
        return result ?? null;
      }
    }

    return null;
  }

  async createTopic(data) {
    const response = await _services_API_API_service__WEBPACK_IMPORTED_MODULE_1__.LocalAPIService.request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_1__.Method.POST, root, data);

    if (response) {
      const success = this.isSuccessfulRequest(response);

      if (success) {
        const result = await response.json();
        return result;
      }
    }

    return false;
  }

  async updateTopic(id, data) {
    const response = await _services_API_API_service__WEBPACK_IMPORTED_MODULE_1__.LocalAPIService.request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_1__.Method.PUT, `${root}/${id}`, data);

    if (response) {
      const success = this.isSuccessfulRequest(response);

      if (success) {
        const result = await response.json();
        return result ?? null;
      }
    }

    return null;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ForumApi());

/***/ }),

/***/ "./src/api/Forum/index.ts":
/*!********************************!*\
  !*** ./src/api/Forum/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Forum_api__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Forum_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forum.api */ "./src/api/Forum/Forum.api.ts");


/***/ }),

/***/ "./src/api/Leaderboard/Leaderboard.api.ts":
/*!************************************************!*\
  !*** ./src/api/Leaderboard/Leaderboard.api.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/API */ "./src/services/API/index.ts");
/* harmony import */ var _services_API_API_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/API/API.service */ "./src/services/API/API.service.ts");
/* harmony import */ var _config_leaderboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/leaderboard */ "./src/config/leaderboard.ts");




const root = "leaderboard";

class LeaderBoardApi {
  async getLeaderBoard(cursor) {
    const body = {
      ratingFieldName: _config_leaderboard__WEBPACK_IMPORTED_MODULE_3__.TEAM_SCORE,
      cursor,
      limit: _config_leaderboard__WEBPACK_IMPORTED_MODULE_3__.RECORDS_PER_PAGE
    };
    const response = await _services_API__WEBPACK_IMPORTED_MODULE_1__["default"].request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_2__.Method.POST, `${root}/all`, body);

    if (response.ok) {
      const result = await response.json();
      return result ?? null;
    }

    if (response.status >= 400 && response.status < 500) {// notification.success({ message: "" });
    }

    if (response.status >= 500) {
      antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
        message: "Не удалось получить данные лидерборда"
      });
    }

    return null;
  }

  async createLeaderBoardRecord(data) {
    const body = {
      data,
      ratingFieldName: _config_leaderboard__WEBPACK_IMPORTED_MODULE_3__.TEAM_SCORE,
      teamName: "southpark"
    };
    const response = await _services_API__WEBPACK_IMPORTED_MODULE_1__["default"].request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_2__.Method.POST, `${root}`, body);

    if (response.ok) {
      antd__WEBPACK_IMPORTED_MODULE_0__.notification.success({
        message: "Рекорд сохранен"
      });
      return true;
    }

    if (response.status >= 400 && response.status < 500) {
      antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
        message: "Не удалось сохранить рекорд"
      });
    }

    if (response.status >= 500) {
      antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
        message: "Не удалось сохранить рекорд"
      });
    }

    return null;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LeaderBoardApi());

/***/ }),

/***/ "./src/api/Leaderboard/index.ts":
/*!**************************************!*\
  !*** ./src/api/Leaderboard/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Leaderboard_api__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Leaderboard_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Leaderboard.api */ "./src/api/Leaderboard/Leaderboard.api.ts");


/***/ }),

/***/ "./src/api/OAuth/OAuth.api.ts":
/*!************************************!*\
  !*** ./src/api/OAuth/OAuth.api.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/API */ "./src/services/API/index.ts");
/* harmony import */ var _services_API_API_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/API/API.service */ "./src/services/API/API.service.ts");
/* harmony import */ var _config_apiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/apiRoutes */ "./src/config/apiRoutes.ts");




const {
  serviceId,
  signIn,
  redirectURI
} = _config_apiRoutes__WEBPACK_IMPORTED_MODULE_3__.apiRoutes.oauth;

class OAuthApi {
  isSuccessfulRequest(response, isSignIn) {
    const errorMessage = "Отправленные данные не корректны";

    switch (response.status) {
      case 200:
        if (isSignIn) {
          antd__WEBPACK_IMPORTED_MODULE_0__.notification.success({
            message: "Вход выполнен успешно"
          });
        }

        return true;

      case 400:
        antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
          message: errorMessage
        });
        return false;

      case 401:
        antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
          message: "Ошибка доступа"
        });
        return false;

      case 500:
        antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
          message: "Произошла неизвестная ошибка"
        });
        return false;

      default:
        return false;
    }
  }

  async getServiceId(redirectURI) {
    const response = await _services_API__WEBPACK_IMPORTED_MODULE_1__["default"].request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_2__.Method.GET, serviceId, redirectURI);

    if (response) {
      const success = this.isSuccessfulRequest(response);

      if (success) {
        const result = await response.json();
        return result.service_id ?? null;
      }
    }

    return null;
  }

  async signUpWithYandex(code) {
    const response = await _services_API__WEBPACK_IMPORTED_MODULE_1__["default"].request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_2__.Method.POST, signIn, {
      code,
      redirect_uri: redirectURI
    });

    if (response) {
      return this.isSuccessfulRequest(response, true);
    }

    return false;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new OAuthApi());

/***/ }),

/***/ "./src/api/OAuth/index.ts":
/*!********************************!*\
  !*** ./src/api/OAuth/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _OAuth_api__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _OAuth_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OAuth.api */ "./src/api/OAuth/OAuth.api.ts");


/***/ }),

/***/ "./src/api/Profile/Profile.api.ts":
/*!****************************************!*\
  !*** ./src/api/Profile/Profile.api.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/API */ "./src/services/API/index.ts");
/* harmony import */ var _services_API_API_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/API/API.service */ "./src/services/API/API.service.ts");



const root = "user";
var ProfileDataType;

(function (ProfileDataType) {
  ProfileDataType["Common"] = "Common";
  ProfileDataType["Password"] = "Password";
})(ProfileDataType || (ProfileDataType = {}));

class ProfileApi {
  isSuccessfulRequest(response, dataType) {
    const errorMessage = "Отправленные данные не корректны";
    let message = "Данные успешно изменены";

    if (dataType) {
      message = dataType === ProfileDataType.Common ? "Данные профиля успешно изменены" : "Пароль успешно изменен";
    }

    switch (response.status) {
      case 200:
        antd__WEBPACK_IMPORTED_MODULE_0__.notification.success({
          message
        });
        return true;

      case 400:
        antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
          message: errorMessage
        });
        return false;

      case 401:
        antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
          message: "Ошибка авторизации"
        });
        return false;

      case 500:
        antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
          message: "Произошла неизвестная ошибка"
        });
        return false;

      default:
        return false;
    }
  }

  async setProfile(data) {
    const requestData = { ...data,
      display_name: ""
    };
    const response = await _services_API__WEBPACK_IMPORTED_MODULE_1__["default"].request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_2__.Method.PUT, `${root}/profile`, requestData);

    if (response) {
      const success = this.isSuccessfulRequest(response, ProfileDataType.Common);

      if (success) {
        const result = await response.json();
        return result ?? null;
      }
    }

    return null;
  }

  async setPassword(data) {
    const response = await _services_API__WEBPACK_IMPORTED_MODULE_1__["default"].request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_2__.Method.PUT, `${root}/password`, data);

    if (response) {
      return this.isSuccessfulRequest(response, ProfileDataType.Password);
    }

    return false;
  } // todo


  async setAvatar(data) {
    const response = await _services_API__WEBPACK_IMPORTED_MODULE_1__["default"].request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_2__.Method.PUT, `${root}/avatar`, data);

    if (response) {
      const success = this.isSuccessfulRequest(response);

      if (success) {
        const result = await response.json();
        return result ?? null;
      }
    }

    return null;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProfileApi());

/***/ }),

/***/ "./src/api/Theme/Theme.api.ts":
/*!************************************!*\
  !*** ./src/api/Theme/Theme.api.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_API_API_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/API/API.service */ "./src/services/API/API.service.ts");

const root = "themes";

class ThemeApi {
  async getTheme(id) {
    const response = await _services_API_API_service__WEBPACK_IMPORTED_MODULE_0__.LocalAPIService.request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_0__.Method.GET, `${root}/${id}`);

    if (response.status === 200) {
      const result = await response.json();
      return result ?? null;
    }

    return null;
  }

  async updateTheme(id, data) {
    // eslint-disable-next-line max-len
    const response = await _services_API_API_service__WEBPACK_IMPORTED_MODULE_0__.LocalAPIService.request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_0__.Method.PUT, `${root}/${id}`, {
      theme: data
    });

    if (response.status === 200) {
      const result = await response.json();
      return result ?? null;
    }

    return null;
  }

  async createTheme(data) {
    const response = await _services_API_API_service__WEBPACK_IMPORTED_MODULE_0__.LocalAPIService.request(_services_API_API_service__WEBPACK_IMPORTED_MODULE_0__.Method.POST, root, data);

    if (response.status === 200) {
      const result = await response.json();
      return result ?? null;
    }

    return null;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ThemeApi());

/***/ }),

/***/ "./src/components/AccessRedirectRoute/AccessRedirectRoute.tsx":
/*!********************************************************************!*\
  !*** ./src/components/AccessRedirectRoute/AccessRedirectRoute.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");
/* harmony import */ var _helpers_acess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/acess */ "./src/helpers/acess.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const AccessRoute = ({
  component,
  ...props
}) => {
  const Component = component;
  const isSignedInCookie = (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_3__.checkAccess)();
  const isSignedIn = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.auth.isSignedIn);
  const isSignedInOAuth = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.auth.isSignedInOAuth);
  const isSignedInAll = isSignedInCookie || isSignedIn || isSignedInOAuth;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({}, props, {
    render: () => !isSignedInAll ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
      to: _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes.main.path
    })
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccessRoute);

/***/ }),

/***/ "./src/components/AccessRedirectRoute/index.ts":
/*!*****************************************************!*\
  !*** ./src/components/AccessRedirectRoute/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _AccessRedirectRoute__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AccessRedirectRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessRedirectRoute */ "./src/components/AccessRedirectRoute/AccessRedirectRoute.tsx");


/***/ }),

/***/ "./src/components/AccessRoute/AccessRoute.tsx":
/*!****************************************************!*\
  !*** ./src/components/AccessRoute/AccessRoute.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");
/* harmony import */ var _helpers_acess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/acess */ "./src/helpers/acess.ts");
/* harmony import */ var _pages_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/Error */ "./src/pages/Error/index.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const AccessRoute = ({
  component,
  ...props
}) => {
  const Component = component;
  const isSignedInCookie = (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_3__.checkAccess)();
  const isSignedIn = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.auth.isSignedIn);
  const isSignedInOAuth = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.auth.isSignedInOAuth);
  const isSignedInAll = isSignedInCookie || isSignedIn || isSignedInOAuth;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({}, props, {
    render: () => isSignedInAll ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Error__WEBPACK_IMPORTED_MODULE_4__["default"], {
      status: "403"
    })
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccessRoute);

/***/ }),

/***/ "./src/components/AccessRoute/index.ts":
/*!*********************************************!*\
  !*** ./src/components/AccessRoute/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _AccessRoute__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AccessRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessRoute */ "./src/components/AccessRoute/AccessRoute.tsx");


/***/ }),

/***/ "./src/components/App/App.helpers.tsx":
/*!********************************************!*\
  !*** ./src/components/App/App.helpers.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalChild": () => (/* binding */ ModalChild),
/* harmony export */   "useServiceWorkers": () => (/* binding */ useServiceWorkers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.module.scss */ "./src/components/App/App.module.scss");
/* harmony import */ var _helpers_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/environment */ "./src/helpers/environment.ts");





const {
  Title
} = antd__WEBPACK_IMPORTED_MODULE_2__.Typography;
const ModalChild = ({
  onClose
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
  className: _App_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title,
  level: 2
}, "\u041D\u0435\u0442 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
  type: "primary",
  onClick: () => onClose()
}, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"));
const sw = !_helpers_environment__WEBPACK_IMPORTED_MODULE_4__.isServer ? navigator?.serviceWorker : null;
const useServiceWorkers = () => {
  const [isActive, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setActive(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function startServiceWorker() {
      if (sw) {
        window.addEventListener("load", () => {
          sw.register("./sw.js").then(registration => {
            console.log("ServiceWorker registration successful ", registration.scope);
          }).then(() => {
            sw.addEventListener("message", ({
              data
            }) => {
              if (data === "FORBIDDEN_METHOD") {
                setActive(true);
              }
            });
          }).catch(error => {
            console.log("ServiceWorker registration failed: ", error);
          });
        }, {
          once: true
        });
      }
    }

    startServiceWorker();
  }, []);
  return {
    isActive,
    onClose
  };
};

/***/ }),

/***/ "./src/components/App/App.view.tsx":
/*!*****************************************!*\
  !*** ./src/components/App/App.view.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ErrorBoundary */ "./src/components/ErrorBoundary/index.ts");
/* harmony import */ var _components_GameModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/GameModal */ "./src/components/GameModal/index.ts");
/* harmony import */ var _components_Router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Router */ "./src/components/Router/index.ts");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.module.scss */ "./src/components/App/App.module.scss");
/* harmony import */ var _App_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.helpers */ "./src/components/App/App.helpers.tsx");
/* harmony import */ var _actions_theme_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/actions/theme.actions */ "./src/actions/theme.actions.ts");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");











const App = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    onClose,
    isActive
  } = (0,_App_helpers__WEBPACK_IMPORTED_MODULE_7__.useServiceWorkers)();
  const userId = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_9__.useSelector)(state => state.profile.data.id);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_actions_theme_actions__WEBPACK_IMPORTED_MODULE_8__.getTheme)());
  }, [userId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].App
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GameModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isActive: isActive,
    title: "\u041E\u0448\u0438\u0431\u043A\u0430"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App_helpers__WEBPACK_IMPORTED_MODULE_7__.ModalChild, {
    onClose: onClose
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Router__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/App/index.ts":
/*!*************************************!*\
  !*** ./src/components/App/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _App_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _App_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.view */ "./src/components/App/App.view.tsx");


/***/ }),

/***/ "./src/components/Button/Button.view.tsx":
/*!***********************************************!*\
  !*** ./src/components/Button/Button.view.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);



const Button = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Button, props);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/Button/index.ts":
/*!****************************************!*\
  !*** ./src/components/Button/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Button_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Button_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.view */ "./src/components/Button/Button.view.tsx");


/***/ }),

/***/ "./src/components/Container/Container.view.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Container/Container.view.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.module.scss */ "./src/components/Container/Container.module.scss");



const Container = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: _Container_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
}, children);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./src/components/Container/index.ts":
/*!*******************************************!*\
  !*** ./src/components/Container/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Container_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Container_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container.view */ "./src/components/Container/Container.view.tsx");


/***/ }),

/***/ "./src/components/ErrorBoundary/ErrorBoundary.view.tsx":
/*!*************************************************************!*\
  !*** ./src/components/ErrorBoundary/ErrorBoundary.view.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    }); // Log error info somewhere
  } // todo


  render() {
    if (this.state.error) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Something went wrong!");
    }

    return this.props.children;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ }),

/***/ "./src/components/ErrorBoundary/index.ts":
/*!***********************************************!*\
  !*** ./src/components/ErrorBoundary/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ErrorBoundary_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ErrorBoundary_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorBoundary.view */ "./src/components/ErrorBoundary/ErrorBoundary.view.tsx");


/***/ }),

/***/ "./src/components/GameModal/GameModal.view.tsx":
/*!*****************************************************!*\
  !*** ./src/components/GameModal/GameModal.view.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GameModal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameModal.module.scss */ "./src/components/GameModal/GameModal.module.scss");




const GameModal = ({
  isActive,
  children,
  title
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Modal, {
  className: _GameModal_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].gameModal,
  title: title,
  visible: isActive,
  footer: null,
  closable: false
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: _GameModal_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].buttonContainer
}, children));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameModal);

/***/ }),

/***/ "./src/components/GameModal/index.ts":
/*!*******************************************!*\
  !*** ./src/components/GameModal/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _GameModal_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _GameModal_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameModal.view */ "./src/components/GameModal/GameModal.view.tsx");


/***/ }),

/***/ "./src/components/Header/Header.helpers.tsx":
/*!**************************************************!*\
  !*** ./src/components/Header/Header.helpers.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHeader": () => (/* binding */ useHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/auth.actions */ "./src/actions/auth.actions.ts");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button */ "./src/components/Button/index.ts");





const useHeader = () => {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const onSignOut = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async event => {
    event.preventDefault();
    dispatch((0,_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__.signOut)(history));
  }, []);

  const renderSignOutButton = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onSignOut
  }, "\u0412\u044B\u0439\u0442\u0438");

  return {
    renderSignOutButton
  };
};

/***/ }),

/***/ "./src/components/Header/Header.view.tsx":
/*!***********************************************!*\
  !*** ./src/components/Header/Header.view.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.helpers */ "./src/components/Header/Header.helpers.tsx");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.module.scss */ "./src/components/Header/Header.module.scss");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../NavBar */ "./src/components/NavBar/index.ts");








const {
  Text
} = antd__WEBPACK_IMPORTED_MODULE_2__.Typography;

const Header = ({
  currentPath
}) => {
  const {
    renderSignOutButton
  } = (0,_Header_helpers__WEBPACK_IMPORTED_MODULE_3__.useHeader)();
  const isSignedIn = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.auth.isSignedIn);
  const isSignedInOAuth = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.auth.isSignedInOAuth);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].logo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes.main.path,
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].logoSymbols
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].logoMainSymbol
  }, "U"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, {
    type: "secondary"
  }, "DC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].routesContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currentPath: currentPath
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].buttonContainer
  }, (isSignedIn || isSignedInOAuth) && renderSignOutButton())));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Header/index.ts":
/*!****************************************!*\
  !*** ./src/components/Header/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Header_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Header_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.view */ "./src/components/Header/Header.view.tsx");


/***/ }),

/***/ "./src/components/Input/Input.view.tsx":
/*!*********************************************!*\
  !*** ./src/components/Input/Input.view.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);



const Input = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Input, props);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./src/components/Input/index.ts":
/*!***************************************!*\
  !*** ./src/components/Input/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Input_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Input_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.view */ "./src/components/Input/Input.view.tsx");


/***/ }),

/***/ "./src/components/NavBar/NavBar.view.tsx":
/*!***********************************************!*\
  !*** ./src/components/NavBar/NavBar.view.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* harmony import */ var _components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Switch */ "./src/components/Switch/index.ts");
/* harmony import */ var _hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useMountEffect */ "./src/hooks/useMountEffect.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");
/* harmony import */ var _Navbar_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Navbar.helpers */ "./src/components/NavBar/Navbar.helpers.tsx");









const NavBar = ({
  currentPath
}) => {
  const isSignedIn = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.auth.isSignedIn);
  const isSignedInOAuth = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.auth.isSignedInOAuth);
  const [routes, setRoutes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    theme,
    changeTheme
  } = (0,_Navbar_helpers__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
  const allRoutes = [// { path: appRoutes.about.path, label: "Об игре" },
  {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.profile.path,
    label: "Профиль"
  }, {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.leaderboard.path,
    label: "Таблица лидеров"
  }, {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.forum.path,
    label: "Форум"
  }, {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.signUp.path,
    label: "Регистрация"
  }, {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.signIn.path,
    label: "Вход"
  }];
  (0,_hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_4__.useMountEffect)(() => {
    if (isSignedIn || isSignedInOAuth) {
      setRoutes(allRoutes.filter(route => route.path !== _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.signUp.path && route.path !== _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.signIn.path));
    } else {
      setRoutes(allRoutes.filter(route => route.path === _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.signUp.path || route.path === _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.signIn.path));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ulContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].ul
  }, routes.map(route => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: route.path === currentPath ? _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].active : _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].inactive,
    key: route.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: route.path
  }, route.label))), (isSignedIn || isSignedInOAuth) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: () => changeTheme(theme)
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/components/NavBar/Navbar.helpers.tsx":
/*!**************************************************!*\
  !*** ./src/components/NavBar/Navbar.helpers.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTheme": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");
/* harmony import */ var _actions_theme_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/actions/theme.actions */ "./src/actions/theme.actions.ts");



const useTheme = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  const theme = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.theme);

  const changeTheme = theme => {
    if (theme === "light") {
      dispatch((0,_actions_theme_actions__WEBPACK_IMPORTED_MODULE_2__.updateTheme)("dark"));
    } else if (theme === "dark") {
      dispatch((0,_actions_theme_actions__WEBPACK_IMPORTED_MODULE_2__.updateTheme)("light"));
    } else {
      dispatch((0,_actions_theme_actions__WEBPACK_IMPORTED_MODULE_2__.createTheme)("dark"));
    }
  };

  return {
    theme,
    changeTheme
  };
};

/***/ }),

/***/ "./src/components/NavBar/index.ts":
/*!****************************************!*\
  !*** ./src/components/NavBar/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _NavBar_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _NavBar_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.view */ "./src/components/NavBar/NavBar.view.tsx");


/***/ }),

/***/ "./src/components/PageLoader/PageLoader.view.tsx":
/*!*******************************************************!*\
  !*** ./src/components/PageLoader/PageLoader.view.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageLoader_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageLoader.module.scss */ "./src/components/PageLoader/PageLoader.module.scss");





const PageLoader = ({
  isSpinning,
  children
}) => {
  const antIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.LoadingOutlined, {
    style: {
      fontSize: 72
    },
    spin: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Spin, {
    className: _PageLoader_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].spinner,
    indicator: antIcon,
    size: "large",
    spinning: isSpinning
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: !isSpinning ? _PageLoader_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].init : _PageLoader_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].loading
  }, children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLoader);

/***/ }),

/***/ "./src/components/PageLoader/index.ts":
/*!********************************************!*\
  !*** ./src/components/PageLoader/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _PageLoader_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PageLoader_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageLoader.view */ "./src/components/PageLoader/PageLoader.view.tsx");


/***/ }),

/***/ "./src/components/PageMeta/PageMeta.view.tsx":
/*!***************************************************!*\
  !*** ./src/components/PageMeta/PageMeta.view.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);



const cutTags = (text = "") => text.replace(/<\/?.+?>/gi, "");

const prepareData = ({
  title,
  description,
  image
}) => ({
  title: cutTags(title),
  description: cutTags(description).substr(0, 250),
  image
});

const PageMeta = props => {
  const {
    title,
    description,
    image
  } = prepareData(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "twitter:title",
    content: title
  }), Boolean(description) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  }), Boolean(description) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:description",
    content: description
  }), Boolean(description) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "twitter:description",
    content: description
  }), Boolean(image) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:image",
    content: image
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageMeta);

/***/ }),

/***/ "./src/components/PageMeta/index.ts":
/*!******************************************!*\
  !*** ./src/components/PageMeta/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _PageMeta_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PageMeta_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageMeta.view */ "./src/components/PageMeta/PageMeta.view.tsx");


/***/ }),

/***/ "./src/components/Password/Password.view.tsx":
/*!***************************************************!*\
  !*** ./src/components/Password/Password.view.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const {
  Password
} = antd__WEBPACK_IMPORTED_MODULE_1__.Input;

const CustomPassword = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Password, _extends({
  prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.LockOutlined, null),
  iconRender: () => false
}, props));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomPassword);

/***/ }),

/***/ "./src/components/Password/index.ts":
/*!******************************************!*\
  !*** ./src/components/Password/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Password_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Password_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Password.view */ "./src/components/Password/Password.view.tsx");


/***/ }),

/***/ "./src/components/Router/Router.view.tsx":
/*!***********************************************!*\
  !*** ./src/components/Router/Router.view.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Routes_Routes_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Routes/Routes.view */ "./src/components/Router/Routes/Routes.view.tsx");

 // todo изменить на browserouter

const Router = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Routes_Routes_view__WEBPACK_IMPORTED_MODULE_1__["default"], null);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);

/***/ }),

/***/ "./src/components/Router/Routes/Routes.view.tsx":
/*!******************************************************!*\
  !*** ./src/components/Router/Routes/Routes.view.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_OAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/OAuth */ "./src/api/OAuth/index.ts");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/actions/auth.actions */ "./src/actions/auth.actions.ts");
/* harmony import */ var _hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useMountEffect */ "./src/hooks/useMountEffect.ts");
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/actions/profile.actions */ "./src/actions/profile.actions.ts");
/* harmony import */ var _pages_SignIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/pages/SignIn */ "./src/pages/SignIn/index.ts");
/* harmony import */ var _pages_SignUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/pages/SignUp */ "./src/pages/SignUp/index.ts");
/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/pages/Main */ "./src/pages/Main/index.ts");
/* harmony import */ var _pages_Profile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/pages/Profile */ "./src/pages/Profile/index.ts");
/* harmony import */ var _pages_Forum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/pages/Forum */ "./src/pages/Forum/index.ts");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/pages/About */ "./src/pages/About/index.ts");
/* harmony import */ var _pages_Leaderboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/pages/Leaderboard */ "./src/pages/Leaderboard/index.ts");
/* harmony import */ var _pages_Error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/pages/Error */ "./src/pages/Error/index.ts");
/* harmony import */ var _pages_Game__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/pages/Game */ "./src/pages/Game/index.ts");
/* harmony import */ var _pages_Offline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/pages/Offline */ "./src/pages/Offline/index.ts");
/* harmony import */ var _pages_Topic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/pages/Topic */ "./src/pages/Topic/index.ts");
/* harmony import */ var _pages_TopicEdit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/pages/TopicEdit */ "./src/pages/TopicEdit/index.ts");
/* harmony import */ var _components_AccessRoute__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/components/AccessRoute */ "./src/components/AccessRoute/index.ts");
/* harmony import */ var _components_AccessRedirectRoute__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/components/AccessRedirectRoute */ "./src/components/AccessRedirectRoute/index.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");























const Routes = () => {
  const {
    search
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
  (0,_hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_5__.useMountEffect)(() => {
    const code = new URLSearchParams(search).get("code");

    if (code) {
      _api_OAuth__WEBPACK_IMPORTED_MODULE_3__["default"].signUpWithYandex(code).then(() => {
        dispatch((0,_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__.signInOAuth)(history));
        dispatch((0,_actions_profile_actions__WEBPACK_IMPORTED_MODULE_6__.getProfile)());
      });
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
    exact: true,
    from: "/",
    to: _config_routes_routes__WEBPACK_IMPORTED_MODULE_21__.routes.signIn.path
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AccessRedirectRoute__WEBPACK_IMPORTED_MODULE_20__["default"], {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_21__.routes.signIn.path,
    component: _pages_SignIn__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AccessRedirectRoute__WEBPACK_IMPORTED_MODULE_20__["default"], {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_21__.routes.signUp.path,
    component: _pages_SignUp__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AccessRoute__WEBPACK_IMPORTED_MODULE_19__["default"], {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_21__.routes.main.path,
    component: _pages_Main__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AccessRoute__WEBPACK_IMPORTED_MODULE_19__["default"], {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_21__.routes.profile.path,
    component: _pages_Profile__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AccessRoute__WEBPACK_IMPORTED_MODULE_19__["default"], {
    exact: true,
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_21__.routes.forum.path,
    component: _pages_Forum__WEBPACK_IMPORTED_MODULE_11__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AccessRoute__WEBPACK_IMPORTED_MODULE_19__["default"], {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_21__.routes.topic.path,
    component: _pages_Topic__WEBPACK_IMPORTED_MODULE_17__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AccessRoute__WEBPACK_IMPORTED_MODULE_19__["default"], {
    exact: true,
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_21__.routes.topicEdit.path,
    component: _pages_TopicEdit__WEBPACK_IMPORTED_MODULE_18__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AccessRoute__WEBPACK_IMPORTED_MODULE_19__["default"], {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_21__.routes.leaderboard.path,
    component: _pages_Leaderboard__WEBPACK_IMPORTED_MODULE_13__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_21__.routes.about.path,
    component: _pages_About__WEBPACK_IMPORTED_MODULE_12__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AccessRoute__WEBPACK_IMPORTED_MODULE_19__["default"], {
    path: _config_routes_routes__WEBPACK_IMPORTED_MODULE_21__.routes.game.path,
    component: _pages_Game__WEBPACK_IMPORTED_MODULE_15__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/error",
    component: _pages_Error__WEBPACK_IMPORTED_MODULE_14__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/offline",
    component: _pages_Offline__WEBPACK_IMPORTED_MODULE_16__["default"]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

/***/ }),

/***/ "./src/components/Router/index.ts":
/*!****************************************!*\
  !*** ./src/components/Router/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Router_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Router_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router.view */ "./src/components/Router/Router.view.tsx");


/***/ }),

/***/ "./src/components/Switch/Switch.view.tsx":
/*!***********************************************!*\
  !*** ./src/components/Switch/Switch.view.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);



const Switch = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Switch, props);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Switch);

/***/ }),

/***/ "./src/components/Switch/index.ts":
/*!****************************************!*\
  !*** ./src/components/Switch/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Switch_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Switch_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch.view */ "./src/components/Switch/Switch.view.tsx");


/***/ }),

/***/ "./src/config/apiRoutes.ts":
/*!*********************************!*\
  !*** ./src/config/apiRoutes.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiRoutes": () => (/* binding */ apiRoutes)
/* harmony export */ });
const apiRoutes = {
  oauth: {
    providerURLRoot: "https://oauth.yandex.ru/authorize?response_type=code",
    redirectURI: "https://udc.ya-praktikum.tech",
    // localhost:3000
    serviceId: "oauth/yandex/service-id",
    signIn: "oauth/yandex"
  }
};

/***/ }),

/***/ "./src/config/leaderboard.ts":
/*!***********************************!*\
  !*** ./src/config/leaderboard.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECORDS_PER_PAGE": () => (/* binding */ RECORDS_PER_PAGE),
/* harmony export */   "TEAM_SCORE": () => (/* binding */ TEAM_SCORE)
/* harmony export */ });
const TEAM_SCORE = "southParkGameScore";
const RECORDS_PER_PAGE = 10;

/***/ }),

/***/ "./src/config/routes/routes.ts":
/*!*************************************!*\
  !*** ./src/config/routes/routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findRoute": () => (/* binding */ findRoute),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
const routes = {
  main: {
    path: "/main"
  },
  signIn: {
    path: "/signin"
  },
  signUp: {
    path: "/signup"
  },
  profile: {
    path: "/profile"
  },
  forum: {
    path: "/forum"
  },
  topic: {
    path: "/topics/:id"
  },
  topicEdit: {
    path: "/topic/edit"
  },
  leaderboard: {
    path: "/leaderboard"
  },
  about: {
    path: "/about"
  },
  game: {
    path: "/game"
  },
  theme: {
    path: "/themes/:id"
  }
};
const findRoute = path => {
  const route = Object.values(routes).find(route => route.path === path);
  return route ?? null;
};

/***/ }),

/***/ "./src/game/core/animations/animation.ts":
/*!***********************************************!*\
  !*** ./src/game/core/animations/animation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameAnimation": () => (/* binding */ GameAnimation)
/* harmony export */ });
class GameAnimation {}

/***/ }),

/***/ "./src/game/core/animations/attack/attack.ts":
/*!***************************************************!*\
  !*** ./src/game/core/animations/attack/attack.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttackAnimation": () => (/* binding */ AttackAnimation)
/* harmony export */ });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation */ "./src/game/core/animations/animation.ts");
/* harmony import */ var _utils_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/vector */ "./src/game/core/utils/vector.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// TODO: Создать разные анимации атаки для разных видов оружия
class AttackAnimation extends _animation__WEBPACK_IMPORTED_MODULE_0__.GameAnimation {
  constructor(props) {
    super();

    _defineProperty(this, "currentRotation", 0);

    _defineProperty(this, "maxAnimationStep", 10);

    _defineProperty(this, "maxRotation", 2.4);
  } // Обновить позиции оружия и анимировать удар, если он активен


  update(weapon, object) {
    // Анимация удара
    if (weapon.active) {
      // Нужно ли перевернуть
      const shouldFlip = object.spriteConfig?.shouldFlip; // Определяем позицию

      const geom = object.geometry;
      const {
        x
      } = object.position;
      const {
        y
      } = object.position;
      const {
        width
      } = geom;
      const {
        height
      } = geom; // Позицинируем меч (подобрано)
      // TODO: Баг позиционирования слева и дальности удара !

      let weaponX = x + width * 0.55;

      if (shouldFlip) {
        weaponX = x - width * 0.15;
      }

      const weaponY = y - height * 0.5;
      weapon.position.x = weaponX;
      weapon.position.y = weaponY; // Определяем угол поворота (текущий)

      this.currentRotation += this.maxRotation / this.maxAnimationStep; // Центром поворота устанавливаем ручку оружия

      const weaponGeom = weapon.geometry;
      const center = new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(weapon.position.x, weapon.position.y + weaponGeom.height);
      weapon.rotateAround(center, this.currentRotation); // Конец анимации

      if (this.currentRotation >= this.maxRotation) {
        this.currentRotation = 0;
        weapon.attackCount += 1;
        weapon.active = false;
        weapon.visible = false;
      }
    }

    return weapon;
  }

}

/***/ }),

/***/ "./src/game/core/animations/move/moveAnimation.ts":
/*!********************************************************!*\
  !*** ./src/game/core/animations/move/moveAnimation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoveAnimation": () => (/* binding */ MoveAnimation)
/* harmony export */ });
/* harmony import */ var _world_world_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../world/world.config */ "./src/game/world/world.config.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animation */ "./src/game/core/animations/animation.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MoveAnimation extends _animation__WEBPACK_IMPORTED_MODULE_1__.GameAnimation {
  constructor(props) {
    super();

    _defineProperty(this, "moveState", void 0);

    _defineProperty(this, "speed", void 0);

    this.speed = props.speed; //

    this.moveState = {
      isMovingLeft: false,
      isMovingRight: false,
      isMovingTop: false,
      isMovingDown: false
    }; //
  }

  update(position) {
    const delta = _world_world_config__WEBPACK_IMPORTED_MODULE_0__.STEP * this.speed;

    if (this.moveState.isMovingDown) {
      position.y += delta;
    }

    if (this.moveState.isMovingTop) {
      position.y -= delta;
    }

    if (this.moveState.isMovingRight) {
      position.x += delta;
    }

    if (this.moveState.isMovingLeft) {
      position.x -= delta;
    }

    return position;
  }

  isMoving() {
    return Object.values(this.moveState).reduce((res, val) => res || val, false);
  }

}

/***/ }),

/***/ "./src/game/core/animations/sprite/spriteAnimation.ts":
/*!************************************************************!*\
  !*** ./src/game/core/animations/sprite/spriteAnimation.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpriteAnimation": () => (/* binding */ SpriteAnimation)
/* harmony export */ });
/* harmony import */ var _world_world_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../world/world.config */ "./src/game/world/world.config.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animation */ "./src/game/core/animations/animation.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SpriteAnimation extends _animation__WEBPACK_IMPORTED_MODULE_1__.GameAnimation {
  // in ms
  constructor(props) {
    super();

    _defineProperty(this, "timeAfterLastSpriteUpdate", void 0);

    _defineProperty(this, "sprites", void 0);

    this.sprites = props.sprites;
    this.timeAfterLastSpriteUpdate = 0;
  }

  update(spriteConfig, moveAnimation) {
    this.timeAfterLastSpriteUpdate += _world_world_config__WEBPACK_IMPORTED_MODULE_0__.STEP;
    const shouldUpdateSprite = this.shouldUpdateSprite();

    if (spriteConfig && shouldUpdateSprite) {
      const isMoving = moveAnimation.isMoving();
      const isCurrentSpriteIdle = this.isCurrentSpriteIdle(spriteConfig);

      if (isMoving) {
        if (isCurrentSpriteIdle) {
          spriteConfig.sprite = this.sprites.run_0;
        } else {
          spriteConfig.sprite = this.getNextRunSprite(spriteConfig);
        }
      } else if (!isCurrentSpriteIdle) {
        spriteConfig.sprite = this.sprites.idle_0;
      } else {
        spriteConfig.sprite = this.getNextIdleSprite(spriteConfig);
      }
    } // NOTE: Обновляем shouldFlip после установки нового спрайта


    if (spriteConfig) {
      if (moveAnimation.moveState.isMovingRight) {
        spriteConfig.shouldFlip = false;
      }

      if (moveAnimation.moveState.isMovingLeft) {
        spriteConfig.shouldFlip = true;
      }
    }

    return spriteConfig;
  }

  shouldUpdateSprite() {
    // Обновляем 12 раз в секунду
    if (this.timeAfterLastSpriteUpdate > 5 * _world_world_config__WEBPACK_IMPORTED_MODULE_0__.STEP) {
      this.timeAfterLastSpriteUpdate = 0;
      return true;
    }

    return false;
  }

  isCurrentSpriteIdle(spriteConfig) {
    const sprite = spriteConfig?.sprite;
    return sprite === this.sprites.idle_0 || sprite === this.sprites.idle_1 || sprite === this.sprites.idle_2 || sprite === this.sprites.idle_3;
  }

  getNextRunSprite(spriteConfig) {
    const sprite = spriteConfig?.sprite;

    switch (sprite) {
      case this.sprites.run_0:
        return this.sprites.run_1;

      case this.sprites.run_1:
        return this.sprites.run_2;

      case this.sprites.run_2:
        return this.sprites.run_3;

      case this.sprites.run_3:
        return this.sprites.run_0;

      default:
        return this.sprites.run_0;
    }
  }

  getNextIdleSprite(spriteConfig) {
    const sprite = spriteConfig?.sprite;

    switch (sprite) {
      case this.sprites.idle_0:
        return this.sprites.idle_1;

      case this.sprites.idle_1:
        return this.sprites.idle_2;

      case this.sprites.idle_2:
        return this.sprites.idle_3;

      case this.sprites.idle_3:
        return this.sprites.idle_0;

      default:
        return this.sprites.idle_0;
    }
  }

}

/***/ }),

/***/ "./src/game/core/camera.ts":
/*!*********************************!*\
  !*** ./src/game/core/camera.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Camera {
  // TODO: Размеры viewport, zoom, объект привязки
  get x() {
    return this.bindedObject?.position.x || 0;
  }

  get y() {
    return this.bindedObject?.position.y || 0;
  }

  constructor(size) {
    _defineProperty(this, "bindedObject", void 0);

    _defineProperty(this, "size", void 0);

    this.size = size;
  }

  bindObject(object) {
    this.bindedObject = object;
  } // TODO: frustumView culling


}

/***/ }),

/***/ "./src/game/core/eventBus.ts":
/*!***********************************!*\
  !*** ./src/game/core/eventBus.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventBus": () => (/* binding */ EventBus)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Класс, управляющий всеми событиями в игре
// Например, для player если в prerender фиксируются зажатые клавишы передвижения, то
// на основе пройденного времени нужно пересчитать перемещение объекта (+ скорость)
// то есть пересчитать положение
class EventBus {
  constructor() {
    _defineProperty(this, "_listeners", void 0);

    this._listeners = new Map();
  }

  on(event, callback) {
    const events = this._listeners.get(event) || [];
    events.push(callback);

    this._listeners.set(event, events);
  }

  off(event, callback) {
    const events = this._listeners.get(event);

    if (!events) {
      return;
    }

    this._listeners.set(event, events.filter(listener => listener !== callback));
  }

  emit(event, ...args) {
    const events = this._listeners.get(event);

    if (!events) {
      return;
    }

    events.forEach(listener => {
      listener(...args);
    });
  }

}

/***/ }),

/***/ "./src/game/core/geometry/geometry.ts":
/*!********************************************!*\
  !*** ./src/game/core/geometry/geometry.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geometry": () => (/* binding */ Geometry),
/* harmony export */   "GeometryTypes": () => (/* binding */ GeometryTypes)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let GeometryTypes;

(function (GeometryTypes) {
  GeometryTypes["Rectangle"] = "Rectangle";
  GeometryTypes["Circle"] = "Circle";
  GeometryTypes["Shape"] = "Shape";
})(GeometryTypes || (GeometryTypes = {}));

// Get unique geometry id (ssr)
const getGeomId = function () {
  let geometryId = 0;
  return () => {
    geometryId += 1;
    return geometryId;
  };
}();

class Geometry {
  // Уникальный id геометрии
  // Опциональное имя
  // Bounding box геометрии (для расчетов)
  // Bounding circle геометрии (для расчетов)
  // Тип геометрии (для отрисовки)
  constructor(props) {
    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "boundingBox", void 0);

    _defineProperty(this, "boundingCircle", void 0);

    _defineProperty(this, "type", void 0);

    this.id = getGeomId();
    this.name = "";
    this.type = props.geomType;
    this.boundingBox = null;
    this.boundingCircle = null;
  } // TODO: Методы работы с геометрией


  calculateBoundingBox(object) {}

  calculateBoundingCircle(object) {}

}

/***/ }),

/***/ "./src/game/core/geometry/rectangle/rectangle.ts":
/*!*******************************************************!*\
  !*** ./src/game/core/geometry/rectangle/rectangle.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RectangleGeometry": () => (/* binding */ RectangleGeometry)
/* harmony export */ });
/* harmony import */ var _utils_box2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/box2 */ "./src/game/core/utils/box2.ts");
/* harmony import */ var _utils_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/vector */ "./src/game/core/utils/vector.ts");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry */ "./src/game/core/geometry/geometry.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class RectangleGeometry extends _geometry__WEBPACK_IMPORTED_MODULE_2__.Geometry {
  constructor(width, height) {
    super({
      geomType: _geometry__WEBPACK_IMPORTED_MODULE_2__.GeometryTypes.Rectangle
    });

    _defineProperty(this, "width", void 0);

    _defineProperty(this, "height", void 0);

    this.width = width;
    this.height = height;
  } // Учитываем поворот и shouldFlip


  calculateBoundingBox(object) {
    if (!this.boundingBox) {
      this.boundingBox = new _utils_box2__WEBPACK_IMPORTED_MODULE_0__.Box2(new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(0, 0), new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(0, 0));
    }

    const rectangle = new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(this.width, this.height);
    const {
      position
    } = object;

    if (object.rotation && object.rotationCenter) {
      // Угол и центр поворота
      let angle = object.rotation; // TODO: Баг позиционирования слева и дальности удара !

      if (object.spriteConfig?.shouldFlip) {
        angle = -angle;
      }

      const center = object.rotationCenter.copy().add(new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(object.position.x, object.position.y)); // Вращаем каждую точку вокруг центра

      const p1 = new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(object.position.x, object.position.y);
      const p2 = new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(object.position.x, object.position.y + this.height);
      const p3 = new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(object.position.x + this.width, object.position.y);
      const p4 = new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(object.position.x + this.width, object.position.y + this.height);
      p1.rotateAround(center, angle);
      p2.rotateAround(center, angle);
      p3.rotateAround(center, angle);
      p4.rotateAround(center, angle); // Собираем новый BB из точек

      const minX = Math.min(p1.x, p2.x, p3.x, p4.x);
      const maxX = Math.max(p1.x, p2.x, p3.x, p4.x);
      const minY = Math.min(p1.y, p2.y, p3.y, p4.y);
      const maxY = Math.max(p1.y, p2.y, p3.y, p4.y);
      const newMin = new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(minX, minY);
      const newMax = new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(maxX, maxY); // Новый BB

      this.boundingBox = new _utils_box2__WEBPACK_IMPORTED_MODULE_0__.Box2(newMin, newMax);
    } else {
      this.boundingBox.min = position;
      this.boundingBox.max = position.copy().add(rectangle);
    }
  }

}

/***/ }),

/***/ "./src/game/core/object.ts":
/*!*********************************!*\
  !*** ./src/game/core/object.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Object2D": () => (/* binding */ Object2D)
/* harmony export */ });
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/color */ "./src/game/core/utils/color.ts");
/* harmony import */ var _utils_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/vector */ "./src/game/core/utils/vector.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




// Get unique geometry id (ssr)
const getObject2DId = function () {
  let objectId = 0;
  return () => objectId += 1;
}();

class Object2D {
  // Уникальный id в сцене
  // Опциональное имя объета
  // Позиция объекта в сцене
  // NOTE: x = left, y = top
  // Rotation in radians
  // For Canvas Rendering
  // Видимость объектв в сцене
  // Должен ли объект обрезаться камерой при рендеринге
  // Опциональные данные
  // Геометрия объекта
  // Цвет
  // Спрайт
  // TODO: Определить тип и реализовать функционал
  constructor(props) {
    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "position", void 0);

    _defineProperty(this, "rotation", void 0);

    _defineProperty(this, "rotationCenter", void 0);

    _defineProperty(this, "visible", void 0);

    _defineProperty(this, "frustumCulled", void 0);

    _defineProperty(this, "userData", void 0);

    _defineProperty(this, "geometry", void 0);

    _defineProperty(this, "color", void 0);

    _defineProperty(this, "spriteConfig", void 0);

    // Задаем дефолтные значения
    this.id = getObject2DId();
    this.name = "";
    this.position = new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(0, 0);
    this.visible = true;
    this.frustumCulled = false;
    this.userData = null;
    this.spriteConfig = null; // Сохраняем тип геометрии

    this.geometry = props.geometry;
    this.color = props.color || new _utils_color__WEBPACK_IMPORTED_MODULE_0__.Color(0, 0, 0);
  } // Базовые методы для объекта


  move(vect) {
    this.position.add(vect);
  }
  /**
   *  Вращает вокруг центра на заданнный угол
      @center - Точка вокруг которой вращается
      @angle - Угол вращения в радианах
  */


  rotateAround(center, angle) {
    this.rotation = angle;
    this.rotationCenter = new _utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(center.x - this.position.x, center.y - this.position.y);
  }

  scale() {} // Обобщенный метод обновления текущего состояния
  // Каждый объект определяет самостоятельно
  // Происходит каждые STEP


  updateState() {}

}

/***/ }),

/***/ "./src/game/core/physics/physics.ts":
/*!******************************************!*\
  !*** ./src/game/core/physics/physics.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isImplementingCollision": () => (/* binding */ isImplementingCollision)
/* harmony export */ });
/* harmony import */ var _world_world_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../world/world.config */ "./src/game/world/world.config.ts");

function isImplementingCollision(obj1) {
  return obj1.hasOwnProperty("canCollide");
}

class Physics {
  hasBox2DCollided(obj1, obj2) {
    // Пересчитываем BoundingBox
    obj1.geometry.calculateBoundingBox(obj1);
    obj2.geometry.calculateBoundingBox(obj2); // Получаем BB объектов

    const box1 = obj1.geometry.boundingBox;
    const box2 = obj2.geometry.boundingBox; // Простая AABB проверка

    if (box1.min.x < box2.max.x && box1.max.x > box2.min.x && box1.min.y < box2.max.y && box1.max.y > box2.min.y) {
      return true;
    }

    return false;
  } // Общая идея в том, чтобы определить в следствие какого движения произошло столкновение
  // Для этого мы берем предыдущую позицию и проверяем произойдет ли столкновение
  // если передвинуться на расчетное значение delta
  // Если столкновение произойдет, то пересчитываем позицию
  // иначе восстанавливаем текущую позицию


  getNewPositionAfterWallCollision(object, obstacle, moveAnimation, prevPosition) {
    // Края объекта не должны пересекаться с bounding box obstacle
    const objGeom = object.geometry;
    const obstGeomBB = obstacle.geometry.boundingBox;
    const {
      isMovingRight,
      isMovingLeft,
      isMovingDown,
      isMovingTop
    } = moveAnimation.moveState; // Сохраняем текущую позицию (позиция после движения)

    const position = object.position.copy();
    const delta = _world_world_config__WEBPACK_IMPORTED_MODULE_0__.STEP * moveAnimation.speed;

    if (isMovingRight) {
      // Устанавливаем предыдущую позицию
      object.position = prevPosition.copy(); // Делаем шаг вправо

      object.position.x += delta; // Проверяем стало ли это причиной столкновения

      const isCollisionCause = this.hasBox2DCollided(object, obstacle);

      if (isCollisionCause) {
        // Обновляем координаты если стало
        object.position.x = obstacle.position.x - objGeom.width;
        object.position.y = position.y; // Дальше не идем, иначе восстановим случайно позицию

        return object.position;
      } // Восстанавливаем позицию


      object.position = position;
    }

    if (isMovingDown) {
      object.position = prevPosition.copy();
      object.position.y += delta;
      const isCollisionCause = this.hasBox2DCollided(object, obstacle);

      if (isCollisionCause) {
        object.position.x = position.x;
        object.position.y = obstGeomBB.min.y - objGeom.height;
        return object.position;
      }

      object.position = position;
    }

    if (isMovingLeft) {
      object.position = prevPosition.copy();
      object.position.x -= delta;
      const isCollisionCause = this.hasBox2DCollided(object, obstacle);

      if (isCollisionCause) {
        object.position.x = obstGeomBB.max.x;
        object.position.y = position.y;
        return object.position;
      }

      object.position = position;
    }

    if (isMovingTop) {
      object.position = prevPosition.copy();
      object.position.y -= delta;
      const isCollisionCause = this.hasBox2DCollided(object, obstacle);

      if (isCollisionCause) {
        object.position.x = position.x;
        object.position.y = obstGeomBB.max.y;
        return object.position;
      }

      object.position = position;
    }

    return object.position;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Physics());

/***/ }),

/***/ "./src/game/core/renderer.ts":
/*!***********************************!*\
  !*** ./src/game/core/renderer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderer": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _geometry_geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry/geometry */ "./src/game/core/geometry/geometry.ts");
/* harmony import */ var _physics_physics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physics/physics */ "./src/game/core/physics/physics.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Renderer {
  constructor(props) {
    _defineProperty(this, "canvas", void 0);

    _defineProperty(this, "context", void 0);

    if (!props.canvas) {
      throw new Error("Ошибка инициализации");
    }

    const context = props.canvas.getContext("2d");

    if (!context) {
      throw new Error("Ошибка получения контекста канвас");
    }

    this.canvas = props.canvas;
    this.context = context;
    this.init(props.width, props.height);
  }

  init(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  } // Нарисовать все объекты сцены на канвасе. Обрезать камерой лишнее


  render(scene, camera) {
    const c = this.context;
    const {
      canvas
    } = this;
    const {
      background
    } = scene; // TODO: Обрезать объекты в сцене камерой
    // Сначала очищаем канвас

    c.clearRect(0, 0, canvas.width, canvas.height); // Затем рисуем бэкграунд

    c.fillStyle = `rgba(${background.r}, ${background.g}, ${background.b}, ${background.a})`;
    c.fillRect(0, 0, canvas.width, canvas.height); // Отрисовка в цикле всех объектов в сцене

    for (const obj of scene.objects) {
      switch (obj.geometry.type) {
        case _geometry_geometry__WEBPACK_IMPORTED_MODULE_0__.GeometryTypes.Rectangle:
          this._drawRectangle(obj, camera);

          break;

        default:
          break;
      }
    }
  } // Запустить физику и пересчитать анимацию


  prerender(scene) {
    // Сначала пересчитываем анимацию
    for (const obj of scene.objectWithPhysics) {
      obj.updateState();
    } // TODO: Реализовать Quadtree collison detection

    /* eslint-disable */
    // https://gamedevelopment.tutsplus.com/tutorials/quick-tip-use-quadtrees-to-detect-likely-collisions-in-2d-space--gamedev-374
    // https://stackoverflow.com/questions/4981866/quadtree-for-2d-collision-detection

    /* eslint-enable */
    // Затем проверяем столкновение объектов в сцене


    for (let i = 0; i < scene.objectWithPhysics.length; i += 1) {
      for (let j = i + 1; j < scene.objectWithPhysics.length; j += 1) {
        const obj1 = scene.objectWithPhysics[i];
        const obj2 = scene.objectWithPhysics[j];

        if ((0,_physics_physics__WEBPACK_IMPORTED_MODULE_1__.isImplementingCollision)(obj1) && (0,_physics_physics__WEBPACK_IMPORTED_MODULE_1__.isImplementingCollision)(obj2)) {
          const collided = _physics_physics__WEBPACK_IMPORTED_MODULE_1__["default"].hasBox2DCollided(obj1, obj2); // TODO: Определить очередность вызова callback
          // Например, если в движущегося игрока попадает пуля, то игрок не должен
          // от этого переместиться, а пуля должна уничтожиться

          if (collided) {
            obj1.onCollide(obj2);
            obj2.onCollide(obj1);
          }
        }
      }
    }
  } // Отрисовка rectangle на канвасе


  _drawRectangle(object, camera) {
    // Ренедерим только видимые объекты
    if (!object.visible) {
      return;
    }

    const c = this.context;
    const geom = object.geometry;
    const {
      color
    } = object; // Пересчитываем координаты мира в координаты на canvas
    // с учетом позиционирования камеры

    const K = this.canvas.width / camera.size;

    const {
      x,
      y,
      width,
      height
    } = this._recalculateWorldValuesToCanvasValues(camera, {
      x: object.position.x,
      y: object.position.y,
      width: geom.width,
      height: geom.height
    }); // Выполняем преобразования для корректного отображения
    // Translate to position


    c.translate(x, y); // Flip object

    if (object.spriteConfig?.shouldFlip) {
      c.translate(width, 0);
      c.scale(-1, 1);
    } // Rotate object


    if (object.rotation && object.rotationCenter) {
      // Поворачиваем относительно центра
      c.translate(object.rotationCenter.x * K, object.rotationCenter.y * K);
      c.rotate(object.rotation);
      c.translate(-object.rotationCenter.x * K, -object.rotationCenter.y * K);
    } // Draw Image (Sprite)


    if (object.spriteConfig?.image) {
      const sp = object.spriteConfig.sprite;
      const image = object.spriteConfig.image;
      c.drawImage(image, sp.sx, sp.sy, sp.sWidth, sp.sHeight, 0, 0, width, height);
    } else {
      // Or default Rectangle
      c.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
      c.fillRect(0, 0, width, height);
    } // Reset transformations to default


    c.setTransform(1, 0, 0, 1, 0, 0);
  }

  _recalculateWorldValuesToCanvasValues(camera, values) {
    // Смещаем координаты отностительно объекта привязки камеры
    if (camera.bindedObject) {
      values.x = camera.size / 2 + (values.x - camera.bindedObject.position.x);
      values.y = camera.size / 2 + (values.y - camera.bindedObject.position.y);
    } // Переводим world coordinates в координаты отрисовки
    // TODO: Проблема округления координат


    const K = this.canvas.width / camera.size;
    values.x *= K; // Рассчитываем с поправкой на позиционирование камеры

    if (camera.bindedObject) {
      values.y = K * values.y - (camera.size / 2 * K - this.canvas.height / 2);
    } else {
      values.y *= K;
    }

    values.width *= K;
    values.height *= K;
    return values;
  }

}

/***/ }),

/***/ "./src/game/core/scene.ts":
/*!********************************!*\
  !*** ./src/game/core/scene.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scene": () => (/* binding */ Scene)
/* harmony export */ });
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/color */ "./src/game/core/utils/color.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Scene {
  // TODO: Добавить поддержку Object в качесте бэкграунда (+ sprite)
  // Список объектов в сцене
  // Список объектов в сцене с физикой
  constructor(background) {
    _defineProperty(this, "background", void 0);

    _defineProperty(this, "objects", void 0);

    _defineProperty(this, "objectWithPhysics", void 0);

    this.objects = [];
    this.objectWithPhysics = [];
    this.background = background || new _utils_color__WEBPACK_IMPORTED_MODULE_0__.Color(255, 255, 255);
  }

  add(objects) {
    if (Array.isArray(objects)) {
      this.objects.push(...objects);
    } else {
      this.objects.push(objects);
    }
  }

  addObjectWithPhysics(objects) {
    if (Array.isArray(objects)) {
      this.objectWithPhysics.push(...objects);
    } else {
      this.objectWithPhysics.push(objects);
    }
  }

  remove(object) {
    this.objects = this.objects.filter(x => x !== object);
    this.objectWithPhysics = this.objectWithPhysics.filter(x => x !== object);
  }

}

/***/ }),

/***/ "./src/game/core/utils/box2.ts":
/*!*************************************!*\
  !*** ./src/game/core/utils/box2.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box2": () => (/* binding */ Box2)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Box2 {
  constructor(min, max) {
    _defineProperty(this, "min", void 0);

    _defineProperty(this, "max", void 0);

    this.min = min;
    this.max = max;
  }

}

/***/ }),

/***/ "./src/game/core/utils/color.ts":
/*!**************************************!*\
  !*** ./src/game/core/utils/color.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Color {
  constructor(r, g, b, a = 1) {
    _defineProperty(this, "r", void 0);

    _defineProperty(this, "g", void 0);

    _defineProperty(this, "b", void 0);

    _defineProperty(this, "a", void 0);

    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

}

/***/ }),

/***/ "./src/game/core/utils/vector.ts":
/*!***************************************!*\
  !*** ./src/game/core/utils/vector.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vector2D": () => (/* binding */ Vector2D)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Vector2D {
  constructor(x, y) {
    _defineProperty(this, "x", void 0);

    _defineProperty(this, "y", void 0);

    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }

  rotateAround(center, angle) {
    this.x = Math.cos(angle) * (this.x - center.x) - Math.sin(angle) * (this.y - center.y) + center.x;
    this.y = Math.sin(angle) * (this.x - center.x) + Math.cos(angle) * (this.y - center.y) + center.y;
    return this;
  }

  copy() {
    return new Vector2D(this.x, this.y);
  }

}

/***/ }),

/***/ "./src/game/world/objects/enemy.ts":
/*!*****************************************!*\
  !*** ./src/game/world/objects/enemy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Enemy": () => (/* binding */ Enemy)
/* harmony export */ });
/* harmony import */ var _core_animations_move_moveAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/animations/move/moveAnimation */ "./src/game/core/animations/move/moveAnimation.ts");
/* harmony import */ var _core_animations_sprite_spriteAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/animations/sprite/spriteAnimation */ "./src/game/core/animations/sprite/spriteAnimation.ts");
/* harmony import */ var _core_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/object */ "./src/game/core/object.ts");
/* harmony import */ var _core_physics_physics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/physics/physics */ "./src/game/core/physics/physics.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/game/world/objects/player.ts");
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weapon */ "./src/game/world/objects/weapon.ts");
/* harmony import */ var _world_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../world.helpers */ "./src/game/world/world.helpers.ts");
/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wall */ "./src/game/world/objects/wall.ts");
/* harmony import */ var _world_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../world.manager */ "./src/game/world/world.manager.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ENEMY_MOVE_DIRECTIONS = {
  left: {
    name: "left",
    chance: 0.25
  },
  right: {
    name: "right",
    chance: 0.25
  },
  down: {
    name: "down",
    chance: 0.25
  },
  top: {
    name: "top",
    chance: 0.25
  }
};
class Enemy extends _core_object__WEBPACK_IMPORTED_MODULE_2__.Object2D {
  //
  //
  //
  // Здоровье
  // Частота обновления позиции
  // TODO: Додумать реализацию
  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;

    if (this._health <= 0) {
      this.onDeath();
    }
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "scene", void 0);

    _defineProperty(this, "canCollide", true);

    _defineProperty(this, "speed", 50);

    _defineProperty(this, "moveAnimation", void 0);

    _defineProperty(this, "prevPosition", void 0);

    _defineProperty(this, "spriteAnimation", void 0);

    _defineProperty(this, "enemySprites", void 0);

    _defineProperty(this, "prevRecievedDamage", void 0);

    _defineProperty(this, "maxHealth", void 0);

    _defineProperty(this, "_health", void 0);

    _defineProperty(this, "currentMoveStateCounter", 0);

    _defineProperty(this, "maxMoveStateUpdate", 30);

    this.scene = props.scene;
    this.maxHealth = props.maxHealth;
    this._health = this.maxHealth;

    this._createEnemySprites(props.image);

    this.init();
  }

  init() {
    // Создаем логику анимации движения
    this.moveAnimation = new _core_animations_move_moveAnimation__WEBPACK_IMPORTED_MODULE_0__.MoveAnimation({
      speed: this.speed
    });
    this.moveStateUpdateCondition(); // Создаем логику анимации смены sprite

    this.spriteAnimation = new _core_animations_sprite_spriteAnimation__WEBPACK_IMPORTED_MODULE_1__.SpriteAnimation({
      sprites: this.enemySprites
    });
  }

  updateState() {
    // Обновляем sprite
    this.spriteConfig = this.spriteAnimation.update(this.spriteConfig, this.moveAnimation); // Обновляем position

    this.prevPosition = this.position.copy();
    this.moveStateUpdateCondition();
    this.position = this.moveAnimation.update(this.position);
  } //


  onCollide(obstacle) {
    if (obstacle instanceof _wall__WEBPACK_IMPORTED_MODULE_7__.Wall) {
      this.position = _core_physics_physics__WEBPACK_IMPORTED_MODULE_3__["default"].getNewPositionAfterWallCollision(this, obstacle, this.moveAnimation, this.prevPosition);
    }

    if (obstacle instanceof _player__WEBPACK_IMPORTED_MODULE_4__.Player) {
      obstacle.health -= 0.5;
    }

    if (obstacle instanceof _weapon__WEBPACK_IMPORTED_MODULE_5__.Weapon && obstacle.active) {
      if (this.prevRecievedDamage !== obstacle.attackCount) {
        this.health -= obstacle.damage;
        this.prevRecievedDamage = obstacle.attackCount;
      }
    }
  }

  onDeath() {
    this.scene.remove(this);
    const enemiesCount = this.scene.objects.filter(x => x instanceof Enemy).length;

    if (!enemiesCount) {
      _world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].gameWinCallback();
    }
  } // TODO: Вынести AI к анимациям


  moveStateUpdateCondition() {
    // Обновляем направление движение раз в 60 / maxMoveStateUpdate сек
    if (this.currentMoveStateCounter < this.maxMoveStateUpdate) {
      this.currentMoveStateCounter += 1;
      return;
    }

    this.currentMoveStateCounter = 0;
    const {
      moveState
    } = this.moveAnimation;
    moveState.isMovingDown = false;
    moveState.isMovingLeft = false;
    moveState.isMovingRight = false;
    moveState.isMovingTop = false; // Случайным образом выбираем направление и устанавливаем флаг

    const direction = (0,_world_helpers__WEBPACK_IMPORTED_MODULE_6__.getRandomDirection)(ENEMY_MOVE_DIRECTIONS);

    switch (direction) {
      case ENEMY_MOVE_DIRECTIONS.left:
        moveState.isMovingLeft = true;
        break;

      case ENEMY_MOVE_DIRECTIONS.right:
        moveState.isMovingRight = true;
        break;

      case ENEMY_MOVE_DIRECTIONS.down:
        moveState.isMovingDown = true;
        break;

      case ENEMY_MOVE_DIRECTIONS.top:
        moveState.isMovingTop = true;
        break;

      default:
        break;
    }
  }

  _createEnemySprites(image) {
    this.enemySprites = {
      idle_0: {
        sx: 368,
        sy: 80,
        sWidth: 16,
        sHeight: 16
      },
      idle_1: {
        sx: 368 + 16,
        sy: 80,
        sWidth: 16,
        sHeight: 16
      },
      idle_2: {
        sx: 368 + 16 * 2,
        sy: 80,
        sWidth: 16,
        sHeight: 16
      },
      idle_3: {
        sx: 368 + 16 * 3,
        sy: 80,
        sWidth: 16,
        sHeight: 16
      },
      run_0: {
        sx: 432,
        sy: 80,
        sWidth: 16,
        sHeight: 16
      },
      run_1: {
        sx: 432 + 16,
        sy: 80,
        sWidth: 16,
        sHeight: 16
      },
      run_2: {
        sx: 432 + 16 * 2,
        sy: 80,
        sWidth: 16,
        sHeight: 16
      },
      run_3: {
        sx: 432 + 16 * 3,
        sy: 80,
        sWidth: 16,
        sHeight: 16
      }
    }; // Устанавливаем дефолтный спрайт

    this.spriteConfig = {
      image,
      sprite: this.enemySprites.idle_0,
      shouldFlip: false
    };
  }

}

/***/ }),

/***/ "./src/game/world/objects/ground.ts":
/*!******************************************!*\
  !*** ./src/game/world/objects/ground.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ground": () => (/* binding */ Ground)
/* harmony export */ });
/* harmony import */ var _core_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/object */ "./src/game/core/object.ts");

class Ground extends _core_object__WEBPACK_IMPORTED_MODULE_0__.Object2D {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {}

}

/***/ }),

/***/ "./src/game/world/objects/player.ts":
/*!******************************************!*\
  !*** ./src/game/world/objects/player.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _core_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/object */ "./src/game/core/object.ts");
/* harmony import */ var _core_physics_physics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/physics/physics */ "./src/game/core/physics/physics.ts");
/* harmony import */ var _core_animations_move_moveAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/animations/move/moveAnimation */ "./src/game/core/animations/move/moveAnimation.ts");
/* harmony import */ var _core_animations_sprite_spriteAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/animations/sprite/spriteAnimation */ "./src/game/core/animations/sprite/spriteAnimation.ts");
/* harmony import */ var _core_animations_attack_attack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/animations/attack/attack */ "./src/game/core/animations/attack/attack.ts");
/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wall */ "./src/game/world/objects/wall.ts");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enemy */ "./src/game/world/objects/enemy.ts");
/* harmony import */ var _world_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../world.config */ "./src/game/world/world.config.ts");
/* harmony import */ var _world_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../world.manager */ "./src/game/world/world.manager.ts");
/* harmony import */ var _world_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../world.events */ "./src/game/world/world.events.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class Player extends _core_object__WEBPACK_IMPORTED_MODULE_0__.Object2D {
  //
  // Скорость передвижения пиксель/сек
  // Анимация передвижения
  //
  // Анимация изменения Sprite
  // Оружие и анимация аттаки
  // Здоровье
  // TODO: Додумать реализацию
  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;
    _world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].playerUI.updateHealth(this._health);

    if (this._health <= 0) {
      this.onDeath();
    }
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "geometry", void 0);

    _defineProperty(this, "speed", 150);

    _defineProperty(this, "moveAnimation", void 0);

    _defineProperty(this, "prevPosition", void 0);

    _defineProperty(this, "canCollide", true);

    _defineProperty(this, "spriteAnimation", void 0);

    _defineProperty(this, "playerSprites", void 0);

    _defineProperty(this, "weapon", void 0);

    _defineProperty(this, "attackAnimation", void 0);

    _defineProperty(this, "maxHealth", void 0);

    _defineProperty(this, "_health", void 0);

    this.maxHealth = props.maxHealth; // По дефолту полное здоровье

    this._health = this.maxHealth;

    this._createPlayerSprites(props.image);

    this._updateWeaponState();

    this.init();
  }

  init() {
    // Создаем логику анимации движения
    this.moveAnimation = new _core_animations_move_moveAnimation__WEBPACK_IMPORTED_MODULE_2__.MoveAnimation({
      speed: this.speed
    });
    this.moveStateUpdateCondition(); // Создаем логику анимации смены sprite

    this.spriteAnimation = new _core_animations_sprite_spriteAnimation__WEBPACK_IMPORTED_MODULE_3__.SpriteAnimation({
      sprites: this.playerSprites
    }); // Создаем логику анимации атаки

    this.attackAnimation = new _core_animations_attack_attack__WEBPACK_IMPORTED_MODULE_4__.AttackAnimation();
  }

  updateState() {
    // Обновляем sprite
    this.spriteConfig = this.spriteAnimation.update(this.spriteConfig, this.moveAnimation);

    if (this.weapon.spriteConfig) {
      this.weapon.spriteConfig.shouldFlip = this.spriteConfig?.shouldFlip;
    } // Обновляем position


    this.prevPosition = this.position.copy();
    this.position = this.moveAnimation.update(this.position); // Обновляем оружие

    this.weapon = this.attackAnimation.update(this.weapon, this);
  } // NOTE: Если скорость объекта значительно больше размера препятствия, то
  // может случиться "проскок" объекта


  onCollide(obstacle) {
    if (obstacle instanceof _wall__WEBPACK_IMPORTED_MODULE_5__.Wall || obstacle instanceof _enemy__WEBPACK_IMPORTED_MODULE_6__.Enemy) {
      this.position = _core_physics_physics__WEBPACK_IMPORTED_MODULE_1__["default"].getNewPositionAfterWallCollision(this, obstacle, this.moveAnimation, this.prevPosition);
    }
  }

  onDeath() {
    _world_manager__WEBPACK_IMPORTED_MODULE_8__["default"].gameOverCallback();
  }

  moveStateUpdateCondition() {
    const {
      moveState
    } = this.moveAnimation; //

    _world_events__WEBPACK_IMPORTED_MODULE_9__["default"].on(_world_config__WEBPACK_IMPORTED_MODULE_7__.EventTypes.ArrowLeftDown, () => moveState.isMovingLeft = true);
    _world_events__WEBPACK_IMPORTED_MODULE_9__["default"].on(_world_config__WEBPACK_IMPORTED_MODULE_7__.EventTypes.ArrowBottomDown, () => moveState.isMovingDown = true);
    _world_events__WEBPACK_IMPORTED_MODULE_9__["default"].on(_world_config__WEBPACK_IMPORTED_MODULE_7__.EventTypes.ArrowTopDown, () => moveState.isMovingTop = true);
    _world_events__WEBPACK_IMPORTED_MODULE_9__["default"].on(_world_config__WEBPACK_IMPORTED_MODULE_7__.EventTypes.ArrowRightDown, () => moveState.isMovingRight = true);
    _world_events__WEBPACK_IMPORTED_MODULE_9__["default"].on(_world_config__WEBPACK_IMPORTED_MODULE_7__.EventTypes.ArrowLeftUp, () => moveState.isMovingLeft = false);
    _world_events__WEBPACK_IMPORTED_MODULE_9__["default"].on(_world_config__WEBPACK_IMPORTED_MODULE_7__.EventTypes.ArrowTopUp, () => moveState.isMovingTop = false);
    _world_events__WEBPACK_IMPORTED_MODULE_9__["default"].on(_world_config__WEBPACK_IMPORTED_MODULE_7__.EventTypes.ArrowBottomUp, () => moveState.isMovingDown = false);
    _world_events__WEBPACK_IMPORTED_MODULE_9__["default"].on(_world_config__WEBPACK_IMPORTED_MODULE_7__.EventTypes.ArrowRightUp, () => moveState.isMovingRight = false);
  }

  _updateWeaponState() {
    _world_events__WEBPACK_IMPORTED_MODULE_9__["default"].on(_world_config__WEBPACK_IMPORTED_MODULE_7__.EventTypes.SpaceDown, () => {
      this.weapon.active = true;
      this.weapon.visible = true;
    });
  }

  _createPlayerSprites(image) {
    this.playerSprites = {
      idle_0: {
        sx: 128,
        sy: 107,
        sWidth: 16,
        sHeight: 21
      },
      idle_1: {
        sx: 128 + 16,
        sy: 107,
        sWidth: 16,
        sHeight: 21
      },
      idle_2: {
        sx: 128 + 16 * 2,
        sy: 107,
        sWidth: 16,
        sHeight: 21
      },
      idle_3: {
        sx: 128 + 16 * 3,
        sy: 107,
        sWidth: 16,
        sHeight: 21
      },
      run_0: {
        sx: 192,
        sy: 107,
        sWidth: 16,
        sHeight: 21
      },
      run_1: {
        sx: 192 + 16,
        sy: 107,
        sWidth: 16,
        sHeight: 21
      },
      run_2: {
        sx: 192 + 16 * 2,
        sy: 107,
        sWidth: 16,
        sHeight: 21
      },
      run_3: {
        sx: 192 + 16 * 3,
        sy: 107,
        sWidth: 16,
        sHeight: 21
      }
    }; // Устанавливаем дефолтный спрайт

    this.spriteConfig = {
      image,
      sprite: this.playerSprites.idle_0,
      shouldFlip: false
    };
  }

}

/***/ }),

/***/ "./src/game/world/objects/wall.ts":
/*!****************************************!*\
  !*** ./src/game/world/objects/wall.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wall": () => (/* binding */ Wall)
/* harmony export */ });
/* harmony import */ var _core_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/object */ "./src/game/core/object.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Wall extends _core_object__WEBPACK_IMPORTED_MODULE_0__.Object2D {
  constructor(props) {
    super(props);

    _defineProperty(this, "canCollide", true);

    this.init();
  }

  init() {}

  onCollide() {// console.log(`В стену ${this.id} кто-то врезался :(`);
  }

}

/***/ }),

/***/ "./src/game/world/objects/weapon.ts":
/*!******************************************!*\
  !*** ./src/game/world/objects/weapon.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weapon": () => (/* binding */ Weapon)
/* harmony export */ });
/* harmony import */ var _core_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/object */ "./src/game/core/object.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Weapon extends _core_object__WEBPACK_IMPORTED_MODULE_0__.Object2D {
  // Наносит ли урон в данный момент времени
  // Количество атак и номер текущей атаки
  constructor(props) {
    super(props);

    _defineProperty(this, "canCollide", true);

    _defineProperty(this, "active", void 0);

    _defineProperty(this, "damage", void 0);

    _defineProperty(this, "attackCount", void 0);

    this.damage = props.damage;
    this.active = false;
    this.attackCount = 0;
    this.init();
  }

  init() {}

  onCollide() {// console.log(`В стену ${this.id} кто-то врезался :(`);
  }

}

/***/ }),

/***/ "./src/game/world/ui/health.ts":
/*!*************************************!*\
  !*** ./src/game/world/ui/health.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Health": () => (/* binding */ Health)
/* harmony export */ });
/* harmony import */ var _core_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/object */ "./src/game/core/object.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const HEALTH_SPITE = {
  sx: 288,
  sy: 256,
  sWidth: 16,
  sHeight: 16
};
const HALF_HEALTH_SPITE = {
  sx: 304,
  sy: 256,
  sWidth: 16,
  sHeight: 16
};
const EMPTY_HEALTH_SPITE = {
  sx: 320,
  sy: 256,
  sWidth: 16,
  sHeight: 16
};
class Health extends _core_object__WEBPACK_IMPORTED_MODULE_0__.Object2D {
  constructor(props) {
    super(props);

    _defineProperty(this, "tileSetImage", void 0);

    _defineProperty(this, "isHalf", void 0);

    _defineProperty(this, "isEmpty", void 0);

    this.isHalf = Boolean(props.isHalf);
    this.isEmpty = Boolean(props.isEmpty);
    this.tileSetImage = props.tileSetImage;
    this.init();
  }

  init() {
    this.spriteConfig = {
      image: this.tileSetImage,
      sprite: HEALTH_SPITE
    };

    if (this.isHalf) {
      this.spriteConfig.sprite = HALF_HEALTH_SPITE;
    }

    if (this.isEmpty) {
      this.spriteConfig.sprite = EMPTY_HEALTH_SPITE;
    }
  }

}

/***/ }),

/***/ "./src/game/world/ui/player.ui.ts":
/*!****************************************!*\
  !*** ./src/game/world/ui/player.ui.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerUI": () => (/* binding */ PlayerUI)
/* harmony export */ });
/* harmony import */ var _core_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/camera */ "./src/game/core/camera.ts");
/* harmony import */ var _core_geometry_rectangle_rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/geometry/rectangle/rectangle */ "./src/game/core/geometry/rectangle/rectangle.ts");
/* harmony import */ var _core_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/renderer */ "./src/game/core/renderer.ts");
/* harmony import */ var _core_utils_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/color */ "./src/game/core/utils/color.ts");
/* harmony import */ var _core_scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/scene */ "./src/game/core/scene.ts");
/* harmony import */ var _world_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../world.config */ "./src/game/world/world.config.ts");
/* harmony import */ var _health__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health */ "./src/game/world/ui/health.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class PlayerUI {
  constructor(props) {
    _defineProperty(this, "canvas", void 0);

    _defineProperty(this, "renderer", void 0);

    _defineProperty(this, "camera", void 0);

    _defineProperty(this, "scene", void 0);

    _defineProperty(this, "health", void 0);

    _defineProperty(this, "maxHealth", void 0);

    _defineProperty(this, "score", void 0);

    _defineProperty(this, "tileSetImage", void 0);

    this.canvas = props.canvas;
    this.canvas.style.position = "absolute";
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.maxHealth = props.maxHealth;
    this.tileSetImage = props.tileSetImage;
    this.init();
  }

  init() {
    // Создаем Renderer
    this.renderer = new _core_renderer__WEBPACK_IMPORTED_MODULE_2__.Renderer({
      canvas: this.canvas,
      width: window.innerWidth,
      height: window.innerHeight
    }); // Camera

    this.camera = new _core_camera__WEBPACK_IMPORTED_MODULE_0__.Camera(_world_config__WEBPACK_IMPORTED_MODULE_5__.LEVEL_SIZE * 1); // Задаем бэкграунд и создаем сцену
    // Прозрачный

    const background = new _core_utils_color__WEBPACK_IMPORTED_MODULE_3__.Color(0, 0, 0, 0);
    this.scene = new _core_scene__WEBPACK_IMPORTED_MODULE_4__.Scene(background); //

    this.updateHealth(this.maxHealth);
  }

  updateHealth(health) {
    this.health = health;
    const healthObjects = [];

    for (let i = 1; i <= this.maxHealth; i += 1) {
      let isEmpty = false;
      let isHalf = false;

      if (i > this.health) {
        if (i - this.health === 0.5) {
          isHalf = true;
        } else {
          isEmpty = true;
        }
      }

      const healthGeom = new _core_geometry_rectangle_rectangle__WEBPACK_IMPORTED_MODULE_1__.RectangleGeometry(16, 16);
      const healthObject = new _health__WEBPACK_IMPORTED_MODULE_6__.Health({
        geometry: healthGeom,
        tileSetImage: this.tileSetImage,
        isEmpty,
        isHalf
      });
      healthObject.position.x = (i - 1) * 16 + 5;
      healthObject.position.y = 5;
      healthObjects.push(healthObject);
    }

    this.scene.objects = this.scene.objects.filter(x => x instanceof _health__WEBPACK_IMPORTED_MODULE_6__.Health);
    this.scene.add(healthObjects);
  }

  updateScore() {}

}

/***/ }),

/***/ "./src/game/world/world.config.ts":
/*!****************************************!*\
  !*** ./src/game/world/world.config.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTypes": () => (/* binding */ EventTypes),
/* harmony export */   "KeyboardEvents": () => (/* binding */ KeyboardEvents),
/* harmony export */   "LEVEL_SIZE": () => (/* binding */ LEVEL_SIZE),
/* harmony export */   "STEP": () => (/* binding */ STEP),
/* harmony export */   "TILE_SIZE": () => (/* binding */ TILE_SIZE),
/* harmony export */   "TOGGLE_FULLSCREEN_BUTTON": () => (/* binding */ TOGGLE_FULLSCREEN_BUTTON),
/* harmony export */   "TOGGLE_MENU_BUTTON": () => (/* binding */ TOGGLE_MENU_BUTTON)
/* harmony export */ });
const LEVEL_SIZE = 640; // in px

const TILE_SIZE = 16; // in px

const STEP = 1 / 60; // in sec
// Список всех событий в игре

let EventTypes;

(function (EventTypes) {
  EventTypes["ArrowLeftDown"] = "ArrowLeftDown";
  EventTypes["ArrowTopDown"] = "ArrowTopDown";
  EventTypes["ArrowBottomDown"] = "ArrowBottomDown";
  EventTypes["ArrowRightDown"] = "ArrowRightDown";
  EventTypes["ArrowLeftUp"] = "ArrowLeftUp";
  EventTypes["ArrowTopUp"] = "ArrowTopUp";
  EventTypes["ArrowBottomUp"] = "ArrowBottomUp";
  EventTypes["ArrowRightUp"] = "ArrowRightUp";
  EventTypes["SpaceDown"] = "SpaceDown";
  EventTypes["SpaceUp"] = "SpaceUp";
  EventTypes["Resize"] = "Resize";
})(EventTypes || (EventTypes = {}));

let KeyboardEvents;

(function (KeyboardEvents) {
  KeyboardEvents["ArrowLeft"] = "ArrowLeft";
  KeyboardEvents["ArrowUp"] = "ArrowUp";
  KeyboardEvents["ArrowDown"] = "ArrowDown";
  KeyboardEvents["ArrowRight"] = "ArrowRight";
  KeyboardEvents["Space"] = " ";
})(KeyboardEvents || (KeyboardEvents = {}));

const TOGGLE_MENU_BUTTON = "q";
const TOGGLE_FULLSCREEN_BUTTON = "f";

/***/ }),

/***/ "./src/game/world/world.events.ts":
/*!****************************************!*\
  !*** ./src/game/world/world.events.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_eventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/eventBus */ "./src/game/core/eventBus.ts");
/* harmony import */ var _world_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world.config */ "./src/game/world/world.config.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class WorldEvents extends _core_eventBus__WEBPACK_IMPORTED_MODULE_0__.EventBus {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_keyDownListener", void 0);

    _defineProperty(this, "_keyUpListener", void 0);

    _defineProperty(this, "_resizeListener", void 0);
  }

  init() {
    const eventBus = this;

    this._keyDownListener = e => {
      switch (e.key) {
        case _world_config__WEBPACK_IMPORTED_MODULE_1__.KeyboardEvents.ArrowDown:
          eventBus.emit(_world_config__WEBPACK_IMPORTED_MODULE_1__.EventTypes.ArrowBottomDown);
          break;

        case _world_config__WEBPACK_IMPORTED_MODULE_1__.KeyboardEvents.ArrowLeft:
          eventBus.emit(_world_config__WEBPACK_IMPORTED_MODULE_1__.EventTypes.ArrowLeftDown);
          break;

        case _world_config__WEBPACK_IMPORTED_MODULE_1__.KeyboardEvents.ArrowRight:
          eventBus.emit(_world_config__WEBPACK_IMPORTED_MODULE_1__.EventTypes.ArrowRightDown);
          break;

        case _world_config__WEBPACK_IMPORTED_MODULE_1__.KeyboardEvents.ArrowUp:
          eventBus.emit(_world_config__WEBPACK_IMPORTED_MODULE_1__.EventTypes.ArrowTopDown);
          break;

        case _world_config__WEBPACK_IMPORTED_MODULE_1__.KeyboardEvents.Space:
          eventBus.emit(_world_config__WEBPACK_IMPORTED_MODULE_1__.EventTypes.SpaceDown);
          break;

        default:
          break;
      }
    };

    this._keyUpListener = e => {
      switch (e.key) {
        case _world_config__WEBPACK_IMPORTED_MODULE_1__.KeyboardEvents.ArrowDown:
          eventBus.emit(_world_config__WEBPACK_IMPORTED_MODULE_1__.EventTypes.ArrowBottomUp);
          break;

        case _world_config__WEBPACK_IMPORTED_MODULE_1__.KeyboardEvents.ArrowLeft:
          eventBus.emit(_world_config__WEBPACK_IMPORTED_MODULE_1__.EventTypes.ArrowLeftUp);
          break;

        case _world_config__WEBPACK_IMPORTED_MODULE_1__.KeyboardEvents.ArrowRight:
          eventBus.emit(_world_config__WEBPACK_IMPORTED_MODULE_1__.EventTypes.ArrowRightUp);
          break;

        case _world_config__WEBPACK_IMPORTED_MODULE_1__.KeyboardEvents.ArrowUp:
          eventBus.emit(_world_config__WEBPACK_IMPORTED_MODULE_1__.EventTypes.ArrowTopUp);
          break;

        case _world_config__WEBPACK_IMPORTED_MODULE_1__.KeyboardEvents.Space:
          eventBus.emit(_world_config__WEBPACK_IMPORTED_MODULE_1__.EventTypes.SpaceUp);
          break;

        default:
          break;
      }
    };

    this._resizeListener = e => {
      eventBus.emit(_world_config__WEBPACK_IMPORTED_MODULE_1__.EventTypes.Resize);
    };

    window.addEventListener("keydown", this._keyDownListener);
    window.addEventListener("keyup", this._keyUpListener);
    window.addEventListener("resize", this._resizeListener);
  }

  unsubscribe() {
    window.removeEventListener("keydown", this._keyDownListener);
    window.removeEventListener("keyup", this._keyUpListener);
    window.removeEventListener("resize", this._resizeListener);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new WorldEvents());

/***/ }),

/***/ "./src/game/world/world.helpers.ts":
/*!*****************************************!*\
  !*** ./src/game/world/world.helpers.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TILE_TYPES": () => (/* binding */ TILE_TYPES),
/* harmony export */   "TileTypes": () => (/* binding */ TileTypes),
/* harmony export */   "generateRandomLevel": () => (/* binding */ generateRandomLevel),
/* harmony export */   "getFirstGroundTileOnLevel": () => (/* binding */ getFirstGroundTileOnLevel),
/* harmony export */   "getLastGroundTileOnLevel": () => (/* binding */ getLastGroundTileOnLevel),
/* harmony export */   "getRandomDirection": () => (/* binding */ getRandomDirection)
/* harmony export */ });
/* harmony import */ var _core_utils_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils/vector */ "./src/game/core/utils/vector.ts");
/* harmony import */ var _world_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world.config */ "./src/game/world/world.config.ts");

 // Матрица уровня 40х40

// Виды значений в матрице уровня
let TileTypes;

(function (TileTypes) {
  TileTypes["Ground"] = "Ground";
  TileTypes["Wall"] = "Wall";
  TileTypes["UI"] = "UI";
})(TileTypes || (TileTypes = {}));

const TILE_TYPES = {
  1: TileTypes.Ground,
  2: TileTypes.Wall,
  3: TileTypes.UI
};
const getRandomDirection = directions => {
  let min = 0;
  const random = Math.random();

  if (random < directions.left.chance) {
    return directions.left;
  }

  min += directions.left.chance;

  if (random < min + directions.right.chance) {
    return directions.right;
  }

  min += directions.right.chance;

  if (random < min + directions.down.chance) {
    return directions.down;
  }

  min += directions.down.chance;

  if (random < min + directions.top.chance) {
    return directions.top;
  }

  return {
    name: "",
    chance: -1
  };
};

const fillMatrix = (level, i, j, window) => {
  const matrix = level;

  for (let k = i; k < i + window; k += 1) {
    for (let f = j; f < j + window; f += 1) {
      matrix[k][f] = 1;
    }
  }

  return matrix;
}; // TODO: Фикс багов генерации уровня

/**
    Генерирует рандомную матрицу уровня 40х40
*/


const generateRandomLevel = () => {
  // Размер доступной части level
  const minRight = 1;
  const maxRight = 38;
  const minDown = 1;
  const maxDown = 38; // Level по дефолту ui background

  let level = new Array(maxRight + 2).fill(0).map(x => new Array(maxDown + 2).fill(3)); // Шанс перейти на след tile

  const directions = {
    left: {
      name: "left",
      chance: 0
    },
    right: {
      name: "right",
      chance: 0.8
    },
    down: {
      name: "down",
      chance: 0.2
    },
    top: {
      name: "top",
      chance: 0
    }
  }; // Считаем сколько раз шагнули вниз, чтобы разрешить шагать вверх
  // let downCount = 0;
  // Окно генерации уровня

  const pathWindow = 6; // Указатели tile уровня

  let tileHorizontal = Math.round(Math.random() * (maxRight - minRight) + minRight);
  let tileVertical = minDown; // Случайно генерируем путь уровня, выставляя 1 где можно ходить

  while (tileVertical + pathWindow < maxDown) {
    // Выбираем направление
    let directon = getRandomDirection(directions); // Шагаем в зависимости от направления

    if (directon === directions.right) {
      // Если справа есть куда шагать
      if (tileHorizontal + 2 * pathWindow < maxRight) {
        // Делаем шаг вправо
        tileHorizontal += pathWindow; // Обновляем уровень

        level = fillMatrix(level, tileVertical, tileHorizontal, pathWindow); // Следующий шаг со след рандомными значениями

        directions.left.chance = 0.45;
        directions.right.chance = 0.45;
        directions.down.chance = 0.1;
        directions.top.chance = 0;
      } else {
        // Иначе шагаем вниз
        directon = directions.down; // След шаг только влево или вниз, тк вправо больше некуда шагать

        directions.left.chance = 0.9;
        directions.right.chance = 0;
        directions.down.chance = 0.1;
        directions.top.chance = 0;
      }
    }

    if (directon === directions.down) {
      if (tileVertical + 2 * pathWindow < maxDown) {
        // Делаем шаг вниз
        tileVertical += pathWindow; // Шагаем вниз и даем возможность шагать влево

        level = fillMatrix(level, tileVertical, tileHorizontal, pathWindow); // Влево или вправо рандомно

        directions.left.chance = 0.45;
        directions.right.chance = 0.45; //
        // downCount++
        // if(downCount === 3) {
        //     directions.top.chance = 0.05
        //     directions.down.chance = 0.05
        //     downCount = 0
        // }
        // else {
        //     directions.top.chance = 0
        //     directions.down.chance = 0.1
        // }
      } else {
        // Заканчиваем генерацию
        tileVertical += pathWindow;
      }
    }

    if (directon === directions.left) {
      if (tileHorizontal - pathWindow > minRight) {
        // Шаг влево
        tileHorizontal -= pathWindow;
        level = fillMatrix(level, tileVertical, tileHorizontal, pathWindow); // Для след шага

        directions.left.chance = 0.45;
        directions.right.chance = 0.45;
        directions.down.chance = 0.1;
        directions.top.chance = 0;
      } else {
        // Иначе шагаем вниз
        directon = directions.down; // Влево больше некуда шагать

        directions.right.chance = 0.9;
        directions.left.chance = 0;
        directions.down.chance = 0.1;
        directions.top.chance = 0;
      }
    } // if(directon === directions.top) {
    // }

  } // Проставляем стены


  for (let i = 0; i < level.length; i += 1) {
    for (let j = 0; j < level.length; j += 1) {
      // Ставим стены рядом с землей
      if (level[i][j] === 1) {
        if (level[i + 1][j] === 3) {
          level[i + 1][j] = 2;
        }

        if (level[i - 1][j] === 3) {
          level[i - 1][j] = 2;
        }

        if (level[i + 1][j - 1] === 3) {
          level[i + 1][j - 1] = 2;
        }

        if (level[i + 1][j + 1] === 3) {
          level[i + 1][j + 1] = 2;
        }

        if (level[i][j - 1] === 3) {
          level[i][j - 1] = 2;
          level[i - 1][j - 1] = 2;
        }

        if (level[i][j + 1] === 3) {
          level[i][j + 1] = 2;
          level[i - 1][j + 1] = 2;
        }
      }
    }
  }

  return level;
};
/**
    Найти первый доступный для размещения кусок земли с начала
*/

const getFirstGroundTileOnLevel = level => {
  for (let i = 0; i < level.length; i += 1) {
    for (let j = 0; j < level.length; j += 1) {
      const number = level[i][j];

      if (TILE_TYPES[number] === TileTypes.Ground) {
        return new _core_utils_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2D(j * _world_config__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE, i * _world_config__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE);
      }
    }
  }

  return undefined;
};
/**
    Найти первый доступный для размещения кусок земли с конца
*/

const getLastGroundTileOnLevel = level => {
  for (let i = level.length - 1; i >= 0; i -= 1) {
    for (let j = level.length - 1; j >= 0; j -= 1) {
      const number = level[i][j];

      if (TILE_TYPES[number] === TileTypes.Ground) {
        return new _core_utils_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2D(j * _world_config__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE, i * _world_config__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE);
      }
    }
  }

  return undefined;
};

/***/ }),

/***/ "./src/game/world/world.manager.ts":
/*!*****************************************!*\
  !*** ./src/game/world/world.manager.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/environment */ "./src/helpers/environment.ts");
/* harmony import */ var _core_utils_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils/color */ "./src/game/core/utils/color.ts");
/* harmony import */ var _core_geometry_rectangle_rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/geometry/rectangle/rectangle */ "./src/game/core/geometry/rectangle/rectangle.ts");
/* harmony import */ var _core_scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/scene */ "./src/game/core/scene.ts");
/* harmony import */ var _objects_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objects/player */ "./src/game/world/objects/player.ts");
/* harmony import */ var _objects_enemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/enemy */ "./src/game/world/objects/enemy.ts");
/* harmony import */ var _world_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./world.helpers */ "./src/game/world/world.helpers.ts");
/* harmony import */ var _core_utils_vector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/utils/vector */ "./src/game/core/utils/vector.ts");
/* harmony import */ var _world_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./world.config */ "./src/game/world/world.config.ts");
/* harmony import */ var _objects_ground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./objects/ground */ "./src/game/world/objects/ground.ts");
/* harmony import */ var _objects_wall__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./objects/wall */ "./src/game/world/objects/wall.ts");
/* harmony import */ var _core_camera__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/camera */ "./src/game/core/camera.ts");
/* harmony import */ var _assets_tileset_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/tileset.png */ "./assets/tileset.png");
/* harmony import */ var _assets_tileset_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_tileset_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _objects_weapon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./objects/weapon */ "./src/game/world/objects/weapon.ts");
/* harmony import */ var _ui_player_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/player.ui */ "./src/game/world/ui/player.ui.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class WorldManager {
  // Scene
  // Camera
  // Игрок
  // Картинка Sprites
  // Уровень
  // UI canvas и управление
  // Callbacks
  constructor() {
    _defineProperty(this, "scene", void 0);

    _defineProperty(this, "camera", void 0);

    _defineProperty(this, "player", void 0);

    _defineProperty(this, "tileSetImage", void 0);

    _defineProperty(this, "level", void 0);

    _defineProperty(this, "playerUI", void 0);

    _defineProperty(this, "gameOverCallback", void 0);

    _defineProperty(this, "gameWinCallback", void 0);

    // TODO: костыль тк в ноде нельзя new Image
    const tileSetImage = !_helpers_environment__WEBPACK_IMPORTED_MODULE_0__.isServer ? new Image(512, 512) : null;
    if (!tileSetImage) return;
    tileSetImage.src = (_assets_tileset_png__WEBPACK_IMPORTED_MODULE_12___default());
    this.tileSetImage = tileSetImage;
  }

  composeLevel(gameOverCallback, gameWinCallback) {
    this.gameOverCallback = gameOverCallback;
    this.gameWinCallback = gameWinCallback; // Camera

    this.camera = new _core_camera__WEBPACK_IMPORTED_MODULE_11__.Camera(_world_config__WEBPACK_IMPORTED_MODULE_8__.LEVEL_SIZE); // Задаем бэкграунд и создаем сцену

    const background = new _core_utils_color__WEBPACK_IMPORTED_MODULE_1__.Color(0, 0, 0);
    this.scene = new _core_scene__WEBPACK_IMPORTED_MODULE_3__.Scene(background); // Генерируем рандомный уровень

    this.level = (0,_world_helpers__WEBPACK_IMPORTED_MODULE_6__.generateRandomLevel)(); // Создаем стены и землю из матрицы уровня

    const objects = this._createWallsAndGroundFromLevel(this.level); // И добавляем в сцену первыми


    this.scene.add(objects); // В отдельный список добавляем объекты, которые имеют физику

    this.scene.addObjectWithPhysics(objects.filter(x => x instanceof _objects_wall__WEBPACK_IMPORTED_MODULE_10__.Wall)); // Создаем Игрока

    const [player, sword] = this._createPlayer(this.level);

    this.player = player; // Добавляем в сцену

    this.scene.add([sword, player]);
    this.scene.addObjectWithPhysics([sword, player]); // Устанавливаем объект привязки камеры

    this.camera.bindObject(player); // Создаем противников

    this._createEnemies();

    return [this.scene, this.camera];
  }

  composeUIScene(canvas) {
    // Создаем playerUI
    this.playerUI = new _ui_player_ui__WEBPACK_IMPORTED_MODULE_14__.PlayerUI({
      canvas,
      tileSetImage: this.tileSetImage,
      maxHealth: this.player.maxHealth
    });
  }

  getTilePositionFromCoordinates(coordinates) {
    const x = Math.floor(coordinates.x / _world_config__WEBPACK_IMPORTED_MODULE_8__.TILE_SIZE) * _world_config__WEBPACK_IMPORTED_MODULE_8__.TILE_SIZE;
    const y = Math.floor(coordinates.y / _world_config__WEBPACK_IMPORTED_MODULE_8__.TILE_SIZE) * _world_config__WEBPACK_IMPORTED_MODULE_8__.TILE_SIZE;
    return new _core_utils_vector__WEBPACK_IMPORTED_MODULE_7__.Vector2D(x, y);
  }

  _createWallsAndGroundFromLevel(level) {
    const objects = [];

    for (let i = 0; i < level.length; i += 1) {
      for (let j = 0; j < level.length; j += 1) {
        const number = level[i][j];
        const position = new _core_utils_vector__WEBPACK_IMPORTED_MODULE_7__.Vector2D(j * _world_config__WEBPACK_IMPORTED_MODULE_8__.TILE_SIZE, i * _world_config__WEBPACK_IMPORTED_MODULE_8__.TILE_SIZE);

        if (_world_helpers__WEBPACK_IMPORTED_MODULE_6__.TILE_TYPES[number] === _world_helpers__WEBPACK_IMPORTED_MODULE_6__.TileTypes.Ground) {
          const groundGeom = new _core_geometry_rectangle_rectangle__WEBPACK_IMPORTED_MODULE_2__.RectangleGeometry(_world_config__WEBPACK_IMPORTED_MODULE_8__.TILE_SIZE, _world_config__WEBPACK_IMPORTED_MODULE_8__.TILE_SIZE);
          const color = new _core_utils_color__WEBPACK_IMPORTED_MODULE_1__.Color(225, 0, 0);
          const ground = new _objects_ground__WEBPACK_IMPORTED_MODULE_9__.Ground({
            geometry: groundGeom,
            color
          });
          ground.position = position; // TODO: Перенести в класс

          const sprite = {
            sx: 16,
            sy: 64,
            sWidth: 16,
            sHeight: 16
          };
          ground.spriteConfig = {
            image: this.tileSetImage,
            sprite
          };
          objects.push(ground);
        }

        if (_world_helpers__WEBPACK_IMPORTED_MODULE_6__.TILE_TYPES[number] === _world_helpers__WEBPACK_IMPORTED_MODULE_6__.TileTypes.Wall) {
          const wallGeom = new _core_geometry_rectangle_rectangle__WEBPACK_IMPORTED_MODULE_2__.RectangleGeometry(_world_config__WEBPACK_IMPORTED_MODULE_8__.TILE_SIZE, _world_config__WEBPACK_IMPORTED_MODULE_8__.TILE_SIZE);
          const color = new _core_utils_color__WEBPACK_IMPORTED_MODULE_1__.Color(0, 225, 0);
          const wall = new _objects_wall__WEBPACK_IMPORTED_MODULE_10__.Wall({
            geometry: wallGeom,
            color
          });
          wall.position = position; // TODO: Перенести в класс

          const sprite = {
            sx: 16,
            sy: 16,
            sWidth: 16,
            sHeight: 16
          };
          wall.spriteConfig = {
            image: this.tileSetImage,
            sprite
          };
          objects.push(wall);
        }
      }
    }

    return objects;
  }

  _createPlayer(level) {
    const playerGeom = new _core_geometry_rectangle_rectangle__WEBPACK_IMPORTED_MODULE_2__.RectangleGeometry(16, 21);
    const player = new _objects_player__WEBPACK_IMPORTED_MODULE_4__.Player({
      geometry: playerGeom,
      image: this.tileSetImage,
      maxHealth: 6
    }); // Зададим дефолтное положение

    const playerPosition = (0,_world_helpers__WEBPACK_IMPORTED_MODULE_6__.getFirstGroundTileOnLevel)(level);

    if (!playerPosition) {
      throw new Error("Уровень сгенерирован с ошибкой");
    }

    player.position = playerPosition; // Создадим оружие

    const swordGeometry = new _core_geometry_rectangle_rectangle__WEBPACK_IMPORTED_MODULE_2__.RectangleGeometry(10, 21);
    const sword = new _objects_weapon__WEBPACK_IMPORTED_MODULE_13__.Weapon({
      geometry: swordGeometry,
      damage: 1
    });
    sword.spriteConfig = {
      image: this.tileSetImage,
      sprite: {
        sx: 323,
        sy: 26,
        sWidth: 10,
        sHeight: 21
      }
    };
    sword.visible = false;
    player.weapon = sword;
    return [player, sword];
  }

  _createEnemies() {
    // Создаем противника 1
    const enemy = this._createEnemy(this.scene, this.level); // Добавляем в сцену


    this.scene.add(enemy);
    this.scene.addObjectWithPhysics(enemy); // Создаем противника 2

    const enemy2 = this._createEnemy(this.scene, this.level); // Добавляем в сцену


    this.scene.add(enemy2);
    this.scene.addObjectWithPhysics(enemy2); // Создаем противника 3

    const enemy3 = this._createEnemy(this.scene, this.level); // Добавляем в сцену


    this.scene.add(enemy3);
    this.scene.addObjectWithPhysics(enemy3);
  }

  _createEnemy(scene, level) {
    const enemyGeom = new _core_geometry_rectangle_rectangle__WEBPACK_IMPORTED_MODULE_2__.RectangleGeometry(_world_config__WEBPACK_IMPORTED_MODULE_8__.TILE_SIZE, _world_config__WEBPACK_IMPORTED_MODULE_8__.TILE_SIZE);
    const enemy = new _objects_enemy__WEBPACK_IMPORTED_MODULE_5__.Enemy({
      scene,
      geometry: enemyGeom,
      color: new _core_utils_color__WEBPACK_IMPORTED_MODULE_1__.Color(0, 0, 255),
      image: this.tileSetImage,
      maxHealth: 1
    }); // Зададим дефолтное положение

    const enemyPosition = (0,_world_helpers__WEBPACK_IMPORTED_MODULE_6__.getLastGroundTileOnLevel)(level);

    if (!enemyPosition) {
      throw new Error("Уровень сгенерирован с ошибкой");
    }

    enemy.position = enemyPosition;
    return enemy;
  }

} // Синглтон


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new WorldManager());

/***/ }),

/***/ "./src/game/world/world.ts":
/*!*********************************!*\
  !*** ./src/game/world/world.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "World": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var _core_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/renderer */ "./src/game/core/renderer.ts");
/* harmony import */ var _world_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world.manager */ "./src/game/world/world.manager.ts");
/* harmony import */ var _world_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world.events */ "./src/game/world/world.events.ts");
/* harmony import */ var _world_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./world.config */ "./src/game/world/world.config.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





// Игровой мир
class World {
  constructor() {
    _defineProperty(this, "canvas", void 0);

    _defineProperty(this, "uiCanvas", void 0);

    _defineProperty(this, "renderer", void 0);

    _defineProperty(this, "animationNumber", void 0);

    _defineProperty(this, "scene", void 0);

    _defineProperty(this, "camera", void 0);

    _defineProperty(this, "gameOverCallback", void 0);

    _defineProperty(this, "gameWinCallback", void 0);
  }

  /**
     Инициализирует world и начинает анимацию
  */
  init(props) {
    this.canvas = props.canvas;
    this.uiCanvas = props.uiCanvas;
    this.gameOverCallback = props.gameOverCallback;
    this.gameWinCallback = props.gameWinCallback; // Создаем Renderer

    this.renderer = new _core_renderer__WEBPACK_IMPORTED_MODULE_0__.Renderer({
      canvas: this.canvas,
      width: window.innerWidth,
      height: window.innerHeight
    }); // World Manager

    [this.scene, this.camera] = _world_manager__WEBPACK_IMPORTED_MODULE_1__["default"].composeLevel(this.gameOverCallback, this.gameWinCallback); // Создаем playerUI

    if (this.uiCanvas) {
      _world_manager__WEBPACK_IMPORTED_MODULE_1__["default"].composeUIScene(this.uiCanvas);
    } // Инициализируем события


    _world_events__WEBPACK_IMPORTED_MODULE_2__["default"].init(); // Подписываемся на событие ресайз

    _world_events__WEBPACK_IMPORTED_MODULE_2__["default"].on(_world_config__WEBPACK_IMPORTED_MODULE_3__.EventTypes.Resize, this._onResize.bind(this)); // Начинаем анимацию

    this.startAnimataion();
  }

  startAnimataion() {
    let dt = 0; // определяем текущее время

    let last = performance.now(); // в этой переменной сохраняем время вызова предыдущего кадра

    const render = () => {
      this.animationNumber = requestAnimationFrame(() => render()); // определяем текущее время

      const now = performance.now(); // добавляем прошедшую разницу во времени

      dt += Math.min(1, (now - last) / 1000); // исправление проблемы неактивных вкладок

      while (dt > _world_config__WEBPACK_IMPORTED_MODULE_3__.STEP) {
        // вложенный цикл может вызывать обновление состояния несколько раз подряд
        // если прошло больше времени, чем выделено на один кадр
        dt -= _world_config__WEBPACK_IMPORTED_MODULE_3__.STEP; // Обновляем состояние каждый STEP

        this.renderer.prerender(this.scene); // TODO: Реализовать логику camera без привязки к объекту
        // this.camera.update()
      } // сохраняем время отрисовки последнего кадра


      last = now; // Рендерим основной мир

      this.renderer.render(this.scene, this.camera); // Рендерим UI поверх

      _world_manager__WEBPACK_IMPORTED_MODULE_1__["default"].playerUI.renderer.render(_world_manager__WEBPACK_IMPORTED_MODULE_1__["default"].playerUI.scene, _world_manager__WEBPACK_IMPORTED_MODULE_1__["default"].playerUI.camera);
    };

    render();
  }

  stopAnimation() {
    if (this.animationNumber) {
      cancelAnimationFrame(this.animationNumber);
      this.animationNumber = undefined;
    }
  }

  _onResize() {
    if (this.canvas && this.animationNumber) {
      this.canvas.height = window.innerHeight;
      this.canvas.width = window.innerWidth;

      if (this.uiCanvas) {
        this.uiCanvas.height = window.innerHeight;
        this.uiCanvas.width = window.innerWidth;
      }
    }
  }

  destroy() {
    this.stopAnimation();
    _world_events__WEBPACK_IMPORTED_MODULE_2__["default"].unsubscribe();
  }

}

/***/ }),

/***/ "./src/helpers/acess.ts":
/*!******************************!*\
  !*** ./src/helpers/acess.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAccess": () => (/* binding */ checkAccess),
/* harmony export */   "checkOAuthSigned": () => (/* binding */ checkOAuthSigned),
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "getUserIdCookie": () => (/* binding */ getUserIdCookie),
/* harmony export */   "setSigned": () => (/* binding */ setSigned),
/* harmony export */   "setSignedOAuth": () => (/* binding */ setSignedOAuth),
/* harmony export */   "setUserIdCookie": () => (/* binding */ setUserIdCookie)
/* harmony export */ });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./src/helpers/environment.ts");

/* eslint-disable */

const getCookie = name => {
  if (!_environment__WEBPACK_IMPORTED_MODULE_0__.isServer) {
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1")}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  return false;
};
/* eslint-enable */

const checkAccess = () => getCookie("isSignedIn") === "true" || false;
const checkOAuthSigned = () => getCookie("setSignedInOAuth") === "true" || false;
const setSigned = value => {
  document.cookie = `isSignedIn=${value.toString()}`;
};
const setSignedOAuth = value => {
  document.cookie = `setSignedInOAuth=${value.toString()}`;
};
const getUserIdCookie = () => getCookie("userId") || "";
const setUserIdCookie = id => document.cookie = `userId=${id.toString()}`;

/***/ }),

/***/ "./src/helpers/environment.ts":
/*!************************************!*\
  !*** ./src/helpers/environment.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isServer": () => (/* binding */ isServer)
/* harmony export */ });
const isServer = !(typeof window !== "undefined" && window.document && window.document.createElement);

/***/ }),

/***/ "./src/hooks/useMountEffect.ts":
/*!*************************************!*\
  !*** ./src/hooks/useMountEffect.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMountEffect": () => (/* binding */ useMountEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Вызывает effectCallback при маунте компонента
 */

const useMountEffect = effectCallback => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effectCallback, []);
};

/***/ }),

/***/ "./src/hooks/useSelector.ts":
/*!**********************************!*\
  !*** ./src/hooks/useSelector.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSelector": () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ }),

/***/ "./src/hooks/useUnmountEffect.ts":
/*!***************************************!*\
  !*** ./src/hooks/useUnmountEffect.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUnmountEffect": () => (/* binding */ useUnmountEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Вызывает effectCallback при unmount компонента
 */

const useUnmountEffect = effectCallback => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
    effectCallback();
  }, []);
};

/***/ }),

/***/ "./src/pages/About/About.view.tsx":
/*!****************************************!*\
  !*** ./src/pages/About/About.view.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _components_PageMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PageMeta */ "./src/components/PageMeta/index.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header/index.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");






const About = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageMeta__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "About",
  description: "About game"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  currentPath: _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes.about.path
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/pages/About/index.ts":
/*!**********************************!*\
  !*** ./src/pages/About/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _About_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _About_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.view */ "./src/pages/About/About.view.tsx");


/***/ }),

/***/ "./src/pages/Error/Error.helpers.ts":
/*!******************************************!*\
  !*** ./src/pages/Error/Error.helpers.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInfo": () => (/* binding */ ErrorInfo)
/* harmony export */ });
const ErrorInfo = {
  404: "Страница не существует",
  403: "Доступ закрыт",
  500: "Неизвестная ошибка"
};

/***/ }),

/***/ "./src/pages/Error/Error.view.tsx":
/*!****************************************!*\
  !*** ./src/pages/Error/Error.view.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _Error_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Error.module.scss */ "./src/pages/Error/Error.module.scss");
/* harmony import */ var _Error_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Error.helpers */ "./src/pages/Error/Error.helpers.ts");








const Error = ({
  status = "404"
}) => {
  const {
    container,
    errorContainer,
    title,
    info,
    back,
    notFound
  } = _Error_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: errorContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, {
    className: title
  }, status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, {
    className: info
  }, _Error_helpers__WEBPACK_IMPORTED_MODULE_6__.ErrorInfo[status]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: status === "403" ? _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes.signIn.path : _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes.main.path,
    className: back
  }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: notFound
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

/***/ }),

/***/ "./src/pages/Error/index.ts":
/*!**********************************!*\
  !*** ./src/pages/Error/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Error_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Error_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.view */ "./src/pages/Error/Error.view.tsx");


/***/ }),

/***/ "./src/pages/Forum/Forum.helpers.ts":
/*!******************************************!*\
  !*** ./src/pages/Forum/Forum.helpers.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useForum": () => (/* binding */ useForum)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");
/* harmony import */ var _hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useMountEffect */ "./src/hooks/useMountEffect.ts");
/* harmony import */ var _actions_forum_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/actions/forum.actions */ "./src/actions/forum.actions.ts");






const useForum = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
  const table = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    data,
    isLoading
  } = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.forum, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
  (0,_hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_4__.useMountEffect)(() => {
    dispatch((0,_actions_forum_actions__WEBPACK_IMPORTED_MODULE_5__.loadForumTopics)());
  });
  return {
    data,
    isLoading,
    table,
    history
  };
};

/***/ }),

/***/ "./src/pages/Forum/Forum.view.tsx":
/*!****************************************!*\
  !*** ./src/pages/Forum/Forum.view.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _components_PageMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PageMeta */ "./src/components/PageMeta/index.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header/index.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Button */ "./src/components/Button/index.ts");
/* harmony import */ var _Forum_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Forum.module.scss */ "./src/pages/Forum/Forum.module.scss");
/* harmony import */ var _Forum_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Forum.helpers */ "./src/pages/Forum/Forum.helpers.ts");










const Forum = () => {
  const {
    data,
    isLoading,
    table,
    history
  } = (0,_Forum_helpers__WEBPACK_IMPORTED_MODULE_8__.useForum)();
  const columns = [{
    title: "Заголовок",
    dataIndex: ["data", "title"],
    render: (value, item) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _Forum_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].title
    }, item?.title)
  }, {
    title: "Кол-во сообщений",
    dataIndex: ["data", "messagesCount"],
    render: (value, item) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _Forum_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].counter
    }, item?.comments_count ?? 0)
  }, {
    title: "Действия" // todo кнопки

  }];
  const handleRowClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(record => ({
    onClick: () => history.push(_config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.topic.path.replace(":id", record?.id.toString()))
  }), []);
  const getRowKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(record => record?.id, []);
  const onCreate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => history.push(_config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.topicEdit.path), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageMeta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Forum",
    description: "Game forum"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentPath: _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.forum.path
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Forum_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].tableContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Table, {
    ref: table,
    className: _Forum_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].leaderBoardTable,
    columns: columns,
    dataSource: data,
    rowKey: getRowKey,
    onRow: handleRowClick,
    loading: {
      size: "large",
      spinning: isLoading
    },
    scroll: {
      y: 400
    },
    pagination: false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Forum_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].buttonContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "primary",
    onClick: onCreate
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forum);

/***/ }),

/***/ "./src/pages/Forum/index.ts":
/*!**********************************!*\
  !*** ./src/pages/Forum/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Forum_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Forum_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forum.view */ "./src/pages/Forum/Forum.view.tsx");


/***/ }),

/***/ "./src/pages/Game/Game.helpers.ts":
/*!****************************************!*\
  !*** ./src/pages/Game/Game.helpers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGame": () => (/* binding */ useGame)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _game_world_world__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/game/world/world */ "./src/game/world/world.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _game_world_world_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/game/world/world.config */ "./src/game/world/world.config.ts");
/* harmony import */ var _config_leaderboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/config/leaderboard */ "./src/config/leaderboard.ts");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");
/* harmony import */ var _api_Leaderboard_Leaderboard_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/Leaderboard/Leaderboard.api */ "./src/api/Leaderboard/Leaderboard.api.ts");










const togglePointerLock = () => {
  document.documentElement.requestPointerLock();
};

const togglePointerUnlock = () => {
  document.exitPointerLock();
};

const exitFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
};

const openFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
};

const toggleFullScreen = () => {
  if (document.fullscreenElement) {
    exitFullScreen();
  } else {
    openFullScreen();
  }
};

const useGame = () => {
  const [isActive, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isGameOver, setGameOver] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isGameWin, setGameWin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isPaused, setPause] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [world] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new _game_world_world__WEBPACK_IMPORTED_MODULE_3__.World());
  const canvasRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const uiCanvasRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
  const user = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.profile.data, react_redux__WEBPACK_IMPORTED_MODULE_2__.shallowEqual);
  const createRecord = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const data = {
      login: user.login,
      [_config_leaderboard__WEBPACK_IMPORTED_MODULE_6__.TEAM_SCORE]: Math.round(Math.random() * 200)
    };
    _api_Leaderboard_Leaderboard_api__WEBPACK_IMPORTED_MODULE_8__["default"].createLeaderBoardRecord(data);
  }, []);
  const callMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (e.key === _game_world_world_config__WEBPACK_IMPORTED_MODULE_5__.TOGGLE_MENU_BUTTON) {
      setActive(true);
      setPause(true);
      world.stopAnimation();
      togglePointerUnlock();
    }

    if (e.key === _game_world_world_config__WEBPACK_IMPORTED_MODULE_5__.TOGGLE_FULLSCREEN_BUTTON) {
      toggleFullScreen();
    }
  }, []);
  const callGameOver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setActive(true);
    setGameOver(true);
    world.destroy();
    togglePointerUnlock();
    createRecord();
  }, []);
  const callGameWin = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setActive(true);
    setGameWin(true);
    world.destroy();
    togglePointerUnlock();
    createRecord();
  }, []);
  const setUpPauseButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    document.addEventListener("keydown", callMenu);
  }, []);
  const onClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setActive(false);
    exitFullScreen();
    history.push(_config_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes.main.path);
  }, []);
  const onStart = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    world.init({
      canvas: canvasRef.current,
      uiCanvas: uiCanvasRef.current,
      gameOverCallback: callGameOver,
      gameWinCallback: callGameWin
    });
    setGameOver(false);
    setGameWin(false);
    setPause(false);
    setActive(false);
    togglePointerLock();
    openFullScreen();
  }, []);
  const onResume = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    world.startAnimataion();
    setPause(false);
    setActive(false);
    togglePointerLock();
  }, []);
  const onUnmount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    world.destroy();
    document.removeEventListener("keydown", callMenu);
  }, []);
  return {
    isActive,
    isPaused,
    canvasRef,
    uiCanvasRef,
    onStart,
    onResume,
    onClose,
    onUnmount,
    setUpPauseButton,
    isGameOver,
    isGameWin
  };
};

/***/ }),

/***/ "./src/pages/Game/Game.view.tsx":
/*!**************************************!*\
  !*** ./src/pages/Game/Game.view.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Game_Game_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/Game/Game.helpers */ "./src/pages/Game/Game.helpers.ts");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/pages/Game/Menu/index.ts");
/* harmony import */ var _components_PageMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PageMeta */ "./src/components/PageMeta/index.ts");
/* harmony import */ var _Game_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Game.module.scss */ "./src/pages/Game/Game.module.scss");
/* harmony import */ var _hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useMountEffect */ "./src/hooks/useMountEffect.ts");
/* harmony import */ var _hooks_useUnmountEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useUnmountEffect */ "./src/hooks/useUnmountEffect.ts");








const Game = () => {
  const {
    isActive,
    isPaused,
    canvasRef,
    uiCanvasRef,
    onStart,
    onResume,
    onClose,
    onUnmount,
    setUpPauseButton,
    isGameOver,
    isGameWin
  } = (0,_pages_Game_Game_helpers__WEBPACK_IMPORTED_MODULE_1__.useGame)();
  (0,_hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_5__.useMountEffect)(() => {
    setUpPauseButton();
  });
  (0,_hooks_useUnmountEffect__WEBPACK_IMPORTED_MODULE_6__.useUnmountEffect)(() => {
    onUnmount();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageMeta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Game",
    description: "Game page"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Game_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].game
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", {
    ref: canvasRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", {
    ref: uiCanvasRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isActive: isActive,
    onClose: onClose,
    onStart: onStart,
    isPaused: isPaused,
    isGameOver: isGameOver,
    isGameWin: isGameWin,
    onResume: onResume
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/pages/Game/Menu/Menu.view.tsx":
/*!*******************************************!*\
  !*** ./src/pages/Game/Menu/Menu.view.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.module.scss */ "./src/pages/Game/Menu/Main.module.scss");



const {
  Title
} = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;

const Menu = ({
  isActive,
  isPaused,
  isGameOver,
  isGameWin,
  onClose,
  onStart,
  onResume
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Modal, {
  title: "\u041C\u0435\u043D\u044E",
  visible: isActive,
  footer: null,
  closable: false
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].buttonContainer
}, isGameOver && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
  className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title,
  level: 3
}, "\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E!"), isGameWin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
  className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title,
  level: 3
}, "\u041F\u043E\u0431\u0435\u0434\u0430!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
  type: "primary",
  onClick: isPaused ? onResume : onStart
}, isPaused ? "Продолжить" : `Начать ${isGameOver || isGameWin ? "заново" : "игру"}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
  type: "primary",
  onClick: onClose
}, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/pages/Game/Menu/index.ts":
/*!**************************************!*\
  !*** ./src/pages/Game/Menu/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Menu_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Menu_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.view */ "./src/pages/Game/Menu/Menu.view.tsx");


/***/ }),

/***/ "./src/pages/Game/index.ts":
/*!*********************************!*\
  !*** ./src/pages/Game/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Game_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.view */ "./src/pages/Game/Game.view.tsx");


/***/ }),

/***/ "./src/pages/Leaderboard/LeaderBoard.helpers.ts":
/*!******************************************************!*\
  !*** ./src/pages/Leaderboard/LeaderBoard.helpers.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLeaderBoard": () => (/* binding */ useLeaderBoard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_leaderboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/actions/leaderboard.actions */ "./src/actions/leaderboard.actions.ts");
/* harmony import */ var _hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useMountEffect */ "./src/hooks/useMountEffect.ts");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");
/* harmony import */ var _config_leaderboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/leaderboard */ "./src/config/leaderboard.ts");
/* harmony import */ var _helpers_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/environment */ "./src/helpers/environment.ts");







const useLeaderBoard = () => {
  const [canMoveLeft, setCanMoveLeft] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [canMoveRight, setCanMoveRight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [cursor, setCursor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const table = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [tableScroll, setTableScroll] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!_helpers_environment__WEBPACK_IMPORTED_MODULE_6__.isServer ? window?.innerHeight : 0);
  const {
    data,
    isLoading
  } = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.leaderBoard, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
  (0,_hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_3__.useMountEffect)(() => {
    dispatch((0,_actions_leaderboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadLeaderBoard)(cursor));

    if (table.current) {
      const tableHeight = table.current.clientHeight;
      const header = table.current.getElementsByClassName("ant-table-header");
      const headerHeight = header.length ? header[0].clientHeight : 0;
      setTableScroll(tableHeight - headerHeight);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canMoveRight = data.length >= _config_leaderboard__WEBPACK_IMPORTED_MODULE_5__.RECORDS_PER_PAGE;
    setCanMoveRight(canMoveRight);
    const canMoveLeft = cursor !== 0;
    setCanMoveLeft(canMoveLeft);
  }, [data]);
  const onMoveRight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const newCursor = cursor + _config_leaderboard__WEBPACK_IMPORTED_MODULE_5__.RECORDS_PER_PAGE;
    setCursor(newCursor);
    dispatch((0,_actions_leaderboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadLeaderBoard)(newCursor));
  }, [data]);
  const onMoveLeft = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const newCursor = cursor - _config_leaderboard__WEBPACK_IMPORTED_MODULE_5__.RECORDS_PER_PAGE;
    setCursor(newCursor);
    dispatch((0,_actions_leaderboard_actions__WEBPACK_IMPORTED_MODULE_2__.loadLeaderBoard)(newCursor));
  }, [data]);
  return {
    data,
    isLoading,
    canMoveLeft,
    onMoveLeft,
    canMoveRight,
    onMoveRight,
    table,
    tableScroll
  };
};

/***/ }),

/***/ "./src/pages/Leaderboard/LeaderBoard.view.tsx":
/*!****************************************************!*\
  !*** ./src/pages/Leaderboard/LeaderBoard.view.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header/index.ts");
/* harmony import */ var _components_PageMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PageMeta */ "./src/components/PageMeta/index.ts");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _LeaderBoard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LeaderBoard.module.scss */ "./src/pages/Leaderboard/LeaderBoard.module.scss");
/* harmony import */ var _LeaderBoard_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LeaderBoard.helpers */ "./src/pages/Leaderboard/LeaderBoard.helpers.ts");
/* harmony import */ var _config_leaderboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/config/leaderboard */ "./src/config/leaderboard.ts");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Pagination */ "./src/pages/Leaderboard/components/Pagination/index.ts");









 // Колонки таблицы

const columns = [{
  title: "Логин",
  dataIndex: ["data", "login"],
  render: (value, item) => {
    const score = item.data[_config_leaderboard__WEBPACK_IMPORTED_MODULE_8__.TEAM_SCORE];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: `${_LeaderBoard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].nameContainer} ${score > 100 ? _LeaderBoard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].nameActive : _LeaderBoard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].nameBanned}`
    }, value);
  }
}, {
  title: "Очки",
  dataIndex: ["data", _config_leaderboard__WEBPACK_IMPORTED_MODULE_8__.TEAM_SCORE]
}]; // Дефолтный колбэк при сортировке/пагинации/фильтрации

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const LeaderBoard = () => {
  const {
    data,
    isLoading,
    canMoveLeft,
    onMoveLeft,
    canMoveRight,
    onMoveRight,
    table,
    tableScroll
  } = (0,_LeaderBoard_helpers__WEBPACK_IMPORTED_MODULE_7__.useLeaderBoard)();
  const getRowKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(record => record.data.login, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageMeta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Leaderboard",
    description: "Leaderboard page"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentPath: _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.leaderboard.path
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _LeaderBoard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].leaderBoardContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Table, {
    ref: table,
    className: _LeaderBoard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].leaderBoardTable,
    columns: columns,
    dataSource: data,
    onChange: onChange,
    rowKey: getRowKey,
    loading: {
      size: "large",
      spinning: isLoading
    },
    scroll: {
      y: tableScroll
    },
    pagination: false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onMoveLeft: onMoveLeft,
    canMoveLeft: canMoveLeft,
    onMoveRight: onMoveRight,
    canMoveRight: canMoveRight,
    isLoading: isLoading
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeaderBoard);

/***/ }),

/***/ "./src/pages/Leaderboard/components/Pagination/Pagination.view.tsx":
/*!*************************************************************************!*\
  !*** ./src/pages/Leaderboard/components/Pagination/Pagination.view.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination.module.scss */ "./src/pages/Leaderboard/components/Pagination/Pagination.module.scss");





const Pagination = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
  className: _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
  type: "default",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.LeftOutlined, null),
  onClick: props.onMoveLeft,
  disabled: !props.canMoveLeft
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(antd__WEBPACK_IMPORTED_MODULE_0__.Button, {
  className: _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].buttonRight,
  type: "default",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.RightOutlined, null),
  onClick: props.onMoveRight,
  disabled: !props.canMoveRight
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./src/pages/Leaderboard/components/Pagination/index.ts":
/*!**************************************************************!*\
  !*** ./src/pages/Leaderboard/components/Pagination/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Pagination_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Pagination_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.view */ "./src/pages/Leaderboard/components/Pagination/Pagination.view.tsx");


/***/ }),

/***/ "./src/pages/Leaderboard/index.ts":
/*!****************************************!*\
  !*** ./src/pages/Leaderboard/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _LeaderBoard_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _LeaderBoard_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaderBoard.view */ "./src/pages/Leaderboard/LeaderBoard.view.tsx");


/***/ }),

/***/ "./src/pages/Main/Main.view.tsx":
/*!**************************************!*\
  !*** ./src/pages/Main/Main.view.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _components_PageMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/PageMeta */ "./src/components/PageMeta/index.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header/index.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Main.module.scss */ "./src/pages/Main/Main.module.scss");
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/actions/profile.actions */ "./src/actions/profile.actions.ts");
/* harmony import */ var _hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/hooks/useMountEffect */ "./src/hooks/useMountEffect.ts");











const {
  Text
} = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;

const Main = () => {
  const {
    title,
    info,
    infoContainer,
    container
  } = _Main_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"];
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,_hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_10__.useMountEffect)(() => {
    dispatch((0,_actions_profile_actions__WEBPACK_IMPORTED_MODULE_9__.getProfile)());
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageMeta__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Main",
    description: "Main page"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: infoContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, {
    className: title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _Main_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].titleMain
  }, "Ultimate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, {
    type: "secondary"
  }, " Dungeon Crawler")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, {
    className: info
  }, "\u041E\u0447\u0438\u0441\u0442\u0438 \u043D\u0435\u043A\u043E\u0433\u0434\u0430 \u0432\u0435\u043B\u0438\u043A\u0443\u044E \u043E\u0431\u0438\u0442\u0435\u043B\u044C \u043E\u0442 \u043D\u0430\u0441\u0438\u043B\u0438\u044F \u043C\u043E\u043D\u0441\u0442\u0440\u043E\u0432 \u0438 \u0437\u0430\u0431\u043B\u0443\u0434\u0448\u0438\u0445 \u0434\u0443\u0448"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: _config_routes_routes__WEBPACK_IMPORTED_MODULE_7__.routes.game.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "primary"
  }, "\u0418\u0433\u0440\u0430\u0442\u044C")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./src/pages/Main/index.ts":
/*!*********************************!*\
  !*** ./src/pages/Main/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Main_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Main_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.view */ "./src/pages/Main/Main.view.tsx");


/***/ }),

/***/ "./src/pages/Offline/Offline.view.tsx":
/*!********************************************!*\
  !*** ./src/pages/Offline/Offline.view.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _Offline_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Offline.module.scss */ "./src/pages/Offline/Offline.module.scss");






const Error = () => {
  const {
    container,
    errorContainer,
    title,
    info,
    back,
    notFound
  } = _Offline_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: errorContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, {
    className: title
  }, "\u0412\u044B \u0441\u0435\u0439\u0447\u0430\u0441 \u043E\u0444\u0444\u043B\u0430\u0439\u043D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, {
    className: info
  }, "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0439\u0442\u0438 \u043F\u043E\u0437\u0436\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/",
    className: back
  }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: notFound
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

/***/ }),

/***/ "./src/pages/Offline/index.ts":
/*!************************************!*\
  !*** ./src/pages/Offline/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Offline_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Offline_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Offline.view */ "./src/pages/Offline/Offline.view.tsx");


/***/ }),

/***/ "./src/pages/Profile/Profile.helpers.ts":
/*!**********************************************!*\
  !*** ./src/pages/Profile/Profile.helpers.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProfileForm": () => (/* binding */ useProfileForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/Form */ "antd/lib/form/Form");
/* harmony import */ var antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _components_Password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Password */ "./src/components/Password/index.ts");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/actions/profile.actions */ "./src/actions/profile.actions.ts");
/* harmony import */ var _hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/hooks/useMountEffect */ "./src/hooks/useMountEffect.ts");
/* harmony import */ var _helpers_acess__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/acess */ "./src/helpers/acess.ts");










const initialFields = [{
  name: "first_name",
  disabled: true,
  required: false,
  placeholder: "Имя",
  component: antd__WEBPACK_IMPORTED_MODULE_1__.Input
}, {
  name: "second_name",
  disabled: true,
  required: false,
  placeholder: "Фамилия",
  component: antd__WEBPACK_IMPORTED_MODULE_1__.Input
}, {
  name: "email",
  disabled: true,
  required: true,
  message: "Введите эл. почту",
  placeholder: "Эл. почта",
  component: antd__WEBPACK_IMPORTED_MODULE_1__.Input
}, {
  name: "phone",
  disabled: true,
  required: false,
  placeholder: "Телефон",
  component: antd__WEBPACK_IMPORTED_MODULE_1__.Input
}, {
  name: "login",
  disabled: true,
  required: true,
  message: "Введите логин",
  placeholder: "Логин",
  component: antd__WEBPACK_IMPORTED_MODULE_1__.Input
}];
const passwordFields = [{
  name: "oldPassword",
  disabled: true,
  required: false,
  message: "Введите старый пароль",
  placeholder: "Старый пароль",
  component: _components_Password__WEBPACK_IMPORTED_MODULE_5__["default"]
}, // todo добавить validationRules фнукцию, триггерит обязательность, если заполнен oldPassword
{
  name: "newPassword",
  disabled: true,
  required: false,
  message: "Введите новый пароль",
  placeholder: "Новый пароль",
  component: _components_Password__WEBPACK_IMPORTED_MODULE_5__["default"]
}];
const useProfileForm = () => {
  const [isEdit, setIsEdit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isOAuthSigned, setIsOAuthSigned] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [form] = (0,antd_lib_form_Form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    data,
    isLoading
  } = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.profile, react_redux__WEBPACK_IMPORTED_MODULE_3__.shallowEqual);
  (0,_hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_8__.useMountEffect)(() => {
    dispatch((0,_actions_profile_actions__WEBPACK_IMPORTED_MODULE_7__.getProfile)());
    setIsOAuthSigned((0,_helpers_acess__WEBPACK_IMPORTED_MODULE_9__.checkOAuthSigned)());
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    form.setFieldsValue(data);
  }, [form, data]);
  const onFinish = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(values => {
    const {
      oldPassword,
      newPassword,
      ...rest
    } = values;
    dispatch((0,_actions_profile_actions__WEBPACK_IMPORTED_MODULE_7__.setProfile)(rest));

    if (oldPassword && newPassword) {
      dispatch((0,_actions_profile_actions__WEBPACK_IMPORTED_MODULE_7__.setPassword)({
        oldPassword,
        newPassword
      }));
    }
  }, []);
  const onFinishFailed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(errorInfo => console.log("Failed:", errorInfo), []);
  return {
    currentPath: _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes.profile.path,
    onFinish,
    onFinishFailed,
    isEdit,
    setIsEdit,
    isOAuthSigned,
    profile: data,
    form,
    fields: initialFields,
    passwordFields,
    isLoading
  };
};

/***/ }),

/***/ "./src/pages/Profile/Profile.view.tsx":
/*!********************************************!*\
  !*** ./src/pages/Profile/Profile.view.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header/index.ts");
/* harmony import */ var _components_PageMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PageMeta */ "./src/components/PageMeta/index.ts");
/* harmony import */ var _components_PageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/PageLoader */ "./src/components/PageLoader/index.ts");
/* harmony import */ var _components_FormFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FormFields */ "./src/pages/Profile/components/FormFields/index.ts");
/* harmony import */ var _components_FormControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/FormControls */ "./src/pages/Profile/components/FormControls/index.ts");
/* harmony import */ var _Profile_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Profile.module.scss */ "./src/pages/Profile/Profile.module.scss");
/* harmony import */ var _assets_images_default_profile_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/images/default_profile.png */ "./assets/images/default_profile.png");
/* harmony import */ var _assets_images_default_profile_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_default_profile_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Profile_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Profile.helpers */ "./src/pages/Profile/Profile.helpers.ts");












const Profile = () => {
  const {
    currentPath,
    onFinish,
    isEdit,
    setIsEdit,
    isOAuthSigned,
    profile,
    form,
    isLoading
  } = (0,_Profile_helpers__WEBPACK_IMPORTED_MODULE_10__.useProfileForm)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageLoader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isSpinning: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageMeta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Profile",
    description: "Profile page"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentPath: currentPath
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Profile_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].formContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Space, {
    className: _Profile_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].formInnerContainer,
    direction: "vertical",
    size: "middle"
  }, profile.avatar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Image, {
    width: 200,
    height: 200,
    src: `api/v2/resources${profile.avatar}`,
    crossOrigin: "use-credentials",
    fallback: (_assets_images_default_profile_png__WEBPACK_IMPORTED_MODULE_9___default())
  }), !profile.avatar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Profile_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].imageEmpty
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
    name: "profile",
    form: form,
    initialValues: profile,
    layout: "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isEdit: isEdit
  }), !isOAuthSigned && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormControls__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isEdit: isEdit,
    setIsEdit: setIsEdit,
    form: form,
    onFinish: onFinish
  }))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./src/pages/Profile/components/FormControls/FormControls.view.tsx":
/*!*************************************************************************!*\
  !*** ./src/pages/Profile/components/FormControls/FormControls.view.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormControls_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormControls.module.scss */ "./src/pages/Profile/components/FormControls/FormControls.module.scss");





const FormControls = ({
  isEdit,
  setIsEdit,
  onFinish,
  form
}) => {
  const handleCancel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsEdit(!isEdit);
    form.resetFields();
  }, [form, isEdit]);
  const handleEdit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);

  if (isEdit) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
      block: true,
      type: "primary",
      onClick: () => {
        antd__WEBPACK_IMPORTED_MODULE_1__.Modal.confirm({
          title: "Сохранить?",
          content: "Будут изменены данные профиля",
          cancelText: "Нет",
          okText: "Да",

          onOk() {
            setIsEdit(false);
            onFinish(form.getFieldsValue(true));
          },

          onCancel() {
            setIsEdit(false);
            form.resetFields();
          }

        });
      }
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.EditOutlined, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
      block: true,
      className: _FormControls_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].cancelButton,
      type: "default",
      onClick: handleCancel
    }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
    block: true,
    type: "primary",
    onClick: handleEdit
  }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.EditOutlined, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormControls);

/***/ }),

/***/ "./src/pages/Profile/components/FormControls/index.ts":
/*!************************************************************!*\
  !*** ./src/pages/Profile/components/FormControls/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _FormControls_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _FormControls_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormControls.view */ "./src/pages/Profile/components/FormControls/FormControls.view.tsx");


/***/ }),

/***/ "./src/pages/Profile/components/FormFields/FormFields.helpers.tsx":
/*!************************************************************************!*\
  !*** ./src/pages/Profile/components/FormFields/FormFields.helpers.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFieldSet": () => (/* binding */ renderFieldSet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


// TODO: либо отключить правило в eslint либо затянуть конфиг для Prettier
// eslint-disable-next-line max-len
const renderFieldSet = (fields, isEdit) => fields.map((item, index) => {
  const {
    component: Item,
    name,
    message,
    required,
    disabled,
    placeholder
  } = item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
    key: `item-${index}`,
    name: name,
    rules: [{
      required,
      message
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, {
    disabled: disabled && !isEdit,
    placeholder: placeholder
  }));
});

/***/ }),

/***/ "./src/pages/Profile/components/FormFields/FormFields.view.tsx":
/*!*********************************************************************!*\
  !*** ./src/pages/Profile/components/FormFields/FormFields.view.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Profile_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Profile.helpers */ "./src/pages/Profile/Profile.helpers.ts");
/* harmony import */ var _components_FormFields_FormFields_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FormFields/FormFields.helpers */ "./src/pages/Profile/components/FormFields/FormFields.helpers.tsx");




const FormFields = ({
  isEdit
}) => {
  const {
    fields,
    passwordFields
  } = (0,_Profile_helpers__WEBPACK_IMPORTED_MODULE_1__.useProfileForm)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (0,_components_FormFields_FormFields_helpers__WEBPACK_IMPORTED_MODULE_2__.renderFieldSet)(fields, isEdit), isEdit && (0,_components_FormFields_FormFields_helpers__WEBPACK_IMPORTED_MODULE_2__.renderFieldSet)(passwordFields, isEdit));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormFields);

/***/ }),

/***/ "./src/pages/Profile/components/FormFields/index.ts":
/*!**********************************************************!*\
  !*** ./src/pages/Profile/components/FormFields/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _FormFields_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _FormFields_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormFields.view */ "./src/pages/Profile/components/FormFields/FormFields.view.tsx");


/***/ }),

/***/ "./src/pages/Profile/index.ts":
/*!************************************!*\
  !*** ./src/pages/Profile/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Profile_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Profile_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.view */ "./src/pages/Profile/Profile.view.tsx");


/***/ }),

/***/ "./src/pages/SignIn/SignIn.helpers.ts":
/*!********************************************!*\
  !*** ./src/pages/SignIn/SignIn.helpers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInFieldNames": () => (/* binding */ SignInFieldNames),
/* harmony export */   "useSignInForm": () => (/* binding */ useSignInForm)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/actions/auth.actions */ "./src/actions/auth.actions.ts");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");






let SignInFieldNames;

(function (SignInFieldNames) {
  SignInFieldNames["Login"] = "login";
  SignInFieldNames["Password"] = "password";
})(SignInFieldNames || (SignInFieldNames = {}));

const useSignInForm = () => {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useHistory)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const isLoading = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.auth.isLoading);
  const onFinish = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async values => {
    dispatch((0,_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__.signIn)(values, history));
  }, []);

  const onFinishFailed = errorInfo => console.log("Failed:", errorInfo);

  return {
    currentPath: _config_routes_routes__WEBPACK_IMPORTED_MODULE_3__.routes.signIn.path,
    onFinish,
    onFinishFailed,
    isLoading
  };
};

/***/ }),

/***/ "./src/pages/SignIn/SignIn.view.tsx":
/*!******************************************!*\
  !*** ./src/pages/SignIn/SignIn.view.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _components_PageMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PageMeta */ "./src/components/PageMeta/index.ts");
/* harmony import */ var _components_Password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Password */ "./src/components/Password/index.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header/index.ts");
/* harmony import */ var _components_PageLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/PageLoader */ "./src/components/PageLoader/index.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _SignIn_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SignIn.module.scss */ "./src/pages/SignIn/SignIn.module.scss");
/* harmony import */ var _SignIn_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SignIn.helpers */ "./src/pages/SignIn/SignIn.helpers.ts");
/* harmony import */ var _YandexSignIn_YandexSignIn_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./YandexSignIn/YandexSignIn.view */ "./src/pages/SignIn/YandexSignIn/YandexSignIn.view.tsx");













const SignIn = () => {
  const {
    onFinish,
    onFinishFailed,
    isLoading
  } = (0,_SignIn_helpers__WEBPACK_IMPORTED_MODULE_10__.useSignInForm)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isSpinning: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageMeta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "SignIn",
    description: "SignIn page"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentPath: _config_routes_routes__WEBPACK_IMPORTED_MODULE_8__.routes.signIn.path
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignIn_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].formContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
    name: "signIn",
    onFinish: onFinish,
    onFinishFailed: () => onFinishFailed,
    layout: "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
    name: _SignIn_helpers__WEBPACK_IMPORTED_MODULE_10__.SignInFieldNames.Login,
    rules: [{
      required: true,
      message: "Введите логин"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
    placeholder: "\u043B\u043E\u0433\u0438\u043D",
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.UserOutlined, null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
    name: _SignIn_helpers__WEBPACK_IMPORTED_MODULE_10__.SignInFieldNames.Password,
    rules: [{
      required: true,
      message: "Введите пароль"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Password__WEBPACK_IMPORTED_MODULE_5__["default"], {
    placeholder: "\u043F\u0430\u0440\u043E\u043B\u044C"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
    block: true,
    type: "primary",
    htmlType: "submit"
  }, "\u0412\u043E\u0439\u0442\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_YandexSignIn_YandexSignIn_view__WEBPACK_IMPORTED_MODULE_11__["default"], null))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);

/***/ }),

/***/ "./src/pages/SignIn/YandexSignIn/YandexSignIn.view.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/SignIn/YandexSignIn/YandexSignIn.view.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ "./src/components/Button/index.ts");
/* harmony import */ var _api_OAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/OAuth */ "./src/api/OAuth/index.ts");
/* harmony import */ var _config_apiRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/apiRoutes */ "./src/config/apiRoutes.ts");
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/actions/profile.actions */ "./src/actions/profile.actions.ts");
/* harmony import */ var _YandexSignIn_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./YandexSignIn.module.scss */ "./src/pages/SignIn/YandexSignIn/YandexSignIn.module.scss");








const {
  providerURLRoot,
  redirectURI
} = _config_apiRoutes__WEBPACK_IMPORTED_MODULE_5__.apiRoutes.oauth;

const providerURL = clientId => `${providerURLRoot}&client_id=${clientId}
&redirect_uri=${redirectURI}`;

const YandexSignIn = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    _api_OAuth__WEBPACK_IMPORTED_MODULE_4__["default"].getServiceId(redirectURI).then(serviceId => {
      if (serviceId) {
        window.location.replace(providerURL(serviceId));
      }

      dispatch((0,_actions_profile_actions__WEBPACK_IMPORTED_MODULE_6__.getProfile)());
    }).catch(error => {
      console.log(error);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _YandexSignIn_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].link,
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.LoginOutlined, {
    className: _YandexSignIn_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].icon
  }), "\u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u042F\u043D\u0434\u0435\u043A\u0441");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YandexSignIn);

/***/ }),

/***/ "./src/pages/SignIn/index.ts":
/*!***********************************!*\
  !*** ./src/pages/SignIn/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _SignIn_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _SignIn_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignIn.view */ "./src/pages/SignIn/SignIn.view.tsx");


/***/ }),

/***/ "./src/pages/SignUp/SignUp.helpers.ts":
/*!********************************************!*\
  !*** ./src/pages/SignUp/SignUp.helpers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSignUp": () => (/* binding */ useSignUp)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _api_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/Auth */ "./src/api/Auth/index.ts");



var SignUpFieldNames;

(function (SignUpFieldNames) {
  SignUpFieldNames["SecondName"] = "second_name";
  SignUpFieldNames["FirstName"] = "first_name";
  SignUpFieldNames["Email"] = "email";
  SignUpFieldNames["Phone"] = "phone";
  SignUpFieldNames["Login"] = "login";
  SignUpFieldNames["Password"] = "password";
})(SignUpFieldNames || (SignUpFieldNames = {}));

const useSignUp = () => {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useHistory)();
  const fieldSet = [{
    name: SignUpFieldNames.SecondName,
    rules: [{
      required: true,
      message: "Введите фамилию"
    }],
    placeholder: "Фамилия"
  }, {
    name: SignUpFieldNames.FirstName,
    rules: [{
      required: true,
      message: "Введите имя"
    }],
    placeholder: "Имя"
  }, {
    name: SignUpFieldNames.Email,
    rules: [{
      required: true,
      message: "Введите почту"
    }],
    placeholder: "Эл. почта"
  }, {
    name: SignUpFieldNames.Phone,
    rules: [{
      required: true,
      message: "Введите телефон"
    }],
    placeholder: "Телефон"
  }, {
    name: SignUpFieldNames.Login,
    rules: [{
      required: true,
      message: "Введите логин"
    }],
    placeholder: "Логин"
  }, {
    name: SignUpFieldNames.Password,
    rules: [{
      required: true,
      message: "Введите пароль"
    }],
    placeholder: "Пароль",
    type: "password"
  }];

  const onFinish = async values => {
    const response = await _api_Auth__WEBPACK_IMPORTED_MODULE_2__["default"].signUp(values);

    if (response) {
      history.push(_config_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.signIn.path);
    }
  };

  const onFinishFailed = errorInfo => console.log("Failed:", errorInfo);

  return {
    currentPath: _config_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.signUp.path,
    fieldSet,
    onFinish,
    onFinishFailed
  };
};

/***/ }),

/***/ "./src/pages/SignUp/SignUp.view.tsx":
/*!******************************************!*\
  !*** ./src/pages/SignUp/SignUp.view.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header/index.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _SignUp_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignUp.module.scss */ "./src/pages/SignUp/SignUp.module.scss");
/* harmony import */ var _SignUp_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignUp.helpers */ "./src/pages/SignUp/SignUp.helpers.ts");








const SignUp = () => {
  const {
    fieldSet,
    onFinish,
    onFinishFailed
  } = (0,_SignUp_helpers__WEBPACK_IMPORTED_MODULE_6__.useSignUp)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentPath: _config_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes.signUp.path
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUp_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].formContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
    name: "signUp",
    onFinish: onFinish,
    onFinishFailed: () => onFinishFailed,
    layout: "vertical"
  }, fieldSet.map((set, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
    name: set.name,
    rules: set.rules,
    key: `${set.name}-${index}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: set.type ?? "",
    placeholder: set.placeholder
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
    block: true,
    type: "primary",
    htmlType: "submit"
  }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ "./src/pages/SignUp/index.ts":
/*!***********************************!*\
  !*** ./src/pages/SignUp/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _SignUp_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _SignUp_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp.view */ "./src/pages/SignUp/SignUp.view.tsx");


/***/ }),

/***/ "./src/pages/Topic/Comment/Comment.view.tsx":
/*!**************************************************!*\
  !*** ./src/pages/Topic/Comment/Comment.view.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment.module.scss */ "./src/pages/Topic/Comment/Comment.module.scss");




const CommentContainer = ({
  author,
  message
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Comment, {
  className: _Comment_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].comment,
  author: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null, author ?? "author"),
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, message ?? "Say what?")
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentContainer);

/***/ }),

/***/ "./src/pages/Topic/Comment/index.ts":
/*!******************************************!*\
  !*** ./src/pages/Topic/Comment/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Comment_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Comment_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.view */ "./src/pages/Topic/Comment/Comment.view.tsx");


/***/ }),

/***/ "./src/pages/Topic/CommentInput/CommentInput.view.tsx":
/*!************************************************************!*\
  !*** ./src/pages/Topic/CommentInput/CommentInput.view.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommentInput_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentInput.module.scss */ "./src/pages/Topic/CommentInput/CommentInput.module.scss");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button */ "./src/components/Button/index.ts");




const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__.Input;

const CommentInput = () => {
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const handleInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => setMessage(e.target.value), []);
  const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => console.log(message), [message]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _CommentInput_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextArea, {
    maxLength: 100,
    rows: 3,
    onChange: handleInput,
    value: message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _CommentInput_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].buttonContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "primary",
    onClick: handleSubmit
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentInput);

/***/ }),

/***/ "./src/pages/Topic/CommentInput/index.ts":
/*!***********************************************!*\
  !*** ./src/pages/Topic/CommentInput/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CommentInput_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _CommentInput_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentInput.view */ "./src/pages/Topic/CommentInput/CommentInput.view.tsx");


/***/ }),

/***/ "./src/pages/Topic/Topic.helpers.ts":
/*!******************************************!*\
  !*** ./src/pages/Topic/Topic.helpers.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTopic": () => (/* binding */ useTopic)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");
/* harmony import */ var _hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useMountEffect */ "./src/hooks/useMountEffect.ts");
/* harmony import */ var _actions_topic_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/actions/topic.actions */ "./src/actions/topic.actions.ts");





const useTopic = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  const {
    data,
    isLoading
  } = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.topic, react_redux__WEBPACK_IMPORTED_MODULE_0__.shallowEqual);
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const id = pathname.split("/").slice(-1)[0];
  (0,_hooks_useMountEffect__WEBPACK_IMPORTED_MODULE_3__.useMountEffect)(() => {
    dispatch((0,_actions_topic_actions__WEBPACK_IMPORTED_MODULE_4__.loadTopic)(Number(id)));
  });
  return {
    topic: data,
    isLoading
  };
};

/***/ }),

/***/ "./src/pages/Topic/Topic.view.tsx":
/*!****************************************!*\
  !*** ./src/pages/Topic/Topic.view.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _components_PageMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PageMeta */ "./src/components/PageMeta/index.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header/index.ts");
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _components_PageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/PageLoader */ "./src/components/PageLoader/index.ts");
/* harmony import */ var _Topic_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Topic.module.scss */ "./src/pages/Topic/Topic.module.scss");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Comment */ "./src/pages/Topic/Comment/index.ts");
/* harmony import */ var _CommentInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommentInput */ "./src/pages/Topic/CommentInput/index.ts");
/* harmony import */ var _Topic_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Topic.helpers */ "./src/pages/Topic/Topic.helpers.ts");











const {
  Title,
  Text
} = antd__WEBPACK_IMPORTED_MODULE_1__.Typography;

const Topic = () => {
  const {
    topic,
    isLoading
  } = (0,_Topic_helpers__WEBPACK_IMPORTED_MODULE_10__.useTopic)();
  const {
    title,
    body
  } = topic;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isSpinning: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageMeta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Topic",
    description: "About game"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentPath: _config_routes_routes__WEBPACK_IMPORTED_MODULE_5__.routes.topic.path
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Topic_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {
    level: 2
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, null, body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Topic_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].comments
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comment__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comment__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comment__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommentInput__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Topic);

/***/ }),

/***/ "./src/pages/Topic/index.ts":
/*!**********************************!*\
  !*** ./src/pages/Topic/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Topic_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Topic_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topic.view */ "./src/pages/Topic/Topic.view.tsx");


/***/ }),

/***/ "./src/pages/TopicEdit/TopicEdit.helpers.ts":
/*!**************************************************!*\
  !*** ./src/pages/TopicEdit/TopicEdit.helpers.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopicFieldNames": () => (/* binding */ TopicFieldNames),
/* harmony export */   "useTopicForm": () => (/* binding */ useTopicForm)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _actions_topic_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/actions/topic.actions */ "./src/actions/topic.actions.ts");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useSelector */ "./src/hooks/useSelector.ts");






let TopicFieldNames;

(function (TopicFieldNames) {
  TopicFieldNames["Title"] = "title";
  TopicFieldNames["Body"] = "body";
})(TopicFieldNames || (TopicFieldNames = {}));

const useTopicForm = () => {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useHistory)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const isLoading = (0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.topic.isLoading);
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLocation)();
  const id = pathname.split("/").slice(-1)[0];
  const hasId = !isNaN(Number(id));
  const submitLabel = hasId ? "Редактировать" : "Создать";
  const titleLabel = hasId ? "Редактирование темы" : "Создание темы";
  console.log(hasId);
  const onFinish = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async data => {
    if (hasId) {
      dispatch((0,_actions_topic_actions__WEBPACK_IMPORTED_MODULE_4__.updateTopic)(Number(id), data));
    } else {
      dispatch((0,_actions_topic_actions__WEBPACK_IMPORTED_MODULE_4__.createTopic)(data, history));
    }
  }, []);

  const onFinishFailed = errorInfo => console.log("Failed:", errorInfo);

  return {
    currentPath: _config_routes_routes__WEBPACK_IMPORTED_MODULE_3__.routes.topicEdit.path,
    onFinish,
    onFinishFailed,
    isLoading,
    submitLabel,
    titleLabel
  };
};

/***/ }),

/***/ "./src/pages/TopicEdit/TopicEdit.view.tsx":
/*!************************************************!*\
  !*** ./src/pages/TopicEdit/TopicEdit.view.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _components_PageMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PageMeta */ "./src/components/PageMeta/index.ts");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Header */ "./src/components/Header/index.ts");
/* harmony import */ var _components_PageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/PageLoader */ "./src/components/PageLoader/index.ts");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Input */ "./src/components/Input/index.ts");
/* harmony import */ var _TopicEdit_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TopicEdit.module.scss */ "./src/pages/TopicEdit/TopicEdit.module.scss");
/* harmony import */ var _TopicEdit_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TopicEdit.helpers */ "./src/pages/TopicEdit/TopicEdit.helpers.ts");










const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__.Input;

const TopicEdit = () => {
  const {
    isLoading,
    onFinish,
    onFinishFailed,
    currentPath,
    submitLabel,
    titleLabel
  } = (0,_TopicEdit_helpers__WEBPACK_IMPORTED_MODULE_9__.useTopicForm)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isSpinning: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageMeta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Topic",
    description: "About game"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currentPath: currentPath
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _TopicEdit_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, {
    className: _TopicEdit_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].title
  }, titleLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
    name: "topicCreate",
    onFinish: onFinish,
    onFinishFailed: () => onFinishFailed,
    layout: "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
    name: _TopicEdit_helpers__WEBPACK_IMPORTED_MODULE_9__.TopicFieldNames.Title,
    rules: [{
      required: true,
      message: "Введите заголовок топика"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    placeholder: "\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.RightOutlined, null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
    name: _TopicEdit_helpers__WEBPACK_IMPORTED_MODULE_9__.TopicFieldNames.Body,
    rules: [{
      required: true,
      message: "Введите описание топика"
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextArea, {
    maxLength: 100,
    rows: 6,
    placeholder: "\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
    block: true,
    type: "primary",
    htmlType: "submit"
  }, submitLabel))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopicEdit);

/***/ }),

/***/ "./src/pages/TopicEdit/index.ts":
/*!**************************************!*\
  !*** ./src/pages/TopicEdit/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _TopicEdit_view__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _TopicEdit_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopicEdit.view */ "./src/pages/TopicEdit/TopicEdit.view.tsx");


/***/ }),

/***/ "./src/reducers/auth.reducer.ts":
/*!**************************************!*\
  !*** ./src/reducers/auth.reducer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authReducer": () => (/* binding */ authReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _actions_types_auth_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/actions/types/auth.types */ "./src/actions/types/auth.types.ts");
/* harmony import */ var _helpers_acess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/acess */ "./src/helpers/acess.ts");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/actions/auth.actions */ "./src/actions/auth.actions.ts");



const initialState = {
  isSignedIn: (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_1__.checkAccess)(),
  isSignedInOAuth: (0,_helpers_acess__WEBPACK_IMPORTED_MODULE_1__.checkAccess)(),
  isLoading: false,
  stage: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthStages.INIT
};
/* eslint-disable @typescript-eslint/default-param-last */

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types_auth_types__WEBPACK_IMPORTED_MODULE_0__.SIGN_IN:
      return {
        isSignedIn: true,
        isSignedInOAuth: false,
        isLoading: false,
        stage: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthStages.DONE
      };

    case _actions_types_auth_types__WEBPACK_IMPORTED_MODULE_0__.SIGN_IN_OAUTH:
      return {
        isSignedIn: false,
        isSignedInOAuth: true,
        isLoading: false,
        stage: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthStages.DONE
      };

    case _actions_types_auth_types__WEBPACK_IMPORTED_MODULE_0__.SIGN_OUT:
      return {
        isSignedIn: false,
        isSignedInOAuth: false,
        isLoading: false,
        stage: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthStages.DONE
      };

    case _actions_types_auth_types__WEBPACK_IMPORTED_MODULE_0__.LOADING:
      return {
        isSignedIn: false,
        isSignedInOAuth: false,
        isLoading: action.payload.isLoading,
        stage: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__.AuthStages.LOADING
      };

    default:
      return state;
  }
};
/* eslint-enable @typescript-eslint/default-param-last */

/***/ }),

/***/ "./src/reducers/forum.reducer.ts":
/*!***************************************!*\
  !*** ./src/reducers/forum.reducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FORUM_INIT_STATE": () => (/* binding */ FORUM_INIT_STATE),
/* harmony export */   "forumReducer": () => (/* binding */ forumReducer)
/* harmony export */ });
/* harmony import */ var _actions_types_forum_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/actions/types/forum.types */ "./src/actions/types/forum.types.ts");

const FORUM_INIT_STATE = {
  isLoading: false,
  data: []
};
/* eslint-disable @typescript-eslint/default-param-last */

const forumReducer = (state = FORUM_INIT_STATE, action) => {
  switch (action.type) {
    case _actions_types_forum_types__WEBPACK_IMPORTED_MODULE_0__.FORUM_LOAD:
      return { ...state,
        data: action.payload.data
      };

    case _actions_types_forum_types__WEBPACK_IMPORTED_MODULE_0__.FORUM_SET_LOADING:
      return { ...state,
        isLoading: action.payload.isLoading
      };

    default:
      return state;
  }
};
/* eslint-enable @typescript-eslint/default-param-last */

/***/ }),

/***/ "./src/reducers/leaderboard.reducer.ts":
/*!*********************************************!*\
  !*** ./src/reducers/leaderboard.reducer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LEADERBOARD_INIT_STATE": () => (/* binding */ LEADERBOARD_INIT_STATE),
/* harmony export */   "leaderBoardReducer": () => (/* binding */ leaderBoardReducer)
/* harmony export */ });
/* harmony import */ var _actions_types_leaderboard_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/actions/types/leaderboard.types */ "./src/actions/types/leaderboard.types.ts");

const LEADERBOARD_INIT_STATE = {
  isLoading: false,
  data: []
};
/* eslint-disable @typescript-eslint/default-param-last */

const leaderBoardReducer = (state = LEADERBOARD_INIT_STATE, action) => {
  switch (action.type) {
    case _actions_types_leaderboard_types__WEBPACK_IMPORTED_MODULE_0__.LOAD:
      return { ...state,
        data: action.payload.data
      };

    case _actions_types_leaderboard_types__WEBPACK_IMPORTED_MODULE_0__.SET_LOADING:
      return { ...state,
        isLoading: action.payload.isLoading
      };

    default:
      return state;
  }
};
/* eslint-enable @typescript-eslint/default-param-last */

/***/ }),

/***/ "./src/reducers/profile.reducer.ts":
/*!*****************************************!*\
  !*** ./src/reducers/profile.reducer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "profileReducer": () => (/* binding */ profileReducer)
/* harmony export */ });
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/actions/profile.actions */ "./src/actions/profile.actions.ts");
/* harmony import */ var _actions_types_profile_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/types/profile.types */ "./src/actions/types/profile.types.ts");


const initialState = {
  data: {
    id: 0,
    second_name: "",
    first_name: "",
    email: "",
    phone: "",
    login: "",
    password: "",
    avatar: ""
  },
  isLoading: false,
  stage: _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__.ProfileStages.INIT
};
/* eslint-disable @typescript-eslint/default-param-last */

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types_profile_types__WEBPACK_IMPORTED_MODULE_1__.GET_PROFILE:
      return {
        data: { ...action.payload.data
        },
        isLoading: false,
        stage: _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__.ProfileStages.DONE
      };

    case _actions_types_profile_types__WEBPACK_IMPORTED_MODULE_1__.SET_PROFILE:
      return {
        data: { ...action.payload.data
        },
        isLoading: false,
        stage: _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__.ProfileStages.DONE
      };

    case _actions_types_profile_types__WEBPACK_IMPORTED_MODULE_1__.SET_PASSWORD:
      return { ...state,
        isLoading: false,
        stage: _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__.ProfileStages.DONE
      };

    case _actions_types_profile_types__WEBPACK_IMPORTED_MODULE_1__.PROFILE_LOADING:
      return {
        data: {},
        isLoading: action.payload.isLoading,
        stage: _actions_profile_actions__WEBPACK_IMPORTED_MODULE_0__.ProfileStages.LOADING
      };

    default:
      return state;
  }
};
/* eslint-enable @typescript-eslint/default-param-last */

/***/ }),

/***/ "./src/reducers/theme.reducer.ts":
/*!***************************************!*\
  !*** ./src/reducers/theme.reducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "themeReducer": () => (/* binding */ themeReducer)
/* harmony export */ });
/* harmony import */ var _actions_types_theme_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/actions/types/theme.types */ "./src/actions/types/theme.types.ts");

const initialState = null;
/* eslint-disable @typescript-eslint/default-param-last */

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_types_theme_types__WEBPACK_IMPORTED_MODULE_0__.SET_THEME:
      return action.payload;

    default:
      return state;
  }
};
/* eslint-enable @typescript-eslint/default-param-last */

/***/ }),

/***/ "./src/reducers/topic.reducer.ts":
/*!***************************************!*\
  !*** ./src/reducers/topic.reducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOPIC_INIT_STATE": () => (/* binding */ TOPIC_INIT_STATE),
/* harmony export */   "topicReducer": () => (/* binding */ topicReducer)
/* harmony export */ });
/* harmony import */ var _actions_types_topic_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/actions/types/topic.types */ "./src/actions/types/topic.types.ts");

const TOPIC_INIT_STATE = {
  isLoading: false,
  data: {
    id: 0,
    title: "",
    body: "",
    created_at: "",
    user_id: 0,
    comments_count: null
  }
};
/* eslint-disable @typescript-eslint/default-param-last */

const topicReducer = (state = TOPIC_INIT_STATE, action) => {
  switch (action.type) {
    case _actions_types_topic_types__WEBPACK_IMPORTED_MODULE_0__.TOPIC_LOAD:
      return { ...state,
        data: action.payload.data
      };

    case _actions_types_topic_types__WEBPACK_IMPORTED_MODULE_0__.TOPIC_SET_LOADING:
      return { ...state,
        isLoading: action.payload.isLoading
      };

    default:
      return state;
  }
};
/* eslint-enable @typescript-eslint/default-param-last */

/***/ }),

/***/ "./src/server/controllers/forum/topics.ts":
/*!************************************************!*\
  !*** ./src/server/controllers/forum/topics.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_db_forum_actions_topics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/server/db/forum/actions/topics */ "./src/server/db/forum/actions/topics.ts");
/* harmony import */ var _server_utils_safeDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/server/utils/safeDecorator */ "./src/server/utils/safeDecorator.ts");
/* harmony import */ var _server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/server/utils/httpStatuses */ "./src/server/utils/httpStatuses.ts");
var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }






const topicErrorHandler = (err, res) => {
  if (err instanceof sequelize__WEBPACK_IMPORTED_MODULE_0__.ValidationError) {
    return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.BadRequest).send({
      message: "Неверный формат данных"
    });
  }

  return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.ServerError).send({
    message: "Ошибка сервера"
  });
};

const Safe = (0,_server_utils_safeDecorator__WEBPACK_IMPORTED_MODULE_2__.createSafeDecorator)(topicErrorHandler);
let TopicController = (_class = class TopicController {
  async get(req, res) {
    const topics = await (0,_server_db_forum_actions_topics__WEBPACK_IMPORTED_MODULE_1__.getDBTopics)();

    if (!topics || !topics.length) {
      return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.BadRequest).send({
        message: "Топики отсутствуют"
      });
    }

    return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.OK).send(topics);
  }

  async getTopic(req, res) {
    const id = Number(req.params.id);
    const topic = await (0,_server_db_forum_actions_topics__WEBPACK_IMPORTED_MODULE_1__.getDBTopic)(id);

    if (!topic) {
      return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.BadRequest).send({
        message: "Топики отсутствуют"
      });
    }

    return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.OK).send(topic);
  }

  async add(req, res) {
    const topic = await (0,_server_db_forum_actions_topics__WEBPACK_IMPORTED_MODULE_1__.addDBTopic)(req.body);

    if (!topic) {
      return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.BadRequest).send({
        message: "Ошибка добавления топика"
      });
    }

    return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.Created).send(topic);
  }

  async update(req, res) {
    const id = Number(req.params.id);
    const resultArray = await (0,_server_db_forum_actions_topics__WEBPACK_IMPORTED_MODULE_1__.updateDBTopic)(id, req.body);
    const result = resultArray[0];

    if (!result) {
      return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.BadRequest).send({
        message: "Ошибка изменения топика"
      });
    }

    const topic = await (0,_server_db_forum_actions_topics__WEBPACK_IMPORTED_MODULE_1__.getDBTopic)(id);
    return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.OK).send(topic);
  }

  async delete(req, res) {
    const id = Number(req.params.id);
    const result = await (0,_server_db_forum_actions_topics__WEBPACK_IMPORTED_MODULE_1__.removeDBTopic)(id);

    if (!result) {
      return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.BadRequest).send({
        message: "Ошибка удаления топика"
      });
    }

    return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.OK).sendStatus(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.OK);
  }

}, (_applyDecoratedDescriptor(_class.prototype, "get", [Safe], Object.getOwnPropertyDescriptor(_class.prototype, "get"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getTopic", [Safe], Object.getOwnPropertyDescriptor(_class.prototype, "getTopic"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "add", [Safe], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "update", [Safe], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "delete", [Safe], Object.getOwnPropertyDescriptor(_class.prototype, "delete"), _class.prototype)), _class);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TopicController());

/***/ }),

/***/ "./src/server/controllers/index.ts":
/*!*****************************************!*\
  !*** ./src/server/controllers/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemesController": () => (/* reexport safe */ _themes_themes__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "TopicController": () => (/* reexport safe */ _forum_topics__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _forum_topics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forum/topics */ "./src/server/controllers/forum/topics.ts");
/* harmony import */ var _themes_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes/themes */ "./src/server/controllers/themes/themes.ts");



/***/ }),

/***/ "./src/server/controllers/themes/themes.ts":
/*!*************************************************!*\
  !*** ./src/server/controllers/themes/themes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_db_themes_actions_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/server/db/themes/actions/themes */ "./src/server/db/themes/actions/themes.ts");
/* harmony import */ var _server_utils_safeDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/server/utils/safeDecorator */ "./src/server/utils/safeDecorator.ts");
/* harmony import */ var _server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/server/utils/httpStatuses */ "./src/server/utils/httpStatuses.ts");
var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }






const themeErrorHandler = (err, res) => {
  console.log(err);

  if (err instanceof sequelize__WEBPACK_IMPORTED_MODULE_0__.ValidationError) {
    return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.BadRequest).send({
      message: "Неверный формат данных"
    });
  }

  return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.ServerError).send({
    message: "Ошибка сервера"
  });
};

const Safe = (0,_server_utils_safeDecorator__WEBPACK_IMPORTED_MODULE_2__.createSafeDecorator)(themeErrorHandler);
let ThemeController = (_class = class ThemeController {
  async get(req, res) {
    const id = Number(req.params.id);
    const theme = await (0,_server_db_themes_actions_themes__WEBPACK_IMPORTED_MODULE_1__.getDBTheme)(id);

    if (!theme) {
      // Если нет, то создаем
      const newTheme = await (0,_server_db_themes_actions_themes__WEBPACK_IMPORTED_MODULE_1__.addDBTheme)({
        user_id: id,
        theme: "light"
      });

      if (!newTheme) {
        return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.BadRequest).send({
          message: "Ошибка сохранения темы"
        });
      }

      return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.OK).send(newTheme);
    }

    return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.OK).send(theme);
  }

  async update(req, res) {
    const id = Number(req.params.id); // Сначала проверяем существует ли такой юзер

    const theme = await (0,_server_db_themes_actions_themes__WEBPACK_IMPORTED_MODULE_1__.getDBTheme)(id);

    if (!theme) {
      // Если нет, то создаем
      const newTheme = await (0,_server_db_themes_actions_themes__WEBPACK_IMPORTED_MODULE_1__.addDBTheme)({
        user_id: id,
        theme: req.body
      });

      if (!newTheme) {
        return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.BadRequest).send({
          message: "Ошибка сохранения темы"
        });
      }

      return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.OK).send(newTheme);
    } // Если есть, то обновляем


    const resultArray = await (0,_server_db_themes_actions_themes__WEBPACK_IMPORTED_MODULE_1__.updateDBTheme)(id, req.body);
    const result = resultArray[0];

    if (!result) {
      return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.BadRequest).send({
        message: "Ошибка изменения темы"
      });
    } // Возвращаем обновленную тему


    const updatedTheme = await (0,_server_db_themes_actions_themes__WEBPACK_IMPORTED_MODULE_1__.getDBTheme)(id);
    return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.OK).send(updatedTheme);
  }

  async add(req, res) {
    const currentTheme = await (0,_server_db_themes_actions_themes__WEBPACK_IMPORTED_MODULE_1__.addDBTheme)(req.body);

    if (!currentTheme) {
      return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.BadRequest).send({
        message: "Ошибка сохранения темы"
      });
    }

    return res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_3__.HttpStatuses.OK).send(currentTheme);
  }

}, (_applyDecoratedDescriptor(_class.prototype, "get", [Safe], Object.getOwnPropertyDescriptor(_class.prototype, "get"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "update", [Safe], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "add", [Safe], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype)), _class);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ThemeController());

/***/ }),

/***/ "./src/server/db/forum/actions/topics.ts":
/*!***********************************************!*\
  !*** ./src/server/db/forum/actions/topics.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDBTopic": () => (/* binding */ addDBTopic),
/* harmony export */   "getDBTopic": () => (/* binding */ getDBTopic),
/* harmony export */   "getDBTopics": () => (/* binding */ getDBTopics),
/* harmony export */   "removeDBTopic": () => (/* binding */ removeDBTopic),
/* harmony export */   "updateDBTopic": () => (/* binding */ updateDBTopic)
/* harmony export */ });
/* harmony import */ var _models_topic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/topic */ "./src/server/db/forum/models/topic.ts");

const getDBTopics = () => _models_topic__WEBPACK_IMPORTED_MODULE_0__.Topic.findAll();
const getDBTopic = id => _models_topic__WEBPACK_IMPORTED_MODULE_0__.Topic.findOne({
  where: {
    id
  }
}); // TODO: Разобраться с типами

const addDBTopic = topic => {
  const data = {
    title: topic?.title,
    body: topic?.body,
    user_id: topic?.user_id
  };
  return _models_topic__WEBPACK_IMPORTED_MODULE_0__.Topic.create(data);
};
const updateDBTopic = (id, topic) => {
  const data = {};
  if (topic?.title) data.title = topic.title;
  if (topic?.body) data.body = topic.body;
  if (topic?.user_id) data.user_id = topic.user_id;
  return _models_topic__WEBPACK_IMPORTED_MODULE_0__.Topic.update(data, {
    where: {
      id
    }
  });
};
const removeDBTopic = id => _models_topic__WEBPACK_IMPORTED_MODULE_0__.Topic.destroy({
  where: {
    id
  }
});

/***/ }),

/***/ "./src/server/db/forum/models/topic.ts":
/*!*********************************************!*\
  !*** ./src/server/db/forum/models/topic.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Topic": () => (/* binding */ Topic)
/* harmony export */ });
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


const MAX_LENGTH = 512;
let Topic = (_dec = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Table)({
  timestamps: true,
  createdAt: "created_at",
  updatedAt: false,
  tableName: "topics"
}), _dec2 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.INTEGER), _dec3 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Length)({
  max: MAX_LENGTH
}), _dec4 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.AllowNull)(false), _dec5 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING), _dec6 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.AllowNull)(false), _dec7 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING), _dec8 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.AllowNull)(true), _dec9 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.INTEGER), _dec10 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.AllowNull)(true), _dec11 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.INTEGER), _dec(_class = (_class2 = class Topic extends sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Model {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "title", _descriptor2, this);

    _initializerDefineProperty(this, "body", _descriptor3, this);

    _initializerDefineProperty(this, "user_id", _descriptor4, this);

    _initializerDefineProperty(this, "comments_count", _descriptor5, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.AutoIncrement, sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.PrimaryKey, _dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec3, _dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "body", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "user_id", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "comments_count", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),

/***/ "./src/server/db/init.ts":
/*!*******************************!*\
  !*** ./src/server/db/init.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSequelize": () => (/* binding */ createSequelize)
/* harmony export */ });
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _forum_models_topic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forum/models/topic */ "./src/server/db/forum/models/topic.ts");
/* harmony import */ var _themes_models_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes/models/themes */ "./src/server/db/themes/models/themes.ts");



const createSequelize = () => {
  const sequelizeOptions = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: "postgres"
  };
  const db = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Sequelize(sequelizeOptions);
  db.addModels([_forum_models_topic__WEBPACK_IMPORTED_MODULE_1__.Topic, _themes_models_themes__WEBPACK_IMPORTED_MODULE_2__.Theme]);
  return db;
};

/***/ }),

/***/ "./src/server/db/themes/actions/themes.ts":
/*!************************************************!*\
  !*** ./src/server/db/themes/actions/themes.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDBTheme": () => (/* binding */ addDBTheme),
/* harmony export */   "getDBTheme": () => (/* binding */ getDBTheme),
/* harmony export */   "updateDBTheme": () => (/* binding */ updateDBTheme)
/* harmony export */ });
/* harmony import */ var _models_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/themes */ "./src/server/db/themes/models/themes.ts");

const getDBTheme = id => _models_themes__WEBPACK_IMPORTED_MODULE_0__.Theme.findOne({
  where: {
    user_id: id
  }
});
const updateDBTheme = (id, body) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const data = {
    theme: body.theme,
    user_id: id
  };
  return _models_themes__WEBPACK_IMPORTED_MODULE_0__.Theme.update(data, {
    where: {
      user_id: id
    }
  });
};
const addDBTheme = body => _models_themes__WEBPACK_IMPORTED_MODULE_0__.Theme.create(body);

/***/ }),

/***/ "./src/server/db/themes/models/themes.ts":
/*!***********************************************!*\
  !*** ./src/server/db/themes/models/themes.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Theme": () => (/* binding */ Theme)
/* harmony export */ });
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


let Theme = (_dec = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Table)({
  timestamps: false,
  tableName: "themes"
}), _dec2 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.INTEGER), _dec3 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.AllowNull)(true), _dec4 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING), _dec5 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.AllowNull)(true), _dec6 = (0,sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Column)(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.INTEGER), _dec(_class = (_class2 = class Theme extends sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Model {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "theme", _descriptor2, this);

    _initializerDefineProperty(this, "user_id", _descriptor3, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.AutoIncrement, sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.PrimaryKey, _dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "theme", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "user_id", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),

/***/ "./src/server/middlewares/apiProxy.ts":
/*!********************************************!*\
  !*** ./src/server/middlewares/apiProxy.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiProxy": () => (/* binding */ apiProxy)
/* harmony export */ });
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_API_API_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/API/API.service */ "./src/services/API/API.service.ts");


const apiProxy = (0,http_proxy_middleware__WEBPACK_IMPORTED_MODULE_0__.createProxyMiddleware)(_services_API_API_service__WEBPACK_IMPORTED_MODULE_1__.base, {
  target: _services_API_API_service__WEBPACK_IMPORTED_MODULE_1__.root,
  changeOrigin: true,
  cookieDomainRewrite: "udc.ya-praktikum.tech"
});

/***/ }),

/***/ "./src/server/middlewares/auth.ts":
/*!****************************************!*\
  !*** ./src/server/middlewares/auth.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAuth": () => (/* binding */ checkAuth)
/* harmony export */ });
/* harmony import */ var _server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/server/utils/httpStatuses */ "./src/server/utils/httpStatuses.ts");

const checkAuth = (req, res, next) => {
  if (req.cookies.uuid && req.cookies.authCookie) {
    next();
  } else {
    res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_0__.HttpStatuses.Unauthorized).send({
      message: "Пользователь не авторизован"
    });
  }
};

/***/ }),

/***/ "./src/server/middlewares/index.ts":
/*!*****************************************!*\
  !*** ./src/server/middlewares/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiProxy": () => (/* reexport safe */ _apiProxy__WEBPACK_IMPORTED_MODULE_0__.apiProxy),
/* harmony export */   "limiterMiddleware": () => (/* reexport safe */ _limiter__WEBPACK_IMPORTED_MODULE_1__.limiterMiddleware),
/* harmony export */   "redirectMiddleware": () => (/* reexport safe */ _redirect__WEBPACK_IMPORTED_MODULE_3__.redirectMiddleware),
/* harmony export */   "serverRenderMiddleware": () => (/* reexport safe */ _serverRender__WEBPACK_IMPORTED_MODULE_2__.serverRenderMiddleware)
/* harmony export */ });
/* harmony import */ var _apiProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiProxy */ "./src/server/middlewares/apiProxy.ts");
/* harmony import */ var _limiter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./limiter */ "./src/server/middlewares/limiter.ts");
/* harmony import */ var _serverRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serverRender */ "./src/server/middlewares/serverRender.tsx");
/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect */ "./src/server/middlewares/redirect.ts");





/***/ }),

/***/ "./src/server/middlewares/limiter.ts":
/*!*******************************************!*\
  !*** ./src/server/middlewares/limiter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "limiterMiddleware": () => (/* binding */ limiterMiddleware)
/* harmony export */ });
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-rate-limit */ "express-rate-limit");
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_0__);
/* @ts-ignore */
 // NOTE: Базовая защита от DDOS

const limiterMiddleware = express_rate_limit__WEBPACK_IMPORTED_MODULE_0___default()({
  windowMs: 20 * 60 * 1000,
  max: 100
});

/***/ }),

/***/ "./src/server/middlewares/redirect.ts":
/*!********************************************!*\
  !*** ./src/server/middlewares/redirect.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "redirectMiddleware": () => (/* binding */ redirectMiddleware)
/* harmony export */ });
const redirectMiddleware = (req, res, next) => {
  res.redirect("/");
};

/***/ }),

/***/ "./src/server/middlewares/serverRender.tsx":
/*!*************************************************!*\
  !*** ./src/server/middlewares/serverRender.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serverRenderMiddleware": () => (/* binding */ serverRenderMiddleware)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/store */ "./src/store/store.ts");
/* harmony import */ var _utils_makeHTMLPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/makeHTMLPage */ "./src/server/utils/makeHTMLPage.ts");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/App */ "./src/components/App/index.ts");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/actions/auth.actions */ "./src/actions/auth.actions.ts");
/* harmony import */ var _server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/server/utils/httpStatuses */ "./src/server/utils/httpStatuses.ts");










const store = (0,_store_store__WEBPACK_IMPORTED_MODULE_5__["default"])();
const serverRenderMiddleware = (req, res, next) => {
  const location = req.url;
  const host = req.get("Host");
  let protocol = "https";

  if (host?.startsWith("localhost")) {
    protocol = "http";
  }

  const hostUrl = `${protocol}://${host}`;

  if (req.cookies.uuid && req.cookies.authCookie) {
    store.dispatch((0,_actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__.signInSuccess)());
  } else {
    store.dispatch((0,_actions_auth_actions__WEBPACK_IMPORTED_MODULE_8__.signOutSuccess)());
  }

  const jsx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {
    location: location
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
  const reactHtml = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)(jsx);
  const reduxState = store.getState();
  const helmetData = react_helmet__WEBPACK_IMPORTED_MODULE_4___default().renderStatic(); // TODO: если отдавать 304 ридерект,
  // то ломаются service-workers, надо подумать что с этим сделать

  res.status(_server_utils_httpStatuses__WEBPACK_IMPORTED_MODULE_9__.HttpStatuses.OK).send((0,_utils_makeHTMLPage__WEBPACK_IMPORTED_MODULE_6__.makeHTMLPage)(hostUrl, reactHtml, helmetData, reduxState));
  res.end();
};

/***/ }),

/***/ "./src/server/router/apiRoutes.ts":
/*!****************************************!*\
  !*** ./src/server/router/apiRoutes.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiRouter": () => (/* binding */ apiRouter)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var server_middlewares_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! server/middlewares/auth */ "./src/server/middlewares/auth.ts");
/* harmony import */ var _server_controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/server/controllers */ "./src/server/controllers/index.ts");
/* harmony import */ var _services_API_API_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/API/API.service */ "./src/services/API/API.service.ts");





const apiRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();
const middlewares = [body_parser__WEBPACK_IMPORTED_MODULE_1___default().json(), server_middlewares_auth__WEBPACK_IMPORTED_MODULE_2__.checkAuth];
apiRouter.get(`${_services_API_API_service__WEBPACK_IMPORTED_MODULE_4__.apiBase}/topics`, ...middlewares, _server_controllers__WEBPACK_IMPORTED_MODULE_3__.TopicController.get);
apiRouter.get(`${_services_API_API_service__WEBPACK_IMPORTED_MODULE_4__.apiBase}/topics/:id`, ...middlewares, _server_controllers__WEBPACK_IMPORTED_MODULE_3__.TopicController.getTopic);
apiRouter.post(`${_services_API_API_service__WEBPACK_IMPORTED_MODULE_4__.apiBase}/topics`, ...middlewares, _server_controllers__WEBPACK_IMPORTED_MODULE_3__.TopicController.add);
apiRouter.put(`${_services_API_API_service__WEBPACK_IMPORTED_MODULE_4__.apiBase}/topics/:id`, ...middlewares, _server_controllers__WEBPACK_IMPORTED_MODULE_3__.TopicController.update);
apiRouter.delete(`${_services_API_API_service__WEBPACK_IMPORTED_MODULE_4__.apiBase}/topics/:id`, ...middlewares, _server_controllers__WEBPACK_IMPORTED_MODULE_3__.TopicController["delete"]);
apiRouter.get(`${_services_API_API_service__WEBPACK_IMPORTED_MODULE_4__.apiBase}/themes/:id`, ...middlewares, _server_controllers__WEBPACK_IMPORTED_MODULE_3__.ThemesController.get);
apiRouter.put(`${_services_API_API_service__WEBPACK_IMPORTED_MODULE_4__.apiBase}/themes/:id`, ...middlewares, _server_controllers__WEBPACK_IMPORTED_MODULE_3__.ThemesController.update);
apiRouter.post(`${_services_API_API_service__WEBPACK_IMPORTED_MODULE_4__.apiBase}/themes`, ...middlewares, _server_controllers__WEBPACK_IMPORTED_MODULE_3__.ThemesController.add);


/***/ }),

/***/ "./src/server/router/appRoutes.ts":
/*!****************************************!*\
  !*** ./src/server/router/appRoutes.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRouter": () => (/* binding */ appRouter)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/routes/routes */ "./src/config/routes/routes.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares */ "./src/server/middlewares/index.ts");



const appRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();

const appRoutes = function getRoutes(routesMap) {
  return Object.values(routesMap).reduce((routes, route) => routes.concat([route.path]), []);
}(_config_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes);

appRoutes.push("/");
appRouter.get(appRoutes, _middlewares__WEBPACK_IMPORTED_MODULE_2__.limiterMiddleware, _middlewares__WEBPACK_IMPORTED_MODULE_2__.serverRenderMiddleware); // NOTE: Если дошли до сюда, то такого роута не существует и нужно сделать redirect или 404

appRouter.get("/*", _middlewares__WEBPACK_IMPORTED_MODULE_2__.redirectMiddleware);


/***/ }),

/***/ "./src/server/router/index.ts":
/*!************************************!*\
  !*** ./src/server/router/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiRouter": () => (/* reexport safe */ _apiRoutes__WEBPACK_IMPORTED_MODULE_1__.apiRouter),
/* harmony export */   "appRouter": () => (/* reexport safe */ _appRoutes__WEBPACK_IMPORTED_MODULE_0__.appRouter),
/* harmony export */   "yandexApiRouter": () => (/* reexport safe */ _yandexApiRoutes__WEBPACK_IMPORTED_MODULE_2__.yandexApiRouter)
/* harmony export */ });
/* harmony import */ var _appRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appRoutes */ "./src/server/router/appRoutes.ts");
/* harmony import */ var _apiRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiRoutes */ "./src/server/router/apiRoutes.ts");
/* harmony import */ var _yandexApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yandexApiRoutes */ "./src/server/router/yandexApiRoutes.ts");




/***/ }),

/***/ "./src/server/router/yandexApiRoutes.ts":
/*!**********************************************!*\
  !*** ./src/server/router/yandexApiRoutes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yandexApiRouter": () => (/* binding */ yandexApiRouter)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_API_API_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/API/API.service */ "./src/services/API/API.service.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares */ "./src/server/middlewares/index.ts");
/* harmony import */ var _server_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/server/middlewares/auth */ "./src/server/middlewares/auth.ts");




const yandexApiRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();
yandexApiRouter.all(`${_services_API_API_service__WEBPACK_IMPORTED_MODULE_1__.base}/*`, _middlewares__WEBPACK_IMPORTED_MODULE_2__.apiProxy, _server_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__.checkAuth);


/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/server/router/index.ts");




const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_1___default()["static"](`${__dirname}`));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(_router__WEBPACK_IMPORTED_MODULE_3__.apiRouter);
app.use(_router__WEBPACK_IMPORTED_MODULE_3__.yandexApiRouter);
app.use(_router__WEBPACK_IMPORTED_MODULE_3__.appRouter);


/***/ }),

/***/ "./src/server/utils/httpStatuses.ts":
/*!******************************************!*\
  !*** ./src/server/utils/httpStatuses.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpStatuses": () => (/* binding */ HttpStatuses)
/* harmony export */ });
let HttpStatuses;

(function (HttpStatuses) {
  HttpStatuses[HttpStatuses["OK"] = 200] = "OK";
  HttpStatuses[HttpStatuses["Created"] = 201] = "Created";
  HttpStatuses[HttpStatuses["Redirect"] = 302] = "Redirect";
  HttpStatuses[HttpStatuses["BadRequest"] = 400] = "BadRequest";
  HttpStatuses[HttpStatuses["Unauthorized"] = 401] = "Unauthorized";
  HttpStatuses[HttpStatuses["Forbidden"] = 403] = "Forbidden";
  HttpStatuses[HttpStatuses["NotFound"] = 404] = "NotFound";
  HttpStatuses[HttpStatuses["ServerError"] = 500] = "ServerError";
})(HttpStatuses || (HttpStatuses = {}));

/***/ }),

/***/ "./src/server/utils/makeHTMLPage.ts":
/*!******************************************!*\
  !*** ./src/server/utils/makeHTMLPage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeHTMLPage": () => (/* binding */ makeHTMLPage)
/* harmony export */ });
/* eslint-disable max-len */
const makeHTMLPage = (hostUrl, content, helmetData, reduxState = {}) => `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link rel="stylesheet" href="${hostUrl}/main.css"> 
                    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
                    ${helmetData.title.toString()}
                    ${helmetData.meta.toString()}
                </head>

                <body>
                    <div id="root">${content}</div>
                    <script>
                        window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
                    </script>
                    <script type="module" src="${hostUrl}/bundle.js"></script>
                </body>
        </html>
    `;
/* eslint-enable max-len */




/***/ }),

/***/ "./src/server/utils/safeDecorator.ts":
/*!*******************************************!*\
  !*** ./src/server/utils/safeDecorator.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSafeDecorator": () => (/* binding */ createSafeDecorator)
/* harmony export */ });
const createSafeDecorator = errorHandler => function safe(target, propertyKey, descriptor) {
  // Запоминаем исходную функцию
  const originalMethod = descriptor.value; // Подменяем ее на нашу обертку

  descriptor.value = function SafeWrapper() {
    // Сохраняем аргументы (req и res)
    // eslint-disable-next-line prefer-rest-params
    const args = arguments; // Заворачиваем в асинхронную обертку, чтобы работал try catch

    const wrapper = async () => {
      try {
        // Вызываем исходный метод
        await originalMethod.apply(this, args);
      } catch (err) {
        // Передаем в handler ошибку и Response
        errorHandler.call(this, err, args[1]);
      }
    };

    wrapper();
  }; // Обновляем дескриптор


  return descriptor;
};

/***/ }),

/***/ "./src/services/API/API.service.ts":
/*!*****************************************!*\
  !*** ./src/services/API/API.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalAPIService": () => (/* binding */ LocalAPIService),
/* harmony export */   "Method": () => (/* binding */ Method),
/* harmony export */   "apiBase": () => (/* binding */ apiBase),
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "root": () => (/* binding */ root)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let Method;

(function (Method) {
  Method["GET"] = "GET";
  Method["POST"] = "POST";
  Method["PUT"] = "PUT";
  Method["PATCH"] = "PATCH";
  Method["DELETE"] = "DELETE";
})(Method || (Method = {}));

const root = "https://ya-praktikum.tech";
const base = "/api/v2";
const apiBase = "/api/local";

class APIService {
  constructor(isLocalBase) {
    _defineProperty(this, "base", void 0);

    this.base = isLocalBase ? apiBase : base;
  }

  async request(method, url, data = {}) {
    const response = await fetch(`${this.base}/${url}`, {
      method,
      mode: "cors",
      // no-cors, *cors, same-origin
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true"
      },
      ...(method !== Method.GET && {
        body: JSON.stringify(data)
      })
    });
    return response ?? null;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new APIService());
const LocalAPIService = new APIService(true);

/***/ }),

/***/ "./src/services/API/index.ts":
/*!***********************************!*\
  !*** ./src/services/API/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalAPIService": () => (/* reexport safe */ _API_service__WEBPACK_IMPORTED_MODULE_0__.LocalAPIService),
/* harmony export */   "Method": () => (/* reexport safe */ _API_service__WEBPACK_IMPORTED_MODULE_0__.Method),
/* harmony export */   "apiBase": () => (/* reexport safe */ _API_service__WEBPACK_IMPORTED_MODULE_0__.apiBase),
/* harmony export */   "base": () => (/* reexport safe */ _API_service__WEBPACK_IMPORTED_MODULE_0__.base),
/* harmony export */   "default": () => (/* reexport safe */ _API_service__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "root": () => (/* reexport safe */ _API_service__WEBPACK_IMPORTED_MODULE_0__.root)
/* harmony export */ });
/* harmony import */ var _API_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.service */ "./src/services/API/API.service.ts");



/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/reducers/profile.reducer */ "./src/reducers/profile.reducer.ts");
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/reducers/auth.reducer */ "./src/reducers/auth.reducer.ts");
/* harmony import */ var _reducers_theme_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/reducers/theme.reducer */ "./src/reducers/theme.reducer.ts");
/* harmony import */ var _reducers_topic_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/reducers/topic.reducer */ "./src/reducers/topic.reducer.ts");
/* harmony import */ var _reducers_leaderboard_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/reducers/leaderboard.reducer */ "./src/reducers/leaderboard.reducer.ts");
/* harmony import */ var _helpers_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/environment */ "./src/helpers/environment.ts");
/* harmony import */ var _reducers_forum_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/reducers/forum.reducer */ "./src/reducers/forum.reducer.ts");









const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  auth: _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.authReducer,
  profile: _reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_2__.profileReducer,
  leaderBoard: _reducers_leaderboard_reducer__WEBPACK_IMPORTED_MODULE_6__.leaderBoardReducer,
  theme: _reducers_theme_reducer__WEBPACK_IMPORTED_MODULE_4__.themeReducer,
  forum: _reducers_forum_reducer__WEBPACK_IMPORTED_MODULE_8__.forumReducer,
  topic: _reducers_topic_reducer__WEBPACK_IMPORTED_MODULE_5__.topicReducer
});
const initialState = !_helpers_environment__WEBPACK_IMPORTED_MODULE_7__.isServer ? window.__INITIAL_STATE__ : {};

const configureStore = () => (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer, initialState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())), !_helpers_environment__WEBPACK_IMPORTED_MODULE_7__.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configureStore);

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/App/App.module.scss":
/*!********************************************!*\
  !*** ./src/components/App/App.module.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"App":"d6rBLli3BagIoSgKy2ws","title":"UAUK2yU1qb5KDEJM4sbz"});

/***/ }),

/***/ "./src/components/Container/Container.module.scss":
/*!********************************************************!*\
  !*** ./src/components/Container/Container.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"kJXI1z3_FtxH2idolQUx"});

/***/ }),

/***/ "./src/components/GameModal/GameModal.module.scss":
/*!********************************************************!*\
  !*** ./src/components/GameModal/GameModal.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"buttonContainer":"ultcbUs8Qt8tCIj5tXOH","gameModal":"xIdsnPhxwe4Zq0BRMNiF","title":"DuSwT0NBq2F0kQETkcW_"});

/***/ }),

/***/ "./src/components/Header/Header.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/Header.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"mTFHSVjnSUFdoSnWwGhe","logo":"AQj0qjGusBKgpXIQViBm","logoMainSymbol":"aNbRr60ArYUg5LfoQFU1","buttonContainer":"zVYRLMeG9dFBljEerzGQ","routesContainer":"XUShHu6oinx4l6jUlqoK","signUp":"HEQhGHtynWtNqUFywT1T","signIn":"AprMwPhjHqR_T2NfcvnM"});

/***/ }),

/***/ "./src/components/NavBar/NavBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/NavBar/NavBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ulContainer":"FGIBGaQePsS7MPrLD6AI","ul":"VhefOyE6KqL2INmTvax_","active":"eb4qUgSDxGoiL722sZWU","inactive":"FeWI55JQiPAKhK8Rt5kQ"});

/***/ }),

/***/ "./src/components/PageLoader/PageLoader.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/PageLoader/PageLoader.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"init":"NK4oWEno3OTBZGk14ybv","loading":"E504S1U9EEZmM5IH4xUx","spinner":"kySekU_9UevbfgBcgQyY"});

/***/ }),

/***/ "./src/pages/Error/Error.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/Error/Error.module.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"title":"ZysAcaq2wqNhjy8Izjfx","info":"OdAUtezfXOkkacFZbGNV","notFound":"_oqEYBV8I5tzU_K4b01Q","container":"hvuBUQ5BuCflJ3z7EgLb","errorContainer":"a9XtgsE_WJB8ErZLTHBl","back":"H7clTc6gQPwiqxfv0oHg"});

/***/ }),

/***/ "./src/pages/Forum/Forum.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/Forum/Forum.module.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tableContainer":"h4pJAZ6ZYAtiycUJJW3g","title":"S_BnvX9K7zmCBzCnTxlY","counter":"Vu0ebY7tJswaf1LhSZfy","buttonContainer":"Z90jr4hKQ5ZF2P5MiEzw"});

/***/ }),

/***/ "./src/pages/Game/Game.module.scss":
/*!*****************************************!*\
  !*** ./src/pages/Game/Game.module.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"game":"KQGV7dUqbgjYs1ZwpxXx"});

/***/ }),

/***/ "./src/pages/Game/Menu/Main.module.scss":
/*!**********************************************!*\
  !*** ./src/pages/Game/Menu/Main.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"buttonContainer":"VJBHhg7XFDtxeSNUAZDw","title":"eFlcKTx78Wlv2EtRSPio"});

/***/ }),

/***/ "./src/pages/Leaderboard/LeaderBoard.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/Leaderboard/LeaderBoard.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"leaderBoardContainer":"VNtOnQ9u1eqRD7cD6rL3","leaderBoardTable":"L3SZByFwQnpU08n5SPsJ","nameContainer":"HcjLexU_ULLT64Fy5m_N","nameActive":"A9tTBCkPNUB1VMe4nsR2","nameBanned":"SyFk3md3WBR2rgiLvKh5"});

/***/ }),

/***/ "./src/pages/Leaderboard/components/Pagination/Pagination.module.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/Leaderboard/components/Pagination/Pagination.module.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"shyebdQ7V79WnyJEEzeC","buttonRight":"bCl2fYvnr1euix4tqdmM"});

/***/ }),

/***/ "./src/pages/Main/Main.module.scss":
/*!*****************************************!*\
  !*** ./src/pages/Main/Main.module.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"pAZsGDSIwHLk6FyMvuHq","infoContainer":"SCceGicoKjZbSFCUBNKH","title":"jmDUZnAIerxVoLf7HHyx","titleMain":"DSp6h4AcHxJnmSxh5kSL","info":"oautDfGR7aAKuM_pwWJO","gameHref":"cXj9rBw90d6eB9h24ZiA"});

/***/ }),

/***/ "./src/pages/Offline/Offline.module.scss":
/*!***********************************************!*\
  !*** ./src/pages/Offline/Offline.module.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"title":"wN3ZAMOwZkdEOLnck1VB","info":"WgBzMCi6qYIjWHRWiYJo","notFound":"Au51wDy14LIeKsXdlStJ","container":"aNybNIFFW5NPE8XGbE8a","errorContainer":"pRiz7GMS75rLbl0hQ3MK","back":"F5BSP_DuF2JWJpELV9l9"});

/***/ }),

/***/ "./src/pages/Profile/Profile.module.scss":
/*!***********************************************!*\
  !*** ./src/pages/Profile/Profile.module.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"formContainer":"NeTQGkuyOTT60EAvRHMH","formInnerContainer":"nNNqd4uYzsCMlqnKPxLF","imageEmpty":"qGDfz5gGyncaGneQYXco"});

/***/ }),

/***/ "./src/pages/Profile/components/FormControls/FormControls.module.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/Profile/components/FormControls/FormControls.module.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"cancelButton":"XcpXT3fVczqQykjGsWKX"});

/***/ }),

/***/ "./src/pages/SignIn/SignIn.module.scss":
/*!*********************************************!*\
  !*** ./src/pages/SignIn/SignIn.module.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"formContainer":"C9kTxACIRCoIHh4xS7yE"});

/***/ }),

/***/ "./src/pages/SignIn/YandexSignIn/YandexSignIn.module.scss":
/*!****************************************************************!*\
  !*** ./src/pages/SignIn/YandexSignIn/YandexSignIn.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"link":"yHwKfZYQBg7DNphUOjwh","icon":"tsI5LJ1GqWtO8I4zgmyX"});

/***/ }),

/***/ "./src/pages/SignUp/SignUp.module.scss":
/*!*********************************************!*\
  !*** ./src/pages/SignUp/SignUp.module.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"formContainer":"_4r4fQwgzOuwIOzlNjdva"});

/***/ }),

/***/ "./src/pages/Topic/Comment/Comment.module.scss":
/*!*****************************************************!*\
  !*** ./src/pages/Topic/Comment/Comment.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"comment":"TspRTE2G39H6tAirzKZs","ant-comment-content-author-name":"l3_WNbYCgL44Ir5PsAEw"});

/***/ }),

/***/ "./src/pages/Topic/CommentInput/CommentInput.module.scss":
/*!***************************************************************!*\
  !*** ./src/pages/Topic/CommentInput/CommentInput.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"bTNmpK1ju_yi_nGhJ8V7","buttonContainer":"Tn1PaCwUlNzlPDXni40j"});

/***/ }),

/***/ "./src/pages/Topic/Topic.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/Topic/Topic.module.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"VRShYKvDw5s7uMOjoJ0w","comments":"rEOOn71v_anhyYGzSuIJ"});

/***/ }),

/***/ "./src/pages/TopicEdit/TopicEdit.module.scss":
/*!***************************************************!*\
  !*** ./src/pages/TopicEdit/TopicEdit.module.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"tVA28iwOv6hGtnPiEqJV","title":"bsDM8hjmhcRnrixWOtoO"});

/***/ }),

/***/ "./assets/images/default_profile.png":
/*!*******************************************!*\
  !*** ./assets/images/default_profile.png ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./assets/tileset.png":
/*!****************************!*\
  !*** ./assets/tileset.png ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "antd/lib/form/Form":
/*!*************************************!*\
  !*** external "antd/lib/form/Form" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/form/Form");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-rate-limit");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("http-proxy-middleware");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");

/***/ }),

/***/ "sequelize-typescript":
/*!***************************************!*\
  !*** external "sequelize-typescript" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize-typescript");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/server/server.ts");
/* harmony import */ var _db_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db/init */ "./src/server/db/init.ts");


const port = process.env.PORT || 3000;
const DB = (0,_db_init__WEBPACK_IMPORTED_MODULE_1__.createSequelize)();
DB?.authenticate().then(() => console.log("db connected")).catch(err => console.error("db error: ", err));
_server__WEBPACK_IMPORTED_MODULE_0__.app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=server.js.map