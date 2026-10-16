import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Contact from './pages/Contact'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/iwamad-sis2-blog">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}