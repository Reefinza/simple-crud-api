const jwt = require('jsonwebtoken');
const AuthenticationService = (userService) => {
    const { findUserByUsernamePassword } = userService;
    const login = async (payload) => {
        const user =
            await findUserByUsernamePassword(
                payload.username,
                payload.password
            );
        console.log('AuthenticationService.user:', user)
        if (!user) return `Invalid account!`;
        // TOKEN
        const {TOKEN_SECRET, TOKEN_EXPIRATION, TOKEN_ALGORITHM} = process.env;
        //jwt.sign({payload},secretKey,{expirationTime,algorithm,etc},callback)
        const token = jwt.sign({
            username: user.username,
            email: user.email,
        }, TOKEN_SECRET, {expiresIn: TOKEN_EXPIRATION/*, algorithm: TOKEN_ALGORITHM*/}, null);
        return token;
    }

    const logout = () => {}
    const forgotPassword = () => {}
    return {
        login, logout, forgotPassword
    }
}
module.exports = AuthenticationService;