import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { lazy } from 'react'
const Signup = lazy(()=>import('./webpages/Signup'))
const Signin = lazy(()=>import('./webpages/Signin'))
const Dashboard = lazy(()=>import('./webpages/Dashboard'))
const SendMoney = lazy(()=>import('./webpages/SendMoney'))
import { Suspense } from 'react'
import { RecoilRoot } from 'recoil'

function App() {

  return <div>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Suspense fallback={'Loading...'}><Signup/></Suspense>}></Route>
          <Route path='/signin' element={<Suspense fallback={'Loading...'}><Signin/></Suspense>}></Route>
          <Route path='/dashboard' element={<Suspense fallback={'Loading...'}><Dashboard/></Suspense>}></Route>
          <Route path='/send' element={<Suspense fallback={'Loading...'}><SendMoney/></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </div>
}

export default App
