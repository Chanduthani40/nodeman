import React,{useState} from "react";
import profile1 from "../../../assets/images/profile-1.jpg";

const CreatePostCard = ({contentPost,setContentPost}) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(file);
  };


  const handlePostContent = (event) => {
    setContentPost(event.target.value)
  }
  console.log(selectedPhoto,"the selected post is :")
  return (
    <form class="create-post">
      <div class="profile-photo">
        <img src={profile1} alt="" />
      </div>
      <div class="post-body">
        <div class="post-info">
          <h5>Diana Ayi</h5>
          <p class="text-muted">@dayi</p>
        </div>
        <div class="input-post">
          <input onChange={handlePostContent}
            type="text"
            placeholder="what's on your mind?"
            id="create-post"
          />
        </div>
        <div class="action-button">
          <div class="upload">
            <label for="file-upload">
              <span>
                <i class="uil uil-upload"></i>
              </span>
                <h5>Upload</h5>
            </label>
            <input id="file-upload" onChange={handleFileChange} type="file" style={{ display: "none" }} />
          </div>
          <div class="post-submit">
            <input type="submit" value="post" class="btn btn-primary" />
          </div>
        </div>
        {selectedPhoto && (
        <div className="uploaded-photo">
          <img src={URL.createObjectURL(selectedPhoto)} alt="Uploaded" />
        </div>
      )}
      </div>
    </form>
  );
};

export default CreatePostCard;
