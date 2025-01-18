import { useState } from "react";
import "./App.css";
import ImageUploader from "./components/ImageUploader";
import ImageList from "./components/ImageList";

function App() {
  return (
    <div>
      <ImageUploader fetchImages={() => {}} />
      <ImageList />
    </div>
  );
}

export default App;
