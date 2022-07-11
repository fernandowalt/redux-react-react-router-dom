/** @format */

import { SHOW_ALERT } from "../types";

export const showAlert = alert => {
	return dispatch => {
		dispatch(createAlert(alert));
	};
};

const createAlert = alert => ({
	type: SHOW_ALERT,
	payload: alert,
});
