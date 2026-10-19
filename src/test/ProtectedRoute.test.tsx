import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import ProtectedRoute from '../components/ProtectedRoute'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'

describe('ProtectedRoute', () => {
  it('redirects to signin when signed out', () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={['/dashboard']}>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </AuthProvider>
    )
    expect(screen.getByRole('heading', { name: 'Sign In' })).toBeInTheDocument()
  })
})