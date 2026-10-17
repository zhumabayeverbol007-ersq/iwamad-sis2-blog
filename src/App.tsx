import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/iwamad-sis2-blog">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signin" element={<SignIn />} />
            
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}