import './style.scss'
import {LOCAL_STORAGE} from '../../../constants';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../../hooks';
import {useEffect, useMemo, useState} from 'react';
import qs = require('qs');
import {serviceLogin} from './login.service';
import {loginByToken, SET_USER_INFO} from '../../../store/userSlice';
import {isEmpty} from 'lodash';
// @ts-ignore
import logo from '../../../assets/img/common/logo.png'

const LOGIN_NAME = localStorage.getItem(LOCAL_STORAGE.LOGIN_NAME) || ''

export default function () {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)

  const redirectUrl = useMemo(() => {
    const url = qs.parse(location.search).redirectUrl as string
    return url || '/home/index'
  }, [])

  const handleSubmit = async () => {
    try {
      setLoading(true)
      serviceLogin({
        loginName: "",
        password: ""
      })
        .then(res => {
          setLoading(false)
          dispatch(SET_USER_INFO(res.userInfo))
          navigate(redirectUrl, { replace: true })
        })
        .catch(() => {
          setLoading(false)
        })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const query = qs.parse(location.search)
    const { token, state } = query

    if (Number(state) === 0) {
      //TODO change it to the snackbar
      console.error('Authorization failed, please log in again')
      return
    }

    if (token) {
      dispatch(loginByToken(token as string))
      .then((res: any) => {
        if (!isEmpty(res.userInfo)) {
          navigate(redirectUrl, { replace: true })
        }
      })
    }
    // eslint-disable-next-line no-restricted-globals
  }, [history, location.search])

  return (
    <section className="login-page">
      <div className="wrap">
        <div>
          <div className="logo-wrap">
            <img src={logo} className="logo" alt="" />
            <em>Login page title</em>
          </div>

          <form action="src/app/modules/login/index">
            <input type="text"/>
            <input type="text"/>
          </form>
        </div>
      </div>
    </section>
  )
}
