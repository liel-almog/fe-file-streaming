import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./upload-files.module.scss";
import { faArrowUpFromBracket, faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { Button, Upload } from "antd";
const { Dragger } = Upload;

export interface UploadFilesProps {}

export const UploadFiles = () => {
  return (
    <section className={classes.container}>
      <h2>Upload your files</h2>
      <Dragger className={classes.uploadingSection} multiple>
        <p className="ant-upload-drag-icon">
          <FontAwesomeIcon color="grey" size="3x" icon={faArrowUpFromBracket} />
        </p>
        <article className="ant-upload-text">
          <p>Drag 'n' drop some files here, or click to select files</p>
          <br />
          <Button size="large" icon={<FontAwesomeIcon size="lg" icon={faFileUpload} />}>
            Upload
          </Button>
        </article>
      </Dragger>
    </section>
  );
};
