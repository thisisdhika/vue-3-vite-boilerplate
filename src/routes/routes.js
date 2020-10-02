import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'

export const redirectPaths = { unAuthenticated: SignIn().path, authenticated: Home().path }
export default [Home(), SignIn(), SignUp()]
