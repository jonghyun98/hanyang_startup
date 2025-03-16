import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LectureDetailPage from './pages/LectureDetailPage'
import ClassDetailPage from './pages/ClassDetailPage'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* 주차별 강의 페이지 - /lectures/:weekId */}
        <Route path="/lectures/:weekId" element={<LectureDetailPage />} />
        <Route path="/lecture/:weekId" element={<LectureDetailPage />} />
        
        {/* 세부 교시 페이지 - /lectures/:lectureId/classes/:classId */}
        <Route path="/lectures/:lectureId/classes/:classId" element={<ClassDetailPage />} />
        <Route path="/lecture/:lectureId/class/:classId" element={<ClassDetailPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
