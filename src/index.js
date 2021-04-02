import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/imageFileInput/Image_file_input";

const authService = new AuthService();
const imageUploader = new ImageUploader();

const FileInput = (props) => (
    <ImageFileInput {...props}  imageUploader={imageUploader} />
)
ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);

