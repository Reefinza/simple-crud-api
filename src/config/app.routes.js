const Routes = () => {
    const ERROR_PATH = '/error';
    const POST_EMPLOYEE = '/employee';
    const GET_EMPLOYEE_LIST = '/employee';
    const GET_EMPLOYEE = '/employee/:id';
    const PUT_EMPLOYEE = '/employee';
    const DELETE_EMPLOYEE = '/employee/:id';
    const POST_USERS = '/users';
    const GET_USERS_LIST = '/users';
    const GET_USERS = '/users/:id';
    const PUT_USERS = '/users' || '/users/:id';
    const DELETE_USERS = '/users/:id';

    return {
        POST_EMPLOYEE, GET_EMPLOYEE_LIST, GET_EMPLOYEE, PUT_EMPLOYEE, DELETE_EMPLOYEE, POST_USERS, GET_USERS_LIST, GET_USERS, PUT_USERS, DELETE_USERS, ERROR_PATH
    }
}

module.exports = Routes;
