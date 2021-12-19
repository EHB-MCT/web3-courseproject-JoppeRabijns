import { Link } from "react-router-dom";
import "./upload.css";

function Upload(props) {
  let File = 0;
  var size;

  function fileUpload() {
    File = document.getElementById("fileUpload").files[0].size;
    size = File / 1024;
    localStorage.setItem("size", size);
  }

  function change() {
    document.getElementById("title").innerHTML = "Model uploaded!";
    document.getElementById("uploadForm").style.display = "none";
  }

  return (
    <div className="upload">
      <h1 id="title" className="uploadTitle">
        <span className="title">Upload</span>
        <br />
        your 3D-asset
      </h1>
      <form
        id="uploadForm"
        encType="multipart/form-data"
        action="http://localhost:4000/model"
        method="post"
        onSubmit={change}
      >
        <label htmlFor="model"> 3d model </label>
        <input type="file" name="model" id="fileUpload" onChange={fileUpload} />
        <br />
        <label htmlFor="title"> title </label>
        <input type="text" name="title" />
        <br />
        <label htmlFor="creator"> creator </label>
        <input type="text" name="creator" />
        <br />
        <input
          hidden
          type="text"
          value={localStorage.getItem("size")}
          name="size"
        />
        <input type="submit" value="Upload asset" name="submit" />
      </form>
      <Link to="/">
        <div className="prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z" />
          </svg>
          <h6 className="back">back</h6>
        </div>
      </Link>
    </div>
  );
}

export default Upload;
