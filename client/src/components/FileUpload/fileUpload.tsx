import React from "react";
import { CSSProperties, ChangeEvent, Component } from "react";
import style from "./FileUpload.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

const inputUploadFileStyle = {
    display: "none",
};

const buttonUploadFileStyle = {
    margin: 8,
    cursor: "pointer", // Ensure the cursor changes to a pointer on hover
};

// component own props
interface UploadFileOwnProps {}

// component props
interface UploadFileProps extends UploadFileOwnProps {}

// component State
interface UploadFileStateProps {}

class UploadFileComponent extends Component<UploadFileProps, UploadFileStateProps> {
    // function to read file as binary and return
    private getFileFromInput(file: File): Promise<any> {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.readAsBinaryString(file); // here the file can be read in different way Text, DataUrl, ArrayBuffer
        });
    }

    private async manageUploadedFile(binary: String, file: File) {
        // do what you need with your file (fetch POST, ect ....)
        console.log(`The file size is ${binary.length}`);
        console.log(`The file name is ${file.name}`);
        try {
            const url = 'http://localhost:8080/api/v1/fileUpload';
    
            const formData = new FormData();
            formData.append('file', file);
    
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });
    
            const data = await response.json();
            console.log('File uploaded successfully:', data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    private fileInputRef: React.RefObject<HTMLInputElement>;

    constructor(props: UploadFileProps) {
        super(props);
        this.fileInputRef = React.createRef();
        
        this.handleFileChange = this.handleFileChange.bind(this);
    }
    private handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        event.persist();
    
        const files = event.target.files;
    
        if (files) {
            // const self = this; // Gán this vào một biến self
    
            Array.from(files).forEach((file) => {
                console.log(file);
                console.log(this);
                
                
                this.getFileFromInput(file)
                    .then( (binary) => {
                        this.manageUploadedFile(binary, file);
                    })
                    .catch(function (reason) {
                        console.log(`Error during upload ${reason}`);
                        event.target.value = ""; // to allow upload of the same file if an error occurs
                    });
            });
        }
    }
    
    
    private handleButtonClick = () => {
        if (this.fileInputRef.current) {
            this.fileInputRef.current.click();
        }
    };

    public render(): JSX.Element {
        return (
            <>
                <input
                    ref={this.fileInputRef}
                    accept="image/*"
                    style={inputUploadFileStyle}
                    id="file"
                    multiple={true}
                    type="file"
                    onChange={this.handleFileChange}
                />
                <label htmlFor="file">
                    <button className={cx("btn_upload")} style={buttonUploadFileStyle} onClick={this.handleButtonClick}>
                        Upload
                    </button>
                </label>
            </>
        );
    }
}

export default UploadFileComponent;
