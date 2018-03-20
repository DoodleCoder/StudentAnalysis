import { BASE_API_URL } from '../config'

export const REQUEST_STUDENT_DATA = 'REQUEST_STUDENT_DATA'
export const RECEIVE_STUDENT_DATA = 'RECEIVE_STUDENT_DATA'

const requestStudentData = () => ({
	type: REQUEST_STUDENT_DATA,
})

const receiveStudentData = (error, data) => ({
	type: RECEIVE_STUDENT_DATA, 
	data: data,
	error: error,
})

export const getStudentData = () => {
	return (dispatch) => {
		dispatch(requestStudentData())
		return fetch(BASE_API_URL + 'get_student_data/')
				.then(data => data.json())
				.then(json => dispatch(receiveStudentData(json.error, json.info)))
				.catch(err => dispatch(receiveStudentData(false)))
	}
}