// import createHistory from 'history/createHashHistory'
// const history = createHistory()
import { saveData, readData, removeData } from '../utils/cookie'

const users = [{
	user: 'admin',
	password: 'admin'
}, {
	user: '16894',
	password: '16894'
}, {
	user: '85367',
	password: '85367'
}, {
	user: '76241',
	password: '76241'
}, {
	user: '37621',
	password: '37621'
}, {
	user: '46982',
	password: '46982'
}, {
	user: '75632',
	password: '75632'
}];

const checkLogin = (user, password) => {
	for (var i = users.length - 1; i >= 0; i--) {
		if(users[i].user==user && users[i].password==password){
			return true;
		}
	}
	return false;
}

export const auth = () => {
	// debugger
	// return localStorage.getItem('token') !== null
	return readData('token') !== null

    // if(localStorage.getItem('token') === null) {
    // 	history.push('/login')
    // }
}

export const logout = () => {
	// localStorage.removeItem('token');
	removeData('token');
	return ({
		type: 'LOGOUT'
	});
}

export const login = (user, password) => {
	if(checkLogin(user, password)) {
		const token = Math.random().toString(36).substr(2);
		// const exp = (Date.now() / 1000) + 60*30;
		// localStorage.setItem('token', '{"token":"' + token + '", "exp":' + exp + '}');
		saveData('token', token, 30);
		return ({
			type: 'LOGIN',
    		isLoggedIn: true,
    		token: token
		});
	} else {
		// return 'User or password was wrong!';
		return ({
			type: 'LOGIN',
    		isLoggedIn: false,
    		error: 'User or password was wrong!'
		});
	}
}