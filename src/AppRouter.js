import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import LessonDetails from './components/LessonDetails';
import CreateNews from './components/create-news/CreateNews';
import SuccessPage from './components/shared/SuccessPage';

export class AppRouter extends Component {
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="lesson" element={<LessonDetails />} />
                    <Route path='news-create' element={<CreateNews />} />
                    <Route path='success/:id' element={<SuccessPage />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default AppRouter;