import createHistory from 'history/createHashHistory'
const history = createHistory()

const users = [{
	user: 'admin',
	password: 'admin'
}];

const checkLogin = (user, password) => {
	for (var i = users.length - 1; i >= 0; i--) {
		if(users[i].user==user && users[i].password==password){
			return true;
		}
	}
	return false;
}

export const auth  = () => {
	debugger
    if(localStorage.getItem('token') === null) {
    	history.push('/login')
    }
}

export const login = (user, password) => {
	if(checkLogin(user, password)) {
		localStorage.setItem('token', 'true');
	} else {
		return 'User or password was wrong!';
	}
}